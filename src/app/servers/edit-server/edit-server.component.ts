import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Deactivate } from 'src/app/can-deactivate-guard.service';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, Deactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = (params?.allowEdit === 'true');
    });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    // in case we are just showing a message
    if(!this.allowEdit) {
      return true;
    }

    if(!(this.serverName === this.server.name || this.serverStatus === this.server.status) && !this.changesSaved) {
      return confirm('Are you sure you want to move without saving ?');
    } else {
      return true;
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

}
