import { config } from './config/config';
import './style.css'


 new Phaser.Game(config);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Space Explore</h1>
` 


