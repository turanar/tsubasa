export class Stats {
  dribble: number = 0;
  shot: number = 0;
  pass: number = 0;
  tackle: number = 0;
  block: number = 0;
  intercept: number = 0;
  catch: number = 0;
  punch: number = 0;
  speed: number = 0;
  power: number = 0;
  technique: number = 0;

  constructor(init: number = 0) {
    this.dribble = init;
    this.shot = init;
    this.pass = init;
    this.tackle = init;
    this.block = init;
    this.intercept = init;
    this.catch = init;
    this.punch = init;
    this.speed = init;
    this.power = init;
    this.technique = init;
  }
}
