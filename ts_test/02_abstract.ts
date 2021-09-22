/**
 * @program: algorithm
 * @description: 抽象类就是专门继承的类，不能实例化
 * @author: Jinjf
 * @date: 2021-09-19 21:37
 **/
import api from './customAxios';

abstract class Animal {
    abstract duck(): void;
}

class Dog extends Animal {
    duck() {
        console.log('汪汪')
    }
}

const map = new Map<string, string>();

map.set('name', 'tom')

function getName(name: string): string {
    return 'hello' + name
}
// typeof 推出类型
type Foo = typeof getName;

const boo:Foo = (name: string) => {
    return 'nice' + name
}

interface Boo {
    name: string;
    age: number;
}

type Hoo = keyof Boo;

class Person {
    private _money: number = 0;

    get money() {
        return this._money
    }

    set money(money: number) {
        this._money = money
    }
}
const person = new Person();
person.money = 12000

api.get('')

console.log(person.money)
