"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var store_menu_component_1 = require("./../store-menu/store-menu.component");
var footer_component_1 = require("./../../core/footer/footer.component");
var error404_component_1 = require("./../error404/error404.component");
var menu_component_1 = require("./../../core/menu/menu.component");
var navigation_component_1 = require("./../../core/navigation/navigation.component");
var core_1 = require("@angular/core");
var data_service_1 = require("./../../service/data.service");
var header_component_1 = require("./../../core/header/header.component");
var router_1 = require("@angular/router");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.dataService = core_1.inject(data_service_1.DataService);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getProduct().subscribe({
            next: function (response) {
                console.log(response);
                _this.product = response;
            }
        });
        // Assuming you want to call deleteProduct here, if not, adjust accordingly
        this.dataService.deleteProduct(this.product).subscribe({
            next: function (response) {
                console.log(response);
                _this.product = response;
            }
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            standalone: true,
            imports: [
                footer_component_1.FooterComponent,
                error404_component_1.Error404Component,
                menu_component_1.MenuComponent,
                navigation_component_1.NavigationComponent,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                footer_component_1.FooterComponent,
                store_menu_component_1.StoreMenuComponent,
                router_1.RouterOutlet,
            ],
            templateUrl: './product.component.html',
            styleUrl: './product.component.css'
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
