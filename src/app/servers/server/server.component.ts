import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe((data: Data) => {
      console.log(data);
      this.server = data?.server;
    })
    // let id;
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   id = params.id;
    //   this.server = this.serversService.getServer(+id);
    // });
  }

  ngOnInit() {

  }

  editServer() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' });
  }

}
