"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutComponent = void 0;
var navigation_component_1 = require("../../core/navigation/navigation.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_component_1 = require("../../core/menu/menu.component");
var footer_component_1 = require("../../core/footer/footer.component");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            standalone: true,
            imports: [
                router_1.RouterOutlet,
                navigation_component_1.NavigationComponent,
                menu_component_1.MenuComponent,
                footer_component_1.FooterComponent,
                router_1.RouterLink,
            ],
            templateUrl: '../about/about.component.html',
            styleUrl: './about.component.css'
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
