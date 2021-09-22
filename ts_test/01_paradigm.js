"use strict";
/**
 * @program: algorithm
 * @description:
 * @author: Jinjf
 * @date: 2021-09-19 21:12
 **/
/**
 * 定义函数或类型，类型不明确，不确定类型；
 * 经过类型检查
 * @param a
 */
function fn(a) {
    return a;
}
fn(100);
fn('tom'); // 指定泛型
function foo(a, b) {
    return a;
}
foo(10, '20');
console.log(123);
