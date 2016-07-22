import {Component, OnInit} from '@angular/core';
import {Router, RouteParams, CanDeactivate} from '@angular/router-deprecated';
import {ControlGroup, Control, Validators, FormBuilder} from '@angular/common';

import {UsersService} from '../common/users.service';
import {UserValidators} from '../common/userValidators';
import {User} from '../common/user';

@Component({
    templateUrl: 'app/users/user.template.html',
    providers: []
})

export class UserComponent implements CanDeactivate, OnInit {

    form: ControlGroup;

    user = new User();

    mode: string = 'Create';
    message: string = null;

    constructor(fb: FormBuilder, private _router: Router,
        private _routeParams: RouteParams,
        private _usersService: UsersService) {

        this.form = fb.group({
            username: [''],
            email: ['', UserValidators.validEmail],
            phone: [''],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zip: []
            })
        });
    }

    ngOnInit() {
        var userid = this._routeParams.get('id');
        if (userid) {
            this._usersService
                .getUser(userid)
                .subscribe(editUser => {
                    this.user = editUser;
                    this.mode = 'Edit';
                },
                error => {
                    console.log(error);
                    if (error.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        }
    }

    routerCanDeactivate(next, prev) {
        if (this.form.dirty && this.mode !== 'done') {
            return confirm("You have unsaved changes. Do you want to leave this page?");
        }
    }

    onSubmit() {

        this.message = "Saving user, Please wait ...";

        //this.form.markAsPristine();
        this._usersService
            .updateUser(this.user)
            .subscribe(newUser => {
                //console.log("user: " + JSON.stringify(newUser));
            },
            error => {
                console.log(error);
                this.message = error.message;
            },
            () => {
                this.message = "User saved successfully. Redirecting...";
                this.mode = 'done';
                this._router.navigate(['UsersList']);
            }
            );
    }
}




