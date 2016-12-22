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

var _mapMarker = require("./lib/map-marker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentName = 'path-input'; /**
                                   * Created by joker on 13.12.16.
                                   *
                                   * Получение данных
                                   */

document.addEventListener('DOMContentLoaded', function () {
    var componentAnchor = document.getElementsByTagName(componentName)[0];

    if (componentAnchor == null) {
        return;
    }

    var templateName = componentAnchor.getAttribute('template');
    var fieldValue = componentAnchor.getAttribute('field-value');
    var fieldName = componentAnchor.getAttribute('field-name');

    $.get(templateName, function (data) {
        try {
            var Prof = Vue.extend({
                template: data,
                mounted: function mounted() {
                    this.init();

                    this.fieldName = fieldName;

                    if (fieldValue) {
                        this.beginPath(fieldValue);
                    } else {
                        this.beginPath();
                    }
                },
                data: function data() {
                    return {
                        pathGenerator: null,
                        map: null,
                        currentPath: new _path.Path([]),
                        renderer: null,
                        inEdit: true,
                        fieldName: ''
                    };
                },
                computed: {
                    icons: function icons() {
                        return _mapMarker.MapMarker.icons;
                    }
                },
                updated: function updated() {},
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
                    init: function init() {
                        var element = this.$el.querySelector('.g-maps');

                        this.map = new _map.GMap(element);
                        this.pathGenerator = new _pathGenerator.PathGenerator(this.map);
                        this.renderer = new _renderer2.default(this.map);

                        this.currentPath.addUpdateListener(function () {
                            this.renderer.render(this.currentPath);
                            this.$forceUpdate();
                        }.bind(this));

                        this.pathGenerator.appendAddListener(function () {
                            var elemPosition = this.currentPath.size;

                            setTimeout(function () {
                                var selector = 'input[date-time="dt-' + (elemPosition - 1) + '"]';
                                var pickerAnchor = $(selector);

                                pickerAnchor.timepicker({
                                    showMeridian: false
                                }).on('changeTime.timepicker', function (e) {
                                    var value = e.time.value;
                                    var index = pickerAnchor.attr('data-index');

                                    this.currentPath.pointValue(index, 'time', value);
                                }.bind(this));
                            }.bind(this), 500);
                        }.bind(this));

                        google.maps.event.addListener(this.map.map, 'click', function (event) {
                            var markerCoords = event.latLng;

                            this.pathGenerator.add({
                                position: markerCoords.toJSON()
                            });

                            this.$forceUpdate();
                        }.bind(this));
                    }
                }
            });

            new Prof().$mount(componentName);
        } catch (error) {
            console.log('Не удается определить компонент: Vue.js не инициализирован');
        }
    });
});

},{"./lib/map":5,"./lib/map-marker":4,"./lib/path":7,"./lib/path-generator":6,"./lib/renderer":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by joker on 15.12.16.
 */

var iconsMap = {
    ad: "/bower_components/flag-icon-css/flags/1x1/ad.svg",
    ae: "/bower_components/flag-icon-css/flags/1x1/ae.svg",
    af: "/bower_components/flag-icon-css/flags/1x1/af.svg",
    ag: "/bower_components/flag-icon-css/flags/1x1/ag.svg",
    ai: "/bower_components/flag-icon-css/flags/1x1/ai.svg",
    al: "/bower_components/flag-icon-css/flags/1x1/al.svg",
    am: "/bower_components/flag-icon-css/flags/1x1/am.svg",
    ao: "/bower_components/flag-icon-css/flags/1x1/ao.svg",
    au: "/bower_components/flag-icon-css/flags/1x1/au.svg"
};

var MapMarker = exports.MapMarker = function () {
    _createClass(MapMarker, [{
        key: "setIcon",
        value: function setIcon(path) {
            var icon = {
                url: path,
                anchor: new google.maps.Point(25, 50),
                scaledSize: new google.maps.Size(50, 50)
            };

            this._marker.setIcon(icon);
        }
    }, {
        key: "remove",
        value: function remove() {
            this.marker.setMap(null);
        }
    }, {
        key: "time",
        get: function get() {
            return this._time;
        },
        set: function set(value) {
            this._time = value;
        }
    }, {
        key: "map",
        get: function get() {
            return this._map;
        },
        set: function set(value) {
            this._map = value;
            this.marker.setMap(value.map);
        }
    }, {
        key: "latLng",
        get: function get() {
            return this._latLng;
        },
        set: function set(value) {
            this._latLng = value;
            this.marker.setPosition(value);
        }
    }, {
        key: "visible",
        get: function get() {
            return this._marker.getVisible();
        },
        set: function set(value) {
            this._marker.setVisible(value);
            this._visible = value;
        }
    }, {
        key: "description",
        get: function get() {
            return this._description;
        },
        set: function set(value) {
            this._description = value;
        }
    }, {
        key: "label",
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
        key: "marker",
        get: function get() {
            return this._marker;
        }
    }, {
        key: "template",
        get: function get() {
            return this._template;
        },
        set: function set(value) {
            this._template = value;
        }
    }, {
        key: "serial",
        get: function get() {
            var seria = {
                description: this.description,
                position: this.marker.getPosition().toJSON(),
                visible: this.visible,
                time: this.time
            };

            return JSON.stringify(seria);
        },
        set: function set(value) {
            var pos = value.position;

            this.latLng = new google.maps.LatLng(pos);
            this.description = value.description || '';
            if (value.label) {
                this.label = value.label + '';
            }
            this.visible = value.visible || true;
            this.time = value.time || '0:00';

            this.marker.setPosition(this.latLng);
            this.marker.setLabel(this.label);
            this.marker.setVisible(this.visible);
        }
    }], [{
        key: "icons",
        get: function get() {
            return iconsMap;
        }
    }]);

    function MapMarker(map, coords, template) {
        _classCallCheck(this, MapMarker);

        this._time = '';
        this._map = null;
        this._latLng = {};
        this._description = '';
        this._marker = null;
        this._template = 'content.html';
        this._label = '';
        this._visible = true;

        if (!map) {
            throw 'Не определена карта';
        }

        this._marker = new google.maps.Marker({
            map: map.map,
            position: coords,
            draggable: true
        });

        this.map = map;

        if (template) {
            this.template = template;
        }
    }

    _createClass(MapMarker, [{
        key: "getPosition",
        value: function getPosition() {
            return this._marker.getPosition();
        }
    }, {
        key: "addInfo",
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
        key: "coordsStr",
        get: function get() {
            var pos = this.getPosition();
            return pos.toString();
        }
    }]);

    return MapMarker;
}();

},{}],5:[function(require,module,exports){
'use strict';

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
        key: 'map',
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

    function GMap(element) {
        _classCallCheck(this, GMap);

        var pointCoords = { lat: 52.61667, lng: 39.6000 };

        this._map = new google.maps.Map(element, {
            center: pointCoords,
            zoom: 16
        });

        google.maps.event.trigger(this._map, 'resize');
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
        this._addedListeners = [];

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

                var markersArray = JSON.parse(data);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = markersArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var markerJson = _step.value;

                        this.add(markerJson);
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
        key: "appendAddListener",
        value: function appendAddListener(handler) {
            this._addedListeners.push(handler);
        }
    }, {
        key: "add",
        value: function add(markerJson) {
            if (this._path) {
                var marker = new _mapMarker.MapMarker(this.map, markerJson.position);

                markerJson.label = this._path.markers.length + 1;

                marker.serial = markerJson;

                this._path.add(marker);

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this._addedListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
        key: 'pointValue',
        value: function pointValue(index, field, value) {
            (0, _utils.assert)(index > -1 && index < this._markers.length);

            this._markers[index][field] = value;
        }
    }, {
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

                    if (mark.visible) {
                        mark.label = index + '';
                        index += 1;
                    }
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
        key: 'size',
        get: function get() {
            return this._markers.length;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcG9seWZpbGwvZGlzdC9wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsQ0FBQyxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxXQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBRyxDQUFDLEVBQUUsQ0FBRixDQUFKLEVBQVM7QUFBQyxVQUFHLENBQUMsRUFBRSxDQUFGLENBQUosRUFBUztBQUFDLFlBQUksSUFBRSxPQUFPLE9BQVAsSUFBZ0IsVUFBaEIsSUFBNEIsT0FBbEMsQ0FBMEMsSUFBRyxDQUFDLENBQUQsSUFBSSxDQUFQLEVBQVMsT0FBTyxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBUCxDQUFlLElBQUcsQ0FBSCxFQUFLLE9BQU8sRUFBRSxDQUFGLEVBQUksQ0FBQyxDQUFMLENBQVAsQ0FBZSxJQUFJLElBQUUsSUFBSSxLQUFKLENBQVUseUJBQXVCLENBQXZCLEdBQXlCLEdBQW5DLENBQU4sQ0FBOEMsTUFBTSxFQUFFLElBQUYsR0FBTyxrQkFBUCxFQUEwQixDQUFoQztBQUFrQyxXQUFJLElBQUUsRUFBRSxDQUFGLElBQUssRUFBQyxTQUFRLEVBQVQsRUFBWCxDQUF3QixFQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsSUFBUixDQUFhLEVBQUUsT0FBZixFQUF1QixVQUFT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LFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNB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QUF4QixDQUErQixLQUFLLEdBQUwsQ0FBUyxHQUF4Qzs7QUFFQSxnQkFBSSxZQUFZLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBaEI7O0FBRUEsZ0JBQUksVUFBVTtBQUNWLHdCQUFRLE9BQU8sQ0FBUCxDQURFO0FBRVYsb0NBRlU7QUFHViw2QkFBYSxPQUFPLE9BQU8sTUFBUCxHQUFnQixDQUF2QixDQUhIO0FBSVYsNEJBQVksT0FBTyxJQUFQLENBQVksVUFBWixDQUF1QjtBQUp6QixhQUFkOztBQU9BLGlCQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLE9BQTlCLEVBQXVDLFVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQjtBQUM5RCxvQkFBSSxVQUFVLE9BQU8sSUFBUCxDQUFZLGdCQUFaLENBQTZCLEVBQTNDLEVBQStDO0FBQzNDLHlCQUFLLGtCQUFMLENBQXdCLGFBQXhCLENBQXNDLFFBQXRDO0FBQ0g7QUFDSixhQUpzQyxDQUlyQyxJQUpxQyxDQUloQyxJQUpnQyxDQUF2QztBQUtIOzs7Ozs7a0JBeERnQixROzs7Ozs7OztRQ0FMLE0sR0FBQSxNO0FBSmhCOzs7O0FBSU8sU0FBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLE9BQTNCLEVBQW9DO0FBQ3ZDLFFBQUksQ0FBQyxTQUFMLEVBQWdCO0FBQ1osY0FBTSxXQUFXLGtCQUFqQjtBQUNIO0FBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbl9kZXJlcV8oMjk1KTtcblxuX2RlcmVxXygyOTYpO1xuXG5fZGVyZXFfKDIpO1xuXG5pZiAoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsLXBvbHlmaWxsIGlzIGFsbG93ZWRcIik7XG59XG5nbG9iYWwuX2JhYmVsUG9seWZpbGwgPSB0cnVlO1xuXG52YXIgREVGSU5FX1BST1BFUlRZID0gXCJkZWZpbmVQcm9wZXJ0eVwiO1xuZnVuY3Rpb24gZGVmaW5lKE8sIGtleSwgdmFsdWUpIHtcbiAgT1trZXldIHx8IE9iamVjdFtERUZJTkVfUFJPUEVSVFldKE8sIGtleSwge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmRlZmluZShTdHJpbmcucHJvdG90eXBlLCBcInBhZExlZnRcIiwgXCJcIi5wYWRTdGFydCk7XG5kZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRSaWdodFwiLCBcIlwiLnBhZEVuZCk7XG5cblwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcyxpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzLGpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBbXVtrZXldICYmIGRlZmluZShBcnJheSwga2V5LCBGdW5jdGlvbi5jYWxsLmJpbmQoW11ba2V5XSkpO1xufSk7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiMlwiOjIsXCIyOTVcIjoyOTUsXCIyOTZcIjoyOTZ9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTE5KTtcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMykuUmVnRXhwLmVzY2FwZTtcbn0se1wiMTE5XCI6MTE5LFwiMjNcIjoyM31dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG59LHt9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjb2YgPSBfZGVyZXFfKDE4KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIG1zZyl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnbnVtYmVyJyAmJiBjb2YoaXQpICE9ICdOdW1iZXInKXRocm93IFR5cGVFcnJvcihtc2cpO1xuICByZXR1cm4gK2l0O1xufTtcbn0se1wiMThcIjoxOH1dLDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gX2RlcmVxXygxMTcpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpX2RlcmVxXyg0MCkoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xufSx7XCIxMTdcIjoxMTcsXCI0MFwiOjQwfV0sNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xufSx7fV0sNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se1wiNDlcIjo0OX1dLDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSBfZGVyZXFfKDEwOSlcbiAgLCB0b0luZGV4ICA9IF9kZXJlcV8oMTA1KVxuICAsIHRvTGVuZ3RoID0gX2RlcmVxXygxMDgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQvKj0gMCovLCBzdGFydC8qPSAwLCBlbmQgPSBAbGVuZ3RoKi8pe1xuICB2YXIgTyAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuICAgPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIHRvICAgID0gdG9JbmRleCh0YXJnZXQsIGxlbilcbiAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICwgZW5kICAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuICAgICwgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0bylcbiAgICAsIGluYyAgID0gMTtcbiAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcbiAgICBpbmMgID0gLTE7XG4gICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgdG8gICArPSBjb3VudCAtIDE7XG4gIH1cbiAgd2hpbGUoY291bnQtLSA+IDApe1xuICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgdG8gICArPSBpbmM7XG4gICAgZnJvbSArPSBpbmM7XG4gIH0gcmV0dXJuIE87XG59O1xufSx7XCIxMDVcIjoxMDUsXCIxMDhcIjoxMDgsXCIxMDlcIjoxMDl9XSw5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gX2RlcmVxXygxMDkpXG4gICwgdG9JbmRleCAgPSBfZGVyZXFfKDEwNSlcbiAgLCB0b0xlbmd0aCA9IF9kZXJlcV8oMTA4KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcbiAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIGFMZW4gICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IHRvSW5kZXgoYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGxlbmd0aClcbiAgICAsIGVuZCAgICA9IGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkXG4gICAgLCBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZShlbmRQb3MgPiBpbmRleClPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcbn0se1wiMTA1XCI6MTA1LFwiMTA4XCI6MTA4LFwiMTA5XCI6MTA5fV0sMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGZvck9mID0gX2RlcmVxXygzNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG59LHtcIjM3XCI6Mzd9XSwxMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTA3KVxuICAsIHRvTGVuZ3RoICA9IF9kZXJlcV8oMTA4KVxuICAsIHRvSW5kZXggICA9IF9kZXJlcV8oMTA1KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG59LHtcIjEwNVwiOjEwNSxcIjEwN1wiOjEwNyxcIjEwOFwiOjEwOH1dLDEyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IF9kZXJlcV8oMjUpXG4gICwgSU9iamVjdCAgPSBfZGVyZXFfKDQ1KVxuICAsIHRvT2JqZWN0ID0gX2RlcmVxXygxMDkpXG4gICwgdG9MZW5ndGggPSBfZGVyZXFfKDEwOClcbiAgLCBhc2MgICAgICA9IF9kZXJlcV8oMTUpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xufSx7XCIxMDhcIjoxMDgsXCIxMDlcIjoxMDksXCIxNVwiOjE1LFwiMjVcIjoyNSxcIjQ1XCI6NDV9XSwxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgYUZ1bmN0aW9uID0gX2RlcmVxXygzKVxuICAsIHRvT2JqZWN0ICA9IF9kZXJlcV8oMTA5KVxuICAsIElPYmplY3QgICA9IF9kZXJlcV8oNDUpXG4gICwgdG9MZW5ndGggID0gX2RlcmVxXygxMDgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIGNhbGxiYWNrZm4sIGFMZW4sIG1lbW8sIGlzUmlnaHQpe1xuICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGF0KVxuICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcbiAgICAsIGkgICAgICA9IGlzUmlnaHQgPyAtMSA6IDE7XG4gIGlmKGFMZW4gPCAyKWZvcig7Oyl7XG4gICAgaWYoaW5kZXggaW4gc2VsZil7XG4gICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGluZGV4ICs9IGk7XG4gICAgaWYoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCl7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICB9XG4gIH1cbiAgZm9yKDtpc1JpZ2h0ID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKWlmKGluZGV4IGluIHNlbGYpe1xuICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gIH1cbiAgcmV0dXJuIG1lbW87XG59O1xufSx7XCIxMDhcIjoxMDgsXCIxMDlcIjoxMDksXCIzXCI6MyxcIjQ1XCI6NDV9XSwxNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIGlzQXJyYXkgID0gX2RlcmVxXyg0NylcbiAgLCBTUEVDSUVTICA9IF9kZXJlcV8oMTE3KSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG59LHtcIjExN1wiOjExNyxcIjQ3XCI6NDcsXCI0OVwiOjQ5fV0sMTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9kZXJlcV8oMTQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbn0se1wiMTRcIjoxNH1dLDE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gID0gX2RlcmVxXygzKVxuICAsIGlzT2JqZWN0ICAgPSBfZGVyZXFfKDQ5KVxuICAsIGludm9rZSAgICAgPSBfZGVyZXFfKDQ0KVxuICAsIGFycmF5U2xpY2UgPSBbXS5zbGljZVxuICAsIGZhY3RvcmllcyAgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uKEYsIGxlbiwgYXJncyl7XG4gIGlmKCEobGVuIGluIGZhY3Rvcmllcykpe1xuICAgIGZvcih2YXIgbiA9IFtdLCBpID0gMDsgaSA8IGxlbjsgaSsrKW5baV0gPSAnYVsnICsgaSArICddJztcbiAgICBmYWN0b3JpZXNbbGVuXSA9IEZ1bmN0aW9uKCdGLGEnLCAncmV0dXJuIG5ldyBGKCcgKyBuLmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1tsZW5dKEYsIGFyZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiwgYXJncy4uLiAqLyl7XG4gIHZhciBmbiAgICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICwgcGFydEFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kID0gZnVuY3Rpb24oLyogYXJncy4uLiAqLyl7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmQgPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG4gIGlmKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmQ7XG59O1xufSx7XCIzXCI6MyxcIjQ0XCI6NDQsXCI0OVwiOjQ5fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSBfZGVyZXFfKDE4KVxuICAsIFRBRyA9IF9kZXJlcV8oMTE3KSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG59LHtcIjExN1wiOjExNyxcIjE4XCI6MTh9XSwxODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xufSx7fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gX2RlcmVxXyg2NykuZlxuICAsIGNyZWF0ZSAgICAgID0gX2RlcmVxXyg2NilcbiAgLCByZWRlZmluZUFsbCA9IF9kZXJlcV8oODYpXG4gICwgY3R4ICAgICAgICAgPSBfZGVyZXFfKDI1KVxuICAsIGFuSW5zdGFuY2UgID0gX2RlcmVxXyg2KVxuICAsIGRlZmluZWQgICAgID0gX2RlcmVxXygyNylcbiAgLCBmb3JPZiAgICAgICA9IF9kZXJlcV8oMzcpXG4gICwgJGl0ZXJEZWZpbmUgPSBfZGVyZXFfKDUzKVxuICAsIHN0ZXAgICAgICAgID0gX2RlcmVxXyg1NSlcbiAgLCBzZXRTcGVjaWVzICA9IF9kZXJlcV8oOTEpXG4gICwgREVTQ1JJUFRPUlMgPSBfZGVyZXFfKDI4KVxuICAsIGZhc3RLZXkgICAgID0gX2RlcmVxXyg2MikuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xufSx7XCIyNVwiOjI1LFwiMjdcIjoyNyxcIjI4XCI6MjgsXCIzN1wiOjM3LFwiNTNcIjo1MyxcIjU1XCI6NTUsXCI2XCI6NixcIjYyXCI6NjIsXCI2NlwiOjY2LFwiNjdcIjo2NyxcIjg2XCI6ODYsXCI5MVwiOjkxfV0sMjA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSBfZGVyZXFfKDE3KVxuICAsIGZyb20gICAgPSBfZGVyZXFfKDEwKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG59LHtcIjEwXCI6MTAsXCIxN1wiOjE3fV0sMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lQWxsICAgICAgID0gX2RlcmVxXyg4NilcbiAgLCBnZXRXZWFrICAgICAgICAgICA9IF9kZXJlcV8oNjIpLmdldFdlYWtcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IF9kZXJlcV8oNDkpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgPSBfZGVyZXFfKDYpXG4gICwgZm9yT2YgICAgICAgICAgICAgPSBfZGVyZXFfKDM3KVxuICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gX2RlcmVxXygxMilcbiAgLCAkaGFzICAgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgYXJyYXlGaW5kICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuICAsIGFycmF5RmluZEluZGV4ICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgLCBpZCAgICAgICAgICAgICAgICA9IDA7XG5cbi8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbih0aGF0KXtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSk7XG59O1xudmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbigpe1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24oc3RvcmUsIGtleSl7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KXJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmKH5pbmRleCl0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciB1bmNhdWdodCBmcm96ZW4gb2JqZWN0c1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcbiAgICBpZihkYXRhID09PSB0cnVlKXVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuICAgIGVsc2UgZGF0YVt0aGF0Ll9pXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICB1ZnN0b3JlOiB1bmNhdWdodEZyb3plblN0b3JlXG59O1xufSx7XCIxMlwiOjEyLFwiMzdcIjozNyxcIjM5XCI6MzksXCI0OVwiOjQ5LFwiNlwiOjYsXCI2MlwiOjYyLFwiN1wiOjcsXCI4NlwiOjg2fV0sMjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCAkZXhwb3J0ICAgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgcmVkZWZpbmUgICAgICAgICAgPSBfZGVyZXFfKDg3KVxuICAsIHJlZGVmaW5lQWxsICAgICAgID0gX2RlcmVxXyg4NilcbiAgLCBtZXRhICAgICAgICAgICAgICA9IF9kZXJlcV8oNjIpXG4gICwgZm9yT2YgICAgICAgICAgICAgPSBfZGVyZXFfKDM3KVxuICAsIGFuSW5zdGFuY2UgICAgICAgID0gX2RlcmVxXyg2KVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBmYWlscyAgICAgICAgICAgICA9IF9kZXJlcV8oMzQpXG4gICwgJGl0ZXJEZXRlY3QgICAgICAgPSBfZGVyZXFfKDU0KVxuICAsIHNldFRvU3RyaW5nVGFnICAgID0gX2RlcmVxXyg5MilcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IF9kZXJlcV8oNDMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24oS0VZKXtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSl7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYil7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZih0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlICAgICAgICAgICAgID0gbmV3IENcbiAgICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICAgICwgSEFTTlRfQ0hBSU5JTkcgICAgICAgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlXG4gICAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICAgICwgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbigpeyBpbnN0YW5jZS5oYXMoMSk7IH0pXG4gICAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgICAsIEFDQ0VQVF9JVEVSQUJMRVMgICAgID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7IG5ldyBDKGl0ZXIpOyB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgICAsIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbigpe1xuICAgICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKClcbiAgICAgICAgICAsIGluZGV4ICAgICA9IDU7XG4gICAgICAgIHdoaWxlKGluZGV4LS0pJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgICAgfSk7XG4gICAgaWYoIUFDQ0VQVF9JVEVSQUJMRVMpeyBcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UsIHRhcmdldCwgQyk7XG4gICAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZihUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKXtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG59LHtcIjMyXCI6MzIsXCIzNFwiOjM0LFwiMzdcIjozNyxcIjM4XCI6MzgsXCI0M1wiOjQzLFwiNDlcIjo0OSxcIjU0XCI6NTQsXCI2XCI6NixcIjYyXCI6NjIsXCI4NlwiOjg2LFwiODdcIjo4NyxcIjkyXCI6OTJ9XSwyMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59LHt9XSwyNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gX2RlcmVxXyg2NylcbiAgLCBjcmVhdGVEZXNjICAgICAgPSBfZGVyZXFfKDg1KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbn0se1wiNjdcIjo2NyxcIjg1XCI6ODV9XSwyNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbn0se1wiM1wiOjN9XSwyNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9QcmltaXRpdmUgPSBfZGVyZXFfKDExMClcbiAgLCBOVU1CRVIgICAgICA9ICdudW1iZXInO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhpbnQpe1xuICBpZihoaW50ICE9PSAnc3RyaW5nJyAmJiBoaW50ICE9PSBOVU1CRVIgJiYgaGludCAhPT0gJ2RlZmF1bHQnKXRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIHRvUHJpbWl0aXZlKGFuT2JqZWN0KHRoaXMpLCBoaW50ICE9IE5VTUJFUik7XG59O1xufSx7XCIxMTBcIjoxMTAsXCI3XCI6N31dLDI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se31dLDI4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIV9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcbn0se1wiMzRcIjozNH1dLDI5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgZG9jdW1lbnQgPSBfZGVyZXFfKDM4KS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbn0se1wiMzhcIjozOCxcIjQ5XCI6NDl9XSwzMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbn0se31dLDMxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IF9kZXJlcV8oNzYpXG4gICwgZ09QUyAgICA9IF9kZXJlcV8oNzMpXG4gICwgcElFICAgICA9IF9kZXJlcV8oNzcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbn0se1wiNzNcIjo3MyxcIjc2XCI6NzYsXCI3N1wiOjc3fV0sMzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IF9kZXJlcV8oMzgpXG4gICwgY29yZSAgICAgID0gX2RlcmVxXygyMylcbiAgLCBoaWRlICAgICAgPSBfZGVyZXFfKDQwKVxuICAsIHJlZGVmaW5lICA9IF9kZXJlcV8oODcpXG4gICwgY3R4ICAgICAgID0gX2RlcmVxXygyNSlcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbn0se1wiMjNcIjoyMyxcIjI1XCI6MjUsXCIzOFwiOjM4LFwiNDBcIjo0MCxcIjg3XCI6ODd9XSwzMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgTUFUQ0ggPSBfZGVyZXFfKDExNykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciByZSA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tLRVldKHJlKTtcbiAgfSBjYXRjaChlKXtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2goZil7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG59LHtcIjExN1wiOjExN31dLDM0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xufSx7fV0sMzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgICAgID0gX2RlcmVxXyg0MClcbiAgLCByZWRlZmluZSA9IF9kZXJlcV8oODcpXG4gICwgZmFpbHMgICAgPSBfZGVyZXFfKDM0KVxuICAsIGRlZmluZWQgID0gX2RlcmVxXygyNylcbiAgLCB3a3MgICAgICA9IF9kZXJlcV8oMTE3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGxlbmd0aCwgZXhlYyl7XG4gIHZhciBTWU1CT0wgICA9IHdrcyhLRVkpXG4gICAgLCBmbnMgICAgICA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKVxuICAgICwgc3RyZm4gICAgPSBmbnNbMF1cbiAgICAsIHJ4Zm4gICAgID0gZm5zWzFdO1xuICBpZihmYWlscyhmdW5jdGlvbigpe1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpe1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24oc3RyaW5nLCBhcmcpeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uKHN0cmluZyl7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG59LHtcIjExN1wiOjExNyxcIjI3XCI6MjcsXCIzNFwiOjM0LFwiNDBcIjo0MCxcIjg3XCI6ODd9XSwzNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgICA9IGFuT2JqZWN0KHRoaXMpXG4gICAgLCByZXN1bHQgPSAnJztcbiAgaWYodGhhdC5nbG9iYWwpICAgICByZXN1bHQgKz0gJ2cnO1xuICBpZih0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmKHRoYXQubXVsdGlsaW5lKSAgcmVzdWx0ICs9ICdtJztcbiAgaWYodGhhdC51bmljb2RlKSAgICByZXN1bHQgKz0gJ3UnO1xuICBpZih0aGF0LnN0aWNreSkgICAgIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xufSx7XCI3XCI6N31dLDM3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjdHggICAgICAgICA9IF9kZXJlcV8oMjUpXG4gICwgY2FsbCAgICAgICAgPSBfZGVyZXFfKDUxKVxuICAsIGlzQXJyYXlJdGVyID0gX2RlcmVxXyg0NilcbiAgLCBhbk9iamVjdCAgICA9IF9kZXJlcV8oNylcbiAgLCB0b0xlbmd0aCAgICA9IF9kZXJlcV8oMTA4KVxuICAsIGdldEl0ZXJGbiAgID0gX2RlcmVxXygxMTgpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbn0se1wiMTA4XCI6MTA4LFwiMTE4XCI6MTE4LFwiMjVcIjoyNSxcIjQ2XCI6NDYsXCI1MVwiOjUxLFwiN1wiOjd9XSwzODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG59LHt9XSwzOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbn0se31dLDQwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkUCAgICAgICAgID0gX2RlcmVxXyg2NylcbiAgLCBjcmVhdGVEZXNjID0gX2RlcmVxXyg4NSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjgpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbn0se1wiMjhcIjoyOCxcIjY3XCI6NjcsXCI4NVwiOjg1fV0sNDE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDM4KS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59LHtcIjM4XCI6Mzh9XSw0MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9ICFfZGVyZXFfKDI4KSAmJiAhX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZGVyZXFfKDI5KSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcbn0se1wiMjhcIjoyOCxcIjI5XCI6MjksXCIzNFwiOjM0fV0sNDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ICAgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBzZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oOTApLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgdGFyZ2V0LCBDKXtcbiAgdmFyIFAsIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIGlmKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2Ype1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbn0se1wiNDlcIjo0OSxcIjkwXCI6OTB9XSw0NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG59LHt9XSw0NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IF9kZXJlcV8oMTgpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbn0se1wiMThcIjoxOH1dLDQ2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gX2RlcmVxXyg1NilcbiAgLCBJVEVSQVRPUiAgID0gX2RlcmVxXygxMTcpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xufSx7XCIxMTdcIjoxMTcsXCI1NlwiOjU2fV0sNDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSBfZGVyZXFfKDE4KTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbn0se1wiMThcIjoxOH1dLDQ4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBmbG9vciAgICA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCl7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcbn0se1wiNDlcIjo0OX1dLDQ5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbn0se31dLDUwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBjb2YgICAgICA9IF9kZXJlcV8oMTgpXG4gICwgTUFUQ0ggICAgPSBfZGVyZXFfKDExNykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xufSx7XCIxMTdcIjoxMTcsXCIxOFwiOjE4LFwiNDlcIjo0OX1dLDUxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG59LHtcIjdcIjo3fV0sNTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gX2RlcmVxXyg2NilcbiAgLCBkZXNjcmlwdG9yICAgICA9IF9kZXJlcV8oODUpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSBfZGVyZXFfKDkyKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5fZGVyZXFfKDQwKShJdGVyYXRvclByb3RvdHlwZSwgX2RlcmVxXygxMTcpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiNDBcIjo0MCxcIjY2XCI6NjYsXCI4NVwiOjg1LFwiOTJcIjo5Mn1dLDUzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IF9kZXJlcV8oNTgpXG4gICwgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHJlZGVmaW5lICAgICAgID0gX2RlcmVxXyg4NylcbiAgLCBoaWRlICAgICAgICAgICA9IF9kZXJlcV8oNDApXG4gICwgaGFzICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIEl0ZXJhdG9ycyAgICAgID0gX2RlcmVxXyg1NilcbiAgLCAkaXRlckNyZWF0ZSAgICA9IF9kZXJlcV8oNTIpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSBfZGVyZXFfKDkyKVxuICAsIGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3NClcbiAgLCBJVEVSQVRPUiAgICAgICA9IF9kZXJlcV8oMTE3KSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG59LHtcIjExN1wiOjExNyxcIjMyXCI6MzIsXCIzOVwiOjM5LFwiNDBcIjo0MCxcIjUyXCI6NTIsXCI1NlwiOjU2LFwiNThcIjo1OCxcIjc0XCI6NzQsXCI4N1wiOjg3LFwiOTJcIjo5Mn1dLDU0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBJVEVSQVRPUiAgICAgPSBfZGVyZXFfKDExNykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xufSx7XCIxMTdcIjoxMTd9XSw1NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xufSx7fV0sNTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbn0se31dLDU3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnZXRLZXlzICAgPSBfZGVyZXFfKDc2KVxuICAsIHRvSU9iamVjdCA9IF9kZXJlcV8oMTA3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG59LHtcIjEwN1wiOjEwNyxcIjc2XCI6NzZ9XSw1ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xufSx7fV0sNTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbnZhciAkZXhwbTEgPSBNYXRoLmV4cG0xO1xubW9kdWxlLmV4cG9ydHMgPSAoISRleHBtMVxuICAvLyBPbGQgRkYgYnVnXG4gIHx8ICRleHBtMSgxMCkgPiAyMjAyNS40NjU3OTQ4MDY3MTkgfHwgJGV4cG0xKDEwKSA8IDIyMDI1LjQ2NTc5NDgwNjcxNjUxNjhcbiAgLy8gVG9yIEJyb3dzZXIgYnVnXG4gIHx8ICRleHBtMSgtMmUtMTcpICE9IC0yZS0xN1xuKSA/IGZ1bmN0aW9uIGV4cG0xKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogTWF0aC5leHAoeCkgLSAxO1xufSA6ICRleHBtMTtcbn0se31dLDYwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbn07XG59LHt9XSw2MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG59O1xufSx7fV0sNjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIE1FVEEgICAgID0gX2RlcmVxXygxMTQpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgaGFzICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIHNldERlc2MgID0gX2RlcmVxXyg2NykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbn0se1wiMTE0XCI6MTE0LFwiMzRcIjozNCxcIjM5XCI6MzksXCI0OVwiOjQ5LFwiNjdcIjo2N31dLDYzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBNYXAgICAgID0gX2RlcmVxXygxNDkpXG4gICwgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgc2hhcmVkICA9IF9kZXJlcV8oOTQpKCdtZXRhZGF0YScpXG4gICwgc3RvcmUgICA9IHNoYXJlZC5zdG9yZSB8fCAoc2hhcmVkLnN0b3JlID0gbmV3IChfZGVyZXFfKDI1NSkpKTtcblxudmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBmdW5jdGlvbih0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKXtcbiAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG4gIGlmKCF0YXJnZXRNZXRhZGF0YSl7XG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gdW5kZWZpbmVkO1xuICAgIHN0b3JlLnNldCh0YXJnZXQsIHRhcmdldE1ldGFkYXRhID0gbmV3IE1hcCk7XG4gIH1cbiAgdmFyIGtleU1ldGFkYXRhID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KHRhcmdldEtleSk7XG4gIGlmKCFrZXlNZXRhZGF0YSl7XG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gdW5kZWZpbmVkO1xuICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhID0gbmV3IE1hcCk7XG4gIH0gcmV0dXJuIGtleU1ldGFkYXRhO1xufTtcbnZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcbiAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSk7XG59O1xudmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG59O1xudmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCl7XG4gIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgdHJ1ZSkuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcbn07XG52YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBmdW5jdGlvbih0YXJnZXQsIHRhcmdldEtleSl7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGZhbHNlKVxuICAgICwga2V5cyAgICAgICAgPSBbXTtcbiAgaWYobWV0YWRhdGFNYXApbWV0YWRhdGFNYXAuZm9yRWFjaChmdW5jdGlvbihfLCBrZXkpeyBrZXlzLnB1c2goa2V5KTsgfSk7XG4gIHJldHVybiBrZXlzO1xufTtcbnZhciB0b01ldGFLZXkgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG52YXIgZXhwID0gZnVuY3Rpb24oTyl7XG4gICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIE8pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0b3JlOiBzdG9yZSxcbiAgbWFwOiBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwLFxuICBoYXM6IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEsXG4gIGdldDogb3JkaW5hcnlHZXRPd25NZXRhZGF0YSxcbiAgc2V0OiBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhLFxuICBrZXlzOiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyxcbiAga2V5OiB0b01ldGFLZXksXG4gIGV4cDogZXhwXG59O1xufSx7XCIxNDlcIjoxNDksXCIyNTVcIjoyNTUsXCIzMlwiOjMyLFwiOTRcIjo5NH1dLDY0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgPSBfZGVyZXFfKDM4KVxuICAsIG1hY3JvdGFzayA9IF9kZXJlcV8oMTA0KS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSBfZGVyZXFfKDE4KShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xufSx7XCIxMDRcIjoxMDQsXCIxOFwiOjE4LFwiMzhcIjozOH1dLDY1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IF9kZXJlcV8oNzYpXG4gICwgZ09QUyAgICAgPSBfZGVyZXFfKDczKVxuICAsIHBJRSAgICAgID0gX2RlcmVxXyg3NylcbiAgLCB0b09iamVjdCA9IF9kZXJlcV8oMTA5KVxuICAsIElPYmplY3QgID0gX2RlcmVxXyg0NSlcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbn0se1wiMTA5XCI6MTA5LFwiMzRcIjozNCxcIjQ1XCI6NDUsXCI3M1wiOjczLFwiNzZcIjo3NixcIjc3XCI6Nzd9XSw2NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IF9kZXJlcV8oNylcbiAgLCBkUHMgICAgICAgICA9IF9kZXJlcV8oNjgpXG4gICwgZW51bUJ1Z0tleXMgPSBfZGVyZXFfKDMwKVxuICAsIElFX1BST1RPICAgID0gX2RlcmVxXyg5MykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBfZGVyZXFfKDI5KSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgX2RlcmVxXyg0MSkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cbn0se1wiMjlcIjoyOSxcIjMwXCI6MzAsXCI0MVwiOjQxLFwiNjhcIjo2OCxcIjdcIjo3LFwiOTNcIjo5M31dLDY3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhbk9iamVjdCAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBJRThfRE9NX0RFRklORSA9IF9kZXJlcV8oNDIpXG4gICwgdG9QcmltaXRpdmUgICAgPSBfZGVyZXFfKDExMClcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gX2RlcmVxXygyOCkgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbn0se1wiMTEwXCI6MTEwLFwiMjhcIjoyOCxcIjQyXCI6NDIsXCI3XCI6N31dLDY4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBkUCAgICAgICA9IF9kZXJlcV8oNjcpXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpXG4gICwgZ2V0S2V5cyAgPSBfZGVyZXFfKDc2KTtcblxubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDI4KSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIyOFwiOjI4LFwiNjdcIjo2NyxcIjdcIjo3LFwiNzZcIjo3Nn1dLDY5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIEZvcmNlZCByZXBsYWNlbWVudCBwcm90b3R5cGUgYWNjZXNzb3JzIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXyg1OCl8fCAhX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgdmFyIEsgPSBNYXRoLnJhbmRvbSgpO1xuICAvLyBJbiBGRiB0aHJvd3Mgb25seSBkZWZpbmUgbWV0aG9kc1xuICBfX2RlZmluZVNldHRlcl9fLmNhbGwobnVsbCwgSywgZnVuY3Rpb24oKXsgLyogZW1wdHkgKi99KTtcbiAgZGVsZXRlIF9kZXJlcV8oMzgpW0tdO1xufSk7XG59LHtcIjM0XCI6MzQsXCIzOFwiOjM4LFwiNThcIjo1OH1dLDcwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBwSUUgICAgICAgICAgICA9IF9kZXJlcV8oNzcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSBfZGVyZXFfKDg1KVxuICAsIHRvSU9iamVjdCAgICAgID0gX2RlcmVxXygxMDcpXG4gICwgdG9QcmltaXRpdmUgICAgPSBfZGVyZXFfKDExMClcbiAgLCBoYXMgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSBfZGVyZXFfKDQyKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gX2RlcmVxXygyOCkgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG59LHtcIjEwN1wiOjEwNyxcIjExMFwiOjExMCxcIjI4XCI6MjgsXCIzOVwiOjM5LFwiNDJcIjo0MixcIjc3XCI6NzcsXCI4NVwiOjg1fV0sNzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IF9kZXJlcV8oMTA3KVxuICAsIGdPUE4gICAgICA9IF9kZXJlcV8oNzIpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cbn0se1wiMTA3XCI6MTA3LFwiNzJcIjo3Mn1dLDcyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gX2RlcmVxXyg3NSlcbiAgLCBoaWRkZW5LZXlzID0gX2RlcmVxXygzMCkuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG59LHtcIjMwXCI6MzAsXCI3NVwiOjc1fV0sNzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbn0se31dLDc0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIHRvT2JqZWN0ICAgID0gX2RlcmVxXygxMDkpXG4gICwgSUVfUFJPVE8gICAgPSBfZGVyZXFfKDkzKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG59LHtcIjEwOVwiOjEwOSxcIjM5XCI6MzksXCI5M1wiOjkzfV0sNzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGhhcyAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgdG9JT2JqZWN0ICAgID0gX2RlcmVxXygxMDcpXG4gICwgYXJyYXlJbmRleE9mID0gX2RlcmVxXygxMSkoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gX2RlcmVxXyg5MykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xufSx7XCIxMDdcIjoxMDcsXCIxMVwiOjExLFwiMzlcIjozOSxcIjkzXCI6OTN9XSw3NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IF9kZXJlcV8oNzUpXG4gICwgZW51bUJ1Z0tleXMgPSBfZGVyZXFfKDMwKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbn0se1wiMzBcIjozMCxcIjc1XCI6NzV9XSw3NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbn0se31dLDc4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGNvcmUgICAgPSBfZGVyZXFfKDIzKVxuICAsIGZhaWxzICAgPSBfZGVyZXFfKDM0KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG59LHtcIjIzXCI6MjMsXCIzMlwiOjMyLFwiMzRcIjozNH1dLDc5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnZXRLZXlzICAgPSBfZGVyZXFfKDc2KVxuICAsIHRvSU9iamVjdCA9IF9kZXJlcV8oMTA3KVxuICAsIGlzRW51bSAgICA9IF9kZXJlcV8oNzcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzRW50cmllcyl7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChpdClcbiAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbn0se1wiMTA3XCI6MTA3LFwiNzZcIjo3NixcIjc3XCI6Nzd9XSw4MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgZ09QTiAgICAgPSBfZGVyZXFfKDcyKVxuICAsIGdPUFMgICAgID0gX2RlcmVxXyg3MylcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNylcbiAgLCBSZWZsZWN0ICA9IF9kZXJlcV8oMzgpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpe1xuICB2YXIga2V5cyAgICAgICA9IGdPUE4uZihhbk9iamVjdChpdCkpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xufSx7XCIzOFwiOjM4LFwiN1wiOjcsXCI3MlwiOjcyLFwiNzNcIjo3M31dLDgxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkcGFyc2VGbG9hdCA9IF9kZXJlcV8oMzgpLnBhcnNlRmxvYXRcbiAgLCAkdHJpbSAgICAgICA9IF9kZXJlcV8oMTAyKS50cmltO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDEgLyAkcGFyc2VGbG9hdChfZGVyZXFfKDEwMykgKyAnLTAnKSAhPT0gLUluZmluaXR5ID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHIpe1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpXG4gICAgLCByZXN1bHQgPSAkcGFyc2VGbG9hdChzdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG59LHtcIjEwMlwiOjEwMixcIjEwM1wiOjEwMyxcIjM4XCI6Mzh9XSw4MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJHBhcnNlSW50ID0gX2RlcmVxXygzOCkucGFyc2VJbnRcbiAgLCAkdHJpbSAgICAgPSBfZGVyZXFfKDEwMikudHJpbVxuICAsIHdzICAgICAgICA9IF9kZXJlcV8oMTAzKVxuICAsIGhleCAgICAgICA9IC9eW1xcLStdPzBbeFhdLztcblxubW9kdWxlLmV4cG9ydHMgPSAkcGFyc2VJbnQod3MgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod3MgKyAnMHgxNicpICE9PSAyMiA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0ciwgcmFkaXgpe1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpO1xuICByZXR1cm4gJHBhcnNlSW50KHN0cmluZywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG59LHtcIjEwMlwiOjEwMixcIjEwM1wiOjEwMyxcIjM4XCI6Mzh9XSw4MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgcGF0aCAgICAgID0gX2RlcmVxXyg4NClcbiAgLCBpbnZva2UgICAgPSBfZGVyZXFfKDQ0KVxuICAsIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcbiAgdmFyIGZuICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgcGFyZ3MgID0gQXJyYXkobGVuZ3RoKVxuICAgICwgaSAgICAgID0gMFxuICAgICwgXyAgICAgID0gcGF0aC5fXG4gICAgLCBob2xkZXIgPSBmYWxzZTtcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBqID0gMCwgayA9IDAsIGFyZ3M7XG4gICAgaWYoIWhvbGRlciAmJiAhYUxlbilyZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG4gICAgaWYoaG9sZGVyKWZvcig7bGVuZ3RoID4gajsgaisrKWlmKGFyZ3Nbal0gPT09IF8pYXJnc1tqXSA9IGFyZ3VtZW50c1trKytdO1xuICAgIHdoaWxlKGFMZW4gPiBrKWFyZ3MucHVzaChhcmd1bWVudHNbaysrXSk7XG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG59O1xufSx7XCIzXCI6MyxcIjQ0XCI6NDQsXCI4NFwiOjg0fV0sODQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDM4KTtcbn0se1wiMzhcIjozOH1dLDg1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcbn0se31dLDg2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciByZWRlZmluZSA9IF9kZXJlcV8oODcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbn0se1wiODdcIjo4N31dLDg3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgPSBfZGVyZXFfKDM4KVxuICAsIGhpZGUgICAgICA9IF9kZXJlcV8oNDApXG4gICwgaGFzICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBTUkMgICAgICAgPSBfZGVyZXFfKDExNCkoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbl9kZXJlcV8oMjMpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG59LHtcIjExNFwiOjExNCxcIjIzXCI6MjMsXCIzOFwiOjM4LFwiMzlcIjozOSxcIjQwXCI6NDB9XSw4ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTtcbn0se31dLDg5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbn0se31dLDkwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IF9kZXJlcV8oMjUpKEZ1bmN0aW9uLmNhbGwsIF9kZXJlcV8oNzApLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbn0se1wiMjVcIjoyNSxcIjQ5XCI6NDksXCI3XCI6NyxcIjcwXCI6NzB9XSw5MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGRQICAgICAgICAgID0gX2RlcmVxXyg2NylcbiAgLCBERVNDUklQVE9SUyA9IF9kZXJlcV8oMjgpXG4gICwgU1BFQ0lFUyAgICAgPSBfZGVyZXFfKDExNykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiMjhcIjoyOCxcIjM4XCI6MzgsXCI2N1wiOjY3fV0sOTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRlZiA9IF9kZXJlcV8oNjcpLmZcbiAgLCBoYXMgPSBfZGVyZXFfKDM5KVxuICAsIFRBRyA9IF9kZXJlcV8oMTE3KSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiMzlcIjozOSxcIjY3XCI6Njd9XSw5MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc2hhcmVkID0gX2RlcmVxXyg5NCkoJ2tleXMnKVxuICAsIHVpZCAgICA9IF9kZXJlcV8oMTE0KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG59LHtcIjExNFwiOjExNCxcIjk0XCI6OTR9XSw5NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsID0gX2RlcmVxXygzOClcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xufSx7XCIzOFwiOjM4fV0sOTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gX2RlcmVxXyg3KVxuICAsIGFGdW5jdGlvbiA9IF9kZXJlcV8oMylcbiAgLCBTUEVDSUVTICAgPSBfZGVyZXFfKDExNykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG59LHtcIjExN1wiOjExNyxcIjNcIjozLFwiN1wiOjd9XSw5NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZmFpbHMgPSBfZGVyZXFfKDM0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIGFyZyl7XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbigpe1xuICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uKCl7fSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcbiAgfSk7XG59O1xufSx7XCIzNFwiOjM0fV0sOTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvSW50ZWdlciA9IF9kZXJlcV8oMTA2KVxuICAsIGRlZmluZWQgICA9IF9kZXJlcV8oMjcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbn0se1wiMTA2XCI6MTA2LFwiMjdcIjoyN31dLDk4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG52YXIgaXNSZWdFeHAgPSBfZGVyZXFfKDUwKVxuICAsIGRlZmluZWQgID0gX2RlcmVxXygyNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKXtcbiAgaWYoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSl0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG59LHtcIjI3XCI6MjcsXCI1MFwiOjUwfV0sOTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGZhaWxzICAgPSBfZGVyZXFfKDM0KVxuICAsIGRlZmluZWQgPSBfZGVyZXFfKDI3KVxuICAsIHF1b3QgICAgPSAvXCIvZztcbi8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxudmFyIGNyZWF0ZUhUTUwgPSBmdW5jdGlvbihzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyAgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKVxuICAgICwgcDEgPSAnPCcgKyB0YWc7XG4gIGlmKGF0dHJpYnV0ZSAhPT0gJycpcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCBleGVjKXtcbiAgdmFyIE8gPSB7fTtcbiAgT1tOQU1FXSA9IGV4ZWMoY3JlYXRlSFRNTCk7XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcbiAgICB2YXIgdGVzdCA9ICcnW05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KSwgJ1N0cmluZycsIE8pO1xufTtcbn0se1wiMjdcIjoyNyxcIjMyXCI6MzIsXCIzNFwiOjM0fV0sMTAwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgdG9MZW5ndGggPSBfZGVyZXFfKDEwOClcbiAgLCByZXBlYXQgICA9IF9kZXJlcV8oMTAxKVxuICAsIGRlZmluZWQgID0gX2RlcmVxXygyNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KXtcbiAgdmFyIFMgICAgICAgICAgICA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICwgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGhcbiAgICAsIGZpbGxTdHIgICAgICA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKVxuICAgICwgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aCB8fCBmaWxsU3RyID09ICcnKXJldHVybiBTO1xuICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aFxuICAgICwgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZihzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbilzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG59O1xuXG59LHtcIjEwMVwiOjEwMSxcIjEwOFwiOjEwOCxcIjI3XCI6Mjd9XSwxMDE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IF9kZXJlcV8oMTA2KVxuICAsIGRlZmluZWQgICA9IF9kZXJlcV8oMjcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCl7XG4gIHZhciBzdHIgPSBTdHJpbmcoZGVmaW5lZCh0aGlzKSlcbiAgICAsIHJlcyA9ICcnXG4gICAgLCBuICAgPSB0b0ludGVnZXIoY291bnQpO1xuICBpZihuIDwgMCB8fCBuID09IEluZmluaXR5KXRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcbiAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcbiAgcmV0dXJuIHJlcztcbn07XG59LHtcIjEwNlwiOjEwNixcIjI3XCI6Mjd9XSwxMDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGRlZmluZWQgPSBfZGVyZXFfKDI3KVxuICAsIGZhaWxzICAgPSBfZGVyZXFfKDM0KVxuICAsIHNwYWNlcyAgPSBfZGVyZXFfKDEwMylcbiAgLCBzcGFjZSAgID0gJ1snICsgc3BhY2VzICsgJ10nXG4gICwgbm9uICAgICA9ICdcXHUyMDBiXFx1MDA4NSdcbiAgLCBsdHJpbSAgID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpXG4gICwgcnRyaW0gICA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uKEtFWSwgZXhlYywgQUxJQVMpe1xuICB2YXIgZXhwICAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KTtcbiAgdmFyIGZuID0gZXhwW0tFWV0gPSBGT1JDRSA/IGV4ZWModHJpbSkgOiBzcGFjZXNbS0VZXTtcbiAgaWYoQUxJQVMpZXhwW0FMSUFTXSA9IGZuO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIEZPUkNFLCAnU3RyaW5nJywgZXhwKTtcbn07XG5cbi8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4vLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcbi8vIDMgLT4gU3RyaW5nI3RyaW1cbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uKHN0cmluZywgVFlQRSl7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZihUWVBFICYgMSlzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZihUWVBFICYgMilzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcbn0se1wiMTAzXCI6MTAzLFwiMjdcIjoyNyxcIjMyXCI6MzIsXCIzNFwiOjM0fV0sMTAzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbn0se31dLDEwNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY3R4ICAgICAgICAgICAgICAgID0gX2RlcmVxXygyNSlcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSBfZGVyZXFfKDQ0KVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IF9kZXJlcV8oNDEpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gX2RlcmVxXygyOSlcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihfZGVyZXFfKDE4KShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xufSx7XCIxOFwiOjE4LFwiMjVcIjoyNSxcIjI5XCI6MjksXCIzOFwiOjM4LFwiNDFcIjo0MSxcIjQ0XCI6NDR9XSwxMDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvSW50ZWdlciA9IF9kZXJlcV8oMTA2KVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbn0se1wiMTA2XCI6MTA2fV0sMTA2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbn0se31dLDEwNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gX2RlcmVxXyg0NSlcbiAgLCBkZWZpbmVkID0gX2RlcmVxXygyNyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiMjdcIjoyNyxcIjQ1XCI6NDV9XSwxMDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMDYpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG59LHtcIjEwNlwiOjEwNn1dLDEwOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IF9kZXJlcV8oMjcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbn0se1wiMjdcIjoyN31dLDExMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbn0se1wiNDlcIjo0OX1dLDExMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5pZihfZGVyZXFfKDI4KSl7XG4gIHZhciBMSUJSQVJZICAgICAgICAgICAgID0gX2RlcmVxXyg1OClcbiAgICAsIGdsb2JhbCAgICAgICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAgICwgZmFpbHMgICAgICAgICAgICAgICA9IF9kZXJlcV8oMzQpXG4gICAgLCAkZXhwb3J0ICAgICAgICAgICAgID0gX2RlcmVxXygzMilcbiAgICAsICR0eXBlZCAgICAgICAgICAgICAgPSBfZGVyZXFfKDExMylcbiAgICAsICRidWZmZXIgICAgICAgICAgICAgPSBfZGVyZXFfKDExMilcbiAgICAsIGN0eCAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDI1KVxuICAgICwgYW5JbnN0YW5jZSAgICAgICAgICA9IF9kZXJlcV8oNilcbiAgICAsIHByb3BlcnR5RGVzYyAgICAgICAgPSBfZGVyZXFfKDg1KVxuICAgICwgaGlkZSAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNDApXG4gICAgLCByZWRlZmluZUFsbCAgICAgICAgID0gX2RlcmVxXyg4NilcbiAgICAsIHRvSW50ZWdlciAgICAgICAgICAgPSBfZGVyZXFfKDEwNilcbiAgICAsIHRvTGVuZ3RoICAgICAgICAgICAgPSBfZGVyZXFfKDEwOClcbiAgICAsIHRvSW5kZXggICAgICAgICAgICAgPSBfZGVyZXFfKDEwNSlcbiAgICAsIHRvUHJpbWl0aXZlICAgICAgICAgPSBfZGVyZXFfKDExMClcbiAgICAsIGhhcyAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAgICwgc2FtZSAgICAgICAgICAgICAgICA9IF9kZXJlcV8oODkpXG4gICAgLCBjbGFzc29mICAgICAgICAgICAgID0gX2RlcmVxXygxNylcbiAgICAsIGlzT2JqZWN0ICAgICAgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAgICwgdG9PYmplY3QgICAgICAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAgICwgaXNBcnJheUl0ZXIgICAgICAgICA9IF9kZXJlcV8oNDYpXG4gICAgLCBjcmVhdGUgICAgICAgICAgICAgID0gX2RlcmVxXyg2NilcbiAgICAsIGdldFByb3RvdHlwZU9mICAgICAgPSBfZGVyZXFfKDc0KVxuICAgICwgZ09QTiAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNzIpLmZcbiAgICAsIGdldEl0ZXJGbiAgICAgICAgICAgPSBfZGVyZXFfKDExOClcbiAgICAsIHVpZCAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDExNClcbiAgICAsIHdrcyAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDExNylcbiAgICAsIGNyZWF0ZUFycmF5TWV0aG9kICAgPSBfZGVyZXFfKDEyKVxuICAgICwgY3JlYXRlQXJyYXlJbmNsdWRlcyA9IF9kZXJlcV8oMTEpXG4gICAgLCBzcGVjaWVzQ29uc3RydWN0b3IgID0gX2RlcmVxXyg5NSlcbiAgICAsIEFycmF5SXRlcmF0b3JzICAgICAgPSBfZGVyZXFfKDEzMClcbiAgICAsIEl0ZXJhdG9ycyAgICAgICAgICAgPSBfZGVyZXFfKDU2KVxuICAgICwgJGl0ZXJEZXRlY3QgICAgICAgICA9IF9kZXJlcV8oNTQpXG4gICAgLCBzZXRTcGVjaWVzICAgICAgICAgID0gX2RlcmVxXyg5MSlcbiAgICAsIGFycmF5RmlsbCAgICAgICAgICAgPSBfZGVyZXFfKDkpXG4gICAgLCBhcnJheUNvcHlXaXRoaW4gICAgID0gX2RlcmVxXyg4KVxuICAgICwgJERQICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjcpXG4gICAgLCAkR09QRCAgICAgICAgICAgICAgID0gX2RlcmVxXyg3MClcbiAgICAsIGRQICAgICAgICAgICAgICAgICAgPSAkRFAuZlxuICAgICwgZ09QRCAgICAgICAgICAgICAgICA9ICRHT1BELmZcbiAgICAsIFJhbmdlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuUmFuZ2VFcnJvclxuICAgICwgVHlwZUVycm9yICAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgICAsIFVpbnQ4QXJyYXkgICAgICAgICAgPSBnbG9iYWwuVWludDhBcnJheVxuICAgICwgQVJSQVlfQlVGRkVSICAgICAgICA9ICdBcnJheUJ1ZmZlcidcbiAgICAsIFNIQVJFRF9CVUZGRVIgICAgICAgPSAnU2hhcmVkJyArIEFSUkFZX0JVRkZFUlxuICAgICwgQllURVNfUEVSX0VMRU1FTlQgICA9ICdCWVRFU19QRVJfRUxFTUVOVCdcbiAgICAsIFBST1RPVFlQRSAgICAgICAgICAgPSAncHJvdG90eXBlJ1xuICAgICwgQXJyYXlQcm90byAgICAgICAgICA9IEFycmF5W1BST1RPVFlQRV1cbiAgICAsICRBcnJheUJ1ZmZlciAgICAgICAgPSAkYnVmZmVyLkFycmF5QnVmZmVyXG4gICAgLCAkRGF0YVZpZXcgICAgICAgICAgID0gJGJ1ZmZlci5EYXRhVmlld1xuICAgICwgYXJyYXlGb3JFYWNoICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDApXG4gICAgLCBhcnJheUZpbHRlciAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMilcbiAgICAsIGFycmF5U29tZSAgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgzKVxuICAgICwgYXJyYXlFdmVyeSAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDQpXG4gICAgLCBhcnJheUZpbmQgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgICAsIGFycmF5RmluZEluZGV4ICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAgICwgYXJyYXlJbmNsdWRlcyAgICAgICA9IGNyZWF0ZUFycmF5SW5jbHVkZXModHJ1ZSlcbiAgICAsIGFycmF5SW5kZXhPZiAgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKGZhbHNlKVxuICAgICwgYXJyYXlWYWx1ZXMgICAgICAgICA9IEFycmF5SXRlcmF0b3JzLnZhbHVlc1xuICAgICwgYXJyYXlLZXlzICAgICAgICAgICA9IEFycmF5SXRlcmF0b3JzLmtleXNcbiAgICAsIGFycmF5RW50cmllcyAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5lbnRyaWVzXG4gICAgLCBhcnJheUxhc3RJbmRleE9mICAgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZlxuICAgICwgYXJyYXlSZWR1Y2UgICAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlXG4gICAgLCBhcnJheVJlZHVjZVJpZ2h0ICAgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodFxuICAgICwgYXJyYXlKb2luICAgICAgICAgICA9IEFycmF5UHJvdG8uam9pblxuICAgICwgYXJyYXlTb3J0ICAgICAgICAgICA9IEFycmF5UHJvdG8uc29ydFxuICAgICwgYXJyYXlTbGljZSAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2VcbiAgICAsIGFycmF5VG9TdHJpbmcgICAgICAgPSBBcnJheVByb3RvLnRvU3RyaW5nXG4gICAgLCBhcnJheVRvTG9jYWxlU3RyaW5nID0gQXJyYXlQcm90by50b0xvY2FsZVN0cmluZ1xuICAgICwgSVRFUkFUT1IgICAgICAgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAgICwgVEFHICAgICAgICAgICAgICAgICA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAgICwgVFlQRURfQ09OU1RSVUNUT1IgICA9IHVpZCgndHlwZWRfY29uc3RydWN0b3InKVxuICAgICwgREVGX0NPTlNUUlVDVE9SICAgICA9IHVpZCgnZGVmX2NvbnN0cnVjdG9yJylcbiAgICAsIEFMTF9DT05TVFJVQ1RPUlMgICAgPSAkdHlwZWQuQ09OU1RSXG4gICAgLCBUWVBFRF9BUlJBWSAgICAgICAgID0gJHR5cGVkLlRZUEVEXG4gICAgLCBWSUVXICAgICAgICAgICAgICAgID0gJHR5cGVkLlZJRVdcbiAgICAsIFdST05HX0xFTkdUSCAgICAgICAgPSAnV3JvbmcgbGVuZ3RoISc7XG5cbiAgdmFyICRtYXAgPSBjcmVhdGVBcnJheU1ldGhvZCgxLCBmdW5jdGlvbihPLCBsZW5ndGgpe1xuICAgIHJldHVybiBhbGxvY2F0ZShzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGVuZ3RoKTtcbiAgfSk7XG5cbiAgdmFyIExJVFRMRV9FTkRJQU4gPSBmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShuZXcgVWludDE2QXJyYXkoWzFdKS5idWZmZXIpWzBdID09PSAxO1xuICB9KTtcblxuICB2YXIgRk9SQ0VEX1NFVCA9ICEhVWludDhBcnJheSAmJiAhIVVpbnQ4QXJyYXlbUFJPVE9UWVBFXS5zZXQgJiYgZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgVWludDhBcnJheSgxKS5zZXQoe30pO1xuICB9KTtcblxuICB2YXIgc3RyaWN0VG9MZW5ndGggPSBmdW5jdGlvbihpdCwgU0FNRSl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICB2YXIgbnVtYmVyID0gK2l0XG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0KTtcbiAgICBpZihTQU1FICYmICFzYW1lKG51bWJlciwgbGVuZ3RoKSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICB2YXIgdG9PZmZzZXQgPSBmdW5jdGlvbihpdCwgQllURVMpe1xuICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoaXQpO1xuICAgIGlmKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICUgQllURVMpdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuICAgIHJldHVybiBvZmZzZXQ7XG4gIH07XG5cbiAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24oaXQpe1xuICAgIGlmKGlzT2JqZWN0KGl0KSAmJiBUWVBFRF9BUlJBWSBpbiBpdClyZXR1cm4gaXQ7XG4gICAgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSB0eXBlZCBhcnJheSEnKTtcbiAgfTtcblxuICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbihDLCBsZW5ndGgpe1xuICAgIGlmKCEoaXNPYmplY3QoQykgJiYgVFlQRURfQ09OU1RSVUNUT1IgaW4gQykpe1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJdCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvciEnKTtcbiAgICB9IHJldHVybiBuZXcgQyhsZW5ndGgpO1xuICB9O1xuXG4gIHZhciBzcGVjaWVzRnJvbUxpc3QgPSBmdW5jdGlvbihPLCBsaXN0KXtcbiAgICByZXR1cm4gZnJvbUxpc3Qoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxpc3QpO1xuICB9O1xuXG4gIHZhciBmcm9tTGlzdCA9IGZ1bmN0aW9uKEMsIGxpc3Qpe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoXG4gICAgICAsIHJlc3VsdCA9IGFsbG9jYXRlKEMsIGxlbmd0aCk7XG4gICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGxpc3RbaW5kZXgrK107XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oaXQsIGtleSwgaW50ZXJuYWwpe1xuICAgIGRQKGl0LCBrZXksIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLl9kW2ludGVybmFsXTsgfX0pO1xuICB9O1xuXG4gIHZhciAkZnJvbSA9IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qLCBtYXBmbiwgdGhpc0FyZyAqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChzb3VyY2UpXG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGksIGxlbmd0aCwgdmFsdWVzLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIWlzQXJyYXlJdGVyKGl0ZXJGbikpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHZhbHVlcyA9IFtdLCBpID0gMDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpKyspe1xuICAgICAgICB2YWx1ZXMucHVzaChzdGVwLnZhbHVlKTtcbiAgICAgIH0gTyA9IHZhbHVlcztcbiAgICB9XG4gICAgaWYobWFwcGluZyAmJiBhTGVuID4gMiltYXBmbiA9IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICBmb3IoaSA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTsgbGVuZ3RoID4gaTsgaSsrKXtcbiAgICAgIHJlc3VsdFtpXSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyICRvZiA9IGZ1bmN0aW9uIG9mKC8qLi4uaXRlbXMqLyl7XG4gICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpO1xuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBpT1MgU2FmYXJpIDYueCBmYWlscyBoZXJlXG4gIHZhciBUT19MT0NBTEVfQlVHID0gISFVaW50OEFycmF5ICYmIGZhaWxzKGZ1bmN0aW9uKCl7IGFycmF5VG9Mb2NhbGVTdHJpbmcuY2FsbChuZXcgVWludDhBcnJheSgxKSk7IH0pO1xuXG4gIHZhciAkdG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZygpe1xuICAgIHJldHVybiBhcnJheVRvTG9jYWxlU3RyaW5nLmFwcGx5KFRPX0xPQ0FMRV9CVUcgPyBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcykpIDogdmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgdmFyIHByb3RvID0ge1xuICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCAvKiwgZW5kICovKXtcbiAgICAgIHJldHVybiBhcnJheUNvcHlXaXRoaW4uY2FsbCh2YWxpZGF0ZSh0aGlzKSwgdGFyZ2V0LCBzdGFydCwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5RXZlcnkodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZpbGw6IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0LCBlbmQgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlGaWxsLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5RmlsdGVyKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLFxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCkpO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUgLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5RmluZCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUgLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5RmluZEluZGV4KHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICBhcnJheUZvckVhY2godmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcbiAgICAgIHJldHVybiBhcnJheUluZGV4T2YodmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8pe1xuICAgICAgcmV0dXJuIGFycmF5SW5jbHVkZXModmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlMYXN0SW5kZXhPZi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gbWFwKG1hcGZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiAkbWFwKHZhbGlkYXRlKHRoaXMpLCBtYXBmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiwgaW5pdGlhbFZhbHVlICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZVJpZ2h0LmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpe1xuICAgICAgdmFyIHRoYXQgICA9IHRoaXNcbiAgICAgICAgLCBsZW5ndGggPSB2YWxpZGF0ZSh0aGF0KS5sZW5ndGhcbiAgICAgICAgLCBtaWRkbGUgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpXG4gICAgICAgICwgaW5kZXggID0gMFxuICAgICAgICAsIHZhbHVlO1xuICAgICAgd2hpbGUoaW5kZXggPCBtaWRkbGUpe1xuICAgICAgICB2YWx1ZSAgICAgICAgID0gdGhhdFtpbmRleF07XG4gICAgICAgIHRoYXRbaW5kZXgrK10gPSB0aGF0Wy0tbGVuZ3RoXTtcbiAgICAgICAgdGhhdFtsZW5ndGhdICA9IHZhbHVlO1xuICAgICAgfSByZXR1cm4gdGhhdDtcbiAgICB9LFxuICAgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlTb21lKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG4gICAgICByZXR1cm4gYXJyYXlTb3J0LmNhbGwodmFsaWRhdGUodGhpcyksIGNvbXBhcmVmbik7XG4gICAgfSxcbiAgICBzdWJhcnJheTogZnVuY3Rpb24gc3ViYXJyYXkoYmVnaW4sIGVuZCl7XG4gICAgICB2YXIgTyAgICAgID0gdmFsaWRhdGUodGhpcylcbiAgICAgICAgLCBsZW5ndGggPSBPLmxlbmd0aFxuICAgICAgICAsICRiZWdpbiA9IHRvSW5kZXgoYmVnaW4sIGxlbmd0aCk7XG4gICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSkoXG4gICAgICAgIE8uYnVmZmVyLFxuICAgICAgICBPLmJ5dGVPZmZzZXQgKyAkYmVnaW4gKiBPLkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICB0b0xlbmd0aCgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKSkgLSAkYmVnaW4pXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgJHNsaWNlID0gZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCl7XG4gICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcyksIHN0YXJ0LCBlbmQpKTtcbiAgfTtcblxuICB2YXIgJHNldCA9IGZ1bmN0aW9uIHNldChhcnJheUxpa2UgLyosIG9mZnNldCAqLyl7XG4gICAgdmFsaWRhdGUodGhpcyk7XG4gICAgdmFyIG9mZnNldCA9IHRvT2Zmc2V0KGFyZ3VtZW50c1sxXSwgMSlcbiAgICAgICwgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICAgICwgc3JjICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aChzcmMubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwO1xuICAgIGlmKGxlbiArIG9mZnNldCA+IGxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgd2hpbGUoaW5kZXggPCBsZW4pdGhpc1tvZmZzZXQgKyBpbmRleF0gPSBzcmNbaW5kZXgrK107XG4gIH07XG5cbiAgdmFyICRpdGVyYXRvcnMgPSB7XG4gICAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpe1xuICAgICAgcmV0dXJuIGFycmF5RW50cmllcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKXtcbiAgICAgIHJldHVybiBhcnJheUtleXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpe1xuICAgICAgcmV0dXJuIGFycmF5VmFsdWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNUQUluZGV4ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpe1xuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpXG4gICAgICAmJiB0YXJnZXRbVFlQRURfQVJSQVldXG4gICAgICAmJiB0eXBlb2Yga2V5ICE9ICdzeW1ib2wnXG4gICAgICAmJiBrZXkgaW4gdGFyZ2V0XG4gICAgICAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG4gIH07XG4gIHZhciAkZ2V0RGVzYyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSl7XG4gICAgcmV0dXJuIGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG4gICAgICA/IHByb3BlcnR5RGVzYygyLCB0YXJnZXRba2V5XSlcbiAgICAgIDogZ09QRCh0YXJnZXQsIGtleSk7XG4gIH07XG4gIHZhciAkc2V0RGVzYyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjKXtcbiAgICBpZihpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgJiYgaXNPYmplY3QoZGVzYylcbiAgICAgICYmIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgICAgJiYgIWhhcyhkZXNjLCAnZ2V0JylcbiAgICAgICYmICFoYXMoZGVzYywgJ3NldCcpXG4gICAgICAvLyBUT0RPOiBhZGQgdmFsaWRhdGlvbiBkZXNjcmlwdG9yIHcvbyBjYWxsaW5nIGFjY2Vzc29yc1xuICAgICAgJiYgIWRlc2MuY29uZmlndXJhYmxlXG4gICAgICAmJiAoIWhhcyhkZXNjLCAnd3JpdGFibGUnKSB8fCBkZXNjLndyaXRhYmxlKVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ2VudW1lcmFibGUnKSB8fCBkZXNjLmVudW1lcmFibGUpXG4gICAgKXtcbiAgICAgIHRhcmdldFtrZXldID0gZGVzYy52YWx1ZTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlIHJldHVybiBkUCh0YXJnZXQsIGtleSwgZGVzYyk7XG4gIH07XG5cbiAgaWYoIUFMTF9DT05TVFJVQ1RPUlMpe1xuICAgICRHT1BELmYgPSAkZ2V0RGVzYztcbiAgICAkRFAuZiAgID0gJHNldERlc2M7XG4gIH1cblxuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFBTExfQ09OU1RSVUNUT1JTLCAnT2JqZWN0Jywge1xuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldERlc2MsXG4gICAgZGVmaW5lUHJvcGVydHk6ICAgICAgICAgICAkc2V0RGVzY1xuICB9KTtcblxuICBpZihmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvU3RyaW5nLmNhbGwoe30pOyB9KSl7XG4gICAgYXJyYXlUb1N0cmluZyA9IGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciAkVHlwZWRBcnJheVByb3RvdHlwZSQgPSByZWRlZmluZUFsbCh7fSwgcHJvdG8pO1xuICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsICRpdGVyYXRvcnMpO1xuICBoaWRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgSVRFUkFUT1IsICRpdGVyYXRvcnMudmFsdWVzKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCB7XG4gICAgc2xpY2U6ICAgICAgICAgICRzbGljZSxcbiAgICBzZXQ6ICAgICAgICAgICAgJHNldCxcbiAgICBjb25zdHJ1Y3RvcjogICAgZnVuY3Rpb24oKXsgLyogbm9vcCAqLyB9LFxuICAgIHRvU3RyaW5nOiAgICAgICBhcnJheVRvU3RyaW5nLFxuICAgIHRvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmdcbiAgfSk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdidWZmZXInLCAnYicpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZU9mZnNldCcsICdvJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlTGVuZ3RoJywgJ2wnKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2xlbmd0aCcsICdlJyk7XG4gIGRQKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgVEFHLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpc1tUWVBFRF9BUlJBWV07IH1cbiAgfSk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIEJZVEVTLCB3cmFwcGVyLCBDTEFNUEVEKXtcbiAgICBDTEFNUEVEID0gISFDTEFNUEVEO1xuICAgIHZhciBOQU1FICAgICAgID0gS0VZICsgKENMQU1QRUQgPyAnQ2xhbXBlZCcgOiAnJykgKyAnQXJyYXknXG4gICAgICAsIElTTlRfVUlOVDggPSBOQU1FICE9ICdVaW50OEFycmF5J1xuICAgICAgLCBHRVRURVIgICAgID0gJ2dldCcgKyBLRVlcbiAgICAgICwgU0VUVEVSICAgICA9ICdzZXQnICsgS0VZXG4gICAgICAsIFR5cGVkQXJyYXkgPSBnbG9iYWxbTkFNRV1cbiAgICAgICwgQmFzZSAgICAgICA9IFR5cGVkQXJyYXkgfHwge31cbiAgICAgICwgVEFDICAgICAgICA9IFR5cGVkQXJyYXkgJiYgZ2V0UHJvdG90eXBlT2YoVHlwZWRBcnJheSlcbiAgICAgICwgRk9SQ0VEICAgICA9ICFUeXBlZEFycmF5IHx8ICEkdHlwZWQuQUJWXG4gICAgICAsIE8gICAgICAgICAgPSB7fVxuICAgICAgLCBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheSAmJiBUeXBlZEFycmF5W1BST1RPVFlQRV07XG4gICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIHJldHVybiBkYXRhLnZbR0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCBMSVRUTEVfRU5ESUFOKTtcbiAgICB9O1xuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCwgdmFsdWUpe1xuICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuICAgICAgaWYoQ0xBTVBFRCl2YWx1ZSA9ICh2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpKSA8IDAgPyAwIDogdmFsdWUgPiAweGZmID8gMHhmZiA6IHZhbHVlICYgMHhmZjtcbiAgICAgIGRhdGEudltTRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIHZhbHVlLCBMSVRUTEVfRU5ESUFOKTtcbiAgICB9O1xuICAgIHZhciBhZGRFbGVtZW50ID0gZnVuY3Rpb24odGhhdCwgaW5kZXgpe1xuICAgICAgZFAodGhhdCwgaW5kZXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhpcywgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyKHRoaXMsIGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKXtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUsICdfZCcpO1xuICAgICAgICB2YXIgaW5kZXggID0gMFxuICAgICAgICAgICwgb2Zmc2V0ID0gMFxuICAgICAgICAgICwgYnVmZmVyLCBieXRlTGVuZ3RoLCBsZW5ndGgsIGtsYXNzO1xuICAgICAgICBpZighaXNPYmplY3QoZGF0YSkpe1xuICAgICAgICAgIGxlbmd0aCAgICAgPSBzdHJpY3RUb0xlbmd0aChkYXRhLCB0cnVlKVxuICAgICAgICAgIGJ5dGVMZW5ndGggPSBsZW5ndGggKiBCWVRFUztcbiAgICAgICAgICBidWZmZXIgICAgID0gbmV3ICRBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpe1xuICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgICAgb2Zmc2V0ID0gdG9PZmZzZXQoJG9mZnNldCwgQllURVMpO1xuICAgICAgICAgIHZhciAkbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIGlmKCRsZW5ndGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZigkbGVuICUgQllURVMpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9ICRsZW4gLSBvZmZzZXQ7XG4gICAgICAgICAgICBpZihieXRlTGVuZ3RoIDwgMCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0b0xlbmd0aCgkbGVuZ3RoKSAqIEJZVEVTO1xuICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCArIG9mZnNldCA+ICRsZW4pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG4gICAgICAgIH0gZWxzZSBpZihUWVBFRF9BUlJBWSBpbiBkYXRhKXtcbiAgICAgICAgICByZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaGlkZSh0aGF0LCAnX2QnLCB7XG4gICAgICAgICAgYjogYnVmZmVyLFxuICAgICAgICAgIG86IG9mZnNldCxcbiAgICAgICAgICBsOiBieXRlTGVuZ3RoLFxuICAgICAgICAgIGU6IGxlbmd0aCxcbiAgICAgICAgICB2OiBuZXcgJERhdGFWaWV3KGJ1ZmZlcilcbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKWFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBjcmVhdGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkKTtcbiAgICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheSk7XG4gICAgfSBlbHNlIGlmKCEkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXtcbiAgICAgIC8vIFY4IHdvcmtzIHdpdGggaXRlcmF0b3JzLCBidXQgZmFpbHMgaW4gbWFueSBvdGhlciBjYXNlc1xuICAgICAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQ1NTJcbiAgICAgIG5ldyBUeXBlZEFycmF5KG51bGwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgbmV3IFR5cGVkQXJyYXkoaXRlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfSwgdHJ1ZSkpe1xuICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSk7XG4gICAgICAgIHZhciBrbGFzcztcbiAgICAgICAgLy8gYHdzYCBtb2R1bGUgYnVnLCB0ZW1wb3JhcmlseSByZW1vdmUgdmFsaWRhdGlvbiBsZW5ndGggZm9yIFVpbnQ4QXJyYXlcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvcHVsbC82NDVcbiAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXJldHVybiBuZXcgQmFzZShzdHJpY3RUb0xlbmd0aChkYXRhLCBJU05UX1VJTlQ4KSk7XG4gICAgICAgIGlmKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpe1xuICAgICAgICAgIHJldHVybiAkbGVuZ3RoICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpLCAkbGVuZ3RoKVxuICAgICAgICAgICAgOiAkb2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUykpXG4gICAgICAgICAgICAgIDogbmV3IEJhc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSlyZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgfSk7XG4gICAgICBhcnJheUZvckVhY2goVEFDICE9PSBGdW5jdGlvbi5wcm90b3R5cGUgPyBnT1BOKEJhc2UpLmNvbmNhdChnT1BOKFRBQykpIDogZ09QTihCYXNlKSwgZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIShrZXkgaW4gVHlwZWRBcnJheSkpaGlkZShUeXBlZEFycmF5LCBrZXksIEJhc2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IFR5cGVkQXJyYXlQcm90b3R5cGU7XG4gICAgICBpZighTElCUkFSWSlUeXBlZEFycmF5UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHlwZWRBcnJheTtcbiAgICB9XG4gICAgdmFyICRuYXRpdmVJdGVyYXRvciAgID0gVHlwZWRBcnJheVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICAgICwgQ09SUkVDVF9JVEVSX05BTUUgPSAhISRuYXRpdmVJdGVyYXRvciAmJiAoJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gJ3ZhbHVlcycgfHwgJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gdW5kZWZpbmVkKVxuICAgICAgLCAkaXRlcmF0b3IgICAgICAgICA9ICRpdGVyYXRvcnMudmFsdWVzO1xuICAgIGhpZGUoVHlwZWRBcnJheSwgVFlQRURfQ09OU1RSVUNUT1IsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVFlQRURfQVJSQVksIE5BTUUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBERUZfQ09OU1RSVUNUT1IsIFR5cGVkQXJyYXkpO1xuXG4gICAgaWYoQ0xBTVBFRCA/IG5ldyBUeXBlZEFycmF5KDEpW1RBR10gIT0gTkFNRSA6ICEoVEFHIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKXtcbiAgICAgIGRQKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRBRywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBOQU1FOyB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPW05BTUVdID0gVHlwZWRBcnJheTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE8pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsIE5BTUUsIHtcbiAgICAgIEJZVEVTX1BFUl9FTEVNRU5UOiBCWVRFUyxcbiAgICAgIGZyb206ICRmcm9tLFxuICAgICAgb2Y6ICRvZlxuICAgIH0pO1xuXG4gICAgaWYoIShCWVRFU19QRVJfRUxFTUVOVCBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSloaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCwgTkFNRSwgcHJvdG8pO1xuXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0VEX1NFVCwgTkFNRSwge3NldDogJHNldH0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhQ09SUkVDVF9JVEVSX05BTUUsIE5BTUUsICRpdGVyYXRvcnMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyAhPSBhcnJheVRvU3RyaW5nKSwgTkFNRSwge3RvU3RyaW5nOiBhcnJheVRvU3RyaW5nfSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICBuZXcgVHlwZWRBcnJheSgxKS5zbGljZSgpO1xuICAgIH0pLCBOQU1FLCB7c2xpY2U6ICRzbGljZX0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBbMSwgMl0udG9Mb2NhbGVTdHJpbmcoKSAhPSBuZXcgVHlwZWRBcnJheShbMSwgMl0pLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcuY2FsbChbMSwgMl0pO1xuICAgIH0pKSwgTkFNRSwge3RvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmd9KTtcblxuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IENPUlJFQ1RfSVRFUl9OQU1FID8gJG5hdGl2ZUl0ZXJhdG9yIDogJGl0ZXJhdG9yO1xuICAgIGlmKCFMSUJSQVJZICYmICFDT1JSRUNUX0lURVJfTkFNRSloaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIElURVJBVE9SLCAkaXRlcmF0b3IpO1xuICB9O1xufSBlbHNlIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcbn0se1wiMTA1XCI6MTA1LFwiMTA2XCI6MTA2LFwiMTA4XCI6MTA4LFwiMTA5XCI6MTA5LFwiMTFcIjoxMSxcIjExMFwiOjExMCxcIjExMlwiOjExMixcIjExM1wiOjExMyxcIjExNFwiOjExNCxcIjExN1wiOjExNyxcIjExOFwiOjExOCxcIjEyXCI6MTIsXCIxMzBcIjoxMzAsXCIxN1wiOjE3LFwiMjVcIjoyNSxcIjI4XCI6MjgsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjM4XCI6MzgsXCIzOVwiOjM5LFwiNDBcIjo0MCxcIjQ2XCI6NDYsXCI0OVwiOjQ5LFwiNTRcIjo1NCxcIjU2XCI6NTYsXCI1OFwiOjU4LFwiNlwiOjYsXCI2NlwiOjY2LFwiNjdcIjo2NyxcIjcwXCI6NzAsXCI3MlwiOjcyLFwiNzRcIjo3NCxcIjhcIjo4LFwiODVcIjo4NSxcIjg2XCI6ODYsXCI4OVwiOjg5LFwiOVwiOjksXCI5MVwiOjkxLFwiOTVcIjo5NX1dLDExMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIERFU0NSSVBUT1JTICAgID0gX2RlcmVxXygyOClcbiAgLCBMSUJSQVJZICAgICAgICA9IF9kZXJlcV8oNTgpXG4gICwgJHR5cGVkICAgICAgICAgPSBfZGVyZXFfKDExMylcbiAgLCBoaWRlICAgICAgICAgICA9IF9kZXJlcV8oNDApXG4gICwgcmVkZWZpbmVBbGwgICAgPSBfZGVyZXFfKDg2KVxuICAsIGZhaWxzICAgICAgICAgID0gX2RlcmVxXygzNClcbiAgLCBhbkluc3RhbmNlICAgICA9IF9kZXJlcV8oNilcbiAgLCB0b0ludGVnZXIgICAgICA9IF9kZXJlcV8oMTA2KVxuICAsIHRvTGVuZ3RoICAgICAgID0gX2RlcmVxXygxMDgpXG4gICwgZ09QTiAgICAgICAgICAgPSBfZGVyZXFfKDcyKS5mXG4gICwgZFAgICAgICAgICAgICAgPSBfZGVyZXFfKDY3KS5mXG4gICwgYXJyYXlGaWxsICAgICAgPSBfZGVyZXFfKDkpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSBfZGVyZXFfKDkyKVxuICAsIEFSUkFZX0JVRkZFUiAgID0gJ0FycmF5QnVmZmVyJ1xuICAsIERBVEFfVklFVyAgICAgID0gJ0RhdGFWaWV3J1xuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBXUk9OR19MRU5HVEggICA9ICdXcm9uZyBsZW5ndGghJ1xuICAsIFdST05HX0lOREVYICAgID0gJ1dyb25nIGluZGV4ISdcbiAgLCAkQXJyYXlCdWZmZXIgICA9IGdsb2JhbFtBUlJBWV9CVUZGRVJdXG4gICwgJERhdGFWaWV3ICAgICAgPSBnbG9iYWxbREFUQV9WSUVXXVxuICAsIE1hdGggICAgICAgICAgID0gZ2xvYmFsLk1hdGhcbiAgLCBSYW5nZUVycm9yICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXG4gICwgSW5maW5pdHkgICAgICAgPSBnbG9iYWwuSW5maW5pdHlcbiAgLCBCYXNlQnVmZmVyICAgICA9ICRBcnJheUJ1ZmZlclxuICAsIGFicyAgICAgICAgICAgID0gTWF0aC5hYnNcbiAgLCBwb3cgICAgICAgICAgICA9IE1hdGgucG93XG4gICwgZmxvb3IgICAgICAgICAgPSBNYXRoLmZsb29yXG4gICwgbG9nICAgICAgICAgICAgPSBNYXRoLmxvZ1xuICAsIExOMiAgICAgICAgICAgID0gTWF0aC5MTjJcbiAgLCBCVUZGRVIgICAgICAgICA9ICdidWZmZXInXG4gICwgQllURV9MRU5HVEggICAgPSAnYnl0ZUxlbmd0aCdcbiAgLCBCWVRFX09GRlNFVCAgICA9ICdieXRlT2Zmc2V0J1xuICAsICRCVUZGRVIgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX2InIDogQlVGRkVSXG4gICwgJExFTkdUSCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbCcgOiBCWVRFX0xFTkdUSFxuICAsICRPRkZTRVQgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX28nIDogQllURV9PRkZTRVQ7XG5cbi8vIElFRUU3NTQgY29udmVyc2lvbnMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG52YXIgcGFja0lFRUU3NTQgPSBmdW5jdGlvbih2YWx1ZSwgbUxlbiwgbkJ5dGVzKXtcbiAgdmFyIGJ1ZmZlciA9IEFycmF5KG5CeXRlcylcbiAgICAsIGVMZW4gICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICAgICwgZU1heCAgID0gKDEgPDwgZUxlbikgLSAxXG4gICAgLCBlQmlhcyAgPSBlTWF4ID4+IDFcbiAgICAsIHJ0ICAgICA9IG1MZW4gPT09IDIzID8gcG93KDIsIC0yNCkgLSBwb3coMiwgLTc3KSA6IDBcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHMgICAgICA9IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwID8gMSA6IDBcbiAgICAsIGUsIG0sIGM7XG4gIHZhbHVlID0gYWJzKHZhbHVlKVxuICBpZih2YWx1ZSAhPSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpe1xuICAgIG0gPSB2YWx1ZSAhPSB2YWx1ZSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBmbG9vcihsb2codmFsdWUpIC8gTE4yKTtcbiAgICBpZih2YWx1ZSAqIChjID0gcG93KDIsIC1lKSkgPCAxKXtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYoZSArIGVCaWFzID49IDEpe1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIHBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZih2YWx1ZSAqIGMgPj0gMil7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuICAgIGlmKGUgKyBlQmlhcyA+PSBlTWF4KXtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmKGUgKyBlQmlhcyA+PSAxKXtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBwb3coMiwgZUJpYXMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuICBmb3IoOyBtTGVuID49IDg7IGJ1ZmZlcltpKytdID0gbSAmIDI1NSwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG4gIGUgPSBlIDw8IG1MZW4gfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvcig7IGVMZW4gPiAwOyBidWZmZXJbaSsrXSA9IGUgJiAyNTUsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuICBidWZmZXJbLS1pXSB8PSBzICogMTI4O1xuICByZXR1cm4gYnVmZmVyO1xufTtcbnZhciB1bnBhY2tJRUVFNzU0ID0gZnVuY3Rpb24oYnVmZmVyLCBtTGVuLCBuQnl0ZXMpe1xuICB2YXIgZUxlbiAgPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgICAsIGVNYXggID0gKDEgPDwgZUxlbikgLSAxXG4gICAgLCBlQmlhcyA9IGVNYXggPj4gMVxuICAgICwgbkJpdHMgPSBlTGVuIC0gN1xuICAgICwgaSAgICAgPSBuQnl0ZXMgLSAxXG4gICAgLCBzICAgICA9IGJ1ZmZlcltpLS1dXG4gICAgLCBlICAgICA9IHMgJiAxMjdcbiAgICAsIG07XG4gIHMgPj49IDc7XG4gIGZvcig7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbaV0sIGktLSwgbkJpdHMgLT0gOCk7XG4gIG0gPSBlICYgKDEgPDwgLW5CaXRzKSAtIDE7XG4gIGUgPj49IC1uQml0cztcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgaWYoZSA9PT0gMCl7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmKGUgPT09IGVNYXgpe1xuICAgIHJldHVybiBtID8gTmFOIDogcyA/IC1JbmZpbml0eSA6IEluZmluaXR5O1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgcG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH0gcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBwb3coMiwgZSAtIG1MZW4pO1xufTtcblxudmFyIHVucGFja0kzMiA9IGZ1bmN0aW9uKGJ5dGVzKXtcbiAgcmV0dXJuIGJ5dGVzWzNdIDw8IDI0IHwgYnl0ZXNbMl0gPDwgMTYgfCBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG59O1xudmFyIHBhY2tJOCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIFtpdCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrSTE2ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrSTMyID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZiwgaXQgPj4gOCAmIDB4ZmYsIGl0ID4+IDE2ICYgMHhmZiwgaXQgPj4gMjQgJiAweGZmXTtcbn07XG52YXIgcGFja0Y2NCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCA1MiwgOCk7XG59O1xudmFyIHBhY2tGMzIgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBwYWNrSUVFRTc1NChpdCwgMjMsIDQpO1xufTtcblxudmFyIGFkZEdldHRlciA9IGZ1bmN0aW9uKEMsIGtleSwgaW50ZXJuYWwpe1xuICBkUChDW1BST1RPVFlQRV0sIGtleSwge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXNbaW50ZXJuYWxdOyB9fSk7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24odmlldywgYnl0ZXMsIGluZGV4LCBpc0xpdHRsZUVuZGlhbil7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleFxuICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2JcbiAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG4gICAgLCBwYWNrICA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBzdGFydCArIGJ5dGVzKTtcbiAgcmV0dXJuIGlzTGl0dGxlRW5kaWFuID8gcGFjayA6IHBhY2sucmV2ZXJzZSgpO1xufTtcbnZhciBzZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGNvbnZlcnNpb24sIHZhbHVlLCBpc0xpdHRsZUVuZGlhbil7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleFxuICAgICwgaW50SW5kZXggPSB0b0ludGVnZXIobnVtSW5kZXgpO1xuICBpZihudW1JbmRleCAhPSBpbnRJbmRleCB8fCBpbnRJbmRleCA8IDAgfHwgaW50SW5kZXggKyBieXRlcyA+IHZpZXdbJExFTkdUSF0pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2JcbiAgICAsIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdXG4gICAgLCBwYWNrICA9IGNvbnZlcnNpb24oK3ZhbHVlKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGJ5dGVzOyBpKyspc3RvcmVbc3RhcnQgKyBpXSA9IHBhY2tbaXNMaXR0bGVFbmRpYW4gPyBpIDogYnl0ZXMgLSBpIC0gMV07XG59O1xuXG52YXIgdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyA9IGZ1bmN0aW9uKHRoYXQsIGxlbmd0aCl7XG4gIGFuSW5zdGFuY2UodGhhdCwgJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuICB2YXIgbnVtYmVyTGVuZ3RoID0gK2xlbmd0aFxuICAgICwgYnl0ZUxlbmd0aCAgID0gdG9MZW5ndGgobnVtYmVyTGVuZ3RoKTtcbiAgaWYobnVtYmVyTGVuZ3RoICE9IGJ5dGVMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICByZXR1cm4gYnl0ZUxlbmd0aDtcbn07XG5cbmlmKCEkdHlwZWQuQUJWKXtcbiAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IHZhbGlkYXRlQXJyYXlCdWZmZXJBcmd1bWVudHModGhpcywgbGVuZ3RoKTtcbiAgICB0aGlzLl9iICAgICAgID0gYXJyYXlGaWxsLmNhbGwoQXJyYXkoYnl0ZUxlbmd0aCksIDApO1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gICREYXRhVmlldyA9IGZ1bmN0aW9uIERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCl7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkRGF0YVZpZXcsIERBVEFfVklFVyk7XG4gICAgYW5JbnN0YW5jZShidWZmZXIsICRBcnJheUJ1ZmZlciwgREFUQV9WSUVXKTtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYnVmZmVyWyRMRU5HVEhdXG4gICAgICAsIG9mZnNldCAgICAgICA9IHRvSW50ZWdlcihieXRlT2Zmc2V0KTtcbiAgICBpZihvZmZzZXQgPCAwIHx8IG9mZnNldCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckxlbmd0aCAtIG9mZnNldCA6IHRvTGVuZ3RoKGJ5dGVMZW5ndGgpO1xuICAgIGlmKG9mZnNldCArIGJ5dGVMZW5ndGggPiBidWZmZXJMZW5ndGgpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHRoaXNbJEJVRkZFUl0gPSBidWZmZXI7XG4gICAgdGhpc1skT0ZGU0VUXSA9IG9mZnNldDtcbiAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcbiAgfTtcblxuICBpZihERVNDUklQVE9SUyl7XG4gICAgYWRkR2V0dGVyKCRBcnJheUJ1ZmZlciwgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJVRkZFUiwgJ19iJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfT0ZGU0VULCAnX28nKTtcbiAgfVxuXG4gIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgZ2V0SW50ODogZnVuY3Rpb24gZ2V0SW50OChieXRlT2Zmc2V0KXtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF0gPDwgMjQgPj4gMjQ7XG4gICAgfSxcbiAgICBnZXRVaW50ODogZnVuY3Rpb24gZ2V0VWludDgoYnl0ZU9mZnNldCl7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdO1xuICAgIH0sXG4gICAgZ2V0SW50MTY6IGZ1bmN0aW9uIGdldEludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiAoYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdKSA8PCAxNiA+PiAxNjtcbiAgICB9LFxuICAgIGdldFVpbnQxNjogZnVuY3Rpb24gZ2V0VWludDE2KGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG4gICAgfSxcbiAgICBnZXRJbnQzMjogZnVuY3Rpb24gZ2V0SW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpO1xuICAgIH0sXG4gICAgZ2V0VWludDMyOiBmdW5jdGlvbiBnZXRVaW50MzIoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJMzIoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSkpID4+PiAwO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQzMjogZnVuY3Rpb24gZ2V0RmxvYXQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDIzLCA0KTtcbiAgICB9LFxuICAgIGdldEZsb2F0NjQ6IGZ1bmN0aW9uIGdldEZsb2F0NjQoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHJldHVybiB1bnBhY2tJRUVFNzU0KGdldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pLCA1MiwgOCk7XG4gICAgfSxcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICBzZXQodGhpcywgMSwgYnl0ZU9mZnNldCwgcGFja0k4LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZXRJbnQxNjogZnVuY3Rpb24gc2V0SW50MTYoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEludDMyOiBmdW5jdGlvbiBzZXRJbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrSTMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldFVpbnQzMjogZnVuY3Rpb24gc2V0VWludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBwYWNrRjMyLCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldEZsb2F0NjQ6IGZ1bmN0aW9uIHNldEZsb2F0NjQoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgOCwgYnl0ZU9mZnNldCwgcGFja0Y2NCwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIGlmKCFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyAkQXJyYXlCdWZmZXI7ICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgJEFycmF5QnVmZmVyKC41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgfSkpe1xuICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCl7XG4gICAgICByZXR1cm4gbmV3IEJhc2VCdWZmZXIodmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpKTtcbiAgICB9O1xuICAgIHZhciBBcnJheUJ1ZmZlclByb3RvID0gJEFycmF5QnVmZmVyW1BST1RPVFlQRV0gPSBCYXNlQnVmZmVyW1BST1RPVFlQRV07XG4gICAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlQnVmZmVyKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyApe1xuICAgICAgaWYoISgoa2V5ID0ga2V5c1tqKytdKSBpbiAkQXJyYXlCdWZmZXIpKWhpZGUoJEFycmF5QnVmZmVyLCBrZXksIEJhc2VCdWZmZXJba2V5XSk7XG4gICAgfTtcbiAgICBpZighTElCUkFSWSlBcnJheUJ1ZmZlclByb3RvLmNvbnN0cnVjdG9yID0gJEFycmF5QnVmZmVyO1xuICB9XG4gIC8vIGlPUyBTYWZhcmkgNy54IGJ1Z1xuICB2YXIgdmlldyA9IG5ldyAkRGF0YVZpZXcobmV3ICRBcnJheUJ1ZmZlcigyKSlcbiAgICAsICRzZXRJbnQ4ID0gJERhdGFWaWV3W1BST1RPVFlQRV0uc2V0SW50ODtcbiAgdmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuICB2aWV3LnNldEludDgoMSwgMjE0NzQ4MzY0OSk7XG4gIGlmKHZpZXcuZ2V0SW50OCgwKSB8fCAhdmlldy5nZXRJbnQ4KDEpKXJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgc2V0SW50ODogZnVuY3Rpb24gc2V0SW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSl7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxuc2V0VG9TdHJpbmdUYWcoJEFycmF5QnVmZmVyLCBBUlJBWV9CVUZGRVIpO1xuc2V0VG9TdHJpbmdUYWcoJERhdGFWaWV3LCBEQVRBX1ZJRVcpO1xuaGlkZSgkRGF0YVZpZXdbUFJPVE9UWVBFXSwgJHR5cGVkLlZJRVcsIHRydWUpO1xuZXhwb3J0c1tBUlJBWV9CVUZGRVJdID0gJEFycmF5QnVmZmVyO1xuZXhwb3J0c1tEQVRBX1ZJRVddID0gJERhdGFWaWV3O1xufSx7XCIxMDZcIjoxMDYsXCIxMDhcIjoxMDgsXCIxMTNcIjoxMTMsXCIyOFwiOjI4LFwiMzRcIjozNCxcIjM4XCI6MzgsXCI0MFwiOjQwLFwiNThcIjo1OCxcIjZcIjo2LFwiNjdcIjo2NyxcIjcyXCI6NzIsXCI4NlwiOjg2LFwiOVwiOjksXCI5MlwiOjkyfV0sMTEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgPSBfZGVyZXFfKDM4KVxuICAsIGhpZGUgICA9IF9kZXJlcV8oNDApXG4gICwgdWlkICAgID0gX2RlcmVxXygxMTQpXG4gICwgVFlQRUQgID0gdWlkKCd0eXBlZF9hcnJheScpXG4gICwgVklFVyAgID0gdWlkKCd2aWV3JylcbiAgLCBBQlYgICAgPSAhIShnbG9iYWwuQXJyYXlCdWZmZXIgJiYgZ2xvYmFsLkRhdGFWaWV3KVxuICAsIENPTlNUUiA9IEFCVlxuICAsIGkgPSAwLCBsID0gOSwgVHlwZWQ7XG5cbnZhciBUeXBlZEFycmF5Q29uc3RydWN0b3JzID0gKFxuICAnSW50OEFycmF5LFVpbnQ4QXJyYXksVWludDhDbGFtcGVkQXJyYXksSW50MTZBcnJheSxVaW50MTZBcnJheSxJbnQzMkFycmF5LFVpbnQzMkFycmF5LEZsb2F0MzJBcnJheSxGbG9hdDY0QXJyYXknXG4pLnNwbGl0KCcsJyk7XG5cbndoaWxlKGkgPCBsKXtcbiAgaWYoVHlwZWQgPSBnbG9iYWxbVHlwZWRBcnJheUNvbnN0cnVjdG9yc1tpKytdXSl7XG4gICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFRZUEVELCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gIH0gZWxzZSBDT05TVFIgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFCVjogICAgQUJWLFxuICBDT05TVFI6IENPTlNUUixcbiAgVFlQRUQ6ICBUWVBFRCxcbiAgVklFVzogICBWSUVXXG59O1xufSx7XCIxMTRcIjoxMTQsXCIzOFwiOjM4LFwiNDBcIjo0MH1dLDExNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbn0se31dLDExNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGNvcmUgICAgICAgICAgID0gX2RlcmVxXygyMylcbiAgLCBMSUJSQVJZICAgICAgICA9IF9kZXJlcV8oNTgpXG4gICwgd2tzRXh0ICAgICAgICAgPSBfZGVyZXFfKDExNilcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oNjcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG59LHtcIjExNlwiOjExNixcIjIzXCI6MjMsXCIzOFwiOjM4LFwiNThcIjo1OCxcIjY3XCI6Njd9XSwxMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuZXhwb3J0cy5mID0gX2RlcmVxXygxMTcpO1xufSx7XCIxMTdcIjoxMTd9XSwxMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHN0b3JlICAgICAgPSBfZGVyZXFfKDk0KSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gX2RlcmVxXygxMTQpXG4gICwgU3ltYm9sICAgICA9IF9kZXJlcV8oMzgpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xufSx7XCIxMTRcIjoxMTQsXCIzOFwiOjM4LFwiOTRcIjo5NH1dLDExODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY2xhc3NvZiAgID0gX2RlcmVxXygxNylcbiAgLCBJVEVSQVRPUiAgPSBfZGVyZXFfKDExNykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSBfZGVyZXFfKDU2KTtcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xufSx7XCIxMTdcIjoxMTcsXCIxN1wiOjE3LFwiMjNcIjoyMyxcIjU2XCI6NTZ9XSwxMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluZ3IvUmV4RXhwLmVzY2FwZVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRyZSAgICAgPSBfZGVyZXFfKDg4KSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG59LHtcIjMyXCI6MzIsXCI4OFwiOjg4fV0sMTIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtjb3B5V2l0aGluOiBfZGVyZXFfKDgpfSk7XG5cbl9kZXJlcV8oNSkoJ2NvcHlXaXRoaW4nKTtcbn0se1wiMzJcIjozMixcIjVcIjo1LFwiOFwiOjh9XSwxMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRldmVyeSAgPSBfZGVyZXFfKDEyKSg0KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg5NikoW10uZXZlcnksIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy41IC8gMTUuNC40LjE2IEFycmF5LnByb3RvdHlwZS5ldmVyeShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkZXZlcnkodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEyMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7ZmlsbDogX2RlcmVxXyg5KX0pO1xuXG5fZGVyZXFfKDUpKCdmaWxsJyk7XG59LHtcIjMyXCI6MzIsXCI1XCI6NSxcIjlcIjo5fV0sMTIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkZmlsdGVyID0gX2RlcmVxXygxMikoMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oOTYpKFtdLmZpbHRlciwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEyNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkZmluZCAgID0gX2RlcmVxXygxMikoNilcbiAgLCBLRVkgICAgID0gJ2ZpbmRJbmRleCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuX2RlcmVxXyg1KShLRVkpO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjVcIjo1fV0sMTI1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkZmluZCAgID0gX2RlcmVxXygxMikoNSlcbiAgLCBLRVkgICAgID0gJ2ZpbmQnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuX2RlcmVxXyg1KShLRVkpO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjVcIjo1fV0sMTI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgJGZvckVhY2ggPSBfZGVyZXFfKDEyKSgwKVxuICAsIFNUUklDVCAgID0gX2RlcmVxXyg5NikoW10uZm9yRWFjaCwgdHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIVNUUklDVCwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gX2RlcmVxXygyNSlcbiAgLCAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9PYmplY3QgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCBjYWxsICAgICAgICAgICA9IF9kZXJlcV8oNTEpXG4gICwgaXNBcnJheUl0ZXIgICAgPSBfZGVyZXFfKDQ2KVxuICAsIHRvTGVuZ3RoICAgICAgID0gX2RlcmVxXygxMDgpXG4gICwgY3JlYXRlUHJvcGVydHkgPSBfZGVyZXFfKDI0KVxuICAsIGdldEl0ZXJGbiAgICAgID0gX2RlcmVxXygxMTgpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfZGVyZXFfKDU0KShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxufSx7XCIxMDhcIjoxMDgsXCIxMDlcIjoxMDksXCIxMThcIjoxMTgsXCIyNFwiOjI0LFwiMjVcIjoyNSxcIjMyXCI6MzIsXCI0NlwiOjQ2LFwiNTFcIjo1MSxcIjU0XCI6NTR9XSwxMjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsICRpbmRleE9mICAgICAgPSBfZGVyZXFfKDExKShmYWxzZSlcbiAgLCAkbmF0aXZlICAgICAgID0gW10uaW5kZXhPZlxuICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIV9kZXJlcV8oOTYpKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTEgLyAxNS40LjQuMTQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/ICRuYXRpdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xufSx7XCIxMVwiOjExLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCB7aXNBcnJheTogX2RlcmVxXyg0Nyl9KTtcbn0se1wiMzJcIjozMixcIjQ3XCI6NDd9XSwxMzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSBfZGVyZXFfKDUpXG4gICwgc3RlcCAgICAgICAgICAgICA9IF9kZXJlcV8oNTUpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IF9kZXJlcV8oNTYpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IF9kZXJlcV8oMTA3KTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDUzKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbn0se1wiMTA3XCI6MTA3LFwiNVwiOjUsXCI1M1wiOjUzLFwiNTVcIjo1NSxcIjU2XCI6NTZ9XSwxMzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5qb2luKHNlcGFyYXRvcilcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvSU9iamVjdCA9IF9kZXJlcV8oMTA3KVxuICAsIGFycmF5Sm9pbiA9IFtdLmpvaW47XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBzdHJpbmdzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChfZGVyZXFfKDQ1KSAhPSBPYmplY3QgfHwgIV9kZXJlcV8oOTYpKGFycmF5Sm9pbikpLCAnQXJyYXknLCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXtcbiAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwodG9JT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xufSx7XCIxMDdcIjoxMDcsXCIzMlwiOjMyLFwiNDVcIjo0NSxcIjk2XCI6OTZ9XSwxMzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvSU9iamVjdCAgICAgPSBfZGVyZXFfKDEwNylcbiAgLCB0b0ludGVnZXIgICAgID0gX2RlcmVxXygxMDYpXG4gICwgdG9MZW5ndGggICAgICA9IF9kZXJlcV8oMTA4KVxuICAsICRuYXRpdmUgICAgICAgPSBbXS5sYXN0SW5kZXhPZlxuICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFfZGVyZXFfKDk2KSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSBAWyotMV0gKi8pe1xuICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICBpZihORUdBVElWRV9aRVJPKXJldHVybiAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMDtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSBsZW5ndGggLSAxO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKWluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHRvSW50ZWdlcihhcmd1bWVudHNbMV0pKTtcbiAgICBpZihpbmRleCA8IDApaW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gc2VhcmNoRWxlbWVudClyZXR1cm4gaW5kZXggfHwgMDtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0pO1xufSx7XCIxMDZcIjoxMDYsXCIxMDdcIjoxMDcsXCIxMDhcIjoxMDgsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEzMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJG1hcCAgICA9IF9kZXJlcV8oMTIpKDEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDk2KShbXS5tYXAsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xNSAvIDE1LjQuNC4xOSBBcnJheS5wcm90b3R5cGUubWFwKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTM0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgY3JlYXRlUHJvcGVydHkgPSBfZGVyZXFfKDI0KTtcblxuLy8gV2ViS2l0IEFycmF5Lm9mIGlzbid0IGdlbmVyaWNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgZnVuY3Rpb24gRigpe31cbiAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xufSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICwgYUxlbiAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKGFMZW4pO1xuICAgIHdoaWxlKGFMZW4gPiBpbmRleCljcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBhTGVuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xufSx7XCIyNFwiOjI0LFwiMzJcIjozMixcIjM0XCI6MzR9XSwxMzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRyZWR1Y2UgPSBfZGVyZXFfKDEzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg5NikoW10ucmVkdWNlUmlnaHQsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xOSAvIDE1LjQuNC4yMiBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLyl7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzWzFdLCB0cnVlKTtcbiAgfVxufSk7XG59LHtcIjEzXCI6MTMsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEzNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHJlZHVjZSA9IF9kZXJlcV8oMTMpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDk2KShbXS5yZWR1Y2UsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xOCAvIDE1LjQuNC4yMSBBcnJheS5wcm90b3R5cGUucmVkdWNlKGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLyl7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzWzFdLCBmYWxzZSk7XG4gIH1cbn0pO1xufSx7XCIxM1wiOjEzLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMzc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgPSBfZGVyZXFfKDMyKVxuICAsIGh0bWwgICAgICAgPSBfZGVyZXFfKDQxKVxuICAsIGNvZiAgICAgICAgPSBfZGVyZXFfKDE4KVxuICAsIHRvSW5kZXggICAgPSBfZGVyZXFfKDEwNSlcbiAgLCB0b0xlbmd0aCAgID0gX2RlcmVxXygxMDgpXG4gICwgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIGlmKGh0bWwpYXJyYXlTbGljZS5jYWxsKGh0bWwpO1xufSksICdBcnJheScsIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpe1xuICAgIHZhciBsZW4gICA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKVxuICAgICAgLCBrbGFzcyA9IGNvZih0aGlzKTtcbiAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZDtcbiAgICBpZihrbGFzcyA9PSAnQXJyYXknKXJldHVybiBhcnJheVNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG4gICAgdmFyIHN0YXJ0ICA9IHRvSW5kZXgoYmVnaW4sIGxlbilcbiAgICAgICwgdXBUbyAgID0gdG9JbmRleChlbmQsIGxlbilcbiAgICAgICwgc2l6ZSAgID0gdG9MZW5ndGgodXBUbyAtIHN0YXJ0KVxuICAgICAgLCBjbG9uZWQgPSBBcnJheShzaXplKVxuICAgICAgLCBpICAgICAgPSAwO1xuICAgIGZvcig7IGkgPCBzaXplOyBpKyspY2xvbmVkW2ldID0ga2xhc3MgPT0gJ1N0cmluZydcbiAgICAgID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKVxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxufSk7XG59LHtcIjEwNVwiOjEwNSxcIjEwOFwiOjEwOCxcIjE4XCI6MTgsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjQxXCI6NDF9XSwxMzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRzb21lICAgPSBfZGVyZXFfKDEyKSgzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg5NikoW10uc29tZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTM5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIGFGdW5jdGlvbiA9IF9kZXJlcV8oMylcbiAgLCB0b09iamVjdCAgPSBfZGVyZXFfKDEwOSlcbiAgLCBmYWlscyAgICAgPSBfZGVyZXFfKDM0KVxuICAsICRzb3J0ICAgICA9IFtdLnNvcnRcbiAgLCB0ZXN0ICAgICAgPSBbMSwgMiwgM107XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIElFOC1cbiAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gVjggYnVnXG4gIHRlc3Quc29ydChudWxsKTtcbiAgLy8gT2xkIFdlYktpdFxufSkgfHwgIV9kZXJlcV8oOTYpKCRzb3J0KSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjI1IEFycmF5LnByb3RvdHlwZS5zb3J0KGNvbXBhcmVmbilcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pe1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiAkc29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xufSx7XCIxMDlcIjoxMDksXCIzXCI6MyxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiOTZcIjo5Nn1dLDE0MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDkxKSgnQXJyYXknKTtcbn0se1wiOTFcIjo5MX1dLDE0MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHtub3c6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfX0pO1xufSx7XCIzMlwiOjMyfV0sMTQyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgZmFpbHMgICA9IF9kZXJlcV8oMzQpXG4gICwgZ2V0VGltZSA9IERhdGUucHJvdG90eXBlLmdldFRpbWU7XG5cbnZhciBseiA9IGZ1bmN0aW9uKG51bSl7XG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xufTtcblxuLy8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBoYXMgYSBicm9rZW4gaW1wbGVtZW50YXRpb25zXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gbmV3IERhdGUoLTVlMTMgLSAxKS50b0lTT1N0cmluZygpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIG5ldyBEYXRlKE5hTikudG9JU09TdHJpbmcoKTtcbn0pKSwgJ0RhdGUnLCB7XG4gIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiB0b0lTT1N0cmluZygpe1xuICAgIGlmKCFpc0Zpbml0ZShnZXRUaW1lLmNhbGwodGhpcykpKXRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICAgIHZhciBkID0gdGhpc1xuICAgICAgLCB5ID0gZC5nZXRVVENGdWxsWWVhcigpXG4gICAgICAsIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICAgICAsIHMgPSB5IDwgMCA/ICctJyA6IHkgPiA5OTk5ID8gJysnIDogJyc7XG4gICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuICAgICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICAgJ1QnICsgbHooZC5nZXRVVENIb3VycygpKSArICc6JyArIGx6KGQuZ2V0VVRDTWludXRlcygpKSArXG4gICAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCIzNFwiOjM0fV0sMTQzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9PYmplY3QgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCB0b1ByaW1pdGl2ZSA9IF9kZXJlcV8oMTEwKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gbmV3IERhdGUoTmFOKS50b0pTT04oKSAhPT0gbnVsbCB8fCBEYXRlLnByb3RvdHlwZS50b0pTT04uY2FsbCh7dG9JU09TdHJpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiAxOyB9fSkgIT09IDE7XG59KSwgJ0RhdGUnLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKGtleSl7XG4gICAgdmFyIE8gID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgcHYgPSB0b1ByaW1pdGl2ZShPKTtcbiAgICByZXR1cm4gdHlwZW9mIHB2ID09ICdudW1iZXInICYmICFpc0Zpbml0ZShwdikgPyBudWxsIDogTy50b0lTT1N0cmluZygpO1xuICB9XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiMTEwXCI6MTEwLFwiMzJcIjozMixcIjM0XCI6MzR9XSwxNDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIFRPX1BSSU1JVElWRSA9IF9kZXJlcV8oMTE3KSgndG9QcmltaXRpdmUnKVxuICAsIHByb3RvICAgICAgICA9IERhdGUucHJvdG90eXBlO1xuXG5pZighKFRPX1BSSU1JVElWRSBpbiBwcm90bykpX2RlcmVxXyg0MCkocHJvdG8sIFRPX1BSSU1JVElWRSwgX2RlcmVxXygyNikpO1xufSx7XCIxMTdcIjoxMTcsXCIyNlwiOjI2LFwiNDBcIjo0MH1dLDE0NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgRGF0ZVByb3RvICAgID0gRGF0ZS5wcm90b3R5cGVcbiAgLCBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJ1xuICAsIFRPX1NUUklORyAgICA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgICAgPSBEYXRlUHJvdG9bVE9fU1RSSU5HXVxuICAsIGdldFRpbWUgICAgICA9IERhdGVQcm90by5nZXRUaW1lO1xuaWYobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSl7XG4gIF9kZXJlcV8oODcpKERhdGVQcm90bywgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gJHRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxufSx7XCI4N1wiOjg3fV0sMTQ2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnRnVuY3Rpb24nLCB7YmluZDogX2RlcmVxXygxNil9KTtcbn0se1wiMTZcIjoxNixcIjMyXCI6MzJ9XSwxNDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ICAgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzQpXG4gICwgSEFTX0lOU1RBTkNFICAgPSBfZGVyZXFfKDExNykoJ2hhc0luc3RhbmNlJylcbiAgLCBGdW5jdGlvblByb3RvICA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuaWYoIShIQVNfSU5TVEFOQ0UgaW4gRnVuY3Rpb25Qcm90bykpX2RlcmVxXyg2NykuZihGdW5jdGlvblByb3RvLCBIQVNfSU5TVEFOQ0UsIHt2YWx1ZTogZnVuY3Rpb24oTyl7XG4gIGlmKHR5cGVvZiB0aGlzICE9ICdmdW5jdGlvbicgfHwgIWlzT2JqZWN0KE8pKXJldHVybiBmYWxzZTtcbiAgaWYoIWlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSlyZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG4gIC8vIGZvciBlbnZpcm9ubWVudCB3L28gbmF0aXZlIGBAQGhhc0luc3RhbmNlYCBsb2dpYyBlbm91Z2ggYGluc3RhbmNlb2ZgLCBidXQgYWRkIHRoaXM6XG4gIHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSlpZih0aGlzLnByb3RvdHlwZSA9PT0gTylyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufX0pO1xufSx7XCIxMTdcIjoxMTcsXCI0OVwiOjQ5LFwiNjdcIjo2NyxcIjc0XCI6NzR9XSwxNDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgICAgPSBfZGVyZXFfKDY3KS5mXG4gICwgY3JlYXRlRGVzYyA9IF9kZXJlcV8oODUpXG4gICwgaGFzICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgRlByb3RvICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAsIG5hbWVSRSAgICAgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS9cbiAgLCBOQU1FICAgICAgID0gJ25hbWUnO1xuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IF9kZXJlcV8oMjgpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAgICwgbmFtZSA9ICgnJyArIHRoYXQpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICBoYXModGhhdCwgTkFNRSkgfHwgIWlzRXh0ZW5zaWJsZSh0aGF0KSB8fCBkUCh0aGF0LCBOQU1FLCBjcmVhdGVEZXNjKDUsIG5hbWUpKTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbn0se1wiMjhcIjoyOCxcIjM5XCI6MzksXCI2N1wiOjY3LFwiODVcIjo4NX1dLDE0OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gX2RlcmVxXygxOSk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMikoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xufSx7XCIxOVwiOjE5LFwiMjJcIjoyMn1dLDE1MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgbG9nMXAgICA9IF9kZXJlcV8oNjApXG4gICwgc3FydCAgICA9IE1hdGguc3FydFxuICAsICRhY29zaCAgPSBNYXRoLmFjb3NoO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFjb3NoXG4gIC8vIFY4IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM1MDlcbiAgJiYgTWF0aC5mbG9vcigkYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkpID09IDcxMFxuICAvLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYWNvc2goSW5maW5pdHkpIC0+IE5hTiBcbiAgJiYgJGFjb3NoKEluZmluaXR5KSA9PSBJbmZpbml0eVxuKSwgJ01hdGgnLCB7XG4gIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2XG4gICAgICA/IE1hdGgubG9nKHgpICsgTWF0aC5MTjJcbiAgICAgIDogbG9nMXAoeCAtIDEgKyBzcXJ0KHggLSAxKSAqIHNxcnQoeCArIDEpKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI2MFwiOjYwfV0sMTUxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkYXNpbmggID0gTWF0aC5hc2luaDtcblxuZnVuY3Rpb24gYXNpbmgoeCl7XG4gIHJldHVybiAhaXNGaW5pdGUoeCA9ICt4KSB8fCB4ID09IDAgPyB4IDogeCA8IDAgPyAtYXNpbmgoLXgpIDogTWF0aC5sb2coeCArIE1hdGguc3FydCh4ICogeCArIDEpKTtcbn1cblxuLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFzaW5oKDApIC0+IC0wIFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhc2luaCAmJiAxIC8gJGFzaW5oKDApID4gMCksICdNYXRoJywge2FzaW5oOiBhc2luaH0pO1xufSx7XCIzMlwiOjMyfV0sMTUyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkYXRhbmggID0gTWF0aC5hdGFuaDtcblxuLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmF0YW5oKC0wKSAtPiAwIFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhdGFuaCAmJiAxIC8gJGF0YW5oKC0wKSA8IDApLCAnTWF0aCcsIHtcbiAgYXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTUzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi45IE1hdGguY2JydCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIHNpZ24gICAgPSBfZGVyZXFfKDYxKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjYnJ0OiBmdW5jdGlvbiBjYnJ0KHgpe1xuICAgIHJldHVybiBzaWduKHggPSAreCkgKiBNYXRoLnBvdyhNYXRoLmFicyh4KSwgMSAvIDMpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjYxXCI6NjF9XSwxNTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpe1xuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpe1xuICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTU2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGV4cG0xICA9IF9kZXJlcV8oNTkpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICgkZXhwbTEgIT0gTWF0aC5leHBtMSksICdNYXRoJywge2V4cG0xOiAkZXhwbTF9KTtcbn0se1wiMzJcIjozMixcIjU5XCI6NTl9XSwxNTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCBzaWduICAgICAgPSBfZGVyZXFfKDYxKVxuICAsIHBvdyAgICAgICA9IE1hdGgucG93XG4gICwgRVBTSUxPTiAgID0gcG93KDIsIC01MilcbiAgLCBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKVxuICAsIE1BWDMyICAgICA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpXG4gICwgTUlOMzIgICAgID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICsgMSAvIEVQU0lMT04gLSAxIC8gRVBTSUxPTjtcbn07XG5cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBmcm91bmQ6IGZ1bmN0aW9uIGZyb3VuZCh4KXtcbiAgICB2YXIgJGFicyAgPSBNYXRoLmFicyh4KVxuICAgICAgLCAkc2lnbiA9IHNpZ24oeClcbiAgICAgICwgYSwgcmVzdWx0O1xuICAgIGlmKCRhYnMgPCBNSU4zMilyZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICAgIGEgPSAoMSArIEVQU0lMT04zMiAvIEVQU0lMT04pICogJGFicztcbiAgICByZXN1bHQgPSBhIC0gKGEgLSAkYWJzKTtcbiAgICBpZihyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KXJldHVybiAkc2lnbiAqIEluZmluaXR5O1xuICAgIHJldHVybiAkc2lnbiAqIHJlc3VsdDtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI2MVwiOjYxfV0sMTU4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGFicyAgICAgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBoeXBvdDogZnVuY3Rpb24gaHlwb3QodmFsdWUxLCB2YWx1ZTIpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHN1bSAgPSAwXG4gICAgICAsIGkgICAgPSAwXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIGxhcmcgPSAwXG4gICAgICAsIGFyZywgZGl2O1xuICAgIHdoaWxlKGkgPCBhTGVuKXtcbiAgICAgIGFyZyA9IGFicyhhcmd1bWVudHNbaSsrXSk7XG4gICAgICBpZihsYXJnIDwgYXJnKXtcbiAgICAgICAgZGl2ICA9IGxhcmcgLyBhcmc7XG4gICAgICAgIHN1bSAgPSBzdW0gKiBkaXYgKiBkaXYgKyAxO1xuICAgICAgICBsYXJnID0gYXJnO1xuICAgICAgfSBlbHNlIGlmKGFyZyA+IDApe1xuICAgICAgICBkaXYgID0gYXJnIC8gbGFyZztcbiAgICAgICAgc3VtICs9IGRpdiAqIGRpdjtcbiAgICAgIH0gZWxzZSBzdW0gKz0gYXJnO1xuICAgIH1cbiAgICByZXR1cm4gbGFyZyA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IGxhcmcgKiBNYXRoLnNxcnQoc3VtKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRpbXVsICAgPSBNYXRoLmltdWw7XG5cbi8vIHNvbWUgV2ViS2l0IHZlcnNpb25zIGZhaWxzIHdpdGggYmlnIG51bWJlcnMsIHNvbWUgaGFzIHdyb25nIGFyaXR5XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcbn0pLCAnTWF0aCcsIHtcbiAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsIHhuID0gK3hcbiAgICAgICwgeW4gPSAreVxuICAgICAgLCB4bCA9IFVJTlQxNiAmIHhuXG4gICAgICAsIHlsID0gVUlOVDE2ICYgeW47XG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCIzNFwiOjM0fV0sMTYwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzEwOiBmdW5jdGlvbiBsb2cxMCh4KXtcbiAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMTA7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTYxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7bG9nMXA6IF9kZXJlcV8oNjApfSk7XG59LHtcIjMyXCI6MzIsXCI2MFwiOjYwfV0sMTYyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgbG9nMjogZnVuY3Rpb24gbG9nMih4KXtcbiAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge3NpZ246IF9kZXJlcV8oNjEpfSk7XG59LHtcIjMyXCI6MzIsXCI2MVwiOjYxfV0sMTY0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBleHBtMSAgID0gX2RlcmVxXyg1OSlcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbi8vIFY4IG5lYXIgQ2hyb21pdW0gMzggaGFzIGEgcHJvYmxlbSB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcbn0pLCAnTWF0aCcsIHtcbiAgc2luaDogZnVuY3Rpb24gc2luaCh4KXtcbiAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDFcbiAgICAgID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDJcbiAgICAgIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiMzRcIjozNCxcIjU5XCI6NTl9XSwxNjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGV4cG0xICAgPSBfZGVyZXFfKDU5KVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0YW5oOiBmdW5jdGlvbiB0YW5oKHgpe1xuICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxuICAgICAgLCBiID0gZXhwbTEoLXgpO1xuICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNTlcIjo1OX1dLDE2NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpe1xuICAgIHJldHVybiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE2NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGhhcyAgICAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBjb2YgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTgpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSBfZGVyZXFfKDQzKVxuICAsIHRvUHJpbWl0aXZlICAgICAgID0gX2RlcmVxXygxMTApXG4gICwgZmFpbHMgICAgICAgICAgICAgPSBfZGVyZXFfKDM0KVxuICAsIGdPUE4gICAgICAgICAgICAgID0gX2RlcmVxXyg3MikuZlxuICAsIGdPUEQgICAgICAgICAgICAgID0gX2RlcmVxXyg3MCkuZlxuICAsIGRQICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2NykuZlxuICAsICR0cmltICAgICAgICAgICAgID0gX2RlcmVxXygxMDIpLnRyaW1cbiAgLCBOVU1CRVIgICAgICAgICAgICA9ICdOdW1iZXInXG4gICwgJE51bWJlciAgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxuICAsIEJhc2UgICAgICAgICAgICAgID0gJE51bWJlclxuICAsIHByb3RvICAgICAgICAgICAgID0gJE51bWJlci5wcm90b3R5cGVcbiAgLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG4gICwgQlJPS0VOX0NPRiAgICAgICAgPSBjb2YoX2RlcmVxXyg2NikocHJvdG8pKSA9PSBOVU1CRVJcbiAgLCBUUklNICAgICAgICAgICAgICA9ICd0cmltJyBpbiBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyA3LjEuMyBUb051bWJlcihhcmd1bWVudClcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uKGFyZ3VtZW50KXtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgaWYodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpe1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApXG4gICAgICAsIHRoaXJkLCByYWRpeCwgbWF4Q29kZTtcbiAgICBpZihmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KXtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKXJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYoZmlyc3QgPT09IDQ4KXtcbiAgICAgIHN3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtcbiAgICAgICAgY2FzZSA2NiA6IGNhc2UgOTggIDogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5IDogY2FzZSAxMTEgOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0IDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvcih2YXIgZGlnaXRzID0gaXQuc2xpY2UoMiksIGkgPSAwLCBsID0gZGlnaXRzLmxlbmd0aCwgY29kZTsgaSA8IGw7IGkrKyl7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSlyZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG5pZighJE51bWJlcignIDBvMScpIHx8ICEkTnVtYmVyKCcwYjEnKSB8fCAkTnVtYmVyKCcrMHgxJykpe1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKXtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZVxuICAgICAgLCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DT0YgPyBmYWlscyhmdW5jdGlvbigpeyBwcm90by52YWx1ZU9mLmNhbGwodGhhdCk7IH0pIDogY29mKHRoYXQpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSh0b051bWJlcihpdCkpLCB0aGF0LCAkTnVtYmVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yKHZhciBrZXlzID0gX2RlcmVxXygyOCkgPyBnT1BOKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKyl7XG4gICAgaWYoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSl7XG4gICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgX2RlcmVxXyg4NykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxufSx7XCIxMDJcIjoxMDIsXCIxMTBcIjoxMTAsXCIxOFwiOjE4LFwiMjhcIjoyOCxcIjM0XCI6MzQsXCIzOFwiOjM4LFwiMzlcIjozOSxcIjQzXCI6NDMsXCI2NlwiOjY2LFwiNjdcIjo2NyxcIjcwXCI6NzAsXCI3MlwiOjcyLFwiODdcIjo4N31dLDE2ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7RVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKX0pO1xufSx7XCIzMlwiOjMyfV0sMTY5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCBfaXNGaW5pdGUgPSBfZGVyZXFfKDM4KS5pc0Zpbml0ZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjM4XCI6Mzh9XSwxNzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc0ludGVnZXI6IF9kZXJlcV8oNDgpfSk7XG59LHtcIjMyXCI6MzIsXCI0OFwiOjQ4fV0sMTcxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTcyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIGlzSW50ZWdlciA9IF9kZXJlcV8oNDgpXG4gICwgYWJzICAgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcil7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNDhcIjo0OH1dLDE3MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuNiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZn0pO1xufSx7XCIzMlwiOjMyfV0sMTc0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUlOX1NBRkVfSU5URUdFUjogLTB4MWZmZmZmZmZmZmZmZmZ9KTtcbn0se1wiMzJcIjozMn1dLDE3NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsICRwYXJzZUZsb2F0ID0gX2RlcmVxXyg4MSk7XG4vLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCAnTnVtYmVyJywge3BhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0fSk7XG59LHtcIjMyXCI6MzIsXCI4MVwiOjgxfV0sMTc2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsICRwYXJzZUludCA9IF9kZXJlcV8oODIpO1xuLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlSW50ICE9ICRwYXJzZUludCksICdOdW1iZXInLCB7cGFyc2VJbnQ6ICRwYXJzZUludH0pO1xufSx7XCIzMlwiOjMyLFwiODJcIjo4Mn1dLDE3NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b0ludGVnZXIgICAgPSBfZGVyZXFfKDEwNilcbiAgLCBhTnVtYmVyVmFsdWUgPSBfZGVyZXFfKDQpXG4gICwgcmVwZWF0ICAgICAgID0gX2RlcmVxXygxMDEpXG4gICwgJHRvRml4ZWQgICAgID0gMS4udG9GaXhlZFxuICAsIGZsb29yICAgICAgICA9IE1hdGguZmxvb3JcbiAgLCBkYXRhICAgICAgICAgPSBbMCwgMCwgMCwgMCwgMCwgMF1cbiAgLCBFUlJPUiAgICAgICAgPSAnTnVtYmVyLnRvRml4ZWQ6IGluY29ycmVjdCBpbnZvY2F0aW9uISdcbiAgLCBaRVJPICAgICAgICAgPSAnMCc7XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uKG4sIGMpe1xuICB2YXIgaSAgPSAtMVxuICAgICwgYzIgPSBjO1xuICB3aGlsZSgrK2kgPCA2KXtcbiAgICBjMiArPSBuICogZGF0YVtpXTtcbiAgICBkYXRhW2ldID0gYzIgJSAxZTc7XG4gICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gIH1cbn07XG52YXIgZGl2aWRlID0gZnVuY3Rpb24obil7XG4gIHZhciBpID0gNlxuICAgICwgYyA9IDA7XG4gIHdoaWxlKC0taSA+PSAwKXtcbiAgICBjICs9IGRhdGFbaV07XG4gICAgZGF0YVtpXSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcbnZhciBudW1Ub1N0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpID0gNlxuICAgICwgcyA9ICcnO1xuICB3aGlsZSgtLWkgPj0gMCl7XG4gICAgaWYocyAhPT0gJycgfHwgaSA9PT0gMCB8fCBkYXRhW2ldICE9PSAwKXtcbiAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaV0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbChaRVJPLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xudmFyIHBvdyA9IGZ1bmN0aW9uKHgsIG4sIGFjYyl7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG52YXIgbG9nID0gZnVuY3Rpb24oeCl7XG4gIHZhciBuICA9IDBcbiAgICAsIHgyID0geDtcbiAgd2hpbGUoeDIgPj0gNDA5Nil7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlKHgyID49IDIpe1xuICAgIG4gICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCEhJHRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4udG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICAkdG9GaXhlZC5jYWxsKHt9KTtcbn0pKSwgJ051bWJlcicsIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl7XG4gICAgdmFyIHggPSBhTnVtYmVyVmFsdWUodGhpcywgRVJST1IpXG4gICAgICAsIGYgPSB0b0ludGVnZXIoZnJhY3Rpb25EaWdpdHMpXG4gICAgICAsIHMgPSAnJ1xuICAgICAgLCBtID0gWkVST1xuICAgICAgLCBlLCB6LCBqLCBrO1xuICAgIGlmKGYgPCAwIHx8IGYgPiAyMCl0aHJvdyBSYW5nZUVycm9yKEVSUk9SKTtcbiAgICBpZih4ICE9IHgpcmV0dXJuICdOYU4nO1xuICAgIGlmKHggPD0gLTFlMjEgfHwgeCA+PSAxZTIxKXJldHVybiBTdHJpbmcoeCk7XG4gICAgaWYoeCA8IDApe1xuICAgICAgcyA9ICctJztcbiAgICAgIHggPSAteDtcbiAgICB9XG4gICAgaWYoeCA+IDFlLTIxKXtcbiAgICAgIGUgPSBsb2coeCAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XG4gICAgICB6ID0gZSA8IDAgPyB4ICogcG93KDIsIC1lLCAxKSA6IHggLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYoZSA+IDApe1xuICAgICAgICBtdWx0aXBseSgwLCB6KTtcbiAgICAgICAgaiA9IGY7XG4gICAgICAgIHdoaWxlKGogPj0gNyl7XG4gICAgICAgICAgbXVsdGlwbHkoMWU3LCAwKTtcbiAgICAgICAgICBqIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlwbHkocG93KDEwLCBqLCAxKSwgMCk7XG4gICAgICAgIGogPSBlIC0gMTtcbiAgICAgICAgd2hpbGUoaiA+PSAyMyl7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIG0gPSBudW1Ub1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICBtID0gbnVtVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKFpFUk8sIGYpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihmID4gMCl7XG4gICAgICBrID0gbS5sZW5ndGg7XG4gICAgICBtID0gcyArIChrIDw9IGYgPyAnMC4nICsgcmVwZWF0LmNhbGwoWkVSTywgZiAtIGspICsgbSA6IG0uc2xpY2UoMCwgayAtIGYpICsgJy4nICsgbS5zbGljZShrIC0gZikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gcyArIG07XG4gICAgfSByZXR1cm4gbTtcbiAgfVxufSk7XG59LHtcIjEwMVwiOjEwMSxcIjEwNlwiOjEwNixcIjMyXCI6MzIsXCIzNFwiOjM0LFwiNFwiOjR9XSwxNzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgJGZhaWxzICAgICAgID0gX2RlcmVxXygzNClcbiAgLCBhTnVtYmVyVmFsdWUgPSBfZGVyZXFfKDQpXG4gICwgJHRvUHJlY2lzaW9uID0gMS4udG9QcmVjaXNpb247XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCRmYWlscyhmdW5jdGlvbigpe1xuICAvLyBJRTctXG4gIHJldHVybiAkdG9QcmVjaXNpb24uY2FsbCgxLCB1bmRlZmluZWQpICE9PSAnMSc7XG59KSB8fCAhJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gICR0b1ByZWNpc2lvbi5jYWxsKHt9KTtcbn0pKSwgJ051bWJlcicsIHtcbiAgdG9QcmVjaXNpb246IGZ1bmN0aW9uIHRvUHJlY2lzaW9uKHByZWNpc2lvbil7XG4gICAgdmFyIHRoYXQgPSBhTnVtYmVyVmFsdWUodGhpcywgJ051bWJlciN0b1ByZWNpc2lvbjogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gICAgcmV0dXJuIHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gJHRvUHJlY2lzaW9uLmNhbGwodGhhdCkgOiAkdG9QcmVjaXNpb24uY2FsbCh0aGF0LCBwcmVjaXNpb24pOyBcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCIzNFwiOjM0LFwiNFwiOjR9XSwxNzk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogX2RlcmVxXyg2NSl9KTtcbn0se1wiMzJcIjozMixcIjY1XCI6NjV9XSwxODA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IF9kZXJlcV8oNjYpfSk7XG59LHtcIjMyXCI6MzIsXCI2NlwiOjY2fV0sMTgxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG4vLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfZGVyZXFfKDI4KSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0aWVzOiBfZGVyZXFfKDY4KX0pO1xufSx7XCIyOFwiOjI4LFwiMzJcIjozMixcIjY4XCI6Njh9XSwxODI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFfZGVyZXFfKDI4KSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogX2RlcmVxXyg2NykuZn0pO1xufSx7XCIyOFwiOjI4LFwiMzJcIjozMixcIjY3XCI6Njd9XSwxODM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBtZXRhICAgICA9IF9kZXJlcV8oNjIpLm9uRnJlZXplO1xuXG5fZGVyZXFfKDc4KSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcbn0se1wiNDlcIjo0OSxcIjYyXCI6NjIsXCI3OFwiOjc4fV0sMTg0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgICAgICAgICAgICAgICAgID0gX2RlcmVxXygxMDcpXG4gICwgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9kZXJlcV8oNzApLmY7XG5cbl9kZXJlcV8oNzgpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcbn0se1wiMTA3XCI6MTA3LFwiNzBcIjo3MCxcIjc4XCI6Nzh9XSwxODU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbl9kZXJlcV8oNzgpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9kZXJlcV8oNzEpLmY7XG59KTtcbn0se1wiNzFcIjo3MSxcIjc4XCI6Nzh9XSwxODY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gX2RlcmVxXygxMDkpXG4gICwgJGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3NCk7XG5cbl9kZXJlcV8oNzgpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG59LHtcIjEwOVwiOjEwOSxcIjc0XCI6NzQsXCI3OFwiOjc4fV0sMTg3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xMSBPYmplY3QuaXNFeHRlbnNpYmxlKE8pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KTtcblxuX2RlcmVxXyg3OCkoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCRpc0V4dGVuc2libGUpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuICB9O1xufSk7XG59LHtcIjQ5XCI6NDksXCI3OFwiOjc4fV0sMTg4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xMiBPYmplY3QuaXNGcm96ZW4oTylcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpO1xuXG5fZGVyZXFfKDc4KSgnaXNGcm96ZW4nLCBmdW5jdGlvbigkaXNGcm96ZW4pe1xuICByZXR1cm4gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG59LHtcIjQ5XCI6NDksXCI3OFwiOjc4fV0sMTg5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpO1xuXG5fZGVyZXFfKDc4KSgnaXNTZWFsZWQnLCBmdW5jdGlvbigkaXNTZWFsZWQpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNTZWFsZWQgPyAkaXNTZWFsZWQoaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG59LHtcIjQ5XCI6NDksXCI3OFwiOjc4fV0sMTkwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7aXM6IF9kZXJlcV8oODkpfSk7XG59LHtcIjMyXCI6MzIsXCI4OVwiOjg5fV0sMTkxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gX2RlcmVxXygxMDkpXG4gICwgJGtleXMgICAgPSBfZGVyZXFfKDc2KTtcblxuX2RlcmVxXyg3OCkoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiNzZcIjo3NixcIjc4XCI6Nzh9XSwxOTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE1IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBtZXRhICAgICA9IF9kZXJlcV8oNjIpLm9uRnJlZXplO1xuXG5fZGVyZXFfKDc4KSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbigkcHJldmVudEV4dGVuc2lvbnMpe1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG59LHtcIjQ5XCI6NDksXCI2MlwiOjYyLFwiNzhcIjo3OH1dLDE5MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgbWV0YSAgICAgPSBfZGVyZXFfKDYyKS5vbkZyZWV6ZTtcblxuX2RlcmVxXyg3OCkoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG4gIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcbn0se1wiNDlcIjo0OSxcIjYyXCI6NjIsXCI3OFwiOjc4fV0sMTk0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IF9kZXJlcV8oOTApLnNldH0pO1xufSx7XCIzMlwiOjMyLFwiOTBcIjo5MH1dLDE5NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gX2RlcmVxXygxNylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W19kZXJlcV8oMTE3KSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgX2RlcmVxXyg4NykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxufSx7XCIxMTdcIjoxMTcsXCIxN1wiOjE3LFwiODdcIjo4N31dLDE5NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsICRwYXJzZUZsb2F0ID0gX2RlcmVxXyg4MSk7XG4vLyAxOC4yLjQgcGFyc2VGbG9hdChzdHJpbmcpXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUZsb2F0ICE9ICRwYXJzZUZsb2F0KSwge3BhcnNlRmxvYXQ6ICRwYXJzZUZsb2F0fSk7XG59LHtcIjMyXCI6MzIsXCI4MVwiOjgxfV0sMTk3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsICRwYXJzZUludCA9IF9kZXJlcV8oODIpO1xuLy8gMTguMi41IHBhcnNlSW50KHN0cmluZywgcmFkaXgpXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuRiAqIChwYXJzZUludCAhPSAkcGFyc2VJbnQpLCB7cGFyc2VJbnQ6ICRwYXJzZUludH0pO1xufSx7XCIzMlwiOjMyLFwiODJcIjo4Mn1dLDE5ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gX2RlcmVxXyg1OClcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMjUpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gX2RlcmVxXygxNylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IF9kZXJlcV8oNDkpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gX2RlcmVxXygzKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IF9kZXJlcV8oNilcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSBfZGVyZXFfKDM3KVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9kZXJlcV8oOTUpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gX2RlcmVxXygxMDQpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IF9kZXJlcV8oNjQpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtfZGVyZXFfKDExNykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSBfZGVyZXFfKDg2KSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xuX2RlcmVxXyg5MikoJFByb21pc2UsIFBST01JU0UpO1xuX2RlcmVxXyg5MSkoUFJPTUlTRSk7XG5XcmFwcGVyID0gX2RlcmVxXygyMylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgX2RlcmVxXyg1NCkoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG59LHtcIjEwNFwiOjEwNCxcIjExN1wiOjExNyxcIjE3XCI6MTcsXCIyM1wiOjIzLFwiMjVcIjoyNSxcIjNcIjozLFwiMzJcIjozMixcIjM3XCI6MzcsXCIzOFwiOjM4LFwiNDlcIjo0OSxcIjU0XCI6NTQsXCI1OFwiOjU4LFwiNlwiOjYsXCI2NFwiOjY0LFwiODZcIjo4NixcIjkxXCI6OTEsXCI5MlwiOjkyLFwiOTVcIjo5NX1dLDE5OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIGFGdW5jdGlvbiA9IF9kZXJlcV8oMylcbiAgLCBhbk9iamVjdCAgPSBfZGVyZXFfKDcpXG4gICwgckFwcGx5ICAgID0gKF9kZXJlcV8oMzgpLlJlZmxlY3QgfHwge30pLmFwcGx5XG4gICwgZkFwcGx5ICAgID0gRnVuY3Rpb24uYXBwbHk7XG4vLyBNUyBFZGdlIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJBcHBseShmdW5jdGlvbigpe30pO1xufSksICdSZWZsZWN0Jywge1xuICBhcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3Qpe1xuICAgIHZhciBUID0gYUZ1bmN0aW9uKHRhcmdldClcbiAgICAgICwgTCA9IGFuT2JqZWN0KGFyZ3VtZW50c0xpc3QpO1xuICAgIHJldHVybiByQXBwbHkgPyByQXBwbHkoVCwgdGhpc0FyZ3VtZW50LCBMKSA6IGZBcHBseS5jYWxsKFQsIHRoaXNBcmd1bWVudCwgTCk7XG4gIH1cbn0pO1xufSx7XCIzXCI6MyxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjdcIjo3fV0sMjAwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcbnZhciAkZXhwb3J0ICAgID0gX2RlcmVxXygzMilcbiAgLCBjcmVhdGUgICAgID0gX2RlcmVxXyg2NilcbiAgLCBhRnVuY3Rpb24gID0gX2RlcmVxXygzKVxuICAsIGFuT2JqZWN0ICAgPSBfZGVyZXFfKDcpXG4gICwgaXNPYmplY3QgICA9IF9kZXJlcV8oNDkpXG4gICwgZmFpbHMgICAgICA9IF9kZXJlcV8oMzQpXG4gICwgYmluZCAgICAgICA9IF9kZXJlcV8oMTYpXG4gICwgckNvbnN0cnVjdCA9IChfZGVyZXFfKDM4KS5SZWZsZWN0IHx8IHt9KS5jb25zdHJ1Y3Q7XG5cbi8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50cyBhbmQgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuLy8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxudmFyIE5FV19UQVJHRVRfQlVHID0gZmFpbHMoZnVuY3Rpb24oKXtcbiAgZnVuY3Rpb24gRigpe31cbiAgcmV0dXJuICEockNvbnN0cnVjdChmdW5jdGlvbigpe30sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSk7XG52YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgckNvbnN0cnVjdChmdW5jdGlvbigpe30pO1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE5FV19UQVJHRVRfQlVHIHx8IEFSR1NfQlVHKSwgJ1JlZmxlY3QnLCB7XG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KFRhcmdldCwgYXJncyAvKiwgbmV3VGFyZ2V0Ki8pe1xuICAgIGFGdW5jdGlvbihUYXJnZXQpO1xuICAgIGFuT2JqZWN0KGFyZ3MpO1xuICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IFRhcmdldCA6IGFGdW5jdGlvbihhcmd1bWVudHNbMl0pO1xuICAgIGlmKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRylyZXR1cm4gckNvbnN0cnVjdChUYXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7XG4gICAgaWYoVGFyZ2V0ID09IG5ld1RhcmdldCl7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldDtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIH1cbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgbG90IG9mIGFyZ3VtZW50cyBjYXNlXG4gICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcbiAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gICAgPSBuZXdUYXJnZXQucHJvdG90eXBlXG4gICAgICAsIGluc3RhbmNlID0gY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0LnByb3RvdHlwZSlcbiAgICAgICwgcmVzdWx0ICAgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xufSx7XCIxNlwiOjE2LFwiM1wiOjMsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjM4XCI6MzgsXCI0OVwiOjQ5LFwiNjZcIjo2NixcIjdcIjo3fV0sMjAxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXG52YXIgZFAgICAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAsICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCBhbk9iamVjdCAgICA9IF9kZXJlcV8oNylcbiAgLCB0b1ByaW1pdGl2ZSA9IF9kZXJlcV8oMTEwKTtcblxuLy8gTVMgRWRnZSBoYXMgYnJva2VuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkgLSB0aHJvd2luZyBpbnN0ZWFkIG9mIHJldHVybmluZyBmYWxzZVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGRQLmYoe30sIDEsIHt2YWx1ZTogMX0pLCAxLCB7dmFsdWU6IDJ9KTtcbn0pLCAnUmVmbGVjdCcsIHtcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShwcm9wZXJ0eUtleSwgdHJ1ZSk7XG4gICAgYW5PYmplY3QoYXR0cmlidXRlcyk7XG4gICAgdHJ5IHtcbiAgICAgIGRQLmYodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG59LHtcIjExMFwiOjExMCxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiNjdcIjo2NyxcIjdcIjo3fV0sMjAyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsIGdPUEQgICAgID0gX2RlcmVxXyg3MCkuZlxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgdmFyIGRlc2MgPSBnT1BEKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjdcIjo3LFwiNzBcIjo3MH1dLDIwMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSAgICAgICAvLyBrZXlzXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XG59O1xuX2RlcmVxXyg1MikoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gICAgLCBrZXlzID0gdGhhdC5fa1xuICAgICwga2V5O1xuICBkbyB7XG4gICAgaWYodGhhdC5faSA+PSBrZXlzLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICB9IHdoaWxlKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuICByZXR1cm4ge3ZhbHVlOiBrZXksIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGVudW1lcmF0ZTogZnVuY3Rpb24gZW51bWVyYXRlKHRhcmdldCl7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI1MlwiOjUyLFwiN1wiOjd9XSwyMDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgZ09QRCAgICAgPSBfZGVyZXFfKDcwKVxuICAsICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuIGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiN1wiOjcsXCI3MFwiOjcwfV0sMjA1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgZ2V0UHJvdG8gPSBfZGVyZXFfKDc0KVxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KXtcbiAgICByZXR1cm4gZ2V0UHJvdG8oYW5PYmplY3QodGFyZ2V0KSk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiN1wiOjcsXCI3NFwiOjc0fV0sMjA2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcbnZhciBnT1BEICAgICAgICAgICA9IF9kZXJlcV8oNzApXG4gICwgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc0KVxuICAsIGhhcyAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgaXNPYmplY3QgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIGFuT2JqZWN0ICAgICAgID0gX2RlcmVxXyg3KTtcblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdXG4gICAgLCBkZXNjLCBwcm90bztcbiAgaWYoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIGlmKGRlc2MgPSBnT1BELmYodGFyZ2V0LCBwcm9wZXJ0eUtleSkpcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgID8gZGVzYy52YWx1ZVxuICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldDogZ2V0fSk7XG59LHtcIjMyXCI6MzIsXCIzOVwiOjM5LFwiNDlcIjo0OSxcIjdcIjo3LFwiNzBcIjo3MCxcIjc0XCI6NzR9XSwyMDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMjA4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxudmFyICRleHBvcnQgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGFuT2JqZWN0ICAgICAgPSBfZGVyZXFfKDcpXG4gICwgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3XCI6N31dLDIwOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7b3duS2V5czogX2RlcmVxXyg4MCl9KTtcbn0se1wiMzJcIjozMixcIjgwXCI6ODB9XSwyMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgaWYoJHByZXZlbnRFeHRlbnNpb25zKSRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiN1wiOjd9XSwyMTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsIHNldFByb3RvID0gX2RlcmVxXyg5MCk7XG5cbmlmKHNldFByb3RvKSRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pe1xuICAgIHNldFByb3RvLmNoZWNrKHRhcmdldCwgcHJvdG8pO1xuICAgIHRyeSB7XG4gICAgICBzZXRQcm90by5zZXQodGFyZ2V0LCBwcm90byk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI5MFwiOjkwfV0sMjEyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG52YXIgZFAgICAgICAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAsIGdPUEQgICAgICAgICAgID0gX2RlcmVxXyg3MClcbiAgLCBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzQpXG4gICwgaGFzICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBjcmVhdGVEZXNjICAgICA9IF9kZXJlcV8oODUpXG4gICwgYW5PYmplY3QgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgaXNPYmplY3QgICAgICAgPSBfZGVyZXFfKDQ5KTtcblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYvKiwgcmVjZWl2ZXIqLyl7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXG4gICAgLCBvd25EZXNjICA9IGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSlcbiAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XG4gIGlmKCFvd25EZXNjKXtcbiAgICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtcbiAgICAgIHJldHVybiBzZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XG4gICAgfVxuICAgIG93bkRlc2MgPSBjcmVhdGVEZXNjKDApO1xuICB9XG4gIGlmKGhhcyhvd25EZXNjLCAndmFsdWUnKSl7XG4gICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yID0gZ09QRC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgY3JlYXRlRGVzYygwKTtcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IudmFsdWUgPSBWO1xuICAgIGRQLmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7c2V0OiBzZXR9KTtcbn0se1wiMzJcIjozMixcIjM5XCI6MzksXCI0OVwiOjQ5LFwiNjdcIjo2NyxcIjdcIjo3LFwiNzBcIjo3MCxcIjc0XCI6NzQsXCI4NVwiOjg1fV0sMjEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSBfZGVyZXFfKDQzKVxuICAsIGRQICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2NykuZlxuICAsIGdPUE4gICAgICAgICAgICAgID0gX2RlcmVxXyg3MikuZlxuICAsIGlzUmVnRXhwICAgICAgICAgID0gX2RlcmVxXyg1MClcbiAgLCAkZmxhZ3MgICAgICAgICAgICA9IF9kZXJlcV8oMzYpXG4gICwgJFJlZ0V4cCAgICAgICAgICAgPSBnbG9iYWwuUmVnRXhwXG4gICwgQmFzZSAgICAgICAgICAgICAgPSAkUmVnRXhwXG4gICwgcHJvdG8gICAgICAgICAgICAgPSAkUmVnRXhwLnByb3RvdHlwZVxuICAsIHJlMSAgICAgICAgICAgICAgID0gL2EvZ1xuICAsIHJlMiAgICAgICAgICAgICAgID0gL2EvZ1xuICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcbiAgLCBDT1JSRUNUX05FVyAgICAgICA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuaWYoX2RlcmVxXygyOCkgJiYgKCFDT1JSRUNUX05FVyB8fCBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZTJbX2RlcmVxXygxMTcpKCdtYXRjaCcpXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSl7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZil7XG4gICAgdmFyIHRpUkUgPSB0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cFxuICAgICAgLCBwaVJFID0gaXNSZWdFeHAocClcbiAgICAgICwgZmlVICA9IGYgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gIXRpUkUgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHBcbiAgICAgIDogaW5oZXJpdElmUmVxdWlyZWQoQ09SUkVDVF9ORVdcbiAgICAgICAgPyBuZXcgQmFzZShwaVJFICYmICFmaVUgPyBwLnNvdXJjZSA6IHAsIGYpXG4gICAgICAgIDogQmFzZSgocGlSRSA9IHAgaW5zdGFuY2VvZiAkUmVnRXhwKSA/IHAuc291cmNlIDogcCwgcGlSRSAmJiBmaVUgPyAkZmxhZ3MuY2FsbChwKSA6IGYpXG4gICAgICAsIHRpUkUgPyB0aGlzIDogcHJvdG8sICRSZWdFeHApO1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbihrZXkpe1xuICAgIGtleSBpbiAkUmVnRXhwIHx8IGRQKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIGZvcih2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7IClwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIF9kZXJlcV8oODcpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xufVxuXG5fZGVyZXFfKDkxKSgnUmVnRXhwJyk7XG59LHtcIjExN1wiOjExNyxcIjI4XCI6MjgsXCIzNFwiOjM0LFwiMzZcIjozNixcIjM4XCI6MzgsXCI0M1wiOjQzLFwiNTBcIjo1MCxcIjY3XCI6NjcsXCI3MlwiOjcyLFwiODdcIjo4NyxcIjkxXCI6OTF9XSwyMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYoX2RlcmVxXygyOCkgJiYgLy4vZy5mbGFncyAhPSAnZycpX2RlcmVxXyg2NykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBfZGVyZXFfKDM2KVxufSk7XG59LHtcIjI4XCI6MjgsXCIzNlwiOjM2LFwiNjdcIjo2N31dLDIxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBAQG1hdGNoIGxvZ2ljXG5fZGVyZXFfKDM1KSgnbWF0Y2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBNQVRDSCwgJG1hdGNoKXtcbiAgLy8gMjEuMS4zLjExIFN0cmluZy5wcm90b3R5cGUubWF0Y2gocmVnZXhwKVxuICByZXR1cm4gW2Z1bmN0aW9uIG1hdGNoKHJlZ2V4cCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgfSwgJG1hdGNoXTtcbn0pO1xufSx7XCIzNVwiOjM1fV0sMjE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIEBAcmVwbGFjZSBsb2dpY1xuX2RlcmVxXygzNSkoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSl7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIFtmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gIH0sICRyZXBsYWNlXTtcbn0pO1xufSx7XCIzNVwiOjM1fV0sMjE3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIEBAc2VhcmNoIGxvZ2ljXG5fZGVyZXFfKDM1KSgnc2VhcmNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgU0VBUkNILCAkc2VhcmNoKXtcbiAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzZWFyY2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRzZWFyY2hdO1xufSk7XG59LHtcIjM1XCI6MzV9XSwyMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQEBzcGxpdCBsb2dpY1xuX2RlcmVxXygzNSkoJ3NwbGl0JywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgU1BMSVQsICRzcGxpdCl7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGlzUmVnRXhwICAgPSBfZGVyZXFfKDUwKVxuICAgICwgX3NwbGl0ICAgICA9ICRzcGxpdFxuICAgICwgJHB1c2ggICAgICA9IFtdLnB1c2hcbiAgICAsICRTUExJVCAgICAgPSAnc3BsaXQnXG4gICAgLCBMRU5HVEggICAgID0gJ2xlbmd0aCdcbiAgICAsIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbiAgaWYoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICl7XG4gICAgdmFyIE5QQ0cgPSAvKCk/Py8uZXhlYygnJylbMV0gPT09IHVuZGVmaW5lZDsgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAkc3BsaXQgPSBmdW5jdGlvbihzZXBhcmF0b3IsIGxpbWl0KXtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMClyZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYoIWlzUmVnRXhwKHNlcGFyYXRvcikpcmV0dXJuIF9zcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gNDI5NDk2NzI5NSA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aCwgaTtcbiAgICAgIC8vIERvZXNuJ3QgbmVlZCBmbGFncyBneSwgYnV0IHRoZXkgZG9uJ3QgaHVydFxuICAgICAgaWYoIU5QQ0cpc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlKG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZykpe1xuICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgaWYobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCl7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGAgZm9yIE5QQ0dcbiAgICAgICAgICBpZighTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSltYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCBhcmd1bWVudHNbTEVOR1RIXSAtIDI7IGkrKylpZihhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCltYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZihtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdClicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZihzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleClzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKXtcbiAgICAgICAgaWYobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSlvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKXtcbiAgICAkc3BsaXQgPSBmdW5jdGlvbihzZXBhcmF0b3IsIGxpbWl0KXtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpe1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdCkgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9LCAkc3BsaXRdO1xufSk7XG59LHtcIjM1XCI6MzUsXCI1MFwiOjUwfV0sMjE5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbl9kZXJlcV8oMjE0KTtcbnZhciBhbk9iamVjdCAgICA9IF9kZXJlcV8oNylcbiAgLCAkZmxhZ3MgICAgICA9IF9kZXJlcV8oMzYpXG4gICwgREVTQ1JJUFRPUlMgPSBfZGVyZXFfKDI4KVxuICAsIFRPX1NUUklORyAgID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyAgID0gLy4vW1RPX1NUUklOR107XG5cbnZhciBkZWZpbmUgPSBmdW5jdGlvbihmbil7XG4gIF9kZXJlcV8oODcpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYoX2RlcmVxXygzNCkoZnVuY3Rpb24oKXsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHtzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJ30pICE9ICcvYS9iJzsgfSkpe1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZigkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpe1xuICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxufSx7XCIyMTRcIjoyMTQsXCIyOFwiOjI4LFwiMzRcIjozNCxcIjM2XCI6MzYsXCI3XCI6NyxcIjg3XCI6ODd9XSwyMjA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IF9kZXJlcV8oMTkpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjIpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcbn0se1wiMTlcIjoxOSxcIjIyXCI6MjJ9XSwyMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMiBTdHJpbmcucHJvdG90eXBlLmFuY2hvcihuYW1lKVxuX2RlcmVxXyg5OSkoJ2FuY2hvcicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYW5jaG9yKG5hbWUpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ25hbWUnLCBuYW1lKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMyBTdHJpbmcucHJvdG90eXBlLmJpZygpXG5fZGVyZXFfKDk5KSgnYmlnJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBiaWcoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmlnJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNCBTdHJpbmcucHJvdG90eXBlLmJsaW5rKClcbl9kZXJlcV8oOTkpKCdibGluaycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYmxpbmsoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYmxpbmsnLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIyNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy41IFN0cmluZy5wcm90b3R5cGUuYm9sZCgpXG5fZGVyZXFfKDk5KSgnYm9sZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYm9sZCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRhdCAgICAgPSBfZGVyZXFfKDk3KShmYWxzZSk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXG4gIGNvZGVQb2ludEF0OiBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3Mpe1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI5N1wiOjk3fV0sMjI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvTGVuZ3RoICA9IF9kZXJlcV8oMTA4KVxuICAsIGNvbnRleHQgICA9IF9kZXJlcV8oOTgpXG4gICwgRU5EU19XSVRIID0gJ2VuZHNXaXRoJ1xuICAsICRlbmRzV2l0aCA9ICcnW0VORFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX2RlcmVxXygzMykoRU5EU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKXtcbiAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBFTkRTX1dJVEgpXG4gICAgICAsIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbGVuICAgID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpXG4gICAgICAsIGVuZCAgICA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbilcbiAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRlbmRzV2l0aFxuICAgICAgPyAkZW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZClcbiAgICAgIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xufSx7XCIxMDhcIjoxMDgsXCIzMlwiOjMyLFwiMzNcIjozMyxcIjk4XCI6OTh9XSwyMjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNiBTdHJpbmcucHJvdG90eXBlLmZpeGVkKClcbl9kZXJlcV8oOTkpKCdmaXhlZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gZml4ZWQoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAndHQnLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIyODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy43IFN0cmluZy5wcm90b3R5cGUuZm9udGNvbG9yKGNvbG9yKVxuX2RlcmVxXyg5OSkoJ2ZvbnRjb2xvcicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gZm9udGNvbG9yKGNvbG9yKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdjb2xvcicsIGNvbG9yKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuOCBTdHJpbmcucHJvdG90eXBlLmZvbnRzaXplKHNpemUpXG5fZGVyZXFfKDk5KSgnZm9udHNpemUnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRzaXplKHNpemUpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ3NpemUnLCBzaXplKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b0luZGV4ICAgICAgICA9IF9kZXJlcV8oMTA1KVxuICAsIGZyb21DaGFyQ29kZSAgID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuICAsICRmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cbi8vIGxlbmd0aCBzaG91bGQgYmUgMSwgb2xkIEZGIHByb2JsZW1cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCEhJGZyb21Db2RlUG9pbnQgJiYgJGZyb21Db2RlUG9pbnQubGVuZ3RoICE9IDEpLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxuICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KHgpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHJlcyAgPSBbXVxuICAgICAgLCBhTGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBpICAgID0gMFxuICAgICAgLCBjb2RlO1xuICAgIHdoaWxlKGFMZW4gPiBpKXtcbiAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XG4gICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXG4gICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcbiAgICAgICk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcbn0se1wiMTA1XCI6MTA1LFwiMzJcIjozMn1dLDIzMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCBjb250ZXh0ICA9IF9kZXJlcV8oOTgpXG4gICwgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzMpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcbiAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKVxuICAgICAgLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiMzNcIjozMyxcIjk4XCI6OTh9XSwyMzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuOSBTdHJpbmcucHJvdG90eXBlLml0YWxpY3MoKVxuX2RlcmVxXyg5OSkoJ2l0YWxpY3MnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGl0YWxpY3MoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnaScsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjMzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gX2RlcmVxXyg5NykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbl9kZXJlcV8oNTMpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xufSx7XCI1M1wiOjUzLFwiOTdcIjo5N31dLDIzNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxuX2RlcmVxXyg5OSkoJ2xpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxpbmsodXJsKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9JT2JqZWN0ID0gX2RlcmVxXygxMDcpXG4gICwgdG9MZW5ndGggID0gX2RlcmVxXygxMDgpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcbiAgcmF3OiBmdW5jdGlvbiByYXcoY2FsbFNpdGUpe1xuICAgIHZhciB0cGwgID0gdG9JT2JqZWN0KGNhbGxTaXRlLnJhdylcbiAgICAgICwgbGVuICA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIHJlcyAgPSBbXVxuICAgICAgLCBpICAgID0gMDtcbiAgICB3aGlsZShsZW4gPiBpKXtcbiAgICAgIHJlcy5wdXNoKFN0cmluZyh0cGxbaSsrXSkpO1xuICAgICAgaWYoaSA8IGFMZW4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG59LHtcIjEwN1wiOjEwNyxcIjEwOFwiOjEwOCxcIjMyXCI6MzJ9XSwyMzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcbiAgcmVwZWF0OiBfZGVyZXFfKDEwMSlcbn0pO1xufSx7XCIxMDFcIjoxMDEsXCIzMlwiOjMyfV0sMjM3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjExIFN0cmluZy5wcm90b3R5cGUuc21hbGwoKVxuX2RlcmVxXyg5OSkoJ3NtYWxsJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzbWFsbCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzbWFsbCcsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjM4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvTGVuZ3RoICAgID0gX2RlcmVxXygxMDgpXG4gICwgY29udGV4dCAgICAgPSBfZGVyZXFfKDk4KVxuICAsIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnXG4gICwgJHN0YXJ0c1dpdGggPSAnJ1tTVEFSVFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX2RlcmVxXygzMykoU1RBUlRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcbiAgICB2YXIgdGhhdCAgID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKVxuICAgICAgLCBpbmRleCAgPSB0b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJHN0YXJ0c1dpdGhcbiAgICAgID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xufSx7XCIxMDhcIjoxMDgsXCIzMlwiOjMyLFwiMzNcIjozMyxcIjk4XCI6OTh9XSwyMzk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTIgU3RyaW5nLnByb3RvdHlwZS5zdHJpa2UoKVxuX2RlcmVxXyg5OSkoJ3N0cmlrZScsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gc3RyaWtlKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N0cmlrZScsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjQwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEzIFN0cmluZy5wcm90b3R5cGUuc3ViKClcbl9kZXJlcV8oOTkpKCdzdWInLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1Yigpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDI0MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xNCBTdHJpbmcucHJvdG90eXBlLnN1cCgpXG5fZGVyZXFfKDk5KSgnc3VwJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzdXAoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3VwJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyNDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMS4zLjI1IFN0cmluZy5wcm90b3R5cGUudHJpbSgpXG5fZGVyZXFfKDEwMikoJ3RyaW0nLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltKCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDMpO1xuICB9O1xufSk7XG59LHtcIjEwMlwiOjEwMn1dLDI0MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGhhcyAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBERVNDUklQVE9SUyAgICA9IF9kZXJlcV8oMjgpXG4gICwgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHJlZGVmaW5lICAgICAgID0gX2RlcmVxXyg4NylcbiAgLCBNRVRBICAgICAgICAgICA9IF9kZXJlcV8oNjIpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gX2RlcmVxXygzNClcbiAgLCBzaGFyZWQgICAgICAgICA9IF9kZXJlcV8oOTQpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSBfZGVyZXFfKDkyKVxuICAsIHVpZCAgICAgICAgICAgID0gX2RlcmVxXygxMTQpXG4gICwgd2tzICAgICAgICAgICAgPSBfZGVyZXFfKDExNylcbiAgLCB3a3NFeHQgICAgICAgICA9IF9kZXJlcV8oMTE2KVxuICAsIHdrc0RlZmluZSAgICAgID0gX2RlcmVxXygxMTUpXG4gICwga2V5T2YgICAgICAgICAgPSBfZGVyZXFfKDU3KVxuICAsIGVudW1LZXlzICAgICAgID0gX2RlcmVxXygzMSlcbiAgLCBpc0FycmF5ICAgICAgICA9IF9kZXJlcV8oNDcpXG4gICwgYW5PYmplY3QgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSBfZGVyZXFfKDEwNylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IF9kZXJlcV8oMTEwKVxuICAsIGNyZWF0ZURlc2MgICAgID0gX2RlcmVxXyg4NSlcbiAgLCBfY3JlYXRlICAgICAgICA9IF9kZXJlcV8oNjYpXG4gICwgZ09QTkV4dCAgICAgICAgPSBfZGVyZXFfKDcxKVxuICAsICRHT1BEICAgICAgICAgID0gX2RlcmVxXyg3MClcbiAgLCAkRFAgICAgICAgICAgICA9IF9kZXJlcV8oNjcpXG4gICwgJGtleXMgICAgICAgICAgPSBfZGVyZXFfKDc2KVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgX2RlcmVxXyg3MikuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBfZGVyZXFfKDc3KS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgX2RlcmVxXyg3MykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIV9kZXJlcV8oNTgpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCBfZGVyZXFfKDQwKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbn0se1wiMTA3XCI6MTA3LFwiMTEwXCI6MTEwLFwiMTE0XCI6MTE0LFwiMTE1XCI6MTE1LFwiMTE2XCI6MTE2LFwiMTE3XCI6MTE3LFwiMjhcIjoyOCxcIjMxXCI6MzEsXCIzMlwiOjMyLFwiMzRcIjozNCxcIjM4XCI6MzgsXCIzOVwiOjM5LFwiNDBcIjo0MCxcIjQ3XCI6NDcsXCI1N1wiOjU3LFwiNThcIjo1OCxcIjYyXCI6NjIsXCI2NlwiOjY2LFwiNjdcIjo2NyxcIjdcIjo3LFwiNzBcIjo3MCxcIjcxXCI6NzEsXCI3MlwiOjcyLFwiNzNcIjo3MyxcIjc2XCI6NzYsXCI3N1wiOjc3LFwiODVcIjo4NSxcIjg3XCI6ODcsXCI5MlwiOjkyLFwiOTRcIjo5NH1dLDI0NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgID0gX2RlcmVxXygzMilcbiAgLCAkdHlwZWQgICAgICAgPSBfZGVyZXFfKDExMylcbiAgLCBidWZmZXIgICAgICAgPSBfZGVyZXFfKDExMilcbiAgLCBhbk9iamVjdCAgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9JbmRleCAgICAgID0gX2RlcmVxXygxMDUpXG4gICwgdG9MZW5ndGggICAgID0gX2RlcmVxXygxMDgpXG4gICwgaXNPYmplY3QgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBBcnJheUJ1ZmZlciAgPSBfZGVyZXFfKDM4KS5BcnJheUJ1ZmZlclxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9kZXJlcV8oOTUpXG4gICwgJEFycmF5QnVmZmVyID0gYnVmZmVyLkFycmF5QnVmZmVyXG4gICwgJERhdGFWaWV3ICAgID0gYnVmZmVyLkRhdGFWaWV3XG4gICwgJGlzVmlldyAgICAgID0gJHR5cGVkLkFCViAmJiBBcnJheUJ1ZmZlci5pc1ZpZXdcbiAgLCAkc2xpY2UgICAgICAgPSAkQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlXG4gICwgVklFVyAgICAgICAgID0gJHR5cGVkLlZJRVdcbiAgLCBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChBcnJheUJ1ZmZlciAhPT0gJEFycmF5QnVmZmVyKSwge0FycmF5QnVmZmVyOiAkQXJyYXlCdWZmZXJ9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhJHR5cGVkLkNPTlNUUiwgQVJSQVlfQlVGRkVSLCB7XG4gIC8vIDI0LjEuMy4xIEFycmF5QnVmZmVyLmlzVmlldyhhcmcpXG4gIGlzVmlldzogZnVuY3Rpb24gaXNWaWV3KGl0KXtcbiAgICByZXR1cm4gJGlzVmlldyAmJiAkaXNWaWV3KGl0KSB8fCBpc09iamVjdChpdCkgJiYgVklFVyBpbiBpdDtcbiAgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5VICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICFuZXcgJEFycmF5QnVmZmVyKDIpLnNsaWNlKDEsIHVuZGVmaW5lZCkuYnl0ZUxlbmd0aDtcbn0pLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS40LjMgQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKXtcbiAgICBpZigkc2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZClyZXR1cm4gJHNsaWNlLmNhbGwoYW5PYmplY3QodGhpcyksIHN0YXJ0KTsgLy8gRkYgZml4XG4gICAgdmFyIGxlbiAgICA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGhcbiAgICAgICwgZmlyc3QgID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICAgLCBmaW5hbCAgPSB0b0luZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kLCBsZW4pXG4gICAgICAsIHJlc3VsdCA9IG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRBcnJheUJ1ZmZlcikpKHRvTGVuZ3RoKGZpbmFsIC0gZmlyc3QpKVxuICAgICAgLCB2aWV3UyAgPSBuZXcgJERhdGFWaWV3KHRoaXMpXG4gICAgICAsIHZpZXdUICA9IG5ldyAkRGF0YVZpZXcocmVzdWx0KVxuICAgICAgLCBpbmRleCAgPSAwO1xuICAgIHdoaWxlKGZpcnN0IDwgZmluYWwpe1xuICAgICAgdmlld1Quc2V0VWludDgoaW5kZXgrKywgdmlld1MuZ2V0VWludDgoZmlyc3QrKykpO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cbl9kZXJlcV8oOTEpKEFSUkFZX0JVRkZFUik7XG59LHtcIjEwNVwiOjEwNSxcIjEwOFwiOjEwOCxcIjExMlwiOjExMixcIjExM1wiOjExMyxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjQ5XCI6NDksXCI3XCI6NyxcIjkxXCI6OTEsXCI5NVwiOjk1fV0sMjQ1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFfZGVyZXFfKDExMykuQUJWLCB7XG4gIERhdGFWaWV3OiBfZGVyZXFfKDExMikuRGF0YVZpZXdcbn0pO1xufSx7XCIxMTJcIjoxMTIsXCIxMTNcIjoxMTMsXCIzMlwiOjMyfV0sMjQ2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnRmxvYXQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gRmxvYXQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdGbG9hdDY0JywgOCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDY0QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI0ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ0ludDE2JywgMiwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdJbnQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gSW50MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjUwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnSW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gSW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdVaW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQxNkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdVaW50MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdVaW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjU0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnVWludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4Q2xhbXBlZEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0sIHRydWUpO1xufSx7XCIxMTFcIjoxMTF9XSwyNTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGVhY2ggICAgICAgICA9IF9kZXJlcV8oMTIpKDApXG4gICwgcmVkZWZpbmUgICAgID0gX2RlcmVxXyg4NylcbiAgLCBtZXRhICAgICAgICAgPSBfZGVyZXFfKDYyKVxuICAsIGFzc2lnbiAgICAgICA9IF9kZXJlcV8oNjUpXG4gICwgd2VhayAgICAgICAgID0gX2RlcmVxXygyMSlcbiAgLCBpc09iamVjdCAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIGdldFdlYWsgICAgICA9IG1ldGEuZ2V0V2Vha1xuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGVcbiAgLCB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlXG4gICwgdG1wICAgICAgICAgID0ge31cbiAgLCBJbnRlcm5hbE1hcDtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpe1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufTtcblxudmFyIG1ldGhvZHMgPSB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgaWYoaXNPYmplY3Qoa2V5KSl7XG4gICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDIyKSgnV2Vha01hcCcsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIpO1xuICBhc3NpZ24oSW50ZXJuYWxNYXAucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgZWFjaChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBwcm90byAgPSAkV2Vha01hcC5wcm90b3R5cGVcbiAgICAgICwgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKXtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgaWYoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSl7XG4gICAgICAgIGlmKCF0aGlzLl9mKXRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXA7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG59LHtcIjEyXCI6MTIsXCIyMVwiOjIxLFwiMjJcIjoyMixcIjQ5XCI6NDksXCI2MlwiOjYyLFwiNjVcIjo2NSxcIjg3XCI6ODd9XSwyNTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIHdlYWsgPSBfZGVyZXFfKDIxKTtcblxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcbl9kZXJlcV8oMjIpKCdXZWFrU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG4gIH1cbn0sIHdlYWssIGZhbHNlLCB0cnVlKTtcbn0se1wiMjFcIjoyMSxcIjIyXCI6MjJ9XSwyNTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCAkaW5jbHVkZXMgPSBfZGVyZXFfKDExKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5fZGVyZXFfKDUpKCdpbmNsdWRlcycpO1xufSx7XCIxMVwiOjExLFwiMzJcIjozMixcIjVcIjo1fV0sMjU4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA5L3NlcHQtMjUubWQjNTEwLWdsb2JhbGFzYXAtZm9yLWVucXVldWluZy1hLW1pY3JvdGFza1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgbWljcm90YXNrID0gX2RlcmVxXyg2NCkoKVxuICAsIHByb2Nlc3MgICA9IF9kZXJlcV8oMzgpLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgPSBfZGVyZXFfKDE4KShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7XG4gIGFzYXA6IGZ1bmN0aW9uIGFzYXAoZm4pe1xuICAgIHZhciBkb21haW4gPSBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW47XG4gICAgbWljcm90YXNrKGRvbWFpbiA/IGRvbWFpbi5iaW5kKGZuKSA6IGZuKTtcbiAgfVxufSk7XG59LHtcIjE4XCI6MTgsXCIzMlwiOjMyLFwiMzhcIjozOCxcIjY0XCI6NjR9XSwyNTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9wcm9wb3NhbC1pcy1lcnJvclxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGNvZiAgICAgPSBfZGVyZXFfKDE4KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdFcnJvcicsIHtcbiAgaXNFcnJvcjogZnVuY3Rpb24gaXNFcnJvcihpdCl7XG4gICAgcmV0dXJuIGNvZihpdCkgPT09ICdFcnJvcic7XG4gIH1cbn0pO1xufSx7XCIxOFwiOjE4LFwiMzJcIjozMn1dLDI2MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiBfZGVyZXFfKDIwKSgnTWFwJyl9KTtcbn0se1wiMjBcIjoyMCxcIjMyXCI6MzJ9XSwyNjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaWFkZGg6IGZ1bmN0aW9uIGlhZGRoKHgwLCB4MSwgeTAsIHkxKXtcbiAgICB2YXIgJHgwID0geDAgPj4+IDBcbiAgICAgICwgJHgxID0geDEgPj4+IDBcbiAgICAgICwgJHkwID0geTAgPj4+IDA7XG4gICAgcmV0dXJuICR4MSArICh5MSA+Pj4gMCkgKyAoKCR4MCAmICR5MCB8ICgkeDAgfCAkeTApICYgfigkeDAgKyAkeTAgPj4+IDApKSA+Pj4gMzEpIHwgMDtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwyNjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaW11bGg6IGZ1bmN0aW9uIGltdWxoKHUsIHYpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgJHUgPSArdVxuICAgICAgLCAkdiA9ICt2XG4gICAgICAsIHUwID0gJHUgJiBVSU5UMTZcbiAgICAgICwgdjAgPSAkdiAmIFVJTlQxNlxuICAgICAgLCB1MSA9ICR1ID4+IDE2XG4gICAgICAsIHYxID0gJHYgPj4gMTZcbiAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+PiAxNik7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMjYzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlzdWJoOiBmdW5jdGlvbiBpc3ViaCh4MCwgeDEsIHkwLCB5MSl7XG4gICAgdmFyICR4MCA9IHgwID4+PiAwXG4gICAgICAsICR4MSA9IHgxID4+PiAwXG4gICAgICAsICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgLSAoeTEgPj4+IDApIC0gKCh+JHgwICYgJHkwIHwgfigkeDAgXiAkeTApICYgJHgwIC0gJHkwID4+PiAwKSA+Pj4gMzEpIHwgMDtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwyNjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdW11bGg6IGZ1bmN0aW9uIHVtdWxoKHUsIHYpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgJHUgPSArdVxuICAgICAgLCAkdiA9ICt2XG4gICAgICAsIHUwID0gJHUgJiBVSU5UMTZcbiAgICAgICwgdjAgPSAkdiAmIFVJTlQxNlxuICAgICAgLCB1MSA9ICR1ID4+PiAxNlxuICAgICAgLCB2MSA9ICR2ID4+PiAxNlxuICAgICAgLCB0ICA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG4gICAgcmV0dXJuIHUxICogdjEgKyAodCA+Pj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+Pj4gMTYpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDI2NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b09iamVjdCAgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCBhRnVuY3Rpb24gICAgICAgPSBfZGVyZXFfKDMpXG4gICwgJGRlZmluZVByb3BlcnR5ID0gX2RlcmVxXyg2Nyk7XG5cbi8vIEIuMi4yLjIgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcilcbl9kZXJlcV8oMjgpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX2RlcmVxXyg2OSksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lR2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKXtcbiAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge2dldDogYUZ1bmN0aW9uKGdldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuICB9XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiMjhcIjoyOCxcIjNcIjozLFwiMzJcIjozMixcIjY3XCI6NjcsXCI2OVwiOjY5fV0sMjY2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvT2JqZWN0ICAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAsIGFGdW5jdGlvbiAgICAgICA9IF9kZXJlcV8oMylcbiAgLCAkZGVmaW5lUHJvcGVydHkgPSBfZGVyZXFfKDY3KTtcblxuLy8gQi4yLjIuMyBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKVxuX2RlcmVxXygyOCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfZGVyZXFfKDY5KSwgJ09iamVjdCcsIHtcbiAgX19kZWZpbmVTZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpe1xuICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7c2V0OiBhRnVuY3Rpb24oc2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG4gIH1cbn0pO1xufSx7XCIxMDlcIjoxMDksXCIyOFwiOjI4LFwiM1wiOjMsXCIzMlwiOjMyLFwiNjdcIjo2NyxcIjY5XCI6Njl9XSwyNjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsICRlbnRyaWVzID0gX2RlcmVxXyg3OSkodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjc5XCI6Nzl9XSwyNjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbnZhciAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgb3duS2V5cyAgICAgICAgPSBfZGVyZXFfKDgwKVxuICAsIHRvSU9iamVjdCAgICAgID0gX2RlcmVxXygxMDcpXG4gICwgZ09QRCAgICAgICAgICAgPSBfZGVyZXFfKDcwKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gX2RlcmVxXygyNCk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCl7XG4gICAgdmFyIE8gICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICAgLCBnZXREZXNjID0gZ09QRC5mXG4gICAgICAsIGtleXMgICAgPSBvd25LZXlzKE8pXG4gICAgICAsIHJlc3VsdCAgPSB7fVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoa2V5cy5sZW5ndGggPiBpKWNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5ID0ga2V5c1tpKytdLCBnZXREZXNjKE8sIGtleSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xufSx7XCIxMDdcIjoxMDcsXCIyNFwiOjI0LFwiMzJcIjozMixcIjcwXCI6NzAsXCI4MFwiOjgwfV0sMjY5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvT2JqZWN0ICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAsIHRvUHJpbWl0aXZlICAgICAgICAgICAgICA9IF9kZXJlcV8oMTEwKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IF9kZXJlcV8oNzQpXG4gICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX2RlcmVxXyg3MCkuZjtcblxuLy8gQi4yLjIuNCBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwR2V0dGVyX18oUClcbl9kZXJlcV8oMjgpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX2RlcmVxXyg2OSksICdPYmplY3QnLCB7XG4gIF9fbG9va3VwR2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwR2V0dGVyX18oUCl7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKVxuICAgICAgLCBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSlcbiAgICAgICwgRDtcbiAgICBkbyB7XG4gICAgICBpZihEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKXJldHVybiBELmdldDtcbiAgICB9IHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gIH1cbn0pO1xufSx7XCIxMDlcIjoxMDksXCIxMTBcIjoxMTAsXCIyOFwiOjI4LFwiMzJcIjozMixcIjY5XCI6NjksXCI3MFwiOjcwLFwiNzRcIjo3NH1dLDI3MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgICAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b09iamVjdCAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCB0b1ByaW1pdGl2ZSAgICAgICAgICAgICAgPSBfZGVyZXFfKDExMClcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICAgPSBfZGVyZXFfKDc0KVxuICAsIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IF9kZXJlcV8oNzApLmY7XG5cbi8vIEIuMi4yLjUgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cFNldHRlcl9fKFApXG5fZGVyZXFfKDI4KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9kZXJlcV8oNjkpLCAnT2JqZWN0Jywge1xuICBfX2xvb2t1cFNldHRlcl9fOiBmdW5jdGlvbiBfX2xvb2t1cFNldHRlcl9fKFApe1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgSyA9IHRvUHJpbWl0aXZlKFAsIHRydWUpXG4gICAgICAsIEQ7XG4gICAgZG8ge1xuICAgICAgaWYoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSlyZXR1cm4gRC5zZXQ7XG4gICAgfSB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpO1xuICB9XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiMTEwXCI6MTEwLFwiMjhcIjoyOCxcIjMyXCI6MzIsXCI2OVwiOjY5LFwiNzBcIjo3MCxcIjc0XCI6NzR9XSwyNzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHZhbHVlcyA9IF9kZXJlcV8oNzkpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KXtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNzlcIjo3OX1dLDI3MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG52YXIgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGdsb2JhbCAgICAgID0gX2RlcmVxXygzOClcbiAgLCBjb3JlICAgICAgICA9IF9kZXJlcV8oMjMpXG4gICwgbWljcm90YXNrICAgPSBfZGVyZXFfKDY0KSgpXG4gICwgT0JTRVJWQUJMRSAgPSBfZGVyZXFfKDExNykoJ29ic2VydmFibGUnKVxuICAsIGFGdW5jdGlvbiAgID0gX2RlcmVxXygzKVxuICAsIGFuT2JqZWN0ICAgID0gX2RlcmVxXyg3KVxuICAsIGFuSW5zdGFuY2UgID0gX2RlcmVxXyg2KVxuICAsIHJlZGVmaW5lQWxsID0gX2RlcmVxXyg4NilcbiAgLCBoaWRlICAgICAgICA9IF9kZXJlcV8oNDApXG4gICwgZm9yT2YgICAgICAgPSBfZGVyZXFfKDM3KVxuICAsIFJFVFVSTiAgICAgID0gZm9yT2YuUkVUVVJOO1xuXG52YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oZm4pe1xuICByZXR1cm4gZm4gPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGFGdW5jdGlvbihmbik7XG59O1xuXG52YXIgY2xlYW51cFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIHZhciBjbGVhbnVwID0gc3Vic2NyaXB0aW9uLl9jO1xuICBpZihjbGVhbnVwKXtcbiAgICBzdWJzY3JpcHRpb24uX2MgPSB1bmRlZmluZWQ7XG4gICAgY2xlYW51cCgpO1xuICB9XG59O1xuXG52YXIgc3Vic2NyaXB0aW9uQ2xvc2VkID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgcmV0dXJuIHN1YnNjcmlwdGlvbi5fbyA9PT0gdW5kZWZpbmVkO1xufTtcblxudmFyIGNsb3NlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcbiAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG4gICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICB9XG59O1xuXG52YXIgU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24ob2JzZXJ2ZXIsIHN1YnNjcmliZXIpe1xuICBhbk9iamVjdChvYnNlcnZlcik7XG4gIHRoaXMuX2MgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX28gPSBvYnNlcnZlcjtcbiAgb2JzZXJ2ZXIgPSBuZXcgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIodGhpcyk7XG4gIHRyeSB7XG4gICAgdmFyIGNsZWFudXAgICAgICA9IHN1YnNjcmliZXIob2JzZXJ2ZXIpXG4gICAgICAsIHN1YnNjcmlwdGlvbiA9IGNsZWFudXA7XG4gICAgaWYoY2xlYW51cCAhPSBudWxsKXtcbiAgICAgIGlmKHR5cGVvZiBjbGVhbnVwLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKWNsZWFudXAgPSBmdW5jdGlvbigpeyBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgIGVsc2UgYUZ1bmN0aW9uKGNsZWFudXApO1xuICAgICAgdGhpcy5fYyA9IGNsZWFudXA7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgIHJldHVybjtcbiAgfSBpZihzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpY2xlYW51cFN1YnNjcmlwdGlvbih0aGlzKTtcbn07XG5cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKXsgY2xvc2VTdWJzY3JpcHRpb24odGhpcyk7IH1cbn0pO1xuXG52YXIgU3Vic2NyaXB0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICB0aGlzLl9zID0gc3Vic2NyaXB0aW9uO1xufTtcblxuU3Vic2NyaXB0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcbiAgbmV4dDogZnVuY3Rpb24gbmV4dCh2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcbiAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLm5leHQpO1xuICAgICAgICBpZihtKXJldHVybiBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xvc2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IodmFsdWUpe1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmKHN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXRocm93IHZhbHVlO1xuICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICBzdWJzY3JpcHRpb24uX28gPSB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmVycm9yKTtcbiAgICAgIGlmKCFtKXRocm93IHZhbHVlO1xuICAgICAgdmFsdWUgPSBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKXtcbiAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmNvbXBsZXRlKTtcbiAgICAgICAgdmFsdWUgPSBtID8gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgJE9ic2VydmFibGUgPSBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZXIpe1xuICBhbkluc3RhbmNlKHRoaXMsICRPYnNlcnZhYmxlLCAnT2JzZXJ2YWJsZScsICdfZicpLl9mID0gYUZ1bmN0aW9uKHN1YnNjcmliZXIpO1xufTtcblxucmVkZWZpbmVBbGwoJE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKXtcbiAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbihvYnNlcnZlciwgdGhpcy5fZik7XG4gIH0sXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pe1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IChjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBhRnVuY3Rpb24oZm4pO1xuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoYXQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dCA6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICBjb21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZSwge1xuICBmcm9tOiBmdW5jdGlvbiBmcm9tKHgpe1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGU7XG4gICAgdmFyIG1ldGhvZCA9IGdldE1ldGhvZChhbk9iamVjdCh4KVtPQlNFUlZBQkxFXSk7XG4gICAgaWYobWV0aG9kKXtcbiAgICAgIHZhciBvYnNlcnZhYmxlID0gYW5PYmplY3QobWV0aG9kLmNhbGwoeCkpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGUuY29uc3RydWN0b3IgPT09IEMgPyBvYnNlcnZhYmxlIDogbmV3IEMoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG4gICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFkb25lKXtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYoZm9yT2YoeCwgZmFsc2UsIGZ1bmN0aW9uKGl0KXtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdCk7XG4gICAgICAgICAgICAgIGlmKGRvbmUpcmV0dXJuIFJFVFVSTjtcbiAgICAgICAgICAgIH0pID09PSBSRVRVUk4pcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICBpZihkb25lKXRocm93IGU7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IGRvbmUgPSB0cnVlOyB9O1xuICAgIH0pO1xuICB9LFxuICBvZjogZnVuY3Rpb24gb2YoKXtcbiAgICBmb3IodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aCwgaXRlbXMgPSBBcnJheShsKTsgaSA8IGw7KWl0ZW1zW2ldID0gYXJndW1lbnRzW2krK107XG4gICAgcmV0dXJuIG5ldyAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicgPyB0aGlzIDogJE9ic2VydmFibGUpKGZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWRvbmUpe1xuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSl7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1zW2ldKTtcbiAgICAgICAgICAgIGlmKGRvbmUpcmV0dXJuO1xuICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5oaWRlKCRPYnNlcnZhYmxlLnByb3RvdHlwZSwgT0JTRVJWQUJMRSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuRywge09ic2VydmFibGU6ICRPYnNlcnZhYmxlfSk7XG5cbl9kZXJlcV8oOTEpKCdPYnNlcnZhYmxlJyk7XG59LHtcIjExN1wiOjExNyxcIjIzXCI6MjMsXCIzXCI6MyxcIjMyXCI6MzIsXCIzN1wiOjM3LFwiMzhcIjozOCxcIjQwXCI6NDAsXCI2XCI6NixcIjY0XCI6NjQsXCI3XCI6NyxcIjg2XCI6ODYsXCI5MVwiOjkxfV0sMjczOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5tZXRhZGF0YS5leHAoe2RlZmluZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpe1xuICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCBhbk9iamVjdCh0YXJnZXQpLCB0b01ldGFLZXkodGFyZ2V0S2V5KSk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6N31dLDI3NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG4gICwgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IG1ldGFkYXRhLm1hcFxuICAsIHN0b3JlICAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5zdG9yZTtcblxubWV0YWRhdGEuZXhwKHtkZWxldGVNZXRhZGF0YTogZnVuY3Rpb24gZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgdmFyIHRhcmdldEtleSAgID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKVxuICAgICwgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKGFuT2JqZWN0KHRhcmdldCksIHRhcmdldEtleSwgZmFsc2UpO1xuICBpZihtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkIHx8ICFtZXRhZGF0YU1hcFsnZGVsZXRlJ10obWV0YWRhdGFLZXkpKXJldHVybiBmYWxzZTtcbiAgaWYobWV0YWRhdGFNYXAuc2l6ZSlyZXR1cm4gdHJ1ZTtcbiAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG4gIHRhcmdldE1ldGFkYXRhWydkZWxldGUnXSh0YXJnZXRLZXkpO1xuICByZXR1cm4gISF0YXJnZXRNZXRhZGF0YS5zaXplIHx8IHN0b3JlWydkZWxldGUnXSh0YXJnZXQpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjd9XSwyNzU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIFNldCAgICAgICAgICAgICAgICAgICAgID0gX2RlcmVxXygyMjApXG4gICwgZnJvbSAgICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDEwKVxuICAsIG1ldGFkYXRhICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICA9IF9kZXJlcV8oNzQpXG4gICwgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeU1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uKE8sIFApe1xuICB2YXIgb0tleXMgID0gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUClcbiAgICAsIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICBpZihwYXJlbnQgPT09IG51bGwpcmV0dXJuIG9LZXlzO1xuICB2YXIgcEtleXMgID0gb3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcbiAgcmV0dXJuIHBLZXlzLmxlbmd0aCA/IG9LZXlzLmxlbmd0aCA/IGZyb20obmV3IFNldChvS2V5cy5jb25jYXQocEtleXMpKSkgOiBwS2V5cyA6IG9LZXlzO1xufTtcblxubWV0YWRhdGEuZXhwKHtnZXRNZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeU1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcbn19KTtcbn0se1wiMTBcIjoxMCxcIjIyMFwiOjIyMCxcIjYzXCI6NjMsXCI3XCI6NyxcIjc0XCI6NzR9XSwyNzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICA9IF9kZXJlcV8oNzQpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG52YXIgb3JkaW5hcnlHZXRNZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZihoYXNPd24pcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xufTtcblxubWV0YWRhdGEuZXhwKHtnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjcsXCI3NFwiOjc0fV0sMjc3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7Z2V0T3duTWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6N31dLDI3ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0XG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtnZXRPd25NZXRhZGF0YTogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcbiAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjd9XSwyNzk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICA9IF9kZXJlcV8oNzQpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeUhhc01ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIGlmKGhhc093bilyZXR1cm4gdHJ1ZTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xufTtcblxubWV0YWRhdGEuZXhwKHtoYXNNZXRhZGF0YTogZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xufSx7XCI2M1wiOjYzLFwiN1wiOjcsXCI3NFwiOjc0fV0sMjgwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoe2hhc093bk1ldGFkYXRhOiBmdW5jdGlvbiBoYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6N31dLDI4MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgICAgICAgID0gX2RlcmVxXygzKVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5tZXRhZGF0YS5leHAoe21ldGFkYXRhOiBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCB0YXJnZXRLZXkpe1xuICAgIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoXG4gICAgICBtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSxcbiAgICAgICh0YXJnZXRLZXkgIT09IHVuZGVmaW5lZCA/IGFuT2JqZWN0IDogYUZ1bmN0aW9uKSh0YXJnZXQpLFxuICAgICAgdG9NZXRhS2V5KHRhcmdldEtleSlcbiAgICApO1xuICB9O1xufX0pO1xufSx7XCIzXCI6MyxcIjYzXCI6NjMsXCI3XCI6N31dLDI4MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7dG9KU09OOiBfZGVyZXFfKDIwKSgnU2V0Jyl9KTtcbn0se1wiMjBcIjoyMCxcIjMyXCI6MzJ9XSwyODM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRhdCAgICAgPSBfZGVyZXFfKDk3KSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIGF0OiBmdW5jdGlvbiBhdChwb3Mpe1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI5N1wiOjk3fV0sMjg0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vU3RyaW5nLnByb3RvdHlwZS5tYXRjaEFsbC9cbnZhciAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgZGVmaW5lZCAgICAgPSBfZGVyZXFfKDI3KVxuICAsIHRvTGVuZ3RoICAgID0gX2RlcmVxXygxMDgpXG4gICwgaXNSZWdFeHAgICAgPSBfZGVyZXFfKDUwKVxuICAsIGdldEZsYWdzICAgID0gX2RlcmVxXygzNilcbiAgLCBSZWdFeHBQcm90byA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbnZhciAkUmVnRXhwU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbihyZWdleHAsIHN0cmluZyl7XG4gIHRoaXMuX3IgPSByZWdleHA7XG4gIHRoaXMuX3MgPSBzdHJpbmc7XG59O1xuXG5fZGVyZXFfKDUyKSgkUmVnRXhwU3RyaW5nSXRlcmF0b3IsICdSZWdFeHAgU3RyaW5nJywgZnVuY3Rpb24gbmV4dCgpe1xuICB2YXIgbWF0Y2ggPSB0aGlzLl9yLmV4ZWModGhpcy5fcyk7XG4gIHJldHVybiB7dmFsdWU6IG1hdGNoLCBkb25lOiBtYXRjaCA9PT0gbnVsbH07XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIG1hdGNoQWxsOiBmdW5jdGlvbiBtYXRjaEFsbChyZWdleHApe1xuICAgIGRlZmluZWQodGhpcyk7XG4gICAgaWYoIWlzUmVnRXhwKHJlZ2V4cCkpdGhyb3cgVHlwZUVycm9yKHJlZ2V4cCArICcgaXMgbm90IGEgcmVnZXhwIScpO1xuICAgIHZhciBTICAgICA9IFN0cmluZyh0aGlzKVxuICAgICAgLCBmbGFncyA9ICdmbGFncycgaW4gUmVnRXhwUHJvdG8gPyBTdHJpbmcocmVnZXhwLmZsYWdzKSA6IGdldEZsYWdzLmNhbGwocmVnZXhwKVxuICAgICAgLCByeCAgICA9IG5ldyBSZWdFeHAocmVnZXhwLnNvdXJjZSwgfmZsYWdzLmluZGV4T2YoJ2cnKSA/IGZsYWdzIDogJ2cnICsgZmxhZ3MpO1xuICAgIHJ4Lmxhc3RJbmRleCA9IHRvTGVuZ3RoKHJlZ2V4cC5sYXN0SW5kZXgpO1xuICAgIHJldHVybiBuZXcgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yKHJ4LCBTKTtcbiAgfVxufSk7XG59LHtcIjEwOFwiOjEwOCxcIjI3XCI6MjcsXCIzMlwiOjMyLFwiMzZcIjozNixcIjUwXCI6NTAsXCI1MlwiOjUyfV0sMjg1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHBhZCAgICA9IF9kZXJlcV8oMTAwKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuICB9XG59KTtcbn0se1wiMTAwXCI6MTAwLFwiMzJcIjozMn1dLDI4NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRwYWQgICAgPSBfZGVyZXFfKDEwMCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRTdGFydDogZnVuY3Rpb24gcGFkU3RhcnQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgfVxufSk7XG59LHtcIjEwMFwiOjEwMCxcIjMyXCI6MzJ9XSwyODc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxuX2RlcmVxXygxMDIpKCd0cmltTGVmdCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDEpO1xuICB9O1xufSwgJ3RyaW1TdGFydCcpO1xufSx7XCIxMDJcIjoxMDJ9XSwyODg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxuX2RlcmVxXygxMDIpKCd0cmltUmlnaHQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG4gIH07XG59LCAndHJpbUVuZCcpO1xufSx7XCIxMDJcIjoxMDJ9XSwyODk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTUpKCdhc3luY0l0ZXJhdG9yJyk7XG59LHtcIjExNVwiOjExNX1dLDI5MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExNSkoJ29ic2VydmFibGUnKTtcbn0se1wiMTE1XCI6MTE1fV0sMjkxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtZ2xvYmFsXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5c3RlbScsIHtnbG9iYWw6IF9kZXJlcV8oMzgpfSk7XG59LHtcIjMyXCI6MzIsXCIzOFwiOjM4fV0sMjkyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkaXRlcmF0b3JzICAgID0gX2RlcmVxXygxMzApXG4gICwgcmVkZWZpbmUgICAgICA9IF9kZXJlcV8oODcpXG4gICwgZ2xvYmFsICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgaGlkZSAgICAgICAgICA9IF9kZXJlcV8oNDApXG4gICwgSXRlcmF0b3JzICAgICA9IF9kZXJlcV8oNTYpXG4gICwgd2tzICAgICAgICAgICA9IF9kZXJlcV8oMTE3KVxuICAsIElURVJBVE9SICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgLCBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpXG4gICwgQXJyYXlWYWx1ZXMgICA9IEl0ZXJhdG9ycy5BcnJheTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlXG4gICAgLCBrZXk7XG4gIGlmKHByb3RvKXtcbiAgICBpZighcHJvdG9bSVRFUkFUT1JdKWhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYoIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGZvcihrZXkgaW4gJGl0ZXJhdG9ycylpZighcHJvdG9ba2V5XSlyZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG59LHtcIjExN1wiOjExNyxcIjEzMFwiOjEzMCxcIjM4XCI6MzgsXCI0MFwiOjQwLFwiNTZcIjo1NixcIjg3XCI6ODd9XSwyOTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICR0YXNrICAgPSBfZGVyZXFfKDEwNCk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiwge1xuICBzZXRJbW1lZGlhdGU6ICAgJHRhc2suc2V0LFxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbn0pO1xufSx7XCIxMDRcIjoxMDQsXCIzMlwiOjMyfV0sMjk0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbnZhciBnbG9iYWwgICAgID0gX2RlcmVxXygzOClcbiAgLCAkZXhwb3J0ICAgID0gX2RlcmVxXygzMilcbiAgLCBpbnZva2UgICAgID0gX2RlcmVxXyg0NClcbiAgLCBwYXJ0aWFsICAgID0gX2RlcmVxXyg4MylcbiAgLCBuYXZpZ2F0b3IgID0gZ2xvYmFsLm5hdmlnYXRvclxuICAsIE1TSUUgICAgICAgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHNldCl7XG4gIHJldHVybiBNU0lFID8gZnVuY3Rpb24oZm4sIHRpbWUgLyosIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBzZXQoaW52b2tlKFxuICAgICAgcGFydGlhbCxcbiAgICAgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSxcbiAgICAgIHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbilcbiAgICApLCB0aW1lKTtcbiAgfSA6IHNldDtcbn07XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiArICRleHBvcnQuRiAqIE1TSUUsIHtcbiAgc2V0VGltZW91dDogIHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbn0se1wiMzJcIjozMixcIjM4XCI6MzgsXCI0NFwiOjQ0LFwiODNcIjo4M31dLDI5NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDI0Myk7XG5fZGVyZXFfKDE4MCk7XG5fZGVyZXFfKDE4Mik7XG5fZGVyZXFfKDE4MSk7XG5fZGVyZXFfKDE4NCk7XG5fZGVyZXFfKDE4Nik7XG5fZGVyZXFfKDE5MSk7XG5fZGVyZXFfKDE4NSk7XG5fZGVyZXFfKDE4Myk7XG5fZGVyZXFfKDE5Myk7XG5fZGVyZXFfKDE5Mik7XG5fZGVyZXFfKDE4OCk7XG5fZGVyZXFfKDE4OSk7XG5fZGVyZXFfKDE4Nyk7XG5fZGVyZXFfKDE3OSk7XG5fZGVyZXFfKDE5MCk7XG5fZGVyZXFfKDE5NCk7XG5fZGVyZXFfKDE5NSk7XG5fZGVyZXFfKDE0Nik7XG5fZGVyZXFfKDE0OCk7XG5fZGVyZXFfKDE0Nyk7XG5fZGVyZXFfKDE5Nyk7XG5fZGVyZXFfKDE5Nik7XG5fZGVyZXFfKDE2Nyk7XG5fZGVyZXFfKDE3Nyk7XG5fZGVyZXFfKDE3OCk7XG5fZGVyZXFfKDE2OCk7XG5fZGVyZXFfKDE2OSk7XG5fZGVyZXFfKDE3MCk7XG5fZGVyZXFfKDE3MSk7XG5fZGVyZXFfKDE3Mik7XG5fZGVyZXFfKDE3Myk7XG5fZGVyZXFfKDE3NCk7XG5fZGVyZXFfKDE3NSk7XG5fZGVyZXFfKDE3Nik7XG5fZGVyZXFfKDE1MCk7XG5fZGVyZXFfKDE1MSk7XG5fZGVyZXFfKDE1Mik7XG5fZGVyZXFfKDE1Myk7XG5fZGVyZXFfKDE1NCk7XG5fZGVyZXFfKDE1NSk7XG5fZGVyZXFfKDE1Nik7XG5fZGVyZXFfKDE1Nyk7XG5fZGVyZXFfKDE1OCk7XG5fZGVyZXFfKDE1OSk7XG5fZGVyZXFfKDE2MCk7XG5fZGVyZXFfKDE2MSk7XG5fZGVyZXFfKDE2Mik7XG5fZGVyZXFfKDE2Myk7XG5fZGVyZXFfKDE2NCk7XG5fZGVyZXFfKDE2NSk7XG5fZGVyZXFfKDE2Nik7XG5fZGVyZXFfKDIzMCk7XG5fZGVyZXFfKDIzNSk7XG5fZGVyZXFfKDI0Mik7XG5fZGVyZXFfKDIzMyk7XG5fZGVyZXFfKDIyNSk7XG5fZGVyZXFfKDIyNik7XG5fZGVyZXFfKDIzMSk7XG5fZGVyZXFfKDIzNik7XG5fZGVyZXFfKDIzOCk7XG5fZGVyZXFfKDIyMSk7XG5fZGVyZXFfKDIyMik7XG5fZGVyZXFfKDIyMyk7XG5fZGVyZXFfKDIyNCk7XG5fZGVyZXFfKDIyNyk7XG5fZGVyZXFfKDIyOCk7XG5fZGVyZXFfKDIyOSk7XG5fZGVyZXFfKDIzMik7XG5fZGVyZXFfKDIzNCk7XG5fZGVyZXFfKDIzNyk7XG5fZGVyZXFfKDIzOSk7XG5fZGVyZXFfKDI0MCk7XG5fZGVyZXFfKDI0MSk7XG5fZGVyZXFfKDE0MSk7XG5fZGVyZXFfKDE0Myk7XG5fZGVyZXFfKDE0Mik7XG5fZGVyZXFfKDE0NSk7XG5fZGVyZXFfKDE0NCk7XG5fZGVyZXFfKDEyOSk7XG5fZGVyZXFfKDEyNyk7XG5fZGVyZXFfKDEzNCk7XG5fZGVyZXFfKDEzMSk7XG5fZGVyZXFfKDEzNyk7XG5fZGVyZXFfKDEzOSk7XG5fZGVyZXFfKDEyNik7XG5fZGVyZXFfKDEzMyk7XG5fZGVyZXFfKDEyMyk7XG5fZGVyZXFfKDEzOCk7XG5fZGVyZXFfKDEyMSk7XG5fZGVyZXFfKDEzNik7XG5fZGVyZXFfKDEzNSk7XG5fZGVyZXFfKDEyOCk7XG5fZGVyZXFfKDEzMik7XG5fZGVyZXFfKDEyMCk7XG5fZGVyZXFfKDEyMik7XG5fZGVyZXFfKDEyNSk7XG5fZGVyZXFfKDEyNCk7XG5fZGVyZXFfKDE0MCk7XG5fZGVyZXFfKDEzMCk7XG5fZGVyZXFfKDIxMyk7XG5fZGVyZXFfKDIxOSk7XG5fZGVyZXFfKDIxNCk7XG5fZGVyZXFfKDIxNSk7XG5fZGVyZXFfKDIxNik7XG5fZGVyZXFfKDIxNyk7XG5fZGVyZXFfKDIxOCk7XG5fZGVyZXFfKDE5OCk7XG5fZGVyZXFfKDE0OSk7XG5fZGVyZXFfKDIyMCk7XG5fZGVyZXFfKDI1NSk7XG5fZGVyZXFfKDI1Nik7XG5fZGVyZXFfKDI0NCk7XG5fZGVyZXFfKDI0NSk7XG5fZGVyZXFfKDI1MCk7XG5fZGVyZXFfKDI1Myk7XG5fZGVyZXFfKDI1NCk7XG5fZGVyZXFfKDI0OCk7XG5fZGVyZXFfKDI1MSk7XG5fZGVyZXFfKDI0OSk7XG5fZGVyZXFfKDI1Mik7XG5fZGVyZXFfKDI0Nik7XG5fZGVyZXFfKDI0Nyk7XG5fZGVyZXFfKDE5OSk7XG5fZGVyZXFfKDIwMCk7XG5fZGVyZXFfKDIwMSk7XG5fZGVyZXFfKDIwMik7XG5fZGVyZXFfKDIwMyk7XG5fZGVyZXFfKDIwNik7XG5fZGVyZXFfKDIwNCk7XG5fZGVyZXFfKDIwNSk7XG5fZGVyZXFfKDIwNyk7XG5fZGVyZXFfKDIwOCk7XG5fZGVyZXFfKDIwOSk7XG5fZGVyZXFfKDIxMCk7XG5fZGVyZXFfKDIxMik7XG5fZGVyZXFfKDIxMSk7XG5fZGVyZXFfKDI1Nyk7XG5fZGVyZXFfKDI4Myk7XG5fZGVyZXFfKDI4Nik7XG5fZGVyZXFfKDI4NSk7XG5fZGVyZXFfKDI4Nyk7XG5fZGVyZXFfKDI4OCk7XG5fZGVyZXFfKDI4NCk7XG5fZGVyZXFfKDI4OSk7XG5fZGVyZXFfKDI5MCk7XG5fZGVyZXFfKDI2OCk7XG5fZGVyZXFfKDI3MSk7XG5fZGVyZXFfKDI2Nyk7XG5fZGVyZXFfKDI2NSk7XG5fZGVyZXFfKDI2Nik7XG5fZGVyZXFfKDI2OSk7XG5fZGVyZXFfKDI3MCk7XG5fZGVyZXFfKDI2MCk7XG5fZGVyZXFfKDI4Mik7XG5fZGVyZXFfKDI5MSk7XG5fZGVyZXFfKDI1OSk7XG5fZGVyZXFfKDI2MSk7XG5fZGVyZXFfKDI2Myk7XG5fZGVyZXFfKDI2Mik7XG5fZGVyZXFfKDI2NCk7XG5fZGVyZXFfKDI3Myk7XG5fZGVyZXFfKDI3NCk7XG5fZGVyZXFfKDI3Nik7XG5fZGVyZXFfKDI3NSk7XG5fZGVyZXFfKDI3OCk7XG5fZGVyZXFfKDI3Nyk7XG5fZGVyZXFfKDI3OSk7XG5fZGVyZXFfKDI4MCk7XG5fZGVyZXFfKDI4MSk7XG5fZGVyZXFfKDI1OCk7XG5fZGVyZXFfKDI3Mik7XG5fZGVyZXFfKDI5NCk7XG5fZGVyZXFfKDI5Myk7XG5fZGVyZXFfKDI5Mik7XG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjMpO1xufSx7XCIxMjBcIjoxMjAsXCIxMjFcIjoxMjEsXCIxMjJcIjoxMjIsXCIxMjNcIjoxMjMsXCIxMjRcIjoxMjQsXCIxMjVcIjoxMjUsXCIxMjZcIjoxMjYsXCIxMjdcIjoxMjcsXCIxMjhcIjoxMjgsXCIxMjlcIjoxMjksXCIxMzBcIjoxMzAsXCIxMzFcIjoxMzEsXCIxMzJcIjoxMzIsXCIxMzNcIjoxMzMsXCIxMzRcIjoxMzQsXCIxMzVcIjoxMzUsXCIxMzZcIjoxMzYsXCIxMzdcIjoxMzcsXCIxMzhcIjoxMzgsXCIxMzlcIjoxMzksXCIxNDBcIjoxNDAsXCIxNDFcIjoxNDEsXCIxNDJcIjoxNDIsXCIxNDNcIjoxNDMsXCIxNDRcIjoxNDQsXCIxNDVcIjoxNDUsXCIxNDZcIjoxNDYsXCIxNDdcIjoxNDcsXCIxNDhcIjoxNDgsXCIxNDlcIjoxNDksXCIxNTBcIjoxNTAsXCIxNTFcIjoxNTEsXCIxNTJcIjoxNTIsXCIxNTNcIjoxNTMsXCIxNTRcIjoxNTQsXCIxNTVcIjoxNTUsXCIxNTZcIjoxNTYsXCIxNTdcIjoxNTcsXCIxNThcIjoxNTgsXCIxNTlcIjoxNTksXCIxNjBcIjoxNjAsXCIxNjFcIjoxNjEsXCIxNjJcIjoxNjIsXCIxNjNcIjoxNjMsXCIxNjRcIjoxNjQsXCIxNjVcIjoxNjUsXCIxNjZcIjoxNjYsXCIxNjdcIjoxNjcsXCIxNjhcIjoxNjgsXCIxNjlcIjoxNjksXCIxNzBcIjoxNzAsXCIxNzFcIjoxNzEsXCIxNzJcIjoxNzIsXCIxNzNcIjoxNzMsXCIxNzRcIjoxNzQsXCIxNzVcIjoxNzUsXCIxNzZcIjoxNzYsXCIxNzdcIjoxNzcsXCIxNzhcIjoxNzgsXCIxNzlcIjoxNzksXCIxODBcIjoxODAsXCIxODFcIjoxODEsXCIxODJcIjoxODIsXCIxODNcIjoxODMsXCIxODRcIjoxODQsXCIxODVcIjoxODUsXCIxODZcIjoxODYsXCIxODdcIjoxODcsXCIxODhcIjoxODgsXCIxODlcIjoxODksXCIxOTBcIjoxOTAsXCIxOTFcIjoxOTEsXCIxOTJcIjoxOTIsXCIxOTNcIjoxOTMsXCIxOTRcIjoxOTQsXCIxOTVcIjoxOTUsXCIxOTZcIjoxOTYsXCIxOTdcIjoxOTcsXCIxOThcIjoxOTgsXCIxOTlcIjoxOTksXCIyMDBcIjoyMDAsXCIyMDFcIjoyMDEsXCIyMDJcIjoyMDIsXCIyMDNcIjoyMDMsXCIyMDRcIjoyMDQsXCIyMDVcIjoyMDUsXCIyMDZcIjoyMDYsXCIyMDdcIjoyMDcsXCIyMDhcIjoyMDgsXCIyMDlcIjoyMDksXCIyMTBcIjoyMTAsXCIyMTFcIjoyMTEsXCIyMTJcIjoyMTIsXCIyMTNcIjoyMTMsXCIyMTRcIjoyMTQsXCIyMTVcIjoyMTUsXCIyMTZcIjoyMTYsXCIyMTdcIjoyMTcsXCIyMThcIjoyMTgsXCIyMTlcIjoyMTksXCIyMjBcIjoyMjAsXCIyMjFcIjoyMjEsXCIyMjJcIjoyMjIsXCIyMjNcIjoyMjMsXCIyMjRcIjoyMjQsXCIyMjVcIjoyMjUsXCIyMjZcIjoyMjYsXCIyMjdcIjoyMjcsXCIyMjhcIjoyMjgsXCIyMjlcIjoyMjksXCIyM1wiOjIzLFwiMjMwXCI6MjMwLFwiMjMxXCI6MjMxLFwiMjMyXCI6MjMyLFwiMjMzXCI6MjMzLFwiMjM0XCI6MjM0LFwiMjM1XCI6MjM1LFwiMjM2XCI6MjM2LFwiMjM3XCI6MjM3LFwiMjM4XCI6MjM4LFwiMjM5XCI6MjM5LFwiMjQwXCI6MjQwLFwiMjQxXCI6MjQxLFwiMjQyXCI6MjQyLFwiMjQzXCI6MjQzLFwiMjQ0XCI6MjQ0LFwiMjQ1XCI6MjQ1LFwiMjQ2XCI6MjQ2LFwiMjQ3XCI6MjQ3LFwiMjQ4XCI6MjQ4LFwiMjQ5XCI6MjQ5LFwiMjUwXCI6MjUwLFwiMjUxXCI6MjUxLFwiMjUyXCI6MjUyLFwiMjUzXCI6MjUzLFwiMjU0XCI6MjU0LFwiMjU1XCI6MjU1LFwiMjU2XCI6MjU2LFwiMjU3XCI6MjU3LFwiMjU4XCI6MjU4LFwiMjU5XCI6MjU5LFwiMjYwXCI6MjYwLFwiMjYxXCI6MjYxLFwiMjYyXCI6MjYyLFwiMjYzXCI6MjYzLFwiMjY0XCI6MjY0LFwiMjY1XCI6MjY1LFwiMjY2XCI6MjY2LFwiMjY3XCI6MjY3LFwiMjY4XCI6MjY4LFwiMjY5XCI6MjY5LFwiMjcwXCI6MjcwLFwiMjcxXCI6MjcxLFwiMjcyXCI6MjcyLFwiMjczXCI6MjczLFwiMjc0XCI6Mjc0LFwiMjc1XCI6Mjc1LFwiMjc2XCI6Mjc2LFwiMjc3XCI6Mjc3LFwiMjc4XCI6Mjc4LFwiMjc5XCI6Mjc5LFwiMjgwXCI6MjgwLFwiMjgxXCI6MjgxLFwiMjgyXCI6MjgyLFwiMjgzXCI6MjgzLFwiMjg0XCI6Mjg0LFwiMjg1XCI6Mjg1LFwiMjg2XCI6Mjg2LFwiMjg3XCI6Mjg3LFwiMjg4XCI6Mjg4LFwiMjg5XCI6Mjg5LFwiMjkwXCI6MjkwLFwiMjkxXCI6MjkxLFwiMjkyXCI6MjkyLFwiMjkzXCI6MjkzLFwiMjk0XCI6Mjk0fV0sMjk2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9IEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7fV19LHt9LFsxXSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDEzLjEyLjE2LlxuICpcbiAqINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YVcbiAqL1xuXG5pbXBvcnQge1BhdGhHZW5lcmF0b3J9IGZyb20gXCIuL2xpYi9wYXRoLWdlbmVyYXRvclwiO1xuaW1wb3J0IHtHTWFwfSBmcm9tIFwiLi9saWIvbWFwXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vbGliL3JlbmRlcmVyXCI7XG5pbXBvcnQge1BhdGh9IGZyb20gXCIuL2xpYi9wYXRoXCI7XG5pbXBvcnQge01hcE1hcmtlcn0gZnJvbSBcIi4vbGliL21hcC1tYXJrZXJcIjtcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdwYXRoLWlucHV0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29tcG9uZW50QW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29tcG9uZW50TmFtZSlbMF07XG5cbiAgICBpZihjb21wb25lbnRBbmNob3IgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGxldCB0ZW1wbGF0ZU5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCd0ZW1wbGF0ZScpO1xuICAgIGxldCBmaWVsZFZhbHVlID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnZmllbGQtdmFsdWUnKTtcbiAgICBsZXQgZmllbGROYW1lID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnZmllbGQtbmFtZScpO1xuXG4gICAgJC5nZXQodGVtcGxhdGVOYW1lLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IFByb2YgPSBWdWUuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZGF0YSxcbiAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoR2VuZXJhdG9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IG5ldyBQYXRoKFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5FZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXBNYXJrZXIuaWNvbnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5QYXRoOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLnN0YXJ0KHRoaXMuY3VycmVudFBhdGgsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvVG9wOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvRG93bjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4UmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmctbWFwcycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBHTWFwKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yID0gbmV3IFBhdGhHZW5lcmF0b3IodGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguYWRkVXBkYXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYXBwZW5kQWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IHRoaXMuY3VycmVudFBhdGguc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICdpbnB1dFtkYXRlLXRpbWU9XCJkdC0nICsgKGVsZW1Qb3NpdGlvbiAtIDEpICsgJ1wiXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpY2tlckFuY2hvciA9ICQoc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlckFuY2hvci50aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXJpZGlhbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkub24oJ2NoYW5nZVRpbWUudGltZXBpY2tlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGltZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBpY2tlckFuY2hvci5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGgucG9pbnRWYWx1ZShpbmRleCwgJ3RpbWUnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAubWFwLCAnY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvb3JkcyA9IGV2ZW50LmxhdExuZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hcmtlckNvb3Jkcy50b0pTT04oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3IFByb2YoKS4kbW91bnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J3QtSDRg9C00LDQtdGC0YHRjyDQvtC/0YDQtdC00LXQu9C40YLRjCDQutC+0LzQv9C+0L3QtdC90YI6IFZ1ZS5qcyDQvdC1INC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDQvScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuY29uc3QgaWNvbnNNYXAgPSB7XG4gICAgYWQ6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYWQuc3ZnXCIsXG4gICAgYWU6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYWUuc3ZnXCIsXG4gICAgYWY6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYWYuc3ZnXCIsXG4gICAgYWc6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYWcuc3ZnXCIsXG4gICAgYWk6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYWkuc3ZnXCIsXG4gICAgYWw6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYWwuc3ZnXCIsXG4gICAgYW06IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYW0uc3ZnXCIsXG4gICAgYW86IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYW8uc3ZnXCIsXG4gICAgYXU6IFwiL2Jvd2VyX2NvbXBvbmVudHMvZmxhZy1pY29uLWNzcy9mbGFncy8xeDEvYXUuc3ZnXCJcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXBNYXJrZXIge1xuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICBzZXQgdGltZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKHZhbHVlLm1hcCk7XG4gICAgfVxuICAgIGdldCBsYXRMbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXRMbmc7XG4gICAgfVxuXG4gICAgc2V0IGxhdExuZyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYXRMbmcgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24odmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXRWaXNpYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZpc2libGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFya2VyLnNldFZpc2libGUodmFsdWUpO1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldEljb24ocGF0aCkge1xuICAgICAgICBsZXQgaWNvbiA9IHtcbiAgICAgICAgICAgIHVybDogcGF0aCxcbiAgICAgICAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDI1LDUwKSxcbiAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDUwLDUwKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5zZXRJY29uKGljb24pO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgaWNvbnMoKSB7XG4gICAgICAgIHJldHVybiBpY29uc01hcDtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5fbWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXIuc2V0TGFiZWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtYXJrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXI7XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMubWFya2VyLmdldFBvc2l0aW9uKCkudG9KU09OKCksXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2VyaWEpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKTtcbiAgICB9XG5cbiAgICBzZXQgc2VyaWFsKHZhbHVlKSB7XG4gICAgICAgIGxldCBwb3MgPSB2YWx1ZS5wb3NpdGlvbjtcblxuICAgICAgICB0aGlzLmxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcocG9zKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgICAgICBpZih2YWx1ZS5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHZhbHVlLmxhYmVsICsgJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmFsdWUudmlzaWJsZSB8fCB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZS50aW1lIHx8ICcwOjAwJztcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0aGlzLmxhdExuZyk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldExhYmVsKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRWaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFwLCBjb29yZHMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKCFtYXApIHtcbiAgICAgICAgICAgIHRocm93ICfQndC1INC+0L/RgNC10LTQtdC70LXQvdCwINC60LDRgNGC0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IG1hcC5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lID0gJyc7XG4gICAgX21hcCA9IG51bGw7XG4gICAgX2xhdExuZyA9IHt9O1xuICAgIF9kZXNjcmlwdGlvbiA9ICcnO1xuICAgIF9tYXJrZXIgPSBudWxsO1xuICAgIF90ZW1wbGF0ZSA9ICdjb250ZW50Lmh0bWwnO1xuICAgIF9sYWJlbCA9ICcnO1xuICAgIF92aXNpYmxlID0gdHJ1ZTtcblxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICByZXR1cm4gcG9zLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgYWRkSW5mbygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAkKGRhdGEpLmxvYWQoJ3NyYy90cGwvJyArIHRoaXMudGVtcGxhdGUpO1xuXG4gICAgICAgIGxldCBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgY29udGVudDogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgdGhpcy5fbWFya2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb3dpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBHTWFwIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHRgdGL0LvQutCwINC90LAg0L7QsdGK0LXQutGCINC60LDRgNGCXG4gICAgICovXG4gICAgX21hcDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBvaW50Q29vcmRzID0ge2xhdDogNTIuNjE2NjcsIGxuZzogMzkuNjAwMH07XG5cbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbGVtZW50LCB7XG4gICAgICAgICAgICBjZW50ZXI6IHBvaW50Q29vcmRzLFxuICAgICAgICAgICAgem9vbTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLl9tYXAsICdyZXNpemUnKTtcbiAgICB9XG59IiwiaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQge01hcE1hcmtlcn0gZnJvbSBcIi4vbWFwLW1hcmtlclwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXRoR2VuZXJhdG9yIHtcbiAgICBnZXQgY291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXI7XG4gICAgfVxuXG4gICAgc2V0IGNvdW50ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY291bnRlciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIF9tYXA7XG4gICAgX3BhdGggPSBbXTtcbiAgICBfY291bnRlciA9IDE7XG4gICAgX2FkZGVkTGlzdGVuZXJzID0gW107IFxuXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIGlmKG1hcCkge1xuICAgICAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0L/Rg9GB0Log0LPQtdC90LXRgNCw0YLQvtGA0LBcbiAgICAgKi9cbiAgICBzdGFydChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhdGguY2xlYXIoKTtcblxuICAgICAgICAgICAgbGV0IG1hcmtlcnNBcnJheSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IG1hcmtlckpzb24gb2YgbWFya2Vyc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobWFya2VySnNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRBZGRMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2FkZGVkTGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlckpzb24pIHtcbiAgICAgICAgaWYodGhpcy5fcGF0aCkge1xuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXBNYXJrZXIodGhpcy5tYXAsIG1hcmtlckpzb24ucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBtYXJrZXJKc29uLmxhYmVsID0gdGhpcy5fcGF0aC5tYXJrZXJzLmxlbmd0aCArIDE7XG5cbiAgICAgICAgICAgIG1hcmtlci5zZXJpYWwgPSBtYXJrZXJKc29uO1xuXG4gICAgICAgICAgICB0aGlzLl9wYXRoLmFkZChtYXJrZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fYWRkZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICpcbiAqXG4gKi9cbmltcG9ydCB7YXNzZXJ0IGFzIGFzc2VydH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBQYXRoIHtcbiAgICBnZXQgbWFya2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnM7XG4gICAgfVxuXG4gICAgc2V0IG1hcmtlcnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFya2VycyA9IHZhbHVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgX21hcmtlcnMgPSBbXTtcbiAgICBfdXBkYXRlTGlzdGVuZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LXQvdC40LUg0YHQtdGA0LjQsNC70LjQt9C+0LLQsNC90L3QvtCz0L4g0LzQsNGB0YHQuNCy0LBcbiAgICAgKi9cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWFzID0gdGhpcy5fbWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmspIHtcbiAgICAgICAgICAgIHJldHVybiBtYXJrLnNlcmlhbDtcbiAgICAgICAgfSkuam9pbignLCcpO1xuXG4gICAgICAgIGxldCByZXMgPSAnWycgKyBzZXJpYXMgKyAnXSc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNBcnJheSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubWFya2Vycy5tYXAoZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgXG4gICAgcG9pbnRWYWx1ZShpbmRleCwgZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF1bZmllbGRdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQvNC10L3QsCDQv9C+0LfQuNGG0LjQuCDQuNC90LTQtdC60YHQsFxuICAgICAqIEBwYXJhbSBpbmRleCDQmNC90LTQtdC60YFcbiAgICAgKiBAcGFyYW0gY3JlbSDQodC80LXRidC10L3QuNC1XG4gICAgICovXG4gICAgaW5kZXhEaXNwb3NlKGluZGV4LCBjcmVtKSB7XG4gICAgICAgIGxldCBzID0gaW5kZXggKyBjcmVtO1xuXG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBhc3NlcnQocyA+IC0xICYmIHMgPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW3NdO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnNbc10gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF0gPSBlbGVtO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgaW5kZXhSZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgZWxlbS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLl9tYXJrZXJzKSB7XG4gICAgICAgICAgICByZXMgKz0gbWFyay5jb29yZHNTdHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBcbiAgICBhZGRVcGRhdGVMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBtYXJrLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgY2FsbFVwZGF0ZUhhbmRsZXJzKCkge1xuICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fdXBkYXRlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQobWFya2VyKSB7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5tYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMubWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaExhYmVscygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgaWYobWFyay52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgbWFyay5sYWJlbCA9IGluZGV4ICsgJyc7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1hcmtlcnMpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gbWFya2VycztcblxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExhYmVscygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgX21hcCA9IG51bGw7XG4gICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgfVxuXG4gICAgd2F5cG9pbnRzKGNvb3Jkcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNvb3Jkcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogY29vcmRzW2ldLFxuICAgICAgICAgICAgICAgIHN0b3BvdmVyOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlbmRlcihwYXRoKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBwYXRoLmNvb3Jkc0FycmF5O1xuXG4gICAgICAgIGlmKGNvb3Jkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAodGhpcy5tYXAubWFwKTtcblxuICAgICAgICBsZXQgd2F5cG9pbnRzID0gdGhpcy53YXlwb2ludHMoY29vcmRzKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogY29vcmRzWzBdLFxuICAgICAgICAgICAgd2F5cG9pbnRzLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIjtcbiAgICB9XG59Il19