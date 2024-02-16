import { Scene } from "phaser";
import {
  HEIGHT,
  WIDTH,
  instructionsPosition,
  textPosition,
} from "../../core/constants/sizeWindow";
import {
  GameState,
  instructionsString,
  titleMenuObject,
} from "../../core/constants/gameText";
type Size = {
  areaX: number;
  areaY: number;
  areaWidth: number;
  areaHeight: number;
};
export const CardMenuControl = (
  scene: Scene,
  size: Size,
  title: string,
  textButton: string,
  score: number
) => {
  const { areaX, areaY, areaWidth, areaHeight } = size;
  const handleButton = () => {
    if (textButton === "Restart") {
      scene.scene.stop();
      scene.scene.stop("GameScene");
      scene.scene.start("GameScene");
    } else {
      scene.scene.stop();
      scene.scene.resume("GameScene");
    }
  };
  const graphics = scene.add.graphics();
  graphics.fillStyle(0x001f3f);
  graphics.fillRect(areaX, areaY, areaWidth, areaHeight);
  graphics.lineStyle(5, 0x9400d3);
  graphics.strokeRoundedRect(areaX, areaY, areaWidth, areaHeight, 10);

  const titleText = scene.add.text(
    areaX + areaWidth / 2,
    areaY +
      (title === titleMenuObject[GameState.Start]
        ? instructionsPosition.titleText.y
        : textPosition.titleText.y),
    title,
    {
      fontSize: "30px",
      color: "#ffffff",
    }
  );
  titleText.setOrigin(0.5);

  // Agregar texto del puntaje

  const centerText = scene.add.text(
    areaX + areaWidth / 2,
    areaY +
      (title === titleMenuObject[GameState.Start]
        ? instructionsPosition.centerText.y
        : textPosition.centerText.y),
    title === titleMenuObject[GameState.Start]
      ? instructionsString
      : `Score: ${score}`,
    {
      fontSize: "18px",
      color: "#ffffff",
    }
  );
  centerText.setOrigin(0.5);

  const scoreButton = scene.add.text(
    areaX + areaWidth / 2,
    areaY +
      (title === titleMenuObject[GameState.Start]
        ? instructionsPosition.scoreButton.y
        : textPosition.scoreButton.y),
    textButton,
    {
      fontSize: "18px",
      fontFamily: "Arial",
      color: "#ffffff",
      backgroundColor: "#9400D3",
      padding: { x: 10, y: 5 },
    }
  );
  scoreButton.setOrigin(0.5);
  scoreButton.setInteractive();
  scoreButton.on("pointerup", handleButton, scene);
  const pauseMenu = scene.add.container(0, 0, [
    graphics,
    titleText,
    centerText,
    scoreButton,
  ]);
  pauseMenu.setSize(WIDTH, HEIGHT);
  pauseMenu.setInteractive();
  pauseMenu.depth = 1;
};
