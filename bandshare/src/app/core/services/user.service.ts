import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/user';
import { tap } from 'rxjs/operators';




@Injectable()
export class UserService {

  get loggedUser(): any {
    try {
      return JSON.parse(sessionStorage.getItem('data')!);
    } catch (err) {
      console.log(err);
    }

  }

  constructor(private http: HttpClient) { }

  register(data: { email: string, password: string, firstName: string, lastName: string, username: string }) {
    return this.http.post<IUser>(`/api/users`, data);
  }


  login(username: string, password: string) {

    const params = {
      username,
      password
    }

    return this.http.get<IUser>(`/api/login`, { params: params }).pipe(
      tap((data) => {
        try {
          const jsonData = JSON.stringify(data);
          sessionStorage.setItem('data', jsonData)
        } catch (err) {
          console.log(err);
        }
      })
    );
  }

  logout(): void {
    sessionStorage.clear();
  }
}

