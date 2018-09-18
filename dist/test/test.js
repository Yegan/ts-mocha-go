"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_in_1 = require("../greet-in");
let xhosa = new greet_in_1.GreetInXhosa();
let french = new greet_in_1.GreetInFrench();
describe('My function', function () {
    it('should test', function () {
        assert_1.default.equal(2, 2);
    });
});
describe('greet person in xhosa', function () {
    it('should greet greg in xhosa', function () {
        assert_1.default.equal(xhosa.greet('Greg'), 'Molo, Greg');
    });
});
describe('greet person in french', function () {
    it('should greet greg in french', function () {
        assert_1.default.equal(french.greet('Greg'), 'Bonjour, Greg');
    });
});
