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
          patienCount: 0,
          waitingTime: 0
        };
        this.sortedHospitals.push(sortedHospital);
      })
      console.log(this.sortedHospitals)
    });
  }

  findAverageProcessTime(hospital: hospital) {
    const waitingListItem = hospital.waitingList.find(waitingListItem => waitingListItem.levelOfPain === this.illnessService.levelPain);
    return waitingListItem!.averageProcessTime;
  }

  findAverageProcessTime(hospital: hospital) {
    const waitingListItem = hospital.waitingList.find(waitingListItem => waitingListItem.levelOfPain === this.illnessService.levelPain);
    return waitingListItem!.averageProcessTime;
  }

}
