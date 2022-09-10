import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.data.subscribe((data: Data) => {
      this.errorMessage = data.message;
    })
  }

  ngOnInit(): void {
  }

}
