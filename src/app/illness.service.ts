import { Injectable } from '@angular/core';
import {Iillness} from './illness';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})
export class IllnessService {

  private painLevel!: number;

  private illnessApiUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";
  private hospitalApiUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals"

  constructor(
    private http: HttpClient
    ) { }

    getIllnesses(): Observable<Iillness> {
      return this.http.get<Iillness>(this.illnessApiUrl)
    }

    getHospitals(): Observable<Hospital> {
      return this.http.get<Hospital>(this.hospitalApiUrl)
    }

    set levelPain(painLevel: number) {
      this.painLevel = painLevel;
    }

    get levelPain() {
      return this.painLevel;
    }

}
