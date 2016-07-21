import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {PostsListComponent} from './postsList.component';
import {CommonComponent} from '../common/common.component';

@RouteConfig([
    { path: '/', name: 'PostsList', component: PostsListComponent, useAsDefault: true },
    { path: '/notfound', name: 'NotFound', component: CommonComponent },
])

@Component({
    template: `
                <div class="container">
                   <router-outlet></router-outlet>
                </div>
            `,
    directives: [ROUTER_DIRECTIVES]
})

export class PostsComponent {


}