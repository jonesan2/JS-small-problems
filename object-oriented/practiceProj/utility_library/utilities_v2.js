"use strict";

var _ = function(data) {
  let u = {
    first() {
      return data[0]; 
    },

    last() {
      return data[data.length - 1];
    },

    without() {
      let arrc = data.slice();
      const unwanted = Array.prototype.slice.call(arguments);
      unwanted.forEach(elemToRemove => {
        arrc = arrc.filter(curElem => { return curElem !== elemToRemove });
      });
      return arrc;
    },

    lastIndexOf() {
      let result = null;
      let value = arguments[0];
      data.forEach((elem, idx) => {
        if (elem === value) {
          result = idx; 
        }
      });
      return result;
    },

    sample(qty) {
      let arrc = data.slice();
      let idx = 0;
      if (!(typeof qty === 'number')) {
        idx = Math.floor((Math.random() * arrc.length));
        return arrc[idx];
      } else {
        let result = [];
        while (qty > 0) {
          idx = Math.floor((Math.random() * arrc.length));
          result.push(arrc[idx]);
          arrc.splice(idx, 1);
          qty -= 1;
        }

        return result;
      }
    },

    findWhere(obj) {
      return this.where(obj)[0];
    },

    where(obj) {
      let result = [];
      for (let idx = 0; idx < data.length; idx += 1) {
        let match = true;
        Object.keys(obj).forEach(key => {
          match = match && (obj[key] === data[idx][key]);
        });

        if (match) { result.push(data[idx]); }
      };

      return result;
    },

    pluck(key) {
      let result = [];
      data.forEach(obj => {
        if (Object.keys(obj).includes(key)) {
          result.push(obj[key]);
        }
      });

      return result;
    },

    keys() {
      return Object.keys(data);
    },

    values() {
      return Object.values(data);
    },

    pick(...pickKeys) {
      let result = {};
      Object.keys(data).forEach(dataKey => {
        if (pickKeys.includes(dataKey)) {
          result[dataKey] = data[dataKey];
        }
      });

      return result;
    },

    omit(...omitKeys) {
      let result = {};
      Object.keys(data).forEach(dataKey => {
        if (!(omitKeys.includes(dataKey))) {
          result[dataKey] = data[dataKey];
        }
      });

      return result;
    },

    has(key) {
      return Object.keys(data).includes(key);
    },
  };

  (["isArray", "isObject", "isFunction", "isString", "isNumber", "isBoolean",
    "isElement"]).forEach(method => {
    u[method] = function() { _[method].call(u, data); };
  });

  return u;
};

_.range = function() {
  const args = Array.prototype.slice.call(arguments);
  let result = [];
  let start = 0;
  let end = 0; 

  switch (args.length) {
    case 1:
      start = 0;
      end = args[0];
      break;
    case 2:
      start = args[0];
      end = args[1];
      break;
    default:
      console.log('Error: Incorrect Number of Arguments');
  }

  for (let idx = start; idx < end; idx += 1) {
    result.push(idx);
  } 
  return result;
};

_.extend = function(obj, ...objs) {
  objs.forEach(addObj => {
    Object.keys(addObj).forEach(key => {
      obj[key] = addObj[key];
    });
  });
  return obj;
};

_.isArray = function(obj) {
  return Array.isArray(obj);
};

_.isObject = function(obj) {
  return (typeof obj === 'object' || typeof obj === 'function');
};

_.isFunction = function(obj) {
  return (typeof obj === 'function');
};

_.isString = function(obj) {
  return (typeof obj === 'string' ||
          Object.getPrototypeOf(obj) === String.prototype);
};

_.isNumber = function(obj) {
  return (typeof obj === 'number' ||
          Object.getPrototypeOf(obj) === Number.prototype);
};

_.isBoolean = function(obj) {
  return (typeof obj === 'boolean' ||
          Object.getPrototypeOf(obj) === Boolean.prototype);
};

_.isElement = function(obj) {
  return obj.nodeType === 1;
};