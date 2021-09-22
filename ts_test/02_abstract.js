"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @program: algorithm
 * @description: 抽象类就是专门继承的类，不能实例化
 * @author: Jinjf
 * @date: 2021-09-19 21:37
 **/
const customAxios_1 = __importDefault(require("./customAxios"));
class Animal {
}
class Dog extends Animal {
    duck() {
        console.log('汪汪');
    }
}
const map = new Map();
map.set('name', 'tom');
function getName(name) {
    return 'hello' + name;
}
const boo = (name) => {
    return 'nice' + name;
};
class Person {
    constructor() {
        this._money = 0;
    }
    get money() {
        return this._money;
    }
    set money(money) {
        this._money = money;
    }
}
const person = new Person();
person.money = 12000;
customAxios_1.default.get('');
console.log(person.money);
