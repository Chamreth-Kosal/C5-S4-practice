"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(plaetID, weight) {
        this.plaetID = plaetID;
        this.weight = weight;
    }
    Vehicle.prototype.toString = function () {
        return this.plaetID + "weight" + this.weight;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
