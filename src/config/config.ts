import Phaser from "phaser";
import { HEIGHT, WIDTH } from "../core/constants/sizeWindow";
import { MenuControlScene } from "../presentation/scene/MenuControlScene";
import { GameScene } from "../presentation/scene/GameScene";


export const config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  backgroundColor: '#2d2d2d',
  parent: 'game',
  physics: {
      default: 'arcade',
      arcade: {
          debug: false,
          gravity: { y: 0 }
      }
  },
  scene: [ GameScene,MenuControlScene]
};