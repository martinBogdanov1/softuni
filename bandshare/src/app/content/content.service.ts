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
    return this.http.get<IBands>(`${API_URL}/classes/posts`, {
      headers: headers
    });
  }

  getBandById(bandId: string) {
    return this.http.get<IBand>(`${API_URL}/classes/posts/${bandId}`, {
      headers: headers
    });
  }

  createBand(data: Object) {
    return this.http.post<IBand>(`${API_URL}/classes/posts`, data, {
      headers
    });
  }

  deleteBand(bandId: string,) {
    return this.http.delete(`${API_URL}/classes/posts/${bandId}`, {
      headers: headers
    });
  }

  editBand(bandId: string, data: Object) {
    return this.http.put(`${API_URL}/classes/posts/${bandId}`, data, {
      headers: headers
    });
  }

}
