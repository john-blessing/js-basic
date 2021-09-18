/*
 * @Author: your name
 * @Date: 2021-07-12 09:17:51
 * @LastEditTime: 2021-08-01 23:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/dynamicPrograming.js
 */
/**
 * @program: algorithm
 * @description:
 * @author: Jinjf
 * @date: 2021-07-12 09:17
 **/

// 0, 1, 1, 2, 3, 5, 8
console.time()
function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }
    return fib(n - 2) + fib(n - 1)
}
console.timeEnd()
console.log(fib(40))

// 记忆法
console.time()
const tmp = {}
function fib1(n) {
    if (tmp[n]) {
        return tmp[n]
    }
    if (n === 0 || n === 1) {
        return n
    }
    tmp[n] = fib1(n - 2) + fib1(n - 1)
    return tmp[n]
}
console.timeEnd()
console.log(fib1(40))