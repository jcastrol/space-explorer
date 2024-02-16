import { GameState } from '../../../src/core/constants/gameText';
import MenuControlService from '../../../src/core/services/MenuControlService';

describe('MenuControlService', () => {
  let menuControlService: MenuControlService;

  beforeEach(() => {
    menuControlService = new MenuControlService();
  });

  it('should return correct menu title based on game state', () => {
    expect(menuControlService.getMenuTitle(GameState.Pause)).toBe('Pause');
    expect(menuControlService.getMenuTitle(GameState.Start)).toBe('Instructions');
    expect(menuControlService.getMenuTitle(GameState.Finish)).toBe('Game Over');
  });

  it('should return correct menu button text based on game state', () => {
    expect(menuControlService.getMenuButton(GameState.Pause)).toBe('Resume');
    expect(menuControlService.getMenuButton(GameState.Start)).toBe('Start');
    expect(menuControlService.getMenuButton(GameState.Finish)).toBe('Restart');
  });

  
  it('should return correct position card', () => {
    const screenWidth = 800;
    const screenHeight = 600;
    const position = menuControlService.getPositionCard(screenWidth, screenHeight, GameState.Pause);
    // Assuming default values of areaWidth and areaHeight are 250 and 180 respectively
    expect(position.x).toBe((screenWidth - 250) / 2);
    expect(position.y).toBe((screenHeight - 180) / 2);
    expect(position.width).toBe(250);
    expect(position.height).toBe(180);
  });
  test('getPositionCard should return correct position object', () => {
    const screenWidth = 800;
    const screenHeight = 600;
    const gameSceneDataStart = GameState.Start;
    const gameSceneDataPause = GameState.Pause;
    const gameSceneDataFinish = GameState.Finish;

    const positionStart = menuControlService.getPositionCard(screenWidth, screenHeight, gameSceneDataStart);
    expect(positionStart).toEqual({
      x: (screenWidth - screenWidth * 0.75) / 2,
      y: (screenHeight - 300) / 2,
      width: screenWidth * 0.75,
      height: 300
    });
    const positionPause= menuControlService.getPositionCard(screenWidth, screenHeight, gameSceneDataPause);
    expect(positionPause).toEqual({
      x: (screenWidth - 250) / 2,
      y: (screenHeight - 180) / 2,
      width: 250,
      height: 180
    });
    const positionFinish = menuControlService.getPositionCard(screenWidth, screenHeight, gameSceneDataFinish);
    expect(positionFinish).toEqual({
      x: (screenWidth - 250) / 2,
      y: (screenHeight - 180) / 2,
      width: 250,
      height: 180
    });
  });  
});
