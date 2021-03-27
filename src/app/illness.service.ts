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

  private painLevel!: number;
  private patientsIllness!: string;

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

    postPatientInfo(patientInfo: PatientInfo): Observable<PatientInfo> {
      return this.http.post<PatientInfo>('https://localhost:5001/api/userdata', {patientInfo});
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
