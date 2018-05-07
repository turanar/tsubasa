import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';

@Injectable()
export class PlayerListService {
  private client: elasticsearch.Client;

  constructor() {
    this.connect();
  }

  private connect() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'info'
    });
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
