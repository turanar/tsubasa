import { Stats} from './stats';

export class PlayerData {
  goal: boolean = false;
  base: Stats = new Stats(5000);
  ts: Stats = new Stats(100);
  bonus: {[key: string ]: Stats} = {
    'passive' : new Stats,
    'conf' : new Stats,
    'formation': new Stats,
    'passive_ts': new Stats
  };
}
