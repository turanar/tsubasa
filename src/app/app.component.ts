import { Component } from '@angular/core';
import { Player } from './classes/player';
import  {Stats} from './classes/stats';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {PlayerData} from './classes/playerdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public player: Player = new Player;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public page: number;

  constructor(protected localStorage: LocalStorage) {
    this.localStorage.getItem<PlayerData>('player.data').subscribe((data) => {
      if (data != null) {
        this.player.data = data;
      }
    });
    this.page = 0;
  }

  onChange(event) {
    this.localStorage.setItemSubscribe('player.data', this.player.data);
  }

  swipe(action: string) {
    console.log(action);

    if (action === 'swipeleft') {
      this.page = (this.page >= 4) ? 4 : this.page + 1;
    }

    if (action === 'swiperight') {
      this.page =  (this.page <= 0) ? 0 : this.page - 1;
    }

    console.log(this.page);
  }
}
