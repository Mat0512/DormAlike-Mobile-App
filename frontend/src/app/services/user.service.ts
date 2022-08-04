import { Injectable } from '@angular/core';
import { ResponseMsg } from '../tsInterface/ResponseMsg';
import { User } from '../tsInterface/User';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

// const httpOptionsWithAuth = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private authUrl = "http://localhost:3001/login";
  private updateUserUrl = "http://localhost:3001/editAccount";
  constructor(private http: HttpClient) { }

  authenticateUser(userCredentials: {username: string, password: string}): Observable <any> {
    return this.http.post<any>(this.authUrl, userCredentials, httpOptions)
  }

  updateUser(userData: User) : Observable <User> {
    return this.http.put(this.updateUserUrl, userData, httpOptions);
  }

}
