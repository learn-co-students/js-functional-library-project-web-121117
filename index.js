fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for(let i=0; i < collection.length; i++) {
        iteratee(collection[i]);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      let newArr = []
      for(let i=0; i < collection.length; i++) {
        newArr.push(iteratee(collection[i]));
      }
      return newArr;
    },

    reduce: function(collection, iteratee, acc) {
      for(let i=0; i < collection.length; i++) {
        acc = iteratee(collection[i], acc);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for(let i=0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []
      for(let i=0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          newArr.push(collection[i]);
        }
      }
      return newArr;
    },

    size: function(collection) {
      return collection.length
    },

    first: function(array, n) {
      return array.slice(0,n)
    },

    last: function(array, n) {
      let newArr = array.slice();
      return newArr.slice(array.length - n, array.length)
    },

    compact: function(array) {
      let newArr = []
      for(let i=0; i < array.length; i++) {
        if (array[i]) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(array, iteratee) {
      let newArr = array.slice();
      if (typeof(newArr[0]) == 'object') {
        return newArr.sort(function(a, b) { return iteratee(a).localeCompare(iteratee(b)) })
      } else {
        return newArr.sort(function(a, b) { return iteratee(a) - iteratee(b) })
      }
    }

    // flatten: function() {
    //   //flatten to one array
    // },

    uniq: function(array, isSorted, iteratee) {
      let newArr = []
      for(let i = 0; i < array.length; i++){
        if (!newArr.includes(array[i])){
          newArr.push(array[i])
        }
      }
      if (!isSorted && !!iteratee) {
        newArr.sort(function(a, b) { return iteratee(a) - iteratee(b) })
      }
      return newArr
    },

    keys: function(object) {
      let newArr = []
      for(var key in object){
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for(var key in object){
        newArr.push(object[key])
      }
      return newArr
    },

    functions: function(object) {
      let newArr = []       // also how to call previous method
      for(var key in object){
        newArr.push(key)
      }
        return newArr.sort() // test this
    },


  }
})()


fi.libraryMethod()
