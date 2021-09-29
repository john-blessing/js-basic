/**
 * @program: algorithm
 * @description:
 * @author: Jinjf
 * @date: 2021-07-18 20:46
 **/

var p = new Promise((resolve, reject) => {
    console.log(1)
    resolve(3)
    console.log(2)
    setTimeout(() => {
        console.log(4)
    })
})

p.then(val => {
    console.log(val)
})

// 1, 2, 3, 4