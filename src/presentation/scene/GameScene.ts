import Phaser from "phaser";
import Asteroid from "../gameObjects/Asteroid";

import Score from "../../core/model/Score";
import { HEIGHT, WIDTH } from "../../core/constants/sizeWindow";
import { PauseButton } from "../components/PauseButton";
import { keyVelocities } from "../../core/constants/gameFuntionality";
import { GameState } from "../../core/constants/gameText";
import Ship from "../gameObjects/Ship";
import Explosion from "../gameObjects/Explosion";
import { assets } from "../../core/constants/assets";

export class GameScene extends Phaser.Scene {
  private asteroids: Asteroid[] = [];
  private score: Score;
  private text!: Phaser.GameObjects.Text;
  private ship!: Ship;
  private cursor!: Phaser.Types.Input.Keyboard.CursorKeys;
  private explosion!: Explosion;

  constructor() {
    super({ key: "GameScene" });
    this.score = new Score();
  }

  preload(): void {
    // Cargar los recursos necesarios para la escena
    this.load.image(assets.asteroid1[0], assets.asteroid1[1]);
    this.load.image(assets.asteroid2[0], assets.asteroid2[1]);
    this.load.image(assets.asteroid3[0], assets.asteroid3[1]);
    this.load.image(assets.player[0], assets.player[1]);
    this.load.spritesheet(assets.explosion[0], assets.explosion[1], {
      frameWidth: 64, // Ancho de cada cuadro del sprite
      frameHeight: 64, // Alto de cada cuadro del sprite
    });
  }

  create(): void {
    // this.explosion.anims.play("animacion");
    this.initializeGame();
    this.createPauseButton();

    this.text = this.add.text(15, 10, `Score:0 `, {
      fontSize: 25,
      color: "#ffffff",
    });
    this.text.depth = 1;
    this.ship = new Ship(this, WIDTH / 2, HEIGHT - 100, "player");

    this.initializeAsteroids();

    if (this.input.keyboard) {
      this.cursor = this.input.keyboard.createCursorKeys();
    }

    this.setupCollisions();
  }

  update(): void {
    this.updateAsteroidsPosition();
    this.velocityKeys();
  }
  
  private velocityKeys(): void {
    const velocity = { x: 0, y: 0 };

    // Itera sobre las teclas y actualiza la velocidad según las teclas presionadas
    Object.keys(keyVelocities).forEach((key) => {
      if (this.cursor?.[key as keyof typeof keyVelocities].isDown) {
        velocity.x += keyVelocities[key as keyof typeof keyVelocities].x;
        velocity.y += keyVelocities[key as keyof typeof keyVelocities].y;
      }
    });

    // Aplica la velocidad a la nave
    this.ship.setVelocity(velocity.x, velocity.y);
  }

  handlerPause(): void {
    this.data.set("stateGame", GameState.Pause);
    this.data.set("score", this.score);
    this.scene.pause();
    this.scene.launch("MenuControlScene");
  }

  private initializeGame(): void {
    this.score.resetScore();
    this.data.set("stateGame", GameState.Start);
    this.data.set("score", this.score);
    this.scene.pause();
    this.scene.launch("MenuControlScene");
    this.explosion = new Explosion(this, -60, -60);
  }

  private createPauseButton(): void {
    PauseButton(this, this.pauseGame.bind(this));
  }

  private pauseGame(): void {
    this.data.set("stateGame", GameState.Pause);
    this.data.set("score", this.score);
    this.scene.pause();
    this.scene.launch("MenuControlScene");
  }

  private initializeAsteroids(): void {
    const screenWidth = this.sys.game.config.width as number;
    for (let i = 0; i < 70; i++) {
      const asteroidType = `asteroid${Phaser.Math.Between(1, 3)}`;
      const asteroidY = -10 - 70 * i;
      const asteroidX = Math.random() * screenWidth;
      const newAsteroid = new Asteroid(
        this,
        asteroidX,
        asteroidY,
        asteroidType
      );
      newAsteroid.setVelocityY(Phaser.Math.Between(170, 100));
      this.asteroids.push(newAsteroid);
    }
  }

  private setupCollisions(): void {
    this.asteroids.forEach((asteroid) => {
      this.physics.add.collider(
        this.ship,
        asteroid,
        this.handleShipAsteroidCollision.bind(this),
        undefined,
        this
      );
    });
  }

  private handleShipAsteroidCollision(sprite1, sprite2): void {
    const x = (sprite1.x + sprite2.x) / 2;
    const y = (sprite1.y + sprite2.y) / 2;

    this.explosion.setPosition(x, y);
    this.explosion.setDepth(1);
    // Reproducir la animación
    this.data.set("stateGame", GameState.Finish);
    this.data.set("score", this.score);
    this.scene.pause();
    this.scene.launch("MenuControlScene");
  }

  private updateAsteroidsPosition(): void {
    this.asteroids.forEach((asteroid) => {
      if (asteroid.y > HEIGHT) {
        this.score.addScore();
        if (this.text) {
          this.text.setText(`Score:${this.score.getScore()}`);
        }
        asteroid.setPositionY(-50 * 66);
        asteroid.x = Math.random() * WIDTH;
        asteroid.setVelocityY(Phaser.Math.Between(170, 100));
      }
    });
  }
}
