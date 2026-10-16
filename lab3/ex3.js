'use strict';

function ipToNumber(ipAddress) {
  const bytes = ipAddress.split('.');
  let totalNumber = 0;

  for (let i = 0; i < bytes.length; i++) {
    const byte = parseInt(bytes[i], 10);
    totalNumber = totalNumber + (byte << (8 * (3 - i)));
  }

  return totalNumber >>> 0;
}

const result = ipToNumber('127.0.0.1');
console.dir(result);
