(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (_dereq_, module, exports) {
    (function (global) {
      "use strict";

      _dereq_(295);

      _dereq_(296);

      _dereq_(2);

      if (global._babelPolyfill) {
        throw new Error("only one instance of babel-polyfill is allowed");
      }
      global._babelPolyfill = true;

      var DEFINE_PROPERTY = "defineProperty";
      function define(O, key, value) {
        O[key] || Object[DEFINE_PROPERTY](O, key, {
          writable: true,
          configurable: true,
          value: value
        });
      }

      define(String.prototype, "padLeft", "".padStart);
      define(String.prototype, "padRight", "".padEnd);

      "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
        [][key] && define(Array, key, Function.call.bind([][key]));
      });
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, { "2": 2, "295": 295, "296": 296 }], 2: [function (_dereq_, module, exports) {
    _dereq_(119);
    module.exports = _dereq_(23).RegExp.escape;
  }, { "119": 119, "23": 23 }], 3: [function (_dereq_, module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
  }, {}], 4: [function (_dereq_, module, exports) {
    var cof = _dereq_(18);
    module.exports = function (it, msg) {
      if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
      return +it;
    };
  }, { "18": 18 }], 5: [function (_dereq_, module, exports) {
    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = _dereq_(117)('unscopables'),
        ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) _dereq_(40)(ArrayProto, UNSCOPABLES, {});
    module.exports = function (key) {
      ArrayProto[UNSCOPABLES][key] = true;
    };
  }, { "117": 117, "40": 40 }], 6: [function (_dereq_, module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
        throw TypeError(name + ': incorrect invocation!');
      }return it;
    };
  }, {}], 7: [function (_dereq_, module, exports) {
    var isObject = _dereq_(49);
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
  }, { "49": 49 }], 8: [function (_dereq_, module, exports) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    'use strict';

    var toObject = _dereq_(109),
        toIndex = _dereq_(105),
        toLength = _dereq_(108);

    module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
      var O = toObject(this),
          len = toLength(O.length),
          to = toIndex(target, len),
          from = toIndex(start, len),
          end = arguments.length > 2 ? arguments[2] : undefined,
          count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
          inc = 1;
      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count-- > 0) {
        if (from in O) O[to] = O[from];else delete O[to];
        to += inc;
        from += inc;
      }return O;
    };
  }, { "105": 105, "108": 108, "109": 109 }], 9: [function (_dereq_, module, exports) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    'use strict';

    var toObject = _dereq_(109),
        toIndex = _dereq_(105),
        toLength = _dereq_(108);
    module.exports = function fill(value /*, start = 0, end = @length */) {
      var O = toObject(this),
          length = toLength(O.length),
          aLen = arguments.length,
          index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
          end = aLen > 2 ? arguments[2] : undefined,
          endPos = end === undefined ? length : toIndex(end, length);
      while (endPos > index) {
        O[index++] = value;
      }return O;
    };
  }, { "105": 105, "108": 108, "109": 109 }], 10: [function (_dereq_, module, exports) {
    var forOf = _dereq_(37);

    module.exports = function (iter, ITERATOR) {
      var result = [];
      forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };
  }, { "37": 37 }], 11: [function (_dereq_, module, exports) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = _dereq_(107),
        toLength = _dereq_(108),
        toIndex = _dereq_(105);
    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this),
            length = toLength(O.length),
            index = toIndex(fromIndex, length),
            value;
        // Array#includes uses SameValueZero equality algorithm
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          if (value != value) return true;
          // Array#toIndex ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
        }return !IS_INCLUDES && -1;
      };
    };
  }, { "105": 105, "107": 107, "108": 108 }], 12: [function (_dereq_, module, exports) {
    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex
    var ctx = _dereq_(25),
        IObject = _dereq_(45),
        toObject = _dereq_(109),
        toLength = _dereq_(108),
        asc = _dereq_(15);
    module.exports = function (TYPE, $create) {
      var IS_MAP = TYPE == 1,
          IS_FILTER = TYPE == 2,
          IS_SOME = TYPE == 3,
          IS_EVERY = TYPE == 4,
          IS_FIND_INDEX = TYPE == 6,
          NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
          create = $create || asc;
      return function ($this, callbackfn, that) {
        var O = toObject($this),
            self = IObject(O),
            f = ctx(callbackfn, that, 3),
            length = toLength(self.length),
            index = 0,
            result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
            val,
            res;
        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            val = self[index];
            res = f(val, index, O);
            if (TYPE) {
              if (IS_MAP) result[index] = res; // map
              else if (res) switch (TYPE) {
                  case 3:
                    return true; // some
                  case 5:
                    return val; // find
                  case 6:
                    return index; // findIndex
                  case 2:
                    result.push(val); // filter
                } else if (IS_EVERY) return false; // every
            }
          }
        }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };
  }, { "108": 108, "109": 109, "15": 15, "25": 25, "45": 45 }], 13: [function (_dereq_, module, exports) {
    var aFunction = _dereq_(3),
        toObject = _dereq_(109),
        IObject = _dereq_(45),
        toLength = _dereq_(108);

    module.exports = function (that, callbackfn, aLen, memo, isRight) {
      aFunction(callbackfn);
      var O = toObject(that),
          self = IObject(O),
          length = toLength(O.length),
          index = isRight ? length - 1 : 0,
          i = isRight ? -1 : 1;
      if (aLen < 2) for (;;) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (; isRight ? index >= 0 : length > index; index += i) {
        if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
      }return memo;
    };
  }, { "108": 108, "109": 109, "3": 3, "45": 45 }], 14: [function (_dereq_, module, exports) {
    var isObject = _dereq_(49),
        isArray = _dereq_(47),
        SPECIES = _dereq_(117)('species');

    module.exports = function (original) {
      var C;
      if (isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
        if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }return C === undefined ? Array : C;
    };
  }, { "117": 117, "47": 47, "49": 49 }], 15: [function (_dereq_, module, exports) {
    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    var speciesConstructor = _dereq_(14);

    module.exports = function (original, length) {
      return new (speciesConstructor(original))(length);
    };
  }, { "14": 14 }], 16: [function (_dereq_, module, exports) {
    'use strict';

    var aFunction = _dereq_(3),
        isObject = _dereq_(49),
        invoke = _dereq_(44),
        arraySlice = [].slice,
        factories = {};

    var construct = function construct(F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) {
          n[i] = 'a[' + i + ']';
        }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
      }return factories[len](F, args);
    };

    module.exports = Function.bind || function bind(that /*, args... */) {
      var fn = aFunction(this),
          partArgs = arraySlice.call(arguments, 1);
      var bound = function bound() /* args... */{
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };
      if (isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };
  }, { "3": 3, "44": 44, "49": 49 }], 17: [function (_dereq_, module, exports) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = _dereq_(18),
        TAG = _dereq_(117)('toStringTag')
    // ES3 wrong here
    ,
        ARG = cof(function () {
      return arguments;
    }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (e) {/* empty */}
    };

    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
  }, { "117": 117, "18": 18 }], 18: [function (_dereq_, module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
  }, {}], 19: [function (_dereq_, module, exports) {
    'use strict';

    var dP = _dereq_(67).f,
        create = _dereq_(66),
        redefineAll = _dereq_(86),
        ctx = _dereq_(25),
        anInstance = _dereq_(6),
        defined = _dereq_(27),
        forOf = _dereq_(37),
        $iterDefine = _dereq_(53),
        step = _dereq_(55),
        setSpecies = _dereq_(91),
        DESCRIPTORS = _dereq_(28),
        fastKey = _dereq_(62).fastKey,
        SIZE = DESCRIPTORS ? '_s' : 'size';

    var getEntry = function getEntry(that, key) {
      // fast case
      var index = fastKey(key),
          entry;
      if (index !== 'F') return that._i[index];
      // frozen object case
      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._i = create(null); // index
          that._f = undefined; // first entry
          that._l = undefined; // last entry
          that[SIZE] = 0; // size
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }
            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function _delete(key) {
            var that = this,
                entry = getEntry(that, key);
            if (entry) {
              var next = entry.n,
                  prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            }return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn /*, that = undefined */) {
            anInstance(this, C, 'forEach');
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
                entry;
            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this);
              // revert to the last existing entry
              while (entry && entry.r) {
                entry = entry.p;
              }
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });
        if (DESCRIPTORS) dP(C.prototype, 'size', {
          get: function get() {
            return defined(this[SIZE]);
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var entry = getEntry(that, key),
            prev,
            index;
        // change existing entry
        if (entry) {
          entry.v = value;
          // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true), // <- index
            k: key, // <- key
            v: value, // <- value
            p: prev = that._l, // <- previous entry
            n: undefined, // <- next entry
            r: false // <- removed
          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++;
          // add to index
          if (index !== 'F') that._i[index] = entry;
        }return that;
      },
      getEntry: getEntry,
      setStrong: function setStrong(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function (iterated, kind) {
          this._t = iterated; // target
          this._k = kind; // kind
          this._l = undefined; // previous
        }, function () {
          var that = this,
              kind = that._k,
              entry = that._l;
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          } // get next entry
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return step(1);
          }
          // return step by kind
          if (kind == 'keys') return step(0, entry.k);
          if (kind == 'values') return step(0, entry.v);
          return step(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        setSpecies(NAME);
      }
    };
  }, { "25": 25, "27": 27, "28": 28, "37": 37, "53": 53, "55": 55, "6": 6, "62": 62, "66": 66, "67": 67, "86": 86, "91": 91 }], 20: [function (_dereq_, module, exports) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var classof = _dereq_(17),
        from = _dereq_(10);
    module.exports = function (NAME) {
      return function toJSON() {
        if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
        return from(this);
      };
    };
  }, { "10": 10, "17": 17 }], 21: [function (_dereq_, module, exports) {
    'use strict';

    var redefineAll = _dereq_(86),
        getWeak = _dereq_(62).getWeak,
        anObject = _dereq_(7),
        isObject = _dereq_(49),
        anInstance = _dereq_(6),
        forOf = _dereq_(37),
        createArrayMethod = _dereq_(12),
        $has = _dereq_(39),
        arrayFind = createArrayMethod(5),
        arrayFindIndex = createArrayMethod(6),
        id = 0;

    // fallback for uncaught frozen keys
    var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function UncaughtFrozenStore() {
      this.a = [];
    };
    var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
      return arrayFind(store.a, function (it) {
        return it[0] === key;
      });
    };
    UncaughtFrozenStore.prototype = {
      get: function get(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function has(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function set(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;else this.a.push([key, value]);
      },
      'delete': function _delete(key) {
        var index = arrayFindIndex(this.a, function (it) {
          return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
      }
    };

    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._i = id++; // collection id
          that._l = undefined; // leak store for uncaught frozen objects
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function _delete(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(this)['delete'](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(this).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };
  }, { "12": 12, "37": 37, "39": 39, "49": 49, "6": 6, "62": 62, "7": 7, "86": 86 }], 22: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(38),
        $export = _dereq_(32),
        redefine = _dereq_(87),
        redefineAll = _dereq_(86),
        meta = _dereq_(62),
        forOf = _dereq_(37),
        anInstance = _dereq_(6),
        isObject = _dereq_(49),
        fails = _dereq_(34),
        $iterDetect = _dereq_(54),
        setToStringTag = _dereq_(92),
        inheritIfRequired = _dereq_(43);

    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global[NAME],
          C = Base,
          ADDER = IS_MAP ? 'set' : 'add',
          proto = C && C.prototype,
          O = {};
      var fixMethod = function fixMethod(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, KEY == 'delete' ? function (a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a) {
          return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a) {
          fn.call(this, a === 0 ? 0 : a);return this;
        } : function set(a, b) {
          fn.call(this, a === 0 ? 0 : a, b);return this;
        });
      };
      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      } else {
        var instance = new C()
        // early implementations not supports chaining
        ,
            HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        ,
            THROWS_ON_PRIMITIVES = fails(function () {
          instance.has(1);
        })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        ,
            ACCEPT_ITERABLES = $iterDetect(function (iter) {
          new C(iter);
        }) // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        ,
            BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C(),
              index = 5;
          while (index--) {
            $instance[ADDER](index, index);
          }return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            anInstance(target, C, NAME);
            var that = inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      setToStringTag(C, NAME);

      O[NAME] = C;
      $export($export.G + $export.W + $export.F * (C != Base), O);

      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

      return C;
    };
  }, { "32": 32, "34": 34, "37": 37, "38": 38, "43": 43, "49": 49, "54": 54, "6": 6, "62": 62, "86": 86, "87": 87, "92": 92 }], 23: [function (_dereq_, module, exports) {
    var core = module.exports = { version: '2.4.0' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  }, {}], 24: [function (_dereq_, module, exports) {
    'use strict';

    var $defineProperty = _dereq_(67),
        createDesc = _dereq_(85);

    module.exports = function (object, index, value) {
      if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
    };
  }, { "67": 67, "85": 85 }], 25: [function (_dereq_, module, exports) {
    // optional / simple context binding
    var aFunction = _dereq_(3);
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };
        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function () /* ...args */{
        return fn.apply(that, arguments);
      };
    };
  }, { "3": 3 }], 26: [function (_dereq_, module, exports) {
    'use strict';

    var anObject = _dereq_(7),
        toPrimitive = _dereq_(110),
        NUMBER = 'number';

    module.exports = function (hint) {
      if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
      return toPrimitive(anObject(this), hint != NUMBER);
    };
  }, { "110": 110, "7": 7 }], 27: [function (_dereq_, module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
  }, {}], 28: [function (_dereq_, module, exports) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !_dereq_(34)(function () {
      return Object.defineProperty({}, 'a', { get: function get() {
          return 7;
        } }).a != 7;
    });
  }, { "34": 34 }], 29: [function (_dereq_, module, exports) {
    var isObject = _dereq_(49),
        document = _dereq_(38).document
    // in old IE typeof document.createElement is 'object'
    ,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
  }, { "38": 38, "49": 49 }], 30: [function (_dereq_, module, exports) {
    // IE 8- don't enum bug keys
    module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
  }, {}], 31: [function (_dereq_, module, exports) {
    // all enumerable object keys, includes symbols
    var getKeys = _dereq_(76),
        gOPS = _dereq_(73),
        pIE = _dereq_(77);
    module.exports = function (it) {
      var result = getKeys(it),
          getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it),
            isEnum = pIE.f,
            i = 0,
            key;
        while (symbols.length > i) {
          if (isEnum.call(it, key = symbols[i++])) result.push(key);
        }
      }return result;
    };
  }, { "73": 73, "76": 76, "77": 77 }], 32: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        core = _dereq_(23),
        hide = _dereq_(40),
        redefine = _dereq_(87),
        ctx = _dereq_(25),
        PROTOTYPE = 'prototype';

    var $export = function $export(type, name, source) {
      var IS_FORCED = type & $export.F,
          IS_GLOBAL = type & $export.G,
          IS_STATIC = type & $export.S,
          IS_PROTO = type & $export.P,
          IS_BIND = type & $export.B,
          target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
          exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
          expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
          key,
          own,
          out,
          exp;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // extend global
        if (target) redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };
    global.core = core;
    // type bitmap
    $export.F = 1; // forced
    $export.G = 2; // global
    $export.S = 4; // static
    $export.P = 8; // proto
    $export.B = 16; // bind
    $export.W = 32; // wrap
    $export.U = 64; // safe
    $export.R = 128; // real proto method for `library` 
    module.exports = $export;
  }, { "23": 23, "25": 25, "38": 38, "40": 40, "87": 87 }], 33: [function (_dereq_, module, exports) {
    var MATCH = _dereq_(117)('match');
    module.exports = function (KEY) {
      var re = /./;
      try {
        '/./'[KEY](re);
      } catch (e) {
        try {
          re[MATCH] = false;
          return !'/./'[KEY](re);
        } catch (f) {/* empty */}
      }return true;
    };
  }, { "117": 117 }], 34: [function (_dereq_, module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }, {}], 35: [function (_dereq_, module, exports) {
    'use strict';

    var hide = _dereq_(40),
        redefine = _dereq_(87),
        fails = _dereq_(34),
        defined = _dereq_(27),
        wks = _dereq_(117);

    module.exports = function (KEY, length, exec) {
      var SYMBOL = wks(KEY),
          fns = exec(defined, SYMBOL, ''[KEY]),
          strfn = fns[0],
          rxfn = fns[1];
      if (fails(function () {
        var O = {};
        O[SYMBOL] = function () {
          return 7;
        };
        return ''[KEY](O) != 7;
      })) {
        redefine(String.prototype, KEY, strfn);
        hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) {
          return rxfn.call(string, this, arg);
        }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) {
          return rxfn.call(string, this);
        });
      }
    };
  }, { "117": 117, "27": 27, "34": 34, "40": 40, "87": 87 }], 36: [function (_dereq_, module, exports) {
    'use strict';
    // 21.2.5.3 get RegExp.prototype.flags

    var anObject = _dereq_(7);
    module.exports = function () {
      var that = anObject(this),
          result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };
  }, { "7": 7 }], 37: [function (_dereq_, module, exports) {
    var ctx = _dereq_(25),
        call = _dereq_(51),
        isArrayIter = _dereq_(46),
        anObject = _dereq_(7),
        toLength = _dereq_(108),
        getIterFn = _dereq_(118),
        BREAK = {},
        RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : getIterFn(iterable),
          f = ctx(fn, that, entries ? 2 : 1),
          index = 0,
          length,
          step,
          iterator,
          result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
      // fast case for arrays with default iterator
      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  }, { "108": 108, "118": 118, "25": 25, "46": 46, "51": 51, "7": 7 }], 38: [function (_dereq_, module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  }, {}], 39: [function (_dereq_, module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
  }, {}], 40: [function (_dereq_, module, exports) {
    var dP = _dereq_(67),
        createDesc = _dereq_(85);
    module.exports = _dereq_(28) ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
  }, { "28": 28, "67": 67, "85": 85 }], 41: [function (_dereq_, module, exports) {
    module.exports = _dereq_(38).document && document.documentElement;
  }, { "38": 38 }], 42: [function (_dereq_, module, exports) {
    module.exports = !_dereq_(28) && !_dereq_(34)(function () {
      return Object.defineProperty(_dereq_(29)('div'), 'a', { get: function get() {
          return 7;
        } }).a != 7;
    });
  }, { "28": 28, "29": 29, "34": 34 }], 43: [function (_dereq_, module, exports) {
    var isObject = _dereq_(49),
        setPrototypeOf = _dereq_(90).set;
    module.exports = function (that, target, C) {
      var P,
          S = target.constructor;
      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      }return that;
    };
  }, { "49": 49, "90": 90 }], 44: [function (_dereq_, module, exports) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined;
      switch (args.length) {
        case 0:
          return un ? fn() : fn.call(that);
        case 1:
          return un ? fn(args[0]) : fn.call(that, args[0]);
        case 2:
          return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
        case 3:
          return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
        case 4:
          return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      }return fn.apply(that, args);
    };
  }, {}], 45: [function (_dereq_, module, exports) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = _dereq_(18);
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
  }, { "18": 18 }], 46: [function (_dereq_, module, exports) {
    // check on default Array iterator
    var Iterators = _dereq_(56),
        ITERATOR = _dereq_(117)('iterator'),
        ArrayProto = Array.prototype;

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
  }, { "117": 117, "56": 56 }], 47: [function (_dereq_, module, exports) {
    // 7.2.2 IsArray(argument)
    var cof = _dereq_(18);
    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == 'Array';
    };
  }, { "18": 18 }], 48: [function (_dereq_, module, exports) {
    // 20.1.2.3 Number.isInteger(number)
    var isObject = _dereq_(49),
        floor = Math.floor;
    module.exports = function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor(it) === it;
    };
  }, { "49": 49 }], 49: [function (_dereq_, module, exports) {
    module.exports = function (it) {
      return (typeof it === "undefined" ? "undefined" : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
    };
  }, {}], 50: [function (_dereq_, module, exports) {
    // 7.2.8 IsRegExp(argument)
    var isObject = _dereq_(49),
        cof = _dereq_(18),
        MATCH = _dereq_(117)('match');
    module.exports = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
    };
  }, { "117": 117, "18": 18, "49": 49 }], 51: [function (_dereq_, module, exports) {
    // call something on iterator step with safe closing on error
    var anObject = _dereq_(7);
    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
        // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
      }
    };
  }, { "7": 7 }], 52: [function (_dereq_, module, exports) {
    'use strict';

    var create = _dereq_(66),
        descriptor = _dereq_(85),
        setToStringTag = _dereq_(92),
        IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    _dereq_(40)(IteratorPrototype, _dereq_(117)('iterator'), function () {
      return this;
    });

    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
      setToStringTag(Constructor, NAME + ' Iterator');
    };
  }, { "117": 117, "40": 40, "66": 66, "85": 85, "92": 92 }], 53: [function (_dereq_, module, exports) {
    'use strict';

    var LIBRARY = _dereq_(58),
        $export = _dereq_(32),
        redefine = _dereq_(87),
        hide = _dereq_(40),
        has = _dereq_(39),
        Iterators = _dereq_(56),
        $iterCreate = _dereq_(52),
        setToStringTag = _dereq_(92),
        getPrototypeOf = _dereq_(74),
        ITERATOR = _dereq_(117)('iterator'),
        BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
    ,
        FF_ITERATOR = '@@iterator',
        KEYS = 'keys',
        VALUES = 'values';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function getMethod(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };
          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + ' Iterator',
          DEF_VALUES = DEFAULT == VALUES,
          VALUES_BUG = false,
          proto = Base.prototype,
          $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
          $default = $native || getMethod(DEFAULT),
          $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
          $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
          methods,
          key,
          IteratorPrototype;
      // Fix native
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true);
          // fix for some old engines
          if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
      // Define iterator
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      // Plug for library
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
  }, { "117": 117, "32": 32, "39": 39, "40": 40, "52": 52, "56": 56, "58": 58, "74": 74, "87": 87, "92": 92 }], 54: [function (_dereq_, module, exports) {
    var ITERATOR = _dereq_(117)('iterator'),
        SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR]();
      riter['return'] = function () {
        SAFE_CLOSING = true;
      };
      Array.from(riter, function () {
        throw 2;
      });
    } catch (e) {/* empty */}

    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [7],
            iter = arr[ITERATOR]();
        iter.next = function () {
          return { done: safe = true };
        };
        arr[ITERATOR] = function () {
          return iter;
        };
        exec(arr);
      } catch (e) {/* empty */}
      return safe;
    };
  }, { "117": 117 }], 55: [function (_dereq_, module, exports) {
    module.exports = function (done, value) {
      return { value: value, done: !!done };
    };
  }, {}], 56: [function (_dereq_, module, exports) {
    module.exports = {};
  }, {}], 57: [function (_dereq_, module, exports) {
    var getKeys = _dereq_(76),
        toIObject = _dereq_(107);
    module.exports = function (object, el) {
      var O = toIObject(object),
          keys = getKeys(O),
          length = keys.length,
          index = 0,
          key;
      while (length > index) {
        if (O[key = keys[index++]] === el) return key;
      }
    };
  }, { "107": 107, "76": 76 }], 58: [function (_dereq_, module, exports) {
    module.exports = false;
  }, {}], 59: [function (_dereq_, module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $expm1 = Math.expm1;
    module.exports = !$expm1
    // Old FF bug
    || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
    // Tor Browser bug
    || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
      return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
    } : $expm1;
  }, {}], 60: [function (_dereq_, module, exports) {
    // 20.2.2.20 Math.log1p(x)
    module.exports = Math.log1p || function log1p(x) {
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
    };
  }, {}], 61: [function (_dereq_, module, exports) {
    // 20.2.2.28 Math.sign(x)
    module.exports = Math.sign || function sign(x) {
      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
    };
  }, {}], 62: [function (_dereq_, module, exports) {
    var META = _dereq_(114)('meta'),
        isObject = _dereq_(49),
        has = _dereq_(39),
        setDesc = _dereq_(67).f,
        id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var FREEZE = !_dereq_(34)(function () {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function setMeta(it) {
      setDesc(it, META, { value: {
          i: 'O' + ++id, // object ID
          w: {} // weak collections IDs
        } });
    };
    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!isObject(it)) return (typeof it === "undefined" ? "undefined" : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
        // return object ID
      }return it[META].i;
    };
    var getWeak = function getWeak(it, create) {
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
        // return hash weak collections IDs
      }return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  }, { "114": 114, "34": 34, "39": 39, "49": 49, "67": 67 }], 63: [function (_dereq_, module, exports) {
    var Map = _dereq_(149),
        $export = _dereq_(32),
        shared = _dereq_(94)('metadata'),
        store = shared.store || (shared.store = new (_dereq_(255))());

    var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
      var targetMetadata = store.get(target);
      if (!targetMetadata) {
        if (!create) return undefined;
        store.set(target, targetMetadata = new Map());
      }
      var keyMetadata = targetMetadata.get(targetKey);
      if (!keyMetadata) {
        if (!create) return undefined;
        targetMetadata.set(targetKey, keyMetadata = new Map());
      }return keyMetadata;
    };
    var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
    };
    var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
    };
    var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
    };
    var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
      var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
          keys = [];
      if (metadataMap) metadataMap.forEach(function (_, key) {
        keys.push(key);
      });
      return keys;
    };
    var toMetaKey = function toMetaKey(it) {
      return it === undefined || (typeof it === "undefined" ? "undefined" : _typeof(it)) == 'symbol' ? it : String(it);
    };
    var exp = function exp(O) {
      $export($export.S, 'Reflect', O);
    };

    module.exports = {
      store: store,
      map: getOrCreateMetadataMap,
      has: ordinaryHasOwnMetadata,
      get: ordinaryGetOwnMetadata,
      set: ordinaryDefineOwnMetadata,
      keys: ordinaryOwnMetadataKeys,
      key: toMetaKey,
      exp: exp
    };
  }, { "149": 149, "255": 255, "32": 32, "94": 94 }], 64: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        macrotask = _dereq_(104).set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = _dereq_(18)(process) == 'process';

    module.exports = function () {
      var head, last, notify;

      var flush = function flush() {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            if (head) notify();else last = undefined;
            throw e;
          }
        }last = undefined;
        if (parent) parent.enter();
      };

      // Node.js
      if (isNode) {
        notify = function notify() {
          process.nextTick(flush);
        };
        // browsers with MutationObserver
      } else if (Observer) {
        var toggle = true,
            node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
        notify = function notify() {
          node.data = toggle = !toggle;
        };
        // environments with maybe non-completely correct, but existent Promise
      } else if (Promise && Promise.resolve) {
        var promise = Promise.resolve();
        notify = function notify() {
          promise.then(flush);
        };
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
      } else {
        notify = function notify() {
          // strange IE + webpack dev server bug - use .call(global)
          macrotask.call(global, flush);
        };
      }

      return function (fn) {
        var task = { fn: fn, next: undefined };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        }last = task;
      };
    };
  }, { "104": 104, "18": 18, "38": 38 }], 65: [function (_dereq_, module, exports) {
    'use strict';
    // 19.1.2.1 Object.assign(target, source, ...)

    var getKeys = _dereq_(76),
        gOPS = _dereq_(73),
        pIE = _dereq_(77),
        toObject = _dereq_(109),
        IObject = _dereq_(45),
        $assign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || _dereq_(34)(function () {
      var A = {},
          B = {},
          S = Symbol(),
          K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars
      var T = toObject(target),
          aLen = arguments.length,
          index = 1,
          getSymbols = gOPS.f,
          isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]),
            keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
            length = keys.length,
            j = 0,
            key;
        while (length > j) {
          if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
        }
      }return T;
    } : $assign;
  }, { "109": 109, "34": 34, "45": 45, "73": 73, "76": 76, "77": 77 }], 66: [function (_dereq_, module, exports) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = _dereq_(7),
        dPs = _dereq_(68),
        enumBugKeys = _dereq_(30),
        IE_PROTO = _dereq_(93)('IE_PROTO'),
        Empty = function Empty() {/* empty */},
        PROTOTYPE = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var _createDict = function createDict() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = _dereq_(29)('iframe'),
          i = enumBugKeys.length,
          lt = '<',
          gt = '>',
          iframeDocument;
      iframe.style.display = 'none';
      _dereq_(41).appendChild(iframe);
      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      _createDict = iframeDocument.F;
      while (i--) {
        delete _createDict[PROTOTYPE][enumBugKeys[i]];
      }return _createDict();
    };

    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = _createDict();
      return Properties === undefined ? result : dPs(result, Properties);
    };
  }, { "29": 29, "30": 30, "41": 41, "68": 68, "7": 7, "93": 93 }], 67: [function (_dereq_, module, exports) {
    var anObject = _dereq_(7),
        IE8_DOM_DEFINE = _dereq_(42),
        toPrimitive = _dereq_(110),
        dP = Object.defineProperty;

    exports.f = _dereq_(28) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {/* empty */}
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
  }, { "110": 110, "28": 28, "42": 42, "7": 7 }], 68: [function (_dereq_, module, exports) {
    var dP = _dereq_(67),
        anObject = _dereq_(7),
        getKeys = _dereq_(76);

    module.exports = _dereq_(28) ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties),
          length = keys.length,
          i = 0,
          P;
      while (length > i) {
        dP.f(O, P = keys[i++], Properties[P]);
      }return O;
    };
  }, { "28": 28, "67": 67, "7": 7, "76": 76 }], 69: [function (_dereq_, module, exports) {
    // Forced replacement prototype accessors methods
    module.exports = _dereq_(58) || !_dereq_(34)(function () {
      var K = Math.random();
      // In FF throws only define methods
      __defineSetter__.call(null, K, function () {/* empty */});
      delete _dereq_(38)[K];
    });
  }, { "34": 34, "38": 38, "58": 58 }], 70: [function (_dereq_, module, exports) {
    var pIE = _dereq_(77),
        createDesc = _dereq_(85),
        toIObject = _dereq_(107),
        toPrimitive = _dereq_(110),
        has = _dereq_(39),
        IE8_DOM_DEFINE = _dereq_(42),
        gOPD = Object.getOwnPropertyDescriptor;

    exports.f = _dereq_(28) ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) {/* empty */}
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }, { "107": 107, "110": 110, "28": 28, "39": 39, "42": 42, "77": 77, "85": 85 }], 71: [function (_dereq_, module, exports) {
    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var toIObject = _dereq_(107),
        gOPN = _dereq_(72).f,
        toString = {}.toString;

    var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function getWindowNames(it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };

    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
    };
  }, { "107": 107, "72": 72 }], 72: [function (_dereq_, module, exports) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = _dereq_(75),
        hiddenKeys = _dereq_(30).concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }, { "30": 30, "75": 75 }], 73: [function (_dereq_, module, exports) {
    exports.f = Object.getOwnPropertySymbols;
  }, {}], 74: [function (_dereq_, module, exports) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = _dereq_(39),
        toObject = _dereq_(109),
        IE_PROTO = _dereq_(93)('IE_PROTO'),
        ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }return O instanceof Object ? ObjectProto : null;
    };
  }, { "109": 109, "39": 39, "93": 93 }], 75: [function (_dereq_, module, exports) {
    var has = _dereq_(39),
        toIObject = _dereq_(107),
        arrayIndexOf = _dereq_(11)(false),
        IE_PROTO = _dereq_(93)('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object),
          i = 0,
          result = [],
          key;
      for (key in O) {
        if (key != IE_PROTO) has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys
      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      }return result;
    };
  }, { "107": 107, "11": 11, "39": 39, "93": 93 }], 76: [function (_dereq_, module, exports) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = _dereq_(75),
        enumBugKeys = _dereq_(30);

    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }, { "30": 30, "75": 75 }], 77: [function (_dereq_, module, exports) {
    exports.f = {}.propertyIsEnumerable;
  }, {}], 78: [function (_dereq_, module, exports) {
    // most Object methods by ES6 should accept primitives
    var $export = _dereq_(32),
        core = _dereq_(23),
        fails = _dereq_(34);
    module.exports = function (KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY],
          exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function () {
        fn(1);
      }), 'Object', exp);
    };
  }, { "23": 23, "32": 32, "34": 34 }], 79: [function (_dereq_, module, exports) {
    var getKeys = _dereq_(76),
        toIObject = _dereq_(107),
        isEnum = _dereq_(77).f;
    module.exports = function (isEntries) {
      return function (it) {
        var O = toIObject(it),
            keys = getKeys(O),
            length = keys.length,
            i = 0,
            result = [],
            key;
        while (length > i) {
          if (isEnum.call(O, key = keys[i++])) {
            result.push(isEntries ? [key, O[key]] : O[key]);
          }
        }return result;
      };
    };
  }, { "107": 107, "76": 76, "77": 77 }], 80: [function (_dereq_, module, exports) {
    // all object keys, includes non-enumerable and symbols
    var gOPN = _dereq_(72),
        gOPS = _dereq_(73),
        anObject = _dereq_(7),
        Reflect = _dereq_(38).Reflect;
    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it)),
          getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
  }, { "38": 38, "7": 7, "72": 72, "73": 73 }], 81: [function (_dereq_, module, exports) {
    var $parseFloat = _dereq_(38).parseFloat,
        $trim = _dereq_(102).trim;

    module.exports = 1 / $parseFloat(_dereq_(103) + '-0') !== -Infinity ? function parseFloat(str) {
      var string = $trim(String(str), 3),
          result = $parseFloat(string);
      return result === 0 && string.charAt(0) == '-' ? -0 : result;
    } : $parseFloat;
  }, { "102": 102, "103": 103, "38": 38 }], 82: [function (_dereq_, module, exports) {
    var $parseInt = _dereq_(38).parseInt,
        $trim = _dereq_(102).trim,
        ws = _dereq_(103),
        hex = /^[\-+]?0[xX]/;

    module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
      var string = $trim(String(str), 3);
      return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
    } : $parseInt;
  }, { "102": 102, "103": 103, "38": 38 }], 83: [function (_dereq_, module, exports) {
    'use strict';

    var path = _dereq_(84),
        invoke = _dereq_(44),
        aFunction = _dereq_(3);
    module.exports = function () /* ...pargs */{
      var fn = aFunction(this),
          length = arguments.length,
          pargs = Array(length),
          i = 0,
          _ = path._,
          holder = false;
      while (length > i) {
        if ((pargs[i] = arguments[i++]) === _) holder = true;
      }return function () /* ...args */{
        var that = this,
            aLen = arguments.length,
            j = 0,
            k = 0,
            args;
        if (!holder && !aLen) return invoke(fn, pargs, that);
        args = pargs.slice();
        if (holder) for (; length > j; j++) {
          if (args[j] === _) args[j] = arguments[k++];
        }while (aLen > k) {
          args.push(arguments[k++]);
        }return invoke(fn, args, that);
      };
    };
  }, { "3": 3, "44": 44, "84": 84 }], 84: [function (_dereq_, module, exports) {
    module.exports = _dereq_(38);
  }, { "38": 38 }], 85: [function (_dereq_, module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }, {}], 86: [function (_dereq_, module, exports) {
    var redefine = _dereq_(87);
    module.exports = function (target, src, safe) {
      for (var key in src) {
        redefine(target, key, src[key], safe);
      }return target;
    };
  }, { "87": 87 }], 87: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        hide = _dereq_(40),
        has = _dereq_(39),
        SRC = _dereq_(114)('src'),
        TO_STRING = 'toString',
        $toString = Function[TO_STRING],
        TPL = ('' + $toString).split(TO_STRING);

    _dereq_(23).inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === global) {
        O[key] = val;
      } else {
        if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else {
          if (O[key]) O[key] = val;else hide(O, key, val);
        }
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  }, { "114": 114, "23": 23, "38": 38, "39": 39, "40": 40 }], 88: [function (_dereq_, module, exports) {
    module.exports = function (regExp, replace) {
      var replacer = replace === Object(replace) ? function (part) {
        return replace[part];
      } : replace;
      return function (it) {
        return String(it).replace(regExp, replacer);
      };
    };
  }, {}], 89: [function (_dereq_, module, exports) {
    // 7.2.9 SameValue(x, y)
    module.exports = Object.is || function is(x, y) {
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };
  }, {}], 90: [function (_dereq_, module, exports) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var isObject = _dereq_(49),
        anObject = _dereq_(7);
    var check = function check(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _dereq_(25)(Function.call, _dereq_(70).f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) {
          buggy = true;
        }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
      check: check
    };
  }, { "25": 25, "49": 49, "7": 7, "70": 70 }], 91: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(38),
        dP = _dereq_(67),
        DESCRIPTORS = _dereq_(28),
        SPECIES = _dereq_(117)('species');

    module.exports = function (KEY) {
      var C = global[KEY];
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    };
  }, { "117": 117, "28": 28, "38": 38, "67": 67 }], 92: [function (_dereq_, module, exports) {
    var def = _dereq_(67).f,
        has = _dereq_(39),
        TAG = _dereq_(117)('toStringTag');

    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };
  }, { "117": 117, "39": 39, "67": 67 }], 93: [function (_dereq_, module, exports) {
    var shared = _dereq_(94)('keys'),
        uid = _dereq_(114);
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }, { "114": 114, "94": 94 }], 94: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
      return store[key] || (store[key] = {});
    };
  }, { "38": 38 }], 95: [function (_dereq_, module, exports) {
    // 7.3.20 SpeciesConstructor(O, defaultConstructor)
    var anObject = _dereq_(7),
        aFunction = _dereq_(3),
        SPECIES = _dereq_(117)('species');
    module.exports = function (O, D) {
      var C = anObject(O).constructor,
          S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
  }, { "117": 117, "3": 3, "7": 7 }], 96: [function (_dereq_, module, exports) {
    var fails = _dereq_(34);

    module.exports = function (method, arg) {
      return !!method && fails(function () {
        arg ? method.call(null, function () {}, 1) : method.call(null);
      });
    };
  }, { "34": 34 }], 97: [function (_dereq_, module, exports) {
    var toInteger = _dereq_(106),
        defined = _dereq_(27);
    // true  -> String#at
    // false -> String#codePointAt
    module.exports = function (TO_STRING) {
      return function (that, pos) {
        var s = String(defined(that)),
            i = toInteger(pos),
            l = s.length,
            a,
            b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
      };
    };
  }, { "106": 106, "27": 27 }], 98: [function (_dereq_, module, exports) {
    // helper for String#{startsWith, endsWith, includes}
    var isRegExp = _dereq_(50),
        defined = _dereq_(27);

    module.exports = function (that, searchString, NAME) {
      if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
      return String(defined(that));
    };
  }, { "27": 27, "50": 50 }], 99: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        fails = _dereq_(34),
        defined = _dereq_(27),
        quot = /"/g;
    // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
    var createHTML = function createHTML(string, tag, attribute, value) {
      var S = String(defined(string)),
          p1 = '<' + tag;
      if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
      return p1 + '>' + S + '</' + tag + '>';
    };
    module.exports = function (NAME, exec) {
      var O = {};
      O[NAME] = exec(createHTML);
      $export($export.P + $export.F * fails(function () {
        var test = ''[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
      }), 'String', O);
    };
  }, { "27": 27, "32": 32, "34": 34 }], 100: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-string-pad-start-end
    var toLength = _dereq_(108),
        repeat = _dereq_(101),
        defined = _dereq_(27);

    module.exports = function (that, maxLength, fillString, left) {
      var S = String(defined(that)),
          stringLength = S.length,
          fillStr = fillString === undefined ? ' ' : String(fillString),
          intMaxLength = toLength(maxLength);
      if (intMaxLength <= stringLength || fillStr == '') return S;
      var fillLen = intMaxLength - stringLength,
          stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
      return left ? stringFiller + S : S + stringFiller;
    };
  }, { "101": 101, "108": 108, "27": 27 }], 101: [function (_dereq_, module, exports) {
    'use strict';

    var toInteger = _dereq_(106),
        defined = _dereq_(27);

    module.exports = function repeat(count) {
      var str = String(defined(this)),
          res = '',
          n = toInteger(count);
      if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
      for (; n > 0; (n >>>= 1) && (str += str)) {
        if (n & 1) res += str;
      }return res;
    };
  }, { "106": 106, "27": 27 }], 102: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        defined = _dereq_(27),
        fails = _dereq_(34),
        spaces = _dereq_(103),
        space = '[' + spaces + ']',
        non = "\u200B\x85",
        ltrim = RegExp('^' + space + space + '*'),
        rtrim = RegExp(space + space + '*$');

    var exporter = function exporter(KEY, exec, ALIAS) {
      var exp = {};
      var FORCE = fails(function () {
        return !!spaces[KEY]() || non[KEY]() != non;
      });
      var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
      if (ALIAS) exp[ALIAS] = fn;
      $export($export.P + $export.F * FORCE, 'String', exp);
    };

    // 1 -> String#trimLeft
    // 2 -> String#trimRight
    // 3 -> String#trim
    var trim = exporter.trim = function (string, TYPE) {
      string = String(defined(string));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };

    module.exports = exporter;
  }, { "103": 103, "27": 27, "32": 32, "34": 34 }], 103: [function (_dereq_, module, exports) {
    module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  }, {}], 104: [function (_dereq_, module, exports) {
    var ctx = _dereq_(25),
        invoke = _dereq_(44),
        html = _dereq_(41),
        cel = _dereq_(29),
        global = _dereq_(38),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function run() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function listener(event) {
      run.call(event.data);
    };
    // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) {
          args.push(arguments[i++]);
        }queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      // Node.js 0.8-
      if (_dereq_(18)(process) == 'process') {
        defer = function defer(id) {
          process.nextTick(ctx(run, id, 1));
        };
        // Browsers with MessageChannel, includes WebWorkers
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function defer(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listener, false);
        // IE8-
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function defer(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
        // Rest old browsers
      } else {
        defer = function defer(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  }, { "18": 18, "25": 25, "29": 29, "38": 38, "41": 41, "44": 44 }], 105: [function (_dereq_, module, exports) {
    var toInteger = _dereq_(106),
        max = Math.max,
        min = Math.min;
    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }, { "106": 106 }], 106: [function (_dereq_, module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil,
        floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }, {}], 107: [function (_dereq_, module, exports) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = _dereq_(45),
        defined = _dereq_(27);
    module.exports = function (it) {
      return IObject(defined(it));
    };
  }, { "27": 27, "45": 45 }], 108: [function (_dereq_, module, exports) {
    // 7.1.15 ToLength
    var toInteger = _dereq_(106),
        min = Math.min;
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
  }, { "106": 106 }], 109: [function (_dereq_, module, exports) {
    // 7.1.13 ToObject(argument)
    var defined = _dereq_(27);
    module.exports = function (it) {
      return Object(defined(it));
    };
  }, { "27": 27 }], 110: [function (_dereq_, module, exports) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = _dereq_(49);
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }, { "49": 49 }], 111: [function (_dereq_, module, exports) {
    'use strict';

    if (_dereq_(28)) {
      var LIBRARY = _dereq_(58),
          global = _dereq_(38),
          fails = _dereq_(34),
          $export = _dereq_(32),
          $typed = _dereq_(113),
          $buffer = _dereq_(112),
          ctx = _dereq_(25),
          anInstance = _dereq_(6),
          propertyDesc = _dereq_(85),
          hide = _dereq_(40),
          redefineAll = _dereq_(86),
          toInteger = _dereq_(106),
          toLength = _dereq_(108),
          toIndex = _dereq_(105),
          toPrimitive = _dereq_(110),
          has = _dereq_(39),
          same = _dereq_(89),
          classof = _dereq_(17),
          isObject = _dereq_(49),
          toObject = _dereq_(109),
          isArrayIter = _dereq_(46),
          create = _dereq_(66),
          getPrototypeOf = _dereq_(74),
          gOPN = _dereq_(72).f,
          getIterFn = _dereq_(118),
          uid = _dereq_(114),
          wks = _dereq_(117),
          createArrayMethod = _dereq_(12),
          createArrayIncludes = _dereq_(11),
          speciesConstructor = _dereq_(95),
          ArrayIterators = _dereq_(130),
          Iterators = _dereq_(56),
          $iterDetect = _dereq_(54),
          setSpecies = _dereq_(91),
          arrayFill = _dereq_(9),
          arrayCopyWithin = _dereq_(8),
          $DP = _dereq_(67),
          $GOPD = _dereq_(70),
          dP = $DP.f,
          gOPD = $GOPD.f,
          RangeError = global.RangeError,
          TypeError = global.TypeError,
          Uint8Array = global.Uint8Array,
          ARRAY_BUFFER = 'ArrayBuffer',
          SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
          BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
          PROTOTYPE = 'prototype',
          ArrayProto = Array[PROTOTYPE],
          $ArrayBuffer = $buffer.ArrayBuffer,
          $DataView = $buffer.DataView,
          arrayForEach = createArrayMethod(0),
          arrayFilter = createArrayMethod(2),
          arraySome = createArrayMethod(3),
          arrayEvery = createArrayMethod(4),
          arrayFind = createArrayMethod(5),
          arrayFindIndex = createArrayMethod(6),
          arrayIncludes = createArrayIncludes(true),
          arrayIndexOf = createArrayIncludes(false),
          arrayValues = ArrayIterators.values,
          arrayKeys = ArrayIterators.keys,
          arrayEntries = ArrayIterators.entries,
          arrayLastIndexOf = ArrayProto.lastIndexOf,
          arrayReduce = ArrayProto.reduce,
          arrayReduceRight = ArrayProto.reduceRight,
          arrayJoin = ArrayProto.join,
          arraySort = ArrayProto.sort,
          arraySlice = ArrayProto.slice,
          arrayToString = ArrayProto.toString,
          arrayToLocaleString = ArrayProto.toLocaleString,
          ITERATOR = wks('iterator'),
          TAG = wks('toStringTag'),
          TYPED_CONSTRUCTOR = uid('typed_constructor'),
          DEF_CONSTRUCTOR = uid('def_constructor'),
          ALL_CONSTRUCTORS = $typed.CONSTR,
          TYPED_ARRAY = $typed.TYPED,
          VIEW = $typed.VIEW,
          WRONG_LENGTH = 'Wrong length!';

      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });

      var LITTLE_ENDIAN = fails(function () {
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });

      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var strictToLength = function strictToLength(it, SAME) {
        if (it === undefined) throw TypeError(WRONG_LENGTH);
        var number = +it,
            length = toLength(it);
        if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
        return length;
      };

      var toOffset = function toOffset(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function validate(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function allocate(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        }return new C(length);
      };

      var speciesFromList = function speciesFromList(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function fromList(C, list) {
        var index = 0,
            length = list.length,
            result = allocate(C, length);
        while (length > index) {
          result[index] = list[index++];
        }return result;
      };

      var addGetter = function addGetter(it, key, internal) {
        dP(it, key, { get: function get() {
            return this._d[internal];
          } });
      };

      var $from = function from(source /*, mapfn, thisArg */) {
        var O = toObject(source),
            aLen = arguments.length,
            mapfn = aLen > 1 ? arguments[1] : undefined,
            mapping = mapfn !== undefined,
            iterFn = getIterFn(O),
            i,
            length,
            values,
            result,
            step,
            iterator;
        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          }O = values;
        }
        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }
        return result;
      };

      var $of = function of() /*...items*/{
        var index = 0,
            length = arguments.length,
            result = allocate(this, length);
        while (length > index) {
          result[index] = arguments[index++];
        }return result;
      };

      // iOS Safari 6.x fails here
      var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
        arrayToLocaleString.call(new Uint8Array(1));
      });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start /*, end */) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn /*, thisArg */) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value /*, start, end */) {
          // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn /*, thisArg */) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate /*, thisArg */) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate /*, thisArg */) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn /*, thisArg */) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement /*, fromIndex */) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement /*, fromIndex */) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
          // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
          // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn /*, thisArg */) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn /*, initialValue */) {
          // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn /*, initialValue */) {
          // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this,
              length = validate(that).length,
              middle = Math.floor(length / 2),
              index = 0,
              value;
          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }return that;
        },
        some: function some(callbackfn /*, thisArg */) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this),
              length = O.length,
              $begin = toIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike /*, offset */) {
        validate(this);
        var offset = toOffset(arguments[1], 1),
            length = this.length,
            src = toObject(arrayLike),
            len = toLength(src.length),
            index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while (index < len) {
          this[offset + index] = src[index++];
        }
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function isTAIndex(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && (typeof key === "undefined" ? "undefined" : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
      };
      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };
      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
        // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        } else return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () {
        arrayToString.call({});
      })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function constructor() {/* noop */},
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function get() {
          return this[TYPED_ARRAY];
        }
      });

      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
            ISNT_UINT8 = NAME != 'Uint8Array',
            GETTER = 'get' + KEY,
            SETTER = 'set' + KEY,
            TypedArray = global[NAME],
            Base = TypedArray || {},
            TAC = TypedArray && getPrototypeOf(TypedArray),
            FORCED = !TypedArray || !$typed.ABV,
            O = {},
            TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function getter(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function setter(that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function addElement(that, index) {
          dP(that, index, {
            get: function get() {
              return getter(this, index);
            },
            set: function set(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0,
                offset = 0,
                buffer,
                byteLength,
                length,
                klass;
            if (!isObject(data)) {
              length = strictToLength(data, true);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;
              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }
            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });
            while (index < length) {
              addElement(that, index++);
            }
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!$iterDetect(function (iter) {
          // V8 works with iterators, but fails in many other cases
          // https://code.google.com/p/v8/issues/detail?id=4552
          new TypedArray(null); // eslint-disable-line no-new
          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass;
            // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645
            if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            }
            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR],
            CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
            $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function get() {
              return NAME;
            }
          });
        }

        O[NAME] = TypedArray;

        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES,
          from: $from,
          of: $of
        });

        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

        $export($export.P, NAME, proto);

        setSpecies(NAME);

        $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

        $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });

        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, { slice: $slice });

        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, { toLocaleString: $toLocaleString });

        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () {/* empty */};
  }, { "105": 105, "106": 106, "108": 108, "109": 109, "11": 11, "110": 110, "112": 112, "113": 113, "114": 114, "117": 117, "118": 118, "12": 12, "130": 130, "17": 17, "25": 25, "28": 28, "32": 32, "34": 34, "38": 38, "39": 39, "40": 40, "46": 46, "49": 49, "54": 54, "56": 56, "58": 58, "6": 6, "66": 66, "67": 67, "70": 70, "72": 72, "74": 74, "8": 8, "85": 85, "86": 86, "89": 89, "9": 9, "91": 91, "95": 95 }], 112: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(38),
        DESCRIPTORS = _dereq_(28),
        LIBRARY = _dereq_(58),
        $typed = _dereq_(113),
        hide = _dereq_(40),
        redefineAll = _dereq_(86),
        fails = _dereq_(34),
        anInstance = _dereq_(6),
        toInteger = _dereq_(106),
        toLength = _dereq_(108),
        gOPN = _dereq_(72).f,
        dP = _dereq_(67).f,
        arrayFill = _dereq_(9),
        setToStringTag = _dereq_(92),
        ARRAY_BUFFER = 'ArrayBuffer',
        DATA_VIEW = 'DataView',
        PROTOTYPE = 'prototype',
        WRONG_LENGTH = 'Wrong length!',
        WRONG_INDEX = 'Wrong index!',
        $ArrayBuffer = global[ARRAY_BUFFER],
        $DataView = global[DATA_VIEW],
        Math = global.Math,
        RangeError = global.RangeError,
        Infinity = global.Infinity,
        BaseBuffer = $ArrayBuffer,
        abs = Math.abs,
        pow = Math.pow,
        floor = Math.floor,
        log = Math.log,
        LN2 = Math.LN2,
        BUFFER = 'buffer',
        BYTE_LENGTH = 'byteLength',
        BYTE_OFFSET = 'byteOffset',
        $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
        $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
        $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

    // IEEE754 conversions based on https://github.com/feross/ieee754
    var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
      var buffer = Array(nBytes),
          eLen = nBytes * 8 - mLen - 1,
          eMax = (1 << eLen) - 1,
          eBias = eMax >> 1,
          rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
          i = 0,
          s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
          e,
          m,
          c;
      value = abs(value);
      if (value != value || value === Infinity) {
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
      buffer[--i] |= s * 128;
      return buffer;
    };
    var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1,
          eMax = (1 << eLen) - 1,
          eBias = eMax >> 1,
          nBits = eLen - 7,
          i = nBytes - 1,
          s = buffer[i--],
          e = s & 127,
          m;
      s >>= 7;
      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      }return (s ? -1 : 1) * m * pow(2, e - mLen);
    };

    var unpackI32 = function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    };
    var packI8 = function packI8(it) {
      return [it & 0xff];
    };
    var packI16 = function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    };
    var packI32 = function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    };
    var packF64 = function packF64(it) {
      return packIEEE754(it, 52, 8);
    };
    var packF32 = function packF32(it) {
      return packIEEE754(it, 23, 4);
    };

    var addGetter = function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, { get: function get() {
          return this[internal];
        } });
    };

    var get = function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index,
          intIndex = toInteger(numIndex);
      if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b,
          start = intIndex + view[$OFFSET],
          pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    };
    var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index,
          intIndex = toInteger(numIndex);
      if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b,
          start = intIndex + view[$OFFSET],
          pack = conversion(+value);
      for (var i = 0; i < bytes; i++) {
        store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
    };

    var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
      anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
      var numberLength = +length,
          byteLength = toLength(numberLength);
      if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
      return byteLength;
    };

    if (!$typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        var byteLength = validateArrayBufferArguments(this, length);
        this._b = arrayFill.call(Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        anInstance(this, $DataView, DATA_VIEW);
        anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH],
            offset = toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (DESCRIPTORS) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset /*, littleEndian */) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset /*, littleEndian */) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset /*, littleEndian */) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset /*, littleEndian */) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new
      }) || !fails(function () {
        new $ArrayBuffer(.5); // eslint-disable-line no-new
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          return new BaseBuffer(validateArrayBufferArguments(this, length));
        };
        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
        };
        if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
      }
      // iOS Safari 7.x bug
      var view = new $DataView(new $ArrayBuffer(2)),
          $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }
    setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    setToStringTag($DataView, DATA_VIEW);
    hide($DataView[PROTOTYPE], $typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  }, { "106": 106, "108": 108, "113": 113, "28": 28, "34": 34, "38": 38, "40": 40, "58": 58, "6": 6, "67": 67, "72": 72, "86": 86, "9": 9, "92": 92 }], 113: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        hide = _dereq_(40),
        uid = _dereq_(114),
        TYPED = uid('typed_array'),
        VIEW = uid('view'),
        ABV = !!(global.ArrayBuffer && global.DataView),
        CONSTR = ABV,
        i = 0,
        l = 9,
        Typed;

    var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

    while (i < l) {
      if (Typed = global[TypedArrayConstructors[i++]]) {
        hide(Typed.prototype, TYPED, true);
        hide(Typed.prototype, VIEW, true);
      } else CONSTR = false;
    }

    module.exports = {
      ABV: ABV,
      CONSTR: CONSTR,
      TYPED: TYPED,
      VIEW: VIEW
    };
  }, { "114": 114, "38": 38, "40": 40 }], 114: [function (_dereq_, module, exports) {
    var id = 0,
        px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
  }, {}], 115: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        core = _dereq_(23),
        LIBRARY = _dereq_(58),
        wksExt = _dereq_(116),
        defineProperty = _dereq_(67).f;
    module.exports = function (name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
    };
  }, { "116": 116, "23": 23, "38": 38, "58": 58, "67": 67 }], 116: [function (_dereq_, module, exports) {
    exports.f = _dereq_(117);
  }, { "117": 117 }], 117: [function (_dereq_, module, exports) {
    var store = _dereq_(94)('wks'),
        uid = _dereq_(114),
        _Symbol = _dereq_(38).Symbol,
        USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;
  }, { "114": 114, "38": 38, "94": 94 }], 118: [function (_dereq_, module, exports) {
    var classof = _dereq_(17),
        ITERATOR = _dereq_(117)('iterator'),
        Iterators = _dereq_(56);
    module.exports = _dereq_(23).getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
  }, { "117": 117, "17": 17, "23": 23, "56": 56 }], 119: [function (_dereq_, module, exports) {
    // https://github.com/benjamingr/RexExp.escape
    var $export = _dereq_(32),
        $re = _dereq_(88)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

    $export($export.S, 'RegExp', { escape: function escape(it) {
        return $re(it);
      } });
  }, { "32": 32, "88": 88 }], 120: [function (_dereq_, module, exports) {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    var $export = _dereq_(32);

    $export($export.P, 'Array', { copyWithin: _dereq_(8) });

    _dereq_(5)('copyWithin');
  }, { "32": 32, "5": 5, "8": 8 }], 121: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $every = _dereq_(12)(4);

    $export($export.P + $export.F * !_dereq_(96)([].every, true), 'Array', {
      // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
      every: function every(callbackfn /* , thisArg */) {
        return $every(this, callbackfn, arguments[1]);
      }
    });
  }, { "12": 12, "32": 32, "96": 96 }], 122: [function (_dereq_, module, exports) {
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    var $export = _dereq_(32);

    $export($export.P, 'Array', { fill: _dereq_(9) });

    _dereq_(5)('fill');
  }, { "32": 32, "5": 5, "9": 9 }], 123: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $filter = _dereq_(12)(2);

    $export($export.P + $export.F * !_dereq_(96)([].filter, true), 'Array', {
      // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
      filter: function filter(callbackfn /* , thisArg */) {
        return $filter(this, callbackfn, arguments[1]);
      }
    });
  }, { "12": 12, "32": 32, "96": 96 }], 124: [function (_dereq_, module, exports) {
    'use strict';
    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

    var $export = _dereq_(32),
        $find = _dereq_(12)(6),
        KEY = 'findIndex',
        forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function () {
      forced = false;
    });
    $export($export.P + $export.F * forced, 'Array', {
      findIndex: function findIndex(callbackfn /*, that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    _dereq_(5)(KEY);
  }, { "12": 12, "32": 32, "5": 5 }], 125: [function (_dereq_, module, exports) {
    'use strict';
    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

    var $export = _dereq_(32),
        $find = _dereq_(12)(5),
        KEY = 'find',
        forced = true;
    // Shouldn't skip holes
    if (KEY in []) Array(1)[KEY](function () {
      forced = false;
    });
    $export($export.P + $export.F * forced, 'Array', {
      find: function find(callbackfn /*, that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    _dereq_(5)(KEY);
  }, { "12": 12, "32": 32, "5": 5 }], 126: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $forEach = _dereq_(12)(0),
        STRICT = _dereq_(96)([].forEach, true);

    $export($export.P + $export.F * !STRICT, 'Array', {
      // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
      forEach: function forEach(callbackfn /* , thisArg */) {
        return $forEach(this, callbackfn, arguments[1]);
      }
    });
  }, { "12": 12, "32": 32, "96": 96 }], 127: [function (_dereq_, module, exports) {
    'use strict';

    var ctx = _dereq_(25),
        $export = _dereq_(32),
        toObject = _dereq_(109),
        call = _dereq_(51),
        isArrayIter = _dereq_(46),
        toLength = _dereq_(108),
        createProperty = _dereq_(24),
        getIterFn = _dereq_(118);

    $export($export.S + $export.F * !_dereq_(54)(function (iter) {
      Array.from(iter);
    }), 'Array', {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
        var O = toObject(arrayLike),
            C = typeof this == 'function' ? this : Array,
            aLen = arguments.length,
            mapfn = aLen > 1 ? arguments[1] : undefined,
            mapping = mapfn !== undefined,
            index = 0,
            iterFn = getIterFn(O),
            length,
            result,
            step,
            iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      }
    });
  }, { "108": 108, "109": 109, "118": 118, "24": 24, "25": 25, "32": 32, "46": 46, "51": 51, "54": 54 }], 128: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $indexOf = _dereq_(11)(false),
        $native = [].indexOf,
        NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

    $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(96)($native)), 'Array', {
      // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
      indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
        return NEGATIVE_ZERO
        // convert -0 to +0
        ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
      }
    });
  }, { "11": 11, "32": 32, "96": 96 }], 129: [function (_dereq_, module, exports) {
    // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
    var $export = _dereq_(32);

    $export($export.S, 'Array', { isArray: _dereq_(47) });
  }, { "32": 32, "47": 47 }], 130: [function (_dereq_, module, exports) {
    'use strict';

    var addToUnscopables = _dereq_(5),
        step = _dereq_(55),
        Iterators = _dereq_(56),
        toIObject = _dereq_(107);

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    module.exports = _dereq_(53)(Array, 'Array', function (iterated, kind) {
      this._t = toIObject(iterated); // target
      this._i = 0; // next index
      this._k = kind; // kind
      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
      var O = this._t,
          kind = this._k,
          index = this._i++;
      if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
      }
      if (kind == 'keys') return step(0, index);
      if (kind == 'values') return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    Iterators.Arguments = Iterators.Array;

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
  }, { "107": 107, "5": 5, "53": 53, "55": 55, "56": 56 }], 131: [function (_dereq_, module, exports) {
    'use strict';
    // 22.1.3.13 Array.prototype.join(separator)

    var $export = _dereq_(32),
        toIObject = _dereq_(107),
        arrayJoin = [].join;

    // fallback for not array-like strings
    $export($export.P + $export.F * (_dereq_(45) != Object || !_dereq_(96)(arrayJoin)), 'Array', {
      join: function join(separator) {
        return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
      }
    });
  }, { "107": 107, "32": 32, "45": 45, "96": 96 }], 132: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toIObject = _dereq_(107),
        toInteger = _dereq_(106),
        toLength = _dereq_(108),
        $native = [].lastIndexOf,
        NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

    $export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(96)($native)), 'Array', {
      // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
      lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
        var O = toIObject(this),
            length = toLength(O.length),
            index = length - 1;
        if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;
        for (; index >= 0; index--) {
          if (index in O) if (O[index] === searchElement) return index || 0;
        }return -1;
      }
    });
  }, { "106": 106, "107": 107, "108": 108, "32": 32, "96": 96 }], 133: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $map = _dereq_(12)(1);

    $export($export.P + $export.F * !_dereq_(96)([].map, true), 'Array', {
      // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
      map: function map(callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments[1]);
      }
    });
  }, { "12": 12, "32": 32, "96": 96 }], 134: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        createProperty = _dereq_(24);

    // WebKit Array.of isn't generic
    $export($export.S + $export.F * _dereq_(34)(function () {
      function F() {}
      return !(Array.of.call(F) instanceof F);
    }), 'Array', {
      // 22.1.2.3 Array.of( ...items)
      of: function of() /* ...args */{
        var index = 0,
            aLen = arguments.length,
            result = new (typeof this == 'function' ? this : Array)(aLen);
        while (aLen > index) {
          createProperty(result, index, arguments[index++]);
        }result.length = aLen;
        return result;
      }
    });
  }, { "24": 24, "32": 32, "34": 34 }], 135: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $reduce = _dereq_(13);

    $export($export.P + $export.F * !_dereq_(96)([].reduceRight, true), 'Array', {
      // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
      reduceRight: function reduceRight(callbackfn /* , initialValue */) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], true);
      }
    });
  }, { "13": 13, "32": 32, "96": 96 }], 136: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $reduce = _dereq_(13);

    $export($export.P + $export.F * !_dereq_(96)([].reduce, true), 'Array', {
      // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
      reduce: function reduce(callbackfn /* , initialValue */) {
        return $reduce(this, callbackfn, arguments.length, arguments[1], false);
      }
    });
  }, { "13": 13, "32": 32, "96": 96 }], 137: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        html = _dereq_(41),
        cof = _dereq_(18),
        toIndex = _dereq_(105),
        toLength = _dereq_(108),
        arraySlice = [].slice;

    // fallback for not array-like ES3 strings and DOM objects
    $export($export.P + $export.F * _dereq_(34)(function () {
      if (html) arraySlice.call(html);
    }), 'Array', {
      slice: function slice(begin, end) {
        var len = toLength(this.length),
            klass = cof(this);
        end = end === undefined ? len : end;
        if (klass == 'Array') return arraySlice.call(this, begin, end);
        var start = toIndex(begin, len),
            upTo = toIndex(end, len),
            size = toLength(upTo - start),
            cloned = Array(size),
            i = 0;
        for (; i < size; i++) {
          cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
        }return cloned;
      }
    });
  }, { "105": 105, "108": 108, "18": 18, "32": 32, "34": 34, "41": 41 }], 138: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $some = _dereq_(12)(3);

    $export($export.P + $export.F * !_dereq_(96)([].some, true), 'Array', {
      // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
      some: function some(callbackfn /* , thisArg */) {
        return $some(this, callbackfn, arguments[1]);
      }
    });
  }, { "12": 12, "32": 32, "96": 96 }], 139: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        aFunction = _dereq_(3),
        toObject = _dereq_(109),
        fails = _dereq_(34),
        $sort = [].sort,
        test = [1, 2, 3];

    $export($export.P + $export.F * (fails(function () {
      // IE8-
      test.sort(undefined);
    }) || !fails(function () {
      // V8 bug
      test.sort(null);
      // Old WebKit
    }) || !_dereq_(96)($sort)), 'Array', {
      // 22.1.3.25 Array.prototype.sort(comparefn)
      sort: function sort(comparefn) {
        return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
      }
    });
  }, { "109": 109, "3": 3, "32": 32, "34": 34, "96": 96 }], 140: [function (_dereq_, module, exports) {
    _dereq_(91)('Array');
  }, { "91": 91 }], 141: [function (_dereq_, module, exports) {
    // 20.3.3.1 / 15.9.4.4 Date.now()
    var $export = _dereq_(32);

    $export($export.S, 'Date', { now: function now() {
        return new Date().getTime();
      } });
  }, { "32": 32 }], 142: [function (_dereq_, module, exports) {
    'use strict';
    // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

    var $export = _dereq_(32),
        fails = _dereq_(34),
        getTime = Date.prototype.getTime;

    var lz = function lz(num) {
      return num > 9 ? num : '0' + num;
    };

    // PhantomJS / old WebKit has a broken implementations
    $export($export.P + $export.F * (fails(function () {
      return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
    }) || !fails(function () {
      new Date(NaN).toISOString();
    })), 'Date', {
      toISOString: function toISOString() {
        if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
        var d = this,
            y = d.getUTCFullYear(),
            m = d.getUTCMilliseconds(),
            s = y < 0 ? '-' : y > 9999 ? '+' : '';
        return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
      }
    });
  }, { "32": 32, "34": 34 }], 143: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toObject = _dereq_(109),
        toPrimitive = _dereq_(110);

    $export($export.P + $export.F * _dereq_(34)(function () {
      return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
          return 1;
        } }) !== 1;
    }), 'Date', {
      toJSON: function toJSON(key) {
        var O = toObject(this),
            pv = toPrimitive(O);
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
      }
    });
  }, { "109": 109, "110": 110, "32": 32, "34": 34 }], 144: [function (_dereq_, module, exports) {
    var TO_PRIMITIVE = _dereq_(117)('toPrimitive'),
        proto = Date.prototype;

    if (!(TO_PRIMITIVE in proto)) _dereq_(40)(proto, TO_PRIMITIVE, _dereq_(26));
  }, { "117": 117, "26": 26, "40": 40 }], 145: [function (_dereq_, module, exports) {
    var DateProto = Date.prototype,
        INVALID_DATE = 'Invalid Date',
        TO_STRING = 'toString',
        $toString = DateProto[TO_STRING],
        getTime = DateProto.getTime;
    if (new Date(NaN) + '' != INVALID_DATE) {
      _dereq_(87)(DateProto, TO_STRING, function toString() {
        var value = getTime.call(this);
        return value === value ? $toString.call(this) : INVALID_DATE;
      });
    }
  }, { "87": 87 }], 146: [function (_dereq_, module, exports) {
    // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
    var $export = _dereq_(32);

    $export($export.P, 'Function', { bind: _dereq_(16) });
  }, { "16": 16, "32": 32 }], 147: [function (_dereq_, module, exports) {
    'use strict';

    var isObject = _dereq_(49),
        getPrototypeOf = _dereq_(74),
        HAS_INSTANCE = _dereq_(117)('hasInstance'),
        FunctionProto = Function.prototype;
    // 19.2.3.6 Function.prototype[@@hasInstance](V)
    if (!(HAS_INSTANCE in FunctionProto)) _dereq_(67).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
        if (typeof this != 'function' || !isObject(O)) return false;
        if (!isObject(this.prototype)) return O instanceof this;
        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
        while (O = getPrototypeOf(O)) {
          if (this.prototype === O) return true;
        }return false;
      } });
  }, { "117": 117, "49": 49, "67": 67, "74": 74 }], 148: [function (_dereq_, module, exports) {
    var dP = _dereq_(67).f,
        createDesc = _dereq_(85),
        has = _dereq_(39),
        FProto = Function.prototype,
        nameRE = /^\s*function ([^ (]*)/,
        NAME = 'name';

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    // 19.2.4.2 name
    NAME in FProto || _dereq_(28) && dP(FProto, NAME, {
      configurable: true,
      get: function get() {
        try {
          var that = this,
              name = ('' + that).match(nameRE)[1];
          has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
          return name;
        } catch (e) {
          return '';
        }
      }
    });
  }, { "28": 28, "39": 39, "67": 67, "85": 85 }], 149: [function (_dereq_, module, exports) {
    'use strict';

    var strong = _dereq_(19);

    // 23.1 Map Objects
    module.exports = _dereq_(22)('Map', function (get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = strong.getEntry(this, key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return strong.def(this, key === 0 ? 0 : key, value);
      }
    }, strong, true);
  }, { "19": 19, "22": 22 }], 150: [function (_dereq_, module, exports) {
    // 20.2.2.3 Math.acosh(x)
    var $export = _dereq_(32),
        log1p = _dereq_(60),
        sqrt = Math.sqrt,
        $acosh = Math.acosh;

    $export($export.S + $export.F * !($acosh
    // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
    && Math.floor($acosh(Number.MAX_VALUE)) == 710
    // Tor Browser bug: Math.acosh(Infinity) -> NaN 
    && $acosh(Infinity) == Infinity), 'Math', {
      acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
      }
    });
  }, { "32": 32, "60": 60 }], 151: [function (_dereq_, module, exports) {
    // 20.2.2.5 Math.asinh(x)
    var $export = _dereq_(32),
        $asinh = Math.asinh;

    function asinh(x) {
      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
    }

    // Tor Browser bug: Math.asinh(0) -> -0 
    $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
  }, { "32": 32 }], 152: [function (_dereq_, module, exports) {
    // 20.2.2.7 Math.atanh(x)
    var $export = _dereq_(32),
        $atanh = Math.atanh;

    // Tor Browser bug: Math.atanh(-0) -> 0 
    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
      atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
      }
    });
  }, { "32": 32 }], 153: [function (_dereq_, module, exports) {
    // 20.2.2.9 Math.cbrt(x)
    var $export = _dereq_(32),
        sign = _dereq_(61);

    $export($export.S, 'Math', {
      cbrt: function cbrt(x) {
        return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
      }
    });
  }, { "32": 32, "61": 61 }], 154: [function (_dereq_, module, exports) {
    // 20.2.2.11 Math.clz32(x)
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
      }
    });
  }, { "32": 32 }], 155: [function (_dereq_, module, exports) {
    // 20.2.2.12 Math.cosh(x)
    var $export = _dereq_(32),
        exp = Math.exp;

    $export($export.S, 'Math', {
      cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
      }
    });
  }, { "32": 32 }], 156: [function (_dereq_, module, exports) {
    // 20.2.2.14 Math.expm1(x)
    var $export = _dereq_(32),
        $expm1 = _dereq_(59);

    $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
  }, { "32": 32, "59": 59 }], 157: [function (_dereq_, module, exports) {
    // 20.2.2.16 Math.fround(x)
    var $export = _dereq_(32),
        sign = _dereq_(61),
        pow = Math.pow,
        EPSILON = pow(2, -52),
        EPSILON32 = pow(2, -23),
        MAX32 = pow(2, 127) * (2 - EPSILON32),
        MIN32 = pow(2, -126);

    var roundTiesToEven = function roundTiesToEven(n) {
      return n + 1 / EPSILON - 1 / EPSILON;
    };

    $export($export.S, 'Math', {
      fround: function fround(x) {
        var $abs = Math.abs(x),
            $sign = sign(x),
            a,
            result;
        if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs);
        if (result > MAX32 || result != result) return $sign * Infinity;
        return $sign * result;
      }
    });
  }, { "32": 32, "61": 61 }], 158: [function (_dereq_, module, exports) {
    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    var $export = _dereq_(32),
        abs = Math.abs;

    $export($export.S, 'Math', {
      hypot: function hypot(value1, value2) {
        // eslint-disable-line no-unused-vars
        var sum = 0,
            i = 0,
            aLen = arguments.length,
            larg = 0,
            arg,
            div;
        while (i < aLen) {
          arg = abs(arguments[i++]);
          if (larg < arg) {
            div = larg / arg;
            sum = sum * div * div + 1;
            larg = arg;
          } else if (arg > 0) {
            div = arg / larg;
            sum += div * div;
          } else sum += arg;
        }
        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
      }
    });
  }, { "32": 32 }], 159: [function (_dereq_, module, exports) {
    // 20.2.2.18 Math.imul(x, y)
    var $export = _dereq_(32),
        $imul = Math.imul;

    // some WebKit versions fails with big numbers, some has wrong arity
    $export($export.S + $export.F * _dereq_(34)(function () {
      return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
    }), 'Math', {
      imul: function imul(x, y) {
        var UINT16 = 0xffff,
            xn = +x,
            yn = +y,
            xl = UINT16 & xn,
            yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
      }
    });
  }, { "32": 32, "34": 34 }], 160: [function (_dereq_, module, exports) {
    // 20.2.2.21 Math.log10(x)
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      log10: function log10(x) {
        return Math.log(x) / Math.LN10;
      }
    });
  }, { "32": 32 }], 161: [function (_dereq_, module, exports) {
    // 20.2.2.20 Math.log1p(x)
    var $export = _dereq_(32);

    $export($export.S, 'Math', { log1p: _dereq_(60) });
  }, { "32": 32, "60": 60 }], 162: [function (_dereq_, module, exports) {
    // 20.2.2.22 Math.log2(x)
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      log2: function log2(x) {
        return Math.log(x) / Math.LN2;
      }
    });
  }, { "32": 32 }], 163: [function (_dereq_, module, exports) {
    // 20.2.2.28 Math.sign(x)
    var $export = _dereq_(32);

    $export($export.S, 'Math', { sign: _dereq_(61) });
  }, { "32": 32, "61": 61 }], 164: [function (_dereq_, module, exports) {
    // 20.2.2.30 Math.sinh(x)
    var $export = _dereq_(32),
        expm1 = _dereq_(59),
        exp = Math.exp;

    // V8 near Chromium 38 has a problem with very small numbers
    $export($export.S + $export.F * _dereq_(34)(function () {
      return !Math.sinh(-2e-17) != -2e-17;
    }), 'Math', {
      sinh: function sinh(x) {
        return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
      }
    });
  }, { "32": 32, "34": 34, "59": 59 }], 165: [function (_dereq_, module, exports) {
    // 20.2.2.33 Math.tanh(x)
    var $export = _dereq_(32),
        expm1 = _dereq_(59),
        exp = Math.exp;

    $export($export.S, 'Math', {
      tanh: function tanh(x) {
        var a = expm1(x = +x),
            b = expm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
      }
    });
  }, { "32": 32, "59": 59 }], 166: [function (_dereq_, module, exports) {
    // 20.2.2.34 Math.trunc(x)
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
      }
    });
  }, { "32": 32 }], 167: [function (_dereq_, module, exports) {
    'use strict';

    var global = _dereq_(38),
        has = _dereq_(39),
        cof = _dereq_(18),
        inheritIfRequired = _dereq_(43),
        toPrimitive = _dereq_(110),
        fails = _dereq_(34),
        gOPN = _dereq_(72).f,
        gOPD = _dereq_(70).f,
        dP = _dereq_(67).f,
        $trim = _dereq_(102).trim,
        NUMBER = 'Number',
        $Number = global[NUMBER],
        Base = $Number,
        proto = $Number.prototype
    // Opera ~12 has broken Object#toString
    ,
        BROKEN_COF = cof(_dereq_(66)(proto)) == NUMBER,
        TRIM = 'trim' in String.prototype;

    // 7.1.3 ToNumber(argument)
    var toNumber = function toNumber(argument) {
      var it = toPrimitive(argument, false);
      if (typeof it == 'string' && it.length > 2) {
        it = TRIM ? it.trim() : $trim(it, 3);
        var first = it.charCodeAt(0),
            third,
            radix,
            maxCode;
        if (first === 43 || first === 45) {
          third = it.charCodeAt(2);
          if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66:case 98:
              radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
            case 79:case 111:
              radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
            default:
              return +it;
          }
          for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
            code = digits.charCodeAt(i);
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN;
          }return parseInt(digits, radix);
        }
      }return +it;
    };

    if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
      $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value,
            that = this;
        return that instanceof $Number
        // check on 1..constructor(foo) case
        && (BROKEN_COF ? fails(function () {
          proto.valueOf.call(that);
        }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
      };
      for (var keys = _dereq_(28) ? gOPN(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
        if (has(Base, key = keys[j]) && !has($Number, key)) {
          dP($Number, key, gOPD(Base, key));
        }
      }
      $Number.prototype = proto;
      proto.constructor = $Number;
      _dereq_(87)(global, NUMBER, $Number);
    }
  }, { "102": 102, "110": 110, "18": 18, "28": 28, "34": 34, "38": 38, "39": 39, "43": 43, "66": 66, "67": 67, "70": 70, "72": 72, "87": 87 }], 168: [function (_dereq_, module, exports) {
    // 20.1.2.1 Number.EPSILON
    var $export = _dereq_(32);

    $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
  }, { "32": 32 }], 169: [function (_dereq_, module, exports) {
    // 20.1.2.2 Number.isFinite(number)
    var $export = _dereq_(32),
        _isFinite = _dereq_(38).isFinite;

    $export($export.S, 'Number', {
      isFinite: function isFinite(it) {
        return typeof it == 'number' && _isFinite(it);
      }
    });
  }, { "32": 32, "38": 38 }], 170: [function (_dereq_, module, exports) {
    // 20.1.2.3 Number.isInteger(number)
    var $export = _dereq_(32);

    $export($export.S, 'Number', { isInteger: _dereq_(48) });
  }, { "32": 32, "48": 48 }], 171: [function (_dereq_, module, exports) {
    // 20.1.2.4 Number.isNaN(number)
    var $export = _dereq_(32);

    $export($export.S, 'Number', {
      isNaN: function isNaN(number) {
        return number != number;
      }
    });
  }, { "32": 32 }], 172: [function (_dereq_, module, exports) {
    // 20.1.2.5 Number.isSafeInteger(number)
    var $export = _dereq_(32),
        isInteger = _dereq_(48),
        abs = Math.abs;

    $export($export.S, 'Number', {
      isSafeInteger: function isSafeInteger(number) {
        return isInteger(number) && abs(number) <= 0x1fffffffffffff;
      }
    });
  }, { "32": 32, "48": 48 }], 173: [function (_dereq_, module, exports) {
    // 20.1.2.6 Number.MAX_SAFE_INTEGER
    var $export = _dereq_(32);

    $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
  }, { "32": 32 }], 174: [function (_dereq_, module, exports) {
    // 20.1.2.10 Number.MIN_SAFE_INTEGER
    var $export = _dereq_(32);

    $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
  }, { "32": 32 }], 175: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        $parseFloat = _dereq_(81);
    // 20.1.2.12 Number.parseFloat(string)
    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
  }, { "32": 32, "81": 81 }], 176: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        $parseInt = _dereq_(82);
    // 20.1.2.13 Number.parseInt(string, radix)
    $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
  }, { "32": 32, "82": 82 }], 177: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toInteger = _dereq_(106),
        aNumberValue = _dereq_(4),
        repeat = _dereq_(101),
        $toFixed = 1..toFixed,
        floor = Math.floor,
        data = [0, 0, 0, 0, 0, 0],
        ERROR = 'Number.toFixed: incorrect invocation!',
        ZERO = '0';

    var multiply = function multiply(n, c) {
      var i = -1,
          c2 = c;
      while (++i < 6) {
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };
    var divide = function divide(n) {
      var i = 6,
          c = 0;
      while (--i >= 0) {
        c += data[i];
        data[i] = floor(c / n);
        c = c % n * 1e7;
      }
    };
    var numToString = function numToString() {
      var i = 6,
          s = '';
      while (--i >= 0) {
        if (s !== '' || i === 0 || data[i] !== 0) {
          var t = String(data[i]);
          s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
        }
      }return s;
    };
    var pow = function pow(x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    var log = function log(x) {
      var n = 0,
          x2 = x;
      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }
      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      }return n;
    };

    $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !_dereq_(34)(function () {
      // V8 ~ Android 4.3-
      $toFixed.call({});
    })), 'Number', {
      toFixed: function toFixed(fractionDigits) {
        var x = aNumberValue(this, ERROR),
            f = toInteger(fractionDigits),
            s = '',
            m = ZERO,
            e,
            z,
            j,
            k;
        if (f < 0 || f > 20) throw RangeError(ERROR);
        if (x != x) return 'NaN';
        if (x <= -1e21 || x >= 1e21) return String(x);
        if (x < 0) {
          s = '-';
          x = -x;
        }
        if (x > 1e-21) {
          e = log(x * pow(2, 69, 1)) - 69;
          z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
          z *= 0x10000000000000;
          e = 52 - e;
          if (e > 0) {
            multiply(0, z);
            j = f;
            while (j >= 7) {
              multiply(1e7, 0);
              j -= 7;
            }
            multiply(pow(10, j, 1), 0);
            j = e - 1;
            while (j >= 23) {
              divide(1 << 23);
              j -= 23;
            }
            divide(1 << j);
            multiply(1, 1);
            divide(2);
            m = numToString();
          } else {
            multiply(0, z);
            multiply(1 << -e, 0);
            m = numToString() + repeat.call(ZERO, f);
          }
        }
        if (f > 0) {
          k = m.length;
          m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
        } else {
          m = s + m;
        }return m;
      }
    });
  }, { "101": 101, "106": 106, "32": 32, "34": 34, "4": 4 }], 178: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $fails = _dereq_(34),
        aNumberValue = _dereq_(4),
        $toPrecision = 1..toPrecision;

    $export($export.P + $export.F * ($fails(function () {
      // IE7-
      return $toPrecision.call(1, undefined) !== '1';
    }) || !$fails(function () {
      // V8 ~ Android 4.3-
      $toPrecision.call({});
    })), 'Number', {
      toPrecision: function toPrecision(precision) {
        var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
      }
    });
  }, { "32": 32, "34": 34, "4": 4 }], 179: [function (_dereq_, module, exports) {
    // 19.1.3.1 Object.assign(target, source)
    var $export = _dereq_(32);

    $export($export.S + $export.F, 'Object', { assign: _dereq_(65) });
  }, { "32": 32, "65": 65 }], 180: [function (_dereq_, module, exports) {
    var $export = _dereq_(32);
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    $export($export.S, 'Object', { create: _dereq_(66) });
  }, { "32": 32, "66": 66 }], 181: [function (_dereq_, module, exports) {
    var $export = _dereq_(32);
    // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
    $export($export.S + $export.F * !_dereq_(28), 'Object', { defineProperties: _dereq_(68) });
  }, { "28": 28, "32": 32, "68": 68 }], 182: [function (_dereq_, module, exports) {
    var $export = _dereq_(32);
    // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
    $export($export.S + $export.F * !_dereq_(28), 'Object', { defineProperty: _dereq_(67).f });
  }, { "28": 28, "32": 32, "67": 67 }], 183: [function (_dereq_, module, exports) {
    // 19.1.2.5 Object.freeze(O)
    var isObject = _dereq_(49),
        meta = _dereq_(62).onFreeze;

    _dereq_(78)('freeze', function ($freeze) {
      return function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
      };
    });
  }, { "49": 49, "62": 62, "78": 78 }], 184: [function (_dereq_, module, exports) {
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    var toIObject = _dereq_(107),
        $getOwnPropertyDescriptor = _dereq_(70).f;

    _dereq_(78)('getOwnPropertyDescriptor', function () {
      return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
      };
    });
  }, { "107": 107, "70": 70, "78": 78 }], 185: [function (_dereq_, module, exports) {
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    _dereq_(78)('getOwnPropertyNames', function () {
      return _dereq_(71).f;
    });
  }, { "71": 71, "78": 78 }], 186: [function (_dereq_, module, exports) {
    // 19.1.2.9 Object.getPrototypeOf(O)
    var toObject = _dereq_(109),
        $getPrototypeOf = _dereq_(74);

    _dereq_(78)('getPrototypeOf', function () {
      return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      };
    });
  }, { "109": 109, "74": 74, "78": 78 }], 187: [function (_dereq_, module, exports) {
    // 19.1.2.11 Object.isExtensible(O)
    var isObject = _dereq_(49);

    _dereq_(78)('isExtensible', function ($isExtensible) {
      return function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
      };
    });
  }, { "49": 49, "78": 78 }], 188: [function (_dereq_, module, exports) {
    // 19.1.2.12 Object.isFrozen(O)
    var isObject = _dereq_(49);

    _dereq_(78)('isFrozen', function ($isFrozen) {
      return function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
      };
    });
  }, { "49": 49, "78": 78 }], 189: [function (_dereq_, module, exports) {
    // 19.1.2.13 Object.isSealed(O)
    var isObject = _dereq_(49);

    _dereq_(78)('isSealed', function ($isSealed) {
      return function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
      };
    });
  }, { "49": 49, "78": 78 }], 190: [function (_dereq_, module, exports) {
    // 19.1.3.10 Object.is(value1, value2)
    var $export = _dereq_(32);
    $export($export.S, 'Object', { is: _dereq_(89) });
  }, { "32": 32, "89": 89 }], 191: [function (_dereq_, module, exports) {
    // 19.1.2.14 Object.keys(O)
    var toObject = _dereq_(109),
        $keys = _dereq_(76);

    _dereq_(78)('keys', function () {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });
  }, { "109": 109, "76": 76, "78": 78 }], 192: [function (_dereq_, module, exports) {
    // 19.1.2.15 Object.preventExtensions(O)
    var isObject = _dereq_(49),
        meta = _dereq_(62).onFreeze;

    _dereq_(78)('preventExtensions', function ($preventExtensions) {
      return function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
      };
    });
  }, { "49": 49, "62": 62, "78": 78 }], 193: [function (_dereq_, module, exports) {
    // 19.1.2.17 Object.seal(O)
    var isObject = _dereq_(49),
        meta = _dereq_(62).onFreeze;

    _dereq_(78)('seal', function ($seal) {
      return function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
      };
    });
  }, { "49": 49, "62": 62, "78": 78 }], 194: [function (_dereq_, module, exports) {
    // 19.1.3.19 Object.setPrototypeOf(O, proto)
    var $export = _dereq_(32);
    $export($export.S, 'Object', { setPrototypeOf: _dereq_(90).set });
  }, { "32": 32, "90": 90 }], 195: [function (_dereq_, module, exports) {
    'use strict';
    // 19.1.3.6 Object.prototype.toString()

    var classof = _dereq_(17),
        test = {};
    test[_dereq_(117)('toStringTag')] = 'z';
    if (test + '' != '[object z]') {
      _dereq_(87)(Object.prototype, 'toString', function toString() {
        return '[object ' + classof(this) + ']';
      }, true);
    }
  }, { "117": 117, "17": 17, "87": 87 }], 196: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        $parseFloat = _dereq_(81);
    // 18.2.4 parseFloat(string)
    $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
  }, { "32": 32, "81": 81 }], 197: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        $parseInt = _dereq_(82);
    // 18.2.5 parseInt(string, radix)
    $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
  }, { "32": 32, "82": 82 }], 198: [function (_dereq_, module, exports) {
    'use strict';

    var LIBRARY = _dereq_(58),
        global = _dereq_(38),
        ctx = _dereq_(25),
        classof = _dereq_(17),
        $export = _dereq_(32),
        isObject = _dereq_(49),
        aFunction = _dereq_(3),
        anInstance = _dereq_(6),
        forOf = _dereq_(37),
        speciesConstructor = _dereq_(95),
        task = _dereq_(104).set,
        microtask = _dereq_(64)(),
        PROMISE = 'Promise',
        TypeError = global.TypeError,
        process = global.process,
        $Promise = global[PROMISE],
        process = global.process,
        isNode = classof(process) == 'process',
        empty = function empty() {/* empty */},
        Internal,
        GenericPromiseCapability,
        Wrapper;

    var USE_NATIVE = !!function () {
      try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1),
            FakePromise = (promise.constructor = {})[_dereq_(117)('species')] = function (exec) {
          exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
      } catch (e) {/* empty */}
    }();

    // helpers
    var sameConstructor = function sameConstructor(a, b) {
      // with library wrapper special case
      return a === b || a === $Promise && b === Wrapper;
    };
    var isThenable = function isThenable(it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var newPromiseCapability = function newPromiseCapability(C) {
      return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
    };
    var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    };
    var perform = function perform(exec) {
      try {
        exec();
      } catch (e) {
        return { error: e };
      }
    };
    var notify = function notify(promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v,
            ok = promise._s == 1,
            i = 0;
        var run = function run(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              domain = reaction.domain,
              result,
              then;
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (handler === true) result = value;else {
                if (domain) domain.enter();
                result = handler(value);
                if (domain) domain.exit();
              }
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i) {
          run(chain[i++]);
        } // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };
    var onUnhandled = function onUnhandled(promise) {
      task.call(global, function () {
        var value = promise._v,
            abrupt,
            handler,
            console;
        if (isUnhandled(promise)) {
          abrupt = perform(function () {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({ promise: promise, reason: value });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          });
          // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        }promise._a = undefined;
        if (abrupt) throw abrupt.error;
      });
    };
    var isUnhandled = function isUnhandled(promise) {
      if (promise._h == 1) return false;
      var chain = promise._a || promise._c,
          i = 0,
          reaction;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }return true;
    };
    var onHandleUnhandled = function onHandleUnhandled(promise) {
      task.call(global, function () {
        var handler;
        if (isNode) {
          process.emit('rejectionHandled', promise);
        } else if (handler = global.onrejectionhandled) {
          handler({ promise: promise, reason: promise._v });
        }
      });
    };
    var $reject = function $reject(value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function $resolve(value) {
      var promise = this,
          then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise; // unwrap
      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = { _w: promise, _d: false }; // wrap
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({ _w: promise, _d: false }, e); // wrap
      }
    };

    // constructor polyfill
    if (!USE_NATIVE) {
      // 25.4.3.1 Promise(executor)
      $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, '_h');
        aFunction(executor);
        Internal.call(this);
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      Internal = function Promise(executor) {
        this._c = []; // <- awaiting reactions
        this._a = undefined; // <- checked in isUnhandled reactions
        this._s = 0; // <- state
        this._d = false; // <- done
        this._v = undefined; // <- value
        this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false; // <- notify
      };
      Internal.prototype = _dereq_(86)($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode ? process.domain : undefined;
          this._c.push(reaction);
          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function _catch(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      PromiseCapability = function PromiseCapability() {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
    _dereq_(92)($Promise, PROMISE);
    _dereq_(91)(PROMISE);
    Wrapper = _dereq_(23)[PROMISE];

    // statics
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
      // 25.4.4.5 Promise.reject(r)
      reject: function reject(r) {
        var capability = newPromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
      // 25.4.4.6 Promise.resolve(x)
      resolve: function resolve(x) {
        // instanceof instead of internal slot check because we should fix it without replacement native Promise core
        if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
        var capability = newPromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }
    });
    $export($export.S + $export.F * !(USE_NATIVE && _dereq_(54)(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      // 25.4.4.1 Promise.all(iterable)
      all: function all(iterable) {
        var C = this,
            capability = newPromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject;
        var abrupt = perform(function () {
          var values = [],
              index = 0,
              remaining = 1;
          forOf(iterable, false, function (promise) {
            var $index = index++,
                alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function race(iterable) {
        var C = this,
            capability = newPromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      }
    });
  }, { "104": 104, "117": 117, "17": 17, "23": 23, "25": 25, "3": 3, "32": 32, "37": 37, "38": 38, "49": 49, "54": 54, "58": 58, "6": 6, "64": 64, "86": 86, "91": 91, "92": 92, "95": 95 }], 199: [function (_dereq_, module, exports) {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    var $export = _dereq_(32),
        aFunction = _dereq_(3),
        anObject = _dereq_(7),
        rApply = (_dereq_(38).Reflect || {}).apply,
        fApply = Function.apply;
    // MS Edge argumentsList argument is optional
    $export($export.S + $export.F * !_dereq_(34)(function () {
      rApply(function () {});
    }), 'Reflect', {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target),
            L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });
  }, { "3": 3, "32": 32, "34": 34, "38": 38, "7": 7 }], 200: [function (_dereq_, module, exports) {
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    var $export = _dereq_(32),
        create = _dereq_(66),
        aFunction = _dereq_(3),
        anObject = _dereq_(7),
        isObject = _dereq_(49),
        fails = _dereq_(34),
        bind = _dereq_(16),
        rConstruct = (_dereq_(38).Reflect || {}).construct;

    // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it
    var NEW_TARGET_BUG = fails(function () {
      function F() {}
      return !(rConstruct(function () {}, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function () {
      rConstruct(function () {});
    });

    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
      construct: function construct(Target, args /*, newTarget*/) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0:
              return new Target();
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
          // w/o altered newTarget, lot of arguments case
          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype,
            instance = create(isObject(proto) ? proto : Object.prototype),
            result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
  }, { "16": 16, "3": 3, "32": 32, "34": 34, "38": 38, "49": 49, "66": 66, "7": 7 }], 201: [function (_dereq_, module, exports) {
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    var dP = _dereq_(67),
        $export = _dereq_(32),
        anObject = _dereq_(7),
        toPrimitive = _dereq_(110);

    // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
    $export($export.S + $export.F * _dereq_(34)(function () {
      Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
    }), 'Reflect', {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);
        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, { "110": 110, "32": 32, "34": 34, "67": 67, "7": 7 }], 202: [function (_dereq_, module, exports) {
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    var $export = _dereq_(32),
        gOPD = _dereq_(70).f,
        anObject = _dereq_(7);

    $export($export.S, 'Reflect', {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });
  }, { "32": 32, "7": 7, "70": 70 }], 203: [function (_dereq_, module, exports) {
    'use strict';
    // 26.1.5 Reflect.enumerate(target)

    var $export = _dereq_(32),
        anObject = _dereq_(7);
    var Enumerate = function Enumerate(iterated) {
      this._t = anObject(iterated); // target
      this._i = 0; // next index
      var keys = this._k = [] // keys
      ,
          key;
      for (key in iterated) {
        keys.push(key);
      }
    };
    _dereq_(52)(Enumerate, 'Object', function () {
      var that = this,
          keys = that._k,
          key;
      do {
        if (that._i >= keys.length) return { value: undefined, done: true };
      } while (!((key = keys[that._i++]) in that._t));
      return { value: key, done: false };
    });

    $export($export.S, 'Reflect', {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });
  }, { "32": 32, "52": 52, "7": 7 }], 204: [function (_dereq_, module, exports) {
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    var gOPD = _dereq_(70),
        $export = _dereq_(32),
        anObject = _dereq_(7);

    $export($export.S, 'Reflect', {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });
  }, { "32": 32, "7": 7, "70": 70 }], 205: [function (_dereq_, module, exports) {
    // 26.1.8 Reflect.getPrototypeOf(target)
    var $export = _dereq_(32),
        getProto = _dereq_(74),
        anObject = _dereq_(7);

    $export($export.S, 'Reflect', {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });
  }, { "32": 32, "7": 7, "74": 74 }], 206: [function (_dereq_, module, exports) {
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    var gOPD = _dereq_(70),
        getPrototypeOf = _dereq_(74),
        has = _dereq_(39),
        $export = _dereq_(32),
        isObject = _dereq_(49),
        anObject = _dereq_(7);

    function get(target, propertyKey /*, receiver*/) {
      var receiver = arguments.length < 3 ? target : arguments[2],
          desc,
          proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }

    $export($export.S, 'Reflect', { get: get });
  }, { "32": 32, "39": 39, "49": 49, "7": 7, "70": 70, "74": 74 }], 207: [function (_dereq_, module, exports) {
    // 26.1.9 Reflect.has(target, propertyKey)
    var $export = _dereq_(32);

    $export($export.S, 'Reflect', {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
  }, { "32": 32 }], 208: [function (_dereq_, module, exports) {
    // 26.1.10 Reflect.isExtensible(target)
    var $export = _dereq_(32),
        anObject = _dereq_(7),
        $isExtensible = Object.isExtensible;

    $export($export.S, 'Reflect', {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });
  }, { "32": 32, "7": 7 }], 209: [function (_dereq_, module, exports) {
    // 26.1.11 Reflect.ownKeys(target)
    var $export = _dereq_(32);

    $export($export.S, 'Reflect', { ownKeys: _dereq_(80) });
  }, { "32": 32, "80": 80 }], 210: [function (_dereq_, module, exports) {
    // 26.1.12 Reflect.preventExtensions(target)
    var $export = _dereq_(32),
        anObject = _dereq_(7),
        $preventExtensions = Object.preventExtensions;

    $export($export.S, 'Reflect', {
      preventExtensions: function preventExtensions(target) {
        anObject(target);
        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, { "32": 32, "7": 7 }], 211: [function (_dereq_, module, exports) {
    // 26.1.14 Reflect.setPrototypeOf(target, proto)
    var $export = _dereq_(32),
        setProto = _dereq_(90);

    if (setProto) $export($export.S, 'Reflect', {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);
        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
  }, { "32": 32, "90": 90 }], 212: [function (_dereq_, module, exports) {
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    var dP = _dereq_(67),
        gOPD = _dereq_(70),
        getPrototypeOf = _dereq_(74),
        has = _dereq_(39),
        $export = _dereq_(32),
        createDesc = _dereq_(85),
        anObject = _dereq_(7),
        isObject = _dereq_(49);

    function set(target, propertyKey, V /*, receiver*/) {
      var receiver = arguments.length < 4 ? target : arguments[3],
          ownDesc = gOPD.f(anObject(target), propertyKey),
          existingDescriptor,
          proto;
      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) {
          return set(proto, propertyKey, V, receiver);
        }
        ownDesc = createDesc(0);
      }
      if (has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;
        existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
        existingDescriptor.value = V;
        dP.f(receiver, propertyKey, existingDescriptor);
        return true;
      }
      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    $export($export.S, 'Reflect', { set: set });
  }, { "32": 32, "39": 39, "49": 49, "67": 67, "7": 7, "70": 70, "74": 74, "85": 85 }], 213: [function (_dereq_, module, exports) {
    var global = _dereq_(38),
        inheritIfRequired = _dereq_(43),
        dP = _dereq_(67).f,
        gOPN = _dereq_(72).f,
        isRegExp = _dereq_(50),
        $flags = _dereq_(36),
        $RegExp = global.RegExp,
        Base = $RegExp,
        proto = $RegExp.prototype,
        re1 = /a/g,
        re2 = /a/g
    // "new" creates a new object, old webkit buggy here
    ,
        CORRECT_NEW = new $RegExp(re1) !== re1;

    if (_dereq_(28) && (!CORRECT_NEW || _dereq_(34)(function () {
      re2[_dereq_(117)('match')] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
    }))) {
      $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp,
            piRE = isRegExp(p),
            fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
      };
      var proxy = function proxy(key) {
        key in $RegExp || dP($RegExp, key, {
          configurable: true,
          get: function get() {
            return Base[key];
          },
          set: function set(it) {
            Base[key] = it;
          }
        });
      };
      for (var keys = gOPN(Base), i = 0; keys.length > i;) {
        proxy(keys[i++]);
      }proto.constructor = $RegExp;
      $RegExp.prototype = proto;
      _dereq_(87)(global, 'RegExp', $RegExp);
    }

    _dereq_(91)('RegExp');
  }, { "117": 117, "28": 28, "34": 34, "36": 36, "38": 38, "43": 43, "50": 50, "67": 67, "72": 72, "87": 87, "91": 91 }], 214: [function (_dereq_, module, exports) {
    // 21.2.5.3 get RegExp.prototype.flags()
    if (_dereq_(28) && /./g.flags != 'g') _dereq_(67).f(RegExp.prototype, 'flags', {
      configurable: true,
      get: _dereq_(36)
    });
  }, { "28": 28, "36": 36, "67": 67 }], 215: [function (_dereq_, module, exports) {
    // @@match logic
    _dereq_(35)('match', 1, function (defined, MATCH, $match) {
      // 21.1.3.11 String.prototype.match(regexp)
      return [function match(regexp) {
        'use strict';

        var O = defined(this),
            fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      }, $match];
    });
  }, { "35": 35 }], 216: [function (_dereq_, module, exports) {
    // @@replace logic
    _dereq_(35)('replace', 2, function (defined, REPLACE, $replace) {
      // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
      return [function replace(searchValue, replaceValue) {
        'use strict';

        var O = defined(this),
            fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
      }, $replace];
    });
  }, { "35": 35 }], 217: [function (_dereq_, module, exports) {
    // @@search logic
    _dereq_(35)('search', 1, function (defined, SEARCH, $search) {
      // 21.1.3.15 String.prototype.search(regexp)
      return [function search(regexp) {
        'use strict';

        var O = defined(this),
            fn = regexp == undefined ? undefined : regexp[SEARCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
      }, $search];
    });
  }, { "35": 35 }], 218: [function (_dereq_, module, exports) {
    // @@split logic
    _dereq_(35)('split', 2, function (defined, SPLIT, $split) {
      'use strict';

      var isRegExp = _dereq_(50),
          _split = $split,
          $push = [].push,
          $SPLIT = 'split',
          LENGTH = 'length',
          LAST_INDEX = 'lastIndex';
      if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
        var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
        // based on es5-shim implementation, need to rework it
        $split = function $split(separator, limit) {
          var string = String(this);
          if (separator === undefined && limit === 0) return [];
          // If `separator` is not a regex, use native split
          if (!isRegExp(separator)) return _split.call(string, separator, limit);
          var output = [];
          var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
          var lastLastIndex = 0;
          var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
          // Make `global` and avoid `lastIndex` issues by working with a copy
          var separatorCopy = new RegExp(separator.source, flags + 'g');
          var separator2, match, lastIndex, lastLength, i;
          // Doesn't need flags gy, but they don't hurt
          if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
          while (match = separatorCopy.exec(string)) {
            // `separatorCopy.lastIndex` is not reliable cross-browser
            lastIndex = match.index + match[0][LENGTH];
            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index));
              // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
              if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
                for (i = 1; i < arguments[LENGTH] - 2; i++) {
                  if (arguments[i] === undefined) match[i] = undefined;
                }
              });
              if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
              lastLength = match[0][LENGTH];
              lastLastIndex = lastIndex;
              if (output[LENGTH] >= splitLimit) break;
            }
            if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
          }
          if (lastLastIndex === string[LENGTH]) {
            if (lastLength || !separatorCopy.test('')) output.push('');
          } else output.push(string.slice(lastLastIndex));
          return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
        };
        // Chakra, V8
      } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
        $split = function $split(separator, limit) {
          return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
        };
      }
      // 21.1.3.17 String.prototype.split(separator, limit)
      return [function split(separator, limit) {
        var O = defined(this),
            fn = separator == undefined ? undefined : separator[SPLIT];
        return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
      }, $split];
    });
  }, { "35": 35, "50": 50 }], 219: [function (_dereq_, module, exports) {
    'use strict';

    _dereq_(214);
    var anObject = _dereq_(7),
        $flags = _dereq_(36),
        DESCRIPTORS = _dereq_(28),
        TO_STRING = 'toString',
        $toString = /./[TO_STRING];

    var define = function define(fn) {
      _dereq_(87)(RegExp.prototype, TO_STRING, fn, true);
    };

    // 21.2.5.14 RegExp.prototype.toString()
    if (_dereq_(34)(function () {
      return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
    })) {
      define(function toString() {
        var R = anObject(this);
        return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
      });
      // FF44- RegExp#toString has a wrong name
    } else if ($toString.name != TO_STRING) {
      define(function toString() {
        return $toString.call(this);
      });
    }
  }, { "214": 214, "28": 28, "34": 34, "36": 36, "7": 7, "87": 87 }], 220: [function (_dereq_, module, exports) {
    'use strict';

    var strong = _dereq_(19);

    // 23.2 Set Objects
    module.exports = _dereq_(22)('Set', function (get) {
      return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return strong.def(this, value = value === 0 ? 0 : value, value);
      }
    }, strong);
  }, { "19": 19, "22": 22 }], 221: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.2 String.prototype.anchor(name)

    _dereq_(99)('anchor', function (createHTML) {
      return function anchor(name) {
        return createHTML(this, 'a', 'name', name);
      };
    });
  }, { "99": 99 }], 222: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.3 String.prototype.big()

    _dereq_(99)('big', function (createHTML) {
      return function big() {
        return createHTML(this, 'big', '', '');
      };
    });
  }, { "99": 99 }], 223: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.4 String.prototype.blink()

    _dereq_(99)('blink', function (createHTML) {
      return function blink() {
        return createHTML(this, 'blink', '', '');
      };
    });
  }, { "99": 99 }], 224: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.5 String.prototype.bold()

    _dereq_(99)('bold', function (createHTML) {
      return function bold() {
        return createHTML(this, 'b', '', '');
      };
    });
  }, { "99": 99 }], 225: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $at = _dereq_(97)(false);
    $export($export.P, 'String', {
      // 21.1.3.3 String.prototype.codePointAt(pos)
      codePointAt: function codePointAt(pos) {
        return $at(this, pos);
      }
    });
  }, { "32": 32, "97": 97 }], 226: [function (_dereq_, module, exports) {
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
    'use strict';

    var $export = _dereq_(32),
        toLength = _dereq_(108),
        context = _dereq_(98),
        ENDS_WITH = 'endsWith',
        $endsWith = ''[ENDS_WITH];

    $export($export.P + $export.F * _dereq_(33)(ENDS_WITH), 'String', {
      endsWith: function endsWith(searchString /*, endPosition = @length */) {
        var that = context(this, searchString, ENDS_WITH),
            endPosition = arguments.length > 1 ? arguments[1] : undefined,
            len = toLength(that.length),
            end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
            search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
      }
    });
  }, { "108": 108, "32": 32, "33": 33, "98": 98 }], 227: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.6 String.prototype.fixed()

    _dereq_(99)('fixed', function (createHTML) {
      return function fixed() {
        return createHTML(this, 'tt', '', '');
      };
    });
  }, { "99": 99 }], 228: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.7 String.prototype.fontcolor(color)

    _dereq_(99)('fontcolor', function (createHTML) {
      return function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
      };
    });
  }, { "99": 99 }], 229: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.8 String.prototype.fontsize(size)

    _dereq_(99)('fontsize', function (createHTML) {
      return function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
      };
    });
  }, { "99": 99 }], 230: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        toIndex = _dereq_(105),
        fromCharCode = String.fromCharCode,
        $fromCodePoint = String.fromCodePoint;

    // length should be 1, old FF problem
    $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
      // 21.1.2.2 String.fromCodePoint(...codePoints)
      fromCodePoint: function fromCodePoint(x) {
        // eslint-disable-line no-unused-vars
        var res = [],
            aLen = arguments.length,
            i = 0,
            code;
        while (aLen > i) {
          code = +arguments[i++];
          if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
          res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
        }return res.join('');
      }
    });
  }, { "105": 105, "32": 32 }], 231: [function (_dereq_, module, exports) {
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
    'use strict';

    var $export = _dereq_(32),
        context = _dereq_(98),
        INCLUDES = 'includes';

    $export($export.P + $export.F * _dereq_(33)(INCLUDES), 'String', {
      includes: function includes(searchString /*, position = 0 */) {
        return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
  }, { "32": 32, "33": 33, "98": 98 }], 232: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.9 String.prototype.italics()

    _dereq_(99)('italics', function (createHTML) {
      return function italics() {
        return createHTML(this, 'i', '', '');
      };
    });
  }, { "99": 99 }], 233: [function (_dereq_, module, exports) {
    'use strict';

    var $at = _dereq_(97)(true);

    // 21.1.3.27 String.prototype[@@iterator]()
    _dereq_(53)(String, 'String', function (iterated) {
      this._t = String(iterated); // target
      this._i = 0; // next index
      // 21.1.5.2.1 %StringIteratorPrototype%.next()
    }, function () {
      var O = this._t,
          index = this._i,
          point;
      if (index >= O.length) return { value: undefined, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });
  }, { "53": 53, "97": 97 }], 234: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.10 String.prototype.link(url)

    _dereq_(99)('link', function (createHTML) {
      return function link(url) {
        return createHTML(this, 'a', 'href', url);
      };
    });
  }, { "99": 99 }], 235: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        toIObject = _dereq_(107),
        toLength = _dereq_(108);

    $export($export.S, 'String', {
      // 21.1.2.4 String.raw(callSite, ...substitutions)
      raw: function raw(callSite) {
        var tpl = toIObject(callSite.raw),
            len = toLength(tpl.length),
            aLen = arguments.length,
            res = [],
            i = 0;
        while (len > i) {
          res.push(String(tpl[i++]));
          if (i < aLen) res.push(String(arguments[i]));
        }return res.join('');
      }
    });
  }, { "107": 107, "108": 108, "32": 32 }], 236: [function (_dereq_, module, exports) {
    var $export = _dereq_(32);

    $export($export.P, 'String', {
      // 21.1.3.13 String.prototype.repeat(count)
      repeat: _dereq_(101)
    });
  }, { "101": 101, "32": 32 }], 237: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.11 String.prototype.small()

    _dereq_(99)('small', function (createHTML) {
      return function small() {
        return createHTML(this, 'small', '', '');
      };
    });
  }, { "99": 99 }], 238: [function (_dereq_, module, exports) {
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
    'use strict';

    var $export = _dereq_(32),
        toLength = _dereq_(108),
        context = _dereq_(98),
        STARTS_WITH = 'startsWith',
        $startsWith = ''[STARTS_WITH];

    $export($export.P + $export.F * _dereq_(33)(STARTS_WITH), 'String', {
      startsWith: function startsWith(searchString /*, position = 0 */) {
        var that = context(this, searchString, STARTS_WITH),
            index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
            search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
      }
    });
  }, { "108": 108, "32": 32, "33": 33, "98": 98 }], 239: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.12 String.prototype.strike()

    _dereq_(99)('strike', function (createHTML) {
      return function strike() {
        return createHTML(this, 'strike', '', '');
      };
    });
  }, { "99": 99 }], 240: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.13 String.prototype.sub()

    _dereq_(99)('sub', function (createHTML) {
      return function sub() {
        return createHTML(this, 'sub', '', '');
      };
    });
  }, { "99": 99 }], 241: [function (_dereq_, module, exports) {
    'use strict';
    // B.2.3.14 String.prototype.sup()

    _dereq_(99)('sup', function (createHTML) {
      return function sup() {
        return createHTML(this, 'sup', '', '');
      };
    });
  }, { "99": 99 }], 242: [function (_dereq_, module, exports) {
    'use strict';
    // 21.1.3.25 String.prototype.trim()

    _dereq_(102)('trim', function ($trim) {
      return function trim() {
        return $trim(this, 3);
      };
    });
  }, { "102": 102 }], 243: [function (_dereq_, module, exports) {
    'use strict';
    // ECMAScript 6 symbols shim

    var global = _dereq_(38),
        has = _dereq_(39),
        DESCRIPTORS = _dereq_(28),
        $export = _dereq_(32),
        redefine = _dereq_(87),
        META = _dereq_(62).KEY,
        $fails = _dereq_(34),
        shared = _dereq_(94),
        setToStringTag = _dereq_(92),
        uid = _dereq_(114),
        wks = _dereq_(117),
        wksExt = _dereq_(116),
        wksDefine = _dereq_(115),
        keyOf = _dereq_(57),
        enumKeys = _dereq_(31),
        isArray = _dereq_(47),
        anObject = _dereq_(7),
        toIObject = _dereq_(107),
        toPrimitive = _dereq_(110),
        createDesc = _dereq_(85),
        _create = _dereq_(66),
        gOPNExt = _dereq_(71),
        $GOPD = _dereq_(70),
        $DP = _dereq_(67),
        $keys = _dereq_(76),
        gOPD = $GOPD.f,
        dP = $DP.f,
        gOPN = gOPNExt.f,
        $Symbol = global.Symbol,
        $JSON = global.JSON,
        _stringify = $JSON && $JSON.stringify,
        PROTOTYPE = 'prototype',
        HIDDEN = wks('_hidden'),
        TO_PRIMITIVE = wks('toPrimitive'),
        isEnum = {}.propertyIsEnumerable,
        SymbolRegistry = shared('symbol-registry'),
        AllSymbols = shared('symbols'),
        OPSymbols = shared('op-symbols'),
        ObjectProto = Object[PROTOTYPE],
        USE_NATIVE = typeof $Symbol == 'function',
        QObject = global.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDesc = DESCRIPTORS && $fails(function () {
      return _create(dP({}, 'a', {
        get: function get() {
          return dP(this, 'a', { value: 7 }).a;
        }
      })).a != 7;
    }) ? function (it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      dP(it, key, D);
      if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
    } : dP;

    var wrap = function wrap(tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };

    var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
      return (typeof it === "undefined" ? "undefined" : _typeof(it)) == 'symbol';
    } : function (it) {
      return it instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if (has(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _create(D, { enumerable: createDesc(0, false) });
        }return setSymbolDesc(it, key, D);
      }return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P)),
          i = 0,
          l = keys.length,
          key;
      while (l > i) {
        $defineProperty(it, key = keys[i++], P[key]);
      }return it;
    };
    var $create = function create(it, P) {
      return P === undefined ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
      return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
      var D = gOPD(it, key);
      if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it)),
          result = [],
          i = 0,
          key;
      while (names.length > i) {
        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      }return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto,
          names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
          result = [],
          i = 0,
          key;
      while (names.length > i) {
        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
      }return result;
    };

    // 19.4.1.1 Symbol([description])
    if (!USE_NATIVE) {
      $Symbol = function _Symbol2() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function $set(value) {
          if (this === ObjectProto) $set.call(OPSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return this._k;
      });

      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      _dereq_(72).f = gOPNExt.f = $getOwnPropertyNames;
      _dereq_(77).f = $propertyIsEnumerable;
      _dereq_(73).f = $getOwnPropertySymbols;

      if (DESCRIPTORS && !_dereq_(58)) {
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
      }

      wksExt.f = function (name) {
        return wrap(wks(name));
      };
    }

    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

    for (var symbols =
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
      wks(symbols[i++]);
    }for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
      wksDefine(symbols[i++]);
    }$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
      // 19.4.2.1 Symbol.for(key)
      'for': function _for(key) {
        return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(key) {
        if (isSymbol(key)) return keyOf(SymbolRegistry, key);
        throw TypeError(key + ' is not a symbol!');
      },
      useSetter: function useSetter() {
        setter = true;
      },
      useSimple: function useSimple() {
        setter = false;
      }
    });

    $export($export.S + $export.F * !USE_NATIVE, 'Object', {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // 24.3.2 JSON.stringify(value [, replacer [, space]])
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
      var S = $Symbol();
      // MS Edge converts symbol values to JSON as {}
      // WebKit converts symbol values to JSON as null
      // V8 throws on boxed symbols
      return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
    })), 'JSON', {
      stringify: function stringify(it) {
        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        var args = [it],
            i = 1,
            replacer,
            $replacer;
        while (arguments.length > i) {
          args.push(arguments[i++]);
        }replacer = args[1];
        if (typeof replacer == 'function') $replacer = replacer;
        if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
          if ($replacer) value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });

    // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_(40)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    // 19.4.3.5 Symbol.prototype[@@toStringTag]
    setToStringTag($Symbol, 'Symbol');
    // 20.2.1.9 Math[@@toStringTag]
    setToStringTag(Math, 'Math', true);
    // 24.3.3 JSON[@@toStringTag]
    setToStringTag(global.JSON, 'JSON', true);
  }, { "107": 107, "110": 110, "114": 114, "115": 115, "116": 116, "117": 117, "28": 28, "31": 31, "32": 32, "34": 34, "38": 38, "39": 39, "40": 40, "47": 47, "57": 57, "58": 58, "62": 62, "66": 66, "67": 67, "7": 7, "70": 70, "71": 71, "72": 72, "73": 73, "76": 76, "77": 77, "85": 85, "87": 87, "92": 92, "94": 94 }], 244: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        $typed = _dereq_(113),
        buffer = _dereq_(112),
        anObject = _dereq_(7),
        toIndex = _dereq_(105),
        toLength = _dereq_(108),
        isObject = _dereq_(49),
        ArrayBuffer = _dereq_(38).ArrayBuffer,
        speciesConstructor = _dereq_(95),
        $ArrayBuffer = buffer.ArrayBuffer,
        $DataView = buffer.DataView,
        $isView = $typed.ABV && ArrayBuffer.isView,
        $slice = $ArrayBuffer.prototype.slice,
        VIEW = $typed.VIEW,
        ARRAY_BUFFER = 'ArrayBuffer';

    $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

    $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
      // 24.1.3.1 ArrayBuffer.isView(arg)
      isView: function isView(it) {
        return $isView && $isView(it) || isObject(it) && VIEW in it;
      }
    });

    $export($export.P + $export.U + $export.F * _dereq_(34)(function () {
      return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
    }), ARRAY_BUFFER, {
      // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
      slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
        var len = anObject(this).byteLength,
            first = toIndex(start, len),
            final = toIndex(end === undefined ? len : end, len),
            result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
            viewS = new $DataView(this),
            viewT = new $DataView(result),
            index = 0;
        while (first < final) {
          viewT.setUint8(index++, viewS.getUint8(first++));
        }return result;
      }
    });

    _dereq_(91)(ARRAY_BUFFER);
  }, { "105": 105, "108": 108, "112": 112, "113": 113, "32": 32, "34": 34, "38": 38, "49": 49, "7": 7, "91": 91, "95": 95 }], 245: [function (_dereq_, module, exports) {
    var $export = _dereq_(32);
    $export($export.G + $export.W + $export.F * !_dereq_(113).ABV, {
      DataView: _dereq_(112).DataView
    });
  }, { "112": 112, "113": 113, "32": 32 }], 246: [function (_dereq_, module, exports) {
    _dereq_(111)('Float32', 4, function (init) {
      return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 247: [function (_dereq_, module, exports) {
    _dereq_(111)('Float64', 8, function (init) {
      return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 248: [function (_dereq_, module, exports) {
    _dereq_(111)('Int16', 2, function (init) {
      return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 249: [function (_dereq_, module, exports) {
    _dereq_(111)('Int32', 4, function (init) {
      return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 250: [function (_dereq_, module, exports) {
    _dereq_(111)('Int8', 1, function (init) {
      return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 251: [function (_dereq_, module, exports) {
    _dereq_(111)('Uint16', 2, function (init) {
      return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 252: [function (_dereq_, module, exports) {
    _dereq_(111)('Uint32', 4, function (init) {
      return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 253: [function (_dereq_, module, exports) {
    _dereq_(111)('Uint8', 1, function (init) {
      return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    });
  }, { "111": 111 }], 254: [function (_dereq_, module, exports) {
    _dereq_(111)('Uint8', 1, function (init) {
      return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    }, true);
  }, { "111": 111 }], 255: [function (_dereq_, module, exports) {
    'use strict';

    var each = _dereq_(12)(0),
        redefine = _dereq_(87),
        meta = _dereq_(62),
        assign = _dereq_(65),
        weak = _dereq_(21),
        isObject = _dereq_(49),
        getWeak = meta.getWeak,
        isExtensible = Object.isExtensible,
        uncaughtFrozenStore = weak.ufstore,
        tmp = {},
        InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(this).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(this, key, value);
      }
    };

    // 23.3 WeakMap Objects
    var $WeakMap = module.exports = _dereq_(22)('WeakMap', wrapper, methods, weak, true, true);

    // IE11 WeakMap frozen keys fix
    if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
      InternalMap = weak.getConstructor(wrapper);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype,
            method = proto[key];
        redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();
            var result = this._f[key](a, b);
            return key == 'set' ? this : result;
            // store all the rest on native weakmap
          }return method.call(this, a, b);
        });
      });
    }
  }, { "12": 12, "21": 21, "22": 22, "49": 49, "62": 62, "65": 65, "87": 87 }], 256: [function (_dereq_, module, exports) {
    'use strict';

    var weak = _dereq_(21);

    // 23.4 WeakSet Objects
    _dereq_(22)('WeakSet', function (get) {
      return function WeakSet() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return weak.def(this, value, true);
      }
    }, weak, false, true);
  }, { "21": 21, "22": 22 }], 257: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/tc39/Array.prototype.includes

    var $export = _dereq_(32),
        $includes = _dereq_(11)(true);

    $export($export.P, 'Array', {
      includes: function includes(el /*, fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    _dereq_(5)('includes');
  }, { "11": 11, "32": 32, "5": 5 }], 258: [function (_dereq_, module, exports) {
    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
    var $export = _dereq_(32),
        microtask = _dereq_(64)(),
        process = _dereq_(38).process,
        isNode = _dereq_(18)(process) == 'process';

    $export($export.G, {
      asap: function asap(fn) {
        var domain = isNode && process.domain;
        microtask(domain ? domain.bind(fn) : fn);
      }
    });
  }, { "18": 18, "32": 32, "38": 38, "64": 64 }], 259: [function (_dereq_, module, exports) {
    // https://github.com/ljharb/proposal-is-error
    var $export = _dereq_(32),
        cof = _dereq_(18);

    $export($export.S, 'Error', {
      isError: function isError(it) {
        return cof(it) === 'Error';
      }
    });
  }, { "18": 18, "32": 32 }], 260: [function (_dereq_, module, exports) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var $export = _dereq_(32);

    $export($export.P + $export.R, 'Map', { toJSON: _dereq_(20)('Map') });
  }, { "20": 20, "32": 32 }], 261: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      iaddh: function iaddh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0,
            $x1 = x1 >>> 0,
            $y0 = y0 >>> 0;
        return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
      }
    });
  }, { "32": 32 }], 262: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      imulh: function imulh(u, v) {
        var UINT16 = 0xffff,
            $u = +u,
            $v = +v,
            u0 = $u & UINT16,
            v0 = $v & UINT16,
            u1 = $u >> 16,
            v1 = $v >> 16,
            t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
      }
    });
  }, { "32": 32 }], 263: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      isubh: function isubh(x0, x1, y0, y1) {
        var $x0 = x0 >>> 0,
            $x1 = x1 >>> 0,
            $y0 = y0 >>> 0;
        return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
      }
    });
  }, { "32": 32 }], 264: [function (_dereq_, module, exports) {
    // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
    var $export = _dereq_(32);

    $export($export.S, 'Math', {
      umulh: function umulh(u, v) {
        var UINT16 = 0xffff,
            $u = +u,
            $v = +v,
            u0 = $u & UINT16,
            v0 = $v & UINT16,
            u1 = $u >>> 16,
            v1 = $v >>> 16,
            t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
        return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
      }
    });
  }, { "32": 32 }], 265: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toObject = _dereq_(109),
        aFunction = _dereq_(3),
        $defineProperty = _dereq_(67);

    // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
    _dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
      __defineGetter__: function __defineGetter__(P, getter) {
        $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
      }
    });
  }, { "109": 109, "28": 28, "3": 3, "32": 32, "67": 67, "69": 69 }], 266: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toObject = _dereq_(109),
        aFunction = _dereq_(3),
        $defineProperty = _dereq_(67);

    // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
    _dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
      __defineSetter__: function __defineSetter__(P, setter) {
        $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
      }
    });
  }, { "109": 109, "28": 28, "3": 3, "32": 32, "67": 67, "69": 69 }], 267: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = _dereq_(32),
        $entries = _dereq_(79)(true);

    $export($export.S, 'Object', {
      entries: function entries(it) {
        return $entries(it);
      }
    });
  }, { "32": 32, "79": 79 }], 268: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-object-getownpropertydescriptors
    var $export = _dereq_(32),
        ownKeys = _dereq_(80),
        toIObject = _dereq_(107),
        gOPD = _dereq_(70),
        createProperty = _dereq_(24);

    $export($export.S, 'Object', {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = toIObject(object),
            getDesc = gOPD.f,
            keys = ownKeys(O),
            result = {},
            i = 0,
            key;
        while (keys.length > i) {
          createProperty(result, key = keys[i++], getDesc(O, key));
        }return result;
      }
    });
  }, { "107": 107, "24": 24, "32": 32, "70": 70, "80": 80 }], 269: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toObject = _dereq_(109),
        toPrimitive = _dereq_(110),
        getPrototypeOf = _dereq_(74),
        getOwnPropertyDescriptor = _dereq_(70).f;

    // B.2.2.4 Object.prototype.__lookupGetter__(P)
    _dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this),
            K = toPrimitive(P, true),
            D;
        do {
          if (D = getOwnPropertyDescriptor(O, K)) return D.get;
        } while (O = getPrototypeOf(O));
      }
    });
  }, { "109": 109, "110": 110, "28": 28, "32": 32, "69": 69, "70": 70, "74": 74 }], 270: [function (_dereq_, module, exports) {
    'use strict';

    var $export = _dereq_(32),
        toObject = _dereq_(109),
        toPrimitive = _dereq_(110),
        getPrototypeOf = _dereq_(74),
        getOwnPropertyDescriptor = _dereq_(70).f;

    // B.2.2.5 Object.prototype.__lookupSetter__(P)
    _dereq_(28) && $export($export.P + _dereq_(69), 'Object', {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this),
            K = toPrimitive(P, true),
            D;
        do {
          if (D = getOwnPropertyDescriptor(O, K)) return D.set;
        } while (O = getPrototypeOf(O));
      }
    });
  }, { "109": 109, "110": 110, "28": 28, "32": 32, "69": 69, "70": 70, "74": 74 }], 271: [function (_dereq_, module, exports) {
    // https://github.com/tc39/proposal-object-values-entries
    var $export = _dereq_(32),
        $values = _dereq_(79)(false);

    $export($export.S, 'Object', {
      values: function values(it) {
        return $values(it);
      }
    });
  }, { "32": 32, "79": 79 }], 272: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/zenparsing/es-observable

    var $export = _dereq_(32),
        global = _dereq_(38),
        core = _dereq_(23),
        microtask = _dereq_(64)(),
        OBSERVABLE = _dereq_(117)('observable'),
        aFunction = _dereq_(3),
        anObject = _dereq_(7),
        anInstance = _dereq_(6),
        redefineAll = _dereq_(86),
        hide = _dereq_(40),
        forOf = _dereq_(37),
        RETURN = forOf.RETURN;

    var getMethod = function getMethod(fn) {
      return fn == null ? undefined : aFunction(fn);
    };

    var cleanupSubscription = function cleanupSubscription(subscription) {
      var cleanup = subscription._c;
      if (cleanup) {
        subscription._c = undefined;
        cleanup();
      }
    };

    var subscriptionClosed = function subscriptionClosed(subscription) {
      return subscription._o === undefined;
    };

    var closeSubscription = function closeSubscription(subscription) {
      if (!subscriptionClosed(subscription)) {
        subscription._o = undefined;
        cleanupSubscription(subscription);
      }
    };

    var Subscription = function Subscription(observer, subscriber) {
      anObject(observer);
      this._c = undefined;
      this._o = observer;
      observer = new SubscriptionObserver(this);
      try {
        var cleanup = subscriber(observer),
            subscription = cleanup;
        if (cleanup != null) {
          if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
            subscription.unsubscribe();
          };else aFunction(cleanup);
          this._c = cleanup;
        }
      } catch (e) {
        observer.error(e);
        return;
      }if (subscriptionClosed(this)) cleanupSubscription(this);
    };

    Subscription.prototype = redefineAll({}, {
      unsubscribe: function unsubscribe() {
        closeSubscription(this);
      }
    });

    var SubscriptionObserver = function SubscriptionObserver(subscription) {
      this._s = subscription;
    };

    SubscriptionObserver.prototype = redefineAll({}, {
      next: function next(value) {
        var subscription = this._s;
        if (!subscriptionClosed(subscription)) {
          var observer = subscription._o;
          try {
            var m = getMethod(observer.next);
            if (m) return m.call(observer, value);
          } catch (e) {
            try {
              closeSubscription(subscription);
            } finally {
              throw e;
            }
          }
        }
      },
      error: function error(value) {
        var subscription = this._s;
        if (subscriptionClosed(subscription)) throw value;
        var observer = subscription._o;
        subscription._o = undefined;
        try {
          var m = getMethod(observer.error);
          if (!m) throw value;
          value = m.call(observer, value);
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }cleanupSubscription(subscription);
        return value;
      },
      complete: function complete(value) {
        var subscription = this._s;
        if (!subscriptionClosed(subscription)) {
          var observer = subscription._o;
          subscription._o = undefined;
          try {
            var m = getMethod(observer.complete);
            value = m ? m.call(observer, value) : undefined;
          } catch (e) {
            try {
              cleanupSubscription(subscription);
            } finally {
              throw e;
            }
          }cleanupSubscription(subscription);
          return value;
        }
      }
    });

    var $Observable = function Observable(subscriber) {
      anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
    };

    redefineAll($Observable.prototype, {
      subscribe: function subscribe(observer) {
        return new Subscription(observer, this._f);
      },
      forEach: function forEach(fn) {
        var that = this;
        return new (core.Promise || global.Promise)(function (resolve, reject) {
          aFunction(fn);
          var subscription = that.subscribe({
            next: function next(value) {
              try {
                return fn(value);
              } catch (e) {
                reject(e);
                subscription.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
        });
      }
    });

    redefineAll($Observable, {
      from: function from(x) {
        var C = typeof this === 'function' ? this : $Observable;
        var method = getMethod(anObject(x)[OBSERVABLE]);
        if (method) {
          var observable = anObject(method.call(x));
          return observable.constructor === C ? observable : new C(function (observer) {
            return observable.subscribe(observer);
          });
        }
        return new C(function (observer) {
          var done = false;
          microtask(function () {
            if (!done) {
              try {
                if (forOf(x, false, function (it) {
                  observer.next(it);
                  if (done) return RETURN;
                }) === RETURN) return;
              } catch (e) {
                if (done) throw e;
                observer.error(e);
                return;
              }observer.complete();
            }
          });
          return function () {
            done = true;
          };
        });
      },
      of: function of() {
        for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
          items[i] = arguments[i++];
        }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
          var done = false;
          microtask(function () {
            if (!done) {
              for (var i = 0; i < items.length; ++i) {
                observer.next(items[i]);
                if (done) return;
              }observer.complete();
            }
          });
          return function () {
            done = true;
          };
        });
      }
    });

    hide($Observable.prototype, OBSERVABLE, function () {
      return this;
    });

    $export($export.G, { Observable: $Observable });

    _dereq_(91)('Observable');
  }, { "117": 117, "23": 23, "3": 3, "32": 32, "37": 37, "38": 38, "40": 40, "6": 6, "64": 64, "7": 7, "86": 86, "91": 91 }], 273: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        toMetaKey = metadata.key,
        ordinaryDefineOwnMetadata = metadata.set;

    metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
      } });
  }, { "63": 63, "7": 7 }], 274: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        toMetaKey = metadata.key,
        getOrCreateMetadataMap = metadata.map,
        store = metadata.store;

    metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
        var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
            metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
        if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
        if (metadataMap.size) return true;
        var targetMetadata = store.get(target);
        targetMetadata['delete'](targetKey);
        return !!targetMetadata.size || store['delete'](target);
      } });
  }, { "63": 63, "7": 7 }], 275: [function (_dereq_, module, exports) {
    var Set = _dereq_(220),
        from = _dereq_(10),
        metadata = _dereq_(63),
        anObject = _dereq_(7),
        getPrototypeOf = _dereq_(74),
        ordinaryOwnMetadataKeys = metadata.keys,
        toMetaKey = metadata.key;

    var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
      var oKeys = ordinaryOwnMetadataKeys(O, P),
          parent = getPrototypeOf(O);
      if (parent === null) return oKeys;
      var pKeys = ordinaryMetadataKeys(parent, P);
      return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };

    metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
        return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      } });
  }, { "10": 10, "220": 220, "63": 63, "7": 7, "74": 74 }], 276: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        getPrototypeOf = _dereq_(74),
        ordinaryHasOwnMetadata = metadata.has,
        ordinaryGetOwnMetadata = metadata.get,
        toMetaKey = metadata.key;

    var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
    };

    metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
        return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      } });
  }, { "63": 63, "7": 7, "74": 74 }], 277: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        ordinaryOwnMetadataKeys = metadata.keys,
        toMetaKey = metadata.key;

    metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
        return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      } });
  }, { "63": 63, "7": 7 }], 278: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        ordinaryGetOwnMetadata = metadata.get,
        toMetaKey = metadata.key;

    metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
        return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      } });
  }, { "63": 63, "7": 7 }], 279: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        getPrototypeOf = _dereq_(74),
        ordinaryHasOwnMetadata = metadata.has,
        toMetaKey = metadata.key;

    var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return true;
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
    };

    metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
        return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      } });
  }, { "63": 63, "7": 7, "74": 74 }], 280: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        ordinaryHasOwnMetadata = metadata.has,
        toMetaKey = metadata.key;

    metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
        return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      } });
  }, { "63": 63, "7": 7 }], 281: [function (_dereq_, module, exports) {
    var metadata = _dereq_(63),
        anObject = _dereq_(7),
        aFunction = _dereq_(3),
        toMetaKey = metadata.key,
        ordinaryDefineOwnMetadata = metadata.set;

    metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
        return function decorator(target, targetKey) {
          ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
        };
      } });
  }, { "3": 3, "63": 63, "7": 7 }], 282: [function (_dereq_, module, exports) {
    // https://github.com/DavidBruant/Map-Set.prototype.toJSON
    var $export = _dereq_(32);

    $export($export.P + $export.R, 'Set', { toJSON: _dereq_(20)('Set') });
  }, { "20": 20, "32": 32 }], 283: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/mathiasbynens/String.prototype.at

    var $export = _dereq_(32),
        $at = _dereq_(97)(true);

    $export($export.P, 'String', {
      at: function at(pos) {
        return $at(this, pos);
      }
    });
  }, { "32": 32, "97": 97 }], 284: [function (_dereq_, module, exports) {
    'use strict';
    // https://tc39.github.io/String.prototype.matchAll/

    var $export = _dereq_(32),
        defined = _dereq_(27),
        toLength = _dereq_(108),
        isRegExp = _dereq_(50),
        getFlags = _dereq_(36),
        RegExpProto = RegExp.prototype;

    var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
      this._r = regexp;
      this._s = string;
    };

    _dereq_(52)($RegExpStringIterator, 'RegExp String', function next() {
      var match = this._r.exec(this._s);
      return { value: match, done: match === null };
    });

    $export($export.P, 'String', {
      matchAll: function matchAll(regexp) {
        defined(this);
        if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
        var S = String(this),
            flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
            rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
        rx.lastIndex = toLength(regexp.lastIndex);
        return new $RegExpStringIterator(rx, S);
      }
    });
  }, { "108": 108, "27": 27, "32": 32, "36": 36, "50": 50, "52": 52 }], 285: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/tc39/proposal-string-pad-start-end

    var $export = _dereq_(32),
        $pad = _dereq_(100);

    $export($export.P, 'String', {
      padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
      }
    });
  }, { "100": 100, "32": 32 }], 286: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/tc39/proposal-string-pad-start-end

    var $export = _dereq_(32),
        $pad = _dereq_(100);

    $export($export.P, 'String', {
      padStart: function padStart(maxLength /*, fillString = ' ' */) {
        return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
      }
    });
  }, { "100": 100, "32": 32 }], 287: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

    _dereq_(102)('trimLeft', function ($trim) {
      return function trimLeft() {
        return $trim(this, 1);
      };
    }, 'trimStart');
  }, { "102": 102 }], 288: [function (_dereq_, module, exports) {
    'use strict';
    // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

    _dereq_(102)('trimRight', function ($trim) {
      return function trimRight() {
        return $trim(this, 2);
      };
    }, 'trimEnd');
  }, { "102": 102 }], 289: [function (_dereq_, module, exports) {
    _dereq_(115)('asyncIterator');
  }, { "115": 115 }], 290: [function (_dereq_, module, exports) {
    _dereq_(115)('observable');
  }, { "115": 115 }], 291: [function (_dereq_, module, exports) {
    // https://github.com/ljharb/proposal-global
    var $export = _dereq_(32);

    $export($export.S, 'System', { global: _dereq_(38) });
  }, { "32": 32, "38": 38 }], 292: [function (_dereq_, module, exports) {
    var $iterators = _dereq_(130),
        redefine = _dereq_(87),
        global = _dereq_(38),
        hide = _dereq_(40),
        Iterators = _dereq_(56),
        wks = _dereq_(117),
        ITERATOR = wks('iterator'),
        TO_STRING_TAG = wks('toStringTag'),
        ArrayValues = Iterators.Array;

    for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
      var NAME = collections[i],
          Collection = global[NAME],
          proto = Collection && Collection.prototype,
          key;
      if (proto) {
        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = ArrayValues;
        for (key in $iterators) {
          if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
      }
    }
  }, { "117": 117, "130": 130, "38": 38, "40": 40, "56": 56, "87": 87 }], 293: [function (_dereq_, module, exports) {
    var $export = _dereq_(32),
        $task = _dereq_(104);
    $export($export.G + $export.B, {
      setImmediate: $task.set,
      clearImmediate: $task.clear
    });
  }, { "104": 104, "32": 32 }], 294: [function (_dereq_, module, exports) {
    // ie9- setTimeout & setInterval additional parameters fix
    var global = _dereq_(38),
        $export = _dereq_(32),
        invoke = _dereq_(44),
        partial = _dereq_(83),
        navigator = global.navigator,
        MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
    var wrap = function wrap(set) {
      return MSIE ? function (fn, time /*, ...args */) {
        return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
      } : set;
    };
    $export($export.G + $export.B + $export.F * MSIE, {
      setTimeout: wrap(global.setTimeout),
      setInterval: wrap(global.setInterval)
    });
  }, { "32": 32, "38": 38, "44": 44, "83": 83 }], 295: [function (_dereq_, module, exports) {
    _dereq_(243);
    _dereq_(180);
    _dereq_(182);
    _dereq_(181);
    _dereq_(184);
    _dereq_(186);
    _dereq_(191);
    _dereq_(185);
    _dereq_(183);
    _dereq_(193);
    _dereq_(192);
    _dereq_(188);
    _dereq_(189);
    _dereq_(187);
    _dereq_(179);
    _dereq_(190);
    _dereq_(194);
    _dereq_(195);
    _dereq_(146);
    _dereq_(148);
    _dereq_(147);
    _dereq_(197);
    _dereq_(196);
    _dereq_(167);
    _dereq_(177);
    _dereq_(178);
    _dereq_(168);
    _dereq_(169);
    _dereq_(170);
    _dereq_(171);
    _dereq_(172);
    _dereq_(173);
    _dereq_(174);
    _dereq_(175);
    _dereq_(176);
    _dereq_(150);
    _dereq_(151);
    _dereq_(152);
    _dereq_(153);
    _dereq_(154);
    _dereq_(155);
    _dereq_(156);
    _dereq_(157);
    _dereq_(158);
    _dereq_(159);
    _dereq_(160);
    _dereq_(161);
    _dereq_(162);
    _dereq_(163);
    _dereq_(164);
    _dereq_(165);
    _dereq_(166);
    _dereq_(230);
    _dereq_(235);
    _dereq_(242);
    _dereq_(233);
    _dereq_(225);
    _dereq_(226);
    _dereq_(231);
    _dereq_(236);
    _dereq_(238);
    _dereq_(221);
    _dereq_(222);
    _dereq_(223);
    _dereq_(224);
    _dereq_(227);
    _dereq_(228);
    _dereq_(229);
    _dereq_(232);
    _dereq_(234);
    _dereq_(237);
    _dereq_(239);
    _dereq_(240);
    _dereq_(241);
    _dereq_(141);
    _dereq_(143);
    _dereq_(142);
    _dereq_(145);
    _dereq_(144);
    _dereq_(129);
    _dereq_(127);
    _dereq_(134);
    _dereq_(131);
    _dereq_(137);
    _dereq_(139);
    _dereq_(126);
    _dereq_(133);
    _dereq_(123);
    _dereq_(138);
    _dereq_(121);
    _dereq_(136);
    _dereq_(135);
    _dereq_(128);
    _dereq_(132);
    _dereq_(120);
    _dereq_(122);
    _dereq_(125);
    _dereq_(124);
    _dereq_(140);
    _dereq_(130);
    _dereq_(213);
    _dereq_(219);
    _dereq_(214);
    _dereq_(215);
    _dereq_(216);
    _dereq_(217);
    _dereq_(218);
    _dereq_(198);
    _dereq_(149);
    _dereq_(220);
    _dereq_(255);
    _dereq_(256);
    _dereq_(244);
    _dereq_(245);
    _dereq_(250);
    _dereq_(253);
    _dereq_(254);
    _dereq_(248);
    _dereq_(251);
    _dereq_(249);
    _dereq_(252);
    _dereq_(246);
    _dereq_(247);
    _dereq_(199);
    _dereq_(200);
    _dereq_(201);
    _dereq_(202);
    _dereq_(203);
    _dereq_(206);
    _dereq_(204);
    _dereq_(205);
    _dereq_(207);
    _dereq_(208);
    _dereq_(209);
    _dereq_(210);
    _dereq_(212);
    _dereq_(211);
    _dereq_(257);
    _dereq_(283);
    _dereq_(286);
    _dereq_(285);
    _dereq_(287);
    _dereq_(288);
    _dereq_(284);
    _dereq_(289);
    _dereq_(290);
    _dereq_(268);
    _dereq_(271);
    _dereq_(267);
    _dereq_(265);
    _dereq_(266);
    _dereq_(269);
    _dereq_(270);
    _dereq_(260);
    _dereq_(282);
    _dereq_(291);
    _dereq_(259);
    _dereq_(261);
    _dereq_(263);
    _dereq_(262);
    _dereq_(264);
    _dereq_(273);
    _dereq_(274);
    _dereq_(276);
    _dereq_(275);
    _dereq_(278);
    _dereq_(277);
    _dereq_(279);
    _dereq_(280);
    _dereq_(281);
    _dereq_(258);
    _dereq_(272);
    _dereq_(294);
    _dereq_(293);
    _dereq_(292);
    module.exports = _dereq_(23);
  }, { "120": 120, "121": 121, "122": 122, "123": 123, "124": 124, "125": 125, "126": 126, "127": 127, "128": 128, "129": 129, "130": 130, "131": 131, "132": 132, "133": 133, "134": 134, "135": 135, "136": 136, "137": 137, "138": 138, "139": 139, "140": 140, "141": 141, "142": 142, "143": 143, "144": 144, "145": 145, "146": 146, "147": 147, "148": 148, "149": 149, "150": 150, "151": 151, "152": 152, "153": 153, "154": 154, "155": 155, "156": 156, "157": 157, "158": 158, "159": 159, "160": 160, "161": 161, "162": 162, "163": 163, "164": 164, "165": 165, "166": 166, "167": 167, "168": 168, "169": 169, "170": 170, "171": 171, "172": 172, "173": 173, "174": 174, "175": 175, "176": 176, "177": 177, "178": 178, "179": 179, "180": 180, "181": 181, "182": 182, "183": 183, "184": 184, "185": 185, "186": 186, "187": 187, "188": 188, "189": 189, "190": 190, "191": 191, "192": 192, "193": 193, "194": 194, "195": 195, "196": 196, "197": 197, "198": 198, "199": 199, "200": 200, "201": 201, "202": 202, "203": 203, "204": 204, "205": 205, "206": 206, "207": 207, "208": 208, "209": 209, "210": 210, "211": 211, "212": 212, "213": 213, "214": 214, "215": 215, "216": 216, "217": 217, "218": 218, "219": 219, "220": 220, "221": 221, "222": 222, "223": 223, "224": 224, "225": 225, "226": 226, "227": 227, "228": 228, "229": 229, "23": 23, "230": 230, "231": 231, "232": 232, "233": 233, "234": 234, "235": 235, "236": 236, "237": 237, "238": 238, "239": 239, "240": 240, "241": 241, "242": 242, "243": 243, "244": 244, "245": 245, "246": 246, "247": 247, "248": 248, "249": 249, "250": 250, "251": 251, "252": 252, "253": 253, "254": 254, "255": 255, "256": 256, "257": 257, "258": 258, "259": 259, "260": 260, "261": 261, "262": 262, "263": 263, "264": 264, "265": 265, "266": 266, "267": 267, "268": 268, "269": 269, "270": 270, "271": 271, "272": 272, "273": 273, "274": 274, "275": 275, "276": 276, "277": 277, "278": 278, "279": 279, "280": 280, "281": 281, "282": 282, "283": 283, "284": 284, "285": 285, "286": 286, "287": 287, "288": 288, "289": 289, "290": 290, "291": 291, "292": 292, "293": 293, "294": 294 }], 296: [function (_dereq_, module, exports) {
    (function (global) {
      /**
       * Copyright (c) 2014, Facebook, Inc.
       * All rights reserved.
       *
       * This source code is licensed under the BSD-style license found in the
       * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
       * additional grant of patent rights can be found in the PATENTS file in
       * the same directory.
       */

      !function (global) {
        "use strict";

        var hasOwn = Object.prototype.hasOwnProperty;
        var undefined; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
        var runtime = global.regeneratorRuntime;
        if (runtime) {
          if (inModule) {
            // If regeneratorRuntime is defined globally and we're in a module,
            // make the exports object identical to regeneratorRuntime.
            module.exports = runtime;
          }
          // Don't bother evaluating the rest of this file if the runtime was
          // already defined globally.
          return;
        }

        // Define the runtime globally (as expected by generated code) as either
        // module.exports (if we're in a module) or a new, empty object.
        runtime = global.regeneratorRuntime = inModule ? module.exports : {};

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        runtime.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        runtime.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        runtime.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = "GeneratorFunction";
            }
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `value instanceof AwaitArgument` to determine if the yielded value is
        // meant to be awaited. Some may consider the name of this method too
        // cutesy, but they are curmudgeons.
        runtime.awrap = function (arg) {
          return new AwaitArgument(arg);
        };

        function AwaitArgument(arg) {
          this.arg = arg;
        }

        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value instanceof AwaitArgument) {
                return Promise.resolve(value.arg).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return Promise.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration. If the Promise is rejected, however, the
                // result for this iteration will be rejected with the same
                // reason. Note that rejections of yielded Promises are not
                // thrown back into the generator function, as is the case
                // when an awaited Promise is rejected. This difference in
                // behavior between yield and await is important, because it
                // allows the consumer to decide what to do with the yielded
                // rejection (swallow it and continue, manually .throw it back
                // into the generator, abandon iteration, whatever). With
                // await, by contrast, there is no opportunity to examine the
                // rejection reason outside the generator function, so the
                // only option is to throw it from the await expression, and
                // let the generator function handle the exception.
                result.value = unwrapped;
                resolve(result);
              }, reject);
            }
          }

          if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
            invoke = process.domain.bind(invoke);
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise =
            // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        runtime.async = function (innerFn, outerFn, self, tryLocsList) {
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

          return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
                  // A return or throw (when the delegate iterator has no throw
                  // method) always terminates the yield* loop.
                  context.delegate = null;

                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  var returnMethod = delegate.iterator["return"];
                  if (returnMethod) {
                    var record = tryCatch(returnMethod, delegate.iterator, arg);
                    if (record.type === "throw") {
                      // If the return method threw an exception, let that
                      // exception prevail over the original return or throw.
                      method = "throw";
                      arg = record.arg;
                      continue;
                    }
                  }

                  if (method === "return") {
                    // Continue with the outer return, now that the delegate
                    // iterator has been terminated.
                    continue;
                  }
                }

                var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

                if (record.type === "throw") {
                  context.delegate = null;

                  // Like returning generator.throw(uncaught), but without the
                  // overhead of an extra function call.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }

                // Delegate generator ran and handled its own exceptions so
                // regardless of what the method was, we continue as if it is
                // "next" with an undefined arg.
                method = "next";
                arg = undefined;

                var info = record.arg;
                if (info.done) {
                  context[delegate.resultName] = info.value;
                  context.next = delegate.nextLoc;
                } else {
                  state = GenStateSuspendedYield;
                  return info;
                }

                context.delegate = null;
              }

              if (method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = arg;
              } else if (method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw arg;
                }

                if (context.dispatchException(arg)) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  method = "next";
                  arg = undefined;
                }
              } else if (method === "return") {
                context.abrupt("return", arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                var info = {
                  value: record.arg,
                  done: context.done
                };

                if (record.arg === ContinueSentinel) {
                  if (context.delegate && method === "next") {
                    // Deliberately forget the last sent value so that we don't
                    // accidentally pass it on to the delegate.
                    arg = undefined;
                  }
                } else {
                  return info;
                }
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(arg) call above.
                method = "throw";
                arg = record.arg;
              }
            }
          };
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp[toStringTagSymbol] = "Generator";

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        runtime.keys = function (object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;

                return next;
              };

              return next.next = next;
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        runtime.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop: function stop() {
            this.done = true;

            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },

          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.next = finallyEntry.finallyLoc;
            } else {
              this.complete(record);
            }

            return ContinueSentinel;
          },

          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = record.arg;
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
          },

          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
          },

          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            return ContinueSentinel;
          }
        };
      }(
      // Among the various tricks for obtaining a reference to the global
      // object, this seems to be the most reliable technique that does not
      // use indirect eval (which violates Content Security Policy).
      (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : this);
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, {}] }, {}, [1]);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":2}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
"use strict";

var _pathGenerator = require("./lib/path-generator");

var _map = require("./lib/map");

var _renderer = require("./lib/renderer");

var _renderer2 = _interopRequireDefault(_renderer);

var _path = require("./lib/path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

Vue.component('path-input', {
    template: "<div class=\"row\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\" xmlns:v-bind=\"http://www.w3.org/1999/xhtml\"><div class=\"col-lg-8\"><div id=\"g-maps\" class=\"g-maps\"></div></div><div class=\"col-lg-4\"><div class=\"row\"> <button v-on:click=\"clearPath\" class=\"btn btn-default\">Очистить маршрут</button></div><div class=\"row\"><ul><li v-for=\"(point, index) in currentPath.markers\" :key=\"point.coordsStr\"> <input type=\"text\" v-model=\"point.description\"><h5>{{point.label}} - {{point.coordsStr}}</h5> <button v-on:click=\"toTop(index)\" class=\"btn btn-default\">Вверх</button> <button v-on:click=\"toDown(index)\" class=\"btn btn-default\">Вниз</button> <button v-on:click=\"remove(index)\" class=\"btn btn-default\">Удалить</button></li></ul></div></div> <input type=\"hidden\" v-bind:name=\"fieldName\" v-bind:value=\"currentPath.serial\"></div>",
    mounted: function mounted() {
        this.init();

        if (this.fieldValue) {
            this.beginPath(this.fieldValue);
        } else {
            this.beginPath();
        }
    },
    props: ['fieldName', 'fieldValue'],
    data: function data() {
        return {
            pathGenerator: null,
            map: null,
            currentPath: new _path.Path([]),
            renderer: null,
            inEdit: true
        };
    },
    methods: {
        beginPath: function beginPath(data) {
            if (this.currentPath) {
                this.currentPath.clear();
            }

            this.pathGenerator.start(this.currentPath, data);
        },
        finishPath: function finishPath() {
            this.pathGenerator.finish();
        },
        toTop: function toTop(index) {
            this.currentPath.indexDispose(index, -1);
        },
        toDown: function toDown(index) {
            this.currentPath.indexDispose(index, 1);
        },
        remove: function remove(index) {
            this.currentPath.indexRemove(index);
        },
        clearPath: function clearPath() {
            this.currentPath.clear();
        },
        serialize: function serialize() {
            console.log(this.currentPath.serial);
        },
        init: function init() {
            this.map = new _map.GMap('g-maps');
            this.pathGenerator = new _pathGenerator.PathGenerator(this.map);
            this.renderer = new _renderer2.default(this.map);

            this.currentPath.addUpdateListener(function () {
                this.renderer.render(this.currentPath);
                this.$forceUpdate();
            }.bind(this));

            google.maps.event.addListener(this.map.map, 'click', function (event) {
                var markerCoords = event.latLng;

                this.pathGenerator.add(markerCoords);
            }.bind(this));
        }
    }
});

var initApp = function initApp() {
    var app = new Vue({
        el: '#app'
    });
};

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

},{"./lib/map":5,"./lib/path":7,"./lib/path-generator":6,"./lib/renderer":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joker on 15.12.16.
 */

var MapMarker = exports.MapMarker = function () {
    _createClass(MapMarker, [{
        key: 'description',
        get: function get() {
            return this._description;
        },
        set: function set(value) {
            this._description = value;
        }
    }, {
        key: 'label',
        get: function get() {
            return this._label;
        },
        set: function set(value) {
            this._label = value;

            if (this._marker) {
                this._marker.setLabel(value);
            }
        }
    }, {
        key: 'marker',
        get: function get() {
            return this._marker;
        }
    }, {
        key: 'template',
        get: function get() {
            return this._template;
        },
        set: function set(value) {
            this._template = value;
        }
    }, {
        key: 'serial',
        get: function get() {
            var seria = {
                description: this._description,
                position: this.marker.getPosition().toJSON()
            };

            return JSON.stringify(seria);
        }
    }]);

    function MapMarker(template) {
        _classCallCheck(this, MapMarker);

        this._description = '';
        this._marker = null;
        this._template = 'content.html';
        this._label = '';

        if (template) {
            this.template = template;
        }
    }

    _createClass(MapMarker, [{
        key: 'getPosition',
        value: function getPosition() {
            return this._marker.getPosition();
        }
    }, {
        key: 'addInfo',
        value: function addInfo() {
            var data = document.createElement('div');

            $(data).load('src/tpl/' + this.template);

            var infowindow = new google.maps.InfoWindow({
                content: data
            });

            this._marker.addListener('mouseover', function () {
                infowindow.open(map, this._marker);
            });

            this._marker.addListener('mouseout', function () {
                infowindow.close();
            });
        }
    }, {
        key: 'load',
        value: function load(map, coords, label) {
            var markerOptions = {
                position: coords,
                map: map,
                draggable: true
            };

            if (label) {
                label = label + '';

                markerOptions['label'] = label;
                this.label = label;
            }

            this._marker = new google.maps.Marker(markerOptions);
        }
    }, {
        key: 'coordsStr',
        get: function get() {
            var pos = this.getPosition();
            return pos.toString();
        }
    }]);

    return MapMarker;
}();

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joker on 15.12.16.
 */

var GMap = exports.GMap = function () {
    _createClass(GMap, [{
        key: "map",
        get: function get() {
            return this._map;
        },
        set: function set(value) {
            this._map = value;
        }

        /**
         * Ссылка на объект карт
         */

    }]);

    function GMap(elementId) {
        _classCallCheck(this, GMap);

        var element = document.getElementById(elementId);

        var pointCoords = { lat: 52.61667, lng: 39.6000 };

        this._map = new google.maps.Map(element, {
            center: pointCoords,
            zoom: 16
        });
    }

    return GMap;
}();

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PathGenerator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require("./path");

var _mapMarker = require("./map-marker");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joker on 15.12.16.
 */

var PathGenerator = exports.PathGenerator = function () {
    _createClass(PathGenerator, [{
        key: "counter",
        get: function get() {
            return this._counter;
        },
        set: function set(value) {
            this._counter = value;
        }
    }, {
        key: "map",
        get: function get() {
            return this._map;
        },
        set: function set(value) {
            this._map = value;
        }
    }]);

    function PathGenerator(map) {
        _classCallCheck(this, PathGenerator);

        this._path = [];
        this._counter = 1;

        if (map) {
            this.map = map;
        }
    }

    /**
     * Запуск генератора
     */


    _createClass(PathGenerator, [{
        key: "start",
        value: function start(path, data) {
            this._path = path;

            if (data) {
                this._path.clear();

                var coords = JSON.parse(data);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = coords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var coord = _step.value;

                        var pos = coord.position;
                        var latLng = new google.maps.LatLng(pos);
                        var description = coord.description;

                        this.add(latLng, description);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: "finish",
        value: function finish() {
            this._path = null;
        }
    }, {
        key: "add",
        value: function add(coords, description) {
            if (this._path) {
                var marker = new _mapMarker.MapMarker();

                marker.description = description || '';

                marker.load(this.map.map, coords, this._path.markers.length + 1);

                this._path.add(marker);
            }
        }
    }]);

    return PathGenerator;
}();

},{"./map-marker":4,"./path":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Path = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by joker on 15.12.16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Path = exports.Path = function () {
    _createClass(Path, [{
        key: 'indexDispose',


        /**
         * Смена позиции индекса
         * @param index Индекс
         * @param crem Смещение
         */
        value: function indexDispose(index, crem) {
            var s = index + crem;

            (0, _utils.assert)(index > -1 && index < this._markers.length);
            (0, _utils.assert)(s > -1 && s < this._markers.length);

            var elem = this._markers[s];

            this._markers[s] = this._markers[index];
            this._markers[index] = elem;

            this.callUpdateHandlers();
        }
    }, {
        key: 'indexRemove',
        value: function indexRemove(index) {
            (0, _utils.assert)(index > -1 && index < this._markers.length);

            var elem = this._markers[index];
            elem.marker.setMap(null);

            this._markers.splice(index, 1);

            this.callUpdateHandlers();
        }
    }, {
        key: 'addUpdateListener',
        value: function addUpdateListener(handler) {
            this._updateListeners.push(handler);
        }
    }, {
        key: 'clear',
        value: function clear() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var mark = _step.value;

                    mark.marker.setMap(null);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.markers = [];

            this.callUpdateHandlers();
        }
    }, {
        key: 'callUpdateHandlers',
        value: function callUpdateHandlers() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this._updateListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var handler = _step2.value;

                    handler();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'add',
        value: function add(marker) {
            this.markers.push(marker);
            marker.marker.addListener('dragend', function () {
                this.callUpdateHandlers();
            }.bind(this));

            if (this.markers.length > 1) {
                this.callUpdateHandlers();
            }
        }
    }, {
        key: 'refreshLabels',
        value: function refreshLabels() {
            var index = 1;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.markers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var mark = _step3.value;

                    mark.label = index + '';
                    index += 1;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'markers',
        get: function get() {
            return this._markers;
        },
        set: function set(value) {
            this._markers = value;
        }
    }, {
        key: 'serial',


        /**
         * Получение сериализованного массива
         */
        get: function get() {
            var serias = this._markers.map(function (mark) {
                return mark.serial;
            }).join(',');

            var res = '[' + serias + ']';

            return res;
        }
    }, {
        key: 'coordsArray',
        get: function get() {
            var result = this.markers.map(function (coord) {
                return coord.getPosition();
            });

            return result;
        }
    }, {
        key: 'coordsStr',
        get: function get() {
            var res = '';

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this._markers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var mark = _step4.value;

                    res += mark.coordsStr;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return res;
        }
    }]);

    function Path(markers) {
        _classCallCheck(this, Path);

        this._markers = [];
        this._updateListeners = [];

        this.markers = markers;

        this.addUpdateListener(function () {
            this.refreshLabels();
        }.bind(this));
    }

    return Path;
}();

},{"./utils":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joker on 15.12.16.
 */

var Renderer = function () {
    _createClass(Renderer, [{
        key: "map",
        get: function get() {
            return this._map;
        },
        set: function set(value) {
            this._map = value;
        }
    }]);

    function Renderer(map) {
        _classCallCheck(this, Renderer);

        this._map = null;

        this._directionsService = new google.maps.DirectionsService();
        this._directionsDisplay = new google.maps.DirectionsRenderer();

        this.map = map;
    }

    _createClass(Renderer, [{
        key: "waypoints",
        value: function waypoints(coords) {
            var result = [];

            for (var i = 1; i < coords.length - 1; ++i) {
                result.push({
                    location: coords[i],
                    stopover: false
                });
            }

            return result;
        }
    }, {
        key: "render",
        value: function render(path) {
            var coords = path.coordsArray;

            if (coords.length < 2) {
                this._directionsDisplay.setMap(null);
                return;
            }

            this._directionsDisplay.setMap(this.map.map);

            var waypoints = this.waypoints(coords);

            var request = {
                origin: coords[0],
                waypoints: waypoints,
                destination: coords[coords.length - 1],
                travelMode: google.maps.TravelMode.DRIVING
            };

            this._directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    this._directionsDisplay.setDirections(response);
                }
            }.bind(this));
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assert = assert;
/**
 * Created by joker on 15.12.16.
 */

function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}

},{}]},{},[3,1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcG9seWZpbGwvZGlzdC9wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsQ0FBQyxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxXQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBRyxDQUFDLEVBQUUsQ0FBRixDQUFKLEVBQVM7QUFBQyxVQUFHLENBQUMsRUFBRSxDQUFGLENBQUosRUFBUztBQUFDLFlBQUksSUFBRSxPQUFPLE9BQVAsSUFBZ0IsVUFBaEIsSUFBNEIsT0FBbEMsQ0FBMEMsSUFBRyxDQUFDLENBQUQsSUFBSSxDQUFQLEVBQVMsT0FBTyxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBUCxDQUFlLElBQUcsQ0FBSCxFQUFLLE9BQU8sRUFBRSxDQUFGLEVBQUksQ0FBQyxDQUFMLENBQVAsQ0FBZSxJQUFJLElBQUUsSUFBSSxLQUFKLENBQVUseUJBQXVCLENBQXZCLEdBQXlCLEdBQW5DLENBQU4sQ0FBOEMsTUFBTSxFQUFFLElBQUYsR0FBTyxrQkFBUCxFQUEwQixDQUFoQztBQUFrQyxXQUFJLElBQUUsRUFBRSxDQUFGLElBQUssRUFBQyxTQUFRLEVBQVQsRUFBWCxDQUF3QixFQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsSUFBUixDQUFhLEVBQUUsT0FBZixFQUF1QixVQUFT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LFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNB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LFVBQVosQ0FBdUI7QUFKekIsYUFBZDs7QUFPQSxpQkFBSyxrQkFBTCxDQUF3QixLQUF4QixDQUE4QixPQUE5QixFQUF1QyxVQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkI7QUFDOUQsb0JBQUksVUFBVSxPQUFPLElBQVAsQ0FBWSxnQkFBWixDQUE2QixFQUEzQyxFQUErQztBQUMzQyx5QkFBSyxrQkFBTCxDQUF3QixhQUF4QixDQUFzQyxRQUF0QztBQUNIO0FBQ0osYUFKc0MsQ0FJckMsSUFKcUMsQ0FJaEMsSUFKZ0MsQ0FBdkM7QUFLSDs7Ozs7O2tCQXhEZ0IsUTs7Ozs7Ozs7UUNBTCxNLEdBQUEsTTtBQUpoQjs7OztBQUlPLFNBQVMsTUFBVCxDQUFnQixTQUFoQixFQUEyQixPQUEzQixFQUFvQztBQUN2QyxRQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNaLGNBQU0sV0FBVyxrQkFBakI7QUFDSDtBQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcblwidXNlIHN0cmljdFwiO1xuXG5fZGVyZXFfKDI5NSk7XG5cbl9kZXJlcV8oMjk2KTtcblxuX2RlcmVxXygyKTtcblxuaWYgKGdsb2JhbC5fYmFiZWxQb2x5ZmlsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC1wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpO1xufVxuZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTtcblxudmFyIERFRklORV9QUk9QRVJUWSA9IFwiZGVmaW5lUHJvcGVydHlcIjtcbmZ1bmN0aW9uIGRlZmluZShPLCBrZXksIHZhbHVlKSB7XG4gIE9ba2V5XSB8fCBPYmplY3RbREVGSU5FX1BST1BFUlRZXShPLCBrZXksIHtcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuXG5kZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRMZWZ0XCIsIFwiXCIucGFkU3RhcnQpO1xuZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIFwicGFkUmlnaHRcIiwgXCJcIi5wYWRFbmQpO1xuXG5cInBvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXMsaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlcyxqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YscmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgW11ba2V5XSAmJiBkZWZpbmUoQXJyYXksIGtleSwgRnVuY3Rpb24uY2FsbC5iaW5kKFtdW2tleV0pKTtcbn0pO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHtcIjJcIjoyLFwiMjk1XCI6Mjk1LFwiMjk2XCI6Mjk2fV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExOSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjMpLlJlZ0V4cC5lc2NhcGU7XG59LHtcIjExOVwiOjExOSxcIjIzXCI6MjN9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xufSx7fV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY29mID0gX2RlcmVxXygxOCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBtc2cpe1xuICBpZih0eXBlb2YgaXQgIT0gJ251bWJlcicgJiYgY29mKGl0KSAhPSAnTnVtYmVyJyl0aHJvdyBUeXBlRXJyb3IobXNnKTtcbiAgcmV0dXJuICtpdDtcbn07XG59LHtcIjE4XCI6MTh9XSw1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IF9kZXJlcV8oMTE3KSgndW5zY29wYWJsZXMnKVxuICAsIEFycmF5UHJvdG8gID0gQXJyYXkucHJvdG90eXBlO1xuaWYoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKV9kZXJlcV8oNDApKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiNDBcIjo0MH1dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbn0se31dLDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHtcIjQ5XCI6NDl9XSw4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gX2RlcmVxXygxMDkpXG4gICwgdG9JbmRleCAgPSBfZGVyZXFfKDEwNSlcbiAgLCB0b0xlbmd0aCA9IF9kZXJlcV8oMTA4KTtcblxubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0Lyo9IDAqLywgc3RhcnQvKj0gMCwgZW5kID0gQGxlbmd0aCovKXtcbiAgdmFyIE8gICAgID0gdG9PYmplY3QodGhpcylcbiAgICAsIGxlbiAgID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCB0byAgICA9IHRvSW5kZXgodGFyZ2V0LCBsZW4pXG4gICAgLCBmcm9tICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcbiAgICAsIGVuZCAgID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcbiAgICAsIGNvdW50ID0gTWF0aC5taW4oKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pXG4gICAgLCBpbmMgICA9IDE7XG4gIGlmKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCl7XG4gICAgaW5jICA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICAgKz0gY291bnQgLSAxO1xuICB9XG4gIHdoaWxlKGNvdW50LS0gPiAwKXtcbiAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xuICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgIHRvICAgKz0gaW5jO1xuICAgIGZyb20gKz0gaW5jO1xuICB9IHJldHVybiBPO1xufTtcbn0se1wiMTA1XCI6MTA1LFwiMTA4XCI6MTA4LFwiMTA5XCI6MTA5fV0sOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IF9kZXJlcV8oMTA5KVxuICAsIHRvSW5kZXggID0gX2RlcmVxXygxMDUpXG4gICwgdG9MZW5ndGggPSBfZGVyZXFfKDEwOCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCBhTGVuICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSB0b0luZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpXG4gICAgLCBlbmQgICAgPSBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG59LHtcIjEwNVwiOjEwNSxcIjEwOFwiOjEwOCxcIjEwOVwiOjEwOX1dLDEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBmb3JPZiA9IF9kZXJlcV8oMzcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxufSx7XCIzN1wiOjM3fV0sMTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSBfZGVyZXFfKDEwNylcbiAgLCB0b0xlbmd0aCAgPSBfZGVyZXFfKDEwOClcbiAgLCB0b0luZGV4ICAgPSBfZGVyZXFfKDEwNSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xufSx7XCIxMDVcIjoxMDUsXCIxMDdcIjoxMDcsXCIxMDhcIjoxMDh9XSwxMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSBfZGVyZXFfKDI1KVxuICAsIElPYmplY3QgID0gX2RlcmVxXyg0NSlcbiAgLCB0b09iamVjdCA9IF9kZXJlcV8oMTA5KVxuICAsIHRvTGVuZ3RoID0gX2RlcmVxXygxMDgpXG4gICwgYXNjICAgICAgPSBfZGVyZXFfKDE1KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbn0se1wiMTA4XCI6MTA4LFwiMTA5XCI6MTA5LFwiMTVcIjoxNSxcIjI1XCI6MjUsXCI0NVwiOjQ1fV0sMTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMylcbiAgLCB0b09iamVjdCAgPSBfZGVyZXFfKDEwOSlcbiAgLCBJT2JqZWN0ICAgPSBfZGVyZXFfKDQ1KVxuICAsIHRvTGVuZ3RoICA9IF9kZXJlcV8oMTA4KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBjYWxsYmFja2ZuLCBhTGVuLCBtZW1vLCBpc1JpZ2h0KXtcbiAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhhdClcbiAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgaW5kZXggID0gaXNSaWdodCA/IGxlbmd0aCAtIDEgOiAwXG4gICAgLCBpICAgICAgPSBpc1JpZ2h0ID8gLTEgOiAxO1xuICBpZihhTGVuIDwgMilmb3IoOzspe1xuICAgIGlmKGluZGV4IGluIHNlbGYpe1xuICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpbmRleCArPSBpO1xuICAgIGlmKGlzUmlnaHQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpe1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgfVxuICB9XG4gIGZvcig7aXNSaWdodCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSlpZihpbmRleCBpbiBzZWxmKXtcbiAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuICB9XG4gIHJldHVybiBtZW1vO1xufTtcbn0se1wiMTA4XCI6MTA4LFwiMTA5XCI6MTA5LFwiM1wiOjMsXCI0NVwiOjQ1fV0sMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBpc0FycmF5ICA9IF9kZXJlcV8oNDcpXG4gICwgU1BFQ0lFUyAgPSBfZGVyZXFfKDExNykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xufSx7XCIxMTdcIjoxMTcsXCI0N1wiOjQ3LFwiNDlcIjo0OX1dLDE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBfZGVyZXFfKDE0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG59LHtcIjE0XCI6MTR9XSwxNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uICA9IF9kZXJlcV8oMylcbiAgLCBpc09iamVjdCAgID0gX2RlcmVxXyg0OSlcbiAgLCBpbnZva2UgICAgID0gX2RlcmVxXyg0NClcbiAgLCBhcnJheVNsaWNlID0gW10uc2xpY2VcbiAgLCBmYWN0b3JpZXMgID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbihGLCBsZW4sIGFyZ3Mpe1xuICBpZighKGxlbiBpbiBmYWN0b3JpZXMpKXtcbiAgICBmb3IodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKyluW2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgZmFjdG9yaWVzW2xlbl0gPSBGdW5jdGlvbignRixhJywgJ3JldHVybiBuZXcgRignICsgbi5qb2luKCcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbbGVuXShGLCBhcmdzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyosIGFyZ3MuLi4gKi8pe1xuICB2YXIgZm4gICAgICAgPSBhRnVuY3Rpb24odGhpcylcbiAgICAsIHBhcnRBcmdzID0gYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZCA9IGZ1bmN0aW9uKC8qIGFyZ3MuLi4gKi8pe1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xuICBpZihpc09iamVjdChmbi5wcm90b3R5cGUpKWJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kO1xufTtcbn0se1wiM1wiOjMsXCI0NFwiOjQ0LFwiNDlcIjo0OX1dLDE3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gX2RlcmVxXygxOClcbiAgLCBUQUcgPSBfZGVyZXFfKDExNykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xufSx7XCIxMTdcIjoxMTcsXCIxOFwiOjE4fV0sMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbn0se31dLDE5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IF9kZXJlcV8oNjcpLmZcbiAgLCBjcmVhdGUgICAgICA9IF9kZXJlcV8oNjYpXG4gICwgcmVkZWZpbmVBbGwgPSBfZGVyZXFfKDg2KVxuICAsIGN0eCAgICAgICAgID0gX2RlcmVxXygyNSlcbiAgLCBhbkluc3RhbmNlICA9IF9kZXJlcV8oNilcbiAgLCBkZWZpbmVkICAgICA9IF9kZXJlcV8oMjcpXG4gICwgZm9yT2YgICAgICAgPSBfZGVyZXFfKDM3KVxuICAsICRpdGVyRGVmaW5lID0gX2RlcmVxXyg1MylcbiAgLCBzdGVwICAgICAgICA9IF9kZXJlcV8oNTUpXG4gICwgc2V0U3BlY2llcyAgPSBfZGVyZXFfKDkxKVxuICAsIERFU0NSSVBUT1JTID0gX2RlcmVxXygyOClcbiAgLCBmYXN0S2V5ICAgICA9IF9kZXJlcV8oNjIpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbn0se1wiMjVcIjoyNSxcIjI3XCI6MjcsXCIyOFwiOjI4LFwiMzdcIjozNyxcIjUzXCI6NTMsXCI1NVwiOjU1LFwiNlwiOjYsXCI2MlwiOjYyLFwiNjZcIjo2NixcIjY3XCI6NjcsXCI4NlwiOjg2LFwiOTFcIjo5MX1dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gX2RlcmVxXygxNylcbiAgLCBmcm9tICAgID0gX2RlcmVxXygxMCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xufSx7XCIxMFwiOjEwLFwiMTdcIjoxN31dLDIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZUFsbCAgICAgICA9IF9kZXJlcV8oODYpXG4gICwgZ2V0V2VhayAgICAgICAgICAgPSBfZGVyZXFfKDYyKS5nZXRXZWFrXG4gICwgYW5PYmplY3QgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gX2RlcmVxXyg2KVxuICAsIGZvck9mICAgICAgICAgICAgID0gX2RlcmVxXygzNylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IF9kZXJlcV8oMTIpXG4gICwgJGhhcyAgICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIGFycmF5RmluZCAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgLCBhcnJheUZpbmRJbmRleCAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG4gICwgaWQgICAgICAgICAgICAgICAgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24odGhhdCl7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUpO1xufTtcbnZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uKHN0b3JlLCBrZXkpe1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuVW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSllbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZih+aW5kZXgpdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG4gICAgaWYoZGF0YSA9PT0gdHJ1ZSl1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICBlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhhdDtcbiAgfSxcbiAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxufTtcbn0se1wiMTJcIjoxMixcIjM3XCI6MzcsXCIzOVwiOjM5LFwiNDlcIjo0OSxcIjZcIjo2LFwiNjJcIjo2MixcIjdcIjo3LFwiODZcIjo4Nn1dLDIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgJGV4cG9ydCAgICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHJlZGVmaW5lICAgICAgICAgID0gX2RlcmVxXyg4NylcbiAgLCByZWRlZmluZUFsbCAgICAgICA9IF9kZXJlcV8oODYpXG4gICwgbWV0YSAgICAgICAgICAgICAgPSBfZGVyZXFfKDYyKVxuICAsIGZvck9mICAgICAgICAgICAgID0gX2RlcmVxXygzNylcbiAgLCBhbkluc3RhbmNlICAgICAgICA9IF9kZXJlcV8oNilcbiAgLCBpc09iamVjdCAgICAgICAgICA9IF9kZXJlcV8oNDkpXG4gICwgZmFpbHMgICAgICAgICAgICAgPSBfZGVyZXFfKDM0KVxuICAsICRpdGVyRGV0ZWN0ICAgICAgID0gX2RlcmVxXyg1NClcbiAgLCBzZXRUb1N0cmluZ1RhZyAgICA9IF9kZXJlcV8oOTIpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSBfZGVyZXFfKDQzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uKEtFWSl7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24oYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSAgICAgICAgICAgICA9IG5ldyBDXG4gICAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgICAsIEhBU05UX0NIQUlOSU5HICAgICAgID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZVxuICAgICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgICAsIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24oKXsgaW5zdGFuY2UuaGFzKDEpOyB9KVxuICAgICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgICAgLCBBQ0NFUFRfSVRFUkFCTEVTICAgICA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpeyBuZXcgQyhpdGVyKTsgfSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgICAgLCBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpXG4gICAgICAgICAgLCBpbmRleCAgICAgPSA1O1xuICAgICAgICB3aGlsZShpbmRleC0tKSRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICAgIH0pO1xuICAgIGlmKCFBQ0NFUFRfSVRFUkFCTEVTKXsgXG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTyl7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZihCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKWZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZihJU19XRUFLICYmIHByb3RvLmNsZWFyKWRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xufSx7XCIzMlwiOjMyLFwiMzRcIjozNCxcIjM3XCI6MzcsXCIzOFwiOjM4LFwiNDNcIjo0MyxcIjQ5XCI6NDksXCI1NFwiOjU0LFwiNlwiOjYsXCI2MlwiOjYyLFwiODZcIjo4NixcIjg3XCI6ODcsXCI5MlwiOjkyfV0sMjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxufSx7fV0sMjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oNjcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gX2RlcmVxXyg4NSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBpbmRleCwgdmFsdWUpe1xuICBpZihpbmRleCBpbiBvYmplY3QpJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG59LHtcIjY3XCI6NjcsXCI4NVwiOjg1fV0sMjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG59LHtcIjNcIjozfV0sMjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ICAgID0gX2RlcmVxXyg3KVxuICAsIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMTApXG4gICwgTlVNQkVSICAgICAgPSAnbnVtYmVyJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihoaW50KXtcbiAgaWYoaGludCAhPT0gJ3N0cmluZycgJiYgaGludCAhPT0gTlVNQkVSICYmIGhpbnQgIT09ICdkZWZhdWx0Jyl0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBoaW50Jyk7XG4gIHJldHVybiB0b1ByaW1pdGl2ZShhbk9iamVjdCh0aGlzKSwgaGludCAhPSBOVU1CRVIpO1xufTtcbn0se1wiMTEwXCI6MTEwLFwiN1wiOjd9XSwyNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSwyODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG59LHtcIjM0XCI6MzR9XSwyOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIGRvY3VtZW50ID0gX2RlcmVxXygzOCkuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG59LHtcIjM4XCI6MzgsXCI0OVwiOjQ5fV0sMzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG59LHt9XSwzMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSBfZGVyZXFfKDc2KVxuICAsIGdPUFMgICAgPSBfZGVyZXFfKDczKVxuICAsIHBJRSAgICAgPSBfZGVyZXFfKDc3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIjczXCI6NzMsXCI3NlwiOjc2LFwiNzdcIjo3N31dLDMyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgPSBfZGVyZXFfKDM4KVxuICAsIGNvcmUgICAgICA9IF9kZXJlcV8oMjMpXG4gICwgaGlkZSAgICAgID0gX2RlcmVxXyg0MClcbiAgLCByZWRlZmluZSAgPSBfZGVyZXFfKDg3KVxuICAsIGN0eCAgICAgICA9IF9kZXJlcV8oMjUpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG59LHtcIjIzXCI6MjMsXCIyNVwiOjI1LFwiMzhcIjozOCxcIjQwXCI6NDAsXCI4N1wiOjg3fV0sMzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIE1BVENIID0gX2RlcmVxXygxMTcpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2goZSl7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoKGYpeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIHRydWU7XG59O1xufSx7XCIxMTdcIjoxMTd9XSwzNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbn0se31dLDM1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBoaWRlICAgICA9IF9kZXJlcV8oNDApXG4gICwgcmVkZWZpbmUgPSBfZGVyZXFfKDg3KVxuICAsIGZhaWxzICAgID0gX2RlcmVxXygzNClcbiAgLCBkZWZpbmVkICA9IF9kZXJlcV8oMjcpXG4gICwgd2tzICAgICAgPSBfZGVyZXFfKDExNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBsZW5ndGgsIGV4ZWMpe1xuICB2YXIgU1lNQk9MICAgPSB3a3MoS0VZKVxuICAgICwgZm5zICAgICAgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSlcbiAgICAsIHN0cmZuICAgID0gZm5zWzBdXG4gICAgLCByeGZuICAgICA9IGZuc1sxXTtcbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKXtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbihzdHJpbmcpeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xufSx7XCIxMTdcIjoxMTcsXCIyN1wiOjI3LFwiMzRcIjozNCxcIjQwXCI6NDAsXCI4N1wiOjg3fV0sMzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aGF0ICAgPSBhbk9iamVjdCh0aGlzKVxuICAgICwgcmVzdWx0ID0gJyc7XG4gIGlmKHRoYXQuZ2xvYmFsKSAgICAgcmVzdWx0ICs9ICdnJztcbiAgaWYodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZih0aGF0Lm11bHRpbGluZSkgIHJlc3VsdCArPSAnbSc7XG4gIGlmKHRoYXQudW5pY29kZSkgICAgcmVzdWx0ICs9ICd1JztcbiAgaWYodGhhdC5zdGlja3kpICAgICByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbn0se1wiN1wiOjd9XSwzNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY3R4ICAgICAgICAgPSBfZGVyZXFfKDI1KVxuICAsIGNhbGwgICAgICAgID0gX2RlcmVxXyg1MSlcbiAgLCBpc0FycmF5SXRlciA9IF9kZXJlcV8oNDYpXG4gICwgYW5PYmplY3QgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9MZW5ndGggICAgPSBfZGVyZXFfKDEwOClcbiAgLCBnZXRJdGVyRm4gICA9IF9kZXJlcV8oMTE4KVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG59LHtcIjEwOFwiOjEwOCxcIjExOFwiOjExOCxcIjI1XCI6MjUsXCI0NlwiOjQ2LFwiNTFcIjo1MSxcIjdcIjo3fV0sMzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxufSx7fV0sMzk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG59LHt9XSw0MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgICA9IF9kZXJlcV8oNjcpXG4gICwgY3JlYXRlRGVzYyA9IF9kZXJlcV8oODUpO1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDI4KSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG59LHtcIjI4XCI6MjgsXCI2N1wiOjY3LFwiODVcIjo4NX1dLDQxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygzOCkuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufSx7XCIzOFwiOjM4fV0sNDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSAhX2RlcmVxXygyOCkgJiYgIV9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2RlcmVxXygyOSkoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG59LHtcIjI4XCI6MjgsXCIyOVwiOjI5LFwiMzRcIjozNH1dLDQzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCAgICAgICA9IF9kZXJlcV8oNDkpXG4gICwgc2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDkwKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHRhcmdldCwgQyl7XG4gIHZhciBQLCBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICBpZihTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKXtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG59LHtcIjQ5XCI6NDksXCI5MFwiOjkwfV0sNDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xufSx7fV0sNDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSBfZGVyZXFfKDE4KTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG59LHtcIjE4XCI6MTh9XSw0NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IF9kZXJlcV8oNTYpXG4gICwgSVRFUkFUT1IgICA9IF9kZXJlcV8oMTE3KSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiNTZcIjo1Nn1dLDQ3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gX2RlcmVxXygxOCk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG59LHtcIjE4XCI6MTh9XSw0ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgZmxvb3IgICAgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpe1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG59LHtcIjQ5XCI6NDl9XSw0OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG59LHt9XSw1MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgY29mICAgICAgPSBfZGVyZXFfKDE4KVxuICAsIE1BVENIICAgID0gX2RlcmVxXygxMTcpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiMThcIjoxOCxcIjQ5XCI6NDl9XSw1MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xufSx7XCI3XCI6N31dLDUyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IF9kZXJlcV8oNjYpXG4gICwgZGVzY3JpcHRvciAgICAgPSBfZGVyZXFfKDg1KVxuICAsIHNldFRvU3RyaW5nVGFnID0gX2RlcmVxXyg5MilcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuX2RlcmVxXyg0MCkoSXRlcmF0b3JQcm90b3R5cGUsIF9kZXJlcV8oMTE3KSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG59LHtcIjExN1wiOjExNyxcIjQwXCI6NDAsXCI2NlwiOjY2LFwiODVcIjo4NSxcIjkyXCI6OTJ9XSw1MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSBfZGVyZXFfKDU4KVxuICAsICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCByZWRlZmluZSAgICAgICA9IF9kZXJlcV8oODcpXG4gICwgaGlkZSAgICAgICAgICAgPSBfZGVyZXFfKDQwKVxuICAsIGhhcyAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBJdGVyYXRvcnMgICAgICA9IF9kZXJlcV8oNTYpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSBfZGVyZXFfKDUyKVxuICAsIHNldFRvU3RyaW5nVGFnID0gX2RlcmVxXyg5MilcbiAgLCBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzQpXG4gICwgSVRFUkFUT1IgICAgICAgPSBfZGVyZXFfKDExNykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xufSx7XCIxMTdcIjoxMTcsXCIzMlwiOjMyLFwiMzlcIjozOSxcIjQwXCI6NDAsXCI1MlwiOjUyLFwiNTZcIjo1NixcIjU4XCI6NTgsXCI3NFwiOjc0LFwiODdcIjo4NyxcIjkyXCI6OTJ9XSw1NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgSVRFUkFUT1IgICAgID0gX2RlcmVxXygxMTcpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbn0se1wiMTE3XCI6MTE3fV0sNTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcbn0se31dLDU2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge307XG59LHt9XSw1NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2V0S2V5cyAgID0gX2RlcmVxXyg3NilcbiAgLCB0b0lPYmplY3QgPSBfZGVyZXFfKDEwNyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xufSx7XCIxMDdcIjoxMDcsXCI3NlwiOjc2fV0sNTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbn0se31dLDU5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG0xID0gTWF0aC5leHBtMTtcbm1vZHVsZS5leHBvcnRzID0gKCEkZXhwbTFcbiAgLy8gT2xkIEZGIGJ1Z1xuICB8fCAkZXhwbTEoMTApID4gMjIwMjUuNDY1Nzk0ODA2NzE5IHx8ICRleHBtMSgxMCkgPCAyMjAyNS40NjU3OTQ4MDY3MTY1MTY4XG4gIC8vIFRvciBCcm93c2VyIGJ1Z1xuICB8fCAkZXhwbTEoLTJlLTE3KSAhPSAtMmUtMTdcbikgPyBmdW5jdGlvbiBleHBtMSh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcbn0gOiAkZXhwbTE7XG59LHt9XSw2MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmxvZzFwIHx8IGZ1bmN0aW9uIGxvZzFwKHgpe1xuICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBNYXRoLmxvZygxICsgeCk7XG59O1xufSx7fV0sNjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcbn0se31dLDYyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBNRVRBICAgICA9IF9kZXJlcV8oMTE0KSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIGhhcyAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBzZXREZXNjICA9IF9kZXJlcV8oNjcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIV9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG59LHtcIjExNFwiOjExNCxcIjM0XCI6MzQsXCIzOVwiOjM5LFwiNDlcIjo0OSxcIjY3XCI6Njd9XSw2MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgTWFwICAgICA9IF9kZXJlcV8oMTQ5KVxuICAsICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIHNoYXJlZCAgPSBfZGVyZXFfKDk0KSgnbWV0YWRhdGEnKVxuICAsIHN0b3JlICAgPSBzaGFyZWQuc3RvcmUgfHwgKHNoYXJlZC5zdG9yZSA9IG5ldyAoX2RlcmVxXygyNTUpKSk7XG5cbnZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSl7XG4gIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuICBpZighdGFyZ2V0TWV0YWRhdGEpe1xuICAgIGlmKCFjcmVhdGUpcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBzdG9yZS5zZXQodGFyZ2V0LCB0YXJnZXRNZXRhZGF0YSA9IG5ldyBNYXApO1xuICB9XG4gIHZhciBrZXlNZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhLmdldCh0YXJnZXRLZXkpO1xuICBpZigha2V5TWV0YWRhdGEpe1xuICAgIGlmKCFjcmVhdGUpcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB0YXJnZXRNZXRhZGF0YS5zZXQodGFyZ2V0S2V5LCBrZXlNZXRhZGF0YSA9IG5ldyBNYXApO1xuICB9IHJldHVybiBrZXlNZXRhZGF0YTtcbn07XG52YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpO1xufTtcbnZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcbiAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xufTtcbnZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApe1xuICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIHRydWUpLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG59O1xudmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRLZXkpe1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSlcbiAgICAsIGtleXMgICAgICAgID0gW107XG4gIGlmKG1ldGFkYXRhTWFwKW1ldGFkYXRhTWFwLmZvckVhY2goZnVuY3Rpb24oXywga2V5KXsga2V5cy5wdXNoKGtleSk7IH0pO1xuICByZXR1cm4ga2V5cztcbn07XG52YXIgdG9NZXRhS2V5ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xudmFyIGV4cCA9IGZ1bmN0aW9uKE8pe1xuICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCBPKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdG9yZTogc3RvcmUsXG4gIG1hcDogZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCxcbiAgaGFzOiBvcmRpbmFyeUhhc093bk1ldGFkYXRhLFxuICBnZXQ6IG9yZGluYXJ5R2V0T3duTWV0YWRhdGEsXG4gIHNldDogb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSxcbiAga2V5czogb3JkaW5hcnlPd25NZXRhZGF0YUtleXMsXG4gIGtleTogdG9NZXRhS2V5LFxuICBleHA6IGV4cFxufTtcbn0se1wiMTQ5XCI6MTQ5LFwiMjU1XCI6MjU1LFwiMzJcIjozMixcIjk0XCI6OTR9XSw2NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgID0gX2RlcmVxXygzOClcbiAgLCBtYWNyb3Rhc2sgPSBfZGVyZXFfKDEwNCkuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gX2RlcmVxXygxOCkocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbn0se1wiMTA0XCI6MTA0LFwiMThcIjoxOCxcIjM4XCI6Mzh9XSw2NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSBfZGVyZXFfKDc2KVxuICAsIGdPUFMgICAgID0gX2RlcmVxXyg3MylcbiAgLCBwSUUgICAgICA9IF9kZXJlcV8oNzcpXG4gICwgdG9PYmplY3QgPSBfZGVyZXFfKDEwOSlcbiAgLCBJT2JqZWN0ICA9IF9kZXJlcV8oNDUpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG59LHtcIjEwOVwiOjEwOSxcIjM0XCI6MzQsXCI0NVwiOjQ1LFwiNzNcIjo3MyxcIjc2XCI6NzYsXCI3N1wiOjc3fV0sNjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSBfZGVyZXFfKDcpXG4gICwgZFBzICAgICAgICAgPSBfZGVyZXFfKDY4KVxuICAsIGVudW1CdWdLZXlzID0gX2RlcmVxXygzMClcbiAgLCBJRV9QUk9UTyAgICA9IF9kZXJlcV8oOTMpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gX2RlcmVxXygyOSkoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIF9kZXJlcV8oNDEpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG59LHtcIjI5XCI6MjksXCIzMFwiOjMwLFwiNDFcIjo0MSxcIjY4XCI6NjgsXCI3XCI6NyxcIjkzXCI6OTN9XSw2NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYW5PYmplY3QgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSBfZGVyZXFfKDQyKVxuICAsIHRvUHJpbWl0aXZlICAgID0gX2RlcmVxXygxMTApXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IF9kZXJlcV8oMjgpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG59LHtcIjExMFwiOjExMCxcIjI4XCI6MjgsXCI0MlwiOjQyLFwiN1wiOjd9XSw2ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KVxuICAsIGdldEtleXMgID0gX2RlcmVxXyg3Nik7XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyOCkgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbn0se1wiMjhcIjoyOCxcIjY3XCI6NjcsXCI3XCI6NyxcIjc2XCI6NzZ9XSw2OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBGb3JjZWQgcmVwbGFjZW1lbnQgcHJvdG90eXBlIGFjY2Vzc29ycyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oNTgpfHwgIV9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHZhciBLID0gTWF0aC5yYW5kb20oKTtcbiAgLy8gSW4gRkYgdGhyb3dzIG9ubHkgZGVmaW5lIG1ldGhvZHNcbiAgX19kZWZpbmVTZXR0ZXJfXy5jYWxsKG51bGwsIEssIGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovfSk7XG4gIGRlbGV0ZSBfZGVyZXFfKDM4KVtLXTtcbn0pO1xufSx7XCIzNFwiOjM0LFwiMzhcIjozOCxcIjU4XCI6NTh9XSw3MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgcElFICAgICAgICAgICAgPSBfZGVyZXFfKDc3KVxuICAsIGNyZWF0ZURlc2MgICAgID0gX2RlcmVxXyg4NSlcbiAgLCB0b0lPYmplY3QgICAgICA9IF9kZXJlcV8oMTA3KVxuICAsIHRvUHJpbWl0aXZlICAgID0gX2RlcmVxXygxMTApXG4gICwgaGFzICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIElFOF9ET01fREVGSU5FID0gX2RlcmVxXyg0MilcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IF9kZXJlcV8oMjgpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xufSx7XCIxMDdcIjoxMDcsXCIxMTBcIjoxMTAsXCIyOFwiOjI4LFwiMzlcIjozOSxcIjQyXCI6NDIsXCI3N1wiOjc3LFwiODVcIjo4NX1dLDcxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSBfZGVyZXFfKDEwNylcbiAgLCBnT1BOICAgICAgPSBfZGVyZXFfKDcyKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG59LHtcIjEwN1wiOjEwNyxcIjcyXCI6NzJ9XSw3MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IF9kZXJlcV8oNzUpXG4gICwgaGlkZGVuS2V5cyA9IF9kZXJlcV8oMzApLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xufSx7XCIzMFwiOjMwLFwiNzVcIjo3NX1dLDczOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG59LHt9XSw3NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCB0b09iamVjdCAgICA9IF9kZXJlcV8oMTA5KVxuICAsIElFX1BST1RPICAgID0gX2RlcmVxXyg5MykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xufSx7XCIxMDlcIjoxMDksXCIzOVwiOjM5LFwiOTNcIjo5M31dLDc1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXMgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIHRvSU9iamVjdCAgICA9IF9kZXJlcV8oMTA3KVxuICAsIGFycmF5SW5kZXhPZiA9IF9kZXJlcV8oMTEpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IF9kZXJlcV8oOTMpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbn0se1wiMTA3XCI6MTA3LFwiMTFcIjoxMSxcIjM5XCI6MzksXCI5M1wiOjkzfV0sNzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSBfZGVyZXFfKDc1KVxuICAsIGVudW1CdWdLZXlzID0gX2RlcmVxXygzMCk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG59LHtcIjMwXCI6MzAsXCI3NVwiOjc1fV0sNzc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG59LHt9XSw3ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBjb3JlICAgID0gX2RlcmVxXygyMylcbiAgLCBmYWlscyAgID0gX2RlcmVxXygzNCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xufSx7XCIyM1wiOjIzLFwiMzJcIjozMixcIjM0XCI6MzR9XSw3OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2V0S2V5cyAgID0gX2RlcmVxXyg3NilcbiAgLCB0b0lPYmplY3QgPSBfZGVyZXFfKDEwNylcbiAgLCBpc0VudW0gICAgPSBfZGVyZXFfKDc3KS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG59LHtcIjEwN1wiOjEwNyxcIjc2XCI6NzYsXCI3N1wiOjc3fV0sODA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xudmFyIGdPUE4gICAgID0gX2RlcmVxXyg3MilcbiAgLCBnT1BTICAgICA9IF9kZXJlcV8oNzMpXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpXG4gICwgUmVmbGVjdCAgPSBfZGVyZXFfKDM4KS5SZWZsZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSBnT1BOLmYoYW5PYmplY3QoaXQpKVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbn0se1wiMzhcIjozOCxcIjdcIjo3LFwiNzJcIjo3MixcIjczXCI6NzN9XSw4MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJHBhcnNlRmxvYXQgPSBfZGVyZXFfKDM4KS5wYXJzZUZsb2F0XG4gICwgJHRyaW0gICAgICAgPSBfZGVyZXFfKDEwMikudHJpbTtcblxubW9kdWxlLmV4cG9ydHMgPSAxIC8gJHBhcnNlRmxvYXQoX2RlcmVxXygxMDMpICsgJy0wJykgIT09IC1JbmZpbml0eSA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyKXtcbiAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKVxuICAgICwgcmVzdWx0ID0gJHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiBzdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xufSx7XCIxMDJcIjoxMDIsXCIxMDNcIjoxMDMsXCIzOFwiOjM4fV0sODI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRwYXJzZUludCA9IF9kZXJlcV8oMzgpLnBhcnNlSW50XG4gICwgJHRyaW0gICAgID0gX2RlcmVxXygxMDIpLnRyaW1cbiAgLCB3cyAgICAgICAgPSBfZGVyZXFfKDEwMylcbiAgLCBoZXggICAgICAgPSAvXltcXC0rXT8wW3hYXS87XG5cbm1vZHVsZS5leHBvcnRzID0gJHBhcnNlSW50KHdzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdzICsgJzB4MTYnKSAhPT0gMjIgPyBmdW5jdGlvbiBwYXJzZUludChzdHIsIHJhZGl4KXtcbiAgdmFyIHN0cmluZyA9ICR0cmltKFN0cmluZyhzdHIpLCAzKTtcbiAgcmV0dXJuICRwYXJzZUludChzdHJpbmcsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KHN0cmluZykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xufSx7XCIxMDJcIjoxMDIsXCIxMDNcIjoxMDMsXCIzOFwiOjM4fV0sODM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHBhdGggICAgICA9IF9kZXJlcV8oODQpXG4gICwgaW52b2tlICAgID0gX2RlcmVxXyg0NClcbiAgLCBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigvKiAuLi5wYXJncyAqLyl7XG4gIHZhciBmbiAgICAgPSBhRnVuY3Rpb24odGhpcylcbiAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIHBhcmdzICA9IEFycmF5KGxlbmd0aClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIF8gICAgICA9IHBhdGguX1xuICAgICwgaG9sZGVyID0gZmFsc2U7XG4gIHdoaWxlKGxlbmd0aCA+IGkpaWYoKHBhcmdzW2ldID0gYXJndW1lbnRzW2krK10pID09PSBfKWhvbGRlciA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgaiA9IDAsIGsgPSAwLCBhcmdzO1xuICAgIGlmKCFob2xkZXIgJiYgIWFMZW4pcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xuICAgIGFyZ3MgPSBwYXJncy5zbGljZSgpO1xuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGo7IGorKylpZihhcmdzW2pdID09PSBfKWFyZ3Nbal0gPSBhcmd1bWVudHNbaysrXTtcbiAgICB3aGlsZShhTGVuID4gaylhcmdzLnB1c2goYXJndW1lbnRzW2srK10pO1xuICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xufTtcbn0se1wiM1wiOjMsXCI0NFwiOjQ0LFwiODRcIjo4NH1dLDg0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygzOCk7XG59LHtcIjM4XCI6Mzh9XSw4NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG59LHt9XSw4NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgcmVkZWZpbmUgPSBfZGVyZXFfKDg3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG59LHtcIjg3XCI6ODd9XSw4NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgID0gX2RlcmVxXygzOClcbiAgLCBoaWRlICAgICAgPSBfZGVyZXFfKDQwKVxuICAsIGhhcyAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgU1JDICAgICAgID0gX2RlcmVxXygxMTQpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5fZGVyZXFfKDIzKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmKE9ba2V5XSA9PT0gdmFsKXJldHVybjtcbiAgaWYoaXNGdW5jdGlvbiloYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpe1xuICAgICAgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihPW2tleV0pT1trZXldID0gdmFsO1xuICAgICAgZWxzZSBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xufSx7XCIxMTRcIjoxMTQsXCIyM1wiOjIzLFwiMzhcIjozOCxcIjM5XCI6MzksXCI0MFwiOjQwfV0sODg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG59LHt9XSw4OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG59LHt9XSw5MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSBfZGVyZXFfKDI1KShGdW5jdGlvbi5jYWxsLCBfZGVyZXFfKDcwKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG59LHtcIjI1XCI6MjUsXCI0OVwiOjQ5LFwiN1wiOjcsXCI3MFwiOjcwfV0sOTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gX2RlcmVxXygzOClcbiAgLCBkUCAgICAgICAgICA9IF9kZXJlcV8oNjcpXG4gICwgREVTQ1JJUFRPUlMgPSBfZGVyZXFfKDI4KVxuICAsIFNQRUNJRVMgICAgID0gX2RlcmVxXygxMTcpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG59LHtcIjExN1wiOjExNyxcIjI4XCI6MjgsXCIzOFwiOjM4LFwiNjdcIjo2N31dLDkyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkZWYgPSBfZGVyZXFfKDY3KS5mXG4gICwgaGFzID0gX2RlcmVxXygzOSlcbiAgLCBUQUcgPSBfZGVyZXFfKDExNykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG59LHtcIjExN1wiOjExNyxcIjM5XCI6MzksXCI2N1wiOjY3fV0sOTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHNoYXJlZCA9IF9kZXJlcV8oOTQpKCdrZXlzJylcbiAgLCB1aWQgICAgPSBfZGVyZXFfKDExNCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xufSx7XCIxMTRcIjoxMTQsXCI5NFwiOjk0fV0sOTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IF9kZXJlcV8oMzgpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbn0se1wiMzhcIjozOH1dLDk1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IF9kZXJlcV8oNylcbiAgLCBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpXG4gICwgU1BFQ0lFUyAgID0gX2RlcmVxXygxMTcpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xufSx7XCIxMTdcIjoxMTcsXCIzXCI6MyxcIjdcIjo3fV0sOTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGZhaWxzID0gX2RlcmVxXygzNCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWV0aG9kLCBhcmcpe1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBhcmcgPyBtZXRob2QuY2FsbChudWxsLCBmdW5jdGlvbigpe30sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG4gIH0pO1xufTtcbn0se1wiMzRcIjozNH1dLDk3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDEwNilcbiAgLCBkZWZpbmVkICAgPSBfZGVyZXFfKDI3KTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG59LHtcIjEwNlwiOjEwNixcIjI3XCI6Mjd9XSw5ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gX2RlcmVxXyg1MClcbiAgLCBkZWZpbmVkICA9IF9kZXJlcV8oMjcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSl7XG4gIGlmKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG59O1xufSx7XCIyN1wiOjI3LFwiNTBcIjo1MH1dLDk5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBmYWlscyAgID0gX2RlcmVxXygzNClcbiAgLCBkZWZpbmVkID0gX2RlcmVxXygyNylcbiAgLCBxdW90ICAgID0gL1wiL2c7XG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbnZhciBjcmVhdGVIVE1MID0gZnVuY3Rpb24oc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSlcbiAgICAsIHAxID0gJzwnICsgdGFnO1xuICBpZihhdHRyaWJ1dGUgIT09ICcnKXAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgZXhlYyl7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRlc3QgPSAnJ1tOQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSksICdTdHJpbmcnLCBPKTtcbn07XG59LHtcIjI3XCI6MjcsXCIzMlwiOjMyLFwiMzRcIjozNH1dLDEwMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyIHRvTGVuZ3RoID0gX2RlcmVxXygxMDgpXG4gICwgcmVwZWF0ICAgPSBfZGVyZXFfKDEwMSlcbiAgLCBkZWZpbmVkICA9IF9kZXJlcV8oMjcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCl7XG4gIHZhciBTICAgICAgICAgICAgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAsIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoXG4gICAgLCBmaWxsU3RyICAgICAgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZylcbiAgICAsIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIGlmKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGggfHwgZmlsbFN0ciA9PSAnJylyZXR1cm4gUztcbiAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGhcbiAgICAsIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcblxufSx7XCIxMDFcIjoxMDEsXCIxMDhcIjoxMDgsXCIyN1wiOjI3fV0sMTAxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDEwNilcbiAgLCBkZWZpbmVkICAgPSBfZGVyZXFfKDI3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xuICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpXG4gICAgLCByZXMgPSAnJ1xuICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XG4gIHJldHVybiByZXM7XG59O1xufSx7XCIxMDZcIjoxMDYsXCIyN1wiOjI3fV0sMTAyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBkZWZpbmVkID0gX2RlcmVxXygyNylcbiAgLCBmYWlscyAgID0gX2RlcmVxXygzNClcbiAgLCBzcGFjZXMgID0gX2RlcmVxXygxMDMpXG4gICwgc3BhY2UgICA9ICdbJyArIHNwYWNlcyArICddJ1xuICAsIG5vbiAgICAgPSAnXFx1MjAwYlxcdTAwODUnXG4gICwgbHRyaW0gICA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKVxuICAsIHJ0cmltICAgPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbihLRVksIGV4ZWMsIEFMSUFTKXtcbiAgdmFyIGV4cCAgID0ge307XG4gIHZhciBGT1JDRSA9IGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcbiAgfSk7XG4gIHZhciBmbiA9IGV4cFtLRVldID0gRk9SQ0UgPyBleGVjKHRyaW0pIDogc3BhY2VzW0tFWV07XG4gIGlmKEFMSUFTKWV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbihzdHJpbmcsIFRZUEUpe1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYoVFlQRSAmIDEpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgaWYoVFlQRSAmIDIpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG59LHtcIjEwM1wiOjEwMyxcIjI3XCI6MjcsXCIzMlwiOjMyLFwiMzRcIjozNH1dLDEwMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG59LHt9XSwxMDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGN0eCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMjUpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gX2RlcmVxXyg0NClcbiAgLCBodG1sICAgICAgICAgICAgICAgPSBfZGVyZXFfKDQxKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMjkpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYoX2RlcmVxXygxOCkocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbn0se1wiMThcIjoxOCxcIjI1XCI6MjUsXCIyOVwiOjI5LFwiMzhcIjozOCxcIjQxXCI6NDEsXCI0NFwiOjQ0fV0sMTA1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDEwNilcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG59LHtcIjEwNlwiOjEwNn1dLDEwNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG59LHt9XSwxMDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IF9kZXJlcV8oNDUpXG4gICwgZGVmaW5lZCA9IF9kZXJlcV8oMjcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG59LHtcIjI3XCI6MjcsXCI0NVwiOjQ1fV0sMTA4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IF9kZXJlcV8oMTA2KVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xufSx7XCIxMDZcIjoxMDZ9XSwxMDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSBfZGVyZXFfKDI3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG59LHtcIjI3XCI6Mjd9XSwxMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG59LHtcIjQ5XCI6NDl9XSwxMTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuaWYoX2RlcmVxXygyOCkpe1xuICB2YXIgTElCUkFSWSAgICAgICAgICAgICA9IF9kZXJlcV8oNTgpXG4gICAgLCBnbG9iYWwgICAgICAgICAgICAgID0gX2RlcmVxXygzOClcbiAgICAsIGZhaWxzICAgICAgICAgICAgICAgPSBfZGVyZXFfKDM0KVxuICAgICwgJGV4cG9ydCAgICAgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICAgLCAkdHlwZWQgICAgICAgICAgICAgID0gX2RlcmVxXygxMTMpXG4gICAgLCAkYnVmZmVyICAgICAgICAgICAgID0gX2RlcmVxXygxMTIpXG4gICAgLCBjdHggICAgICAgICAgICAgICAgID0gX2RlcmVxXygyNSlcbiAgICAsIGFuSW5zdGFuY2UgICAgICAgICAgPSBfZGVyZXFfKDYpXG4gICAgLCBwcm9wZXJ0eURlc2MgICAgICAgID0gX2RlcmVxXyg4NSlcbiAgICAsIGhpZGUgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDQwKVxuICAgICwgcmVkZWZpbmVBbGwgICAgICAgICA9IF9kZXJlcV8oODYpXG4gICAgLCB0b0ludGVnZXIgICAgICAgICAgID0gX2RlcmVxXygxMDYpXG4gICAgLCB0b0xlbmd0aCAgICAgICAgICAgID0gX2RlcmVxXygxMDgpXG4gICAgLCB0b0luZGV4ICAgICAgICAgICAgID0gX2RlcmVxXygxMDUpXG4gICAgLCB0b1ByaW1pdGl2ZSAgICAgICAgID0gX2RlcmVxXygxMTApXG4gICAgLCBoYXMgICAgICAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgICAsIHNhbWUgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDg5KVxuICAgICwgY2xhc3NvZiAgICAgICAgICAgICA9IF9kZXJlcV8oMTcpXG4gICAgLCBpc09iamVjdCAgICAgICAgICAgID0gX2RlcmVxXyg0OSlcbiAgICAsIHRvT2JqZWN0ICAgICAgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgICAsIGlzQXJyYXlJdGVyICAgICAgICAgPSBfZGVyZXFfKDQ2KVxuICAgICwgY3JlYXRlICAgICAgICAgICAgICA9IF9kZXJlcV8oNjYpXG4gICAgLCBnZXRQcm90b3R5cGVPZiAgICAgID0gX2RlcmVxXyg3NClcbiAgICAsIGdPUE4gICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcyKS5mXG4gICAgLCBnZXRJdGVyRm4gICAgICAgICAgID0gX2RlcmVxXygxMTgpXG4gICAgLCB1aWQgICAgICAgICAgICAgICAgID0gX2RlcmVxXygxMTQpXG4gICAgLCB3a3MgICAgICAgICAgICAgICAgID0gX2RlcmVxXygxMTcpXG4gICAgLCBjcmVhdGVBcnJheU1ldGhvZCAgID0gX2RlcmVxXygxMilcbiAgICAsIGNyZWF0ZUFycmF5SW5jbHVkZXMgPSBfZGVyZXFfKDExKVxuICAgICwgc3BlY2llc0NvbnN0cnVjdG9yICA9IF9kZXJlcV8oOTUpXG4gICAgLCBBcnJheUl0ZXJhdG9ycyAgICAgID0gX2RlcmVxXygxMzApXG4gICAgLCBJdGVyYXRvcnMgICAgICAgICAgID0gX2RlcmVxXyg1NilcbiAgICAsICRpdGVyRGV0ZWN0ICAgICAgICAgPSBfZGVyZXFfKDU0KVxuICAgICwgc2V0U3BlY2llcyAgICAgICAgICA9IF9kZXJlcV8oOTEpXG4gICAgLCBhcnJheUZpbGwgICAgICAgICAgID0gX2RlcmVxXyg5KVxuICAgICwgYXJyYXlDb3B5V2l0aGluICAgICA9IF9kZXJlcV8oOClcbiAgICAsICREUCAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAgICwgJEdPUEQgICAgICAgICAgICAgICA9IF9kZXJlcV8oNzApXG4gICAgLCBkUCAgICAgICAgICAgICAgICAgID0gJERQLmZcbiAgICAsIGdPUEQgICAgICAgICAgICAgICAgPSAkR09QRC5mXG4gICAgLCBSYW5nZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcbiAgICAsIFR5cGVFcnJvciAgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICAgLCBVaW50OEFycmF5ICAgICAgICAgID0gZ2xvYmFsLlVpbnQ4QXJyYXlcbiAgICAsIEFSUkFZX0JVRkZFUiAgICAgICAgPSAnQXJyYXlCdWZmZXInXG4gICAgLCBTSEFSRURfQlVGRkVSICAgICAgID0gJ1NoYXJlZCcgKyBBUlJBWV9CVUZGRVJcbiAgICAsIEJZVEVTX1BFUl9FTEVNRU5UICAgPSAnQllURVNfUEVSX0VMRU1FTlQnXG4gICAgLCBQUk9UT1RZUEUgICAgICAgICAgID0gJ3Byb3RvdHlwZSdcbiAgICAsIEFycmF5UHJvdG8gICAgICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXG4gICAgLCAkQXJyYXlCdWZmZXIgICAgICAgID0gJGJ1ZmZlci5BcnJheUJ1ZmZlclxuICAgICwgJERhdGFWaWV3ICAgICAgICAgICA9ICRidWZmZXIuRGF0YVZpZXdcbiAgICAsIGFycmF5Rm9yRWFjaCAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgwKVxuICAgICwgYXJyYXlGaWx0ZXIgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDIpXG4gICAgLCBhcnJheVNvbWUgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMylcbiAgICAsIGFycmF5RXZlcnkgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg0KVxuICAgICwgYXJyYXlGaW5kICAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICAgLCBhcnJheUZpbmRJbmRleCAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgICAsIGFycmF5SW5jbHVkZXMgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKHRydWUpXG4gICAgLCBhcnJheUluZGV4T2YgICAgICAgID0gY3JlYXRlQXJyYXlJbmNsdWRlcyhmYWxzZSlcbiAgICAsIGFycmF5VmFsdWVzICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy52YWx1ZXNcbiAgICAsIGFycmF5S2V5cyAgICAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5rZXlzXG4gICAgLCBhcnJheUVudHJpZXMgICAgICAgID0gQXJyYXlJdGVyYXRvcnMuZW50cmllc1xuICAgICwgYXJyYXlMYXN0SW5kZXhPZiAgICA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2ZcbiAgICAsIGFycmF5UmVkdWNlICAgICAgICAgPSBBcnJheVByb3RvLnJlZHVjZVxuICAgICwgYXJyYXlSZWR1Y2VSaWdodCAgICA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHRcbiAgICAsIGFycmF5Sm9pbiAgICAgICAgICAgPSBBcnJheVByb3RvLmpvaW5cbiAgICAsIGFycmF5U29ydCAgICAgICAgICAgPSBBcnJheVByb3RvLnNvcnRcbiAgICAsIGFycmF5U2xpY2UgICAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlXG4gICAgLCBhcnJheVRvU3RyaW5nICAgICAgID0gQXJyYXlQcm90by50b1N0cmluZ1xuICAgICwgYXJyYXlUb0xvY2FsZVN0cmluZyA9IEFycmF5UHJvdG8udG9Mb2NhbGVTdHJpbmdcbiAgICAsIElURVJBVE9SICAgICAgICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgICAsIFRBRyAgICAgICAgICAgICAgICAgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgICAsIFRZUEVEX0NPTlNUUlVDVE9SICAgPSB1aWQoJ3R5cGVkX2NvbnN0cnVjdG9yJylcbiAgICAsIERFRl9DT05TVFJVQ1RPUiAgICAgPSB1aWQoJ2RlZl9jb25zdHJ1Y3RvcicpXG4gICAgLCBBTExfQ09OU1RSVUNUT1JTICAgID0gJHR5cGVkLkNPTlNUUlxuICAgICwgVFlQRURfQVJSQVkgICAgICAgICA9ICR0eXBlZC5UWVBFRFxuICAgICwgVklFVyAgICAgICAgICAgICAgICA9ICR0eXBlZC5WSUVXXG4gICAgLCBXUk9OR19MRU5HVEggICAgICAgID0gJ1dyb25nIGxlbmd0aCEnO1xuXG4gIHZhciAkbWFwID0gY3JlYXRlQXJyYXlNZXRob2QoMSwgZnVuY3Rpb24oTywgbGVuZ3RoKXtcbiAgICByZXR1cm4gYWxsb2NhdGUoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxlbmd0aCk7XG4gIH0pO1xuXG4gIHZhciBMSVRUTEVfRU5ESUFOID0gZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobmV3IFVpbnQxNkFycmF5KFsxXSkuYnVmZmVyKVswXSA9PT0gMTtcbiAgfSk7XG5cbiAgdmFyIEZPUkNFRF9TRVQgPSAhIVVpbnQ4QXJyYXkgJiYgISFVaW50OEFycmF5W1BST1RPVFlQRV0uc2V0ICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IFVpbnQ4QXJyYXkoMSkuc2V0KHt9KTtcbiAgfSk7XG5cbiAgdmFyIHN0cmljdFRvTGVuZ3RoID0gZnVuY3Rpb24oaXQsIFNBTUUpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdmFyIG51bWJlciA9ICtpdFxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChpdCk7XG4gICAgaWYoU0FNRSAmJiAhc2FtZShudW1iZXIsIGxlbmd0aCkpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG5cbiAgdmFyIHRvT2Zmc2V0ID0gZnVuY3Rpb24oaXQsIEJZVEVTKXtcbiAgICB2YXIgb2Zmc2V0ID0gdG9JbnRlZ2VyKGl0KTtcbiAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9O1xuXG4gIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgICBpZihpc09iamVjdChpdCkgJiYgVFlQRURfQVJSQVkgaW4gaXQpcmV0dXJuIGl0O1xuICAgIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgdHlwZWQgYXJyYXkhJyk7XG4gIH07XG5cbiAgdmFyIGFsbG9jYXRlID0gZnVuY3Rpb24oQywgbGVuZ3RoKXtcbiAgICBpZighKGlzT2JqZWN0KEMpICYmIFRZUEVEX0NPTlNUUlVDVE9SIGluIEMpKXtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSXQgaXMgbm90IGEgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IhJyk7XG4gICAgfSByZXR1cm4gbmV3IEMobGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgc3BlY2llc0Zyb21MaXN0ID0gZnVuY3Rpb24oTywgbGlzdCl7XG4gICAgcmV0dXJuIGZyb21MaXN0KHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsaXN0KTtcbiAgfTtcblxuICB2YXIgZnJvbUxpc3QgPSBmdW5jdGlvbihDLCBsaXN0KXtcbiAgICB2YXIgaW5kZXggID0gMFxuICAgICAgLCBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZShDLCBsZW5ndGgpO1xuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBsaXN0W2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKGl0LCBrZXksIGludGVybmFsKXtcbiAgICBkUChpdCwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5fZFtpbnRlcm5hbF07IH19KTtcbiAgfTtcblxuICB2YXIgJGZyb20gPSBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiwgbWFwZm4sIHRoaXNBcmcgKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3Qoc291cmNlKVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBpLCBsZW5ndGgsIHZhbHVlcywgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCB2YWx1ZXMgPSBbXSwgaSA9IDA7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaSsrKXtcbiAgICAgICAgdmFsdWVzLnB1c2goc3RlcC52YWx1ZSk7XG4gICAgICB9IE8gPSB2YWx1ZXM7XG4gICAgfVxuICAgIGlmKG1hcHBpbmcgJiYgYUxlbiA+IDIpbWFwZm4gPSBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7IGxlbmd0aCA+IGk7IGkrKyl7XG4gICAgICByZXN1bHRbaV0gPSBtYXBwaW5nID8gbWFwZm4oT1tpXSwgaSkgOiBPW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciAkb2YgPSBmdW5jdGlvbiBvZigvKi4uLml0ZW1zKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTtcbiAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gaU9TIFNhZmFyaSA2LnggZmFpbHMgaGVyZVxuICB2YXIgVE9fTE9DQUxFX0JVRyA9ICEhVWludDhBcnJheSAmJiBmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvTG9jYWxlU3RyaW5nLmNhbGwobmV3IFVpbnQ4QXJyYXkoMSkpOyB9KTtcblxuICB2YXIgJHRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKXtcbiAgICByZXR1cm4gYXJyYXlUb0xvY2FsZVN0cmluZy5hcHBseShUT19MT0NBTEVfQlVHID8gYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpKSA6IHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHZhciBwcm90byA9IHtcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldCwgc3RhcnQgLyosIGVuZCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlDb3B5V2l0aGluLmNhbGwodmFsaWRhdGUodGhpcyksIHRhcmdldCwgc3RhcnQsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUV2ZXJ5KHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCwgZW5kICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5RmlsbC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheUZpbHRlcih2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbixcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUZpbmQodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheUZpbmRJbmRleCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgYXJyYXlGb3JFYWNoKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlJbmRleE9mKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcbiAgICAgIHJldHVybiBhcnJheUluY2x1ZGVzKHZhbGlkYXRlKHRoaXMpLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUpvaW4uYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5TGFzdEluZGV4T2YuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIG1hcChtYXBmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gJG1hcCh2YWxpZGF0ZSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZS5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qLCBpbml0aWFsVmFsdWUgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2VSaWdodC5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKXtcbiAgICAgIHZhciB0aGF0ICAgPSB0aGlzXG4gICAgICAgICwgbGVuZ3RoID0gdmFsaWRhdGUodGhhdCkubGVuZ3RoXG4gICAgICAgICwgbWlkZGxlID0gTWF0aC5mbG9vcihsZW5ndGggLyAyKVxuICAgICAgICAsIGluZGV4ICA9IDBcbiAgICAgICAgLCB2YWx1ZTtcbiAgICAgIHdoaWxlKGluZGV4IDwgbWlkZGxlKXtcbiAgICAgICAgdmFsdWUgICAgICAgICA9IHRoYXRbaW5kZXhdO1xuICAgICAgICB0aGF0W2luZGV4KytdID0gdGhhdFstLWxlbmd0aF07XG4gICAgICAgIHRoYXRbbGVuZ3RoXSAgPSB2YWx1ZTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfSxcbiAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5U29tZSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuICAgICAgcmV0dXJuIGFycmF5U29ydC5jYWxsKHZhbGlkYXRlKHRoaXMpLCBjb21wYXJlZm4pO1xuICAgIH0sXG4gICAgc3ViYXJyYXk6IGZ1bmN0aW9uIHN1YmFycmF5KGJlZ2luLCBlbmQpe1xuICAgICAgdmFyIE8gICAgICA9IHZhbGlkYXRlKHRoaXMpXG4gICAgICAgICwgbGVuZ3RoID0gTy5sZW5ndGhcbiAgICAgICAgLCAkYmVnaW4gPSB0b0luZGV4KGJlZ2luLCBsZW5ndGgpO1xuICAgICAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSkpKFxuICAgICAgICBPLmJ1ZmZlcixcbiAgICAgICAgTy5ieXRlT2Zmc2V0ICsgJGJlZ2luICogTy5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgICAgdG9MZW5ndGgoKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCkpIC0gJGJlZ2luKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyICRzbGljZSA9IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpe1xuICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlTbGljZS5jYWxsKHZhbGlkYXRlKHRoaXMpLCBzdGFydCwgZW5kKSk7XG4gIH07XG5cbiAgdmFyICRzZXQgPSBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qLCBvZmZzZXQgKi8pe1xuICAgIHZhbGlkYXRlKHRoaXMpO1xuICAgIHZhciBvZmZzZXQgPSB0b09mZnNldChhcmd1bWVudHNbMV0sIDEpXG4gICAgICAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgICAsIHNyYyAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgbGVuICAgID0gdG9MZW5ndGgoc3JjLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMDtcbiAgICBpZihsZW4gKyBvZmZzZXQgPiBsZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHdoaWxlKGluZGV4IDwgbGVuKXRoaXNbb2Zmc2V0ICsgaW5kZXhdID0gc3JjW2luZGV4KytdO1xuICB9O1xuXG4gIHZhciAkaXRlcmF0b3JzID0ge1xuICAgIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoKXtcbiAgICAgIHJldHVybiBhcnJheUVudHJpZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCl7XG4gICAgICByZXR1cm4gYXJyYXlLZXlzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoKXtcbiAgICAgIHJldHVybiBhcnJheVZhbHVlcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzVEFJbmRleCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KXtcbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KVxuICAgICAgJiYgdGFyZ2V0W1RZUEVEX0FSUkFZXVxuICAgICAgJiYgdHlwZW9mIGtleSAhPSAnc3ltYm9sJ1xuICAgICAgJiYga2V5IGluIHRhcmdldFxuICAgICAgJiYgU3RyaW5nKCtrZXkpID09IFN0cmluZyhrZXkpO1xuICB9O1xuICB2YXIgJGdldERlc2MgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpe1xuICAgIHJldHVybiBpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgPyBwcm9wZXJ0eURlc2MoMiwgdGFyZ2V0W2tleV0pXG4gICAgICA6IGdPUEQodGFyZ2V0LCBrZXkpO1xuICB9O1xuICB2YXIgJHNldERlc2MgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzYyl7XG4gICAgaWYoaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcbiAgICAgICYmIGlzT2JqZWN0KGRlc2MpXG4gICAgICAmJiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICAgICYmICFoYXMoZGVzYywgJ2dldCcpXG4gICAgICAmJiAhaGFzKGRlc2MsICdzZXQnKVxuICAgICAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZGVzY3JpcHRvciB3L28gY2FsbGluZyBhY2Nlc3NvcnNcbiAgICAgICYmICFkZXNjLmNvbmZpZ3VyYWJsZVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ3dyaXRhYmxlJykgfHwgZGVzYy53cml0YWJsZSlcbiAgICAgICYmICghaGFzKGRlc2MsICdlbnVtZXJhYmxlJykgfHwgZGVzYy5lbnVtZXJhYmxlKVxuICAgICl7XG4gICAgICB0YXJnZXRba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZSByZXR1cm4gZFAodGFyZ2V0LCBrZXksIGRlc2MpO1xuICB9O1xuXG4gIGlmKCFBTExfQ09OU1RSVUNUT1JTKXtcbiAgICAkR09QRC5mID0gJGdldERlc2M7XG4gICAgJERQLmYgICA9ICRzZXREZXNjO1xuICB9XG5cbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhQUxMX0NPTlNUUlVDVE9SUywgJ09iamVjdCcsIHtcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXREZXNjLFxuICAgIGRlZmluZVByb3BlcnR5OiAgICAgICAgICAgJHNldERlc2NcbiAgfSk7XG5cbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXsgYXJyYXlUb1N0cmluZy5jYWxsKHt9KTsgfSkpe1xuICAgIGFycmF5VG9TdHJpbmcgPSBhcnJheVRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgJFR5cGVkQXJyYXlQcm90b3R5cGUkID0gcmVkZWZpbmVBbGwoe30sIHByb3RvKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAkaXRlcmF0b3JzKTtcbiAgaGlkZSgkVHlwZWRBcnJheVByb3RvdHlwZSQsIElURVJBVE9SLCAkaXRlcmF0b3JzLnZhbHVlcyk7XG4gIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwge1xuICAgIHNsaWNlOiAgICAgICAgICAkc2xpY2UsXG4gICAgc2V0OiAgICAgICAgICAgICRzZXQsXG4gICAgY29uc3RydWN0b3I6ICAgIGZ1bmN0aW9uKCl7IC8qIG5vb3AgKi8gfSxcbiAgICB0b1N0cmluZzogICAgICAgYXJyYXlUb1N0cmluZyxcbiAgICB0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nXG4gIH0pO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnVmZmVyJywgJ2InKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVPZmZzZXQnLCAnbycpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZUxlbmd0aCcsICdsJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdsZW5ndGgnLCAnZScpO1xuICBkUCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIFRBRywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbVFlQRURfQVJSQVldOyB9XG4gIH0pO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCl7XG4gICAgQ0xBTVBFRCA9ICEhQ0xBTVBFRDtcbiAgICB2YXIgTkFNRSAgICAgICA9IEtFWSArIChDTEFNUEVEID8gJ0NsYW1wZWQnIDogJycpICsgJ0FycmF5J1xuICAgICAgLCBJU05UX1VJTlQ4ID0gTkFNRSAhPSAnVWludDhBcnJheSdcbiAgICAgICwgR0VUVEVSICAgICA9ICdnZXQnICsgS0VZXG4gICAgICAsIFNFVFRFUiAgICAgPSAnc2V0JyArIEtFWVxuICAgICAgLCBUeXBlZEFycmF5ID0gZ2xvYmFsW05BTUVdXG4gICAgICAsIEJhc2UgICAgICAgPSBUeXBlZEFycmF5IHx8IHt9XG4gICAgICAsIFRBQyAgICAgICAgPSBUeXBlZEFycmF5ICYmIGdldFByb3RvdHlwZU9mKFR5cGVkQXJyYXkpXG4gICAgICAsIEZPUkNFRCAgICAgPSAhVHlwZWRBcnJheSB8fCAhJHR5cGVkLkFCVlxuICAgICAgLCBPICAgICAgICAgID0ge31cbiAgICAgICwgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkgJiYgVHlwZWRBcnJheVtQUk9UT1RZUEVdO1xuICAgIHZhciBnZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCl7XG4gICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICByZXR1cm4gZGF0YS52W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24odGhhdCwgaW5kZXgsIHZhbHVlKXtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIGlmKENMQU1QRUQpdmFsdWUgPSAodmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKSkgPCAwID8gMCA6IHZhbHVlID4gMHhmZiA/IDB4ZmYgOiB2YWx1ZSAmIDB4ZmY7XG4gICAgICBkYXRhLnZbU0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCB2YWx1ZSwgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgYWRkRWxlbWVudCA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcbiAgICAgIGRQKHRoYXQsIGluZGV4LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKHRoaXMsIGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgcmV0dXJuIHNldHRlcih0aGlzLCBpbmRleCwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmKEZPUkNFRCl7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FLCAnX2QnKTtcbiAgICAgICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICAgICAsIG9mZnNldCA9IDBcbiAgICAgICAgICAsIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoLCBrbGFzcztcbiAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXtcbiAgICAgICAgICBsZW5ndGggICAgID0gc3RyaWN0VG9MZW5ndGgoZGF0YSwgdHJ1ZSlcbiAgICAgICAgICBieXRlTGVuZ3RoID0gbGVuZ3RoICogQllURVM7XG4gICAgICAgICAgYnVmZmVyICAgICA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcbiAgICAgICAgICBidWZmZXIgPSBkYXRhO1xuICAgICAgICAgIG9mZnNldCA9IHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKTtcbiAgICAgICAgICB2YXIgJGxlbiA9IGRhdGEuYnl0ZUxlbmd0aDtcbiAgICAgICAgICBpZigkbGVuZ3RoID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgaWYoJGxlbiAlIEJZVEVTKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCA8IDApdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gdG9MZW5ndGgoJGxlbmd0aCkgKiBCWVRFUztcbiAgICAgICAgICAgIGlmKGJ5dGVMZW5ndGggKyBvZmZzZXQgPiAkbGVuKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVuZ3RoID0gYnl0ZUxlbmd0aCAvIEJZVEVTO1xuICAgICAgICB9IGVsc2UgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSl7XG4gICAgICAgICAgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGUodGhhdCwgJ19kJywge1xuICAgICAgICAgIGI6IGJ1ZmZlcixcbiAgICAgICAgICBvOiBvZmZzZXQsXG4gICAgICAgICAgbDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBlOiBsZW5ndGgsXG4gICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZShpbmRleCA8IGxlbmd0aClhZGRFbGVtZW50KHRoYXQsIGluZGV4KyspO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gY3JlYXRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCk7XG4gICAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIFR5cGVkQXJyYXkpO1xuICAgIH0gZWxzZSBpZighJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7XG4gICAgICAvLyBWOCB3b3JrcyB3aXRoIGl0ZXJhdG9ycywgYnV0IGZhaWxzIGluIG1hbnkgb3RoZXIgY2FzZXNcbiAgICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00NTUyXG4gICAgICBuZXcgVHlwZWRBcnJheShudWxsKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0sIHRydWUpKXtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICB2YXIga2xhc3M7XG4gICAgICAgIC8vIGB3c2AgbW9kdWxlIGJ1ZywgdGVtcG9yYXJpbHkgcmVtb3ZlIHZhbGlkYXRpb24gbGVuZ3RoIGZvciBVaW50OEFycmF5XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL3B1bGwvNjQ1XG4gICAgICAgIGlmKCFpc09iamVjdChkYXRhKSlyZXR1cm4gbmV3IEJhc2Uoc3RyaWN0VG9MZW5ndGgoZGF0YSwgSVNOVF9VSU5UOCkpO1xuICAgICAgICBpZihkYXRhIGluc3RhbmNlb2YgJEFycmF5QnVmZmVyIHx8IChrbGFzcyA9IGNsYXNzb2YoZGF0YSkpID09IEFSUkFZX0JVRkZFUiB8fCBrbGFzcyA9PSBTSEFSRURfQlVGRkVSKXtcbiAgICAgICAgICByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSwgJGxlbmd0aClcbiAgICAgICAgICAgIDogJG9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpKVxuICAgICAgICAgICAgICA6IG5ldyBCYXNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKFRZUEVEX0FSUkFZIGluIGRhdGEpcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgYXJyYXlGb3JFYWNoKFRBQyAhPT0gRnVuY3Rpb24ucHJvdG90eXBlID8gZ09QTihCYXNlKS5jb25jYXQoZ09QTihUQUMpKSA6IGdPUE4oQmFzZSksIGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCEoa2V5IGluIFR5cGVkQXJyYXkpKWhpZGUoVHlwZWRBcnJheSwga2V5LCBCYXNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBUeXBlZEFycmF5UHJvdG90eXBlO1xuICAgICAgaWYoIUxJQlJBUlkpVHlwZWRBcnJheVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFR5cGVkQXJyYXk7XG4gICAgfVxuICAgIHZhciAkbmF0aXZlSXRlcmF0b3IgICA9IFR5cGVkQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgICAsIENPUlJFQ1RfSVRFUl9OQU1FID0gISEkbmF0aXZlSXRlcmF0b3IgJiYgKCRuYXRpdmVJdGVyYXRvci5uYW1lID09ICd2YWx1ZXMnIHx8ICRuYXRpdmVJdGVyYXRvci5uYW1lID09IHVuZGVmaW5lZClcbiAgICAgICwgJGl0ZXJhdG9yICAgICAgICAgPSAkaXRlcmF0b3JzLnZhbHVlcztcbiAgICBoaWRlKFR5cGVkQXJyYXksIFRZUEVEX0NPTlNUUlVDVE9SLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRZUEVEX0FSUkFZLCBOQU1FKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgREVGX0NPTlNUUlVDVE9SLCBUeXBlZEFycmF5KTtcblxuICAgIGlmKENMQU1QRUQgPyBuZXcgVHlwZWRBcnJheSgxKVtUQUddICE9IE5BTUUgOiAhKFRBRyBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSl7XG4gICAgICBkUChUeXBlZEFycmF5UHJvdG90eXBlLCBUQUcsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gTkFNRTsgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT1tOQU1FXSA9IFR5cGVkQXJyYXk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChUeXBlZEFycmF5ICE9IEJhc2UpLCBPKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5TLCBOQU1FLCB7XG4gICAgICBCWVRFU19QRVJfRUxFTUVOVDogQllURVMsXG4gICAgICBmcm9tOiAkZnJvbSxcbiAgICAgIG9mOiAkb2ZcbiAgICB9KTtcblxuICAgIGlmKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBCWVRFU19QRVJfRUxFTUVOVCwgQllURVMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAsIE5BTUUsIHByb3RvKTtcblxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFRF9TRVQsIE5BTUUsIHtzZXQ6ICRzZXR9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIUNPUlJFQ1RfSVRFUl9OQU1FLCBOQU1FLCAkaXRlcmF0b3JzKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgIT0gYXJyYXlUb1N0cmluZyksIE5BTUUsIHt0b1N0cmluZzogYXJyYXlUb1N0cmluZ30pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgICAgbmV3IFR5cGVkQXJyYXkoMSkuc2xpY2UoKTtcbiAgICB9KSwgTkFNRSwge3NsaWNlOiAkc2xpY2V9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT0gbmV3IFR5cGVkQXJyYXkoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpXG4gICAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcbiAgICB9KSksIE5BTUUsIHt0b0xvY2FsZVN0cmluZzogJHRvTG9jYWxlU3RyaW5nfSk7XG5cbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBDT1JSRUNUX0lURVJfTkFNRSA/ICRuYXRpdmVJdGVyYXRvciA6ICRpdGVyYXRvcjtcbiAgICBpZighTElCUkFSWSAmJiAhQ09SUkVDVF9JVEVSX05BTUUpaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBJVEVSQVRPUiwgJGl0ZXJhdG9yKTtcbiAgfTtcbn0gZWxzZSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG59LHtcIjEwNVwiOjEwNSxcIjEwNlwiOjEwNixcIjEwOFwiOjEwOCxcIjEwOVwiOjEwOSxcIjExXCI6MTEsXCIxMTBcIjoxMTAsXCIxMTJcIjoxMTIsXCIxMTNcIjoxMTMsXCIxMTRcIjoxMTQsXCIxMTdcIjoxMTcsXCIxMThcIjoxMTgsXCIxMlwiOjEyLFwiMTMwXCI6MTMwLFwiMTdcIjoxNyxcIjI1XCI6MjUsXCIyOFwiOjI4LFwiMzJcIjozMixcIjM0XCI6MzQsXCIzOFwiOjM4LFwiMzlcIjozOSxcIjQwXCI6NDAsXCI0NlwiOjQ2LFwiNDlcIjo0OSxcIjU0XCI6NTQsXCI1NlwiOjU2LFwiNThcIjo1OCxcIjZcIjo2LFwiNjZcIjo2NixcIjY3XCI6NjcsXCI3MFwiOjcwLFwiNzJcIjo3MixcIjc0XCI6NzQsXCI4XCI6OCxcIjg1XCI6ODUsXCI4NlwiOjg2LFwiODlcIjo4OSxcIjlcIjo5LFwiOTFcIjo5MSxcIjk1XCI6OTV9XSwxMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBERVNDUklQVE9SUyAgICA9IF9kZXJlcV8oMjgpXG4gICwgTElCUkFSWSAgICAgICAgPSBfZGVyZXFfKDU4KVxuICAsICR0eXBlZCAgICAgICAgID0gX2RlcmVxXygxMTMpXG4gICwgaGlkZSAgICAgICAgICAgPSBfZGVyZXFfKDQwKVxuICAsIHJlZGVmaW5lQWxsICAgID0gX2RlcmVxXyg4NilcbiAgLCBmYWlscyAgICAgICAgICA9IF9kZXJlcV8oMzQpXG4gICwgYW5JbnN0YW5jZSAgICAgPSBfZGVyZXFfKDYpXG4gICwgdG9JbnRlZ2VyICAgICAgPSBfZGVyZXFfKDEwNilcbiAgLCB0b0xlbmd0aCAgICAgICA9IF9kZXJlcV8oMTA4KVxuICAsIGdPUE4gICAgICAgICAgID0gX2RlcmVxXyg3MikuZlxuICAsIGRQICAgICAgICAgICAgID0gX2RlcmVxXyg2NykuZlxuICAsIGFycmF5RmlsbCAgICAgID0gX2RlcmVxXyg5KVxuICAsIHNldFRvU3RyaW5nVGFnID0gX2RlcmVxXyg5MilcbiAgLCBBUlJBWV9CVUZGRVIgICA9ICdBcnJheUJ1ZmZlcidcbiAgLCBEQVRBX1ZJRVcgICAgICA9ICdEYXRhVmlldydcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgV1JPTkdfTEVOR1RIICAgPSAnV3JvbmcgbGVuZ3RoISdcbiAgLCBXUk9OR19JTkRFWCAgICA9ICdXcm9uZyBpbmRleCEnXG4gICwgJEFycmF5QnVmZmVyICAgPSBnbG9iYWxbQVJSQVlfQlVGRkVSXVxuICAsICREYXRhVmlldyAgICAgID0gZ2xvYmFsW0RBVEFfVklFV11cbiAgLCBNYXRoICAgICAgICAgICA9IGdsb2JhbC5NYXRoXG4gICwgUmFuZ2VFcnJvciAgICAgPSBnbG9iYWwuUmFuZ2VFcnJvclxuICAsIEluZmluaXR5ICAgICAgID0gZ2xvYmFsLkluZmluaXR5XG4gICwgQmFzZUJ1ZmZlciAgICAgPSAkQXJyYXlCdWZmZXJcbiAgLCBhYnMgICAgICAgICAgICA9IE1hdGguYWJzXG4gICwgcG93ICAgICAgICAgICAgPSBNYXRoLnBvd1xuICAsIGZsb29yICAgICAgICAgID0gTWF0aC5mbG9vclxuICAsIGxvZyAgICAgICAgICAgID0gTWF0aC5sb2dcbiAgLCBMTjIgICAgICAgICAgICA9IE1hdGguTE4yXG4gICwgQlVGRkVSICAgICAgICAgPSAnYnVmZmVyJ1xuICAsIEJZVEVfTEVOR1RIICAgID0gJ2J5dGVMZW5ndGgnXG4gICwgQllURV9PRkZTRVQgICAgPSAnYnl0ZU9mZnNldCdcbiAgLCAkQlVGRkVSICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19iJyA6IEJVRkZFUlxuICAsICRMRU5HVEggICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX2wnIDogQllURV9MRU5HVEhcbiAgLCAkT0ZGU0VUICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19vJyA6IEJZVEVfT0ZGU0VUO1xuXG4vLyBJRUVFNzU0IGNvbnZlcnNpb25zIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaWVlZTc1NFxudmFyIHBhY2tJRUVFNzU0ID0gZnVuY3Rpb24odmFsdWUsIG1MZW4sIG5CeXRlcyl7XG4gIHZhciBidWZmZXIgPSBBcnJheShuQnl0ZXMpXG4gICAgLCBlTGVuICAgPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgICAsIGVNYXggICA9ICgxIDw8IGVMZW4pIC0gMVxuICAgICwgZUJpYXMgID0gZU1heCA+PiAxXG4gICAgLCBydCAgICAgPSBtTGVuID09PSAyMyA/IHBvdygyLCAtMjQpIC0gcG93KDIsIC03NykgOiAwXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBzICAgICAgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCA/IDEgOiAwXG4gICAgLCBlLCBtLCBjO1xuICB2YWx1ZSA9IGFicyh2YWx1ZSlcbiAgaWYodmFsdWUgIT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5KXtcbiAgICBtID0gdmFsdWUgIT0gdmFsdWUgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gZmxvb3IobG9nKHZhbHVlKSAvIExOMik7XG4gICAgaWYodmFsdWUgKiAoYyA9IHBvdygyLCAtZSkpIDwgMSl7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmKGUgKyBlQmlhcyA+PSAxKXtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBwb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYodmFsdWUgKiBjID49IDIpe1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cbiAgICBpZihlICsgZUJpYXMgPj0gZU1heCl7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZihlICsgZUJpYXMgPj0gMSl7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogcG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogcG93KDIsIGVCaWFzIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cbiAgZm9yKDsgbUxlbiA+PSA4OyBidWZmZXJbaSsrXSA9IG0gJiAyNTUsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuICBlID0gZSA8PCBtTGVuIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IoOyBlTGVuID4gMDsgYnVmZmVyW2krK10gPSBlICYgMjU1LCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcbiAgYnVmZmVyWy0taV0gfD0gcyAqIDEyODtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG52YXIgdW5wYWNrSUVFRTc1NCA9IGZ1bmN0aW9uKGJ1ZmZlciwgbUxlbiwgbkJ5dGVzKXtcbiAgdmFyIGVMZW4gID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gICAgLCBlTWF4ICA9ICgxIDw8IGVMZW4pIC0gMVxuICAgICwgZUJpYXMgPSBlTWF4ID4+IDFcbiAgICAsIG5CaXRzID0gZUxlbiAtIDdcbiAgICAsIGkgICAgID0gbkJ5dGVzIC0gMVxuICAgICwgcyAgICAgPSBidWZmZXJbaS0tXVxuICAgICwgZSAgICAgPSBzICYgMTI3XG4gICAgLCBtO1xuICBzID4+PSA3O1xuICBmb3IoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW2ldLCBpLS0sIG5CaXRzIC09IDgpO1xuICBtID0gZSAmICgxIDw8IC1uQml0cykgLSAxO1xuICBlID4+PSAtbkJpdHM7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvcig7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIGlmKGUgPT09IDApe1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZihlID09PSBlTWF4KXtcbiAgICByZXR1cm4gbSA/IE5hTiA6IHMgPyAtSW5maW5pdHkgOiBJbmZpbml0eTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIHBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9IHJldHVybiAocyA/IC0xIDogMSkgKiBtICogcG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbnZhciB1bnBhY2tJMzIgPSBmdW5jdGlvbihieXRlcyl7XG4gIHJldHVybiBieXRlc1szXSA8PCAyNCB8IGJ5dGVzWzJdIDw8IDE2IHwgYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xufTtcbnZhciBwYWNrSTggPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBbaXQgJiAweGZmXTtcbn07XG52YXIgcGFja0kxNiA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmXTtcbn07XG52YXIgcGFja0kzMiA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmLCBpdCA+PiAxNiAmIDB4ZmYsIGl0ID4+IDI0ICYgMHhmZl07XG59O1xudmFyIHBhY2tGNjQgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBwYWNrSUVFRTc1NChpdCwgNTIsIDgpO1xufTtcbnZhciBwYWNrRjMyID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDIzLCA0KTtcbn07XG5cbnZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbihDLCBrZXksIGludGVybmFsKXtcbiAgZFAoQ1tQUk9UT1RZUEVdLCBrZXksIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzW2ludGVybmFsXTsgfX0pO1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uKHZpZXcsIGJ5dGVzLCBpbmRleCwgaXNMaXR0bGVFbmRpYW4pe1xuICB2YXIgbnVtSW5kZXggPSAraW5kZXhcbiAgICAsIGludEluZGV4ID0gdG9JbnRlZ2VyKG51bUluZGV4KTtcbiAgaWYobnVtSW5kZXggIT0gaW50SW5kZXggfHwgaW50SW5kZXggPCAwIHx8IGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuICB2YXIgc3RvcmUgPSB2aWV3WyRCVUZGRVJdLl9iXG4gICAgLCBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXVxuICAgICwgcGFjayAgPSBzdG9yZS5zbGljZShzdGFydCwgc3RhcnQgKyBieXRlcyk7XG4gIHJldHVybiBpc0xpdHRsZUVuZGlhbiA/IHBhY2sgOiBwYWNrLnJldmVyc2UoKTtcbn07XG52YXIgc2V0ID0gZnVuY3Rpb24odmlldywgYnl0ZXMsIGluZGV4LCBjb252ZXJzaW9uLCB2YWx1ZSwgaXNMaXR0bGVFbmRpYW4pe1xuICB2YXIgbnVtSW5kZXggPSAraW5kZXhcbiAgICAsIGludEluZGV4ID0gdG9JbnRlZ2VyKG51bUluZGV4KTtcbiAgaWYobnVtSW5kZXggIT0gaW50SW5kZXggfHwgaW50SW5kZXggPCAwIHx8IGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfSU5ERVgpO1xuICB2YXIgc3RvcmUgPSB2aWV3WyRCVUZGRVJdLl9iXG4gICAgLCBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXVxuICAgICwgcGFjayAgPSBjb252ZXJzaW9uKCt2YWx1ZSk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBieXRlczsgaSsrKXN0b3JlW3N0YXJ0ICsgaV0gPSBwYWNrW2lzTGl0dGxlRW5kaWFuID8gaSA6IGJ5dGVzIC0gaSAtIDFdO1xufTtcblxudmFyIHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHMgPSBmdW5jdGlvbih0aGF0LCBsZW5ndGgpe1xuICBhbkluc3RhbmNlKHRoYXQsICRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcbiAgdmFyIG51bWJlckxlbmd0aCA9ICtsZW5ndGhcbiAgICAsIGJ5dGVMZW5ndGggICA9IHRvTGVuZ3RoKG51bWJlckxlbmd0aCk7XG4gIGlmKG51bWJlckxlbmd0aCAhPSBieXRlTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgcmV0dXJuIGJ5dGVMZW5ndGg7XG59O1xuXG5pZighJHR5cGVkLkFCVil7XG4gICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCl7XG4gICAgdmFyIGJ5dGVMZW5ndGggPSB2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzKHRoaXMsIGxlbmd0aCk7XG4gICAgdGhpcy5fYiAgICAgICA9IGFycmF5RmlsbC5jYWxsKEFycmF5KGJ5dGVMZW5ndGgpLCAwKTtcbiAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcbiAgfTtcblxuICAkRGF0YVZpZXcgPSBmdW5jdGlvbiBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJERhdGFWaWV3LCBEQVRBX1ZJRVcpO1xuICAgIGFuSW5zdGFuY2UoYnVmZmVyLCAkQXJyYXlCdWZmZXIsIERBVEFfVklFVyk7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJ1ZmZlclskTEVOR1RIXVxuICAgICAgLCBvZmZzZXQgICAgICAgPSB0b0ludGVnZXIoYnl0ZU9mZnNldCk7XG4gICAgaWYob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPiBidWZmZXJMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuICAgIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID09PSB1bmRlZmluZWQgPyBidWZmZXJMZW5ndGggLSBvZmZzZXQgOiB0b0xlbmd0aChieXRlTGVuZ3RoKTtcbiAgICBpZihvZmZzZXQgKyBieXRlTGVuZ3RoID4gYnVmZmVyTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICB0aGlzWyRCVUZGRVJdID0gYnVmZmVyO1xuICAgIHRoaXNbJE9GRlNFVF0gPSBvZmZzZXQ7XG4gICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gIH07XG5cbiAgaWYoREVTQ1JJUFRPUlMpe1xuICAgIGFkZEdldHRlcigkQXJyYXlCdWZmZXIsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCVUZGRVIsICdfYicpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfTEVOR1RILCAnX2wnKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX09GRlNFVCwgJ19vJyk7XG4gIH1cblxuICByZWRlZmluZUFsbCgkRGF0YVZpZXdbUFJPVE9UWVBFXSwge1xuICAgIGdldEludDg6IGZ1bmN0aW9uIGdldEludDgoYnl0ZU9mZnNldCl7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdIDw8IDI0ID4+IDI0O1xuICAgIH0sXG4gICAgZ2V0VWludDg6IGZ1bmN0aW9uIGdldFVpbnQ4KGJ5dGVPZmZzZXQpe1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXTtcbiAgICB9LFxuICAgIGdldEludDE2OiBmdW5jdGlvbiBnZXRJbnQxNihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICByZXR1cm4gKGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXSkgPDwgMTYgPj4gMTY7XG4gICAgfSxcbiAgICBnZXRVaW50MTY6IGZ1bmN0aW9uIGdldFVpbnQxNihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICByZXR1cm4gYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MzI6IGZ1bmN0aW9uIGdldEludDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICByZXR1cm4gdW5wYWNrSTMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pKTtcbiAgICB9LFxuICAgIGdldFVpbnQzMjogZnVuY3Rpb24gZ2V0VWludDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICByZXR1cm4gdW5wYWNrSTMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pKSA+Pj4gMDtcbiAgICB9LFxuICAgIGdldEZsb2F0MzI6IGZ1bmN0aW9uIGdldEZsb2F0MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCAyMywgNCk7XG4gICAgfSxcbiAgICBnZXRGbG9hdDY0OiBmdW5jdGlvbiBnZXRGbG9hdDY0KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSwgNTIsIDgpO1xuICAgIH0sXG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJOCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2V0SW50MTY6IGZ1bmN0aW9uIHNldEludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDE2OiBmdW5jdGlvbiBzZXRVaW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRJbnQzMjogZnVuY3Rpb24gc2V0SW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRVaW50MzI6IGZ1bmN0aW9uIHNldFVpbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0MzI6IGZ1bmN0aW9uIHNldEZsb2F0MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0YzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRGbG9hdDY0OiBmdW5jdGlvbiBzZXRGbG9hdDY0KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIHBhY2tGNjQsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH1cbiAgfSk7XG59IGVsc2Uge1xuICBpZighZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgJEFycmF5QnVmZmVyOyAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgfSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3ICRBcnJheUJ1ZmZlciguNSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIH0pKXtcbiAgICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpe1xuICAgICAgcmV0dXJuIG5ldyBCYXNlQnVmZmVyKHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHModGhpcywgbGVuZ3RoKSk7XG4gICAgfTtcbiAgICB2YXIgQXJyYXlCdWZmZXJQcm90byA9ICRBcnJheUJ1ZmZlcltQUk9UT1RZUEVdID0gQmFzZUJ1ZmZlcltQUk9UT1RZUEVdO1xuICAgIGZvcih2YXIga2V5cyA9IGdPUE4oQmFzZUJ1ZmZlciksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgKXtcbiAgICAgIGlmKCEoKGtleSA9IGtleXNbaisrXSkgaW4gJEFycmF5QnVmZmVyKSloaWRlKCRBcnJheUJ1ZmZlciwga2V5LCBCYXNlQnVmZmVyW2tleV0pO1xuICAgIH07XG4gICAgaWYoIUxJQlJBUlkpQXJyYXlCdWZmZXJQcm90by5jb25zdHJ1Y3RvciA9ICRBcnJheUJ1ZmZlcjtcbiAgfVxuICAvLyBpT1MgU2FmYXJpIDcueCBidWdcbiAgdmFyIHZpZXcgPSBuZXcgJERhdGFWaWV3KG5ldyAkQXJyYXlCdWZmZXIoMikpXG4gICAgLCAkc2V0SW50OCA9ICREYXRhVmlld1tQUk9UT1RZUEVdLnNldEludDg7XG4gIHZpZXcuc2V0SW50OCgwLCAyMTQ3NDgzNjQ4KTtcbiAgdmlldy5zZXRJbnQ4KDEsIDIxNDc0ODM2NDkpO1xuICBpZih2aWV3LmdldEludDgoMCkgfHwgIXZpZXcuZ2V0SW50OCgxKSlyZWRlZmluZUFsbCgkRGF0YVZpZXdbUFJPVE9UWVBFXSwge1xuICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfSxcbiAgICBzZXRVaW50ODogZnVuY3Rpb24gc2V0VWludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfVxuICB9LCB0cnVlKTtcbn1cbnNldFRvU3RyaW5nVGFnKCRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcbnNldFRvU3RyaW5nVGFnKCREYXRhVmlldywgREFUQV9WSUVXKTtcbmhpZGUoJERhdGFWaWV3W1BST1RPVFlQRV0sICR0eXBlZC5WSUVXLCB0cnVlKTtcbmV4cG9ydHNbQVJSQVlfQlVGRkVSXSA9ICRBcnJheUJ1ZmZlcjtcbmV4cG9ydHNbREFUQV9WSUVXXSA9ICREYXRhVmlldztcbn0se1wiMTA2XCI6MTA2LFwiMTA4XCI6MTA4LFwiMTEzXCI6MTEzLFwiMjhcIjoyOCxcIjM0XCI6MzQsXCIzOFwiOjM4LFwiNDBcIjo0MCxcIjU4XCI6NTgsXCI2XCI6NixcIjY3XCI6NjcsXCI3MlwiOjcyLFwiODZcIjo4NixcIjlcIjo5LFwiOTJcIjo5Mn1dLDExMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsID0gX2RlcmVxXygzOClcbiAgLCBoaWRlICAgPSBfZGVyZXFfKDQwKVxuICAsIHVpZCAgICA9IF9kZXJlcV8oMTE0KVxuICAsIFRZUEVEICA9IHVpZCgndHlwZWRfYXJyYXknKVxuICAsIFZJRVcgICA9IHVpZCgndmlldycpXG4gICwgQUJWICAgID0gISEoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGdsb2JhbC5EYXRhVmlldylcbiAgLCBDT05TVFIgPSBBQlZcbiAgLCBpID0gMCwgbCA9IDksIFR5cGVkO1xuXG52YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9ycyA9IChcbiAgJ0ludDhBcnJheSxVaW50OEFycmF5LFVpbnQ4Q2xhbXBlZEFycmF5LEludDE2QXJyYXksVWludDE2QXJyYXksSW50MzJBcnJheSxVaW50MzJBcnJheSxGbG9hdDMyQXJyYXksRmxvYXQ2NEFycmF5J1xuKS5zcGxpdCgnLCcpO1xuXG53aGlsZShpIDwgbCl7XG4gIGlmKFR5cGVkID0gZ2xvYmFsW1R5cGVkQXJyYXlDb25zdHJ1Y3RvcnNbaSsrXV0pe1xuICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBUWVBFRCwgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICB9IGVsc2UgQ09OU1RSID0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBQlY6ICAgIEFCVixcbiAgQ09OU1RSOiBDT05TVFIsXG4gIFRZUEVEOiAgVFlQRUQsXG4gIFZJRVc6ICAgVklFV1xufTtcbn0se1wiMTE0XCI6MTE0LFwiMzhcIjozOCxcIjQwXCI6NDB9XSwxMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG59LHt9XSwxMTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBjb3JlICAgICAgICAgICA9IF9kZXJlcV8oMjMpXG4gICwgTElCUkFSWSAgICAgICAgPSBfZGVyZXFfKDU4KVxuICAsIHdrc0V4dCAgICAgICAgID0gX2RlcmVxXygxMTYpXG4gICwgZGVmaW5lUHJvcGVydHkgPSBfZGVyZXFfKDY3KS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xufSx7XCIxMTZcIjoxMTYsXCIyM1wiOjIzLFwiMzhcIjozOCxcIjU4XCI6NTgsXCI2N1wiOjY3fV0sMTE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IF9kZXJlcV8oMTE3KTtcbn0se1wiMTE3XCI6MTE3fV0sMTE3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzdG9yZSAgICAgID0gX2RlcmVxXyg5NCkoJ3drcycpXG4gICwgdWlkICAgICAgICA9IF9kZXJlcV8oMTE0KVxuICAsIFN5bWJvbCAgICAgPSBfZGVyZXFfKDM4KS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbn0se1wiMTE0XCI6MTE0LFwiMzhcIjozOCxcIjk0XCI6OTR9XSwxMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsYXNzb2YgICA9IF9kZXJlcV8oMTcpXG4gICwgSVRFUkFUT1IgID0gX2RlcmVxXygxMTcpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gX2RlcmVxXyg1Nik7XG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjMpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiMTdcIjoxNyxcIjIzXCI6MjMsXCI1NlwiOjU2fV0sMTE5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkcmUgICAgID0gX2RlcmVxXyg4OCkoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVnRXhwJywge2VzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KXsgcmV0dXJuICRyZShpdCk7IH19KTtcblxufSx7XCIzMlwiOjMyLFwiODhcIjo4OH1dLDEyMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7Y29weVdpdGhpbjogX2RlcmVxXyg4KX0pO1xuXG5fZGVyZXFfKDUpKCdjb3B5V2l0aGluJyk7XG59LHtcIjMyXCI6MzIsXCI1XCI6NSxcIjhcIjo4fV0sMTIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkZXZlcnkgID0gX2RlcmVxXygxMikoNCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oOTYpKFtdLmV2ZXJ5LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuNSAvIDE1LjQuNC4xNiBBcnJheS5wcm90b3R5cGUuZXZlcnkoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2ZpbGw6IF9kZXJlcV8oOSl9KTtcblxuX2RlcmVxXyg1KSgnZmlsbCcpO1xufSx7XCIzMlwiOjMyLFwiNVwiOjUsXCI5XCI6OX1dLDEyMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGZpbHRlciA9IF9kZXJlcV8oMTIpKDIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDk2KShbXS5maWx0ZXIsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjkgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGZpbmQgICA9IF9kZXJlcV8oMTIpKDYpXG4gICwgS0VZICAgICA9ICdmaW5kSW5kZXgnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbl9kZXJlcV8oNSkoS0VZKTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI1XCI6NX1dLDEyNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGZpbmQgICA9IF9kZXJlcV8oMTIpKDUpXG4gICwgS0VZICAgICA9ICdmaW5kJ1xuICAsIGZvcmNlZCAgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbl9kZXJlcV8oNSkoS0VZKTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI1XCI6NX1dLDEyNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsICRmb3JFYWNoID0gX2RlcmVxXygxMikoMClcbiAgLCBTVFJJQ1QgICA9IF9kZXJlcV8oOTYpKFtdLmZvckVhY2gsIHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFTVFJJQ1QsICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IF9kZXJlcV8oMjUpXG4gICwgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvT2JqZWN0ICAgICAgID0gX2RlcmVxXygxMDkpXG4gICwgY2FsbCAgICAgICAgICAgPSBfZGVyZXFfKDUxKVxuICAsIGlzQXJyYXlJdGVyICAgID0gX2RlcmVxXyg0NilcbiAgLCB0b0xlbmd0aCAgICAgICA9IF9kZXJlcV8oMTA4KVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gX2RlcmVxXygyNClcbiAgLCBnZXRJdGVyRm4gICAgICA9IF9kZXJlcV8oMTE4KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg1NCkoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cbn0se1wiMTA4XCI6MTA4LFwiMTA5XCI6MTA5LFwiMTE4XCI6MTE4LFwiMjRcIjoyNCxcIjI1XCI6MjUsXCIzMlwiOjMyLFwiNDZcIjo0NixcIjUxXCI6NTEsXCI1NFwiOjU0fV0sMTI4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgID0gX2RlcmVxXygzMilcbiAgLCAkaW5kZXhPZiAgICAgID0gX2RlcmVxXygxMSkoZmFsc2UpXG4gICwgJG5hdGl2ZSAgICAgICA9IFtdLmluZGV4T2ZcbiAgLCBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFfZGVyZXFfKDk2KSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjExIC8gMTUuNC40LjE0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSAwICovKXtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbn0se1wiMTFcIjoxMSxcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTI5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIyLjEuMi4yIC8gMTUuNC4zLjIgQXJyYXkuaXNBcnJheShhcmcpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywge2lzQXJyYXk6IF9kZXJlcV8oNDcpfSk7XG59LHtcIjMyXCI6MzIsXCI0N1wiOjQ3fV0sMTMwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gX2RlcmVxXyg1KVxuICAsIHN0ZXAgICAgICAgICAgICAgPSBfZGVyZXFfKDU1KVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSBfZGVyZXFfKDU2KVxuICAsIHRvSU9iamVjdCAgICAgICAgPSBfZGVyZXFfKDEwNyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXyg1MykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG59LHtcIjEwN1wiOjEwNyxcIjVcIjo1LFwiNTNcIjo1MyxcIjU1XCI6NTUsXCI1NlwiOjU2fV0sMTMxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUuam9pbihzZXBhcmF0b3IpXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCB0b0lPYmplY3QgPSBfZGVyZXFfKDEwNylcbiAgLCBhcnJheUpvaW4gPSBbXS5qb2luO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2Ugc3RyaW5nc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoX2RlcmVxXyg0NSkgIT0gT2JqZWN0IHx8ICFfZGVyZXFfKDk2KShhcnJheUpvaW4pKSwgJ0FycmF5Jywge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7XG4gICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRvSU9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbn0se1wiMTA3XCI6MTA3LFwiMzJcIjozMixcIjQ1XCI6NDUsXCI5NlwiOjk2fV0sMTMyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b0lPYmplY3QgICAgID0gX2RlcmVxXygxMDcpXG4gICwgdG9JbnRlZ2VyICAgICA9IF9kZXJlcV8oMTA2KVxuICAsIHRvTGVuZ3RoICAgICAgPSBfZGVyZXFfKDEwOClcbiAgLCAkbmF0aXZlICAgICAgID0gW10ubGFzdEluZGV4T2ZcbiAgLCBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0ubGFzdEluZGV4T2YoMSwgLTApIDwgMDtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhX2RlcmVxXyg5NikoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xNCAvIDE1LjQuNC4xNSBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ID0gQFsqLTFdICovKXtcbiAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgaWYoTkVHQVRJVkVfWkVSTylyZXR1cm4gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCh0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gbGVuZ3RoIC0gMTtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlpbmRleCA9IE1hdGgubWluKGluZGV4LCB0b0ludGVnZXIoYXJndW1lbnRzWzFdKSk7XG4gICAgaWYoaW5kZXggPCAwKWluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgZm9yKDtpbmRleCA+PSAwOyBpbmRleC0tKWlmKGluZGV4IGluIE8paWYoT1tpbmRleF0gPT09IHNlYXJjaEVsZW1lbnQpcmV0dXJuIGluZGV4IHx8IDA7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59KTtcbn0se1wiMTA2XCI6MTA2LFwiMTA3XCI6MTA3LFwiMTA4XCI6MTA4LFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRtYXAgICAgPSBfZGVyZXFfKDEyKSgxKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg5NikoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEzNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gX2RlcmVxXygyNCk7XG5cbi8vIFdlYktpdCBBcnJheS5vZiBpc24ndCBnZW5lcmljXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcbiAgb2Y6IGZ1bmN0aW9uIG9mKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGFMZW4gICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShhTGVuKTtcbiAgICB3aGlsZShhTGVuID4gaW5kZXgpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gYUxlbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbn0se1wiMjRcIjoyNCxcIjMyXCI6MzIsXCIzNFwiOjM0fV0sMTM1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkcmVkdWNlID0gX2RlcmVxXygxMyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oOTYpKFtdLnJlZHVjZVJpZ2h0LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pe1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c1sxXSwgdHJ1ZSk7XG4gIH1cbn0pO1xufSx7XCIxM1wiOjEzLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRyZWR1Y2UgPSBfZGVyZXFfKDEzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg5NikoW10ucmVkdWNlLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pe1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c1sxXSwgZmFsc2UpO1xuICB9XG59KTtcbn0se1wiMTNcIjoxMyxcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTM3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgID0gX2RlcmVxXygzMilcbiAgLCBodG1sICAgICAgID0gX2RlcmVxXyg0MSlcbiAgLCBjb2YgICAgICAgID0gX2RlcmVxXygxOClcbiAgLCB0b0luZGV4ICAgID0gX2RlcmVxXygxMDUpXG4gICwgdG9MZW5ndGggICA9IF9kZXJlcV8oMTA4KVxuICAsIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICBpZihodG1sKWFycmF5U2xpY2UuY2FsbChodG1sKTtcbn0pLCAnQXJyYXknLCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKXtcbiAgICB2YXIgbGVuICAgPSB0b0xlbmd0aCh0aGlzLmxlbmd0aClcbiAgICAgICwga2xhc3MgPSBjb2YodGhpcyk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgaWYoa2xhc3MgPT0gJ0FycmF5JylyZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXG4gICAgICAsIHVwVG8gICA9IHRvSW5kZXgoZW5kLCBsZW4pXG4gICAgICAsIHNpemUgICA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydClcbiAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcbiAgICAgICwgaSAgICAgID0gMDtcbiAgICBmb3IoOyBpIDwgc2l6ZTsgaSsrKWNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcbiAgICAgIDogdGhpc1tzdGFydCArIGldO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn0pO1xufSx7XCIxMDVcIjoxMDUsXCIxMDhcIjoxMDgsXCIxOFwiOjE4LFwiMzJcIjozMixcIjM0XCI6MzQsXCI0MVwiOjQxfV0sMTM4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkc29tZSAgID0gX2RlcmVxXygxMikoMyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oOTYpKFtdLnNvbWUsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJHNvbWUodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEzOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpXG4gICwgdG9PYmplY3QgID0gX2RlcmVxXygxMDkpXG4gICwgZmFpbHMgICAgID0gX2RlcmVxXygzNClcbiAgLCAkc29ydCAgICAgPSBbXS5zb3J0XG4gICwgdGVzdCAgICAgID0gWzEsIDIsIDNdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IGJ1Z1xuICB0ZXN0LnNvcnQobnVsbCk7XG4gIC8vIE9sZCBXZWJLaXRcbn0pIHx8ICFfZGVyZXFfKDk2KSgkc29ydCkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKXtcbiAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcbiAgICAgID8gJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiM1wiOjMsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjk2XCI6OTZ9XSwxNDA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXyg5MSkoJ0FycmF5Jyk7XG59LHtcIjkxXCI6OTF9XSwxNDE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7bm93OiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH19KTtcbn0se1wiMzJcIjozMn1dLDE0MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGZhaWxzICAgPSBfZGVyZXFfKDM0KVxuICAsIGdldFRpbWUgPSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuXG52YXIgbHogPSBmdW5jdGlvbihudW0pe1xuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcbn07XG5cbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG5ldyBEYXRlKC01ZTEzIC0gMSkudG9JU09TdHJpbmcoKSAhPSAnMDM4NS0wNy0yNVQwNzowNjozOS45OTlaJztcbn0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICBuZXcgRGF0ZShOYU4pLnRvSVNPU3RyaW5nKCk7XG59KSksICdEYXRlJywge1xuICB0b0lTT1N0cmluZzogZnVuY3Rpb24gdG9JU09TdHJpbmcoKXtcbiAgICBpZighaXNGaW5pdGUoZ2V0VGltZS5jYWxsKHRoaXMpKSl0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgICB2YXIgZCA9IHRoaXNcbiAgICAgICwgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKVxuICAgICAgLCBtID0gZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICAgICAgLCBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuICAgIHJldHVybiBzICsgKCcwMDAwMCcgKyBNYXRoLmFicyh5KSkuc2xpY2UocyA/IC02IDogLTQpICtcbiAgICAgICctJyArIGx6KGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgbHooZC5nZXRVVENEYXRlKCkpICtcbiAgICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xuICAgICAgJzonICsgbHooZC5nZXRVVENTZWNvbmRzKCkpICsgJy4nICsgKG0gPiA5OSA/IG0gOiAnMCcgKyBseihtKSkgKyAnWic7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiMzRcIjozNH1dLDE0MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvT2JqZWN0ICAgID0gX2RlcmVxXygxMDkpXG4gICwgdG9QcmltaXRpdmUgPSBfZGVyZXFfKDExMCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG5ldyBEYXRlKE5hTikudG9KU09OKCkgIT09IG51bGwgfHwgRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoe3RvSVNPU3RyaW5nOiBmdW5jdGlvbigpeyByZXR1cm4gMTsgfX0pICE9PSAxO1xufSksICdEYXRlJywge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTihrZXkpe1xuICAgIHZhciBPICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgICAsIHB2ID0gdG9QcmltaXRpdmUoTyk7XG4gICAgcmV0dXJuIHR5cGVvZiBwdiA9PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUocHYpID8gbnVsbCA6IE8udG9JU09TdHJpbmcoKTtcbiAgfVxufSk7XG59LHtcIjEwOVwiOjEwOSxcIjExMFwiOjExMCxcIjMyXCI6MzIsXCIzNFwiOjM0fV0sMTQ0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBUT19QUklNSVRJVkUgPSBfZGVyZXFfKDExNykoJ3RvUHJpbWl0aXZlJylcbiAgLCBwcm90byAgICAgICAgPSBEYXRlLnByb3RvdHlwZTtcblxuaWYoIShUT19QUklNSVRJVkUgaW4gcHJvdG8pKV9kZXJlcV8oNDApKHByb3RvLCBUT19QUklNSVRJVkUsIF9kZXJlcV8oMjYpKTtcbn0se1wiMTE3XCI6MTE3LFwiMjZcIjoyNixcIjQwXCI6NDB9XSwxNDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIERhdGVQcm90byAgICA9IERhdGUucHJvdG90eXBlXG4gICwgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSdcbiAgLCBUT19TVFJJTkcgICAgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nICAgID0gRGF0ZVByb3RvW1RPX1NUUklOR11cbiAgLCBnZXRUaW1lICAgICAgPSBEYXRlUHJvdG8uZ2V0VGltZTtcbmlmKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpe1xuICBfZGVyZXFfKDg3KShEYXRlUHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbn0se1wiODdcIjo4N31dLDE0NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0Z1bmN0aW9uJywge2JpbmQ6IF9kZXJlcV8oMTYpfSk7XG59LHtcIjE2XCI6MTYsXCIzMlwiOjMyfV0sMTQ3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCAgICAgICA9IF9kZXJlcV8oNDkpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc0KVxuICAsIEhBU19JTlNUQU5DRSAgID0gX2RlcmVxXygxMTcpKCdoYXNJbnN0YW5jZScpXG4gICwgRnVuY3Rpb25Qcm90byAgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyAxOS4yLjMuNiBGdW5jdGlvbi5wcm90b3R5cGVbQEBoYXNJbnN0YW5jZV0oVilcbmlmKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKV9kZXJlcV8oNjcpLmYoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pe1xuICBpZih0eXBlb2YgdGhpcyAhPSAnZnVuY3Rpb24nIHx8ICFpc09iamVjdChPKSlyZXR1cm4gZmFsc2U7XG4gIGlmKCFpc09iamVjdCh0aGlzLnByb3RvdHlwZSkpcmV0dXJuIE8gaW5zdGFuY2VvZiB0aGlzO1xuICAvLyBmb3IgZW52aXJvbm1lbnQgdy9vIG5hdGl2ZSBgQEBoYXNJbnN0YW5jZWAgbG9naWMgZW5vdWdoIGBpbnN0YW5jZW9mYCwgYnV0IGFkZCB0aGlzOlxuICB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpaWYodGhpcy5wcm90b3R5cGUgPT09IE8pcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn19KTtcbn0se1wiMTE3XCI6MTE3LFwiNDlcIjo0OSxcIjY3XCI6NjcsXCI3NFwiOjc0fV0sMTQ4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkUCAgICAgICAgID0gX2RlcmVxXyg2NykuZlxuICAsIGNyZWF0ZURlc2MgPSBfZGVyZXFfKDg1KVxuICAsIGhhcyAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIEZQcm90byAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGVcbiAgLCBuYW1lUkUgICAgID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvXG4gICwgTkFNRSAgICAgICA9ICduYW1lJztcblxudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCBfZGVyZXFfKDI4KSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICAsIG5hbWUgPSAoJycgKyB0aGF0KS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgaGFzKHRoYXQsIE5BTUUpIHx8ICFpc0V4dGVuc2libGUodGhhdCkgfHwgZFAodGhhdCwgTkFNRSwgY3JlYXRlRGVzYyg1LCBuYW1lKSk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG59LHtcIjI4XCI6MjgsXCIzOVwiOjM5LFwiNjdcIjo2NyxcIjg1XCI6ODV9XSwxNDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IF9kZXJlcV8oMTkpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjIpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbn0se1wiMTlcIjoxOSxcIjIyXCI6MjJ9XSwxNTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGxvZzFwICAgPSBfZGVyZXFfKDYwKVxuICAsIHNxcnQgICAgPSBNYXRoLnNxcnRcbiAgLCAkYWNvc2ggID0gTWF0aC5hY29zaDtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhY29zaFxuICAvLyBWOCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNTA5XG4gICYmIE1hdGguZmxvb3IoJGFjb3NoKE51bWJlci5NQVhfVkFMVUUpKSA9PSA3MTBcbiAgLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFjb3NoKEluZmluaXR5KSAtPiBOYU4gXG4gICYmICRhY29zaChJbmZpbml0eSkgPT0gSW5maW5pdHlcbiksICdNYXRoJywge1xuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCl7XG4gICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IHggPiA5NDkwNjI2NS42MjQyNTE1NlxuICAgICAgPyBNYXRoLmxvZyh4KSArIE1hdGguTE4yXG4gICAgICA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNjBcIjo2MH1dLDE1MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGFzaW5oICA9IE1hdGguYXNpbmg7XG5cbmZ1bmN0aW9uIGFzaW5oKHgpe1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hc2luaCgwKSAtPiAtMCBcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXNpbmggJiYgMSAvICRhc2luaCgwKSA+IDApLCAnTWF0aCcsIHthc2luaDogYXNpbmh9KTtcbn0se1wiMzJcIjozMn1dLDE1MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGF0YW5oICA9IE1hdGguYXRhbmg7XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hdGFuaCgtMCkgLT4gMCBcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXRhbmggJiYgMSAvICRhdGFuaCgtMCkgPCAwKSwgJ01hdGgnLCB7XG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE1MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBzaWduICAgID0gX2RlcmVxXyg2MSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI2MVwiOjYxfV0sMTU0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xMSBNYXRoLmNsejMyKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNsejMyOiBmdW5jdGlvbiBjbHozMih4KXtcbiAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMxIC0gTWF0aC5mbG9vcihNYXRoLmxvZyh4ICsgMC41KSAqIE1hdGguTE9HMkUpIDogMzI7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTU1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY29zaDogZnVuY3Rpb24gY29zaCh4KXtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE1NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRleHBtMSAgPSBfZGVyZXFfKDU5KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoJGV4cG0xICE9IE1hdGguZXhwbTEpLCAnTWF0aCcsIHtleHBtMTogJGV4cG0xfSk7XG59LHtcIjMyXCI6MzIsXCI1OVwiOjU5fV0sMTU3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgc2lnbiAgICAgID0gX2RlcmVxXyg2MSlcbiAgLCBwb3cgICAgICAgPSBNYXRoLnBvd1xuICAsIEVQU0lMT04gICA9IHBvdygyLCAtNTIpXG4gICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcbiAgLCBNQVgzMiAgICAgPSBwb3coMiwgMTI3KSAqICgyIC0gRVBTSUxPTjMyKVxuICAsIE1JTjMyICAgICA9IHBvdygyLCAtMTI2KTtcblxudmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XG59O1xuXG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XG4gICAgdmFyICRhYnMgID0gTWF0aC5hYnMoeClcbiAgICAgICwgJHNpZ24gPSBzaWduKHgpXG4gICAgICAsIGEsIHJlc3VsdDtcbiAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcbiAgICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gICAgcmVzdWx0ID0gYSAtIChhIC0gJGFicyk7XG4gICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgICByZXR1cm4gJHNpZ24gKiByZXN1bHQ7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNjFcIjo2MX1dLDE1ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBhYnMgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBzdW0gID0gMFxuICAgICAgLCBpICAgID0gMFxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBsYXJnID0gMFxuICAgICAgLCBhcmcsIGRpdjtcbiAgICB3aGlsZShpIDwgYUxlbil7XG4gICAgICBhcmcgPSBhYnMoYXJndW1lbnRzW2krK10pO1xuICAgICAgaWYobGFyZyA8IGFyZyl7XG4gICAgICAgIGRpdiAgPSBsYXJnIC8gYXJnO1xuICAgICAgICBzdW0gID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZihhcmcgPiAwKXtcbiAgICAgICAgZGl2ICA9IGFyZyAvIGxhcmc7XG4gICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG4gICAgICB9IGVsc2Ugc3VtICs9IGFyZztcbiAgICB9XG4gICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTU5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkaW11bCAgID0gTWF0aC5pbXVsO1xuXG4vLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gJGltdWwoMHhmZmZmZmZmZiwgNSkgIT0gLTUgfHwgJGltdWwubGVuZ3RoICE9IDI7XG59KSwgJ01hdGgnLCB7XG4gIGltdWw6IGZ1bmN0aW9uIGltdWwoeCwgeSl7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuICAgICAgLCB4biA9ICt4XG4gICAgICAsIHluID0gK3lcbiAgICAgICwgeGwgPSBVSU5UMTYgJiB4blxuICAgICAgLCB5bCA9IFVJTlQxNiAmIHluO1xuICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUlOVDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUlOVDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiMzRcIjozNH1dLDE2MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE2MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2xvZzFwOiBfZGVyZXFfKDYwKX0pO1xufSx7XCIzMlwiOjMyLFwiNjBcIjo2MH1dLDE2MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTYzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtzaWduOiBfZGVyZXFfKDYxKX0pO1xufSx7XCIzMlwiOjMyLFwiNjFcIjo2MX1dLDE2NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgZXhwbTEgICA9IF9kZXJlcV8oNTkpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4vLyBWOCBuZWFyIENocm9taXVtIDM4IGhhcyBhIHByb2JsZW0gd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICFNYXRoLnNpbmgoLTJlLTE3KSAhPSAtMmUtMTc7XG59KSwgJ01hdGgnLCB7XG4gIHNpbmg6IGZ1bmN0aW9uIHNpbmgoeCl7XG4gICAgcmV0dXJuIE1hdGguYWJzKHggPSAreCkgPCAxXG4gICAgICA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyXG4gICAgICA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKE1hdGguRSAvIDIpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjM0XCI6MzQsXCI1OVwiOjU5fV0sMTY1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBleHBtMSAgID0gX2RlcmVxXyg1OSlcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KXtcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreClcbiAgICAgICwgYiA9IGV4cG0xKC14KTtcbiAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjU5XCI6NTl9XSwxNjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KXtcbiAgICByZXR1cm4gKGl0ID4gMCA/IE1hdGguZmxvb3IgOiBNYXRoLmNlaWwpKGl0KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBoYXMgICAgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgY29mICAgICAgICAgICAgICAgPSBfZGVyZXFfKDE4KVxuICAsIGluaGVyaXRJZlJlcXVpcmVkID0gX2RlcmVxXyg0MylcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICA9IF9kZXJlcV8oMTEwKVxuICAsIGZhaWxzICAgICAgICAgICAgID0gX2RlcmVxXygzNClcbiAgLCBnT1BOICAgICAgICAgICAgICA9IF9kZXJlcV8oNzIpLmZcbiAgLCBnT1BEICAgICAgICAgICAgICA9IF9kZXJlcV8oNzApLmZcbiAgLCBkUCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjcpLmZcbiAgLCAkdHJpbSAgICAgICAgICAgICA9IF9kZXJlcV8oMTAyKS50cmltXG4gICwgTlVNQkVSICAgICAgICAgICAgPSAnTnVtYmVyJ1xuICAsICROdW1iZXIgICAgICAgICAgID0gZ2xvYmFsW05VTUJFUl1cbiAgLCBCYXNlICAgICAgICAgICAgICA9ICROdW1iZXJcbiAgLCBwcm90byAgICAgICAgICAgICA9ICROdW1iZXIucHJvdG90eXBlXG4gIC8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xuICAsIEJST0tFTl9DT0YgICAgICAgID0gY29mKF9kZXJlcV8oNjYpKHByb3RvKSkgPT0gTlVNQkVSXG4gICwgVFJJTSAgICAgICAgICAgICAgPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbihhcmd1bWVudCl7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKXtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKVxuICAgICAgLCB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSl7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZih0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMClyZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmKGZpcnN0ID09PSA0OCl7XG4gICAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XG4gICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdCA6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspe1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZihjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKXtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSl7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWVcbiAgICAgICwgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24oKXsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvcih2YXIga2V5cyA9IF9kZXJlcV8oMjgpID8gZ09QTihCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspe1xuICAgIGlmKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpe1xuICAgICAgZFAoJE51bWJlciwga2V5LCBnT1BEKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfVxuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIF9kZXJlcV8oODcpKGdsb2JhbCwgTlVNQkVSLCAkTnVtYmVyKTtcbn1cbn0se1wiMTAyXCI6MTAyLFwiMTEwXCI6MTEwLFwiMThcIjoxOCxcIjI4XCI6MjgsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjM5XCI6MzksXCI0M1wiOjQzLFwiNjZcIjo2NixcIjY3XCI6NjcsXCI3MFwiOjcwLFwiNzJcIjo3MixcIjg3XCI6ODd9XSwxNjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjEgTnVtYmVyLkVQU0lMT05cbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge0VQU0lMT046IE1hdGgucG93KDIsIC01Mil9KTtcbn0se1wiMzJcIjozMn1dLDE2OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgX2lzRmluaXRlID0gX2RlcmVxXygzOCkuaXNGaW5pdGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpe1xuICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgX2lzRmluaXRlKGl0KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCIzOFwiOjM4fV0sMTcwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7aXNJbnRlZ2VyOiBfZGVyZXFfKDQ4KX0pO1xufSx7XCIzMlwiOjMyLFwiNDhcIjo0OH1dLDE3MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpe1xuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE3MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCBpc0ludGVnZXIgPSBfZGVyZXFfKDQ4KVxuICAsIGFicyAgICAgICA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpe1xuICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSAweDFmZmZmZmZmZmZmZmZmO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjQ4XCI6NDh9XSwxNzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01BWF9TQUZFX0lOVEVHRVI6IDB4MWZmZmZmZmZmZmZmZmZ9KTtcbn0se1wiMzJcIjozMn1dLDE3NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01JTl9TQUZFX0lOVEVHRVI6IC0weDFmZmZmZmZmZmZmZmZmfSk7XG59LHtcIjMyXCI6MzJ9XSwxNzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCAkcGFyc2VGbG9hdCA9IF9kZXJlcV8oODEpO1xuLy8gMjAuMS4yLjEyIE51bWJlci5wYXJzZUZsb2F0KHN0cmluZylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE51bWJlci5wYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0KSwgJ051bWJlcicsIHtwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdH0pO1xufSx7XCIzMlwiOjMyLFwiODFcIjo4MX1dLDE3NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCAkcGFyc2VJbnQgPSBfZGVyZXFfKDgyKTtcbi8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE51bWJlci5wYXJzZUludCAhPSAkcGFyc2VJbnQpLCAnTnVtYmVyJywge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcbn0se1wiMzJcIjozMixcIjgyXCI6ODJ9XSwxNzc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9JbnRlZ2VyICAgID0gX2RlcmVxXygxMDYpXG4gICwgYU51bWJlclZhbHVlID0gX2RlcmVxXyg0KVxuICAsIHJlcGVhdCAgICAgICA9IF9kZXJlcV8oMTAxKVxuICAsICR0b0ZpeGVkICAgICA9IDEuLnRvRml4ZWRcbiAgLCBmbG9vciAgICAgICAgPSBNYXRoLmZsb29yXG4gICwgZGF0YSAgICAgICAgID0gWzAsIDAsIDAsIDAsIDAsIDBdXG4gICwgRVJST1IgICAgICAgID0gJ051bWJlci50b0ZpeGVkOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnXG4gICwgWkVSTyAgICAgICAgID0gJzAnO1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbihuLCBjKXtcbiAgdmFyIGkgID0gLTFcbiAgICAsIGMyID0gYztcbiAgd2hpbGUoKytpIDwgNil7XG4gICAgYzIgKz0gbiAqIGRhdGFbaV07XG4gICAgZGF0YVtpXSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xudmFyIGRpdmlkZSA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgaSA9IDZcbiAgICAsIGMgPSAwO1xuICB3aGlsZSgtLWkgPj0gMCl7XG4gICAgYyArPSBkYXRhW2ldO1xuICAgIGRhdGFbaV0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG52YXIgbnVtVG9TdHJpbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgaSA9IDZcbiAgICAsIHMgPSAnJztcbiAgd2hpbGUoLS1pID49IDApe1xuICAgIGlmKHMgIT09ICcnIHx8IGkgPT09IDAgfHwgZGF0YVtpXSAhPT0gMCl7XG4gICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2ldKTtcbiAgICAgIHMgPSBzID09PSAnJyA/IHQgOiBzICsgcmVwZWF0LmNhbGwoWkVSTywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgfVxuICB9IHJldHVybiBzO1xufTtcbnZhciBwb3cgPSBmdW5jdGlvbih4LCBuLCBhY2Mpe1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xudmFyIGxvZyA9IGZ1bmN0aW9uKHgpe1xuICB2YXIgbiAgPSAwXG4gICAgLCB4MiA9IHg7XG4gIHdoaWxlKHgyID49IDQwOTYpe1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSh4MiA+PSAyKXtcbiAgICBuICArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICghISR0b0ZpeGVkICYmIChcbiAgMC4wMDAwOC50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG4gIDAuOS50b0ZpeGVkKDApICE9PSAnMScgfHxcbiAgMS4yNTUudG9GaXhlZCgyKSAhPT0gJzEuMjUnIHx8XG4gIDEwMDAwMDAwMDAwMDAwMDAxMjguLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgJHRvRml4ZWQuY2FsbCh7fSk7XG59KSksICdOdW1iZXInLCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpe1xuICAgIHZhciB4ID0gYU51bWJlclZhbHVlKHRoaXMsIEVSUk9SKVxuICAgICAgLCBmID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKVxuICAgICAgLCBzID0gJydcbiAgICAgICwgbSA9IFpFUk9cbiAgICAgICwgZSwgeiwgaiwgaztcbiAgICBpZihmIDwgMCB8fCBmID4gMjApdGhyb3cgUmFuZ2VFcnJvcihFUlJPUik7XG4gICAgaWYoeCAhPSB4KXJldHVybiAnTmFOJztcbiAgICBpZih4IDw9IC0xZTIxIHx8IHggPj0gMWUyMSlyZXR1cm4gU3RyaW5nKHgpO1xuICAgIGlmKHggPCAwKXtcbiAgICAgIHMgPSAnLSc7XG4gICAgICB4ID0gLXg7XG4gICAgfVxuICAgIGlmKHggPiAxZS0yMSl7XG4gICAgICBlID0gbG9nKHggKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8geCAqIHBvdygyLCAtZSwgMSkgOiB4IC8gcG93KDIsIGUsIDEpO1xuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuICAgICAgZSA9IDUyIC0gZTtcbiAgICAgIGlmKGUgPiAwKXtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIGogPSBmO1xuICAgICAgICB3aGlsZShqID49IDcpe1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlKGogPj0gMjMpe1xuICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZSgxIDw8IGopO1xuICAgICAgICBtdWx0aXBseSgxLCAxKTtcbiAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICBtID0gbnVtVG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcbiAgICAgICAgbSA9IG51bVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbChaRVJPLCBmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoZiA+IDApe1xuICAgICAgayA9IG0ubGVuZ3RoO1xuICAgICAgbSA9IHMgKyAoayA8PSBmID8gJzAuJyArIHJlcGVhdC5jYWxsKFpFUk8sIGYgLSBrKSArIG0gOiBtLnNsaWNlKDAsIGsgLSBmKSArICcuJyArIG0uc2xpY2UoayAtIGYpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHMgKyBtO1xuICAgIH0gcmV0dXJuIG07XG4gIH1cbn0pO1xufSx7XCIxMDFcIjoxMDEsXCIxMDZcIjoxMDYsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjRcIjo0fV0sMTc4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSBfZGVyZXFfKDMyKVxuICAsICRmYWlscyAgICAgICA9IF9kZXJlcV8oMzQpXG4gICwgYU51bWJlclZhbHVlID0gX2RlcmVxXyg0KVxuICAsICR0b1ByZWNpc2lvbiA9IDEuLnRvUHJlY2lzaW9uO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICgkZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gSUU3LVxuICByZXR1cm4gJHRvUHJlY2lzaW9uLmNhbGwoMSwgdW5kZWZpbmVkKSAhPT0gJzEnO1xufSkgfHwgISRmYWlscyhmdW5jdGlvbigpe1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICAkdG9QcmVjaXNpb24uY2FsbCh7fSk7XG59KSksICdOdW1iZXInLCB7XG4gIHRvUHJlY2lzaW9uOiBmdW5jdGlvbiB0b1ByZWNpc2lvbihwcmVjaXNpb24pe1xuICAgIHZhciB0aGF0ID0gYU51bWJlclZhbHVlKHRoaXMsICdOdW1iZXIjdG9QcmVjaXNpb246IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICAgIHJldHVybiBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQpIDogJHRvUHJlY2lzaW9uLmNhbGwodGhhdCwgcHJlY2lzaW9uKTsgXG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiMzRcIjozNCxcIjRcIjo0fV0sMTc5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IF9kZXJlcV8oNjUpfSk7XG59LHtcIjMyXCI6MzIsXCI2NVwiOjY1fV0sMTgwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiBfZGVyZXFfKDY2KX0pO1xufSx7XCIzMlwiOjMyLFwiNjZcIjo2Nn1dLDE4MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuLy8gMTkuMS4yLjMgLyAxNS4yLjMuNyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXygyOCksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydGllczogX2RlcmVxXyg2OCl9KTtcbn0se1wiMjhcIjoyOCxcIjMyXCI6MzIsXCI2OFwiOjY4fV0sMTgyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXygyOCksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IF9kZXJlcV8oNjcpLmZ9KTtcbn0se1wiMjhcIjoyOCxcIjMyXCI6MzIsXCI2N1wiOjY3fV0sMTgzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgbWV0YSAgICAgPSBfZGVyZXFfKDYyKS5vbkZyZWV6ZTtcblxuX2RlcmVxXyg3OCkoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG59LHtcIjQ5XCI6NDksXCI2MlwiOjYyLFwiNzhcIjo3OH1dLDE4NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTA3KVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfZGVyZXFfKDcwKS5mO1xuXG5fZGVyZXFfKDc4KSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG59LHtcIjEwN1wiOjEwNyxcIjcwXCI6NzAsXCI3OFwiOjc4fV0sMTg1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5fZGVyZXFfKDc4KSgnZ2V0T3duUHJvcGVydHlOYW1lcycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfZGVyZXFfKDcxKS5mO1xufSk7XG59LHtcIjcxXCI6NzEsXCI3OFwiOjc4fV0sMTg2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAsICRnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzQpO1xuXG5fZGVyZXFfKDc4KSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xufSx7XCIxMDlcIjoxMDksXCI3NFwiOjc0LFwiNzhcIjo3OH1dLDE4NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTEgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSk7XG5cbl9kZXJlcV8oNzgpKCdpc0V4dGVuc2libGUnLCBmdW5jdGlvbigkaXNFeHRlbnNpYmxlKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWUgOiBmYWxzZTtcbiAgfTtcbn0pO1xufSx7XCI0OVwiOjQ5LFwiNzhcIjo3OH1dLDE4ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTIgT2JqZWN0LmlzRnJvemVuKE8pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KTtcblxuX2RlcmVxXyg3OCkoJ2lzRnJvemVuJywgZnVuY3Rpb24oJGlzRnJvemVuKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRnJvemVuID8gJGlzRnJvemVuKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xufSx7XCI0OVwiOjQ5LFwiNzhcIjo3OH1dLDE4OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTMgT2JqZWN0LmlzU2VhbGVkKE8pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KTtcblxuX2RlcmVxXyg3OCkoJ2lzU2VhbGVkJywgZnVuY3Rpb24oJGlzU2VhbGVkKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzU2VhbGVkID8gJGlzU2VhbGVkKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xufSx7XCI0OVwiOjQ5LFwiNzhcIjo3OH1dLDE5MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2lzOiBfZGVyZXFfKDg5KX0pO1xufSx7XCIzMlwiOjMyLFwiODlcIjo4OX1dLDE5MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IF9kZXJlcV8oMTA5KVxuICAsICRrZXlzICAgID0gX2RlcmVxXyg3Nik7XG5cbl9kZXJlcV8oNzgpKCdrZXlzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG59LHtcIjEwOVwiOjEwOSxcIjc2XCI6NzYsXCI3OFwiOjc4fV0sMTkyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xNSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgbWV0YSAgICAgPSBfZGVyZXFfKDYyKS5vbkZyZWV6ZTtcblxuX2RlcmVxXyg3OCkoJ3ByZXZlbnRFeHRlbnNpb25zJywgZnVuY3Rpb24oJHByZXZlbnRFeHRlbnNpb25zKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zICYmIGlzT2JqZWN0KGl0KSA/ICRwcmV2ZW50RXh0ZW5zaW9ucyhtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xufSx7XCI0OVwiOjQ5LFwiNjJcIjo2MixcIjc4XCI6Nzh9XSwxOTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIG1ldGEgICAgID0gX2RlcmVxXyg2Mikub25GcmVlemU7XG5cbl9kZXJlcV8oNzgpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xuICByZXR1cm4gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG59LHtcIjQ5XCI6NDksXCI2MlwiOjYyLFwiNzhcIjo3OH1dLDE5NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiBfZGVyZXFfKDkwKS5zZXR9KTtcbn0se1wiMzJcIjozMixcIjkwXCI6OTB9XSwxOTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IF9kZXJlcV8oMTcpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtfZGVyZXFfKDExNykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIF9kZXJlcV8oODcpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbn0se1wiMTE3XCI6MTE3LFwiMTdcIjoxNyxcIjg3XCI6ODd9XSwxOTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCAkcGFyc2VGbG9hdCA9IF9kZXJlcV8oODEpO1xuLy8gMTguMi40IHBhcnNlRmxvYXQoc3RyaW5nKVxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksIHtwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdH0pO1xufSx7XCIzMlwiOjMyLFwiODFcIjo4MX1dLDE5NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCAkcGFyc2VJbnQgPSBfZGVyZXFfKDgyKTtcbi8vIDE4LjIuNSBwYXJzZUludChzdHJpbmcsIHJhZGl4KVxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VJbnQgIT0gJHBhcnNlSW50KSwge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcbn0se1wiMzJcIjozMixcIjgyXCI6ODJ9XSwxOTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IF9kZXJlcV8oNTgpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBjdHggICAgICAgICAgICAgICAgPSBfZGVyZXFfKDI1KVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IF9kZXJlcV8oMTcpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IF9kZXJlcV8oMylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSBfZGVyZXFfKDYpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gX2RlcmVxXygzNylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSBfZGVyZXFfKDk1KVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTA0KS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSBfZGVyZXFfKDY0KSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbX2RlcmVxXygxMTcpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gX2RlcmVxXyg4NikoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbl9kZXJlcV8oOTIpKCRQcm9taXNlLCBQUk9NSVNFKTtcbl9kZXJlcV8oOTEpKFBST01JU0UpO1xuV3JhcHBlciA9IF9kZXJlcV8oMjMpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIF9kZXJlcV8oNTQpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xufSx7XCIxMDRcIjoxMDQsXCIxMTdcIjoxMTcsXCIxN1wiOjE3LFwiMjNcIjoyMyxcIjI1XCI6MjUsXCIzXCI6MyxcIjMyXCI6MzIsXCIzN1wiOjM3LFwiMzhcIjozOCxcIjQ5XCI6NDksXCI1NFwiOjU0LFwiNThcIjo1OCxcIjZcIjo2LFwiNjRcIjo2NCxcIjg2XCI6ODYsXCI5MVwiOjkxLFwiOTJcIjo5MixcIjk1XCI6OTV9XSwxOTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpXG4gICwgYW5PYmplY3QgID0gX2RlcmVxXyg3KVxuICAsIHJBcHBseSAgICA9IChfZGVyZXFfKDM4KS5SZWZsZWN0IHx8IHt9KS5hcHBseVxuICAsIGZBcHBseSAgICA9IEZ1bmN0aW9uLmFwcGx5O1xuLy8gTVMgRWRnZSBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByQXBwbHkoZnVuY3Rpb24oKXt9KTtcbn0pLCAnUmVmbGVjdCcsIHtcbiAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KXtcbiAgICB2YXIgVCA9IGFGdW5jdGlvbih0YXJnZXQpXG4gICAgICAsIEwgPSBhbk9iamVjdChhcmd1bWVudHNMaXN0KTtcbiAgICByZXR1cm4gckFwcGx5ID8gckFwcGx5KFQsIHRoaXNBcmd1bWVudCwgTCkgOiBmQXBwbHkuY2FsbChULCB0aGlzQXJndW1lbnQsIEwpO1xuICB9XG59KTtcbn0se1wiM1wiOjMsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjM4XCI6MzgsXCI3XCI6N31dLDIwMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXG52YXIgJGV4cG9ydCAgICA9IF9kZXJlcV8oMzIpXG4gICwgY3JlYXRlICAgICA9IF9kZXJlcV8oNjYpXG4gICwgYUZ1bmN0aW9uICA9IF9kZXJlcV8oMylcbiAgLCBhbk9iamVjdCAgID0gX2RlcmVxXyg3KVxuICAsIGlzT2JqZWN0ICAgPSBfZGVyZXFfKDQ5KVxuICAsIGZhaWxzICAgICAgPSBfZGVyZXFfKDM0KVxuICAsIGJpbmQgICAgICAgPSBfZGVyZXFfKDE2KVxuICAsIHJDb25zdHJ1Y3QgPSAoX2RlcmVxXygzOCkuUmVmbGVjdCB8fCB7fSkuY29uc3RydWN0O1xuXG4vLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbi8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcbnZhciBORVdfVEFSR0VUX0JVRyA9IGZhaWxzKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pO1xudmFyIEFSR1NfQlVHID0gIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9KTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChORVdfVEFSR0VUX0JVRyB8fCBBUkdTX0JVRyksICdSZWZsZWN0Jywge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyosIG5ld1RhcmdldCovKXtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICBhbk9iamVjdChhcmdzKTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZihBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmKFRhcmdldCA9PSBuZXdUYXJnZXQpe1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQ7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvICAgID0gbmV3VGFyZ2V0LnByb3RvdHlwZVxuICAgICAgLCBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAsIHJlc3VsdCAgID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcbn0se1wiMTZcIjoxNixcIjNcIjozLFwiMzJcIjozMixcIjM0XCI6MzQsXCIzOFwiOjM4LFwiNDlcIjo0OSxcIjY2XCI6NjYsXCI3XCI6N31dLDIwMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxudmFyIGRQICAgICAgICAgID0gX2RlcmVxXyg2NylcbiAgLCAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgYW5PYmplY3QgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9QcmltaXRpdmUgPSBfZGVyZXFfKDExMCk7XG5cbi8vIE1TIEVkZ2UgaGFzIGJyb2tlbiBSZWZsZWN0LmRlZmluZVByb3BlcnR5IC0gdGhyb3dpbmcgaW5zdGVhZCBvZiByZXR1cm5pbmcgZmFsc2VcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShkUC5mKHt9LCAxLCB7dmFsdWU6IDF9KSwgMSwge3ZhbHVlOiAyfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUocHJvcGVydHlLZXksIHRydWUpO1xuICAgIGFuT2JqZWN0KGF0dHJpYnV0ZXMpO1xuICAgIHRyeSB7XG4gICAgICBkUC5mKHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xufSx7XCIxMTBcIjoxMTAsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjY3XCI6NjcsXCI3XCI6N31dLDIwMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCBnT1BEICAgICA9IF9kZXJlcV8oNzApLmZcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHZhciBkZXNjID0gZ09QRChhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3XCI6NyxcIjcwXCI6NzB9XSwyMDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xudmFyIEVudW1lcmF0ZSA9IGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IGFuT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdmFyIGtleXMgPSB0aGlzLl9rID0gW10gICAgICAgLy8ga2V5c1xuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIGl0ZXJhdGVkKWtleXMucHVzaChrZXkpO1xufTtcbl9kZXJlcV8oNTIpKEVudW1lcmF0ZSwgJ09iamVjdCcsIGZ1bmN0aW9uKCl7XG4gIHZhciB0aGF0ID0gdGhpc1xuICAgICwga2V5cyA9IHRoYXQuX2tcbiAgICAsIGtleTtcbiAgZG8ge1xuICAgIGlmKHRoYXQuX2kgPj0ga2V5cy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgfSB3aGlsZSghKChrZXkgPSBrZXlzW3RoYXQuX2krK10pIGluIHRoYXQuX3QpKTtcbiAgcmV0dXJuIHt2YWx1ZToga2V5LCBkb25lOiBmYWxzZX07XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBlbnVtZXJhdGU6IGZ1bmN0aW9uIGVudW1lcmF0ZSh0YXJnZXQpe1xuICAgIHJldHVybiBuZXcgRW51bWVyYXRlKHRhcmdldCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNTJcIjo1MixcIjdcIjo3fV0sMjA0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyIGdPUEQgICAgID0gX2RlcmVxXyg3MClcbiAgLCAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjdcIjo3LFwiNzBcIjo3MH1dLDIwNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjggUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsIGdldFByb3RvID0gX2RlcmVxXyg3NClcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCl7XG4gICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjdcIjo3LFwiNzRcIjo3NH1dLDIwNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgZ09QRCAgICAgICAgICAgPSBfZGVyZXFfKDcwKVxuICAsIGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3NClcbiAgLCBoYXMgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGlzT2JqZWN0ICAgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBhbk9iamVjdCAgICAgICA9IF9kZXJlcV8oNyk7XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5LyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxuICAgICwgZGVzYywgcHJvdG87XG4gIGlmKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKXJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZihkZXNjID0gZ09QRC5mKHRhcmdldCwgcHJvcGVydHlLZXkpKXJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICA/IGRlc2MudmFsdWVcbiAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtnZXQ6IGdldH0pO1xufSx7XCIzMlwiOjMyLFwiMzlcIjozOSxcIjQ5XCI6NDksXCI3XCI6NyxcIjcwXCI6NzAsXCI3NFwiOjc0fV0sMjA3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDIwODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBhbk9iamVjdCAgICAgID0gX2RlcmVxXyg3KVxuICAsICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGlzRXh0ZW5zaWJsZTogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHRhcmdldCl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUodGFyZ2V0KSA6IHRydWU7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiN1wiOjd9XSwyMDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge293bktleXM6IF9kZXJlcV8oODApfSk7XG59LHtcIjMyXCI6MzIsXCI4MFwiOjgwfV0sMjEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBhbk9iamVjdCAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCRwcmV2ZW50RXh0ZW5zaW9ucykkcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjdcIjo3fV0sMjExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCBzZXRQcm90byA9IF9kZXJlcV8oOTApO1xuXG5pZihzZXRQcm90bykkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHNldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKXtcbiAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcbiAgICB0cnkge1xuICAgICAgc2V0UHJvdG8uc2V0KHRhcmdldCwgcHJvdG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiOTBcIjo5MH1dLDIxMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjEzIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYgWywgcmVjZWl2ZXJdKVxudmFyIGRQICAgICAgICAgICAgID0gX2RlcmVxXyg2NylcbiAgLCBnT1BEICAgICAgICAgICA9IF9kZXJlcV8oNzApXG4gICwgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc0KVxuICAsIGhhcyAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgY3JlYXRlRGVzYyAgICAgPSBfZGVyZXFfKDg1KVxuICAsIGFuT2JqZWN0ICAgICAgID0gX2RlcmVxXyg3KVxuICAsIGlzT2JqZWN0ICAgICAgID0gX2RlcmVxXyg0OSk7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxuICAgICwgb3duRGVzYyAgPSBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXG4gICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuICBpZighb3duRGVzYyl7XG4gICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSl7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xuICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9IGdPUEQuZihyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldDogc2V0fSk7XG59LHtcIjMyXCI6MzIsXCIzOVwiOjM5LFwiNDlcIjo0OSxcIjY3XCI6NjcsXCI3XCI6NyxcIjcwXCI6NzAsXCI3NFwiOjc0LFwiODVcIjo4NX1dLDIxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGluaGVyaXRJZlJlcXVpcmVkID0gX2RlcmVxXyg0MylcbiAgLCBkUCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjcpLmZcbiAgLCBnT1BOICAgICAgICAgICAgICA9IF9kZXJlcV8oNzIpLmZcbiAgLCBpc1JlZ0V4cCAgICAgICAgICA9IF9kZXJlcV8oNTApXG4gICwgJGZsYWdzICAgICAgICAgICAgPSBfZGVyZXFfKDM2KVxuICAsICRSZWdFeHAgICAgICAgICAgID0gZ2xvYmFsLlJlZ0V4cFxuICAsIEJhc2UgICAgICAgICAgICAgID0gJFJlZ0V4cFxuICAsIHByb3RvICAgICAgICAgICAgID0gJFJlZ0V4cC5wcm90b3R5cGVcbiAgLCByZTEgICAgICAgICAgICAgICA9IC9hL2dcbiAgLCByZTIgICAgICAgICAgICAgICA9IC9hL2dcbiAgLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG4gICwgQ09SUkVDVF9ORVcgICAgICAgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cbmlmKF9kZXJlcV8oMjgpICYmICghQ09SUkVDVF9ORVcgfHwgX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmUyW19kZXJlcV8oMTE3KSgnbWF0Y2gnKV0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpe1xuICAkUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHAsIGYpe1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHBcbiAgICAgICwgcGlSRSA9IGlzUmVnRXhwKHApXG4gICAgICAsIGZpVSAgPSBmID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuICF0aVJFICYmIHBpUkUgJiYgcC5jb25zdHJ1Y3RvciA9PT0gJFJlZ0V4cCAmJiBmaVUgPyBwXG4gICAgICA6IGluaGVyaXRJZlJlcXVpcmVkKENPUlJFQ1RfTkVXXG4gICAgICAgID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKVxuICAgICAgICA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKVxuICAgICAgLCB0aVJFID8gdGhpcyA6IHByb3RvLCAkUmVnRXhwKTtcbiAgfTtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24oa2V5KXtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIEJhc2Vba2V5XTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24oaXQpeyBCYXNlW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICBmb3IodmFyIGtleXMgPSBnT1BOKEJhc2UpLCBpID0gMDsga2V5cy5sZW5ndGggPiBpOyApcHJveHkoa2V5c1tpKytdKTtcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuICBfZGVyZXFfKDg3KShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbn1cblxuX2RlcmVxXyg5MSkoJ1JlZ0V4cCcpO1xufSx7XCIxMTdcIjoxMTcsXCIyOFwiOjI4LFwiMzRcIjozNCxcIjM2XCI6MzYsXCIzOFwiOjM4LFwiNDNcIjo0MyxcIjUwXCI6NTAsXCI2N1wiOjY3LFwiNzJcIjo3MixcIjg3XCI6ODcsXCI5MVwiOjkxfV0sMjE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmKF9kZXJlcV8oMjgpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKV9kZXJlcV8oNjcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogX2RlcmVxXygzNilcbn0pO1xufSx7XCIyOFwiOjI4LFwiMzZcIjozNixcIjY3XCI6Njd9XSwyMTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQEBtYXRjaCBsb2dpY1xuX2RlcmVxXygzNSkoJ21hdGNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCl7XG4gIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBtYXRjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRtYXRjaF07XG59KTtcbn0se1wiMzVcIjozNX1dLDIxNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBAQHJlcGxhY2UgbG9naWNcbl9kZXJlcV8oMzUpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2Upe1xuICAvLyAyMS4xLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpXG4gIHJldHVybiBbZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICB9LCAkcmVwbGFjZV07XG59KTtcbn0se1wiMzVcIjozNX1dLDIxNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBAQHNlYXJjaCBsb2dpY1xuX2RlcmVxXygzNSkoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIFNFQVJDSCwgJHNlYXJjaCl7XG4gIC8vIDIxLjEuMy4xNSBTdHJpbmcucHJvdG90eXBlLnNlYXJjaChyZWdleHApXG4gIHJldHVybiBbZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICB9LCAkc2VhcmNoXTtcbn0pO1xufSx7XCIzNVwiOjM1fV0sMjE4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIEBAc3BsaXQgbG9naWNcbl9kZXJlcV8oMzUpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFNQTElULCAkc3BsaXQpe1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCAgID0gX2RlcmVxXyg1MClcbiAgICAsIF9zcGxpdCAgICAgPSAkc3BsaXRcbiAgICAsICRwdXNoICAgICAgPSBbXS5wdXNoXG4gICAgLCAkU1BMSVQgICAgID0gJ3NwbGl0J1xuICAgICwgTEVOR1RIICAgICA9ICdsZW5ndGgnXG4gICAgLCBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApe1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmKCFpc1JlZ0V4cChzZXBhcmF0b3IpKXJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmKCFOUENHKXNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZShtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKXtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpe1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgaWYoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspaWYoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZihsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSl7XG4gICAgICAgIGlmKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSl7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KXtcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xufSx7XCIzNVwiOjM1LFwiNTBcIjo1MH1dLDIxOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5fZGVyZXFfKDIxNCk7XG52YXIgYW5PYmplY3QgICAgPSBfZGVyZXFfKDcpXG4gICwgJGZsYWdzICAgICAgPSBfZGVyZXFfKDM2KVxuICAsIERFU0NSSVBUT1JTID0gX2RlcmVxXygyOClcbiAgLCBUT19TVFJJTkcgICA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgICA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24oZm4pe1xuICBfZGVyZXFfKDg3KShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZuLCB0cnVlKTtcbn07XG5cbi8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbmlmKF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7c291cmNlOiAnYScsIGZsYWdzOiAnYid9KSAhPSAnL2EvYic7IH0pKXtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICByZXR1cm4gJy8nLmNvbmNhdChSLnNvdXJjZSwgJy8nLFxuICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFERVNDUklQVE9SUyAmJiBSIGluc3RhbmNlb2YgUmVnRXhwID8gJGZsYWdzLmNhbGwoUikgOiB1bmRlZmluZWQpO1xuICB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG59IGVsc2UgaWYoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKXtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbn1cbn0se1wiMjE0XCI6MjE0LFwiMjhcIjoyOCxcIjM0XCI6MzQsXCIzNlwiOjM2LFwiN1wiOjcsXCI4N1wiOjg3fV0sMjIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSBfZGVyZXFfKDE5KTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDIyKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG59LHtcIjE5XCI6MTksXCIyMlwiOjIyfV0sMjIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjIgU3RyaW5nLnByb3RvdHlwZS5hbmNob3IobmFtZSlcbl9kZXJlcV8oOTkpKCdhbmNob3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFuY2hvcihuYW1lKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICduYW1lJywgbmFtZSk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjMgU3RyaW5nLnByb3RvdHlwZS5iaWcoKVxuX2RlcmVxXyg5OSkoJ2JpZycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYmlnKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JpZycsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjQgU3RyaW5nLnByb3RvdHlwZS5ibGluaygpXG5fZGVyZXFfKDk5KSgnYmxpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJsaW5rKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JsaW5rJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNSBTdHJpbmcucHJvdG90eXBlLmJvbGQoKVxuX2RlcmVxXyg5OSkoJ2JvbGQnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJvbGQoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjI1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkYXQgICAgID0gX2RlcmVxXyg5NykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiOTdcIjo5N31dLDIyNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMS4xLjMuNiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKHNlYXJjaFN0cmluZyBbLCBlbmRQb3NpdGlvbl0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCB0b0xlbmd0aCAgPSBfZGVyZXFfKDEwOClcbiAgLCBjb250ZXh0ICAgPSBfZGVyZXFfKDk4KVxuICAsIEVORFNfV0lUSCA9ICdlbmRzV2l0aCdcbiAgLCAkZW5kc1dpdGggPSAnJ1tFTkRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzMpKEVORFNfV0lUSCksICdTdHJpbmcnLCB7XG4gIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKVxuICAgICAgLCBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIGxlbiAgICA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxuICAgICAgLCBlbmQgICAgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pXG4gICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkZW5kc1dpdGhcbiAgICAgID8gJGVuZHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBlbmQpXG4gICAgICA6IHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcbn0se1wiMTA4XCI6MTA4LFwiMzJcIjozMixcIjMzXCI6MzMsXCI5OFwiOjk4fV0sMjI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjYgU3RyaW5nLnByb3RvdHlwZS5maXhlZCgpXG5fZGVyZXFfKDk5KSgnZml4ZWQnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZpeGVkKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNyBTdHJpbmcucHJvdG90eXBlLmZvbnRjb2xvcihjb2xvcilcbl9kZXJlcV8oOTkpKCdmb250Y29sb3InLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRjb2xvcihjb2xvcil7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnY29sb3InLCBjb2xvcik7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjI5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjggU3RyaW5nLnByb3RvdHlwZS5mb250c2l6ZShzaXplKVxuX2RlcmVxXyg5OSkoJ2ZvbnRzaXplJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBmb250c2l6ZShzaXplKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdzaXplJywgc2l6ZSk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjMwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9JbmRleCAgICAgICAgPSBfZGVyZXFfKDEwNSlcbiAgLCBmcm9tQ2hhckNvZGUgICA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbiAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG4vLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcbiAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciByZXMgID0gW11cbiAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgaSAgICA9IDBcbiAgICAgICwgY29kZTtcbiAgICB3aGlsZShhTGVuID4gaSl7XG4gICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xuICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXG4gICAgICApO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG59LHtcIjEwNVwiOjEwNSxcIjMyXCI6MzJ9XSwyMzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgY29udGV4dCAgPSBfZGVyZXFfKDk4KVxuICAsIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDMzKShJTkNMVURFUyksICdTdHJpbmcnLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjMzXCI6MzMsXCI5OFwiOjk4fV0sMjMyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjkgU3RyaW5nLnByb3RvdHlwZS5pdGFsaWNzKClcbl9kZXJlcV8oOTkpKCdpdGFsaWNzJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBpdGFsaWNzKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2knLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIzMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IF9kZXJlcV8oOTcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5fZGVyZXFfKDUzKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcbn0se1wiNTNcIjo1MyxcIjk3XCI6OTd9XSwyMzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTAgU3RyaW5nLnByb3RvdHlwZS5saW5rKHVybClcbl9kZXJlcV8oOTkpKCdsaW5rJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBsaW5rKHVybCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjM1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvSU9iamVjdCA9IF9kZXJlcV8oMTA3KVxuICAsIHRvTGVuZ3RoICA9IF9kZXJlcV8oMTA4KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcbiAgICB2YXIgdHBsICA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpXG4gICAgICAsIGxlbiAgPSB0b0xlbmd0aCh0cGwubGVuZ3RoKVxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXMgID0gW11cbiAgICAgICwgaSAgICA9IDA7XG4gICAgd2hpbGUobGVuID4gaSl7XG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcbiAgICAgIGlmKGkgPCBhTGVuKXJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xufSx7XCIxMDdcIjoxMDcsXCIxMDhcIjoxMDgsXCIzMlwiOjMyfV0sMjM2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXG4gIHJlcGVhdDogX2RlcmVxXygxMDEpXG59KTtcbn0se1wiMTAxXCI6MTAxLFwiMzJcIjozMn1dLDIzNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMSBTdHJpbmcucHJvdG90eXBlLnNtYWxsKClcbl9kZXJlcV8oOTkpKCdzbWFsbCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gc21hbGwoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc21hbGwnLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIzODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b0xlbmd0aCAgICA9IF9kZXJlcV8oMTA4KVxuICAsIGNvbnRleHQgICAgID0gX2RlcmVxXyg5OClcbiAgLCBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJ1xuICAsICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzMpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgdmFyIHRoYXQgICA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSClcbiAgICAgICwgaW5kZXggID0gdG9MZW5ndGgoTWF0aC5taW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSlcbiAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRzdGFydHNXaXRoXG4gICAgICA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcbiAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcbn0se1wiMTA4XCI6MTA4LFwiMzJcIjozMixcIjMzXCI6MzMsXCI5OFwiOjk4fV0sMjM5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEyIFN0cmluZy5wcm90b3R5cGUuc3RyaWtlKClcbl9kZXJlcV8oOTkpKCdzdHJpa2UnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN0cmlrZSgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdHJpa2UnLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDI0MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5fZGVyZXFfKDk5KSgnc3ViJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzdWIoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3ViJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyNDE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5zdXAoKVxuX2RlcmVxXyg5OSkoJ3N1cCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gc3VwKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1cCcsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjQyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDIxLjEuMy4yNSBTdHJpbmcucHJvdG90eXBlLnRyaW0oKVxuX2RlcmVxXygxMDIpKCd0cmltJywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbSgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcbiAgfTtcbn0pO1xufSx7XCIxMDJcIjoxMDJ9XSwyNDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBoYXMgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgREVTQ1JJUFRPUlMgICAgPSBfZGVyZXFfKDI4KVxuICAsICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCByZWRlZmluZSAgICAgICA9IF9kZXJlcV8oODcpXG4gICwgTUVUQSAgICAgICAgICAgPSBfZGVyZXFfKDYyKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IF9kZXJlcV8oMzQpXG4gICwgc2hhcmVkICAgICAgICAgPSBfZGVyZXFfKDk0KVxuICAsIHNldFRvU3RyaW5nVGFnID0gX2RlcmVxXyg5MilcbiAgLCB1aWQgICAgICAgICAgICA9IF9kZXJlcV8oMTE0KVxuICAsIHdrcyAgICAgICAgICAgID0gX2RlcmVxXygxMTcpXG4gICwgd2tzRXh0ICAgICAgICAgPSBfZGVyZXFfKDExNilcbiAgLCB3a3NEZWZpbmUgICAgICA9IF9kZXJlcV8oMTE1KVxuICAsIGtleU9mICAgICAgICAgID0gX2RlcmVxXyg1NylcbiAgLCBlbnVtS2V5cyAgICAgICA9IF9kZXJlcV8oMzEpXG4gICwgaXNBcnJheSAgICAgICAgPSBfZGVyZXFfKDQ3KVxuICAsIGFuT2JqZWN0ICAgICAgID0gX2RlcmVxXyg3KVxuICAsIHRvSU9iamVjdCAgICAgID0gX2RlcmVxXygxMDcpXG4gICwgdG9QcmltaXRpdmUgICAgPSBfZGVyZXFfKDExMClcbiAgLCBjcmVhdGVEZXNjICAgICA9IF9kZXJlcV8oODUpXG4gICwgX2NyZWF0ZSAgICAgICAgPSBfZGVyZXFfKDY2KVxuICAsIGdPUE5FeHQgICAgICAgID0gX2RlcmVxXyg3MSlcbiAgLCAkR09QRCAgICAgICAgICA9IF9kZXJlcV8oNzApXG4gICwgJERQICAgICAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAsICRrZXlzICAgICAgICAgID0gX2RlcmVxXyg3NilcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIF9kZXJlcV8oNzIpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgX2RlcmVxXyg3NykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIF9kZXJlcV8oNzMpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFfZGVyZXFfKDU4KSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgX2RlcmVxXyg0MCkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG59LHtcIjEwN1wiOjEwNyxcIjExMFwiOjExMCxcIjExNFwiOjExNCxcIjExNVwiOjExNSxcIjExNlwiOjExNixcIjExN1wiOjExNyxcIjI4XCI6MjgsXCIzMVwiOjMxLFwiMzJcIjozMixcIjM0XCI6MzQsXCIzOFwiOjM4LFwiMzlcIjozOSxcIjQwXCI6NDAsXCI0N1wiOjQ3LFwiNTdcIjo1NyxcIjU4XCI6NTgsXCI2MlwiOjYyLFwiNjZcIjo2NixcIjY3XCI6NjcsXCI3XCI6NyxcIjcwXCI6NzAsXCI3MVwiOjcxLFwiNzJcIjo3MixcIjczXCI6NzMsXCI3NlwiOjc2LFwiNzdcIjo3NyxcIjg1XCI6ODUsXCI4N1wiOjg3LFwiOTJcIjo5MixcIjk0XCI6OTR9XSwyNDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgJHR5cGVkICAgICAgID0gX2RlcmVxXygxMTMpXG4gICwgYnVmZmVyICAgICAgID0gX2RlcmVxXygxMTIpXG4gICwgYW5PYmplY3QgICAgID0gX2RlcmVxXyg3KVxuICAsIHRvSW5kZXggICAgICA9IF9kZXJlcV8oMTA1KVxuICAsIHRvTGVuZ3RoICAgICA9IF9kZXJlcV8oMTA4KVxuICAsIGlzT2JqZWN0ICAgICA9IF9kZXJlcV8oNDkpXG4gICwgQXJyYXlCdWZmZXIgID0gX2RlcmVxXygzOCkuQXJyYXlCdWZmZXJcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSBfZGVyZXFfKDk1KVxuICAsICRBcnJheUJ1ZmZlciA9IGJ1ZmZlci5BcnJheUJ1ZmZlclxuICAsICREYXRhVmlldyAgICA9IGJ1ZmZlci5EYXRhVmlld1xuICAsICRpc1ZpZXcgICAgICA9ICR0eXBlZC5BQlYgJiYgQXJyYXlCdWZmZXIuaXNWaWV3XG4gICwgJHNsaWNlICAgICAgID0gJEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZVxuICAsIFZJRVcgICAgICAgICA9ICR0eXBlZC5WSUVXXG4gICwgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQXJyYXlCdWZmZXIgIT09ICRBcnJheUJ1ZmZlciksIHtBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISR0eXBlZC5DT05TVFIsIEFSUkFZX0JVRkZFUiwge1xuICAvLyAyNC4xLjMuMSBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJnKVxuICBpc1ZpZXc6IGZ1bmN0aW9uIGlzVmlldyhpdCl7XG4gICAgcmV0dXJuICRpc1ZpZXcgJiYgJGlzVmlldyhpdCkgfHwgaXNPYmplY3QoaXQpICYmIFZJRVcgaW4gaXQ7XG4gIH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuVSArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhbmV3ICRBcnJheUJ1ZmZlcigyKS5zbGljZSgxLCB1bmRlZmluZWQpLmJ5dGVMZW5ndGg7XG59KSwgQVJSQVlfQlVGRkVSLCB7XG4gIC8vIDI0LjEuNC4zIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZShzdGFydCwgZW5kKVxuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCl7XG4gICAgaWYoJHNsaWNlICE9PSB1bmRlZmluZWQgJiYgZW5kID09PSB1bmRlZmluZWQpcmV0dXJuICRzbGljZS5jYWxsKGFuT2JqZWN0KHRoaXMpLCBzdGFydCk7IC8vIEZGIGZpeFxuICAgIHZhciBsZW4gICAgPSBhbk9iamVjdCh0aGlzKS5ieXRlTGVuZ3RoXG4gICAgICAsIGZpcnN0ICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcbiAgICAgICwgZmluYWwgID0gdG9JbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZCwgbGVuKVxuICAgICAgLCByZXN1bHQgPSBuZXcgKHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkQXJyYXlCdWZmZXIpKSh0b0xlbmd0aChmaW5hbCAtIGZpcnN0KSlcbiAgICAgICwgdmlld1MgID0gbmV3ICREYXRhVmlldyh0aGlzKVxuICAgICAgLCB2aWV3VCAgPSBuZXcgJERhdGFWaWV3KHJlc3VsdClcbiAgICAgICwgaW5kZXggID0gMDtcbiAgICB3aGlsZShmaXJzdCA8IGZpbmFsKXtcbiAgICAgIHZpZXdULnNldFVpbnQ4KGluZGV4KyssIHZpZXdTLmdldFVpbnQ4KGZpcnN0KyspKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5fZGVyZXFfKDkxKShBUlJBWV9CVUZGRVIpO1xufSx7XCIxMDVcIjoxMDUsXCIxMDhcIjoxMDgsXCIxMTJcIjoxMTIsXCIxMTNcIjoxMTMsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjM4XCI6MzgsXCI0OVwiOjQ5LFwiN1wiOjcsXCI5MVwiOjkxLFwiOTVcIjo5NX1dLDI0NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXygxMTMpLkFCViwge1xuICBEYXRhVmlldzogX2RlcmVxXygxMTIpLkRhdGFWaWV3XG59KTtcbn0se1wiMTEyXCI6MTEyLFwiMTEzXCI6MTEzLFwiMzJcIjozMn1dLDI0NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ0Zsb2F0MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjQ3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnRmxvYXQ2NCcsIDgsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gRmxvYXQ2NEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdJbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gSW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjQ5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnSW50MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI1MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ0ludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjUxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnVWludDE2JywgMiwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjUyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnVWludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjUzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnVWludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI1NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OENsYW1wZWRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59LCB0cnVlKTtcbn0se1wiMTExXCI6MTExfV0sMjU1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBlYWNoICAgICAgICAgPSBfZGVyZXFfKDEyKSgwKVxuICAsIHJlZGVmaW5lICAgICA9IF9kZXJlcV8oODcpXG4gICwgbWV0YSAgICAgICAgID0gX2RlcmVxXyg2MilcbiAgLCBhc3NpZ24gICAgICAgPSBfZGVyZXFfKDY1KVxuICAsIHdlYWsgICAgICAgICA9IF9kZXJlcV8oMjEpXG4gICwgaXNPYmplY3QgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBnZXRXZWFrICAgICAgPSBtZXRhLmdldFdlYWtcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlXG4gICwgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZVxuICAsIHRtcCAgICAgICAgICA9IHt9XG4gICwgSW50ZXJuYWxNYXA7XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbnZhciBtZXRob2RzID0ge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xuICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMikoJ1dlYWtNYXAnLCB3cmFwcGVyLCBtZXRob2RzLCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuaWYobmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XG4gIEludGVybmFsTWFwID0gd2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyKTtcbiAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIG1ldGEuTkVFRCA9IHRydWU7XG4gIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgcHJvdG8gID0gJFdlYWtNYXAucHJvdG90eXBlXG4gICAgICAsIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBpbnRlcm5hbCB3ZWFrbWFwIHNoaW1cbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpe1xuICAgICAgICBpZighdGhpcy5fZil0aGlzLl9mID0gbmV3IEludGVybmFsTWFwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fZltrZXldKGEsIGIpO1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxufSx7XCIxMlwiOjEyLFwiMjFcIjoyMSxcIjIyXCI6MjIsXCI0OVwiOjQ5LFwiNjJcIjo2MixcIjY1XCI6NjUsXCI4N1wiOjg3fV0sMjU2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciB3ZWFrID0gX2RlcmVxXygyMSk7XG5cbi8vIDIzLjQgV2Vha1NldCBPYmplY3RzXG5fZGVyZXFfKDIyKSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywgdmFsdWUsIHRydWUpO1xuICB9XG59LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG59LHtcIjIxXCI6MjEsXCIyMlwiOjIyfV0sMjU3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgJGluY2x1ZGVzID0gX2RlcmVxXygxMSkodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuX2RlcmVxXyg1KSgnaW5jbHVkZXMnKTtcbn0se1wiMTFcIjoxMSxcIjMyXCI6MzIsXCI1XCI6NX1dLDI1ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcndhbGRyb24vdGMzOS1ub3Rlcy9ibG9iL21hc3Rlci9lczYvMjAxNC0wOS9zZXB0LTI1Lm1kIzUxMC1nbG9iYWxhc2FwLWZvci1lbnF1ZXVpbmctYS1taWNyb3Rhc2tcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIG1pY3JvdGFzayA9IF9kZXJlcV8oNjQpKClcbiAgLCBwcm9jZXNzICAgPSBfZGVyZXFfKDM4KS5wcm9jZXNzXG4gICwgaXNOb2RlICAgID0gX2RlcmVxXygxOCkocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG4kZXhwb3J0KCRleHBvcnQuRywge1xuICBhc2FwOiBmdW5jdGlvbiBhc2FwKGZuKXtcbiAgICB2YXIgZG9tYWluID0gaXNOb2RlICYmIHByb2Nlc3MuZG9tYWluO1xuICAgIG1pY3JvdGFzayhkb21haW4gPyBkb21haW4uYmluZChmbikgOiBmbik7XG4gIH1cbn0pO1xufSx7XCIxOFwiOjE4LFwiMzJcIjozMixcIjM4XCI6MzgsXCI2NFwiOjY0fV0sMjU5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtaXMtZXJyb3JcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBjb2YgICAgID0gX2RlcmVxXygxOCk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRXJyb3InLCB7XG4gIGlzRXJyb3I6IGZ1bmN0aW9uIGlzRXJyb3IoaXQpe1xuICAgIHJldHVybiBjb2YoaXQpID09PSAnRXJyb3InO1xuICB9XG59KTtcbn0se1wiMThcIjoxOCxcIjMyXCI6MzJ9XSwyNjA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogX2RlcmVxXygyMCkoJ01hcCcpfSk7XG59LHtcIjIwXCI6MjAsXCIzMlwiOjMyfV0sMjYxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSl7XG4gICAgdmFyICR4MCA9IHgwID4+PiAwXG4gICAgICAsICR4MSA9IHgxID4+PiAwXG4gICAgICAsICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMjYyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGltdWxoOiBmdW5jdGlvbiBpbXVsaCh1LCB2KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsICR1ID0gK3VcbiAgICAgICwgJHYgPSArdlxuICAgICAgLCB1MCA9ICR1ICYgVUlOVDE2XG4gICAgICAsIHYwID0gJHYgJiBVSU5UMTZcbiAgICAgICwgdTEgPSAkdSA+PiAxNlxuICAgICAgLCB2MSA9ICR2ID4+IDE2XG4gICAgICAsIHQgID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcbiAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4gMTYpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDI2MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpc3ViaDogZnVuY3Rpb24gaXN1YmgoeDAsIHgxLCB5MCwgeTEpe1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMFxuICAgICAgLCAkeDEgPSB4MSA+Pj4gMFxuICAgICAgLCAkeTAgPSB5MCA+Pj4gMDtcbiAgICByZXR1cm4gJHgxIC0gKHkxID4+PiAwKSAtICgofiR4MCAmICR5MCB8IH4oJHgwIF4gJHkwKSAmICR4MCAtICR5MCA+Pj4gMCkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMjY0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsICR1ID0gK3VcbiAgICAgICwgJHYgPSArdlxuICAgICAgLCB1MCA9ICR1ICYgVUlOVDE2XG4gICAgICAsIHYwID0gJHYgJiBVSU5UMTZcbiAgICAgICwgdTEgPSAkdSA+Pj4gMTZcbiAgICAgICwgdjEgPSAkdiA+Pj4gMTZcbiAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4+IDE2KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwyNjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9PYmplY3QgICAgICAgID0gX2RlcmVxXygxMDkpXG4gICwgYUZ1bmN0aW9uICAgICAgID0gX2RlcmVxXygzKVxuICAsICRkZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oNjcpO1xuXG4vLyBCLjIuMi4yIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpXG5fZGVyZXFfKDI4KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9kZXJlcV8oNjkpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcil7XG4gICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtnZXQ6IGFGdW5jdGlvbihnZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbiAgfVxufSk7XG59LHtcIjEwOVwiOjEwOSxcIjI4XCI6MjgsXCIzXCI6MyxcIjMyXCI6MzIsXCI2N1wiOjY3LFwiNjlcIjo2OX1dLDI2NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b09iamVjdCAgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCBhRnVuY3Rpb24gICAgICAgPSBfZGVyZXFfKDMpXG4gICwgJGRlZmluZVByb3BlcnR5ID0gX2RlcmVxXyg2Nyk7XG5cbi8vIEIuMi4yLjMgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcilcbl9kZXJlcV8oMjgpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX2RlcmVxXyg2OSksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lU2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKXtcbiAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge3NldDogYUZ1bmN0aW9uKHNldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuICB9XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiMjhcIjoyOCxcIjNcIjozLFwiMzJcIjozMixcIjY3XCI6NjcsXCI2OVwiOjY5fV0sMjY3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCAkZW50cmllcyA9IF9kZXJlcV8oNzkpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3OVwiOjc5fV0sMjY4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG52YXIgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIG93bktleXMgICAgICAgID0gX2RlcmVxXyg4MClcbiAgLCB0b0lPYmplY3QgICAgICA9IF9kZXJlcV8oMTA3KVxuICAsIGdPUEQgICAgICAgICAgID0gX2RlcmVxXyg3MClcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IF9kZXJlcV8oMjQpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3Qpe1xuICAgIHZhciBPICAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAgICwgZ2V0RGVzYyA9IGdPUEQuZlxuICAgICAgLCBrZXlzICAgID0gb3duS2V5cyhPKVxuICAgICAgLCByZXN1bHQgID0ge31cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGtleXMubGVuZ3RoID4gaSljcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSA9IGtleXNbaSsrXSwgZ2V0RGVzYyhPLCBrZXkpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbn0se1wiMTA3XCI6MTA3LFwiMjRcIjoyNCxcIjMyXCI6MzIsXCI3MFwiOjcwLFwiODBcIjo4MH1dLDI2OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgICAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b09iamVjdCAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSBfZGVyZXFfKDExMClcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICAgPSBfZGVyZXFfKDc0KVxuICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9kZXJlcV8oNzApLmY7XG5cbi8vIEIuMi4yLjQgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cEdldHRlcl9fKFApXG5fZGVyZXFfKDI4KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9kZXJlcV8oNjkpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cEdldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cEdldHRlcl9fKFApe1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG4gICAgICAsIEQ7XG4gICAgZG8ge1xuICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5nZXQ7XG4gICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiMTEwXCI6MTEwLFwiMjhcIjoyOCxcIjMyXCI6MzIsXCI2OVwiOjY5LFwiNzBcIjo3MCxcIjc0XCI6NzR9XSwyNzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gX2RlcmVxXygxMDkpXG4gICwgdG9QcmltaXRpdmUgICAgICAgICAgICAgID0gX2RlcmVxXygxMTApXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgID0gX2RlcmVxXyg3NClcbiAgLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfZGVyZXFfKDcwKS5mO1xuXG4vLyBCLjIuMi41IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBTZXR0ZXJfXyhQKVxuX2RlcmVxXygyOCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfZGVyZXFfKDY5KSwgJ09iamVjdCcsIHtcbiAgX19sb29rdXBTZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBTZXR0ZXJfXyhQKXtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpXG4gICAgICAsIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKVxuICAgICAgLCBEO1xuICAgIGRvIHtcbiAgICAgIGlmKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpcmV0dXJuIEQuc2V0O1xuICAgIH0gd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcbiAgfVxufSk7XG59LHtcIjEwOVwiOjEwOSxcIjExMFwiOjExMCxcIjI4XCI6MjgsXCIzMlwiOjMyLFwiNjlcIjo2OSxcIjcwXCI6NzAsXCI3NFwiOjc0fV0sMjcxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICR2YWx1ZXMgPSBfZGVyZXFfKDc5KShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCl7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjc5XCI6Nzl9XSwyNzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxudmFyICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCBnbG9iYWwgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgY29yZSAgICAgICAgPSBfZGVyZXFfKDIzKVxuICAsIG1pY3JvdGFzayAgID0gX2RlcmVxXyg2NCkoKVxuICAsIE9CU0VSVkFCTEUgID0gX2RlcmVxXygxMTcpKCdvYnNlcnZhYmxlJylcbiAgLCBhRnVuY3Rpb24gICA9IF9kZXJlcV8oMylcbiAgLCBhbk9iamVjdCAgICA9IF9kZXJlcV8oNylcbiAgLCBhbkluc3RhbmNlICA9IF9kZXJlcV8oNilcbiAgLCByZWRlZmluZUFsbCA9IF9kZXJlcV8oODYpXG4gICwgaGlkZSAgICAgICAgPSBfZGVyZXFfKDQwKVxuICAsIGZvck9mICAgICAgID0gX2RlcmVxXygzNylcbiAgLCBSRVRVUk4gICAgICA9IGZvck9mLlJFVFVSTjtcblxudmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGZuKXtcbiAgcmV0dXJuIGZuID09IG51bGwgPyB1bmRlZmluZWQgOiBhRnVuY3Rpb24oZm4pO1xufTtcblxudmFyIGNsZWFudXBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICB2YXIgY2xlYW51cCA9IHN1YnNjcmlwdGlvbi5fYztcbiAgaWYoY2xlYW51cCl7XG4gICAgc3Vic2NyaXB0aW9uLl9jID0gdW5kZWZpbmVkO1xuICAgIGNsZWFudXAoKTtcbiAgfVxufTtcblxudmFyIHN1YnNjcmlwdGlvbkNsb3NlZCA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIHJldHVybiBzdWJzY3JpcHRpb24uX28gPT09IHVuZGVmaW5lZDtcbn07XG5cbnZhciBjbG9zZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIGlmKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl7XG4gICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgfVxufTtcblxudmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKG9ic2VydmVyLCBzdWJzY3JpYmVyKXtcbiAgYW5PYmplY3Qob2JzZXJ2ZXIpO1xuICB0aGlzLl9jID0gdW5kZWZpbmVkO1xuICB0aGlzLl9vID0gb2JzZXJ2ZXI7XG4gIG9ic2VydmVyID0gbmV3IFN1YnNjcmlwdGlvbk9ic2VydmVyKHRoaXMpO1xuICB0cnkge1xuICAgIHZhciBjbGVhbnVwICAgICAgPSBzdWJzY3JpYmVyKG9ic2VydmVyKVxuICAgICAgLCBzdWJzY3JpcHRpb24gPSBjbGVhbnVwO1xuICAgIGlmKGNsZWFudXAgIT0gbnVsbCl7XG4gICAgICBpZih0eXBlb2YgY2xlYW51cC51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJyljbGVhbnVwID0gZnVuY3Rpb24oKXsgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgICBlbHNlIGFGdW5jdGlvbihjbGVhbnVwKTtcbiAgICAgIHRoaXMuX2MgPSBjbGVhbnVwO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICByZXR1cm47XG4gIH0gaWYoc3Vic2NyaXB0aW9uQ2xvc2VkKHRoaXMpKWNsZWFudXBTdWJzY3JpcHRpb24odGhpcyk7XG59O1xuXG5TdWJzY3JpcHRpb24ucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCl7IGNsb3NlU3Vic2NyaXB0aW9uKHRoaXMpOyB9XG59KTtcblxudmFyIFN1YnNjcmlwdGlvbk9ic2VydmVyID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgdGhpcy5fcyA9IHN1YnNjcmlwdGlvbjtcbn07XG5cblN1YnNjcmlwdGlvbk9ic2VydmVyLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQodmFsdWUpe1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5uZXh0KTtcbiAgICAgICAgaWYobSlyZXR1cm4gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsb3NlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZihzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl0aHJvdyB2YWx1ZTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG4gICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5lcnJvcik7XG4gICAgICBpZighbSl0aHJvdyB2YWx1ZTtcbiAgICAgIHZhbHVlID0gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUodmFsdWUpe1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSl7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG4gICAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5jb21wbGV0ZSk7XG4gICAgICAgIHZhbHVlID0gbSA/IG0uY2FsbChvYnNlcnZlciwgdmFsdWUpIDogdW5kZWZpbmVkO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfSBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudmFyICRPYnNlcnZhYmxlID0gZnVuY3Rpb24gT2JzZXJ2YWJsZShzdWJzY3JpYmVyKXtcbiAgYW5JbnN0YW5jZSh0aGlzLCAkT2JzZXJ2YWJsZSwgJ09ic2VydmFibGUnLCAnX2YnKS5fZiA9IGFGdW5jdGlvbihzdWJzY3JpYmVyKTtcbn07XG5cbnJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwge1xuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcil7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHRoaXMuX2YpO1xuICB9LFxuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGZuKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyAoY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgYUZ1bmN0aW9uKGZuKTtcbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGF0LnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQgOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmbih2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgY29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxucmVkZWZpbmVBbGwoJE9ic2VydmFibGUsIHtcbiAgZnJvbTogZnVuY3Rpb24gZnJvbSh4KXtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlO1xuICAgIHZhciBtZXRob2QgPSBnZXRNZXRob2QoYW5PYmplY3QoeClbT0JTRVJWQUJMRV0pO1xuICAgIGlmKG1ldGhvZCl7XG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFuT2JqZWN0KG1ldGhvZC5jYWxsKHgpKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlLmNvbnN0cnVjdG9yID09PSBDID8gb2JzZXJ2YWJsZSA6IG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICBpZighZG9uZSl7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmKGZvck9mKHgsIGZhbHNlLCBmdW5jdGlvbihpdCl7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXQpO1xuICAgICAgICAgICAgICBpZihkb25lKXJldHVybiBSRVRVUk47XG4gICAgICAgICAgICB9KSA9PT0gUkVUVVJOKXJldHVybjtcbiAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgaWYoZG9uZSl0aHJvdyBlO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpeyBkb25lID0gdHJ1ZTsgfTtcbiAgICB9KTtcbiAgfSxcbiAgb2Y6IGZ1bmN0aW9uIG9mKCl7XG4gICAgZm9yKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGgsIGl0ZW1zID0gQXJyYXkobCk7IGkgPCBsOylpdGVtc1tpXSA9IGFyZ3VtZW50c1tpKytdO1xuICAgIHJldHVybiBuZXcgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlKShmdW5jdGlvbihvYnNlcnZlcil7XG4gICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFkb25lKXtcbiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kpe1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtc1tpXSk7XG4gICAgICAgICAgICBpZihkb25lKXJldHVybjtcbiAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IGRvbmUgPSB0cnVlOyB9O1xuICAgIH0pO1xuICB9XG59KTtcblxuaGlkZSgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIE9CU0VSVkFCTEUsIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LkcsIHtPYnNlcnZhYmxlOiAkT2JzZXJ2YWJsZX0pO1xuXG5fZGVyZXFfKDkxKSgnT2JzZXJ2YWJsZScpO1xufSx7XCIxMTdcIjoxMTcsXCIyM1wiOjIzLFwiM1wiOjMsXCIzMlwiOjMyLFwiMzdcIjozNyxcIjM4XCI6MzgsXCI0MFwiOjQwLFwiNlwiOjYsXCI2NFwiOjY0LFwiN1wiOjcsXCI4NlwiOjg2LFwiOTFcIjo5MX1dLDI3MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG4gICwgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxubWV0YWRhdGEuZXhwKHtkZWZpbmVNZXRhZGF0YTogZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgYW5PYmplY3QodGFyZ2V0KSwgdG9NZXRhS2V5KHRhcmdldEtleSkpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjd9XSwyNzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuICAsIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBtZXRhZGF0YS5tYXBcbiAgLCBzdG9yZSAgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEuc3RvcmU7XG5cbm1ldGFkYXRhLmV4cCh7ZGVsZXRlTWV0YWRhdGE6IGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHZhciB0YXJnZXRLZXkgICA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSlcbiAgICAsIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChhbk9iamVjdCh0YXJnZXQpLCB0YXJnZXRLZXksIGZhbHNlKTtcbiAgaWYobWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCB8fCAhbWV0YWRhdGFNYXBbJ2RlbGV0ZSddKG1ldGFkYXRhS2V5KSlyZXR1cm4gZmFsc2U7XG4gIGlmKG1ldGFkYXRhTWFwLnNpemUpcmV0dXJuIHRydWU7XG4gIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuICB0YXJnZXRNZXRhZGF0YVsnZGVsZXRlJ10odGFyZ2V0S2V5KTtcbiAgcmV0dXJuICEhdGFyZ2V0TWV0YWRhdGEuc2l6ZSB8fCBzdG9yZVsnZGVsZXRlJ10odGFyZ2V0KTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3fV0sMjc1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBTZXQgICAgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMjIwKVxuICAsIGZyb20gICAgICAgICAgICAgICAgICAgID0gX2RlcmVxXygxMClcbiAgLCBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgPSBfZGVyZXFfKDc0KVxuICAsIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5c1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG52YXIgb3JkaW5hcnlNZXRhZGF0YUtleXMgPSBmdW5jdGlvbihPLCBQKXtcbiAgdmFyIG9LZXlzICA9IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApXG4gICAgLCBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgaWYocGFyZW50ID09PSBudWxsKXJldHVybiBvS2V5cztcbiAgdmFyIHBLZXlzICA9IG9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG4gIHJldHVybiBwS2V5cy5sZW5ndGggPyBvS2V5cy5sZW5ndGggPyBmcm9tKG5ldyBTZXQob0tleXMuY29uY2F0KHBLZXlzKSkpIDogcEtleXMgOiBvS2V5cztcbn07XG5cbm1ldGFkYXRhLmV4cCh7Z2V0TWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlNZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG59fSk7XG59LHtcIjEwXCI6MTAsXCIyMjBcIjoyMjAsXCI2M1wiOjYzLFwiN1wiOjcsXCI3NFwiOjc0fV0sMjc2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgPSBfZGVyZXFfKDc0KVxuICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcbiAgLCBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0XG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5R2V0TWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgaWYoaGFzT3duKXJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IHVuZGVmaW5lZDtcbn07XG5cbm1ldGFkYXRhLmV4cCh7Z2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeUdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3LFwiNzRcIjo3NH1dLDI3NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5c1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjd9XSwyNzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldFxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7Z2V0T3duTWV0YWRhdGE6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpXG4gICAgLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3fV0sMjc5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgPSBfZGVyZXFfKDc0KVxuICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG52YXIgb3JkaW5hcnlIYXNNZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZihoYXNPd24pcmV0dXJuIHRydWU7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiBmYWxzZTtcbn07XG5cbm1ldGFkYXRhLmV4cCh7aGFzTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeUhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3LFwiNzRcIjo3NH1dLDI4MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcbiAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjd9XSwyODE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMylcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG4gICwgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxubWV0YWRhdGEuZXhwKHttZXRhZGF0YTogZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpe1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKFxuICAgICAgbWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsXG4gICAgICAodGFyZ2V0S2V5ICE9PSB1bmRlZmluZWQgPyBhbk9iamVjdCA6IGFGdW5jdGlvbikodGFyZ2V0KSxcbiAgICAgIHRvTWV0YUtleSh0YXJnZXRLZXkpXG4gICAgKTtcbiAgfTtcbn19KTtcbn0se1wiM1wiOjMsXCI2M1wiOjYzLFwiN1wiOjd9XSwyODI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0Jywge3RvSlNPTjogX2RlcmVxXygyMCkoJ1NldCcpfSk7XG59LHtcIjIwXCI6MjAsXCIzMlwiOjMyfV0sMjgzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkYXQgICAgID0gX2RlcmVxXyg5NykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBhdDogZnVuY3Rpb24gYXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiOTdcIjo5N31dLDI4NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL1N0cmluZy5wcm90b3R5cGUubWF0Y2hBbGwvXG52YXIgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGRlZmluZWQgICAgID0gX2RlcmVxXygyNylcbiAgLCB0b0xlbmd0aCAgICA9IF9kZXJlcV8oMTA4KVxuICAsIGlzUmVnRXhwICAgID0gX2RlcmVxXyg1MClcbiAgLCBnZXRGbGFncyAgICA9IF9kZXJlcV8oMzYpXG4gICwgUmVnRXhwUHJvdG8gPSBSZWdFeHAucHJvdG90eXBlO1xuXG52YXIgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yID0gZnVuY3Rpb24ocmVnZXhwLCBzdHJpbmcpe1xuICB0aGlzLl9yID0gcmVnZXhwO1xuICB0aGlzLl9zID0gc3RyaW5nO1xufTtcblxuX2RlcmVxXyg1MikoJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yLCAnUmVnRXhwIFN0cmluZycsIGZ1bmN0aW9uIG5leHQoKXtcbiAgdmFyIG1hdGNoID0gdGhpcy5fci5leGVjKHRoaXMuX3MpO1xuICByZXR1cm4ge3ZhbHVlOiBtYXRjaCwgZG9uZTogbWF0Y2ggPT09IG51bGx9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBtYXRjaEFsbDogZnVuY3Rpb24gbWF0Y2hBbGwocmVnZXhwKXtcbiAgICBkZWZpbmVkKHRoaXMpO1xuICAgIGlmKCFpc1JlZ0V4cChyZWdleHApKXRocm93IFR5cGVFcnJvcihyZWdleHAgKyAnIGlzIG5vdCBhIHJlZ2V4cCEnKTtcbiAgICB2YXIgUyAgICAgPSBTdHJpbmcodGhpcylcbiAgICAgICwgZmxhZ3MgPSAnZmxhZ3MnIGluIFJlZ0V4cFByb3RvID8gU3RyaW5nKHJlZ2V4cC5mbGFncykgOiBnZXRGbGFncy5jYWxsKHJlZ2V4cClcbiAgICAgICwgcnggICAgPSBuZXcgUmVnRXhwKHJlZ2V4cC5zb3VyY2UsIH5mbGFncy5pbmRleE9mKCdnJykgPyBmbGFncyA6ICdnJyArIGZsYWdzKTtcbiAgICByeC5sYXN0SW5kZXggPSB0b0xlbmd0aChyZWdleHAubGFzdEluZGV4KTtcbiAgICByZXR1cm4gbmV3ICRSZWdFeHBTdHJpbmdJdGVyYXRvcihyeCwgUyk7XG4gIH1cbn0pO1xufSx7XCIxMDhcIjoxMDgsXCIyN1wiOjI3LFwiMzJcIjozMixcIjM2XCI6MzYsXCI1MFwiOjUwLFwiNTJcIjo1Mn1dLDI4NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRwYWQgICAgPSBfZGVyZXFfKDEwMCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRFbmQ6IGZ1bmN0aW9uIHBhZEVuZChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxufSk7XG59LHtcIjEwMFwiOjEwMCxcIjMyXCI6MzJ9XSwyODY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkcGFkICAgID0gX2RlcmVxXygxMDApO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgcGFkU3RhcnQ6IGZ1bmN0aW9uIHBhZFN0YXJ0KG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbn0pO1xufSx7XCIxMDBcIjoxMDAsXCIzMlwiOjMyfV0sMjg3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbl9kZXJlcV8oMTAyKSgndHJpbUxlZnQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltTGVmdCgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcbiAgfTtcbn0sICd0cmltU3RhcnQnKTtcbn0se1wiMTAyXCI6MTAyfV0sMjg4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbl9kZXJlcV8oMTAyKSgndHJpbVJpZ2h0JywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbVJpZ2h0KCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDIpO1xuICB9O1xufSwgJ3RyaW1FbmQnKTtcbn0se1wiMTAyXCI6MTAyfV0sMjg5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTE1KSgnYXN5bmNJdGVyYXRvcicpO1xufSx7XCIxMTVcIjoxMTV9XSwyOTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTUpKCdvYnNlcnZhYmxlJyk7XG59LHtcIjExNVwiOjExNX1dLDI5MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWdsb2JhbFxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeXN0ZW0nLCB7Z2xvYmFsOiBfZGVyZXFfKDM4KX0pO1xufSx7XCIzMlwiOjMyLFwiMzhcIjozOH1dLDI5MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGl0ZXJhdG9ycyAgICA9IF9kZXJlcV8oMTMwKVxuICAsIHJlZGVmaW5lICAgICAgPSBfZGVyZXFfKDg3KVxuICAsIGdsb2JhbCAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGhpZGUgICAgICAgICAgPSBfZGVyZXFfKDQwKVxuICAsIEl0ZXJhdG9ycyAgICAgPSBfZGVyZXFfKDU2KVxuICAsIHdrcyAgICAgICAgICAgPSBfZGVyZXFfKDExNylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxufSx7XCIxMTdcIjoxMTcsXCIxMzBcIjoxMzAsXCIzOFwiOjM4LFwiNDBcIjo0MCxcIjU2XCI6NTYsXCI4N1wiOjg3fV0sMjkzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkdGFzayAgID0gX2RlcmVxXygxMDQpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIsIHtcbiAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcbiAgY2xlYXJJbW1lZGlhdGU6ICR0YXNrLmNsZWFyXG59KTtcbn0se1wiMTA0XCI6MTA0LFwiMzJcIjozMn1dLDI5NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG52YXIgZ2xvYmFsICAgICA9IF9kZXJlcV8oMzgpXG4gICwgJGV4cG9ydCAgICA9IF9kZXJlcV8oMzIpXG4gICwgaW52b2tlICAgICA9IF9kZXJlcV8oNDQpXG4gICwgcGFydGlhbCAgICA9IF9kZXJlcV8oODMpXG4gICwgbmF2aWdhdG9yICA9IGdsb2JhbC5uYXZpZ2F0b3JcbiAgLCBNU0lFICAgICAgID0gISFuYXZpZ2F0b3IgJiYgL01TSUUgLlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIHdyYXAgPSBmdW5jdGlvbihzZXQpe1xuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lIC8qLCAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gc2V0KGludm9rZShcbiAgICAgIHBhcnRpYWwsXG4gICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXG4gICAgICB0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pXG4gICAgKSwgdGltZSk7XG4gIH0gOiBzZXQ7XG59O1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG4gIHNldFRpbWVvdXQ6ICB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG59LHtcIjMyXCI6MzIsXCIzOFwiOjM4LFwiNDRcIjo0NCxcIjgzXCI6ODN9XSwyOTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygyNDMpO1xuX2RlcmVxXygxODApO1xuX2RlcmVxXygxODIpO1xuX2RlcmVxXygxODEpO1xuX2RlcmVxXygxODQpO1xuX2RlcmVxXygxODYpO1xuX2RlcmVxXygxOTEpO1xuX2RlcmVxXygxODUpO1xuX2RlcmVxXygxODMpO1xuX2RlcmVxXygxOTMpO1xuX2RlcmVxXygxOTIpO1xuX2RlcmVxXygxODgpO1xuX2RlcmVxXygxODkpO1xuX2RlcmVxXygxODcpO1xuX2RlcmVxXygxNzkpO1xuX2RlcmVxXygxOTApO1xuX2RlcmVxXygxOTQpO1xuX2RlcmVxXygxOTUpO1xuX2RlcmVxXygxNDYpO1xuX2RlcmVxXygxNDgpO1xuX2RlcmVxXygxNDcpO1xuX2RlcmVxXygxOTcpO1xuX2RlcmVxXygxOTYpO1xuX2RlcmVxXygxNjcpO1xuX2RlcmVxXygxNzcpO1xuX2RlcmVxXygxNzgpO1xuX2RlcmVxXygxNjgpO1xuX2RlcmVxXygxNjkpO1xuX2RlcmVxXygxNzApO1xuX2RlcmVxXygxNzEpO1xuX2RlcmVxXygxNzIpO1xuX2RlcmVxXygxNzMpO1xuX2RlcmVxXygxNzQpO1xuX2RlcmVxXygxNzUpO1xuX2RlcmVxXygxNzYpO1xuX2RlcmVxXygxNTApO1xuX2RlcmVxXygxNTEpO1xuX2RlcmVxXygxNTIpO1xuX2RlcmVxXygxNTMpO1xuX2RlcmVxXygxNTQpO1xuX2RlcmVxXygxNTUpO1xuX2RlcmVxXygxNTYpO1xuX2RlcmVxXygxNTcpO1xuX2RlcmVxXygxNTgpO1xuX2RlcmVxXygxNTkpO1xuX2RlcmVxXygxNjApO1xuX2RlcmVxXygxNjEpO1xuX2RlcmVxXygxNjIpO1xuX2RlcmVxXygxNjMpO1xuX2RlcmVxXygxNjQpO1xuX2RlcmVxXygxNjUpO1xuX2RlcmVxXygxNjYpO1xuX2RlcmVxXygyMzApO1xuX2RlcmVxXygyMzUpO1xuX2RlcmVxXygyNDIpO1xuX2RlcmVxXygyMzMpO1xuX2RlcmVxXygyMjUpO1xuX2RlcmVxXygyMjYpO1xuX2RlcmVxXygyMzEpO1xuX2RlcmVxXygyMzYpO1xuX2RlcmVxXygyMzgpO1xuX2RlcmVxXygyMjEpO1xuX2RlcmVxXygyMjIpO1xuX2RlcmVxXygyMjMpO1xuX2RlcmVxXygyMjQpO1xuX2RlcmVxXygyMjcpO1xuX2RlcmVxXygyMjgpO1xuX2RlcmVxXygyMjkpO1xuX2RlcmVxXygyMzIpO1xuX2RlcmVxXygyMzQpO1xuX2RlcmVxXygyMzcpO1xuX2RlcmVxXygyMzkpO1xuX2RlcmVxXygyNDApO1xuX2RlcmVxXygyNDEpO1xuX2RlcmVxXygxNDEpO1xuX2RlcmVxXygxNDMpO1xuX2RlcmVxXygxNDIpO1xuX2RlcmVxXygxNDUpO1xuX2RlcmVxXygxNDQpO1xuX2RlcmVxXygxMjkpO1xuX2RlcmVxXygxMjcpO1xuX2RlcmVxXygxMzQpO1xuX2RlcmVxXygxMzEpO1xuX2RlcmVxXygxMzcpO1xuX2RlcmVxXygxMzkpO1xuX2RlcmVxXygxMjYpO1xuX2RlcmVxXygxMzMpO1xuX2RlcmVxXygxMjMpO1xuX2RlcmVxXygxMzgpO1xuX2RlcmVxXygxMjEpO1xuX2RlcmVxXygxMzYpO1xuX2RlcmVxXygxMzUpO1xuX2RlcmVxXygxMjgpO1xuX2RlcmVxXygxMzIpO1xuX2RlcmVxXygxMjApO1xuX2RlcmVxXygxMjIpO1xuX2RlcmVxXygxMjUpO1xuX2RlcmVxXygxMjQpO1xuX2RlcmVxXygxNDApO1xuX2RlcmVxXygxMzApO1xuX2RlcmVxXygyMTMpO1xuX2RlcmVxXygyMTkpO1xuX2RlcmVxXygyMTQpO1xuX2RlcmVxXygyMTUpO1xuX2RlcmVxXygyMTYpO1xuX2RlcmVxXygyMTcpO1xuX2RlcmVxXygyMTgpO1xuX2RlcmVxXygxOTgpO1xuX2RlcmVxXygxNDkpO1xuX2RlcmVxXygyMjApO1xuX2RlcmVxXygyNTUpO1xuX2RlcmVxXygyNTYpO1xuX2RlcmVxXygyNDQpO1xuX2RlcmVxXygyNDUpO1xuX2RlcmVxXygyNTApO1xuX2RlcmVxXygyNTMpO1xuX2RlcmVxXygyNTQpO1xuX2RlcmVxXygyNDgpO1xuX2RlcmVxXygyNTEpO1xuX2RlcmVxXygyNDkpO1xuX2RlcmVxXygyNTIpO1xuX2RlcmVxXygyNDYpO1xuX2RlcmVxXygyNDcpO1xuX2RlcmVxXygxOTkpO1xuX2RlcmVxXygyMDApO1xuX2RlcmVxXygyMDEpO1xuX2RlcmVxXygyMDIpO1xuX2RlcmVxXygyMDMpO1xuX2RlcmVxXygyMDYpO1xuX2RlcmVxXygyMDQpO1xuX2RlcmVxXygyMDUpO1xuX2RlcmVxXygyMDcpO1xuX2RlcmVxXygyMDgpO1xuX2RlcmVxXygyMDkpO1xuX2RlcmVxXygyMTApO1xuX2RlcmVxXygyMTIpO1xuX2RlcmVxXygyMTEpO1xuX2RlcmVxXygyNTcpO1xuX2RlcmVxXygyODMpO1xuX2RlcmVxXygyODYpO1xuX2RlcmVxXygyODUpO1xuX2RlcmVxXygyODcpO1xuX2RlcmVxXygyODgpO1xuX2RlcmVxXygyODQpO1xuX2RlcmVxXygyODkpO1xuX2RlcmVxXygyOTApO1xuX2RlcmVxXygyNjgpO1xuX2RlcmVxXygyNzEpO1xuX2RlcmVxXygyNjcpO1xuX2RlcmVxXygyNjUpO1xuX2RlcmVxXygyNjYpO1xuX2RlcmVxXygyNjkpO1xuX2RlcmVxXygyNzApO1xuX2RlcmVxXygyNjApO1xuX2RlcmVxXygyODIpO1xuX2RlcmVxXygyOTEpO1xuX2RlcmVxXygyNTkpO1xuX2RlcmVxXygyNjEpO1xuX2RlcmVxXygyNjMpO1xuX2RlcmVxXygyNjIpO1xuX2RlcmVxXygyNjQpO1xuX2RlcmVxXygyNzMpO1xuX2RlcmVxXygyNzQpO1xuX2RlcmVxXygyNzYpO1xuX2RlcmVxXygyNzUpO1xuX2RlcmVxXygyNzgpO1xuX2RlcmVxXygyNzcpO1xuX2RlcmVxXygyNzkpO1xuX2RlcmVxXygyODApO1xuX2RlcmVxXygyODEpO1xuX2RlcmVxXygyNTgpO1xuX2RlcmVxXygyNzIpO1xuX2RlcmVxXygyOTQpO1xuX2RlcmVxXygyOTMpO1xuX2RlcmVxXygyOTIpO1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDIzKTtcbn0se1wiMTIwXCI6MTIwLFwiMTIxXCI6MTIxLFwiMTIyXCI6MTIyLFwiMTIzXCI6MTIzLFwiMTI0XCI6MTI0LFwiMTI1XCI6MTI1LFwiMTI2XCI6MTI2LFwiMTI3XCI6MTI3LFwiMTI4XCI6MTI4LFwiMTI5XCI6MTI5LFwiMTMwXCI6MTMwLFwiMTMxXCI6MTMxLFwiMTMyXCI6MTMyLFwiMTMzXCI6MTMzLFwiMTM0XCI6MTM0LFwiMTM1XCI6MTM1LFwiMTM2XCI6MTM2LFwiMTM3XCI6MTM3LFwiMTM4XCI6MTM4LFwiMTM5XCI6MTM5LFwiMTQwXCI6MTQwLFwiMTQxXCI6MTQxLFwiMTQyXCI6MTQyLFwiMTQzXCI6MTQzLFwiMTQ0XCI6MTQ0LFwiMTQ1XCI6MTQ1LFwiMTQ2XCI6MTQ2LFwiMTQ3XCI6MTQ3LFwiMTQ4XCI6MTQ4LFwiMTQ5XCI6MTQ5LFwiMTUwXCI6MTUwLFwiMTUxXCI6MTUxLFwiMTUyXCI6MTUyLFwiMTUzXCI6MTUzLFwiMTU0XCI6MTU0LFwiMTU1XCI6MTU1LFwiMTU2XCI6MTU2LFwiMTU3XCI6MTU3LFwiMTU4XCI6MTU4LFwiMTU5XCI6MTU5LFwiMTYwXCI6MTYwLFwiMTYxXCI6MTYxLFwiMTYyXCI6MTYyLFwiMTYzXCI6MTYzLFwiMTY0XCI6MTY0LFwiMTY1XCI6MTY1LFwiMTY2XCI6MTY2LFwiMTY3XCI6MTY3LFwiMTY4XCI6MTY4LFwiMTY5XCI6MTY5LFwiMTcwXCI6MTcwLFwiMTcxXCI6MTcxLFwiMTcyXCI6MTcyLFwiMTczXCI6MTczLFwiMTc0XCI6MTc0LFwiMTc1XCI6MTc1LFwiMTc2XCI6MTc2LFwiMTc3XCI6MTc3LFwiMTc4XCI6MTc4LFwiMTc5XCI6MTc5LFwiMTgwXCI6MTgwLFwiMTgxXCI6MTgxLFwiMTgyXCI6MTgyLFwiMTgzXCI6MTgzLFwiMTg0XCI6MTg0LFwiMTg1XCI6MTg1LFwiMTg2XCI6MTg2LFwiMTg3XCI6MTg3LFwiMTg4XCI6MTg4LFwiMTg5XCI6MTg5LFwiMTkwXCI6MTkwLFwiMTkxXCI6MTkxLFwiMTkyXCI6MTkyLFwiMTkzXCI6MTkzLFwiMTk0XCI6MTk0LFwiMTk1XCI6MTk1LFwiMTk2XCI6MTk2LFwiMTk3XCI6MTk3LFwiMTk4XCI6MTk4LFwiMTk5XCI6MTk5LFwiMjAwXCI6MjAwLFwiMjAxXCI6MjAxLFwiMjAyXCI6MjAyLFwiMjAzXCI6MjAzLFwiMjA0XCI6MjA0LFwiMjA1XCI6MjA1LFwiMjA2XCI6MjA2LFwiMjA3XCI6MjA3LFwiMjA4XCI6MjA4LFwiMjA5XCI6MjA5LFwiMjEwXCI6MjEwLFwiMjExXCI6MjExLFwiMjEyXCI6MjEyLFwiMjEzXCI6MjEzLFwiMjE0XCI6MjE0LFwiMjE1XCI6MjE1LFwiMjE2XCI6MjE2LFwiMjE3XCI6MjE3LFwiMjE4XCI6MjE4LFwiMjE5XCI6MjE5LFwiMjIwXCI6MjIwLFwiMjIxXCI6MjIxLFwiMjIyXCI6MjIyLFwiMjIzXCI6MjIzLFwiMjI0XCI6MjI0LFwiMjI1XCI6MjI1LFwiMjI2XCI6MjI2LFwiMjI3XCI6MjI3LFwiMjI4XCI6MjI4LFwiMjI5XCI6MjI5LFwiMjNcIjoyMyxcIjIzMFwiOjIzMCxcIjIzMVwiOjIzMSxcIjIzMlwiOjIzMixcIjIzM1wiOjIzMyxcIjIzNFwiOjIzNCxcIjIzNVwiOjIzNSxcIjIzNlwiOjIzNixcIjIzN1wiOjIzNyxcIjIzOFwiOjIzOCxcIjIzOVwiOjIzOSxcIjI0MFwiOjI0MCxcIjI0MVwiOjI0MSxcIjI0MlwiOjI0MixcIjI0M1wiOjI0MyxcIjI0NFwiOjI0NCxcIjI0NVwiOjI0NSxcIjI0NlwiOjI0NixcIjI0N1wiOjI0NyxcIjI0OFwiOjI0OCxcIjI0OVwiOjI0OSxcIjI1MFwiOjI1MCxcIjI1MVwiOjI1MSxcIjI1MlwiOjI1MixcIjI1M1wiOjI1MyxcIjI1NFwiOjI1NCxcIjI1NVwiOjI1NSxcIjI1NlwiOjI1NixcIjI1N1wiOjI1NyxcIjI1OFwiOjI1OCxcIjI1OVwiOjI1OSxcIjI2MFwiOjI2MCxcIjI2MVwiOjI2MSxcIjI2MlwiOjI2MixcIjI2M1wiOjI2MyxcIjI2NFwiOjI2NCxcIjI2NVwiOjI2NSxcIjI2NlwiOjI2NixcIjI2N1wiOjI2NyxcIjI2OFwiOjI2OCxcIjI2OVwiOjI2OSxcIjI3MFwiOjI3MCxcIjI3MVwiOjI3MSxcIjI3MlwiOjI3MixcIjI3M1wiOjI3MyxcIjI3NFwiOjI3NCxcIjI3NVwiOjI3NSxcIjI3NlwiOjI3NixcIjI3N1wiOjI3NyxcIjI3OFwiOjI3OCxcIjI3OVwiOjI3OSxcIjI4MFwiOjI4MCxcIjI4MVwiOjI4MSxcIjI4MlwiOjI4MixcIjI4M1wiOjI4MyxcIjI4NFwiOjI4NCxcIjI4NVwiOjI4NSxcIjI4NlwiOjI4NixcIjI4N1wiOjI4NyxcIjI4OFwiOjI4OCxcIjI4OVwiOjI4OSxcIjI5MFwiOjI5MCxcIjI5MVwiOjI5MSxcIjI5MlwiOjI5MixcIjI5M1wiOjI5MyxcIjI5NFwiOjI5NH1dLDI5NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLiBTb21lIG1heSBjb25zaWRlciB0aGUgbmFtZSBvZiB0aGlzIG1ldGhvZCB0b29cbiAgLy8gY3V0ZXN5LCBidXQgdGhleSBhcmUgY3VybXVkZ2VvbnMuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5hcmcpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se31dfSx7fSxbMV0pO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxMy4xMi4xNi5cbiAqXG4gKiDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFXG4gKi9cblxuaW1wb3J0IHtQYXRoR2VuZXJhdG9yfSBmcm9tIFwiLi9saWIvcGF0aC1nZW5lcmF0b3JcIjtcbmltcG9ydCB7R01hcH0gZnJvbSBcIi4vbGliL21hcFwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL2xpYi9yZW5kZXJlclwiO1xuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9saWIvcGF0aFwiO1xuXG5WdWUuY29tcG9uZW50KCdwYXRoLWlucHV0Jywge1xuICAgIHRlbXBsYXRlOiBcIkBzcmMvdGVtcGxhdGUuaHRtbFwiLFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmZpZWxkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKHRoaXMuZmllbGRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczogW1xuICAgICAgICAnZmllbGROYW1lJyxcbiAgICAgICAgJ2ZpZWxkVmFsdWUnXG4gICAgXSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoR2VuZXJhdG9yOiBudWxsLFxuICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudFBhdGg6IG5ldyBQYXRoKFtdKSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiBudWxsLFxuICAgICAgICAgICAgaW5FZGl0OiB0cnVlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGJlZ2luUGF0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5zdGFydCh0aGlzLmN1cnJlbnRQYXRoLCBkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluaXNoUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmZpbmlzaCgpO1xuICAgICAgICB9LFxuICAgICAgICB0b1RvcDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgLTEpO1xuICAgICAgICB9LFxuICAgICAgICB0b0Rvd246IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleERpc3Bvc2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleFJlbW92ZShpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFBhdGguc2VyaWFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgR01hcCgnZy1tYXBzJyk7XG4gICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IgPSBuZXcgUGF0aEdlbmVyYXRvcih0aGlzLm1hcCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMubWFwKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLm1hcCwgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJDb29yZHMgPSBldmVudC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYWRkKG1hcmtlckNvb3Jkcyk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmxldCBpbml0QXBwID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcHAgPSBuZXcgVnVlKHtcbiAgICAgICAgZWw6ICcjYXBwJ1xuICAgIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpbml0QXBwKCk7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIE1hcE1hcmtlciB7XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cblxuICAgIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMuX21hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyLnNldExhYmVsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWFya2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyO1xuICAgIH1cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgdGVtcGxhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWEgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5fZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5tYXJrZXIuZ2V0UG9zaXRpb24oKS50b0pTT04oKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXJpYSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUpIHtcbiAgICAgICAgaWYodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kZXNjcmlwdGlvbiA9ICcnO1xuICAgIF9tYXJrZXIgPSBudWxsO1xuICAgIF90ZW1wbGF0ZSA9ICdjb250ZW50Lmh0bWwnO1xuICAgIF9sYWJlbCA9ICcnO1xuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICByZXR1cm4gcG9zLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgYWRkSW5mbygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAkKGRhdGEpLmxvYWQoJ3NyYy90cGwvJyArIHRoaXMudGVtcGxhdGUpO1xuXG4gICAgICAgIGxldCBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgY29udGVudDogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgdGhpcy5fbWFya2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb3dpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkKG1hcCwgY29vcmRzLCBsYWJlbCkge1xuICAgICAgICBjb25zdCBtYXJrZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IGNvb3JkcyxcbiAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwgKyAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFya2VyT3B0aW9uc1snbGFiZWwnXSA9IGxhYmVsO1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihtYXJrZXJPcHRpb25zKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBHTWFwIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHRgdGL0LvQutCwINC90LAg0L7QsdGK0LXQutGCINC60LDRgNGCXG4gICAgICovXG4gICAgX21hcDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRJZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcblxuICAgICAgICB2YXIgcG9pbnRDb29yZHMgPSB7bGF0OiA1Mi42MTY2NywgbG5nOiAzOS42MDAwfTtcblxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNlbnRlcjogcG9pbnRDb29yZHMsXG4gICAgICAgICAgICB6b29tOiAxNlxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQge01hcE1hcmtlcn0gZnJvbSBcIi4vbWFwLW1hcmtlclwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXRoR2VuZXJhdG9yIHtcbiAgICBnZXQgY291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXI7XG4gICAgfVxuXG4gICAgc2V0IGNvdW50ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY291bnRlciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIF9tYXA7XG4gICAgX3BhdGggPSBbXTtcbiAgICBfY291bnRlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgaWYobWFwKSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQv9GD0YHQuiDQs9C10L3QtdGA0LDRgtC+0YDQsFxuICAgICAqL1xuICAgIHN0YXJ0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG5cbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGF0aC5jbGVhcigpO1xuXG4gICAgICAgICAgICBsZXQgY29vcmRzID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNvb3JkLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIGxldCBsYXRMbmcgID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MpO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGNvb3JkLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobGF0TG5nLCBkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBudWxsO1xuICAgIH1cblxuICAgIGFkZChjb29yZHMsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGlmKHRoaXMuX3BhdGgpIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFwTWFya2VyKCk7XG5cbiAgICAgICAgICAgIG1hcmtlci5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgICAgICAgICBtYXJrZXIubG9hZCh0aGlzLm1hcC5tYXAsIGNvb3JkcywgdGhpcy5fcGF0aC5tYXJrZXJzLmxlbmd0aCArIDEpO1xuXG4gICAgICAgICAgICB0aGlzLl9wYXRoLmFkZChtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqXG4gKlxuICovXG5pbXBvcnQge2Fzc2VydCBhcyBhc3NlcnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgZ2V0IG1hcmtlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xuICAgIH1cblxuICAgIHNldCBtYXJrZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIF9tYXJrZXJzID0gW107XG4gICAgX3VwZGF0ZUxpc3RlbmVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C10L3QuNC1INGB0LXRgNC40LDQu9C40LfQvtCy0LDQvdC90L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICovXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhcyA9IHRoaXMuX21hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyay5zZXJpYWw7XG4gICAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgICBsZXQgcmVzID0gJ1snICsgc2VyaWFzICsgJ10nO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQvNC10L3QsCDQv9C+0LfQuNGG0LjQuCDQuNC90LTQtdC60YHQsFxuICAgICAqIEBwYXJhbSBpbmRleCDQmNC90LTQtdC60YFcbiAgICAgKiBAcGFyYW0gY3JlbSDQodC80LXRidC10L3QuNC1XG4gICAgICovXG4gICAgaW5kZXhEaXNwb3NlKGluZGV4LCBjcmVtKSB7XG4gICAgICAgIGxldCBzID0gaW5kZXggKyBjcmVtO1xuXG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBhc3NlcnQocyA+IC0xICYmIHMgPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW3NdO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnNbc10gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF0gPSBlbGVtO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgaW5kZXhSZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgZWxlbS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLl9tYXJrZXJzKSB7XG4gICAgICAgICAgICByZXMgKz0gbWFyay5jb29yZHNTdHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBcbiAgICBhZGRVcGRhdGVMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBtYXJrLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgY2FsbFVwZGF0ZUhhbmRsZXJzKCkge1xuICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fdXBkYXRlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQobWFya2VyKSB7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5tYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMubWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaExhYmVscygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgbWFyay5sYWJlbCA9IGluZGV4ICsgJyc7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFya2Vycykge1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBtYXJrZXJzO1xuXG4gICAgICAgIHRoaXMuYWRkVXBkYXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGFiZWxzKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBfbWFwID0gbnVsbDtcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB9XG5cbiAgICB3YXlwb2ludHMoY29vcmRzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY29vcmRzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBjb29yZHNbaV0sXG4gICAgICAgICAgICAgICAgc3RvcG92ZXI6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHBhdGgpIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHBhdGguY29vcmRzQXJyYXk7XG5cbiAgICAgICAgaWYoY29vcmRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldE1hcCh0aGlzLm1hcC5tYXApO1xuXG4gICAgICAgIGxldCB3YXlwb2ludHMgPSB0aGlzLndheXBvaW50cyhjb29yZHMpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgb3JpZ2luOiBjb29yZHNbMF0sXG4gICAgICAgICAgICB3YXlwb2ludHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiO1xuICAgIH1cbn0iXX0=