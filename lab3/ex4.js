'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

function inspect(obj) {
  const keys = Object.keys(obj);
  const introspection = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] === 'function') {
      introspection.push([key, obj[key].length]);
    }
  }

  return introspection;
}

const analysis = inspect(iface);
console.dir(analysis);
