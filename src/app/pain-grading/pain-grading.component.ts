import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IllnessService } from '../illness.service';


@Component({
  selector: 'app-pain-grading',
  templateUrl: './pain-grading.component.html',
  styleUrls: ['./pain-grading.component.css']
})
export class PainGradingComponent implements OnInit {

  constructor(
    private router: Router,
    private illnessService: IllnessService
  ) { }

  ngOnInit(): void {
  }

  onClick(painLevel: number) {
    console.log(painLevel);
    this.router.navigate(['/hospital-suggestion'])
  }

}
