import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    template: `
                <h1> Welcome! </h1>
            `,
    directives: [ROUTER_DIRECTIVES]      
})

export class HomeComponent{
    
    constructor() {
    }
    
}