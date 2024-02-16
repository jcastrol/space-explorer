import { Scene } from "phaser";
import { WIDTH } from "../../core/constants/sizeWindow";

export const PauseButton = (scene:Scene,handlerPause:()=>void) => {
  const pauseButton = scene.add.container(WIDTH - 50, 20);
  pauseButton.setSize(50, 50);

  // Agregar los rectángulos al contenedor
  const rect1 = scene.add.rectangle(0, 0, 10, 30, 0xffffff);
  const rect2 = scene.add.rectangle(20, 0, 10, 30, 0xffffff);

  // Agregar los rectángulos al contenedor
  pauseButton.add(rect1);
  pauseButton.add(rect2);
  pauseButton.scale = 0.5;
  pauseButton.depth = 1;

  // Habilitar la interactividad para el contenedor
  pauseButton.setInteractive();
  pauseButton.on(
    "pointerup",
    handlerPause,
    scene
  );
  return pauseButton;
};