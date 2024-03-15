"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(model, color) {
        this.model = model;
        this.color = color;
    }
    Vehicle.prototype.display = function () {
        console.log("Model: ".concat(this.model, " | Color: ").concat(this.color));
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
