"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var data_service_1 = require("./../../service/data.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.dataService = core_1.inject(data_service_1.DataService);
        this.user = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.postUser();
    };
    RegisterComponent.prototype.postUser = function () {
        var _this = this;
        this.dataService.postUser(this.user).subscribe({
            next: function (response) { return (_this.message = response); },
            error: function (error) { return alert(error); }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            standalone: true,
            imports: [],
            templateUrl: './register.component.html',
            styleUrl: './register.component.css'
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
