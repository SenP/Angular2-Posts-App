import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/navbar/navbar.template.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {

    constructor(private _router: Router) {

    }

    isActive(instruction: any[]): boolean {
        return this._router.isRouteActive(this._router.generate(instruction));
    }

}