'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateKey(length, allowedChars) {
  let resultKey = '';
  
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * allowedChars.length);
    resultKey = resultKey + allowedChars[index];
  }
  
  return resultKey;
}

const key = generateKey(20, characters);
console.dir(key);
