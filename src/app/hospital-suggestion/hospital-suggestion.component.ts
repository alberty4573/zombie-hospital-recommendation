import { Component, OnInit } from '@angular/core';
import { IllnessService } from '../illness.service';
import { Hospital, sortedHospital, hospital } from '../hospital';

@Component({
  selector: 'app-hospital-suggestion',
  templateUrl: './hospital-suggestion.component.html',
  styleUrls: ['./hospital-suggestion.component.css']
})

export class HospitalSuggestionComponent implements OnInit {
  hospitals = {} as Hospital;
  sortedHospitals = [] as sortedHospital[];

  

  constructor(
    private illnessService: IllnessService
 
  ) { }

  ngOnInit(): void {
    console.log(this.illnessService.levelPain)
    this.getHospitals();
    //this.sortHospitals();
  }

  getHospitals() {
    this.illnessService.getHospitals().subscribe(res => {
      this.hospitals = res,
      console.log(this.hospitals)
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
      this.sortHospitals();
      console.log("unsorted", this.sortedHospitals)
    });
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
