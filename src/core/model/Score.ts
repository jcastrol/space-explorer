export default class Score{
  private score: number;
  constructor() {
    this.score = 0;
  }
  public getScore() {
    return this.score;
  }
  public addScore() {
    this.score++;
  }
  public resetScore() {
    this.score = 0;
  }

}