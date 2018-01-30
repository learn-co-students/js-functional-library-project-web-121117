fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      for(let i = 0; i < collection.length; i++) {
		     fn(collection[i]);
       };
	     return collection;
     },

    map: function(collection, fn, key) {
      const newCollection = [];
      for (let i = 0; i < collection.length; i++) {
		    if (typeof collection[i] === "object") {
			    newCollection.push(fn(collection[i][key]));
        } else {
			    newCollection.push(fn(collection[i]));
        };
      };
	    return newCollection;
    },

    reduce: function(collection, fn, acc, key) {
      for(let i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "object") {
          acc = fn(collection[i][key], acc);
        } else {
          acc = fn(collection[i], acc);
        };
      };
      return acc;
    },

    find: function(collection, predicate, key) {
	    for(let i = 0; i < collection.length; i++) {
		    if (typeof collection[i] === "object") {
			    if (predicate === collection[i][key]) {
				    return collection[i][key];
          };
        } else {
			    if (collection[i] === predicate) {
				    return collection[i];
        	};
    	  };
	    };
    },

    filter: function(collection, predicate, key) {
	    let newArray = [];
	    for(let i = 0; i < collection.length; i++) {
		    if (typeof collection[i] === "object") {
			    if (predicate === collection[i][key]) {
				    newArray.push(collection[i]);
          };
        } else {
			    if (collection[i] === predicate) {
				    newArray.push(collection[i]);
        	};
    	  };
	    };
	    return newArray;
    },

    size: function(collection) {
      let counter = 0;
      for (const item in collection) {
        counter++;
      };
      return counter;
    },

    first: function(collection, n) {
      const n2 = 1;
      if (n2 < n) {
        return collection.slice(0, n);
      } else {
        return collection.slice(0, n2);
      };
    },

    last: function (collection, n) {
      if (n < 1 || typeof n !== "number") {
  		  return collection.slice(collection.length - 1, collection.length );
      } else {
  		  return collection.slice(collection.length - n, collection.length);
      };
    },

    compact: function (collection) {
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i] === true) {
          newArray.push(collection[i]);
        };
      };
      return newArray;
    },

    sortBy: function (collection, callback) {
      if (typeof collection[0] === "number") {
        return collection.sort(function(a, b) { callback(a) - callback(b) });
      } else {
        return collection.sort(function(a, b) { a.name.localeCompare(b.name)}).reverse()
      }
    }

    flatten: function (collection, shallow) {
      let playTime = [];
      if (Array.isArray(collection)) {
        if(shallow) {
          shallow = false;
          for (const element of collection) {
            playTime.push(...flatten(element));
          }
        } else {
          playTime.push(...collection);
        }
      } else {
        playTime.push(collection);
      };
      return playTime;
    },

    uniq: function (collection) {
      let newArr = [];
      for (const element of collection) {
        if (!newArr.includes(element)) {
          newArr.push(element);
        };
      };
      return newArr;
    },

    keys: function (collection) {
      let newArr = [];
      for (const key in collection) {
        newArr.push(key);
      };
      return newArr;
    },

    values: function (collection) {
      let newArr = [];
      for (const key in collection) {
        newArr.push(collection[key]);
      };
      return newArr;
    },

    functions: function (collection) {
      let newArr = [];
      for (const key in collection) {
        newArr.push(key);
      };
      newArr.sort(function (a, b) {
        return a.localeCompare(b);
      });
      return newArr;
    },










}
})()

fi.libraryMethod()
