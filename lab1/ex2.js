'use strict';


const mixedelements = [
    'apple', 42, false, null, undefined, 
    {id: 101}, true, 0, -9.99, 
    NaN, 'open-source', {tags: ['js', 'git'] }, Infinity, false
];


const staticCounters = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    object: 0,
};

for (const item of mixedelements) {
    const currentType = typeof item;

    staticCounters[currentType]++;
}

console.log('Статичний підрахунок типів:');
console.log(staticCounters);




const dynamicCounters = {};

for (const item of mixedelements) {
    const currentType = typeof item;

 
    if (dynamicCounters[currentType] === undefined) {
        dynamicCounters[currentType] = 1;
    } else {
        dynamicCounters[currentType]++;
    }
}

console.log('Динамічний підрахунок типів:');
console.log(dynamicCounters);
