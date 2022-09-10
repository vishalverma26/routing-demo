import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { ServersService } from "./servers/servers.service";

interface Server { id: number, name: string, status: string };
@Injectable()
export class ServerResolver implements Resolve<Server | boolean> {

  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Server | Observable<boolean | Server> | Promise<boolean | Server> {
    return this.serversService.getServer(+route.params['id']);
  }
}
