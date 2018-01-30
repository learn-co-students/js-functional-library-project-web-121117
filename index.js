fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      items = Object.values(collection);
      for (var i = 0; i < items.length; i++) {
        callback(items[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      newCollection = [];
      items = Object.values(collection);
      for (var i = 0; i < items.length; i++) {
        newCollection.push(callback(items[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      for (const item of collection) {
        acc = callback(acc, item, collection);
      }
      return acc;
    },

    find: function(collection, callback) {
      let result;
      for (var item of collection) {
        if (callback(item)) {
          result = item;
          break;
        }
      }
      return result;
    },

    filter: function(collection, callback) {
      let result = [];
      for (var item of collection) {
        if (callback(item)) {
          result.push(item);
        }
      }
      return result;
    },

    size: function(collection) {
      return Object.values(collection).length;
    },

    first: function(arr, n) {
      if (n) {
        return arr.slice(0, n);
      } else {
        return arr[0];
      }
    },

    last: function(arr, n) {
      if (n) {
        return arr.slice(-n);
      } else {
        return arr[arr.length - 1];
      }
    },

    compact: function(arr) {
      let newArr = [];
      for (let item of arr) {
        if (item) {
          newArr.push(item);
        }
      }
      return newArr;
    },

    sortBy: function(arr, callback) {
      newArr = arr.slice();

      try {
        return newArr.sort(function(a, b) {
          return callback(a).localeCompare(callback(b));
        });
      } catch (err) {
        newArr = arr.slice();
        return newArr.sort(function(a, b) {
          return callback(a) - callback(b);
        });
      }
    },

    uniq: function(arr, isSorted, callback) {
      let newArr = [];
      let sortedArr = arr.slice();
      // if(!isSorted){
      //   sortedArr.sort()
      // }

      if (callback) {
        let callbackArr = [];
        for (const item of sortedArr) {
          if (!callbackArr.includes(callback(item))) {
            callbackArr.push(callback(item));
            newArr.push(item);
          }
        }
      } else {
        for (const item of sortedArr) {
          if (!newArr.includes(item)) {
            newArr.push(item);
          }
        }
      }

      return newArr;
    },

    keys: function(object) {
      let keys = [];
      for (let key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      let values = [];
      for (let key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      return keys(object).sort();
    },

    flatten: function(arr, shallow) {
      let newArr = [];
      for (let item of arr) {
        if (item.length && shallow) {
          newArr.push(...fi.flatten(item));
          debugger;
        } else {
          newArr.push(item);
        }
      }
      return newArr;
    }
  };
})();

fi.libraryMethod();
