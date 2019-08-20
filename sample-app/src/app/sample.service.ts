import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ISample } from './sample';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private _url:string = "/assets/data/sample.json";

  constructor(private http:HttpClient) { }

  getBookingDetails(): Observable<ISample[]>{
    return this.http.get<ISample[]>(this._url);
  }
  
}
