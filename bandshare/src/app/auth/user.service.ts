import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
import { tap } from 'rxjs/operators';

const API_URL = environment.API_URL;
const headers = environment.authHeaders;


@Injectable()
export class UserService {
  get currentUser(): any {
    try {
      return JSON.parse(localStorage.getItem('data')!);
    } catch (err) {
      console.log(err);
    }

  }

  constructor(private http: HttpClient) { }

  register(data: { email: string, password: string, firstName: string, lastName: string, username: string }) {
    return this.http.post<IUser>(`${API_URL}/users`, data, { headers: headers });
  }


  login(username: string, password: string) {

    const params = {
      username,
      password
    }

    return this.http.get<IUser>(`${API_URL}/login`, { headers: headers, params: params }).pipe(
      tap((data) => {
        try {
          const jsonData = JSON.stringify(data);
          localStorage.setItem('data', jsonData)
        } catch (err) {
          console.log(err);
        }
      })
    );
  }

  logout(): void {
    localStorage.clear();
  }
}

