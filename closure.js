/**
 * @program: algorithm
 * @description:
 * @author: Jinjf
 * @date: 2021-07-14 13:09
 **/

// function debounce(fn, wait) {
//     let timeout = null;
//     return function () {
//         if (timeout !== null) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(fn, wait);
//     }
// }

function throttle(func, delay, count) {
    let prev = 0;
    let _count = 0;
    let timer = null
    return function () {
        let now = Date.now();
        if (now - prev >= delay || _count < count) {
            _count++
            func.apply(this, arguments)
            prev = Date.now();
        } else {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                _count = 0
            }, count)
        }
    }
}


const fn = throttle(function (msg) {
    console.log(msg)
}, 1000, 3)

function print(msg) {
    fn(msg)
}

print('print 1');
print('print 2');
print('print 3');
print('print 7');
print('print 8');
setTimeout(() => {
    print('print 4');
    print('print 5');
    print('print 6');
    print('print 7');
    print('print 8');
    print('print 9');
}, 5000);
// setTimeout(() => {
//     print('print 7');
//     print('print 8');
//     print('print 9');
// }, 4000);
