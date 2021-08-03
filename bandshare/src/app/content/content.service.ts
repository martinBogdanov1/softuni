import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IBand } from '../shared/interfaces/band';
import { IBands } from '../shared/interfaces/bands';

const API_URL = environment.API_URL;
const headers = environment.headers;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  getAllBands() {
    return this.http.get<IBands>(`${API_URL}/posts`, {
      headers: headers
    });
  }

  getBandById(bandId: string) {
    return this.http.get<IBand>(`${API_URL}/posts/${bandId}`, {
      headers: headers
    });
  }
}
