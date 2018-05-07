import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';
import { environment } from '../environments/environment';

@Injectable()
export class PlayerListService {
  private client: elasticsearch.Client;

  constructor() {
    this.connect();
  }

  private connect() {
    if(environment.production) {
      this.client = new elasticsearch.Client({
        host: 'http://tsubasa.turanar.net/json',
        log: 'error'
      });
    } else {
      this.client = new elasticsearch.Client({
        host: 'http://localhost:9200',
        log: 'info'
      });
    }
  }

  fullTextSearch(_index, _type, _field, _queryText): any {
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'query': {
          'query_string': {
            ['query'] : _queryText,
          }
        }
      },
      // response for each document with only 'fullname' and 'address' fields
      '_source': ['name', 'title', 'class']
    });
  }
}
