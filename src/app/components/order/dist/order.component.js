"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderComponent = void 0;
var navigation_component_1 = require("./../../core/navigation/navigation.component");
var header_component_1 = require("./../../core/header/header.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_component_1 = require("./../../core/menu/menu.component");
var footer_component_1 = require("./../../core/footer/footer.component");
var data_service_1 = require("../../service/data.service");
var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.dataService = core_1.inject(data_service_1.DataService);
    }
    OrderComponent.prototype.ngOnInit = function () {
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
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            standalone: true,
            imports: [
                router_1.RouterOutlet,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                menu_component_1.MenuComponent,
                footer_component_1.FooterComponent,
            ],
            templateUrl: './order.component.html',
            styleUrl: './order.component.css'
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
