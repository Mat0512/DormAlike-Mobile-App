import { Injectable } from '@angular/core';
import { Accomodation } from '../tsInterface/Accomodation';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class AccomodationService {
  private getAllAccomodationUrl = "http://localhost:3001/accomodations";

  constructor(private http: HttpClient) { }

  getAccomodations(): Observable <Accomodation[]> {
    return this.http.get<Accomodation[]>(this.getAllAccomodationUrl);
  }
  
}
