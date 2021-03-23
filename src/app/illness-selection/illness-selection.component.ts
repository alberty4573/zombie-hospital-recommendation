import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illness-selection',
  templateUrl: './illness-selection.component.html',
  styleUrls: ['./illness-selection.component.css']
})
export class IllnessSelectionComponent implements OnInit {
  illnessApiUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";

  constructor() { }

  ngOnInit(): void {
  }

  getIllness() {
    this.illnessApiUrl;
  }

}
