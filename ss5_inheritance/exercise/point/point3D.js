"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point2D_1 = require("./point2D");
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.setZ = function (z) {
        this.z = z;
    };
    Point3D.prototype.getZ = function () {
        return this.z;
    };
    Point3D.prototype.getXYZ = function () {
        return this;
    };
    Point3D.prototype.setXYZ = function (x, y, z) {
        _super.prototype.setXY.call(this, x, y);
        this.z = z;
    };
    Point3D.prototype.toString = function () {
        return "A Point3D x = ".concat(_super.prototype.getX.call(this), ", y = ").concat(_super.prototype.getY.call(this), ", z = ").concat(this.z);
    };
    return Point3D;
}(point2D_1.default));
exports.default = Point3D;
