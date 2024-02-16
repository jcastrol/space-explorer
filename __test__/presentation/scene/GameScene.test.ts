import { GameScene } from '../../../src/presentation/scene/GameScene';
//import Score from '../../../src/core/model/Score';



jest.mock('phaser');

describe('GameScene', () => {
 
  let scene: GameScene;

  beforeEach(() => {
    scene = new GameScene();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with the correct properties', () => {
    expect(scene.add.existing).toHaveBeenCalledWith();
    // expect(scene.add).toEqual([]);
    // expect(scene.score).toBeInstanceOf(Score);
    // expect(scene.text).toBeUndefined();
    // expect(scene.ship).toBeUndefined();
    // expect(scene.cursor).toBeUndefined();
  });

  // it('should preload game assets correctly', () => {
  //   // const loadSpy = jest.spyOn(scene, 'load').mockImplementation((type, key, asset) => {
  //   //   // Mock implementation of load method
  //   // });

  //   scene.preload();

  //   expect(loadSpy).toHaveBeenCalledTimes(4);
  //   expect(loadSpy).toHaveBeenCalledWith('image', 'asteroid1', 'path/to/asteroid1.png');
  //   expect(loadSpy).toHaveBeenCalledWith('image', 'asteroid2', 'path/to/asteroid2.png');
  //   expect(loadSpy).toHaveBeenCalledWith('image', 'asteroid3', 'path/to/asteroid3.png');
  //   expect(loadSpy).toHaveBeenCalledWith('image', 'player', 'path/to/spaceship.png');
  // });

  it('should create game objects and initialize game state in create method', () => {
    scene.create();

    // expect(scene.initializeGame).toHaveBeenCalled();
    // expect(scene.createPauseButton).toHaveBeenCalled();
    expect(scene.add.text).toHaveBeenCalledWith(15, 10, 'Score:0 ', { fontSize: 25, color: '#ffffff' });
    // expect(scene.physics.add.image).toHaveBeenCalledWith(scene.sys.game.config.width / 2, scene.sys.game.config.height - 100, 'player');
    // expect(scene.initializeAsteroids).toHaveBeenCalled();
    // expect(scene.input.keyboard.createCursorKeys).toHaveBeenCalled();
    // expect(scene.setupCollisions).toHaveBeenCalled();
  });


});