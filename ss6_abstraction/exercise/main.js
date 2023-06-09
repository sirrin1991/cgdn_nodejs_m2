"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var square_1 = require("./square");
var rectangle_1 = require("./rectangle");
var circle_1 = require("./circle");
var shape1 = new square_1.Square("Hình vuông", 4);
var shape2 = new rectangle_1.Rectangle("Hình vuông", 4, 5);
var shape3 = new circle_1.Circle("Hình tròn", 4);
console.log(shape1.toString());
console.log(shape2.toString());
console.log(shape3.toString());
shape1.resizeable(50);
shape2.resizeable(50);
shape3.resizeable(50);
console.log("======= After resizeable =======");
console.log(shape1.toString());
console.log(shape2.toString());
console.log(shape3.toString());
