import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../classes/stats';
import {Player} from '../classes/player';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  @Input() stats: Stats;
  @Input() player: Player;
  @Input() bonus: boolean = false;

  constructor(protected localStorage: LocalStorage) { }

  ngOnInit() {

  }

  onChange(event) {
    this.localStorage.setItemSubscribe('player.data', this.player.data);
  }
}
