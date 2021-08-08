import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
import { tap } from 'rxjs/operators';

const API_URL = environment.API_URL;
const headers = environment.authHeaders;


@Injectable()
export class UserService {
  user: IUser | null | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  register(data: { email: string, password: string, firstName: string, lastName: string, username: string }) {
    return this.http.post<IUser>(`${API_URL}/users`, data, { headers: headers }).pipe(
      tap((user) => this.user = user)
    );
  }

  login(username: string, password: string) {

    const params = {
      username,
      password
    }

    return this.http.get<IUser>(`${API_URL}/login`, { headers: headers, params: params }).pipe(
      tap((user) => this.user = user)
    );
  }

  logout(): void {
    this.user = undefined;
  }
}

