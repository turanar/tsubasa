import {PlayerData} from './playerdata';

export class Player {
  data: PlayerData = new PlayerData;

  constructor() {
  }

  calcul(stat: string): number {
    return this.data.base[stat] *
           (100 + this.data.bonus['passive'][stat] + this.data.bonus['conf'][stat] + this.data.bonus['formation'][stat]) / 100;
  }

  calcul_ts(stat: string): number {
    return (100 + this.data.bonus['passive_ts'][stat])/100 *
           (this.data.ts[stat] / 100);
  }

  get dribble(): number {
    return this.calcul('dribble') + this.speed / 2;
  }

  get shot(): number {
    return this.calcul('shot') + this.power / 2;
  }

  get pass(): number {
    return this.calcul('pass') + this.technique / 2;
  }

  get tackle(): number {
    return this.calcul('tackle') + this.speed / 2;
  }

  get block(): number {
    return this.calcul('block') + this.power / 2;
  }

  get intercept(): number {
    return this.calcul('intercept') + this.technique / 2;
  }

  get catch(): number {
    return this.calcul('catch') + ((this.power + this.technique) / 4);
  }

  get punch(): number {
    return this.calcul('punch') + ((this.power + this.speed) / 4);
  }

  get speed(): number {
    return this.calcul('speed');
  }

  get power(): number {
    return this.calcul('power');
  }

  get technique(): number {
    return this.calcul('technique');
  }

  get dribble_ts(): number {
    return  Math.round(this.dribble * this.calcul_ts('dribble'));
  }

  get shot_ts(): number {
    return Math.round(this.shot * this.calcul_ts('shot'));
  }

  get pass_ts(): number {
    return Math.round(this.pass * this.calcul_ts('pass'));
  }

  get tackle_ts(): number {
    return  Math.round(this.tackle * this.calcul_ts('tackle'));
  }

  get block_ts(): number {
    return  Math.round(this.block * this.calcul_ts('block'));
  }

  get intercept_ts(): number {
    return  Math.round(this.intercept * this.calcul_ts('intercept'));
  }

  get catch_ts(): number {
    return  Math.round(this.catch * this.calcul_ts('catch'));
  }

  get punch_ts(): number {
    return Math.round(this.punch * this.calcul_ts('punch'));
  }
}
