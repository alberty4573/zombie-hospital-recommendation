import { Injectable } from '@angular/core';
import {Iillness} from './illness';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IllnessService {

  public painLevel!: number;

  private illnessApiUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";

  constructor(
    private http: HttpClient
    ) { }

    getIllnesses(): Observable<Iillness> {
      return this.http.get<Iillness>(this.illnessApiUrl)
    }

    set levelPain(painLevel: number) {
      this.painLevel = painLevel;
    }

    get levelPain() {
      return this.painLevel;
    }

}
