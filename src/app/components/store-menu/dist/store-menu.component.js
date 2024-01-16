"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StoreMenuComponent = void 0;
var core_1 = require("@angular/core");
var data_service_1 = require("../../service/data.service");
var StoreMenuComponent = /** @class */ (function () {
    function StoreMenuComponent() {
        this.dataService = core_1.inject(data_service_1.DataService);
    }
    StoreMenuComponent.prototype.ngOnInit = function () {
        this.loadMenu();
    };
    StoreMenuComponent.prototype.loadMenu = function () {
        var _this = this;
        this.dataService.getProduct().subscribe({
            next: function (response) {
                _this.product = response;
            },
            error: function (error) {
                console.error('Error loading menu', error);
            }
        });
    };
    StoreMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-store-menu',
            standalone: true,
            imports: [],
            templateUrl: './store-menu.component.html',
            styleUrl: './store-menu.component.css'
        })
    ], StoreMenuComponent);
    return StoreMenuComponent;
}());
exports.StoreMenuComponent = StoreMenuComponent;
