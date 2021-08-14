import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IBand } from '../../shared/interfaces/band';
import { IBands } from '../../shared/interfaces/bands';


@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  getAllBands() {
    return this.http.get<IBands>(`/api/classes/posts`);
  }

  getBandById(bandId: string) {
    return this.http.get<IBand>(`/api/classes/posts/${bandId}`);
  }

  createBand(data: Object) {
    return this.http.post<IBand>(`/api/classes/posts`, data);
  }

  deleteBand(bandId: string) {
    return this.http.delete(`/api/classes/posts/${bandId}`);
  }

  editBand(bandId: string, data: Object) {
    return this.http.put(`/api/classes/posts/${bandId}`, data);
  }

  getBandsByOwnerId(ownerId: string) {
    return this.http.get<IBands>(`/api/classes/posts?where={"ownerId":"${ownerId}"}`);
  }
}
