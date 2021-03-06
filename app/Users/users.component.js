System.register(['@angular/core', '@angular/router-deprecated', './usersList.component', './user.component', '../common/common.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, usersList_component_1, user_component_1, common_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (usersList_component_1_1) {
                usersList_component_1 = usersList_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (common_component_1_1) {
                common_component_1 = common_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent() {
                }
                UsersComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'UsersList', component: usersList_component_1.UsersListComponent, useAsDefault: true },
                        { path: '/new', name: 'UsersCreate', component: user_component_1.UserComponent },
                        { path: '/notfound', name: 'NotFound', component: common_component_1.CommonComponent },
                        { path: '/:id', name: 'UsersEdit', component: user_component_1.UserComponent },
                        { path: '/:id/delete', name: 'UsersRemove', component: user_component_1.UserComponent }
                    ]),
                    core_1.Component({
                        template: "\n                <div class=\"container\">\n                   <router-outlet></router-outlet>\n                </div>\n            ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map