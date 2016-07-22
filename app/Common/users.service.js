System.register(['@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, Rx_1, core_1;
    var UsersService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/users/";
                }
                UsersService.prototype.storeUsers = function (users) {
                    this.users = users;
                };
                UsersService.prototype.getUsers = function () {
                    //Simulate api
                    if (this.users !== undefined)
                        return Rx_1.Observable.of(this.users);
                    //Return list of users
                    return this._http
                        .get(this._url)
                        .map(function (res) { return res.json(); });
                };
                UsersService.prototype.getUser = function (id) {
                    //Simulate api        
                    if (this.users) {
                        return Rx_1.Observable.from(this.users.filter(function (user) { return user.id == id; }));
                    }
                    //Return user object with the given id
                    return this._http
                        .get(this._url + id)
                        .map(function (res) { return res.json(); });
                };
                UsersService.prototype.createUser = function (user) {
                    //Simulate api
                    if (this.users) {
                        // user.id = this.users.map(u => u.id).reduce((maxid, currid) => Math.max(maxid, currid),0) + 1;
                        user.id = Math.max.apply(Math, [0].concat(this.users.map(function (u) { return u.id; }))) + 1;
                        this.users.push(user);
                        return Rx_1.Observable.of(user);
                    }
                    // Create a new user
                    return this._http
                        .post(this._url, JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UsersService.prototype.updateUser = function (user) {
                    // Create a new user
                    if (!user.id)
                        return this.createUser(user);
                    //Simulate api
                    if (this.users) {
                        var idx = this.users.findIndex(function (edituser) { return edituser.id == user.id; });
                        if (idx >= 0) {
                            this.users[idx] = user;
                            return Rx_1.Observable.of(this.users[idx]);
                        }
                        return Rx_1.Observable.throw("User not found");
                    }
                    //Update user           
                    return this._http
                        .put(this._url + user.id, JSON.stringify(user))
                        .map(function (res) { return res.json(); });
                };
                UsersService.prototype.removeUser = function (user) {
                    //Simulate api
                    if (this.users) {
                        this.users = this.users.filter(function (duser) { return duser.id !== user.id; });
                        return Rx_1.Observable.of(user);
                    }
                    // Remove a user
                    return this._http
                        .delete(this._url + user.id)
                        .map(function (res) { return res.json(); });
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map