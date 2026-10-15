'use strict';


const inc = (n) =>{
    return n + 1;
};

const a = 5;
const b = inc(a);
console.dir({a, b});


const inc0bj = (num) => {
    if (num?.n !== undefined) {
        num.n += 1;
    }
};

const obj = {n: 5};
inc0bj(obj);
console.dir({obj});
