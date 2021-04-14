import { Injectable } from '@angular/core';
import {Iillness} from './illness';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from './hospital';
import { PatientInfo } from './patient-info';

@Injectable({
  providedIn: 'root'
})
export class IllnessService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private painLevel!: number;
  private patientsIllness!: string;

  private illnessApiUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";
  private hospitalApiUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals"

  constructor(
    private http: HttpClient
    ) { }

    getIllnesses(pageNumber: number): Observable<Iillness> {
      console.log("service page", pageNumber)
      return this.http.get<Iillness>(this.illnessApiUrl + '?page=' + pageNumber)
    }

    getHospitals(): Observable<Hospital> {
      return this.http.get<Hospital>(this.hospitalApiUrl)
    }

    postPatientInfo(patientInfo: PatientInfo): Observable<PatientInfo> {
      return this.http.post<PatientInfo>('https://localhost:5001/api/userdata', {patientInfo}, this.httpOptions);
    }

    set levelPain(painLevel: number) {
      this.painLevel = painLevel;
    }

    get levelPain() {
      return this.painLevel;
    }

    set patientIllness(patientIlness: string) {
      this.patientsIllness = patientIlness;
    }

    get patientIllness() {
      return this.patientsIllness;
    }

}
