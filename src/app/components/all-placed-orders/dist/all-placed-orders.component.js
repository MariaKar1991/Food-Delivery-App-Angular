"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllPlacedOrdersComponent = void 0;
var core_1 = require("@angular/core");
var navigation_component_1 = require("./../../core/navigation/navigation.component");
var header_component_1 = require("./../../core/header/header.component");
var router_1 = require("@angular/router");
var menu_component_1 = require("./../../core/menu/menu.component");
var footer_component_1 = require("./../../core/footer/footer.component");
var AllPlacedOrdersComponent = /** @class */ (function () {
    function AllPlacedOrdersComponent() {
    }
    AllPlacedOrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-all-placed-orders',
            standalone: true,
            imports: [
                router_1.RouterOutlet,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                menu_component_1.MenuComponent,
                footer_component_1.FooterComponent,
            ],
            templateUrl: './all-placed-orders.component.html',
            styleUrl: './all-placed-orders.component.css'
        })
    ], AllPlacedOrdersComponent);
    return AllPlacedOrdersComponent;
}());
exports.AllPlacedOrdersComponent = AllPlacedOrdersComponent;
