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
    var PostsService;
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
            PostsService = (function () {
                function PostsService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/posts/";
                    this._url_user = "http://jsonplaceholder.typicode.com/users/";
                }
                PostsService.prototype.getUsersAndPosts = function () {
                    //posts observable
                    var posts = this._http
                        .get(this._url)
                        .map(function (res) { return res.json(); });
                    //users observable
                    var users = this._http
                        .get(this._url_user)
                        .map(function (res) { return res.json(); });
                    return Rx_1.Observable
                        .forkJoin(posts, users)
                        .map(function (result) { return { posts: result[0], users: result[1] }; });
                };
                PostsService.prototype.getPost = function (id) {
                    //Return post object with the given id
                    return this._http
                        .get(this._url + id)
                        .map(function (res) { return res.json(); });
                };
                PostsService.prototype.getComments = function (post) {
                    //Return comments for the given post
                    return this._http
                        .get(this._url + post.id + '/comments')
                        .map(function (res) { return res.json(); });
                };
                PostsService.prototype.createPost = function (post) {
                    // Create a new post
                    return this._http
                        .post(this._url, JSON.stringify(post))
                        .map(function (res) { return res.json(); });
                };
                PostsService.prototype.updatePost = function (post) {
                    // Create a new post
                    if (!post.id)
                        return this.createPost(post);
                    //Update post      
                    return this._http
                        .put(this._url + post.id, JSON.stringify(post))
                        .map(function (res) { return res.json(); });
                };
                PostsService.prototype.removePost = function (post) {
                    // Remove a post
                    return this._http
                        .delete(this._url + post.id)
                        .map(function (res) { return res.json(); });
                };
                PostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostsService);
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map