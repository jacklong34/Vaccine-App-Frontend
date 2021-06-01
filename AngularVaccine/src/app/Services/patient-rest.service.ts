import { Injectable } from '@angular/core';
import { Patient } from '../Models/Patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientRestService {

  responseValue: any;

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }

  url: string = 'https://localhost:44372/api/Patient/username'

  constructor(private http: HttpClient) { }

  //Get Patient by Username
  GetPatientByUsername(username: string) : Observable<any>
  {
    return this.http.get<Patient>(`${this.url}/${username}`, this.httpOptions)
  }
}
