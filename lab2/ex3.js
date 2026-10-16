'use strict';


function aver(a, b) {
    let x = (a + b) / 2;
    return x;
}


function sq(x) {
    let y = x ** 2;
    return y;
}


function cube(x) {
    let y = x ** 3;
    return y;
}


function calculate() {
    let array = [];
    for (let i = 0; i < 9; i++) {
        let res = aver(sq(i), cube(i)); 
        array.push(res);
    }
    return array;
}

console.dir(calculate());
