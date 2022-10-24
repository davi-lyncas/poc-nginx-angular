import { Injectable } from '@angular/core';
import { NavigationExtras, Router as AngularRouter } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Router {

  events = this.router.events;

  constructor(private router: AngularRouter) { }

  navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    /**
     * Nessario pois o metodo Router.navigate original
     * não respeita a UrlSerializer configurada nos providers do RoutingModule 
     * */
    const parsedCommands = commands.map(command => (typeof command == 'string')
      ? command.toLowerCase()
      : command
    );
    
    return this.router.navigate(parsedCommands, extras);
  }
}
