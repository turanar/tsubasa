import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../classes/player';

@Component({
  selector: 'app-player-stats-result',
  templateUrl: './player-stats-result.component.html',
  styleUrls: ['./player-stats-result.component.css']
})
export class PlayerStatsResultComponent implements OnInit {
  @Input() player: Player;
  @Input() specialSkills: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
