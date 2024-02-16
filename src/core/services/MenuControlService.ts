import { GameState, buttonTexts,titleMenuObject } from "../constants/gameText";


export default class MenuControlService {
  
  constructor() {
  }

  getMenuTitle(stateGame: GameState): string {
    
    return titleMenuObject[stateGame];
  }
  getMenuButton(stateGame: GameState): string {
    return buttonTexts[stateGame];
  }

  getPositionCard(screenWidth:number,screenHeight:number,gameSceneData:GameState): {x:number,y:number,width:number,height:number} {
    
    let areaWidth = 250;
    let areaHeight = 180;
    if(gameSceneData===GameState.Start){
      areaWidth =screenWidth*0.75;
      areaHeight = 300;
    }
    const areaX = (screenWidth - areaWidth) / 2;
    const areaY = (screenHeight - areaHeight) / 2;
    return {x:areaX,y:areaY,width:areaWidth,height:areaHeight};
  }
}