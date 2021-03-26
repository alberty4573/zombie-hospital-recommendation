import { Component, OnInit } from '@angular/core';
import { IllnessService } from '../illness.service';
import { Hospital, sortedHospital, hospital } from '../hospital';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-suggestion',
  templateUrl: './hospital-suggestion.component.html',
  styleUrls: ['./hospital-suggestion.component.css']
})

export class HospitalSuggestionComponent implements OnInit {
  hospitals = {} as Hospital;
  sortedHospitals = [] as sortedHospital[];

  

  constructor(
    private router: Router,
    private illnessService: IllnessService
 
  ) { }

  ngOnInit(): void {
    console.log(this.illnessService.levelPain)
    if (this.illnessService.levelPain !== undefined) {
      this.getHospitals();
    } else {
      this.router.navigate(['/illness'])
    }
  }

  getHospitals() {
    this.illnessService.getHospitals().subscribe(res => {
      this.hospitals = res,
      this.reconstructHospitalData(),
      this.sortHospitals()
    });
  }

  reconstructHospitalData() {
    this.hospitals._embedded.hospitals.forEach(hospital => {
      const sortedHospital: sortedHospital = {
        name: hospital.name,
        levelofPain: this.illnessService.levelPain,
        averageProcessingTime: this.findAverageProcessTime(hospital),
        patienCount: this.findPatienCount(hospital),
        waitingTime: this.calculateWaitingTime(hospital)
      };
      this.sortedHospitals.push(sortedHospital);
    })
  }

  sortHospitals() {
    this.sortedHospitals.sort((a, b) => a.waitingTime - b.waitingTime);
  }

  findAverageProcessTime(hospital: hospital) {
    const waitingListItem = hospital.waitingList.find(waitingListItem => waitingListItem.levelOfPain === this.illnessService.levelPain);
    return waitingListItem!.averageProcessTime;
  }

  findPatienCount(hospital: hospital) {
    const waitingListItem = hospital.waitingList.find(waitingListItem => waitingListItem.levelOfPain === this.illnessService.levelPain);
    return waitingListItem!.patientCount;
  }

  calculateWaitingTime(hospital: hospital) {
    const waitingListItem = hospital.waitingList.find(waitingListItem => waitingListItem.levelOfPain === this.illnessService.levelPain);
    return waitingListItem!.averageProcessTime * waitingListItem!.patientCount;
  }

}
