class Asteroid extends Phaser.GameObjects.Image{
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);
    (this.body as Phaser.Physics.Arcade.Body).immovable=true;
  }
  public setVelocityX(velocity: number) {
    (this.body as Phaser.Physics.Arcade.Body).setVelocityX(velocity);
  }
  public setVelocityY(velocity: number) {
    (this.body as Phaser.Physics.Arcade.Body).setVelocityY(velocity);
  }
  public setPositionX(x: number) {
    
      (this.body as Phaser.Physics.Arcade.Body).x = x;
    
  }
  public setPositionY(y: number) {
    
      (this.body as Phaser.Physics.Arcade.Body).y = y;
    
  }
}

export default Asteroid;