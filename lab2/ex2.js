'use strict';


const range = (start, end) => {
    const arr = [];
    const step = start <= end ? 1 : -1;

    if (step === 1) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }

    return arr;
};

const res = range(15, 30);
console.dir(res);



const rangeOdd = (start, end) => {
    const arr = [];
    const step = start <= end ? 1 : -1;

    if (step === 1) {
        for (let i = start; i <= end; i += step) {
            if (i % 2 !== 0) arr.push(i);   
        }
    } else {
        for (let i = start; i >= end; i += step) {
            if (i % 2 !== 0) arr.push(i);
        }
    }

    return arr;
};

const resOdd = rangeOdd(15, 30);
console.dir(resOdd);
