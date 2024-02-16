export enum GameState {
  Start = "Start",
  Finish = "Finish",
  Pause = "Pause",
}

export const buttonTexts = {
  [GameState.Start]: "Start",
  [GameState.Finish]: "Restart",
  [GameState.Pause]: "Resume",
};
export const titleMenuObject = {
  [GameState.Start]: "Instructions",
  [GameState.Finish]: "Game Over",
  [GameState.Pause]: "Pause",
};
export const InstructionsText = [
  "- Use the arrow keys to navigate the player",
  " character.",
  "" ,
  "- Avoid colliding with asteroids to survive",
  "longer.",
  "",
  "- Your score increases with each successful",
  "avoidance.",
  "",
  "- The game ends when the player collides with",
  "an asteroid.",
];

export const instructionsString = InstructionsText.join("\n");
