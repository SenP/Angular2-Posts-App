import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()

export class UsersService {
    private _url = "http://jsonplaceholder.typicode.com/users/";
    
    private users: User[];

    constructor(private _http: Http) {

    }

    storeUsers(users) {
        this.users = users;
    }

    getUsers() {
        //Simulate api
        if(this.users !== undefined) return Observable.of(this.users);

        //Return list of users
        return this._http
	                    .get(this._url)
                        .map(res => res.json());
    }

    getUser(id) {
        //Simulate api        
        if(this.users) {
            return Observable.from(this.users.filter(user => user.id == id));
        }

        //Return user object with the given id
        return this._http
	                    .get(this._url + id )
                        .map(res => res.json());
    }

    createUser(user: User) {
        //Simulate api
        if(this.users) {
            // user.id = this.users.map(u => u.id).reduce((maxid, currid) => Math.max(maxid, currid),0) + 1;
            user.id = Math.max(0, ...this.users.map(u => u.id)) + 1;
            this.users.push(user);
            return Observable.of(user);                         
        }

        // Create a new user
        return this._http
                        .post(this._url,JSON.stringify(user))
                        .map(res => res.json());
    }

    updateUser(user: User) {
        
        // Create a new user
        if (!user.id) return this.createUser(user);

        //Simulate api
        if(this.users) {
            let idx = this.users.findIndex(edituser => edituser.id == user.id);

            if (idx >= 0) {
                this.users[idx] = user;
                return Observable.of(this.users[idx]);
            }
            return Observable.throw("User not found");            
        }

        //Update user           
        return this._http
                        .put(this._url + user.id,JSON.stringify(user))
                        .map(res => res.json());
    }

    removeUser(user: User) {
        
        //Simulate api
        if(this.users) {
            this.users = this.users.filter(duser => duser.id !== user.id);
            return Observable.of(user);           
        }

        // Remove a user
        return this._http
                        .delete(this._url + user.id)
                        .map(res => res.json());
    }

}
