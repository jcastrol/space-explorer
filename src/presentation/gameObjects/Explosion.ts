import Phaser from 'phaser';
export default class Explosion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'explosion');
        this.scene = scene;
        this.scene.add.existing(this);
        this.anims.create({
          key: "animacion",
          frames: this.anims.generateFrameNumbers("explosion", {
            start: 0,
            end: 17,
          }),
          frameRate: 8,
          repeat: 1,
        });
        this.play('explode');
    }
    setPosition(x?: number | undefined, y?: number | undefined, ): this {
        if (x && y) {
            this.x = x;
            this.y = y;
        }
        return this;
      
    }
}