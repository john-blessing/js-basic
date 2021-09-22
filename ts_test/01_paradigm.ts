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
function fn<K>(a: K): K {
    return a;
}

fn(100)
fn<string>('tom') // 指定泛型

function foo<K, T>(a: K, b: T): K {
    return a;
}

foo<number, string>(10, '20');

console.log(123)