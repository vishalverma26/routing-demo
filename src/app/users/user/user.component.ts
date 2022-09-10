import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.user = {
        id: params?.id,
        name: params?.name
      }
    })
  }

  ngOnInit() {
  }

}
