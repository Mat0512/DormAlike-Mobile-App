import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {

  constructor() { }

  public getUserData() {
    return localStorage.getItem("user")
  }

  public setUserData(userData) {
    return localStorage.setItem("user", JSON.stringify(userData))
  }

  public clearUserData() {
    localStorage.clear()
  }

}
