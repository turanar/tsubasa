import { Component, OnInit } from '@angular/core';
import {PlayerListService} from '../../player-list.service';
import {PlayerData} from '../../classes/playerdata';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  lastKeypress = 0;
  queryText: string;
  players: any;

  constructor(protected es: PlayerListService) { }

  ngOnInit() {
  }

  search(event) {
    this.queryText = event.target.value;

    let terms: string[] = this.queryText.split(' ');
    let fields: string[] = ['name', 'title', 'class'];
    let query = '';

    for (let i = 0; i < terms.length; i++ ) {
      query += '(';
      for (let f of fields) {
        query += f + ':*' + terms[i] + '* ';
      }
      query += ')';
      if (i < (terms.length - 1)) { query += ' AND '; }
    }

    console.log(query);

    if (event.timeStamp - this.lastKeypress > 100) {
      this.queryText = event.target.value;
      this.es.fullTextSearch('tsubasa', 'player', 'name', query).then(
        response => {
          this.players = response.hits.hits;
        }, error => {
          console.error(error);
        }).then(() => {

      });
    }

    this.lastKeypress = event.timeStamp;
  }

}
