import { Component, OnInit } from '@angular/core';
import { IllnessService } from '../illness.service';
import { illness, Iillness } from '../illness';

@Component({
  selector: 'app-illness-selection',
  templateUrl: './illness-selection.component.html',
  styleUrls: ['./illness-selection.component.css']
})
export class IllnessSelectionComponent implements OnInit {
  illness = {} as Iillness;
  illnesses: illness[] = [];


  arrayIllness: any;


  constructor(
    private illnessService: IllnessService
  ) { }

  ngOnInit(): void {
    this.getIllness();
  }

  getIllness() {
    this.illnessService.getIllnesses().subscribe(res => {
      this.illness = res,
      this.illness._embedded.illnesses.forEach(eachIllness => {
        this.illnesses.push(eachIllness.illness)
      })
    });
  }

onSubmit(value: string) {
  console.log(value)
  this.illnessService.patientIllness = value;
}

}
