import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {UsersService} from './common/users.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, UsersService]);