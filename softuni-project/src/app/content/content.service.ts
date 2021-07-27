import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { config } from './config/config';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  getAllContent() {
    return this.http.get(config.API_URL + '/posts', {
      headers: config.headers
    });
  }
}
