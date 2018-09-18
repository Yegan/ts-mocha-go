"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("../greet"));
const assert_1 = __importDefault(require("assert"));
assert_1.default.equal('Hello Bob Crow we cant contact you', greet_1.default({
    firstName: "Bob",
    lastName: "Crow",
    email: 'bob@crow.com'
}));
