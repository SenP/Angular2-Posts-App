System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var FilterByValPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilterByValPipe = (function () {
                function FilterByValPipe() {
                }
                FilterByValPipe.prototype.transform = function (value, cond) {
                    var filterObj = cond;
                    if (!filterObj || !filterObj.userId || isNaN(filterObj.userId))
                        return value;
                    var result = [];
                    value.forEach(function (item) {
                        if (_.isMatch(item, filterObj)) {
                            result.push(item);
                        }
                    });
                    return result;
                };
                FilterByValPipe = __decorate([
                    core_1.Pipe({
                        name: 'filterByVal',
                        pure: true
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterByValPipe);
                return FilterByValPipe;
            }());
            exports_1("FilterByValPipe", FilterByValPipe);
        }
    }
});
//# sourceMappingURL=filterByVal.pipe.js.map