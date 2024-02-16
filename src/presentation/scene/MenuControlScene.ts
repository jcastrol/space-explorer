import { GameState } from "../../core/constants/gameText";
import Score from "../../core/model/Score";


import MenuControlService from "../../core/services/MenuControlService";
import { CardMenuControl } from "../components/CardMenuControl";

export class MenuControlScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuControlScene", active: false });
  }

  create(): void { 
    const screenWidth = this.sys.game.config.width as number;
    const screenHeight = this.sys.game.config.height as number;
    const gameSceneData = this.scene.get("GameScene").data;
    const stateGame:GameState = gameSceneData.get("stateGame");
    const score:Score = gameSceneData.get("score");

    const menucontrol= new MenuControlService();

    const {x:areaX,y:areaY,width:areaWidth,height:areaHeight}=menucontrol.getPositionCard(screenWidth,screenHeight,stateGame || GameState.Start);

    // Crear la cardMenuControl
    CardMenuControl(this,{areaX,areaY,areaWidth,areaHeight},menucontrol.getMenuTitle(stateGame),menucontrol.getMenuButton(stateGame),score.getScore())
    
    
   
  }
}