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
        key: "remove",
        value: function remove() {
            this.marker.setMap(null);
        }
    }, {
        key: "icon",
        get: function get() {
            return this._icon;
        },
        set: function set(path) {
            this._icon = path;

            var icon = {
                url: path,
                anchor: new google.maps.Point(25, 50),
                scaledSize: new google.maps.Size(50, 50)
            };

            this._marker.setIcon(icon);
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
                time: this.time,
                icon: this.icon
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
            this.icon = value.icon || '';

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
        this._icon = '';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcG9seWZpbGwvZGlzdC9wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsQ0FBQyxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxXQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBRyxDQUFDLEVBQUUsQ0FBRixDQUFKLEVBQVM7QUFBQyxVQUFHLENBQUMsRUFBRSxDQUFGLENBQUosRUFBUztBQUFDLFlBQUksSUFBRSxPQUFPLE9BQVAsSUFBZ0IsVUFBaEIsSUFBNEIsT0FBbEMsQ0FBMEMsSUFBRyxDQUFDLENBQUQsSUFBSSxDQUFQLEVBQVMsT0FBTyxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBUCxDQUFlLElBQUcsQ0FBSCxFQUFLLE9BQU8sRUFBRSxDQUFGLEVBQUksQ0FBQyxDQUFMLENBQVAsQ0FBZSxJQUFJLElBQUUsSUFBSSxLQUFKLENBQVUseUJBQXVCLENBQXZCLEdBQXlCLEdBQW5DLENBQU4sQ0FBOEMsTUFBTSxFQUFFLElBQUYsR0FBTyxrQkFBUCxFQUEwQixDQUFoQztBQUFrQyxXQUFJLElBQUUsRUFBRSxDQUFGLElBQUssRUFBQyxTQUFRLEVBQVQsRUFBWCxDQUF3QixFQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsSUFBUixDQUFhLEVBQUUsT0FBZixFQUF1QixVQUFT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LFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNBLFlBQVEsR0FBUjtBQUNB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OytCQUVNLEksRUFBTTtBQUNULGdCQUFJLFNBQVMsS0FBSyxXQUFsQjs7QUFFQSxnQkFBRyxPQUFPLE1BQVAsR0FBZ0IsQ0FBbkIsRUFBc0I7QUFDbEIscUJBQUssa0JBQUwsQ0FBd0IsTUFBeEIsQ0FBK0IsSUFBL0I7QUFDQTtBQUNIOztBQUVELGlCQUFLLGtCQUFMLENBQXdCLE1BQXhCLENBQStCLEtBQUssR0FBTCxDQUFTLEdBQXhDOztBQUVBLGdCQUFJLFlBQVksS0FBSyxTQUFMLENBQWUsTUFBZixDQUFoQjs7QUFFQSxnQkFBSSxVQUFVO0FBQ1Ysd0JBQVEsT0FBTyxDQUFQLENBREU7QUFFVixvQ0FGVTtBQUdWLDZCQUFhLE9BQU8sT0FBTyxNQUFQLEdBQWdCLENBQXZCLENBSEg7QUFJViw0QkFBWSxPQUFPLElBQVAsQ0FBWSxVQUFaLENBQXVCO0FBSnpCLGFBQWQ7O0FBT0EsaUJBQUssa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCO0FBQzlELG9CQUFJLFVBQVUsT0FBTyxJQUFQLENBQVksZ0JBQVosQ0FBNkIsRUFBM0MsRUFBK0M7QUFDM0MseUJBQUssa0JBQUwsQ0FBd0IsYUFBeEIsQ0FBc0MsUUFBdEM7QUFDSDtBQUNKLGFBSnNDLENBSXJDLElBSnFDLENBSWhDLElBSmdDLENBQXZDO0FBS0g7Ozs7OztrQkF4RGdCLFE7Ozs7Ozs7O1FDQUwsTSxHQUFBLE07QUFKaEI7Ozs7QUFJTyxTQUFTLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDdkMsUUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDWixjQUFNLFdBQVcsa0JBQWpCO0FBQ0g7QUFDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG5cInVzZSBzdHJpY3RcIjtcblxuX2RlcmVxXygyOTUpO1xuXG5fZGVyZXFfKDI5Nik7XG5cbl9kZXJlcV8oMik7XG5cbmlmIChnbG9iYWwuX2JhYmVsUG9seWZpbGwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwib25seSBvbmUgaW5zdGFuY2Ugb2YgYmFiZWwtcG9seWZpbGwgaXMgYWxsb3dlZFwiKTtcbn1cbmdsb2JhbC5fYmFiZWxQb2x5ZmlsbCA9IHRydWU7XG5cbnZhciBERUZJTkVfUFJPUEVSVFkgPSBcImRlZmluZVByb3BlcnR5XCI7XG5mdW5jdGlvbiBkZWZpbmUoTywga2V5LCB2YWx1ZSkge1xuICBPW2tleV0gfHwgT2JqZWN0W0RFRklORV9QUk9QRVJUWV0oTywga2V5LCB7XG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn1cblxuZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIFwicGFkTGVmdFwiLCBcIlwiLnBhZFN0YXJ0KTtcbmRlZmluZShTdHJpbmcucHJvdG90eXBlLCBcInBhZFJpZ2h0XCIsIFwiXCIucGFkRW5kKTtcblxuXCJwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzLGluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXMsam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLHJlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGxcIi5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIFtdW2tleV0gJiYgZGVmaW5lKEFycmF5LCBrZXksIEZ1bmN0aW9uLmNhbGwuYmluZChbXVtrZXldKSk7XG59KTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCIyXCI6MixcIjI5NVwiOjI5NSxcIjI5NlwiOjI5Nn1dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTkpO1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDIzKS5SZWdFeHAuZXNjYXBlO1xufSx7XCIxMTlcIjoxMTksXCIyM1wiOjIzfV0sMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbn0se31dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNvZiA9IF9kZXJlcV8oMTgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgbXNnKXtcbiAgaWYodHlwZW9mIGl0ICE9ICdudW1iZXInICYmIGNvZihpdCkgIT0gJ051bWJlcicpdGhyb3cgVHlwZUVycm9yKG1zZyk7XG4gIHJldHVybiAraXQ7XG59O1xufSx7XCIxOFwiOjE4fV0sNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSBfZGVyZXFfKDExNykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClfZGVyZXFfKDQwKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG59LHtcIjExN1wiOjExNyxcIjQwXCI6NDB9XSw2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG59LHt9XSw3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xufSx7XCI0OVwiOjQ5fV0sODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IF9kZXJlcV8oMTA5KVxuICAsIHRvSW5kZXggID0gX2RlcmVxXygxMDUpXG4gICwgdG9MZW5ndGggPSBfZGVyZXFfKDEwOCk7XG5cbm1vZHVsZS5leHBvcnRzID0gW10uY29weVdpdGhpbiB8fCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldC8qPSAwKi8sIHN0YXJ0Lyo9IDAsIGVuZCA9IEBsZW5ndGgqLyl7XG4gIHZhciBPICAgICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgLCBsZW4gICA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxuICAgICwgZnJvbSAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXG4gICAgLCBlbmQgICA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkXG4gICAgLCBjb3VudCA9IE1hdGgubWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pKSAtIGZyb20sIGxlbiAtIHRvKVxuICAgICwgaW5jICAgPSAxO1xuICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xuICAgIGluYyAgPSAtMTtcbiAgICBmcm9tICs9IGNvdW50IC0gMTtcbiAgICB0byAgICs9IGNvdW50IC0gMTtcbiAgfVxuICB3aGlsZShjb3VudC0tID4gMCl7XG4gICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcbiAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICB0byAgICs9IGluYztcbiAgICBmcm9tICs9IGluYztcbiAgfSByZXR1cm4gTztcbn07XG59LHtcIjEwNVwiOjEwNSxcIjEwOFwiOjEwOCxcIjEwOVwiOjEwOX1dLDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSBfZGVyZXFfKDEwOSlcbiAgLCB0b0luZGV4ICA9IF9kZXJlcV8oMTA1KVxuICAsIHRvTGVuZ3RoID0gX2RlcmVxXygxMDgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xuICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcbiAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgYUxlbiAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggID0gdG9JbmRleChhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKVxuICAgICwgZW5kICAgID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWRcbiAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIxMDVcIjoxMDUsXCIxMDhcIjoxMDgsXCIxMDlcIjoxMDl9XSwxMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZm9yT2YgPSBfZGVyZXFfKDM3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbn0se1wiMzdcIjozN31dLDExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gX2RlcmVxXygxMDcpXG4gICwgdG9MZW5ndGggID0gX2RlcmVxXygxMDgpXG4gICwgdG9JbmRleCAgID0gX2RlcmVxXygxMDUpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbn0se1wiMTA1XCI6MTA1LFwiMTA3XCI6MTA3LFwiMTA4XCI6MTA4fV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gX2RlcmVxXygyNSlcbiAgLCBJT2JqZWN0ICA9IF9kZXJlcV8oNDUpXG4gICwgdG9PYmplY3QgPSBfZGVyZXFfKDEwOSlcbiAgLCB0b0xlbmd0aCA9IF9kZXJlcV8oMTA4KVxuICAsIGFzYyAgICAgID0gX2RlcmVxXygxNSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG59LHtcIjEwOFwiOjEwOCxcIjEwOVwiOjEwOSxcIjE1XCI6MTUsXCIyNVwiOjI1LFwiNDVcIjo0NX1dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBhRnVuY3Rpb24gPSBfZGVyZXFfKDMpXG4gICwgdG9PYmplY3QgID0gX2RlcmVxXygxMDkpXG4gICwgSU9iamVjdCAgID0gX2RlcmVxXyg0NSlcbiAgLCB0b0xlbmd0aCAgPSBfZGVyZXFfKDEwOCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgY2FsbGJhY2tmbiwgYUxlbiwgbWVtbywgaXNSaWdodCl7XG4gIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoYXQpXG4gICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIGluZGV4ICA9IGlzUmlnaHQgPyBsZW5ndGggLSAxIDogMFxuICAgICwgaSAgICAgID0gaXNSaWdodCA/IC0xIDogMTtcbiAgaWYoYUxlbiA8IDIpZm9yKDs7KXtcbiAgICBpZihpbmRleCBpbiBzZWxmKXtcbiAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaW5kZXggKz0gaTtcbiAgICBpZihpc1JpZ2h0ID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KXtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgIH1cbiAgfVxuICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gc2VsZil7XG4gICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgfVxuICByZXR1cm4gbWVtbztcbn07XG59LHtcIjEwOFwiOjEwOCxcIjEwOVwiOjEwOSxcIjNcIjozLFwiNDVcIjo0NX1dLDE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpXG4gICwgaXNBcnJheSAgPSBfZGVyZXFfKDQ3KVxuICAsIFNQRUNJRVMgID0gX2RlcmVxXygxMTcpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiNDdcIjo0NyxcIjQ5XCI6NDl9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gX2RlcmVxXygxNCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xufSx7XCIxNFwiOjE0fV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiAgPSBfZGVyZXFfKDMpXG4gICwgaXNPYmplY3QgICA9IF9kZXJlcV8oNDkpXG4gICwgaW52b2tlICAgICA9IF9kZXJlcV8oNDQpXG4gICwgYXJyYXlTbGljZSA9IFtdLnNsaWNlXG4gICwgZmFjdG9yaWVzICA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24oRiwgbGVuLCBhcmdzKXtcbiAgaWYoIShsZW4gaW4gZmFjdG9yaWVzKSl7XG4gICAgZm9yKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qLCBhcmdzLi4uICovKXtcbiAgdmFyIGZuICAgICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgLCBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbigvKiBhcmdzLi4uICovKXtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbiAgaWYoaXNPYmplY3QoZm4ucHJvdG90eXBlKSlib3VuZC5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZDtcbn07XG59LHtcIjNcIjozLFwiNDRcIjo0NCxcIjQ5XCI6NDl9XSwxNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IF9kZXJlcV8oMTgpXG4gICwgVEFHID0gX2RlcmVxXygxMTcpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiMThcIjoxOH1dLDE4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG59LHt9XSwxOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSBfZGVyZXFfKDY3KS5mXG4gICwgY3JlYXRlICAgICAgPSBfZGVyZXFfKDY2KVxuICAsIHJlZGVmaW5lQWxsID0gX2RlcmVxXyg4NilcbiAgLCBjdHggICAgICAgICA9IF9kZXJlcV8oMjUpXG4gICwgYW5JbnN0YW5jZSAgPSBfZGVyZXFfKDYpXG4gICwgZGVmaW5lZCAgICAgPSBfZGVyZXFfKDI3KVxuICAsIGZvck9mICAgICAgID0gX2RlcmVxXygzNylcbiAgLCAkaXRlckRlZmluZSA9IF9kZXJlcV8oNTMpXG4gICwgc3RlcCAgICAgICAgPSBfZGVyZXFfKDU1KVxuICAsIHNldFNwZWNpZXMgID0gX2RlcmVxXyg5MSlcbiAgLCBERVNDUklQVE9SUyA9IF9kZXJlcV8oMjgpXG4gICwgZmFzdEtleSAgICAgPSBfZGVyZXFfKDYyKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG59LHtcIjI1XCI6MjUsXCIyN1wiOjI3LFwiMjhcIjoyOCxcIjM3XCI6MzcsXCI1M1wiOjUzLFwiNTVcIjo1NSxcIjZcIjo2LFwiNjJcIjo2MixcIjY2XCI6NjYsXCI2N1wiOjY3LFwiODZcIjo4NixcIjkxXCI6OTF9XSwyMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IF9kZXJlcV8oMTcpXG4gICwgZnJvbSAgICA9IF9kZXJlcV8oMTApO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcbn0se1wiMTBcIjoxMCxcIjE3XCI6MTd9XSwyMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgICAgICAgPSBfZGVyZXFfKDg2KVxuICAsIGdldFdlYWsgICAgICAgICAgID0gX2RlcmVxXyg2MikuZ2V0V2Vha1xuICAsIGFuT2JqZWN0ICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBhbkluc3RhbmNlICAgICAgICA9IF9kZXJlcV8oNilcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IF9kZXJlcV8oMzcpXG4gICwgY3JlYXRlQXJyYXlNZXRob2QgPSBfZGVyZXFfKDEyKVxuICAsICRoYXMgICAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmKGRhdGEgPT09IHRydWUpcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmKGRhdGEgPT09IHRydWUpdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG59LHtcIjEyXCI6MTIsXCIzN1wiOjM3LFwiMzlcIjozOSxcIjQ5XCI6NDksXCI2XCI6NixcIjYyXCI6NjIsXCI3XCI6NyxcIjg2XCI6ODZ9XSwyMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgICAgPSBfZGVyZXFfKDM4KVxuICAsICRleHBvcnQgICAgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCByZWRlZmluZSAgICAgICAgICA9IF9kZXJlcV8oODcpXG4gICwgcmVkZWZpbmVBbGwgICAgICAgPSBfZGVyZXFfKDg2KVxuICAsIG1ldGEgICAgICAgICAgICAgID0gX2RlcmVxXyg2MilcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IF9kZXJlcV8oMzcpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgPSBfZGVyZXFfKDYpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIGZhaWxzICAgICAgICAgICAgID0gX2RlcmVxXygzNClcbiAgLCAkaXRlckRldGVjdCAgICAgICA9IF9kZXJlcV8oNTQpXG4gICwgc2V0VG9TdHJpbmdUYWcgICAgPSBfZGVyZXFfKDkyKVxuICAsIGluaGVyaXRJZlJlcXVpcmVkID0gX2RlcmVxXyg0Myk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbihLRVkpe1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgICAgICAgICAgICAgPSBuZXcgQ1xuICAgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgICAgLCBIQVNOVF9DSEFJTklORyAgICAgICA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2VcbiAgICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgICAgLCBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uKCl7IGluc3RhbmNlLmhhcygxKTsgfSlcbiAgICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAgICwgQUNDRVBUX0lURVJBQkxFUyAgICAgPSAkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICAgICwgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKVxuICAgICAgICAgICwgaW5kZXggICAgID0gNTtcbiAgICAgICAgd2hpbGUoaW5kZXgtLSkkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgICB9KTtcbiAgICBpZighQUNDRVBUX0lURVJBQkxFUyl7IFxuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pe1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORylmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYoSVNfV0VBSyAmJiBwcm90by5jbGVhcilkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcbn0se1wiMzJcIjozMixcIjM0XCI6MzQsXCIzN1wiOjM3LFwiMzhcIjozOCxcIjQzXCI6NDMsXCI0OVwiOjQ5LFwiNTRcIjo1NCxcIjZcIjo2LFwiNjJcIjo2MixcIjg2XCI6ODYsXCI4N1wiOjg3LFwiOTJcIjo5Mn1dLDIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBfZGVyZXFfKDY3KVxuICAsIGNyZWF0ZURlc2MgICAgICA9IF9kZXJlcV8oODUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xufSx7XCI2N1wiOjY3LFwiODVcIjo4NX1dLDI1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IF9kZXJlcV8oMyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xufSx7XCIzXCI6M31dLDI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCAgICA9IF9kZXJlcV8oNylcbiAgLCB0b1ByaW1pdGl2ZSA9IF9kZXJlcV8oMTEwKVxuICAsIE5VTUJFUiAgICAgID0gJ251bWJlcic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGludCl7XG4gIGlmKGhpbnQgIT09ICdzdHJpbmcnICYmIGhpbnQgIT09IE5VTUJFUiAmJiBoaW50ICE9PSAnZGVmYXVsdCcpdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaGludCcpO1xuICByZXR1cm4gdG9QcmltaXRpdmUoYW5PYmplY3QodGhpcyksIGhpbnQgIT0gTlVNQkVSKTtcbn07XG59LHtcIjExMFwiOjExMCxcIjdcIjo3fV0sMjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xufSx7fV0sMjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xufSx7XCIzNFwiOjM0fV0sMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBkb2N1bWVudCA9IF9kZXJlcV8oMzgpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xufSx7XCIzOFwiOjM4LFwiNDlcIjo0OX1dLDMwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xufSx7fV0sMzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gX2RlcmVxXyg3NilcbiAgLCBnT1BTICAgID0gX2RlcmVxXyg3MylcbiAgLCBwSUUgICAgID0gX2RlcmVxXyg3Nyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xufSx7XCI3M1wiOjczLFwiNzZcIjo3NixcIjc3XCI6Nzd9XSwzMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZ2xvYmFsICAgID0gX2RlcmVxXygzOClcbiAgLCBjb3JlICAgICAgPSBfZGVyZXFfKDIzKVxuICAsIGhpZGUgICAgICA9IF9kZXJlcV8oNDApXG4gICwgcmVkZWZpbmUgID0gX2RlcmVxXyg4NylcbiAgLCBjdHggICAgICAgPSBfZGVyZXFfKDI1KVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldClyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xufSx7XCIyM1wiOjIzLFwiMjVcIjoyNSxcIjM4XCI6MzgsXCI0MFwiOjQwLFwiODdcIjo4N31dLDMzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBNQVRDSCA9IF9kZXJlcV8oMTE3KSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoKGUpe1xuICAgIHRyeSB7XG4gICAgICByZVtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgfSBjYXRjaChmKXsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcbn0se1wiMTE3XCI6MTE3fV0sMzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG59LHt9XSwzNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgaGlkZSAgICAgPSBfZGVyZXFfKDQwKVxuICAsIHJlZGVmaW5lID0gX2RlcmVxXyg4NylcbiAgLCBmYWlscyAgICA9IF9kZXJlcV8oMzQpXG4gICwgZGVmaW5lZCAgPSBfZGVyZXFfKDI3KVxuICAsIHdrcyAgICAgID0gX2RlcmVxXygxMTcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgbGVuZ3RoLCBleGVjKXtcbiAgdmFyIFNZTUJPTCAgID0gd2tzKEtFWSlcbiAgICAsIGZucyAgICAgID0gZXhlYyhkZWZpbmVkLCBTWU1CT0wsICcnW0tFWV0pXG4gICAgLCBzdHJmbiAgICA9IGZuc1swXVxuICAgICwgcnhmbiAgICAgPSBmbnNbMV07XG4gIGlmKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbigpeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSl7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbihzdHJpbmcsIGFyZyl7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24oc3RyaW5nKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbn0se1wiMTE3XCI6MTE3LFwiMjdcIjoyNyxcIjM0XCI6MzQsXCI0MFwiOjQwLFwiODdcIjo4N31dLDM2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCAgID0gYW5PYmplY3QodGhpcylcbiAgICAsIHJlc3VsdCA9ICcnO1xuICBpZih0aGF0Lmdsb2JhbCkgICAgIHJlc3VsdCArPSAnZyc7XG4gIGlmKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYodGhhdC5tdWx0aWxpbmUpICByZXN1bHQgKz0gJ20nO1xuICBpZih0aGF0LnVuaWNvZGUpICAgIHJlc3VsdCArPSAndSc7XG4gIGlmKHRoYXQuc3RpY2t5KSAgICAgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIjdcIjo3fV0sMzc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGN0eCAgICAgICAgID0gX2RlcmVxXygyNSlcbiAgLCBjYWxsICAgICAgICA9IF9kZXJlcV8oNTEpXG4gICwgaXNBcnJheUl0ZXIgPSBfZGVyZXFfKDQ2KVxuICAsIGFuT2JqZWN0ICAgID0gX2RlcmVxXyg3KVxuICAsIHRvTGVuZ3RoICAgID0gX2RlcmVxXygxMDgpXG4gICwgZ2V0SXRlckZuICAgPSBfZGVyZXFfKDExOClcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xufSx7XCIxMDhcIjoxMDgsXCIxMThcIjoxMTgsXCIyNVwiOjI1LFwiNDZcIjo0NixcIjUxXCI6NTEsXCI3XCI6N31dLDM4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbn0se31dLDM5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xufSx7fV0sNDA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAsIGNyZWF0ZURlc2MgPSBfZGVyZXFfKDg1KTtcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyOCkgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xufSx7XCIyOFwiOjI4LFwiNjdcIjo2NyxcIjg1XCI6ODV9XSw0MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMzgpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn0se1wiMzhcIjozOH1dLDQyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gIV9kZXJlcV8oMjgpICYmICFfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KF9kZXJlcV8oMjkpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xufSx7XCIyOFwiOjI4LFwiMjlcIjoyOSxcIjM0XCI6MzR9XSw0MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNPYmplY3QgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIHNldFByb3RvdHlwZU9mID0gX2RlcmVxXyg5MCkuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCB0YXJnZXQsIEMpe1xuICB2YXIgUCwgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgaWYoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZil7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xufSx7XCI0OVwiOjQ5LFwiOTBcIjo5MH1dLDQ0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbn0se31dLDQ1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gX2RlcmVxXygxOCk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xufSx7XCIxOFwiOjE4fV0sNDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSBfZGVyZXFfKDU2KVxuICAsIElURVJBVE9SICAgPSBfZGVyZXFfKDExNykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG59LHtcIjExN1wiOjExNyxcIjU2XCI6NTZ9XSw0NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IF9kZXJlcV8oMTgpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xufSx7XCIxOFwiOjE4fV0sNDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIGZsb29yICAgID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KXtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59O1xufSx7XCI0OVwiOjQ5fV0sNDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xufSx7fV0sNTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIGNvZiAgICAgID0gX2RlcmVxXygxOClcbiAgLCBNQVRDSCAgICA9IF9kZXJlcV8oMTE3KSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG59LHtcIjExN1wiOjExNyxcIjE4XCI6MTgsXCI0OVwiOjQ5fV0sNTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbn0se1wiN1wiOjd9XSw1MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSBfZGVyZXFfKDY2KVxuICAsIGRlc2NyaXB0b3IgICAgID0gX2RlcmVxXyg4NSlcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IF9kZXJlcV8oOTIpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbl9kZXJlcV8oNDApKEl0ZXJhdG9yUHJvdG90eXBlLCBfZGVyZXFfKDExNykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xufSx7XCIxMTdcIjoxMTcsXCI0MFwiOjQwLFwiNjZcIjo2NixcIjg1XCI6ODUsXCI5MlwiOjkyfV0sNTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gX2RlcmVxXyg1OClcbiAgLCAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgcmVkZWZpbmUgICAgICAgPSBfZGVyZXFfKDg3KVxuICAsIGhpZGUgICAgICAgICAgID0gX2RlcmVxXyg0MClcbiAgLCBoYXMgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgSXRlcmF0b3JzICAgICAgPSBfZGVyZXFfKDU2KVxuICAsICRpdGVyQ3JlYXRlICAgID0gX2RlcmVxXyg1MilcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IF9kZXJlcV8oOTIpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc0KVxuICAsIElURVJBVE9SICAgICAgID0gX2RlcmVxXygxMTcpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiMzJcIjozMixcIjM5XCI6MzksXCI0MFwiOjQwLFwiNTJcIjo1MixcIjU2XCI6NTYsXCI1OFwiOjU4LFwiNzRcIjo3NCxcIjg3XCI6ODcsXCI5MlwiOjkyfV0sNTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIElURVJBVE9SICAgICA9IF9kZXJlcV8oMTE3KSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG59LHtcIjExN1wiOjExN31dLDU1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG59LHt9XSw1NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xufSx7fV0sNTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdldEtleXMgICA9IF9kZXJlcV8oNzYpXG4gICwgdG9JT2JqZWN0ID0gX2RlcmVxXygxMDcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcbn0se1wiMTA3XCI6MTA3LFwiNzZcIjo3Nn1dLDU4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59LHt9XSw1OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBtMSA9IE1hdGguZXhwbTE7XG5tb2R1bGUuZXhwb3J0cyA9ICghJGV4cG0xXG4gIC8vIE9sZCBGRiBidWdcbiAgfHwgJGV4cG0xKDEwKSA+IDIyMDI1LjQ2NTc5NDgwNjcxOSB8fCAkZXhwbTEoMTApIDwgMjIwMjUuNDY1Nzk0ODA2NzE2NTE2OFxuICAvLyBUb3IgQnJvd3NlciBidWdcbiAgfHwgJGV4cG0xKC0yZS0xNykgIT0gLTJlLTE3XG4pID8gZnVuY3Rpb24gZXhwbTEoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59IDogJGV4cG0xO1xufSx7fV0sNjA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5sb2cxcCB8fCBmdW5jdGlvbiBsb2cxcCh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogTWF0aC5sb2coMSArIHgpO1xufTtcbn0se31dLDYxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07XG59LHt9XSw2MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgTUVUQSAgICAgPSBfZGVyZXFfKDExNCkoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBoYXMgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgc2V0RGVzYyAgPSBfZGVyZXFfKDY3KS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xufSx7XCIxMTRcIjoxMTQsXCIzNFwiOjM0LFwiMzlcIjozOSxcIjQ5XCI6NDksXCI2N1wiOjY3fV0sNjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIE1hcCAgICAgPSBfZGVyZXFfKDE0OSlcbiAgLCAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBzaGFyZWQgID0gX2RlcmVxXyg5NCkoJ21ldGFkYXRhJylcbiAgLCBzdG9yZSAgID0gc2hhcmVkLnN0b3JlIHx8IChzaGFyZWQuc3RvcmUgPSBuZXcgKF9kZXJlcV8oMjU1KSkpO1xuXG52YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5LCBjcmVhdGUpe1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgaWYoIXRhcmdldE1ldGFkYXRhKXtcbiAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG4gICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKTtcbiAgfVxuICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcbiAgaWYoIWtleU1ldGFkYXRhKXtcbiAgICBpZighY3JlYXRlKXJldHVybiB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKTtcbiAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG59O1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogbWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKXtcbiAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xufTtcbnZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uKHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHRhcmdldEtleSwgZmFsc2UpXG4gICAgLCBrZXlzICAgICAgICA9IFtdO1xuICBpZihtZXRhZGF0YU1hcCltZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uKF8sIGtleSl7IGtleXMucHVzaChrZXkpOyB9KTtcbiAgcmV0dXJuIGtleXM7XG59O1xudmFyIHRvTWV0YUtleSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcbnZhciBleHAgPSBmdW5jdGlvbihPKXtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgTyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RvcmU6IHN0b3JlLFxuICBtYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG4gIGhhczogb3JkaW5hcnlIYXNPd25NZXRhZGF0YSxcbiAgZ2V0OiBvcmRpbmFyeUdldE93bk1ldGFkYXRhLFxuICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG4gIGtleXM6IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzLFxuICBrZXk6IHRvTWV0YUtleSxcbiAgZXhwOiBleHBcbn07XG59LHtcIjE0OVwiOjE0OSxcIjI1NVwiOjI1NSxcIjMyXCI6MzIsXCI5NFwiOjk0fV0sNjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IF9kZXJlcV8oMzgpXG4gICwgbWFjcm90YXNrID0gX2RlcmVxXygxMDQpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IF9kZXJlcV8oMTgpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG59LHtcIjEwNFwiOjEwNCxcIjE4XCI6MTgsXCIzOFwiOjM4fV0sNjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gX2RlcmVxXyg3NilcbiAgLCBnT1BTICAgICA9IF9kZXJlcV8oNzMpXG4gICwgcElFICAgICAgPSBfZGVyZXFfKDc3KVxuICAsIHRvT2JqZWN0ID0gX2RlcmVxXygxMDkpXG4gICwgSU9iamVjdCAgPSBfZGVyZXFfKDQ1KVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xufSx7XCIxMDlcIjoxMDksXCIzNFwiOjM0LFwiNDVcIjo0NSxcIjczXCI6NzMsXCI3NlwiOjc2LFwiNzdcIjo3N31dLDY2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gX2RlcmVxXyg3KVxuICAsIGRQcyAgICAgICAgID0gX2RlcmVxXyg2OClcbiAgLCBlbnVtQnVnS2V5cyA9IF9kZXJlcV8oMzApXG4gICwgSUVfUFJPVE8gICAgPSBfZGVyZXFfKDkzKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IF9kZXJlcV8oMjkpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBfZGVyZXFfKDQxKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxufSx7XCIyOVwiOjI5LFwiMzBcIjozMCxcIjQxXCI6NDEsXCI2OFwiOjY4LFwiN1wiOjcsXCI5M1wiOjkzfV0sNjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFuT2JqZWN0ICAgICAgID0gX2RlcmVxXyg3KVxuICAsIElFOF9ET01fREVGSU5FID0gX2RlcmVxXyg0MilcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IF9kZXJlcV8oMTEwKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSBfZGVyZXFfKDI4KSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xufSx7XCIxMTBcIjoxMTAsXCIyOFwiOjI4LFwiNDJcIjo0MixcIjdcIjo3fV0sNjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGRQICAgICAgID0gX2RlcmVxXyg2NylcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNylcbiAgLCBnZXRLZXlzICA9IF9kZXJlcV8oNzYpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjgpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG59LHtcIjI4XCI6MjgsXCI2N1wiOjY3LFwiN1wiOjcsXCI3NlwiOjc2fV0sNjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gRm9yY2VkIHJlcGxhY2VtZW50IHByb3RvdHlwZSBhY2Nlc3NvcnMgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDU4KXx8ICFfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBLLCBmdW5jdGlvbigpeyAvKiBlbXB0eSAqL30pO1xuICBkZWxldGUgX2RlcmVxXygzOClbS107XG59KTtcbn0se1wiMzRcIjozNCxcIjM4XCI6MzgsXCI1OFwiOjU4fV0sNzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHBJRSAgICAgICAgICAgID0gX2RlcmVxXyg3NylcbiAgLCBjcmVhdGVEZXNjICAgICA9IF9kZXJlcV8oODUpXG4gICwgdG9JT2JqZWN0ICAgICAgPSBfZGVyZXFfKDEwNylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IF9kZXJlcV8oMTEwKVxuICAsIGhhcyAgICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBJRThfRE9NX0RFRklORSA9IF9kZXJlcV8oNDIpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSBfZGVyZXFfKDI4KSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbn0se1wiMTA3XCI6MTA3LFwiMTEwXCI6MTEwLFwiMjhcIjoyOCxcIjM5XCI6MzksXCI0MlwiOjQyLFwiNzdcIjo3NyxcIjg1XCI6ODV9XSw3MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gX2RlcmVxXygxMDcpXG4gICwgZ09QTiAgICAgID0gX2RlcmVxXyg3MikuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxufSx7XCIxMDdcIjoxMDcsXCI3MlwiOjcyfV0sNzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSBfZGVyZXFfKDc1KVxuICAsIGhpZGRlbktleXMgPSBfZGVyZXFfKDMwKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbn0se1wiMzBcIjozMCxcIjc1XCI6NzV9XSw3MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xufSx7fV0sNzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgdG9PYmplY3QgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCBJRV9QUk9UTyAgICA9IF9kZXJlcV8oOTMpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbn0se1wiMTA5XCI6MTA5LFwiMzlcIjozOSxcIjkzXCI6OTN9XSw3NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaGFzICAgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCB0b0lPYmplY3QgICAgPSBfZGVyZXFfKDEwNylcbiAgLCBhcnJheUluZGV4T2YgPSBfZGVyZXFfKDExKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSBfZGVyZXFfKDkzKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG59LHtcIjEwN1wiOjEwNyxcIjExXCI6MTEsXCIzOVwiOjM5LFwiOTNcIjo5M31dLDc2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gX2RlcmVxXyg3NSlcbiAgLCBlbnVtQnVnS2V5cyA9IF9kZXJlcV8oMzApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xufSx7XCIzMFwiOjMwLFwiNzVcIjo3NX1dLDc3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbmV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xufSx7fV0sNzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgY29yZSAgICA9IF9kZXJlcV8oMjMpXG4gICwgZmFpbHMgICA9IF9kZXJlcV8oMzQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbn0se1wiMjNcIjoyMyxcIjMyXCI6MzIsXCIzNFwiOjM0fV0sNzk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdldEtleXMgICA9IF9kZXJlcV8oNzYpXG4gICwgdG9JT2JqZWN0ID0gX2RlcmVxXygxMDcpXG4gICwgaXNFbnVtICAgID0gX2RlcmVxXyg3NykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xufSx7XCIxMDdcIjoxMDcsXCI3NlwiOjc2LFwiNzdcIjo3N31dLDgwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbnZhciBnT1BOICAgICA9IF9kZXJlcV8oNzIpXG4gICwgZ09QUyAgICAgPSBfZGVyZXFfKDczKVxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KVxuICAsIFJlZmxlY3QgID0gX2RlcmVxXygzOCkuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCl7XG4gIHZhciBrZXlzICAgICAgID0gZ09QTi5mKGFuT2JqZWN0KGl0KSlcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG59LHtcIjM4XCI6MzgsXCI3XCI6NyxcIjcyXCI6NzIsXCI3M1wiOjczfV0sODE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRwYXJzZUZsb2F0ID0gX2RlcmVxXygzOCkucGFyc2VGbG9hdFxuICAsICR0cmltICAgICAgID0gX2RlcmVxXygxMDIpLnRyaW07XG5cbm1vZHVsZS5leHBvcnRzID0gMSAvICRwYXJzZUZsb2F0KF9kZXJlcV8oMTAzKSArICctMCcpICE9PSAtSW5maW5pdHkgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cil7XG4gIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMylcbiAgICAsIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgc3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbn0se1wiMTAyXCI6MTAyLFwiMTAzXCI6MTAzLFwiMzhcIjozOH1dLDgyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkcGFyc2VJbnQgPSBfZGVyZXFfKDM4KS5wYXJzZUludFxuICAsICR0cmltICAgICA9IF9kZXJlcV8oMTAyKS50cmltXG4gICwgd3MgICAgICAgID0gX2RlcmVxXygxMDMpXG4gICwgaGV4ICAgICAgID0gL15bXFwtK10/MFt4WF0vO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRwYXJzZUludCh3cyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3cyArICcweDE2JykgIT09IDIyID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyLCByYWRpeCl7XG4gIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG4gIHJldHVybiAkcGFyc2VJbnQoc3RyaW5nLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChzdHJpbmcpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbn0se1wiMTAyXCI6MTAyLFwiMTAzXCI6MTAzLFwiMzhcIjozOH1dLDgzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBwYXRoICAgICAgPSBfZGVyZXFfKDg0KVxuICAsIGludm9rZSAgICA9IF9kZXJlcV8oNDQpXG4gICwgYUZ1bmN0aW9uID0gX2RlcmVxXygzKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oLyogLi4ucGFyZ3MgKi8pe1xuICB2YXIgZm4gICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBfICAgICAgPSBwYXRoLl9cbiAgICAsIGhvbGRlciA9IGZhbHNlO1xuICB3aGlsZShsZW5ndGggPiBpKWlmKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIGogPSAwLCBrID0gMCwgYXJncztcbiAgICBpZighaG9sZGVyICYmICFhTGVuKXJldHVybiBpbnZva2UoZm4sIHBhcmdzLCB0aGF0KTtcbiAgICBhcmdzID0gcGFyZ3Muc2xpY2UoKTtcbiAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBqOyBqKyspaWYoYXJnc1tqXSA9PT0gXylhcmdzW2pdID0gYXJndW1lbnRzW2srK107XG4gICAgd2hpbGUoYUxlbiA+IGspYXJncy5wdXNoKGFyZ3VtZW50c1trKytdKTtcbiAgICByZXR1cm4gaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbn07XG59LHtcIjNcIjozLFwiNDRcIjo0NCxcIjg0XCI6ODR9XSw4NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMzgpO1xufSx7XCIzOFwiOjM4fV0sODU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xufSx7fV0sODY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIHJlZGVmaW5lID0gX2RlcmVxXyg4Nyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xufSx7XCI4N1wiOjg3fV0sODc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICA9IF9kZXJlcV8oMzgpXG4gICwgaGlkZSAgICAgID0gX2RlcmVxXyg0MClcbiAgLCBoYXMgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIFNSQyAgICAgICA9IF9kZXJlcV8oMTE0KSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxuX2RlcmVxXygyMykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbn0se1wiMTE0XCI6MTE0LFwiMjNcIjoyMyxcIjM4XCI6MzgsXCIzOVwiOjM5LFwiNDBcIjo0MH1dLDg4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlKXtcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG4gIH0gOiByZXBsYWNlO1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG4gIH07XG59O1xufSx7fV0sODk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KXtcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xufSx7fV0sOTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBhbk9iamVjdCA9IF9kZXJlcV8oNyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gX2RlcmVxXygyNSkoRnVuY3Rpb24uY2FsbCwgX2RlcmVxXyg3MCkuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xufSx7XCIyNVwiOjI1LFwiNDlcIjo0OSxcIjdcIjo3LFwiNzBcIjo3MH1dLDkxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgZFAgICAgICAgICAgPSBfZGVyZXFfKDY3KVxuICAsIERFU0NSSVBUT1JTID0gX2RlcmVxXygyOClcbiAgLCBTUEVDSUVTICAgICA9IF9kZXJlcV8oMTE3KSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xufSx7XCIxMTdcIjoxMTcsXCIyOFwiOjI4LFwiMzhcIjozOCxcIjY3XCI6Njd9XSw5MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZGVmID0gX2RlcmVxXyg2NykuZlxuICAsIGhhcyA9IF9kZXJlcV8oMzkpXG4gICwgVEFHID0gX2RlcmVxXygxMTcpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xufSx7XCIxMTdcIjoxMTcsXCIzOVwiOjM5LFwiNjdcIjo2N31dLDkzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBzaGFyZWQgPSBfZGVyZXFfKDk0KSgna2V5cycpXG4gICwgdWlkICAgID0gX2RlcmVxXygxMTQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbn0se1wiMTE0XCI6MTE0LFwiOTRcIjo5NH1dLDk0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgPSBfZGVyZXFfKDM4KVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG59LHtcIjM4XCI6Mzh9XSw5NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSBfZGVyZXFfKDcpXG4gICwgYUZ1bmN0aW9uID0gX2RlcmVxXygzKVxuICAsIFNQRUNJRVMgICA9IF9kZXJlcV8oMTE3KSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbn0se1wiMTE3XCI6MTE3LFwiM1wiOjMsXCI3XCI6N31dLDk2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBmYWlscyA9IF9kZXJlcV8oMzQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCwgYXJnKXtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgYXJnID8gbWV0aG9kLmNhbGwobnVsbCwgZnVuY3Rpb24oKXt9LCAxKSA6IG1ldGhvZC5jYWxsKG51bGwpO1xuICB9KTtcbn07XG59LHtcIjM0XCI6MzR9XSw5NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMDYpXG4gICwgZGVmaW5lZCAgID0gX2RlcmVxXygyNyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xufSx7XCIxMDZcIjoxMDYsXCIyN1wiOjI3fV0sOTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cbnZhciBpc1JlZ0V4cCA9IF9kZXJlcV8oNTApXG4gICwgZGVmaW5lZCAgPSBfZGVyZXFfKDI3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpe1xuICBpZihpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKXRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xufTtcbn0se1wiMjdcIjoyNyxcIjUwXCI6NTB9XSw5OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgZmFpbHMgICA9IF9kZXJlcV8oMzQpXG4gICwgZGVmaW5lZCA9IF9kZXJlcV8oMjcpXG4gICwgcXVvdCAgICA9IC9cIi9nO1xuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG52YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTICA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpXG4gICAgLCBwMSA9ICc8JyArIHRhZztcbiAgaWYoYXR0cmlidXRlICE9PSAnJylwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIGV4ZWMpe1xuICB2YXIgTyA9IHt9O1xuICBPW05BTUVdID0gZXhlYyhjcmVhdGVIVE1MKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgIHZhciB0ZXN0ID0gJydbTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pLCAnU3RyaW5nJywgTyk7XG59O1xufSx7XCIyN1wiOjI3LFwiMzJcIjozMixcIjM0XCI6MzR9XSwxMDA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciB0b0xlbmd0aCA9IF9kZXJlcV8oMTA4KVxuICAsIHJlcGVhdCAgID0gX2RlcmVxXygxMDEpXG4gICwgZGVmaW5lZCAgPSBfZGVyZXFfKDI3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcsIGxlZnQpe1xuICB2YXIgUyAgICAgICAgICAgID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgLCBzdHJpbmdMZW5ndGggPSBTLmxlbmd0aFxuICAgICwgZmlsbFN0ciAgICAgID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpXG4gICAgLCBpbnRNYXhMZW5ndGggPSB0b0xlbmd0aChtYXhMZW5ndGgpO1xuICBpZihpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoIHx8IGZpbGxTdHIgPT0gJycpcmV0dXJuIFM7XG4gIHZhciBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoXG4gICAgLCBzdHJpbmdGaWxsZXIgPSByZXBlYXQuY2FsbChmaWxsU3RyLCBNYXRoLmNlaWwoZmlsbExlbiAvIGZpbGxTdHIubGVuZ3RoKSk7XG4gIGlmKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKXN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcbiAgcmV0dXJuIGxlZnQgPyBzdHJpbmdGaWxsZXIgKyBTIDogUyArIHN0cmluZ0ZpbGxlcjtcbn07XG5cbn0se1wiMTAxXCI6MTAxLFwiMTA4XCI6MTA4LFwiMjdcIjoyN31dLDEwMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMDYpXG4gICwgZGVmaW5lZCAgID0gX2RlcmVxXygyNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKVxuICAgICwgcmVzID0gJydcbiAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xuICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcbn0se1wiMTA2XCI6MTA2LFwiMjdcIjoyN31dLDEwMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgZGVmaW5lZCA9IF9kZXJlcV8oMjcpXG4gICwgZmFpbHMgICA9IF9kZXJlcV8oMzQpXG4gICwgc3BhY2VzICA9IF9kZXJlcV8oMTAzKVxuICAsIHNwYWNlICAgPSAnWycgKyBzcGFjZXMgKyAnXSdcbiAgLCBub24gICAgID0gJ1xcdTIwMGJcXHUwMDg1J1xuICAsIGx0cmltICAgPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJylcbiAgLCBydHJpbSAgID0gUmVnRXhwKHNwYWNlICsgc3BhY2UgKyAnKiQnKTtcblxudmFyIGV4cG9ydGVyID0gZnVuY3Rpb24oS0VZLCBleGVjLCBBTElBUyl7XG4gIHZhciBleHAgICA9IHt9O1xuICB2YXIgRk9SQ0UgPSBmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZihBTElBUylleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24oc3RyaW5nLCBUWVBFKXtcbiAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIGlmKFRZUEUgJiAxKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmKFRZUEUgJiAyKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xufSx7XCIxMDNcIjoxMDMsXCIyN1wiOjI3LFwiMzJcIjozMixcIjM0XCI6MzR9XSwxMDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xufSx7fV0sMTA0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjdHggICAgICAgICAgICAgICAgPSBfZGVyZXFfKDI1KVxuICAsIGludm9rZSAgICAgICAgICAgICA9IF9kZXJlcV8oNDQpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gX2RlcmVxXyg0MSlcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDI5KVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKF9kZXJlcV8oMTgpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG59LHtcIjE4XCI6MTgsXCIyNVwiOjI1LFwiMjlcIjoyOSxcIjM4XCI6MzgsXCI0MVwiOjQxLFwiNDRcIjo0NH1dLDEwNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgdG9JbnRlZ2VyID0gX2RlcmVxXygxMDYpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xufSx7XCIxMDZcIjoxMDZ9XSwxMDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xufSx7fV0sMTA3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSBfZGVyZXFfKDQ1KVxuICAsIGRlZmluZWQgPSBfZGVyZXFfKDI3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xufSx7XCIyN1wiOjI3LFwiNDVcIjo0NX1dLDEwODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSBfZGVyZXFfKDEwNilcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbn0se1wiMTA2XCI6MTA2fV0sMTA5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gX2RlcmVxXygyNyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xufSx7XCIyN1wiOjI3fV0sMTEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xufSx7XCI0OVwiOjQ5fV0sMTExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbmlmKF9kZXJlcV8oMjgpKXtcbiAgdmFyIExJQlJBUlkgICAgICAgICAgICAgPSBfZGVyZXFfKDU4KVxuICAgICwgZ2xvYmFsICAgICAgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICAgLCBmYWlscyAgICAgICAgICAgICAgID0gX2RlcmVxXygzNClcbiAgICAsICRleHBvcnQgICAgICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAgICwgJHR5cGVkICAgICAgICAgICAgICA9IF9kZXJlcV8oMTEzKVxuICAgICwgJGJ1ZmZlciAgICAgICAgICAgICA9IF9kZXJlcV8oMTEyKVxuICAgICwgY3R4ICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMjUpXG4gICAgLCBhbkluc3RhbmNlICAgICAgICAgID0gX2RlcmVxXyg2KVxuICAgICwgcHJvcGVydHlEZXNjICAgICAgICA9IF9kZXJlcV8oODUpXG4gICAgLCBoaWRlICAgICAgICAgICAgICAgID0gX2RlcmVxXyg0MClcbiAgICAsIHJlZGVmaW5lQWxsICAgICAgICAgPSBfZGVyZXFfKDg2KVxuICAgICwgdG9JbnRlZ2VyICAgICAgICAgICA9IF9kZXJlcV8oMTA2KVxuICAgICwgdG9MZW5ndGggICAgICAgICAgICA9IF9kZXJlcV8oMTA4KVxuICAgICwgdG9JbmRleCAgICAgICAgICAgICA9IF9kZXJlcV8oMTA1KVxuICAgICwgdG9QcmltaXRpdmUgICAgICAgICA9IF9kZXJlcV8oMTEwKVxuICAgICwgaGFzICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICAgLCBzYW1lICAgICAgICAgICAgICAgID0gX2RlcmVxXyg4OSlcbiAgICAsIGNsYXNzb2YgICAgICAgICAgICAgPSBfZGVyZXFfKDE3KVxuICAgICwgaXNPYmplY3QgICAgICAgICAgICA9IF9kZXJlcV8oNDkpXG4gICAgLCB0b09iamVjdCAgICAgICAgICAgID0gX2RlcmVxXygxMDkpXG4gICAgLCBpc0FycmF5SXRlciAgICAgICAgID0gX2RlcmVxXyg0NilcbiAgICAsIGNyZWF0ZSAgICAgICAgICAgICAgPSBfZGVyZXFfKDY2KVxuICAgICwgZ2V0UHJvdG90eXBlT2YgICAgICA9IF9kZXJlcV8oNzQpXG4gICAgLCBnT1BOICAgICAgICAgICAgICAgID0gX2RlcmVxXyg3MikuZlxuICAgICwgZ2V0SXRlckZuICAgICAgICAgICA9IF9kZXJlcV8oMTE4KVxuICAgICwgdWlkICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTE0KVxuICAgICwgd2tzICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTE3KVxuICAgICwgY3JlYXRlQXJyYXlNZXRob2QgICA9IF9kZXJlcV8oMTIpXG4gICAgLCBjcmVhdGVBcnJheUluY2x1ZGVzID0gX2RlcmVxXygxMSlcbiAgICAsIHNwZWNpZXNDb25zdHJ1Y3RvciAgPSBfZGVyZXFfKDk1KVxuICAgICwgQXJyYXlJdGVyYXRvcnMgICAgICA9IF9kZXJlcV8oMTMwKVxuICAgICwgSXRlcmF0b3JzICAgICAgICAgICA9IF9kZXJlcV8oNTYpXG4gICAgLCAkaXRlckRldGVjdCAgICAgICAgID0gX2RlcmVxXyg1NClcbiAgICAsIHNldFNwZWNpZXMgICAgICAgICAgPSBfZGVyZXFfKDkxKVxuICAgICwgYXJyYXlGaWxsICAgICAgICAgICA9IF9kZXJlcV8oOSlcbiAgICAsIGFycmF5Q29weVdpdGhpbiAgICAgPSBfZGVyZXFfKDgpXG4gICAgLCAkRFAgICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2NylcbiAgICAsICRHT1BEICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcwKVxuICAgICwgZFAgICAgICAgICAgICAgICAgICA9ICREUC5mXG4gICAgLCBnT1BEICAgICAgICAgICAgICAgID0gJEdPUEQuZlxuICAgICwgUmFuZ2VFcnJvciAgICAgICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXG4gICAgLCBUeXBlRXJyb3IgICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAgICwgVWludDhBcnJheSAgICAgICAgICA9IGdsb2JhbC5VaW50OEFycmF5XG4gICAgLCBBUlJBWV9CVUZGRVIgICAgICAgID0gJ0FycmF5QnVmZmVyJ1xuICAgICwgU0hBUkVEX0JVRkZFUiAgICAgICA9ICdTaGFyZWQnICsgQVJSQVlfQlVGRkVSXG4gICAgLCBCWVRFU19QRVJfRUxFTUVOVCAgID0gJ0JZVEVTX1BFUl9FTEVNRU5UJ1xuICAgICwgUFJPVE9UWVBFICAgICAgICAgICA9ICdwcm90b3R5cGUnXG4gICAgLCBBcnJheVByb3RvICAgICAgICAgID0gQXJyYXlbUFJPVE9UWVBFXVxuICAgICwgJEFycmF5QnVmZmVyICAgICAgICA9ICRidWZmZXIuQXJyYXlCdWZmZXJcbiAgICAsICREYXRhVmlldyAgICAgICAgICAgPSAkYnVmZmVyLkRhdGFWaWV3XG4gICAgLCBhcnJheUZvckVhY2ggICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMClcbiAgICAsIGFycmF5RmlsdGVyICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgyKVxuICAgICwgYXJyYXlTb21lICAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDMpXG4gICAgLCBhcnJheUV2ZXJ5ICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNClcbiAgICAsIGFycmF5RmluZCAgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuICAgICwgYXJyYXlGaW5kSW5kZXggICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG4gICAgLCBhcnJheUluY2x1ZGVzICAgICAgID0gY3JlYXRlQXJyYXlJbmNsdWRlcyh0cnVlKVxuICAgICwgYXJyYXlJbmRleE9mICAgICAgICA9IGNyZWF0ZUFycmF5SW5jbHVkZXMoZmFsc2UpXG4gICAgLCBhcnJheVZhbHVlcyAgICAgICAgID0gQXJyYXlJdGVyYXRvcnMudmFsdWVzXG4gICAgLCBhcnJheUtleXMgICAgICAgICAgID0gQXJyYXlJdGVyYXRvcnMua2V5c1xuICAgICwgYXJyYXlFbnRyaWVzICAgICAgICA9IEFycmF5SXRlcmF0b3JzLmVudHJpZXNcbiAgICAsIGFycmF5TGFzdEluZGV4T2YgICAgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mXG4gICAgLCBhcnJheVJlZHVjZSAgICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2VcbiAgICAsIGFycmF5UmVkdWNlUmlnaHQgICAgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0XG4gICAgLCBhcnJheUpvaW4gICAgICAgICAgID0gQXJyYXlQcm90by5qb2luXG4gICAgLCBhcnJheVNvcnQgICAgICAgICAgID0gQXJyYXlQcm90by5zb3J0XG4gICAgLCBhcnJheVNsaWNlICAgICAgICAgID0gQXJyYXlQcm90by5zbGljZVxuICAgICwgYXJyYXlUb1N0cmluZyAgICAgICA9IEFycmF5UHJvdG8udG9TdHJpbmdcbiAgICAsIGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBBcnJheVByb3RvLnRvTG9jYWxlU3RyaW5nXG4gICAgLCBJVEVSQVRPUiAgICAgICAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICAgLCBUQUcgICAgICAgICAgICAgICAgID0gd2tzKCd0b1N0cmluZ1RhZycpXG4gICAgLCBUWVBFRF9DT05TVFJVQ1RPUiAgID0gdWlkKCd0eXBlZF9jb25zdHJ1Y3RvcicpXG4gICAgLCBERUZfQ09OU1RSVUNUT1IgICAgID0gdWlkKCdkZWZfY29uc3RydWN0b3InKVxuICAgICwgQUxMX0NPTlNUUlVDVE9SUyAgICA9ICR0eXBlZC5DT05TVFJcbiAgICAsIFRZUEVEX0FSUkFZICAgICAgICAgPSAkdHlwZWQuVFlQRURcbiAgICAsIFZJRVcgICAgICAgICAgICAgICAgPSAkdHlwZWQuVklFV1xuICAgICwgV1JPTkdfTEVOR1RIICAgICAgICA9ICdXcm9uZyBsZW5ndGghJztcblxuICB2YXIgJG1hcCA9IGNyZWF0ZUFycmF5TWV0aG9kKDEsIGZ1bmN0aW9uKE8sIGxlbmd0aCl7XG4gICAgcmV0dXJuIGFsbG9jYXRlKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pLCBsZW5ndGgpO1xuICB9KTtcblxuICB2YXIgTElUVExFX0VORElBTiA9IGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ldyBVaW50MTZBcnJheShbMV0pLmJ1ZmZlcilbMF0gPT09IDE7XG4gIH0pO1xuXG4gIHZhciBGT1JDRURfU0VUID0gISFVaW50OEFycmF5ICYmICEhVWludDhBcnJheVtQUk9UT1RZUEVdLnNldCAmJiBmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBVaW50OEFycmF5KDEpLnNldCh7fSk7XG4gIH0pO1xuXG4gIHZhciBzdHJpY3RUb0xlbmd0aCA9IGZ1bmN0aW9uKGl0LCBTQU1FKXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHZhciBudW1iZXIgPSAraXRcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoaXQpO1xuICAgIGlmKFNBTUUgJiYgIXNhbWUobnVtYmVyLCBsZW5ndGgpKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuXG4gIHZhciB0b09mZnNldCA9IGZ1bmN0aW9uKGl0LCBCWVRFUyl7XG4gICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlcihpdCk7XG4gICAgaWYob2Zmc2V0IDwgMCB8fCBvZmZzZXQgJSBCWVRFUyl0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfTtcblxuICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbihpdCl7XG4gICAgaWYoaXNPYmplY3QoaXQpICYmIFRZUEVEX0FSUkFZIGluIGl0KXJldHVybiBpdDtcbiAgICB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IScpO1xuICB9O1xuXG4gIHZhciBhbGxvY2F0ZSA9IGZ1bmN0aW9uKEMsIGxlbmd0aCl7XG4gICAgaWYoIShpc09iamVjdChDKSAmJiBUWVBFRF9DT05TVFJVQ1RPUiBpbiBDKSl7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0l0IGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIScpO1xuICAgIH0gcmV0dXJuIG5ldyBDKGxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIHNwZWNpZXNGcm9tTGlzdCA9IGZ1bmN0aW9uKE8sIGxpc3Qpe1xuICAgIHJldHVybiBmcm9tTGlzdChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGlzdCk7XG4gIH07XG5cbiAgdmFyIGZyb21MaXN0ID0gZnVuY3Rpb24oQywgbGlzdCl7XG4gICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICwgbGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gYWxsb2NhdGUoQywgbGVuZ3RoKTtcbiAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gbGlzdFtpbmRleCsrXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbihpdCwga2V5LCBpbnRlcm5hbCl7XG4gICAgZFAoaXQsIGtleSwge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuX2RbaW50ZXJuYWxdOyB9fSk7XG4gIH07XG5cbiAgdmFyICRmcm9tID0gZnVuY3Rpb24gZnJvbShzb3VyY2UgLyosIG1hcGZuLCB0aGlzQXJnICovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KHNvdXJjZSlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgaSwgbGVuZ3RoLCB2YWx1ZXMsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhaXNBcnJheUl0ZXIoaXRlckZuKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgdmFsdWVzID0gW10sIGkgPSAwOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGkrKyl7XG4gICAgICAgIHZhbHVlcy5wdXNoKHN0ZXAudmFsdWUpO1xuICAgICAgfSBPID0gdmFsdWVzO1xuICAgIH1cbiAgICBpZihtYXBwaW5nICYmIGFMZW4gPiAyKW1hcGZuID0gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICAgIGZvcihpID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpOyBsZW5ndGggPiBpOyBpKyspe1xuICAgICAgcmVzdWx0W2ldID0gbWFwcGluZyA/IG1hcGZuKE9baV0sIGkpIDogT1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgJG9mID0gZnVuY3Rpb24gb2YoLyouLi5pdGVtcyovKXtcbiAgICB2YXIgaW5kZXggID0gMFxuICAgICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7XG4gICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIGlPUyBTYWZhcmkgNi54IGZhaWxzIGhlcmVcbiAgdmFyIFRPX0xPQ0FMRV9CVUcgPSAhIVVpbnQ4QXJyYXkgJiYgZmFpbHMoZnVuY3Rpb24oKXsgYXJyYXlUb0xvY2FsZVN0cmluZy5jYWxsKG5ldyBVaW50OEFycmF5KDEpKTsgfSk7XG5cbiAgdmFyICR0b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCl7XG4gICAgcmV0dXJuIGFycmF5VG9Mb2NhbGVTdHJpbmcuYXBwbHkoVE9fTE9DQUxFX0JVRyA/IGFycmF5U2xpY2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSkgOiB2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICB2YXIgcHJvdG8gPSB7XG4gICAgY29weVdpdGhpbjogZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0IC8qLCBlbmQgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5Q29weVdpdGhpbi5jYWxsKHZhbGlkYXRlKHRoaXMpLCB0YXJnZXQsIHN0YXJ0LCBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlFdmVyeSh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZmlsbDogZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiwgc3RhcnQsIGVuZCAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUZpbGwuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBzcGVjaWVzRnJvbUxpc3QodGhpcywgYXJyYXlGaWx0ZXIodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKSk7XG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlGaW5kKHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KHByZWRpY2F0ZSAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlGaW5kSW5kZXgodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIGFycmF5Rm9yRWFjaCh2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8pe1xuICAgICAgcmV0dXJuIGFycmF5SW5kZXhPZih2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlJbmNsdWRlcyh2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlKb2luLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUxhc3RJbmRleE9mLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiBtYXAobWFwZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuICRtYXAodmFsaWRhdGUodGhpcyksIG1hcGZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qLCBpbml0aWFsVmFsdWUgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlSZWR1Y2UuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZWR1Y2VSaWdodDogZnVuY3Rpb24gcmVkdWNlUmlnaHQoY2FsbGJhY2tmbiAvKiwgaW5pdGlhbFZhbHVlICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlUmlnaHQuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCl7XG4gICAgICB2YXIgdGhhdCAgID0gdGhpc1xuICAgICAgICAsIGxlbmd0aCA9IHZhbGlkYXRlKHRoYXQpLmxlbmd0aFxuICAgICAgICAsIG1pZGRsZSA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMilcbiAgICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAgICwgdmFsdWU7XG4gICAgICB3aGlsZShpbmRleCA8IG1pZGRsZSl7XG4gICAgICAgIHZhbHVlICAgICAgICAgPSB0aGF0W2luZGV4XTtcbiAgICAgICAgdGhhdFtpbmRleCsrXSA9IHRoYXRbLS1sZW5ndGhdO1xuICAgICAgICB0aGF0W2xlbmd0aF0gID0gdmFsdWU7XG4gICAgICB9IHJldHVybiB0aGF0O1xuICAgIH0sXG4gICAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiBhcnJheVNvbWUodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKXtcbiAgICAgIHJldHVybiBhcnJheVNvcnQuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgY29tcGFyZWZuKTtcbiAgICB9LFxuICAgIHN1YmFycmF5OiBmdW5jdGlvbiBzdWJhcnJheShiZWdpbiwgZW5kKXtcbiAgICAgIHZhciBPICAgICAgPSB2YWxpZGF0ZSh0aGlzKVxuICAgICAgICAsIGxlbmd0aCA9IE8ubGVuZ3RoXG4gICAgICAgICwgJGJlZ2luID0gdG9JbmRleChiZWdpbiwgbGVuZ3RoKTtcbiAgICAgIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihPLCBPW0RFRl9DT05TVFJVQ1RPUl0pKShcbiAgICAgICAgTy5idWZmZXIsXG4gICAgICAgIE8uYnl0ZU9mZnNldCArICRiZWdpbiAqIE8uQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICAgIHRvTGVuZ3RoKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpKSAtICRiZWdpbilcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHZhciAkc2xpY2UgPSBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKXtcbiAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5U2xpY2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSwgc3RhcnQsIGVuZCkpO1xuICB9O1xuXG4gIHZhciAkc2V0ID0gZnVuY3Rpb24gc2V0KGFycmF5TGlrZSAvKiwgb2Zmc2V0ICovKXtcbiAgICB2YWxpZGF0ZSh0aGlzKTtcbiAgICB2YXIgb2Zmc2V0ID0gdG9PZmZzZXQoYXJndW1lbnRzWzFdLCAxKVxuICAgICAgLCBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgICAgLCBzcmMgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIGxlbiAgICA9IHRvTGVuZ3RoKHNyYy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDA7XG4gICAgaWYobGVuICsgb2Zmc2V0ID4gbGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICB3aGlsZShpbmRleCA8IGxlbil0aGlzW29mZnNldCArIGluZGV4XSA9IHNyY1tpbmRleCsrXTtcbiAgfTtcblxuICB2YXIgJGl0ZXJhdG9ycyA9IHtcbiAgICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKCl7XG4gICAgICByZXR1cm4gYXJyYXlFbnRyaWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24ga2V5cygpe1xuICAgICAgcmV0dXJuIGFycmF5S2V5cy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCl7XG4gICAgICByZXR1cm4gYXJyYXlWYWx1ZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc1RBSW5kZXggPSBmdW5jdGlvbih0YXJnZXQsIGtleSl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldClcbiAgICAgICYmIHRhcmdldFtUWVBFRF9BUlJBWV1cbiAgICAgICYmIHR5cGVvZiBrZXkgIT0gJ3N5bWJvbCdcbiAgICAgICYmIGtleSBpbiB0YXJnZXRcbiAgICAgICYmIFN0cmluZygra2V5KSA9PSBTdHJpbmcoa2V5KTtcbiAgfTtcbiAgdmFyICRnZXREZXNjID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KXtcbiAgICByZXR1cm4gaXNUQUluZGV4KHRhcmdldCwga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSlcbiAgICAgID8gcHJvcGVydHlEZXNjKDIsIHRhcmdldFtrZXldKVxuICAgICAgOiBnT1BEKHRhcmdldCwga2V5KTtcbiAgfTtcbiAgdmFyICRzZXREZXNjID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGRlc2Mpe1xuICAgIGlmKGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG4gICAgICAmJiBpc09iamVjdChkZXNjKVxuICAgICAgJiYgaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgICAmJiAhaGFzKGRlc2MsICdnZXQnKVxuICAgICAgJiYgIWhhcyhkZXNjLCAnc2V0JylcbiAgICAgIC8vIFRPRE86IGFkZCB2YWxpZGF0aW9uIGRlc2NyaXB0b3Igdy9vIGNhbGxpbmcgYWNjZXNzb3JzXG4gICAgICAmJiAhZGVzYy5jb25maWd1cmFibGVcbiAgICAgICYmICghaGFzKGRlc2MsICd3cml0YWJsZScpIHx8IGRlc2Mud3JpdGFibGUpXG4gICAgICAmJiAoIWhhcyhkZXNjLCAnZW51bWVyYWJsZScpIHx8IGRlc2MuZW51bWVyYWJsZSlcbiAgICApe1xuICAgICAgdGFyZ2V0W2tleV0gPSBkZXNjLnZhbHVlO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9IGVsc2UgcmV0dXJuIGRQKHRhcmdldCwga2V5LCBkZXNjKTtcbiAgfTtcblxuICBpZighQUxMX0NPTlNUUlVDVE9SUyl7XG4gICAgJEdPUEQuZiA9ICRnZXREZXNjO1xuICAgICREUC5mICAgPSAkc2V0RGVzYztcbiAgfVxuXG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIUFMTF9DT05TVFJVQ1RPUlMsICdPYmplY3QnLCB7XG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0RGVzYyxcbiAgICBkZWZpbmVQcm9wZXJ0eTogICAgICAgICAgICRzZXREZXNjXG4gIH0pO1xuXG4gIGlmKGZhaWxzKGZ1bmN0aW9uKCl7IGFycmF5VG9TdHJpbmcuY2FsbCh7fSk7IH0pKXtcbiAgICBhcnJheVRvU3RyaW5nID0gYXJyYXlUb0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgdmFyICRUeXBlZEFycmF5UHJvdG90eXBlJCA9IHJlZGVmaW5lQWxsKHt9LCBwcm90byk7XG4gIHJlZGVmaW5lQWxsKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJGl0ZXJhdG9ycyk7XG4gIGhpZGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBJVEVSQVRPUiwgJGl0ZXJhdG9ycy52YWx1ZXMpO1xuICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsIHtcbiAgICBzbGljZTogICAgICAgICAgJHNsaWNlLFxuICAgIHNldDogICAgICAgICAgICAkc2V0LFxuICAgIGNvbnN0cnVjdG9yOiAgICBmdW5jdGlvbigpeyAvKiBub29wICovIH0sXG4gICAgdG9TdHJpbmc6ICAgICAgIGFycmF5VG9TdHJpbmcsXG4gICAgdG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ1xuICB9KTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J1ZmZlcicsICdiJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlT2Zmc2V0JywgJ28nKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2J5dGVMZW5ndGgnLCAnbCcpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnbGVuZ3RoJywgJ2UnKTtcbiAgZFAoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCBUQUcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzW1RZUEVEX0FSUkFZXTsgfVxuICB9KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgQllURVMsIHdyYXBwZXIsIENMQU1QRUQpe1xuICAgIENMQU1QRUQgPSAhIUNMQU1QRUQ7XG4gICAgdmFyIE5BTUUgICAgICAgPSBLRVkgKyAoQ0xBTVBFRCA/ICdDbGFtcGVkJyA6ICcnKSArICdBcnJheSdcbiAgICAgICwgSVNOVF9VSU5UOCA9IE5BTUUgIT0gJ1VpbnQ4QXJyYXknXG4gICAgICAsIEdFVFRFUiAgICAgPSAnZ2V0JyArIEtFWVxuICAgICAgLCBTRVRURVIgICAgID0gJ3NldCcgKyBLRVlcbiAgICAgICwgVHlwZWRBcnJheSA9IGdsb2JhbFtOQU1FXVxuICAgICAgLCBCYXNlICAgICAgID0gVHlwZWRBcnJheSB8fCB7fVxuICAgICAgLCBUQUMgICAgICAgID0gVHlwZWRBcnJheSAmJiBnZXRQcm90b3R5cGVPZihUeXBlZEFycmF5KVxuICAgICAgLCBGT1JDRUQgICAgID0gIVR5cGVkQXJyYXkgfHwgISR0eXBlZC5BQlZcbiAgICAgICwgTyAgICAgICAgICA9IHt9XG4gICAgICAsIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5ICYmIFR5cGVkQXJyYXlbUFJPVE9UWVBFXTtcbiAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24odGhhdCwgaW5kZXgpe1xuICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuICAgICAgcmV0dXJuIGRhdGEudltHRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIExJVFRMRV9FTkRJQU4pO1xuICAgIH07XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4LCB2YWx1ZSl7XG4gICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICBpZihDTEFNUEVEKXZhbHVlID0gKHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSkpIDwgMCA/IDAgOiB2YWx1ZSA+IDB4ZmYgPyAweGZmIDogdmFsdWUgJiAweGZmO1xuICAgICAgZGF0YS52W1NFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgdmFsdWUsIExJVFRMRV9FTkRJQU4pO1xuICAgIH07XG4gICAgdmFyIGFkZEVsZW1lbnQgPSBmdW5jdGlvbih0aGF0LCBpbmRleCl7XG4gICAgICBkUCh0aGF0LCBpbmRleCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcmV0dXJuIGdldHRlcih0aGlzLCBpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIHJldHVybiBzZXR0ZXIodGhpcywgaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZihGT1JDRUQpe1xuICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSwgJ19kJyk7XG4gICAgICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAgICAgLCBvZmZzZXQgPSAwXG4gICAgICAgICAgLCBidWZmZXIsIGJ5dGVMZW5ndGgsIGxlbmd0aCwga2xhc3M7XG4gICAgICAgIGlmKCFpc09iamVjdChkYXRhKSl7XG4gICAgICAgICAgbGVuZ3RoICAgICA9IHN0cmljdFRvTGVuZ3RoKGRhdGEsIHRydWUpXG4gICAgICAgICAgYnl0ZUxlbmd0aCA9IGxlbmd0aCAqIEJZVEVTO1xuICAgICAgICAgIGJ1ZmZlciAgICAgPSBuZXcgJEFycmF5QnVmZmVyKGJ5dGVMZW5ndGgpO1xuICAgICAgICB9IGVsc2UgaWYoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUil7XG4gICAgICAgICAgYnVmZmVyID0gZGF0YTtcbiAgICAgICAgICBvZmZzZXQgPSB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUyk7XG4gICAgICAgICAgdmFyICRsZW4gPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgaWYoJGxlbmd0aCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGlmKCRsZW4gJSBCWVRFUyl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgICBieXRlTGVuZ3RoID0gJGxlbiAtIG9mZnNldDtcbiAgICAgICAgICAgIGlmKGJ5dGVMZW5ndGggPCAwKXRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9IHRvTGVuZ3RoKCRsZW5ndGgpICogQllURVM7XG4gICAgICAgICAgICBpZihieXRlTGVuZ3RoICsgb2Zmc2V0ID4gJGxlbil0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlbmd0aCA9IGJ5dGVMZW5ndGggLyBCWVRFUztcbiAgICAgICAgfSBlbHNlIGlmKFRZUEVEX0FSUkFZIGluIGRhdGEpe1xuICAgICAgICAgIHJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJGZyb20uY2FsbChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBoaWRlKHRoYXQsICdfZCcsIHtcbiAgICAgICAgICBiOiBidWZmZXIsXG4gICAgICAgICAgbzogb2Zmc2V0LFxuICAgICAgICAgIGw6IGJ5dGVMZW5ndGgsXG4gICAgICAgICAgZTogbGVuZ3RoLFxuICAgICAgICAgIHY6IG5ldyAkRGF0YVZpZXcoYnVmZmVyKVxuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUoaW5kZXggPCBsZW5ndGgpYWRkRWxlbWVudCh0aGF0LCBpbmRleCsrKTtcbiAgICAgIH0pO1xuICAgICAgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IGNyZWF0ZSgkVHlwZWRBcnJheVByb3RvdHlwZSQpO1xuICAgICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBUeXBlZEFycmF5KTtcbiAgICB9IGVsc2UgaWYoISRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpe1xuICAgICAgLy8gVjggd29ya3Mgd2l0aCBpdGVyYXRvcnMsIGJ1dCBmYWlscyBpbiBtYW55IG90aGVyIGNhc2VzXG4gICAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDU1MlxuICAgICAgbmV3IFR5cGVkQXJyYXkobnVsbCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICBuZXcgVHlwZWRBcnJheShpdGVyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9LCB0cnVlKSl7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBkYXRhLCAkb2Zmc2V0LCAkbGVuZ3RoKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGF0LCBUeXBlZEFycmF5LCBOQU1FKTtcbiAgICAgICAgdmFyIGtsYXNzO1xuICAgICAgICAvLyBgd3NgIG1vZHVsZSBidWcsIHRlbXBvcmFyaWx5IHJlbW92ZSB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgVWludDhBcnJheVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2Vic29ja2V0cy93cy9wdWxsLzY0NVxuICAgICAgICBpZighaXNPYmplY3QoZGF0YSkpcmV0dXJuIG5ldyBCYXNlKHN0cmljdFRvTGVuZ3RoKGRhdGEsIElTTlRfVUlOVDgpKTtcbiAgICAgICAgaWYoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUil7XG4gICAgICAgICAgcmV0dXJuICRsZW5ndGggIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUyksICRsZW5ndGgpXG4gICAgICAgICAgICA6ICRvZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSlcbiAgICAgICAgICAgICAgOiBuZXcgQmFzZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZihUWVBFRF9BUlJBWSBpbiBkYXRhKXJldHVybiBmcm9tTGlzdChUeXBlZEFycmF5LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIGFycmF5Rm9yRWFjaChUQUMgIT09IEZ1bmN0aW9uLnByb3RvdHlwZSA/IGdPUE4oQmFzZSkuY29uY2F0KGdPUE4oVEFDKSkgOiBnT1BOKEJhc2UpLCBmdW5jdGlvbihrZXkpe1xuICAgICAgICBpZighKGtleSBpbiBUeXBlZEFycmF5KSloaWRlKFR5cGVkQXJyYXksIGtleSwgQmFzZVtrZXldKTtcbiAgICAgIH0pO1xuICAgICAgVHlwZWRBcnJheVtQUk9UT1RZUEVdID0gVHlwZWRBcnJheVByb3RvdHlwZTtcbiAgICAgIGlmKCFMSUJSQVJZKVR5cGVkQXJyYXlQcm90b3R5cGUuY29uc3RydWN0b3IgPSBUeXBlZEFycmF5O1xuICAgIH1cbiAgICB2YXIgJG5hdGl2ZUl0ZXJhdG9yICAgPSBUeXBlZEFycmF5UHJvdG90eXBlW0lURVJBVE9SXVxuICAgICAgLCBDT1JSRUNUX0lURVJfTkFNRSA9ICEhJG5hdGl2ZUl0ZXJhdG9yICYmICgkbmF0aXZlSXRlcmF0b3IubmFtZSA9PSAndmFsdWVzJyB8fCAkbmF0aXZlSXRlcmF0b3IubmFtZSA9PSB1bmRlZmluZWQpXG4gICAgICAsICRpdGVyYXRvciAgICAgICAgID0gJGl0ZXJhdG9ycy52YWx1ZXM7XG4gICAgaGlkZShUeXBlZEFycmF5LCBUWVBFRF9DT05TVFJVQ1RPUiwgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBUWVBFRF9BUlJBWSwgTkFNRSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIERFRl9DT05TVFJVQ1RPUiwgVHlwZWRBcnJheSk7XG5cbiAgICBpZihDTEFNUEVEID8gbmV3IFR5cGVkQXJyYXkoMSlbVEFHXSAhPSBOQU1FIDogIShUQUcgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpe1xuICAgICAgZFAoVHlwZWRBcnJheVByb3RvdHlwZSwgVEFHLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIE5BTUU7IH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9bTkFNRV0gPSBUeXBlZEFycmF5O1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheSAhPSBCYXNlKSwgTyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUywgTkFNRSwge1xuICAgICAgQllURVNfUEVSX0VMRU1FTlQ6IEJZVEVTLFxuICAgICAgZnJvbTogJGZyb20sXG4gICAgICBvZjogJG9mXG4gICAgfSk7XG5cbiAgICBpZighKEJZVEVTX1BFUl9FTEVNRU5UIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKWhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgQllURVNfUEVSX0VMRU1FTlQsIEJZVEVTKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCBOQU1FLCBwcm90byk7XG5cbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRURfU0VULCBOQU1FLCB7c2V0OiAkc2V0fSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFDT1JSRUNUX0lURVJfTkFNRSwgTkFNRSwgJGl0ZXJhdG9ycyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChUeXBlZEFycmF5UHJvdG90eXBlLnRvU3RyaW5nICE9IGFycmF5VG9TdHJpbmcpLCBOQU1FLCB7dG9TdHJpbmc6IGFycmF5VG9TdHJpbmd9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgIG5ldyBUeXBlZEFycmF5KDEpLnNsaWNlKCk7XG4gICAgfSksIE5BTUUsIHtzbGljZTogJHNsaWNlfSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIFsxLCAyXS50b0xvY2FsZVN0cmluZygpICE9IG5ldyBUeXBlZEFycmF5KFsxLCAyXSkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICAgICAgVHlwZWRBcnJheVByb3RvdHlwZS50b0xvY2FsZVN0cmluZy5jYWxsKFsxLCAyXSk7XG4gICAgfSkpLCBOQU1FLCB7dG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZ30pO1xuXG4gICAgSXRlcmF0b3JzW05BTUVdID0gQ09SUkVDVF9JVEVSX05BTUUgPyAkbmF0aXZlSXRlcmF0b3IgOiAkaXRlcmF0b3I7XG4gICAgaWYoIUxJQlJBUlkgJiYgIUNPUlJFQ1RfSVRFUl9OQU1FKWhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgSVRFUkFUT1IsICRpdGVyYXRvcik7XG4gIH07XG59IGVsc2UgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xufSx7XCIxMDVcIjoxMDUsXCIxMDZcIjoxMDYsXCIxMDhcIjoxMDgsXCIxMDlcIjoxMDksXCIxMVwiOjExLFwiMTEwXCI6MTEwLFwiMTEyXCI6MTEyLFwiMTEzXCI6MTEzLFwiMTE0XCI6MTE0LFwiMTE3XCI6MTE3LFwiMTE4XCI6MTE4LFwiMTJcIjoxMixcIjEzMFwiOjEzMCxcIjE3XCI6MTcsXCIyNVwiOjI1LFwiMjhcIjoyOCxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjM5XCI6MzksXCI0MFwiOjQwLFwiNDZcIjo0NixcIjQ5XCI6NDksXCI1NFwiOjU0LFwiNTZcIjo1NixcIjU4XCI6NTgsXCI2XCI6NixcIjY2XCI6NjYsXCI2N1wiOjY3LFwiNzBcIjo3MCxcIjcyXCI6NzIsXCI3NFwiOjc0LFwiOFwiOjgsXCI4NVwiOjg1LFwiODZcIjo4NixcIjg5XCI6ODksXCI5XCI6OSxcIjkxXCI6OTEsXCI5NVwiOjk1fV0sMTEyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgREVTQ1JJUFRPUlMgICAgPSBfZGVyZXFfKDI4KVxuICAsIExJQlJBUlkgICAgICAgID0gX2RlcmVxXyg1OClcbiAgLCAkdHlwZWQgICAgICAgICA9IF9kZXJlcV8oMTEzKVxuICAsIGhpZGUgICAgICAgICAgID0gX2RlcmVxXyg0MClcbiAgLCByZWRlZmluZUFsbCAgICA9IF9kZXJlcV8oODYpXG4gICwgZmFpbHMgICAgICAgICAgPSBfZGVyZXFfKDM0KVxuICAsIGFuSW5zdGFuY2UgICAgID0gX2RlcmVxXyg2KVxuICAsIHRvSW50ZWdlciAgICAgID0gX2RlcmVxXygxMDYpXG4gICwgdG9MZW5ndGggICAgICAgPSBfZGVyZXFfKDEwOClcbiAgLCBnT1BOICAgICAgICAgICA9IF9kZXJlcV8oNzIpLmZcbiAgLCBkUCAgICAgICAgICAgICA9IF9kZXJlcV8oNjcpLmZcbiAgLCBhcnJheUZpbGwgICAgICA9IF9kZXJlcV8oOSlcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IF9kZXJlcV8oOTIpXG4gICwgQVJSQVlfQlVGRkVSICAgPSAnQXJyYXlCdWZmZXInXG4gICwgREFUQV9WSUVXICAgICAgPSAnRGF0YVZpZXcnXG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIFdST05HX0xFTkdUSCAgID0gJ1dyb25nIGxlbmd0aCEnXG4gICwgV1JPTkdfSU5ERVggICAgPSAnV3JvbmcgaW5kZXghJ1xuICAsICRBcnJheUJ1ZmZlciAgID0gZ2xvYmFsW0FSUkFZX0JVRkZFUl1cbiAgLCAkRGF0YVZpZXcgICAgICA9IGdsb2JhbFtEQVRBX1ZJRVddXG4gICwgTWF0aCAgICAgICAgICAgPSBnbG9iYWwuTWF0aFxuICAsIFJhbmdlRXJyb3IgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcbiAgLCBJbmZpbml0eSAgICAgICA9IGdsb2JhbC5JbmZpbml0eVxuICAsIEJhc2VCdWZmZXIgICAgID0gJEFycmF5QnVmZmVyXG4gICwgYWJzICAgICAgICAgICAgPSBNYXRoLmFic1xuICAsIHBvdyAgICAgICAgICAgID0gTWF0aC5wb3dcbiAgLCBmbG9vciAgICAgICAgICA9IE1hdGguZmxvb3JcbiAgLCBsb2cgICAgICAgICAgICA9IE1hdGgubG9nXG4gICwgTE4yICAgICAgICAgICAgPSBNYXRoLkxOMlxuICAsIEJVRkZFUiAgICAgICAgID0gJ2J1ZmZlcidcbiAgLCBCWVRFX0xFTkdUSCAgICA9ICdieXRlTGVuZ3RoJ1xuICAsIEJZVEVfT0ZGU0VUICAgID0gJ2J5dGVPZmZzZXQnXG4gICwgJEJVRkZFUiAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfYicgOiBCVUZGRVJcbiAgLCAkTEVOR1RIICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19sJyA6IEJZVEVfTEVOR1RIXG4gICwgJE9GRlNFVCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbycgOiBCWVRFX09GRlNFVDtcblxuLy8gSUVFRTc1NCBjb252ZXJzaW9ucyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2llZWU3NTRcbnZhciBwYWNrSUVFRTc1NCA9IGZ1bmN0aW9uKHZhbHVlLCBtTGVuLCBuQnl0ZXMpe1xuICB2YXIgYnVmZmVyID0gQXJyYXkobkJ5dGVzKVxuICAgICwgZUxlbiAgID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gICAgLCBlTWF4ICAgPSAoMSA8PCBlTGVuKSAtIDFcbiAgICAsIGVCaWFzICA9IGVNYXggPj4gMVxuICAgICwgcnQgICAgID0gbUxlbiA9PT0gMjMgPyBwb3coMiwgLTI0KSAtIHBvdygyLCAtNzcpIDogMFxuICAgICwgaSAgICAgID0gMFxuICAgICwgcyAgICAgID0gdmFsdWUgPCAwIHx8IHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDAgPyAxIDogMFxuICAgICwgZSwgbSwgYztcbiAgdmFsdWUgPSBhYnModmFsdWUpXG4gIGlmKHZhbHVlICE9IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSl7XG4gICAgbSA9IHZhbHVlICE9IHZhbHVlID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IGZsb29yKGxvZyh2YWx1ZSkgLyBMTjIpO1xuICAgIGlmKHZhbHVlICogKGMgPSBwb3coMiwgLWUpKSA8IDEpe1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZihlICsgZUJpYXMgPj0gMSl7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogcG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmKHZhbHVlICogYyA+PSAyKXtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG4gICAgaWYoZSArIGVCaWFzID49IGVNYXgpe1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYoZSArIGVCaWFzID49IDEpe1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIHBvdygyLCBlQmlhcyAtIDEpICogcG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG4gIGZvcig7IG1MZW4gPj0gODsgYnVmZmVyW2krK10gPSBtICYgMjU1LCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcbiAgZSA9IGUgPDwgbUxlbiB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yKDsgZUxlbiA+IDA7IGJ1ZmZlcltpKytdID0gZSAmIDI1NSwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG4gIGJ1ZmZlclstLWldIHw9IHMgKiAxMjg7XG4gIHJldHVybiBidWZmZXI7XG59O1xudmFyIHVucGFja0lFRUU3NTQgPSBmdW5jdGlvbihidWZmZXIsIG1MZW4sIG5CeXRlcyl7XG4gIHZhciBlTGVuICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICAgICwgZU1heCAgPSAoMSA8PCBlTGVuKSAtIDFcbiAgICAsIGVCaWFzID0gZU1heCA+PiAxXG4gICAgLCBuQml0cyA9IGVMZW4gLSA3XG4gICAgLCBpICAgICA9IG5CeXRlcyAtIDFcbiAgICAsIHMgICAgID0gYnVmZmVyW2ktLV1cbiAgICAsIGUgICAgID0gcyAmIDEyN1xuICAgICwgbTtcbiAgcyA+Pj0gNztcbiAgZm9yKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgbSA9IGUgJiAoMSA8PCAtbkJpdHMpIC0gMTtcbiAgZSA+Pj0gLW5CaXRzO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW2ldLCBpLS0sIG5CaXRzIC09IDgpO1xuICBpZihlID09PSAwKXtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYoZSA9PT0gZU1heCl7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiBzID8gLUluZmluaXR5IDogSW5maW5pdHk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBwb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfSByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIHBvdygyLCBlIC0gbUxlbik7XG59O1xuXG52YXIgdW5wYWNrSTMyID0gZnVuY3Rpb24oYnl0ZXMpe1xuICByZXR1cm4gYnl0ZXNbM10gPDwgMjQgfCBieXRlc1syXSA8PCAxNiB8IGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcbn07XG52YXIgcGFja0k4ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZl07XG59O1xudmFyIHBhY2tJMTYgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZl07XG59O1xudmFyIHBhY2tJMzIgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZiwgaXQgPj4gMTYgJiAweGZmLCBpdCA+PiAyNCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrRjY0ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDUyLCA4KTtcbn07XG52YXIgcGFja0YzMiA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCAyMywgNCk7XG59O1xuXG52YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oQywga2V5LCBpbnRlcm5hbCl7XG4gIGRQKENbUFJPVE9UWVBFXSwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpc1tpbnRlcm5hbF07IH19KTtcbn07XG5cbnZhciBnZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGlzTGl0dGxlRW5kaWFuKXtcbiAgdmFyIG51bUluZGV4ID0gK2luZGV4XG4gICAgLCBpbnRJbmRleCA9IHRvSW50ZWdlcihudW1JbmRleCk7XG4gIGlmKG51bUluZGV4ICE9IGludEluZGV4IHx8IGludEluZGV4IDwgMCB8fCBpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYlxuICAgICwgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF1cbiAgICAsIHBhY2sgID0gc3RvcmUuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgYnl0ZXMpO1xuICByZXR1cm4gaXNMaXR0bGVFbmRpYW4gPyBwYWNrIDogcGFjay5yZXZlcnNlKCk7XG59O1xudmFyIHNldCA9IGZ1bmN0aW9uKHZpZXcsIGJ5dGVzLCBpbmRleCwgY29udmVyc2lvbiwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKXtcbiAgdmFyIG51bUluZGV4ID0gK2luZGV4XG4gICAgLCBpbnRJbmRleCA9IHRvSW50ZWdlcihudW1JbmRleCk7XG4gIGlmKG51bUluZGV4ICE9IGludEluZGV4IHx8IGludEluZGV4IDwgMCB8fCBpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYlxuICAgICwgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF1cbiAgICAsIHBhY2sgID0gY29udmVyc2lvbigrdmFsdWUpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgYnl0ZXM7IGkrKylzdG9yZVtzdGFydCArIGldID0gcGFja1tpc0xpdHRsZUVuZGlhbiA/IGkgOiBieXRlcyAtIGkgLSAxXTtcbn07XG5cbnZhciB2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzID0gZnVuY3Rpb24odGhhdCwgbGVuZ3RoKXtcbiAgYW5JbnN0YW5jZSh0aGF0LCAkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG4gIHZhciBudW1iZXJMZW5ndGggPSArbGVuZ3RoXG4gICAgLCBieXRlTGVuZ3RoICAgPSB0b0xlbmd0aChudW1iZXJMZW5ndGgpO1xuICBpZihudW1iZXJMZW5ndGggIT0gYnl0ZUxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gIHJldHVybiBieXRlTGVuZ3RoO1xufTtcblxuaWYoISR0eXBlZC5BQlYpe1xuICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpe1xuICAgIHZhciBieXRlTGVuZ3RoID0gdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpO1xuICAgIHRoaXMuX2IgICAgICAgPSBhcnJheUZpbGwuY2FsbChBcnJheShieXRlTGVuZ3RoKSwgMCk7XG4gICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gIH07XG5cbiAgJERhdGFWaWV3ID0gZnVuY3Rpb24gRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICREYXRhVmlldywgREFUQV9WSUVXKTtcbiAgICBhbkluc3RhbmNlKGJ1ZmZlciwgJEFycmF5QnVmZmVyLCBEQVRBX1ZJRVcpO1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBidWZmZXJbJExFTkdUSF1cbiAgICAgICwgb2Zmc2V0ICAgICAgID0gdG9JbnRlZ2VyKGJ5dGVPZmZzZXQpO1xuICAgIGlmKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gYnVmZmVyTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gYnVmZmVyTGVuZ3RoIC0gb2Zmc2V0IDogdG9MZW5ndGgoYnl0ZUxlbmd0aCk7XG4gICAgaWYob2Zmc2V0ICsgYnl0ZUxlbmd0aCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdGhpc1skQlVGRkVSXSA9IGJ1ZmZlcjtcbiAgICB0aGlzWyRPRkZTRVRdID0gb2Zmc2V0O1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gIGlmKERFU0NSSVBUT1JTKXtcbiAgICBhZGRHZXR0ZXIoJEFycmF5QnVmZmVyLCBCWVRFX0xFTkdUSCwgJ19sJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQlVGRkVSLCAnX2InKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX0xFTkdUSCwgJ19sJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9PRkZTRVQsICdfbycpO1xuICB9XG5cbiAgcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcbiAgICBnZXRJbnQ4OiBmdW5jdGlvbiBnZXRJbnQ4KGJ5dGVPZmZzZXQpe1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXSA8PCAyNCA+PiAyNDtcbiAgICB9LFxuICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KXtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF07XG4gICAgfSxcbiAgICBnZXRJbnQxNjogZnVuY3Rpb24gZ2V0SW50MTYoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIChieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF0pIDw8IDE2ID4+IDE2O1xuICAgIH0sXG4gICAgZ2V0VWludDE2OiBmdW5jdGlvbiBnZXRVaW50MTYoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcbiAgICB9LFxuICAgIGdldEludDMyOiBmdW5jdGlvbiBnZXRJbnQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSk7XG4gICAgfSxcbiAgICBnZXRVaW50MzI6IGZ1bmN0aW9uIGdldFVpbnQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSkgPj4+IDA7XG4gICAgfSxcbiAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSwgMjMsIDQpO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQ2NDogZnVuY3Rpb24gZ2V0RmxvYXQ2NChieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDUyLCA4KTtcbiAgICB9LFxuICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJOCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldEludDE2OiBmdW5jdGlvbiBzZXRJbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldFVpbnQxNjogZnVuY3Rpb24gc2V0VWludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0SW50MzI6IGZ1bmN0aW9uIHNldEludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDMyOiBmdW5jdGlvbiBzZXRVaW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRGbG9hdDMyOiBmdW5jdGlvbiBzZXRGbG9hdDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQ2NDogZnVuY3Rpb24gc2V0RmxvYXQ2NChieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBwYWNrRjY0LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgaWYoIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3ICRBcnJheUJ1ZmZlcjsgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoLjUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSl7XG4gICAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcbiAgICAgIHJldHVybiBuZXcgQmFzZUJ1ZmZlcih2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzKHRoaXMsIGxlbmd0aCkpO1xuICAgIH07XG4gICAgdmFyIEFycmF5QnVmZmVyUHJvdG8gPSAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXSA9IEJhc2VCdWZmZXJbUFJPVE9UWVBFXTtcbiAgICBmb3IodmFyIGtleXMgPSBnT1BOKEJhc2VCdWZmZXIpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7ICl7XG4gICAgICBpZighKChrZXkgPSBrZXlzW2orK10pIGluICRBcnJheUJ1ZmZlcikpaGlkZSgkQXJyYXlCdWZmZXIsIGtleSwgQmFzZUJ1ZmZlcltrZXldKTtcbiAgICB9O1xuICAgIGlmKCFMSUJSQVJZKUFycmF5QnVmZmVyUHJvdG8uY29uc3RydWN0b3IgPSAkQXJyYXlCdWZmZXI7XG4gIH1cbiAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG4gIHZhciB2aWV3ID0gbmV3ICREYXRhVmlldyhuZXcgJEFycmF5QnVmZmVyKDIpKVxuICAgICwgJHNldEludDggPSAkRGF0YVZpZXdbUFJPVE9UWVBFXS5zZXRJbnQ4O1xuICB2aWV3LnNldEludDgoMCwgMjE0NzQ4MzY0OCk7XG4gIHZpZXcuc2V0SW50OCgxLCAyMTQ3NDgzNjQ5KTtcbiAgaWYodmlldy5nZXRJbnQ4KDApIHx8ICF2aWV3LmdldEludDgoMSkpcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH0sXG4gICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG5zZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5zZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5oaWRlKCREYXRhVmlld1tQUk9UT1RZUEVdLCAkdHlwZWQuVklFVywgdHJ1ZSk7XG5leHBvcnRzW0FSUkFZX0JVRkZFUl0gPSAkQXJyYXlCdWZmZXI7XG5leHBvcnRzW0RBVEFfVklFV10gPSAkRGF0YVZpZXc7XG59LHtcIjEwNlwiOjEwNixcIjEwOFwiOjEwOCxcIjExM1wiOjExMyxcIjI4XCI6MjgsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjQwXCI6NDAsXCI1OFwiOjU4LFwiNlwiOjYsXCI2N1wiOjY3LFwiNzJcIjo3MixcIjg2XCI6ODYsXCI5XCI6OSxcIjkyXCI6OTJ9XSwxMTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCA9IF9kZXJlcV8oMzgpXG4gICwgaGlkZSAgID0gX2RlcmVxXyg0MClcbiAgLCB1aWQgICAgPSBfZGVyZXFfKDExNClcbiAgLCBUWVBFRCAgPSB1aWQoJ3R5cGVkX2FycmF5JylcbiAgLCBWSUVXICAgPSB1aWQoJ3ZpZXcnKVxuICAsIEFCViAgICA9ICEhKGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBnbG9iYWwuRGF0YVZpZXcpXG4gICwgQ09OU1RSID0gQUJWXG4gICwgaSA9IDAsIGwgPSA5LCBUeXBlZDtcblxudmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnMgPSAoXG4gICdJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheSdcbikuc3BsaXQoJywnKTtcblxud2hpbGUoaSA8IGwpe1xuICBpZihUeXBlZCA9IGdsb2JhbFtUeXBlZEFycmF5Q29uc3RydWN0b3JzW2krK11dKXtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVFlQRUQsIHRydWUpO1xuICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgfSBlbHNlIENPTlNUUiA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQUJWOiAgICBBQlYsXG4gIENPTlNUUjogQ09OU1RSLFxuICBUWVBFRDogIFRZUEVELFxuICBWSUVXOiAgIFZJRVdcbn07XG59LHtcIjExNFwiOjExNCxcIjM4XCI6MzgsXCI0MFwiOjQwfV0sMTE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xufSx7fV0sMTE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBnbG9iYWwgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgY29yZSAgICAgICAgICAgPSBfZGVyZXFfKDIzKVxuICAsIExJQlJBUlkgICAgICAgID0gX2RlcmVxXyg1OClcbiAgLCB3a3NFeHQgICAgICAgICA9IF9kZXJlcV8oMTE2KVxuICAsIGRlZmluZVByb3BlcnR5ID0gX2RlcmVxXyg2NykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTtcbn0se1wiMTE2XCI6MTE2LFwiMjNcIjoyMyxcIjM4XCI6MzgsXCI1OFwiOjU4LFwiNjdcIjo2N31dLDExNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5leHBvcnRzLmYgPSBfZGVyZXFfKDExNyk7XG59LHtcIjExN1wiOjExN31dLDExNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgc3RvcmUgICAgICA9IF9kZXJlcV8oOTQpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSBfZGVyZXFfKDExNClcbiAgLCBTeW1ib2wgICAgID0gX2RlcmVxXygzOCkuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG59LHtcIjExNFwiOjExNCxcIjM4XCI6MzgsXCI5NFwiOjk0fV0sMTE4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjbGFzc29mICAgPSBfZGVyZXFfKDE3KVxuICAsIElURVJBVE9SICA9IF9kZXJlcV8oMTE3KSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IF9kZXJlcV8oNTYpO1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDIzKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG59LHtcIjExN1wiOjExNyxcIjE3XCI6MTcsXCIyM1wiOjIzLFwiNTZcIjo1Nn1dLDExOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHJlICAgICA9IF9kZXJlcV8oODgpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCl7IHJldHVybiAkcmUoaXQpOyB9fSk7XG5cbn0se1wiMzJcIjozMixcIjg4XCI6ODh9XSwxMjA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2NvcHlXaXRoaW46IF9kZXJlcV8oOCl9KTtcblxuX2RlcmVxXyg1KSgnY29weVdpdGhpbicpO1xufSx7XCIzMlwiOjMyLFwiNVwiOjUsXCI4XCI6OH1dLDEyMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGV2ZXJ5ICA9IF9kZXJlcV8oMTIpKDQpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDk2KShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRldmVyeSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtmaWxsOiBfZGVyZXFfKDkpfSk7XG5cbl9kZXJlcV8oNSkoJ2ZpbGwnKTtcbn0se1wiMzJcIjozMixcIjVcIjo1LFwiOVwiOjl9XSwxMjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRmaWx0ZXIgPSBfZGVyZXFfKDEyKSgyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXyg5NikoW10uZmlsdGVyLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuNyAvIDE1LjQuNC4yMCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcbn0se1wiMTJcIjoxMixcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRmaW5kICAgPSBfZGVyZXFfKDEyKSg2KVxuICAsIEtFWSAgICAgPSAnZmluZEluZGV4J1xuICAsIGZvcmNlZCAgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5fZGVyZXFfKDUpKEtFWSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiNVwiOjV9XSwxMjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRmaW5kICAgPSBfZGVyZXFfKDEyKSg1KVxuICAsIEtFWSAgICAgPSAnZmluZCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5fZGVyZXFfKDUpKEtFWSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiNVwiOjV9XSwxMjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCAkZm9yRWFjaCA9IF9kZXJlcV8oMTIpKDApXG4gICwgU1RSSUNUICAgPSBfZGVyZXFfKDk2KShbXS5mb3JFYWNoLCB0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhU1RSSUNULCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMCAvIDE1LjQuNC4xOCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG59LHtcIjEyXCI6MTIsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEyNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgICAgPSBfZGVyZXFfKDI1KVxuICAsICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b09iamVjdCAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAsIGNhbGwgICAgICAgICAgID0gX2RlcmVxXyg1MSlcbiAgLCBpc0FycmF5SXRlciAgICA9IF9kZXJlcV8oNDYpXG4gICwgdG9MZW5ndGggICAgICAgPSBfZGVyZXFfKDEwOClcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IF9kZXJlcV8oMjQpXG4gICwgZ2V0SXRlckZuICAgICAgPSBfZGVyZXFfKDExOCk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9kZXJlcV8oNTQpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG59LHtcIjEwOFwiOjEwOCxcIjEwOVwiOjEwOSxcIjExOFwiOjExOCxcIjI0XCI6MjQsXCIyNVwiOjI1LFwiMzJcIjozMixcIjQ2XCI6NDYsXCI1MVwiOjUxLFwiNTRcIjo1NH1dLDEyODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgJGluZGV4T2YgICAgICA9IF9kZXJlcV8oMTEpKGZhbHNlKVxuICAsICRuYXRpdmUgICAgICAgPSBbXS5pbmRleE9mXG4gICwgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoTkVHQVRJVkVfWkVSTyB8fCAhX2RlcmVxXyg5NikoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG59LHtcIjExXCI6MTEsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEyOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHtpc0FycmF5OiBfZGVyZXFfKDQ3KX0pO1xufSx7XCIzMlwiOjMyLFwiNDdcIjo0N31dLDEzMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IF9kZXJlcV8oNSlcbiAgLCBzdGVwICAgICAgICAgICAgID0gX2RlcmVxXyg1NSlcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gX2RlcmVxXyg1NilcbiAgLCB0b0lPYmplY3QgICAgICAgID0gX2RlcmVxXygxMDcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oNTMpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xufSx7XCIxMDdcIjoxMDcsXCI1XCI6NSxcIjUzXCI6NTMsXCI1NVwiOjU1LFwiNTZcIjo1Nn1dLDEzMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmpvaW4oc2VwYXJhdG9yKVxudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9JT2JqZWN0ID0gX2RlcmVxXygxMDcpXG4gICwgYXJyYXlKb2luID0gW10uam9pbjtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIHN0cmluZ3NcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKF9kZXJlcV8oNDUpICE9IE9iamVjdCB8fCAhX2RlcmVxXyg5NikoYXJyYXlKb2luKSksICdBcnJheScsIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3Ipe1xuICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0b0lPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG59LHtcIjEwN1wiOjEwNyxcIjMyXCI6MzIsXCI0NVwiOjQ1LFwiOTZcIjo5Nn1dLDEzMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9JT2JqZWN0ICAgICA9IF9kZXJlcV8oMTA3KVxuICAsIHRvSW50ZWdlciAgICAgPSBfZGVyZXFfKDEwNilcbiAgLCB0b0xlbmd0aCAgICAgID0gX2RlcmVxXygxMDgpXG4gICwgJG5hdGl2ZSAgICAgICA9IFtdLmxhc3RJbmRleE9mXG4gICwgTkVHQVRJVkVfWkVSTyA9ICEhJG5hdGl2ZSAmJiAxIC8gWzFdLmxhc3RJbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIV9kZXJlcV8oOTYpKCRuYXRpdmUpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCA9IEBbKi0xXSAqLyl7XG4gICAgLy8gY29udmVydCAtMCB0byArMFxuICAgIGlmKE5FR0FUSVZFX1pFUk8pcmV0dXJuICRuYXRpdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwO1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QodGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IGxlbmd0aCAtIDE7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpO1xuICAgIGlmKGluZGV4IDwgMClpbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgIGZvcig7aW5kZXggPj0gMDsgaW5kZXgtLSlpZihpbmRleCBpbiBPKWlmKE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KXJldHVybiBpbmRleCB8fCAwO1xuICAgIHJldHVybiAtMTtcbiAgfVxufSk7XG59LHtcIjEwNlwiOjEwNixcIjEwN1wiOjEwNyxcIjEwOFwiOjEwOCxcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTMzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkbWFwICAgID0gX2RlcmVxXygxMikoMSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oOTYpKFtdLm1hcCwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE1IC8gMTUuNC40LjE5IEFycmF5LnByb3RvdHlwZS5tYXAoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pe1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IF9kZXJlcV8oMjQpO1xuXG4vLyBXZWJLaXQgQXJyYXkub2YgaXNuJ3QgZ2VuZXJpY1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBGKCl7fVxuICByZXR1cm4gIShBcnJheS5vZi5jYWxsKEYpIGluc3RhbmNlb2YgRik7XG59KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMyBBcnJheS5vZiggLi4uaXRlbXMpXG4gIG9mOiBmdW5jdGlvbiBvZigvKiAuLi5hcmdzICovKXtcbiAgICB2YXIgaW5kZXggID0gMFxuICAgICAgLCBhTGVuICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkoYUxlbik7XG4gICAgd2hpbGUoYUxlbiA+IGluZGV4KWNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGFMZW47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG59LHtcIjI0XCI6MjQsXCIzMlwiOjMyLFwiMzRcIjozNH1dLDEzNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHJlZHVjZSA9IF9kZXJlcV8oMTMpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDk2KShbXS5yZWR1Y2VSaWdodCwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuICB9XG59KTtcbn0se1wiMTNcIjoxMyxcIjMyXCI6MzIsXCI5NlwiOjk2fV0sMTM2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkcmVkdWNlID0gX2RlcmVxXygxMyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIV9kZXJlcV8oOTYpKFtdLnJlZHVjZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcbiAgfVxufSk7XG59LHtcIjEzXCI6MTMsXCIzMlwiOjMyLFwiOTZcIjo5Nn1dLDEzNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICA9IF9kZXJlcV8oMzIpXG4gICwgaHRtbCAgICAgICA9IF9kZXJlcV8oNDEpXG4gICwgY29mICAgICAgICA9IF9kZXJlcV8oMTgpXG4gICwgdG9JbmRleCAgICA9IF9kZXJlcV8oMTA1KVxuICAsIHRvTGVuZ3RoICAgPSBfZGVyZXFfKDEwOClcbiAgLCBhcnJheVNsaWNlID0gW10uc2xpY2U7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgaWYoaHRtbClhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG59KSwgJ0FycmF5Jywge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCl7XG4gICAgdmFyIGxlbiAgID0gdG9MZW5ndGgodGhpcy5sZW5ndGgpXG4gICAgICAsIGtsYXNzID0gY29mKHRoaXMpO1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kO1xuICAgIGlmKGtsYXNzID09ICdBcnJheScpcmV0dXJuIGFycmF5U2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcbiAgICB2YXIgc3RhcnQgID0gdG9JbmRleChiZWdpbiwgbGVuKVxuICAgICAgLCB1cFRvICAgPSB0b0luZGV4KGVuZCwgbGVuKVxuICAgICAgLCBzaXplICAgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpXG4gICAgICAsIGNsb25lZCA9IEFycmF5KHNpemUpXG4gICAgICAsIGkgICAgICA9IDA7XG4gICAgZm9yKDsgaSA8IHNpemU7IGkrKyljbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xuICAgICAgPyB0aGlzLmNoYXJBdChzdGFydCArIGkpXG4gICAgICA6IHRoaXNbc3RhcnQgKyBpXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59KTtcbn0se1wiMTA1XCI6MTA1LFwiMTA4XCI6MTA4LFwiMThcIjoxOCxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiNDFcIjo0MX1dLDEzODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHNvbWUgICA9IF9kZXJlcV8oMTIpKDMpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFfZGVyZXFfKDk2KShbXS5zb21lLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjMgLyAxNS40LjQuMTcgQXJyYXkucHJvdG90eXBlLnNvbWUoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRzb21lKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xufSx7XCIxMlwiOjEyLFwiMzJcIjozMixcIjk2XCI6OTZ9XSwxMzk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgYUZ1bmN0aW9uID0gX2RlcmVxXygzKVxuICAsIHRvT2JqZWN0ICA9IF9kZXJlcV8oMTA5KVxuICAsIGZhaWxzICAgICA9IF9kZXJlcV8oMzQpXG4gICwgJHNvcnQgICAgID0gW10uc29ydFxuICAsIHRlc3QgICAgICA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gSUU4LVxuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICAvLyBWOCBidWdcbiAgdGVzdC5zb3J0KG51bGwpO1xuICAvLyBPbGQgV2ViS2l0XG59KSB8fCAhX2RlcmVxXyg5NikoJHNvcnQpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjUgQXJyYXkucHJvdG90eXBlLnNvcnQoY29tcGFyZWZuKVxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG59LHtcIjEwOVwiOjEwOSxcIjNcIjozLFwiMzJcIjozMixcIjM0XCI6MzQsXCI5NlwiOjk2fV0sMTQwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oOTEpKCdBcnJheScpO1xufSx7XCI5MVwiOjkxfV0sMTQxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywge25vdzogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9fSk7XG59LHtcIjMyXCI6MzJ9XSwxNDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBmYWlscyAgID0gX2RlcmVxXygzNClcbiAgLCBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcblxudmFyIGx6ID0gZnVuY3Rpb24obnVtKXtcbiAgcmV0dXJuIG51bSA+IDkgPyBudW0gOiAnMCcgKyBudW07XG59O1xuXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBuZXcgRGF0ZSgtNWUxMyAtIDEpLnRvSVNPU3RyaW5nKCkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgbmV3IERhdGUoTmFOKS50b0lTT1N0cmluZygpO1xufSkpLCAnRGF0ZScsIHtcbiAgdG9JU09TdHJpbmc6IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCl7XG4gICAgaWYoIWlzRmluaXRlKGdldFRpbWUuY2FsbCh0aGlzKSkpdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gICAgdmFyIGQgPSB0aGlzXG4gICAgICAsIHkgPSBkLmdldFVUQ0Z1bGxZZWFyKClcbiAgICAgICwgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKClcbiAgICAgICwgcyA9IHkgPCAwID8gJy0nIDogeSA+IDk5OTkgPyAnKycgOiAnJztcbiAgICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXG4gICAgICAnLScgKyBseihkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIGx6KGQuZ2V0VVRDRGF0ZSgpKSArXG4gICAgICAnVCcgKyBseihkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgbHooZC5nZXRVVENNaW51dGVzKCkpICtcbiAgICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjM0XCI6MzR9XSwxNDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCB0b09iamVjdCAgICA9IF9kZXJlcV8oMTA5KVxuICAsIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMTApO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBuZXcgRGF0ZShOYU4pLnRvSlNPTigpICE9PSBudWxsIHx8IERhdGUucHJvdG90eXBlLnRvSlNPTi5jYWxsKHt0b0lTT1N0cmluZzogZnVuY3Rpb24oKXsgcmV0dXJuIDE7IH19KSAhPT0gMTtcbn0pLCAnRGF0ZScsIHtcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oa2V5KXtcbiAgICB2YXIgTyAgPSB0b09iamVjdCh0aGlzKVxuICAgICAgLCBwdiA9IHRvUHJpbWl0aXZlKE8pO1xuICAgIHJldHVybiB0eXBlb2YgcHYgPT0gJ251bWJlcicgJiYgIWlzRmluaXRlKHB2KSA/IG51bGwgOiBPLnRvSVNPU3RyaW5nKCk7XG4gIH1cbn0pO1xufSx7XCIxMDlcIjoxMDksXCIxMTBcIjoxMTAsXCIzMlwiOjMyLFwiMzRcIjozNH1dLDE0NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgVE9fUFJJTUlUSVZFID0gX2RlcmVxXygxMTcpKCd0b1ByaW1pdGl2ZScpXG4gICwgcHJvdG8gICAgICAgID0gRGF0ZS5wcm90b3R5cGU7XG5cbmlmKCEoVE9fUFJJTUlUSVZFIGluIHByb3RvKSlfZGVyZXFfKDQwKShwcm90bywgVE9fUFJJTUlUSVZFLCBfZGVyZXFfKDI2KSk7XG59LHtcIjExN1wiOjExNyxcIjI2XCI6MjYsXCI0MFwiOjQwfV0sMTQ1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBEYXRlUHJvdG8gICAgPSBEYXRlLnByb3RvdHlwZVxuICAsIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnXG4gICwgVE9fU1RSSU5HICAgID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyAgICA9IERhdGVQcm90b1tUT19TVFJJTkddXG4gICwgZ2V0VGltZSAgICAgID0gRGF0ZVByb3RvLmdldFRpbWU7XG5pZihuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKXtcbiAgX2RlcmVxXyg4NykoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAkdG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG59LHtcIjg3XCI6ODd9XSwxNDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMi4zLjIgLyAxNS4zLjQuNSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCh0aGlzQXJnLCBhcmdzLi4uKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdGdW5jdGlvbicsIHtiaW5kOiBfZGVyZXFfKDE2KX0pO1xufSx7XCIxNlwiOjE2LFwiMzJcIjozMn1dLDE0NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgICAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3NClcbiAgLCBIQVNfSU5TVEFOQ0UgICA9IF9kZXJlcV8oMTE3KSgnaGFzSW5zdGFuY2UnKVxuICAsIEZ1bmN0aW9uUHJvdG8gID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gMTkuMi4zLjYgRnVuY3Rpb24ucHJvdG90eXBlW0BAaGFzSW5zdGFuY2VdKFYpXG5pZighKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSlfZGVyZXFfKDY3KS5mKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwge3ZhbHVlOiBmdW5jdGlvbihPKXtcbiAgaWYodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xuICBpZighaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKXJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcbiAgd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKWlmKHRoaXMucHJvdG90eXBlID09PSBPKXJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59fSk7XG59LHtcIjExN1wiOjExNyxcIjQ5XCI6NDksXCI2N1wiOjY3LFwiNzRcIjo3NH1dLDE0ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZFAgICAgICAgICA9IF9kZXJlcV8oNjcpLmZcbiAgLCBjcmVhdGVEZXNjID0gX2RlcmVxXyg4NSlcbiAgLCBoYXMgICAgICAgID0gX2RlcmVxXygzOSlcbiAgLCBGUHJvdG8gICAgID0gRnVuY3Rpb24ucHJvdG90eXBlXG4gICwgbmFtZVJFICAgICA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopL1xuICAsIE5BTUUgICAgICAgPSAnbmFtZSc7XG5cbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgX2RlcmVxXygyOCkgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpe1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgLCBuYW1lID0gKCcnICsgdGhhdCkubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIGhhcyh0aGF0LCBOQU1FKSB8fCAhaXNFeHRlbnNpYmxlKHRoYXQpIHx8IGRQKHRoYXQsIE5BTUUsIGNyZWF0ZURlc2MoNSwgbmFtZSkpO1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xufSx7XCIyOFwiOjI4LFwiMzlcIjozOSxcIjY3XCI6NjcsXCI4NVwiOjg1fV0sMTQ5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSBfZGVyZXFfKDE5KTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSBfZGVyZXFfKDIyKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG59LHtcIjE5XCI6MTksXCIyMlwiOjIyfV0sMTUwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCBsb2cxcCAgID0gX2RlcmVxXyg2MClcbiAgLCBzcXJ0ICAgID0gTWF0aC5zcXJ0XG4gICwgJGFjb3NoICA9IE1hdGguYWNvc2g7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2hcbiAgLy8gVjggYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuICAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwXG4gIC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hY29zaChJbmZpbml0eSkgLT4gTmFOIFxuICAmJiAkYWNvc2goSW5maW5pdHkpID09IEluZmluaXR5XG4pLCAnTWF0aCcsIHtcbiAgYWNvc2g6IGZ1bmN0aW9uIGFjb3NoKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTZcbiAgICAgID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMlxuICAgICAgOiBsb2cxcCh4IC0gMSArIHNxcnQoeCAtIDEpICogc3FydCh4ICsgMSkpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjYwXCI6NjB9XSwxNTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRhc2luaCAgPSBNYXRoLmFzaW5oO1xuXG5mdW5jdGlvbiBhc2luaCh4KXtcbiAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xufVxuXG4vLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYXNpbmgoMCkgLT4gLTAgXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFzaW5oICYmIDEgLyAkYXNpbmgoMCkgPiAwKSwgJ01hdGgnLCB7YXNpbmg6IGFzaW5ofSk7XG59LHtcIjMyXCI6MzJ9XSwxNTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsICRhdGFuaCAgPSBNYXRoLmF0YW5oO1xuXG4vLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYXRhbmgoLTApIC0+IDAgXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGF0YW5oICYmIDEgLyAkYXRhbmgoLTApIDwgMCksICdNYXRoJywge1xuICBhdGFuaDogZnVuY3Rpb24gYXRhbmgoeCl7XG4gICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogTWF0aC5sb2coKDEgKyB4KSAvICgxIC0geCkpIC8gMjtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgc2lnbiAgICA9IF9kZXJlcV8oNjEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNicnQ6IGZ1bmN0aW9uIGNicnQoeCl7XG4gICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNjFcIjo2MX1dLDE1NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjbHozMjogZnVuY3Rpb24gY2x6MzIoeCl7XG4gICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMSAtIE1hdGguZmxvb3IoTWF0aC5sb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE1NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTIgTWF0aC5jb3NoKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNvc2g6IGZ1bmN0aW9uIGNvc2goeCl7XG4gICAgcmV0dXJuIChleHAoeCA9ICt4KSArIGV4cCgteCkpIC8gMjtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkZXhwbTEgID0gX2RlcmVxXyg1OSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCRleHBtMSAhPSBNYXRoLmV4cG0xKSwgJ01hdGgnLCB7ZXhwbTE6ICRleHBtMX0pO1xufSx7XCIzMlwiOjMyLFwiNTlcIjo1OX1dLDE1NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIHNpZ24gICAgICA9IF9kZXJlcV8oNjEpXG4gICwgcG93ICAgICAgID0gTWF0aC5wb3dcbiAgLCBFUFNJTE9OICAgPSBwb3coMiwgLTUyKVxuICAsIEVQU0lMT04zMiA9IHBvdygyLCAtMjMpXG4gICwgTUFYMzIgICAgID0gcG93KDIsIDEyNykgKiAoMiAtIEVQU0lMT04zMilcbiAgLCBNSU4zMiAgICAgPSBwb3coMiwgLTEyNik7XG5cbnZhciByb3VuZFRpZXNUb0V2ZW4gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGZyb3VuZDogZnVuY3Rpb24gZnJvdW5kKHgpe1xuICAgIHZhciAkYWJzICA9IE1hdGguYWJzKHgpXG4gICAgICAsICRzaWduID0gc2lnbih4KVxuICAgICAgLCBhLCByZXN1bHQ7XG4gICAgaWYoJGFicyA8IE1JTjMyKXJldHVybiAkc2lnbiAqIHJvdW5kVGllc1RvRXZlbigkYWJzIC8gTUlOMzIgLyBFUFNJTE9OMzIpICogTUlOMzIgKiBFUFNJTE9OMzI7XG4gICAgYSA9ICgxICsgRVBTSUxPTjMyIC8gRVBTSUxPTikgKiAkYWJzO1xuICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAgIGlmKHJlc3VsdCA+IE1BWDMyIHx8IHJlc3VsdCAhPSByZXN1bHQpcmV0dXJuICRzaWduICogSW5maW5pdHk7XG4gICAgcmV0dXJuICRzaWduICogcmVzdWx0O1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjYxXCI6NjF9XSwxNTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgYWJzICAgICA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgc3VtICA9IDBcbiAgICAgICwgaSAgICA9IDBcbiAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbGFyZyA9IDBcbiAgICAgICwgYXJnLCBkaXY7XG4gICAgd2hpbGUoaSA8IGFMZW4pe1xuICAgICAgYXJnID0gYWJzKGFyZ3VtZW50c1tpKytdKTtcbiAgICAgIGlmKGxhcmcgPCBhcmcpe1xuICAgICAgICBkaXYgID0gbGFyZyAvIGFyZztcbiAgICAgICAgc3VtICA9IHN1bSAqIGRpdiAqIGRpdiArIDE7XG4gICAgICAgIGxhcmcgPSBhcmc7XG4gICAgICB9IGVsc2UgaWYoYXJnID4gMCl7XG4gICAgICAgIGRpdiAgPSBhcmcgLyBsYXJnO1xuICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuICAgICAgfSBlbHNlIHN1bSArPSBhcmc7XG4gICAgfVxuICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE1OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMTggTWF0aC5pbXVsKHgsIHkpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGltdWwgICA9IE1hdGguaW11bDtcblxuLy8gc29tZSBXZWJLaXQgdmVyc2lvbnMgZmFpbHMgd2l0aCBiaWcgbnVtYmVycywgc29tZSBoYXMgd3JvbmcgYXJpdHlcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xufSksICdNYXRoJywge1xuICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgeG4gPSAreFxuICAgICAgLCB5biA9ICt5XG4gICAgICAsIHhsID0gVUlOVDE2ICYgeG5cbiAgICAgICwgeWwgPSBVSU5UMTYgJiB5bjtcbiAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjM0XCI6MzR9XSwxNjA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHgpe1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMDtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtsb2cxcDogX2RlcmVxXyg2MCl9KTtcbn0se1wiMzJcIjozMixcIjYwXCI6NjB9XSwxNjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjIyIE1hdGgubG9nMih4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cyOiBmdW5jdGlvbiBsb2cyKHgpe1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4yO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDE2MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7c2lnbjogX2RlcmVxXyg2MSl9KTtcbn0se1wiMzJcIjozMixcIjYxXCI6NjF9XSwxNjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKVxuICAsIGV4cG0xICAgPSBfZGVyZXFfKDU5KVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuLy8gVjggbmVhciBDaHJvbWl1bSAzOCBoYXMgYSBwcm9ibGVtIHdpdGggdmVyeSBzbWFsbCBudW1iZXJzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhTWF0aC5zaW5oKC0yZS0xNykgIT0gLTJlLTE3O1xufSksICdNYXRoJywge1xuICBzaW5oOiBmdW5jdGlvbiBzaW5oKHgpe1xuICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMVxuICAgICAgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMlxuICAgICAgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChNYXRoLkUgLyAyKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCIzNFwiOjM0LFwiNTlcIjo1OX1dLDE2NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4yLjIuMzMgTWF0aC50YW5oKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgZXhwbTEgICA9IF9kZXJlcV8oNTkpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRhbmg6IGZ1bmN0aW9uIHRhbmgoeCl7XG4gICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXG4gICAgICAsIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI1OVwiOjU5fV0sMTY2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjIuMi4zNCBNYXRoLnRydW5jKHgpXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyhpdCl7XG4gICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMTY3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgaGFzICAgICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIGNvZiAgICAgICAgICAgICAgID0gX2RlcmVxXygxOClcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IF9kZXJlcV8oNDMpXG4gICwgdG9QcmltaXRpdmUgICAgICAgPSBfZGVyZXFfKDExMClcbiAgLCBmYWlscyAgICAgICAgICAgICA9IF9kZXJlcV8oMzQpXG4gICwgZ09QTiAgICAgICAgICAgICAgPSBfZGVyZXFfKDcyKS5mXG4gICwgZ09QRCAgICAgICAgICAgICAgPSBfZGVyZXFfKDcwKS5mXG4gICwgZFAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDY3KS5mXG4gICwgJHRyaW0gICAgICAgICAgICAgPSBfZGVyZXFfKDEwMikudHJpbVxuICAsIE5VTUJFUiAgICAgICAgICAgID0gJ051bWJlcidcbiAgLCAkTnVtYmVyICAgICAgICAgICA9IGdsb2JhbFtOVU1CRVJdXG4gICwgQmFzZSAgICAgICAgICAgICAgPSAkTnVtYmVyXG4gICwgcHJvdG8gICAgICAgICAgICAgPSAkTnVtYmVyLnByb3RvdHlwZVxuICAvLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbiAgLCBCUk9LRU5fQ09GICAgICAgICA9IGNvZihfZGVyZXFfKDY2KShwcm90bykpID09IE5VTUJFUlxuICAsIFRSSU0gICAgICAgICAgICAgID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24oYXJndW1lbnQpe1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICBpZih0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMil7XG4gICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMClcbiAgICAgICwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuICAgIGlmKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpe1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZihmaXJzdCA9PT0gNDgpe1xuICAgICAgc3dpdGNoKGl0LmNoYXJDb2RlQXQoMSkpe1xuICAgICAgICBjYXNlIDY2IDogY2FzZSA5OCAgOiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQgOiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZm9yKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKXJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbmlmKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSl7XG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpe1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlXG4gICAgICAsIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uKCl7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IodmFyIGtleXMgPSBfZGVyZXFfKDI4KSA/IGdPUE4oQmFzZSkgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKXtcbiAgICBpZihoYXMoQmFzZSwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcygkTnVtYmVyLCBrZXkpKXtcbiAgICAgIGRQKCROdW1iZXIsIGtleSwgZ09QRChCYXNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuICBfZGVyZXFfKDg3KShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG59LHtcIjEwMlwiOjEwMixcIjExMFwiOjExMCxcIjE4XCI6MTgsXCIyOFwiOjI4LFwiMzRcIjozNCxcIjM4XCI6MzgsXCIzOVwiOjM5LFwiNDNcIjo0MyxcIjY2XCI6NjYsXCI2N1wiOjY3LFwiNzBcIjo3MCxcIjcyXCI6NzIsXCI4N1wiOjg3fV0sMTY4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtFUFNJTE9OOiBNYXRoLnBvdygyLCAtNTIpfSk7XG59LHtcIjMyXCI6MzJ9XSwxNjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsIF9pc0Zpbml0ZSA9IF9kZXJlcV8oMzgpLmlzRmluaXRlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNGaW5pdGU6IGZ1bmN0aW9uIGlzRmluaXRlKGl0KXtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiMzhcIjozOH1dLDE3MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge2lzSW50ZWdlcjogX2RlcmVxXyg0OCl9KTtcbn0se1wiMzJcIjozMixcIjQ4XCI6NDh9XSwxNzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKXtcbiAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwxNzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgaXNJbnRlZ2VyID0gX2RlcmVxXyg0OClcbiAgLCBhYnMgICAgICAgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKXtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI0OFwiOjQ4fV0sMTczOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmfSk7XG59LHtcIjMyXCI6MzJ9XSwxNzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZn0pO1xufSx7XCIzMlwiOjMyfV0sMTc1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgJHBhcnNlRmxvYXQgPSBfZGVyZXFfKDgxKTtcbi8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcbn0se1wiMzJcIjozMixcIjgxXCI6ODF9XSwxNzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgJHBhcnNlSW50ID0gX2RlcmVxXyg4Mik7XG4vLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VJbnQgIT0gJHBhcnNlSW50KSwgJ051bWJlcicsIHtwYXJzZUludDogJHBhcnNlSW50fSk7XG59LHtcIjMyXCI6MzIsXCI4MlwiOjgyfV0sMTc3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvSW50ZWdlciAgICA9IF9kZXJlcV8oMTA2KVxuICAsIGFOdW1iZXJWYWx1ZSA9IF9kZXJlcV8oNClcbiAgLCByZXBlYXQgICAgICAgPSBfZGVyZXFfKDEwMSlcbiAgLCAkdG9GaXhlZCAgICAgPSAxLi50b0ZpeGVkXG4gICwgZmxvb3IgICAgICAgID0gTWF0aC5mbG9vclxuICAsIGRhdGEgICAgICAgICA9IFswLCAwLCAwLCAwLCAwLCAwXVxuICAsIEVSUk9SICAgICAgICA9ICdOdW1iZXIudG9GaXhlZDogaW5jb3JyZWN0IGludm9jYXRpb24hJ1xuICAsIFpFUk8gICAgICAgICA9ICcwJztcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24obiwgYyl7XG4gIHZhciBpICA9IC0xXG4gICAgLCBjMiA9IGM7XG4gIHdoaWxlKCsraSA8IDYpe1xuICAgIGMyICs9IG4gKiBkYXRhW2ldO1xuICAgIGRhdGFbaV0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcbnZhciBkaXZpZGUgPSBmdW5jdGlvbihuKXtcbiAgdmFyIGkgPSA2XG4gICAgLCBjID0gMDtcbiAgd2hpbGUoLS1pID49IDApe1xuICAgIGMgKz0gZGF0YVtpXTtcbiAgICBkYXRhW2ldID0gZmxvb3IoYyAvIG4pO1xuICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICB9XG59O1xudmFyIG51bVRvU3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgdmFyIGkgPSA2XG4gICAgLCBzID0gJyc7XG4gIHdoaWxlKC0taSA+PSAwKXtcbiAgICBpZihzICE9PSAnJyB8fCBpID09PSAwIHx8IGRhdGFbaV0gIT09IDApe1xuICAgICAgdmFyIHQgPSBTdHJpbmcoZGF0YVtpXSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKFpFUk8sIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG52YXIgcG93ID0gZnVuY3Rpb24oeCwgbiwgYWNjKXtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcbnZhciBsb2cgPSBmdW5jdGlvbih4KXtcbiAgdmFyIG4gID0gMFxuICAgICwgeDIgPSB4O1xuICB3aGlsZSh4MiA+PSA0MDk2KXtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUoeDIgPj0gMil7XG4gICAgbiAgKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoISEkdG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4Li50b0ZpeGVkKDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCdcbikgfHwgIV9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gICR0b0ZpeGVkLmNhbGwoe30pO1xufSkpLCAnTnVtYmVyJywge1xuICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKXtcbiAgICB2YXIgeCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCBFUlJPUilcbiAgICAgICwgZiA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cylcbiAgICAgICwgcyA9ICcnXG4gICAgICAsIG0gPSBaRVJPXG4gICAgICAsIGUsIHosIGosIGs7XG4gICAgaWYoZiA8IDAgfHwgZiA+IDIwKXRocm93IFJhbmdlRXJyb3IoRVJST1IpO1xuICAgIGlmKHggIT0geClyZXR1cm4gJ05hTic7XG4gICAgaWYoeCA8PSAtMWUyMSB8fCB4ID49IDFlMjEpcmV0dXJuIFN0cmluZyh4KTtcbiAgICBpZih4IDwgMCl7XG4gICAgICBzID0gJy0nO1xuICAgICAgeCA9IC14O1xuICAgIH1cbiAgICBpZih4ID4gMWUtMjEpe1xuICAgICAgZSA9IGxvZyh4ICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IHggKiBwb3coMiwgLWUsIDEpIDogeCAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZihlID4gMCl7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBqID0gZjtcbiAgICAgICAgd2hpbGUoaiA+PSA3KXtcbiAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZShqID49IDIzKXtcbiAgICAgICAgICBkaXZpZGUoMSA8PCAyMyk7XG4gICAgICAgICAgaiAtPSAyMztcbiAgICAgICAgfVxuICAgICAgICBkaXZpZGUoMSA8PCBqKTtcbiAgICAgICAgbXVsdGlwbHkoMSwgMSk7XG4gICAgICAgIGRpdmlkZSgyKTtcbiAgICAgICAgbSA9IG51bVRvU3RyaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseSgwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoMSA8PCAtZSwgMCk7XG4gICAgICAgIG0gPSBudW1Ub1N0cmluZygpICsgcmVwZWF0LmNhbGwoWkVSTywgZik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGYgPiAwKXtcbiAgICAgIGsgPSBtLmxlbmd0aDtcbiAgICAgIG0gPSBzICsgKGsgPD0gZiA/ICcwLicgKyByZXBlYXQuY2FsbChaRVJPLCBmIC0gaykgKyBtIDogbS5zbGljZSgwLCBrIC0gZikgKyAnLicgKyBtLnNsaWNlKGsgLSBmKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBzICsgbTtcbiAgICB9IHJldHVybiBtO1xuICB9XG59KTtcbn0se1wiMTAxXCI6MTAxLFwiMTA2XCI6MTA2LFwiMzJcIjozMixcIjM0XCI6MzQsXCI0XCI6NH1dLDE3ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgID0gX2RlcmVxXygzMilcbiAgLCAkZmFpbHMgICAgICAgPSBfZGVyZXFfKDM0KVxuICAsIGFOdW1iZXJWYWx1ZSA9IF9kZXJlcV8oNClcbiAgLCAkdG9QcmVjaXNpb24gPSAxLi50b1ByZWNpc2lvbjtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIElFNy1cbiAgcmV0dXJuICR0b1ByZWNpc2lvbi5jYWxsKDEsIHVuZGVmaW5lZCkgIT09ICcxJztcbn0pIHx8ICEkZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgJHRvUHJlY2lzaW9uLmNhbGwoe30pO1xufSkpLCAnTnVtYmVyJywge1xuICB0b1ByZWNpc2lvbjogZnVuY3Rpb24gdG9QcmVjaXNpb24ocHJlY2lzaW9uKXtcbiAgICB2YXIgdGhhdCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCAnTnVtYmVyI3RvUHJlY2lzaW9uOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgICByZXR1cm4gcHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyAkdG9QcmVjaXNpb24uY2FsbCh0aGF0KSA6ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQsIHByZWNpc2lvbik7IFxuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjM0XCI6MzQsXCI0XCI6NH1dLDE3OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiBfZGVyZXFfKDY1KX0pO1xufSx7XCIzMlwiOjMyLFwiNjVcIjo2NX1dLDE4MDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogX2RlcmVxXyg2Nil9KTtcbn0se1wiMzJcIjozMixcIjY2XCI6NjZ9XSwxODE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcbi8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMjgpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnRpZXM6IF9kZXJlcV8oNjgpfSk7XG59LHtcIjI4XCI6MjgsXCIzMlwiOjMyLFwiNjhcIjo2OH1dLDE4MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMjgpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiBfZGVyZXFfKDY3KS5mfSk7XG59LHtcIjI4XCI6MjgsXCIzMlwiOjMyLFwiNjdcIjo2N31dLDE4MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIG1ldGEgICAgID0gX2RlcmVxXyg2Mikub25GcmVlemU7XG5cbl9kZXJlcV8oNzgpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xufSx7XCI0OVwiOjQ5LFwiNjJcIjo2MixcIjc4XCI6Nzh9XSwxODQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDEwNylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX2RlcmVxXyg3MCkuZjtcblxuX2RlcmVxXyg3OCkoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xufSx7XCIxMDdcIjoxMDcsXCI3MFwiOjcwLFwiNzhcIjo3OH1dLDE4NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuX2RlcmVxXyg3OCkoJ2dldE93blByb3BlcnR5TmFtZXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gX2RlcmVxXyg3MSkuZjtcbn0pO1xufSx7XCI3MVwiOjcxLFwiNzhcIjo3OH1dLDE4NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSBfZGVyZXFfKDEwOSlcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSBfZGVyZXFfKDc0KTtcblxuX2RlcmVxXyg3OCkoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbn0se1wiMTA5XCI6MTA5LFwiNzRcIjo3NCxcIjc4XCI6Nzh9XSwxODc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IF9kZXJlcV8oNDkpO1xuXG5fZGVyZXFfKDc4KSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24oJGlzRXh0ZW5zaWJsZSl7XG4gIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gIH07XG59KTtcbn0se1wiNDlcIjo0OSxcIjc4XCI6Nzh9XSwxODg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSk7XG5cbl9kZXJlcV8oNzgpKCdpc0Zyb3plbicsIGZ1bmN0aW9uKCRpc0Zyb3plbil7XG4gIHJldHVybiBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0Zyb3plbiA/ICRpc0Zyb3plbihpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcbn0se1wiNDlcIjo0OSxcIjc4XCI6Nzh9XSwxODk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjEzIE9iamVjdC5pc1NlYWxlZChPKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSk7XG5cbl9kZXJlcV8oNzgpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uKCRpc1NlYWxlZCl7XG4gIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc1NlYWxlZCA/ICRpc1NlYWxlZChpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcbn0se1wiNDlcIjo0OSxcIjc4XCI6Nzh9XSwxOTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtpczogX2RlcmVxXyg4OSl9KTtcbn0se1wiMzJcIjozMixcIjg5XCI6ODl9XSwxOTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSBfZGVyZXFfKDEwOSlcbiAgLCAka2V5cyAgICA9IF9kZXJlcV8oNzYpO1xuXG5fZGVyZXFfKDc4KSgna2V5cycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xufSx7XCIxMDlcIjoxMDksXCI3NlwiOjc2LFwiNzhcIjo3OH1dLDE5MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAxOS4xLjIuMTUgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKE8pXG52YXIgaXNPYmplY3QgPSBfZGVyZXFfKDQ5KVxuICAsIG1ldGEgICAgID0gX2RlcmVxXyg2Mikub25GcmVlemU7XG5cbl9kZXJlcV8oNzgpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uKCRwcmV2ZW50RXh0ZW5zaW9ucyl7XG4gIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcbn0se1wiNDlcIjo0OSxcIjYyXCI6NjIsXCI3OFwiOjc4fV0sMTkzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDE5LjEuMi4xNyBPYmplY3Quc2VhbChPKVxudmFyIGlzT2JqZWN0ID0gX2RlcmVxXyg0OSlcbiAgLCBtZXRhICAgICA9IF9kZXJlcV8oNjIpLm9uRnJlZXplO1xuXG5fZGVyZXFfKDc4KSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xufSx7XCI0OVwiOjQ5LFwiNjJcIjo2MixcIjc4XCI6Nzh9XSwxOTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogX2RlcmVxXyg5MCkuc2V0fSk7XG59LHtcIjMyXCI6MzIsXCI5MFwiOjkwfV0sMTk1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSBfZGVyZXFfKDE3KVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbX2RlcmVxXygxMTcpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICBfZGVyZXFfKDg3KShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG59LHtcIjExN1wiOjExNyxcIjE3XCI6MTcsXCI4N1wiOjg3fV0sMTk2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgJHBhcnNlRmxvYXQgPSBfZGVyZXFfKDgxKTtcbi8vIDE4LjIuNCBwYXJzZUZsb2F0KHN0cmluZylcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcbn0se1wiMzJcIjozMixcIjgxXCI6ODF9XSwxOTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgJHBhcnNlSW50ID0gX2RlcmVxXyg4Mik7XG4vLyAxOC4yLjUgcGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlSW50ICE9ICRwYXJzZUludCksIHtwYXJzZUludDogJHBhcnNlSW50fSk7XG59LHtcIjMyXCI6MzIsXCI4MlwiOjgyfV0sMTk4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSBfZGVyZXFfKDU4KVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gX2RlcmVxXygyNSlcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSBfZGVyZXFfKDE3KVxuICAsICRleHBvcnQgICAgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gX2RlcmVxXyg0OSlcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSBfZGVyZXFfKDMpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gX2RlcmVxXyg2KVxuICAsIGZvck9mICAgICAgICAgICAgICA9IF9kZXJlcV8oMzcpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gX2RlcmVxXyg5NSlcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSBfZGVyZXFfKDEwNCkuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gX2RlcmVxXyg2NCkoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW19kZXJlcV8oMTE3KSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IF9kZXJlcV8oODYpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5fZGVyZXFfKDkyKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5fZGVyZXFfKDkxKShQUk9NSVNFKTtcbldyYXBwZXIgPSBfZGVyZXFfKDIzKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiBfZGVyZXFfKDU0KShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbn0se1wiMTA0XCI6MTA0LFwiMTE3XCI6MTE3LFwiMTdcIjoxNyxcIjIzXCI6MjMsXCIyNVwiOjI1LFwiM1wiOjMsXCIzMlwiOjMyLFwiMzdcIjozNyxcIjM4XCI6MzgsXCI0OVwiOjQ5LFwiNTRcIjo1NCxcIjU4XCI6NTgsXCI2XCI6NixcIjY0XCI6NjQsXCI4NlwiOjg2LFwiOTFcIjo5MSxcIjkyXCI6OTIsXCI5NVwiOjk1fV0sMTk5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMSBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KVxudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgYUZ1bmN0aW9uID0gX2RlcmVxXygzKVxuICAsIGFuT2JqZWN0ICA9IF9kZXJlcV8oNylcbiAgLCByQXBwbHkgICAgPSAoX2RlcmVxXygzOCkuUmVmbGVjdCB8fCB7fSkuYXBwbHlcbiAgLCBmQXBwbHkgICAgPSBGdW5jdGlvbi5hcHBseTtcbi8vIE1TIEVkZ2UgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhX2RlcmVxXygzNCkoZnVuY3Rpb24oKXtcbiAgckFwcGx5KGZ1bmN0aW9uKCl7fSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCl7XG4gICAgdmFyIFQgPSBhRnVuY3Rpb24odGFyZ2V0KVxuICAgICAgLCBMID0gYW5PYmplY3QoYXJndW1lbnRzTGlzdCk7XG4gICAgcmV0dXJuIHJBcHBseSA/IHJBcHBseShULCB0aGlzQXJndW1lbnQsIEwpIDogZkFwcGx5LmNhbGwoVCwgdGhpc0FyZ3VtZW50LCBMKTtcbiAgfVxufSk7XG59LHtcIjNcIjozLFwiMzJcIjozMixcIjM0XCI6MzQsXCIzOFwiOjM4LFwiN1wiOjd9XSwyMDA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxudmFyICRleHBvcnQgICAgPSBfZGVyZXFfKDMyKVxuICAsIGNyZWF0ZSAgICAgPSBfZGVyZXFfKDY2KVxuICAsIGFGdW5jdGlvbiAgPSBfZGVyZXFfKDMpXG4gICwgYW5PYmplY3QgICA9IF9kZXJlcV8oNylcbiAgLCBpc09iamVjdCAgID0gX2RlcmVxXyg0OSlcbiAgLCBmYWlscyAgICAgID0gX2RlcmVxXygzNClcbiAgLCBiaW5kICAgICAgID0gX2RlcmVxXygxNilcbiAgLCByQ29uc3RydWN0ID0gKF9kZXJlcV8oMzgpLlJlZmxlY3QgfHwge30pLmNvbnN0cnVjdDtcblxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBGKCl7fVxuICByZXR1cm4gIShyQ29uc3RydWN0KGZ1bmN0aW9uKCl7fSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KTtcbnZhciBBUkdTX0JVRyA9ICFmYWlscyhmdW5jdGlvbigpe1xuICByQ29uc3RydWN0KGZ1bmN0aW9uKCl7fSk7XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUcpLCAnUmVmbGVjdCcsIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qLCBuZXdUYXJnZXQqLyl7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgYW5PYmplY3QoYXJncyk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYoQVJHU19CVUcgJiYgIU5FV19UQVJHRVRfQlVHKXJldHVybiByQ29uc3RydWN0KFRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTtcbiAgICBpZihUYXJnZXQgPT0gbmV3VGFyZ2V0KXtcbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG4gICAgICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0O1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2VcbiAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcbiAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSk7XG4gICAgfVxuICAgIC8vIHdpdGggYWx0ZXJlZCBuZXdUYXJnZXQsIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGNvbnN0cnVjdG9yc1xuICAgIHZhciBwcm90byAgICA9IG5ld1RhcmdldC5wcm90b3R5cGVcbiAgICAgICwgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxuICAgICAgLCByZXN1bHQgICA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfVxufSk7XG59LHtcIjE2XCI6MTYsXCIzXCI6MyxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjQ5XCI6NDksXCI2NlwiOjY2LFwiN1wiOjd9XSwyMDE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcbnZhciBkUCAgICAgICAgICA9IF9kZXJlcV8oNjcpXG4gICwgJGV4cG9ydCAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGFuT2JqZWN0ICAgID0gX2RlcmVxXyg3KVxuICAsIHRvUHJpbWl0aXZlID0gX2RlcmVxXygxMTApO1xuXG4vLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZFAuZih7fSwgMSwge3ZhbHVlOiAxfSksIDEsIHt2YWx1ZTogMn0pO1xufSksICdSZWZsZWN0Jywge1xuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKHByb3BlcnR5S2V5LCB0cnVlKTtcbiAgICBhbk9iamVjdChhdHRyaWJ1dGVzKTtcbiAgICB0cnkge1xuICAgICAgZFAuZih0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcbn0se1wiMTEwXCI6MTEwLFwiMzJcIjozMixcIjM0XCI6MzQsXCI2N1wiOjY3LFwiN1wiOjd9XSwyMDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgZ09QRCAgICAgPSBfZGVyZXFfKDcwKS5mXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICB2YXIgZGVzYyA9IGdPUEQoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiN1wiOjcsXCI3MFwiOjcwfV0sMjAzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcbnZhciBFbnVtZXJhdGUgPSBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBhbk9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHZhciBrZXlzID0gdGhpcy5fayA9IFtdICAgICAgIC8vIGtleXNcbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBpdGVyYXRlZClrZXlzLnB1c2goa2V5KTtcbn07XG5fZGVyZXFfKDUyKShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgICAsIGtleXMgPSB0aGF0Ll9rXG4gICAgLCBrZXk7XG4gIGRvIHtcbiAgICBpZih0aGF0Ll9pID49IGtleXMubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIH0gd2hpbGUoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG4gIHJldHVybiB7dmFsdWU6IGtleSwgZG9uZTogZmFsc2V9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KXtcbiAgICByZXR1cm4gbmV3IEVudW1lcmF0ZSh0YXJnZXQpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjUyXCI6NTIsXCI3XCI6N31dLDIwNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciBnT1BEICAgICA9IF9kZXJlcV8oNzApXG4gICwgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsIGFuT2JqZWN0ID0gX2RlcmVxXyg3KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICByZXR1cm4gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3XCI6NyxcIjcwXCI6NzB9XSwyMDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxudmFyICRleHBvcnQgID0gX2RlcmVxXygzMilcbiAgLCBnZXRQcm90byA9IF9kZXJlcV8oNzQpXG4gICwgYW5PYmplY3QgPSBfZGVyZXFfKDcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpe1xuICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3XCI6NyxcIjc0XCI6NzR9XSwyMDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxudmFyIGdPUEQgICAgICAgICAgID0gX2RlcmVxXyg3MClcbiAgLCBnZXRQcm90b3R5cGVPZiA9IF9kZXJlcV8oNzQpXG4gICwgaGFzICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBpc09iamVjdCAgICAgICA9IF9kZXJlcV8oNDkpXG4gICwgYW5PYmplY3QgICAgICAgPSBfZGVyZXFfKDcpO1xuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleS8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cbiAgICAsIGRlc2MsIHByb3RvO1xuICBpZihhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcilyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYoZGVzYyA9IGdPUEQuZih0YXJnZXQsIHByb3BlcnR5S2V5KSlyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgPyBkZXNjLnZhbHVlXG4gICAgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSlyZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7Z2V0OiBnZXR9KTtcbn0se1wiMzJcIjozMixcIjM5XCI6MzksXCI0OVwiOjQ5LFwiN1wiOjcsXCI3MFwiOjcwLFwiNzRcIjo3NH1dLDIwNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwyMDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgYW5PYmplY3QgICAgICA9IF9kZXJlcV8oNylcbiAgLCAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjdcIjo3fV0sMjA5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtvd25LZXlzOiBfZGVyZXFfKDgwKX0pO1xufSx7XCIzMlwiOjMyLFwiODBcIjo4MH1dLDIxMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxudmFyICRleHBvcnQgICAgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgYW5PYmplY3QgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHRyeSB7XG4gICAgICBpZigkcHJldmVudEV4dGVuc2lvbnMpJHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3XCI6N31dLDIxMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgc2V0UHJvdG8gPSBfZGVyZXFfKDkwKTtcblxuaWYoc2V0UHJvdG8pJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90byl7XG4gICAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XG4gICAgdHJ5IHtcbiAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjkwXCI6OTB9XSwyMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcbnZhciBkUCAgICAgICAgICAgICA9IF9kZXJlcV8oNjcpXG4gICwgZ09QRCAgICAgICAgICAgPSBfZGVyZXFfKDcwKVxuICAsIGdldFByb3RvdHlwZU9mID0gX2RlcmVxXyg3NClcbiAgLCBoYXMgICAgICAgICAgICA9IF9kZXJlcV8oMzkpXG4gICwgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIGNyZWF0ZURlc2MgICAgID0gX2RlcmVxXyg4NSlcbiAgLCBhbk9iamVjdCAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBpc09iamVjdCAgICAgICA9IF9kZXJlcV8oNDkpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM11cbiAgICAsIG93bkRlc2MgID0gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxuICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcbiAgaWYoIW93bkRlc2Mpe1xuICAgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpe1xuICAgICAgcmV0dXJuIHNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG4gIH1cbiAgaWYoaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcbiAgICBpZihvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSBnT1BELmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5KSB8fCBjcmVhdGVEZXNjKDApO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XG4gICAgZFAuZihyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtzZXQ6IHNldH0pO1xufSx7XCIzMlwiOjMyLFwiMzlcIjozOSxcIjQ5XCI6NDksXCI2N1wiOjY3LFwiN1wiOjcsXCI3MFwiOjcwLFwiNzRcIjo3NCxcIjg1XCI6ODV9XSwyMTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGdsb2JhbCAgICAgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IF9kZXJlcV8oNDMpXG4gICwgZFAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDY3KS5mXG4gICwgZ09QTiAgICAgICAgICAgICAgPSBfZGVyZXFfKDcyKS5mXG4gICwgaXNSZWdFeHAgICAgICAgICAgPSBfZGVyZXFfKDUwKVxuICAsICRmbGFncyAgICAgICAgICAgID0gX2RlcmVxXygzNilcbiAgLCAkUmVnRXhwICAgICAgICAgICA9IGdsb2JhbC5SZWdFeHBcbiAgLCBCYXNlICAgICAgICAgICAgICA9ICRSZWdFeHBcbiAgLCBwcm90byAgICAgICAgICAgICA9ICRSZWdFeHAucHJvdG90eXBlXG4gICwgcmUxICAgICAgICAgICAgICAgPSAvYS9nXG4gICwgcmUyICAgICAgICAgICAgICAgPSAvYS9nXG4gIC8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxuICAsIENPUlJFQ1RfTkVXICAgICAgID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZihfZGVyZXFfKDI4KSAmJiAoIUNPUlJFQ1RfTkVXIHx8IF9kZXJlcV8oMzQpKGZ1bmN0aW9uKCl7XG4gIHJlMltfZGVyZXFfKDExNykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKXtcbiAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKXtcbiAgICB2YXIgdGlSRSA9IHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwXG4gICAgICAsIHBpUkUgPSBpc1JlZ0V4cChwKVxuICAgICAgLCBmaVUgID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uKGtleSl7XG4gICAga2V5IGluICRSZWdFeHAgfHwgZFAoJFJlZ0V4cCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKGl0KXsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yKHZhciBrZXlzID0gZ09QTihCYXNlKSwgaSA9IDA7IGtleXMubGVuZ3RoID4gaTsgKXByb3h5KGtleXNbaSsrXSk7XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJFJlZ0V4cDtcbiAgJFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcbiAgX2RlcmVxXyg4NykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbl9kZXJlcV8oOTEpKCdSZWdFeHAnKTtcbn0se1wiMTE3XCI6MTE3LFwiMjhcIjoyOCxcIjM0XCI6MzQsXCIzNlwiOjM2LFwiMzhcIjozOCxcIjQzXCI6NDMsXCI1MFwiOjUwLFwiNjdcIjo2NyxcIjcyXCI6NzIsXCI4N1wiOjg3LFwiOTFcIjo5MX1dLDIxNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZihfZGVyZXFfKDI4KSAmJiAvLi9nLmZsYWdzICE9ICdnJylfZGVyZXFfKDY3KS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IF9kZXJlcV8oMzYpXG59KTtcbn0se1wiMjhcIjoyOCxcIjM2XCI6MzYsXCI2N1wiOjY3fV0sMjE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIEBAbWF0Y2ggbG9naWNcbl9kZXJlcV8oMzUpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIE1BVENILCAkbWF0Y2gpe1xuICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG4gIHJldHVybiBbZnVuY3Rpb24gbWF0Y2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICB9LCAkbWF0Y2hdO1xufSk7XG59LHtcIjM1XCI6MzV9XSwyMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQEByZXBsYWNlIGxvZ2ljXG5fZGVyZXFfKDM1KSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKXtcbiAgLy8gMjEuMS4zLjE0IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKVxuICByZXR1cm4gW2Z1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgfSwgJHJlcGxhY2VdO1xufSk7XG59LHtcIjM1XCI6MzV9XSwyMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gQEBzZWFyY2ggbG9naWNcbl9kZXJlcV8oMzUpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBTRUFSQ0gsICRzZWFyY2gpe1xuICAvLyAyMS4xLjMuMTUgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2gocmVnZXhwKVxuICByZXR1cm4gW2Z1bmN0aW9uIHNlYXJjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgfSwgJHNlYXJjaF07XG59KTtcbn0se1wiMzVcIjozNX1dLDIxODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBAQHNwbGl0IGxvZ2ljXG5fZGVyZXFfKDM1KSgnc3BsaXQnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBTUExJVCwgJHNwbGl0KXtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgaXNSZWdFeHAgICA9IF9kZXJlcV8oNTApXG4gICAgLCBfc3BsaXQgICAgID0gJHNwbGl0XG4gICAgLCAkcHVzaCAgICAgID0gW10ucHVzaFxuICAgICwgJFNQTElUICAgICA9ICdzcGxpdCdcbiAgICAsIExFTkdUSCAgICAgPSAnbGVuZ3RoJ1xuICAgICwgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZihcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKXtcbiAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICRzcGxpdCA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgbGltaXQpe1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKXJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZighaXNSZWdFeHAoc2VwYXJhdG9yKSlyZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBpZighTlBDRylzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cCgnXicgKyBzZXBhcmF0b3JDb3B5LnNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgICAgd2hpbGUobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSl7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZihsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KXtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgIGlmKCFOUENHICYmIG1hdGNoW0xFTkdUSF0gPiAxKW1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKWlmKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKW1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZihvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KWJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KXNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pe1xuICAgICAgICBpZihsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKW91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZignMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pe1xuICAgICRzcGxpdCA9IGZ1bmN0aW9uKHNlcGFyYXRvciwgbGltaXQpe1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBfc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBbZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0sICRzcGxpdF07XG59KTtcbn0se1wiMzVcIjozNSxcIjUwXCI6NTB9XSwyMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuX2RlcmVxXygyMTQpO1xudmFyIGFuT2JqZWN0ICAgID0gX2RlcmVxXyg3KVxuICAsICRmbGFncyAgICAgID0gX2RlcmVxXygzNilcbiAgLCBERVNDUklQVE9SUyA9IF9kZXJlcV8oMjgpXG4gICwgVE9fU1RSSU5HICAgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nICAgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uKGZuKXtcbiAgX2RlcmVxXyg4NykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZihfZGVyZXFfKDM0KShmdW5jdGlvbigpeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoe3NvdXJjZTogJ2EnLCBmbGFnczogJ2InfSkgIT0gJy9hL2InOyB9KSl7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORyl7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG59LHtcIjIxNFwiOjIxNCxcIjI4XCI6MjgsXCIzNFwiOjM0LFwiMzZcIjozNixcIjdcIjo3LFwiODdcIjo4N31dLDIyMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gX2RlcmVxXygxOSk7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMikoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xufSx7XCIxOVwiOjE5LFwiMjJcIjoyMn1dLDIyMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4yIFN0cmluZy5wcm90b3R5cGUuYW5jaG9yKG5hbWUpXG5fZGVyZXFfKDk5KSgnYW5jaG9yJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBhbmNob3IobmFtZSl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnbmFtZScsIG5hbWUpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIyMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4zIFN0cmluZy5wcm90b3R5cGUuYmlnKClcbl9kZXJlcV8oOTkpKCdiaWcnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJpZygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIyMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy40IFN0cmluZy5wcm90b3R5cGUuYmxpbmsoKVxuX2RlcmVxXyg5OSkoJ2JsaW5rJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBibGluaygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdibGluaycsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjUgU3RyaW5nLnByb3RvdHlwZS5ib2xkKClcbl9kZXJlcV8oOTkpKCdib2xkJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBib2xkKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2InLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIyNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGF0ICAgICA9IF9kZXJlcV8oOTcpKGZhbHNlKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcbiAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjk3XCI6OTd9XSwyMjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9MZW5ndGggID0gX2RlcmVxXygxMDgpXG4gICwgY29udGV4dCAgID0gX2RlcmVxXyg5OClcbiAgLCBFTkRTX1dJVEggPSAnZW5kc1dpdGgnXG4gICwgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDMzKShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSClcbiAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcbiAgICAgICwgZW5kICAgID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IE1hdGgubWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG59LHtcIjEwOFwiOjEwOCxcIjMyXCI6MzIsXCIzM1wiOjMzLFwiOThcIjo5OH1dLDIyNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy42IFN0cmluZy5wcm90b3R5cGUuZml4ZWQoKVxuX2RlcmVxXyg5OSkoJ2ZpeGVkJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBmaXhlZCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICd0dCcsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjI4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjcgU3RyaW5nLnByb3RvdHlwZS5mb250Y29sb3IoY29sb3IpXG5fZGVyZXFfKDk5KSgnZm9udGNvbG9yJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBmb250Y29sb3IoY29sb3Ipe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ2NvbG9yJywgY29sb3IpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIyOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy44IFN0cmluZy5wcm90b3R5cGUuZm9udHNpemUoc2l6ZSlcbl9kZXJlcV8oOTkpKCdmb250c2l6ZScsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gZm9udHNpemUoc2l6ZSl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnc2l6ZScsIHNpemUpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIzMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvSW5kZXggICAgICAgID0gX2RlcmVxXygxMDUpXG4gICwgZnJvbUNoYXJDb2RlICAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG4gICwgJGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuLy8gbGVuZ3RoIHNob3VsZCBiZSAxLCBvbGQgRkYgcHJvYmxlbVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoISEkZnJvbUNvZGVQb2ludCAmJiAkZnJvbUNvZGVQb2ludC5sZW5ndGggIT0gMSksICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXG4gIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzICA9IFtdXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIGkgICAgPSAwXG4gICAgICAsIGNvZGU7XG4gICAgd2hpbGUoYUxlbiA+IGkpe1xuICAgICAgY29kZSA9ICthcmd1bWVudHNbaSsrXTtcbiAgICAgIGlmKHRvSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKXRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xuICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcbiAgICAgICAgPyBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgICAgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKVxuICAgICAgKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xufSx7XCIxMDVcIjoxMDUsXCIzMlwiOjMyfV0sMjMxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgPSBfZGVyZXFfKDMyKVxuICAsIGNvbnRleHQgID0gX2RlcmVxXyg5OClcbiAgLCBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogX2RlcmVxXygzMykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpXG4gICAgICAuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCIzM1wiOjMzLFwiOThcIjo5OH1dLDIzMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy45IFN0cmluZy5wcm90b3R5cGUuaXRhbGljcygpXG5fZGVyZXFfKDk5KSgnaXRhbGljcycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gaXRhbGljcygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdpJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSBfZGVyZXFfKDk3KSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxuX2RlcmVxXyg1MykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG59LHtcIjUzXCI6NTMsXCI5N1wiOjk3fV0sMjM0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEwIFN0cmluZy5wcm90b3R5cGUubGluayh1cmwpXG5fZGVyZXFfKDk5KSgnbGluaycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gbGluayh1cmwpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDIzNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCB0b0lPYmplY3QgPSBfZGVyZXFfKDEwNylcbiAgLCB0b0xlbmd0aCAgPSBfZGVyZXFfKDEwOCk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxuICByYXc6IGZ1bmN0aW9uIHJhdyhjYWxsU2l0ZSl7XG4gICAgdmFyIHRwbCAgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KVxuICAgICAgLCBsZW4gID0gdG9MZW5ndGgodHBsLmxlbmd0aClcbiAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgcmVzICA9IFtdXG4gICAgICAsIGkgICAgPSAwO1xuICAgIHdoaWxlKGxlbiA+IGkpe1xuICAgICAgcmVzLnB1c2goU3RyaW5nKHRwbFtpKytdKSk7XG4gICAgICBpZihpIDwgYUxlbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcbn0se1wiMTA3XCI6MTA3LFwiMTA4XCI6MTA4LFwiMzJcIjozMn1dLDIzNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuICByZXBlYXQ6IF9kZXJlcV8oMTAxKVxufSk7XG59LHtcIjEwMVwiOjEwMSxcIjMyXCI6MzJ9XSwyMzc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5zbWFsbCgpXG5fZGVyZXFfKDk5KSgnc21hbGwnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3NtYWxsJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyMzg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9MZW5ndGggICAgPSBfZGVyZXFfKDEwOClcbiAgLCBjb250ZXh0ICAgICA9IF9kZXJlcV8oOTgpXG4gICwgU1RBUlRTX1dJVEggPSAnc3RhcnRzV2l0aCdcbiAgLCAkc3RhcnRzV2l0aCA9ICcnW1NUQVJUU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDMzKShTVEFSVFNfV0lUSCksICdTdHJpbmcnLCB7XG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuICAgIHZhciB0aGF0ICAgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgU1RBUlRTX1dJVEgpXG4gICAgICAsIGluZGV4ICA9IHRvTGVuZ3RoKE1hdGgubWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpXG4gICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aFxuICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG59LHtcIjEwOFwiOjEwOCxcIjMyXCI6MzIsXCIzM1wiOjMzLFwiOThcIjo5OH1dLDIzOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMiBTdHJpbmcucHJvdG90eXBlLnN0cmlrZSgpXG5fZGVyZXFfKDk5KSgnc3RyaWtlJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzdHJpa2UoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3RyaWtlJywgJycsICcnKTtcbiAgfVxufSk7XG59LHtcIjk5XCI6OTl9XSwyNDA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5zdWIoKVxuX2RlcmVxXyg5OSkoJ3N1YicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gc3ViKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1YicsICcnLCAnJyk7XG4gIH1cbn0pO1xufSx7XCI5OVwiOjk5fV0sMjQxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjE0IFN0cmluZy5wcm90b3R5cGUuc3VwKClcbl9kZXJlcV8oOTkpKCdzdXAnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdXAnLCAnJywgJycpO1xuICB9XG59KTtcbn0se1wiOTlcIjo5OX1dLDI0MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcbl9kZXJlcV8oMTAyKSgndHJpbScsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMyk7XG4gIH07XG59KTtcbn0se1wiMTAyXCI6MTAyfV0sMjQzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IF9kZXJlcV8oMzgpXG4gICwgaGFzICAgICAgICAgICAgPSBfZGVyZXFfKDM5KVxuICAsIERFU0NSSVBUT1JTICAgID0gX2RlcmVxXygyOClcbiAgLCAkZXhwb3J0ICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgcmVkZWZpbmUgICAgICAgPSBfZGVyZXFfKDg3KVxuICAsIE1FVEEgICAgICAgICAgID0gX2RlcmVxXyg2MikuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSBfZGVyZXFfKDM0KVxuICAsIHNoYXJlZCAgICAgICAgID0gX2RlcmVxXyg5NClcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IF9kZXJlcV8oOTIpXG4gICwgdWlkICAgICAgICAgICAgPSBfZGVyZXFfKDExNClcbiAgLCB3a3MgICAgICAgICAgICA9IF9kZXJlcV8oMTE3KVxuICAsIHdrc0V4dCAgICAgICAgID0gX2RlcmVxXygxMTYpXG4gICwgd2tzRGVmaW5lICAgICAgPSBfZGVyZXFfKDExNSlcbiAgLCBrZXlPZiAgICAgICAgICA9IF9kZXJlcV8oNTcpXG4gICwgZW51bUtleXMgICAgICAgPSBfZGVyZXFfKDMxKVxuICAsIGlzQXJyYXkgICAgICAgID0gX2RlcmVxXyg0NylcbiAgLCBhbk9iamVjdCAgICAgICA9IF9kZXJlcV8oNylcbiAgLCB0b0lPYmplY3QgICAgICA9IF9kZXJlcV8oMTA3KVxuICAsIHRvUHJpbWl0aXZlICAgID0gX2RlcmVxXygxMTApXG4gICwgY3JlYXRlRGVzYyAgICAgPSBfZGVyZXFfKDg1KVxuICAsIF9jcmVhdGUgICAgICAgID0gX2RlcmVxXyg2NilcbiAgLCBnT1BORXh0ICAgICAgICA9IF9kZXJlcV8oNzEpXG4gICwgJEdPUEQgICAgICAgICAgPSBfZGVyZXFfKDcwKVxuICAsICREUCAgICAgICAgICAgID0gX2RlcmVxXyg2NylcbiAgLCAka2V5cyAgICAgICAgICA9IF9kZXJlcV8oNzYpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICBfZGVyZXFfKDcyKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIF9kZXJlcV8oNzcpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBfZGVyZXFfKDczKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhX2RlcmVxXyg1OCkpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IF9kZXJlcV8oNDApKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xufSx7XCIxMDdcIjoxMDcsXCIxMTBcIjoxMTAsXCIxMTRcIjoxMTQsXCIxMTVcIjoxMTUsXCIxMTZcIjoxMTYsXCIxMTdcIjoxMTcsXCIyOFwiOjI4LFwiMzFcIjozMSxcIjMyXCI6MzIsXCIzNFwiOjM0LFwiMzhcIjozOCxcIjM5XCI6MzksXCI0MFwiOjQwLFwiNDdcIjo0NyxcIjU3XCI6NTcsXCI1OFwiOjU4LFwiNjJcIjo2MixcIjY2XCI6NjYsXCI2N1wiOjY3LFwiN1wiOjcsXCI3MFwiOjcwLFwiNzFcIjo3MSxcIjcyXCI6NzIsXCI3M1wiOjczLFwiNzZcIjo3NixcIjc3XCI6NzcsXCI4NVwiOjg1LFwiODdcIjo4NyxcIjkyXCI6OTIsXCI5NFwiOjk0fV0sMjQ0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSBfZGVyZXFfKDMyKVxuICAsICR0eXBlZCAgICAgICA9IF9kZXJlcV8oMTEzKVxuICAsIGJ1ZmZlciAgICAgICA9IF9kZXJlcV8oMTEyKVxuICAsIGFuT2JqZWN0ICAgICA9IF9kZXJlcV8oNylcbiAgLCB0b0luZGV4ICAgICAgPSBfZGVyZXFfKDEwNSlcbiAgLCB0b0xlbmd0aCAgICAgPSBfZGVyZXFfKDEwOClcbiAgLCBpc09iamVjdCAgICAgPSBfZGVyZXFfKDQ5KVxuICAsIEFycmF5QnVmZmVyICA9IF9kZXJlcV8oMzgpLkFycmF5QnVmZmVyXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gX2RlcmVxXyg5NSlcbiAgLCAkQXJyYXlCdWZmZXIgPSBidWZmZXIuQXJyYXlCdWZmZXJcbiAgLCAkRGF0YVZpZXcgICAgPSBidWZmZXIuRGF0YVZpZXdcbiAgLCAkaXNWaWV3ICAgICAgPSAkdHlwZWQuQUJWICYmIEFycmF5QnVmZmVyLmlzVmlld1xuICAsICRzbGljZSAgICAgICA9ICRBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2VcbiAgLCBWSUVXICAgICAgICAgPSAkdHlwZWQuVklFV1xuICAsIEFSUkFZX0JVRkZFUiA9ICdBcnJheUJ1ZmZlcic7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEFycmF5QnVmZmVyICE9PSAkQXJyYXlCdWZmZXIpLCB7QXJyYXlCdWZmZXI6ICRBcnJheUJ1ZmZlcn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEkdHlwZWQuQ09OU1RSLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS4zLjEgQXJyYXlCdWZmZXIuaXNWaWV3KGFyZylcbiAgaXNWaWV3OiBmdW5jdGlvbiBpc1ZpZXcoaXQpe1xuICAgIHJldHVybiAkaXNWaWV3ICYmICRpc1ZpZXcoaXQpIHx8IGlzT2JqZWN0KGl0KSAmJiBWSUVXIGluIGl0O1xuICB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlUgKyAkZXhwb3J0LkYgKiBfZGVyZXFfKDM0KShmdW5jdGlvbigpe1xuICByZXR1cm4gIW5ldyAkQXJyYXlCdWZmZXIoMikuc2xpY2UoMSwgdW5kZWZpbmVkKS5ieXRlTGVuZ3RoO1xufSksIEFSUkFZX0JVRkZFUiwge1xuICAvLyAyNC4xLjQuMyBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2Uoc3RhcnQsIGVuZClcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpe1xuICAgIGlmKCRzbGljZSAhPT0gdW5kZWZpbmVkICYmIGVuZCA9PT0gdW5kZWZpbmVkKXJldHVybiAkc2xpY2UuY2FsbChhbk9iamVjdCh0aGlzKSwgc3RhcnQpOyAvLyBGRiBmaXhcbiAgICB2YXIgbGVuICAgID0gYW5PYmplY3QodGhpcykuYnl0ZUxlbmd0aFxuICAgICAgLCBmaXJzdCAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXG4gICAgICAsIGZpbmFsICA9IHRvSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQsIGxlbilcbiAgICAgICwgcmVzdWx0ID0gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJEFycmF5QnVmZmVyKSkodG9MZW5ndGgoZmluYWwgLSBmaXJzdCkpXG4gICAgICAsIHZpZXdTICA9IG5ldyAkRGF0YVZpZXcodGhpcylcbiAgICAgICwgdmlld1QgID0gbmV3ICREYXRhVmlldyhyZXN1bHQpXG4gICAgICAsIGluZGV4ICA9IDA7XG4gICAgd2hpbGUoZmlyc3QgPCBmaW5hbCl7XG4gICAgICB2aWV3VC5zZXRVaW50OChpbmRleCsrLCB2aWV3Uy5nZXRVaW50OChmaXJzdCsrKSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuX2RlcmVxXyg5MSkoQVJSQVlfQlVGRkVSKTtcbn0se1wiMTA1XCI6MTA1LFwiMTA4XCI6MTA4LFwiMTEyXCI6MTEyLFwiMTEzXCI6MTEzLFwiMzJcIjozMixcIjM0XCI6MzQsXCIzOFwiOjM4LFwiNDlcIjo0OSxcIjdcIjo3LFwiOTFcIjo5MSxcIjk1XCI6OTV9XSwyNDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIV9kZXJlcV8oMTEzKS5BQlYsIHtcbiAgRGF0YVZpZXc6IF9kZXJlcV8oMTEyKS5EYXRhVmlld1xufSk7XG59LHtcIjExMlwiOjExMixcIjExM1wiOjExMyxcIjMyXCI6MzJ9XSwyNDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdGbG9hdDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBGbG9hdDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI0NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ0Zsb2F0NjQnLCA4LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0NjRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcbn0se1wiMTExXCI6MTExfV0sMjQ4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTExKSgnSW50MTYnLCAyLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI0OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ0ludDMyJywgNCwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdJbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI1MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI1MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ1VpbnQzMicsIDQsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG59LHtcIjExMVwiOjExMX1dLDI1MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExMSkoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xufSx7XCIxMTFcIjoxMTF9XSwyNTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXygxMTEpKCdVaW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDhDbGFtcGVkQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSwgdHJ1ZSk7XG59LHtcIjExMVwiOjExMX1dLDI1NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgZWFjaCAgICAgICAgID0gX2RlcmVxXygxMikoMClcbiAgLCByZWRlZmluZSAgICAgPSBfZGVyZXFfKDg3KVxuICAsIG1ldGEgICAgICAgICA9IF9kZXJlcV8oNjIpXG4gICwgYXNzaWduICAgICAgID0gX2RlcmVxXyg2NSlcbiAgLCB3ZWFrICAgICAgICAgPSBfZGVyZXFfKDIxKVxuICAsIGlzT2JqZWN0ICAgICA9IF9kZXJlcV8oNDkpXG4gICwgZ2V0V2VhayAgICAgID0gbWV0YS5nZXRXZWFrXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZVxuICAsIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSB3ZWFrLnVmc3RvcmVcbiAgLCB0bXAgICAgICAgICAgPSB7fVxuICAsIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICBpZihpc09iamVjdChrZXkpKXtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5nZXQoa2V5KTtcbiAgICAgIHJldHVybiBkYXRhID8gZGF0YVt0aGlzLl9pXSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oMjIpKCdXZWFrTWFwJywgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmKG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xuICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlcik7XG4gIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICBtZXRhLk5FRUQgPSB0cnVlO1xuICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIHByb3RvICA9ICRXZWFrTWFwLnByb3RvdHlwZVxuICAgICAgLCBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZihpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKXtcbiAgICAgICAgaWYoIXRoaXMuX2YpdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cbn0se1wiMTJcIjoxMixcIjIxXCI6MjEsXCIyMlwiOjIyLFwiNDlcIjo0OSxcIjYyXCI6NjIsXCI2NVwiOjY1LFwiODdcIjo4N31dLDI1NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG52YXIgd2VhayA9IF9kZXJlcV8oMjEpO1xuXG4vLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xuX2RlcmVxXygyMikoJ1dlYWtTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha1NldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcbiAgfVxufSwgd2VhaywgZmFsc2UsIHRydWUpO1xufSx7XCIyMVwiOjIxLFwiMjJcIjoyMn1dLDI1NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ICAgPSBfZGVyZXFfKDMyKVxuICAsICRpbmNsdWRlcyA9IF9kZXJlcV8oMTEpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbl9kZXJlcV8oNSkoJ2luY2x1ZGVzJyk7XG59LHtcIjExXCI6MTEsXCIzMlwiOjMyLFwiNVwiOjV9XSwyNTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3J3YWxkcm9uL3RjMzktbm90ZXMvYmxvYi9tYXN0ZXIvZXM2LzIwMTQtMDkvc2VwdC0yNS5tZCM1MTAtZ2xvYmFsYXNhcC1mb3ItZW5xdWV1aW5nLWEtbWljcm90YXNrXG52YXIgJGV4cG9ydCAgID0gX2RlcmVxXygzMilcbiAgLCBtaWNyb3Rhc2sgPSBfZGVyZXFfKDY0KSgpXG4gICwgcHJvY2VzcyAgID0gX2RlcmVxXygzOCkucHJvY2Vzc1xuICAsIGlzTm9kZSAgICA9IF9kZXJlcV8oMTgpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuJGV4cG9ydCgkZXhwb3J0LkcsIHtcbiAgYXNhcDogZnVuY3Rpb24gYXNhcChmbil7XG4gICAgdmFyIGRvbWFpbiA9IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpbjtcbiAgICBtaWNyb3Rhc2soZG9tYWluID8gZG9tYWluLmJpbmQoZm4pIDogZm4pO1xuICB9XG59KTtcbn0se1wiMThcIjoxOCxcIjMyXCI6MzIsXCIzOFwiOjM4LFwiNjRcIjo2NH1dLDI1OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWlzLWVycm9yXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgY29mICAgICA9IF9kZXJlcV8oMTgpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0Vycm9yJywge1xuICBpc0Vycm9yOiBmdW5jdGlvbiBpc0Vycm9yKGl0KXtcbiAgICByZXR1cm4gY29mKGl0KSA9PT0gJ0Vycm9yJztcbiAgfVxufSk7XG59LHtcIjE4XCI6MTgsXCIzMlwiOjMyfV0sMjYwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IF9kZXJlcV8oMjApKCdNYXAnKX0pO1xufSx7XCIyMFwiOjIwLFwiMzJcIjozMn1dLDI2MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpYWRkaDogZnVuY3Rpb24gaWFkZGgoeDAsIHgxLCB5MCwgeTEpe1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMFxuICAgICAgLCAkeDEgPSB4MSA+Pj4gMFxuICAgICAgLCAkeTAgPSB5MCA+Pj4gMDtcbiAgICByZXR1cm4gJHgxICsgKHkxID4+PiAwKSArICgoJHgwICYgJHkwIHwgKCR4MCB8ICR5MCkgJiB+KCR4MCArICR5MCA+Pj4gMCkpID4+PiAzMSkgfCAwO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDI2MjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpbXVsaDogZnVuY3Rpb24gaW11bGgodSwgdil7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuICAgICAgLCAkdSA9ICt1XG4gICAgICAsICR2ID0gK3ZcbiAgICAgICwgdTAgPSAkdSAmIFVJTlQxNlxuICAgICAgLCB2MCA9ICR2ICYgVUlOVDE2XG4gICAgICAsIHUxID0gJHUgPj4gMTZcbiAgICAgICwgdjEgPSAkdiA+PiAxNlxuICAgICAgLCB0ICA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG4gICAgcmV0dXJuIHUxICogdjEgKyAodCA+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+IDE2KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzJ9XSwyNjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaXN1Ymg6IGZ1bmN0aW9uIGlzdWJoKHgwLCB4MSwgeTAsIHkxKXtcbiAgICB2YXIgJHgwID0geDAgPj4+IDBcbiAgICAgICwgJHgxID0geDEgPj4+IDBcbiAgICAgICwgJHkwID0geTAgPj4+IDA7XG4gICAgcmV0dXJuICR4MSAtICh5MSA+Pj4gMCkgLSAoKH4keDAgJiAkeTAgfCB+KCR4MCBeICR5MCkgJiAkeDAgLSAkeTAgPj4+IDApID4+PiAzMSkgfCAwO1xuICB9XG59KTtcbn0se1wiMzJcIjozMn1dLDI2NDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSBfZGVyZXFfKDMyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB1bXVsaDogZnVuY3Rpb24gdW11bGgodSwgdil7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuICAgICAgLCAkdSA9ICt1XG4gICAgICAsICR2ID0gK3ZcbiAgICAgICwgdTAgPSAkdSAmIFVJTlQxNlxuICAgICAgLCB2MCA9ICR2ICYgVUlOVDE2XG4gICAgICAsIHUxID0gJHUgPj4+IDE2XG4gICAgICAsIHYxID0gJHYgPj4+IDE2XG4gICAgICAsIHQgID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcbiAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+PiAxNik7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyfV0sMjY1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvT2JqZWN0ICAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAsIGFGdW5jdGlvbiAgICAgICA9IF9kZXJlcV8oMylcbiAgLCAkZGVmaW5lUHJvcGVydHkgPSBfZGVyZXFfKDY3KTtcblxuLy8gQi4yLjIuMiBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oUCwgZ2V0dGVyKVxuX2RlcmVxXygyOCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfZGVyZXFfKDY5KSwgJ09iamVjdCcsIHtcbiAgX19kZWZpbmVHZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVHZXR0ZXJfXyhQLCBnZXR0ZXIpe1xuICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7Z2V0OiBhRnVuY3Rpb24oZ2V0dGVyKSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG4gIH1cbn0pO1xufSx7XCIxMDlcIjoxMDksXCIyOFwiOjI4LFwiM1wiOjMsXCIzMlwiOjMyLFwiNjdcIjo2NyxcIjY5XCI6Njl9XSwyNjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9PYmplY3QgICAgICAgID0gX2RlcmVxXygxMDkpXG4gICwgYUZ1bmN0aW9uICAgICAgID0gX2RlcmVxXygzKVxuICAsICRkZWZpbmVQcm9wZXJ0eSA9IF9kZXJlcV8oNjcpO1xuXG4vLyBCLjIuMi4zIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpXG5fZGVyZXFfKDI4KSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIF9kZXJlcV8oNjkpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZVNldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZVNldHRlcl9fKFAsIHNldHRlcil7XG4gICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtzZXQ6IGFGdW5jdGlvbihzZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbiAgfVxufSk7XG59LHtcIjEwOVwiOjEwOSxcIjI4XCI6MjgsXCIzXCI6MyxcIjMyXCI6MzIsXCI2N1wiOjY3LFwiNjlcIjo2OX1dLDI2NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpXG4gICwgJGVudHJpZXMgPSBfZGVyZXFfKDc5KSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpe1xuICAgIHJldHVybiAkZW50cmllcyhpdCk7XG4gIH1cbn0pO1xufSx7XCIzMlwiOjMyLFwiNzlcIjo3OX1dLDI2ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xudmFyICRleHBvcnQgICAgICAgID0gX2RlcmVxXygzMilcbiAgLCBvd25LZXlzICAgICAgICA9IF9kZXJlcV8oODApXG4gICwgdG9JT2JqZWN0ICAgICAgPSBfZGVyZXFfKDEwNylcbiAgLCBnT1BEICAgICAgICAgICA9IF9kZXJlcV8oNzApXG4gICwgY3JlYXRlUHJvcGVydHkgPSBfZGVyZXFfKDI0KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcbiAgICB2YXIgTyAgICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgICAsIGdldERlc2MgPSBnT1BELmZcbiAgICAgICwga2V5cyAgICA9IG93bktleXMoTylcbiAgICAgICwgcmVzdWx0ICA9IHt9XG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShrZXlzLmxlbmd0aCA+IGkpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXkgPSBrZXlzW2krK10sIGdldERlc2MoTywga2V5KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG59LHtcIjEwN1wiOjEwNyxcIjI0XCI6MjQsXCIzMlwiOjMyLFwiNzBcIjo3MCxcIjgwXCI6ODB9XSwyNjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMzIpXG4gICwgdG9PYmplY3QgICAgICAgICAgICAgICAgID0gX2RlcmVxXygxMDkpXG4gICwgdG9QcmltaXRpdmUgICAgICAgICAgICAgID0gX2RlcmVxXygxMTApXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgID0gX2RlcmVxXyg3NClcbiAgLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfZGVyZXFfKDcwKS5mO1xuXG4vLyBCLjIuMi40IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBHZXR0ZXJfXyhQKVxuX2RlcmVxXygyOCkgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyBfZGVyZXFfKDY5KSwgJ09iamVjdCcsIHtcbiAgX19sb29rdXBHZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBHZXR0ZXJfXyhQKXtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpXG4gICAgICAsIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKVxuICAgICAgLCBEO1xuICAgIGRvIHtcbiAgICAgIGlmKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpcmV0dXJuIEQuZ2V0O1xuICAgIH0gd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcbiAgfVxufSk7XG59LHtcIjEwOVwiOjEwOSxcIjExMFwiOjExMCxcIjI4XCI6MjgsXCIzMlwiOjMyLFwiNjlcIjo2OSxcIjcwXCI6NzAsXCI3NFwiOjc0fV0sMjcwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDMyKVxuICAsIHRvT2JqZWN0ICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTA5KVxuICAsIHRvUHJpbWl0aXZlICAgICAgICAgICAgICA9IF9kZXJlcV8oMTEwKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgICA9IF9kZXJlcV8oNzQpXG4gICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX2RlcmVxXyg3MCkuZjtcblxuLy8gQi4yLjIuNSBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwU2V0dGVyX18oUClcbl9kZXJlcV8oMjgpICYmICRleHBvcnQoJGV4cG9ydC5QICsgX2RlcmVxXyg2OSksICdPYmplY3QnLCB7XG4gIF9fbG9va3VwU2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwU2V0dGVyX18oUCl7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKVxuICAgICAgLCBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSlcbiAgICAgICwgRDtcbiAgICBkbyB7XG4gICAgICBpZihEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKXJldHVybiBELnNldDtcbiAgICB9IHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gIH1cbn0pO1xufSx7XCIxMDlcIjoxMDksXCIxMTBcIjoxMTAsXCIyOFwiOjI4LFwiMzJcIjozMixcIjY5XCI6NjksXCI3MFwiOjcwLFwiNzRcIjo3NH1dLDI3MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkdmFsdWVzID0gX2RlcmVxXyg3OSkoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpe1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG59LHtcIjMyXCI6MzIsXCI3OVwiOjc5fV0sMjcyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbnZhciAkZXhwb3J0ICAgICA9IF9kZXJlcV8oMzIpXG4gICwgZ2xvYmFsICAgICAgPSBfZGVyZXFfKDM4KVxuICAsIGNvcmUgICAgICAgID0gX2RlcmVxXygyMylcbiAgLCBtaWNyb3Rhc2sgICA9IF9kZXJlcV8oNjQpKClcbiAgLCBPQlNFUlZBQkxFICA9IF9kZXJlcV8oMTE3KSgnb2JzZXJ2YWJsZScpXG4gICwgYUZ1bmN0aW9uICAgPSBfZGVyZXFfKDMpXG4gICwgYW5PYmplY3QgICAgPSBfZGVyZXFfKDcpXG4gICwgYW5JbnN0YW5jZSAgPSBfZGVyZXFfKDYpXG4gICwgcmVkZWZpbmVBbGwgPSBfZGVyZXFfKDg2KVxuICAsIGhpZGUgICAgICAgID0gX2RlcmVxXyg0MClcbiAgLCBmb3JPZiAgICAgICA9IF9kZXJlcV8oMzcpXG4gICwgUkVUVVJOICAgICAgPSBmb3JPZi5SRVRVUk47XG5cbnZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihmbil7XG4gIHJldHVybiBmbiA9PSBudWxsID8gdW5kZWZpbmVkIDogYUZ1bmN0aW9uKGZuKTtcbn07XG5cbnZhciBjbGVhbnVwU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2M7XG4gIGlmKGNsZWFudXApe1xuICAgIHN1YnNjcmlwdGlvbi5fYyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwKCk7XG4gIH1cbn07XG5cbnZhciBzdWJzY3JpcHRpb25DbG9zZWQgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICByZXR1cm4gc3Vic2NyaXB0aW9uLl9vID09PSB1bmRlZmluZWQ7XG59O1xuXG52YXIgY2xvc2VTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gIH1cbn07XG5cbnZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihvYnNlcnZlciwgc3Vic2NyaWJlcil7XG4gIGFuT2JqZWN0KG9ic2VydmVyKTtcbiAgdGhpcy5fYyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fbyA9IG9ic2VydmVyO1xuICBvYnNlcnZlciA9IG5ldyBTdWJzY3JpcHRpb25PYnNlcnZlcih0aGlzKTtcbiAgdHJ5IHtcbiAgICB2YXIgY2xlYW51cCAgICAgID0gc3Vic2NyaWJlcihvYnNlcnZlcilcbiAgICAgICwgc3Vic2NyaXB0aW9uID0gY2xlYW51cDtcbiAgICBpZihjbGVhbnVwICE9IG51bGwpe1xuICAgICAgaWYodHlwZW9mIGNsZWFudXAudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpY2xlYW51cCA9IGZ1bmN0aW9uKCl7IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgZWxzZSBhRnVuY3Rpb24oY2xlYW51cCk7XG4gICAgICB0aGlzLl9jID0gY2xlYW51cDtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgcmV0dXJuO1xuICB9IGlmKHN1YnNjcmlwdGlvbkNsb3NlZCh0aGlzKSljbGVhbnVwU3Vic2NyaXB0aW9uKHRoaXMpO1xufTtcblxuU3Vic2NyaXB0aW9uLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpeyBjbG9zZVN1YnNjcmlwdGlvbih0aGlzKTsgfVxufSk7XG5cbnZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIHRoaXMuX3MgPSBzdWJzY3JpcHRpb247XG59O1xuXG5TdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICBuZXh0OiBmdW5jdGlvbiBuZXh0KHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIubmV4dCk7XG4gICAgICAgIGlmKG0pcmV0dXJuIG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbG9zZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcih2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpdGhyb3cgdmFsdWU7XG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgaWYoIW0pdGhyb3cgdmFsdWU7XG4gICAgICB2YWx1ZSA9IG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICB0cnkge1xuICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuY29tcGxldGUpO1xuICAgICAgICB2YWx1ZSA9IG0gPyBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcil7XG4gIGFuSW5zdGFuY2UodGhpcywgJE9ic2VydmFibGUsICdPYnNlcnZhYmxlJywgJ19mJykuX2YgPSBhRnVuY3Rpb24oc3Vic2NyaWJlcik7XG59O1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpe1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKG9ic2VydmVyLCB0aGlzLl9mKTtcbiAgfSxcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChmbil7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGFGdW5jdGlvbihmbik7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhhdC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0IDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZm4odmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbnJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLCB7XG4gIGZyb206IGZ1bmN0aW9uIGZyb20oeCl7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZTtcbiAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKGFuT2JqZWN0KHgpW09CU0VSVkFCTEVdKTtcbiAgICBpZihtZXRob2Qpe1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBhbk9iamVjdChtZXRob2QuY2FsbCh4KSk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZS5jb25zdHJ1Y3RvciA9PT0gQyA/IG9ic2VydmFibGUgOiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWRvbmUpe1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZihmb3JPZih4LCBmYWxzZSwgZnVuY3Rpb24oaXQpe1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0KTtcbiAgICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm4gUkVUVVJOO1xuICAgICAgICAgICAgfSkgPT09IFJFVFVSTilyZXR1cm47XG4gICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIGlmKGRvbmUpdGhyb3cgZTtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH0sXG4gIG9mOiBmdW5jdGlvbiBvZigpe1xuICAgIGZvcih2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IEFycmF5KGwpOyBpIDwgbDspaXRlbXNbaV0gPSBhcmd1bWVudHNbaSsrXTtcbiAgICByZXR1cm4gbmV3ICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZSkoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICBpZighZG9uZSl7XG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKXtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm47XG4gICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpeyBkb25lID0gdHJ1ZTsgfTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmhpZGUoJE9ic2VydmFibGUucHJvdG90eXBlLCBPQlNFUlZBQkxFLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7T2JzZXJ2YWJsZTogJE9ic2VydmFibGV9KTtcblxuX2RlcmVxXyg5MSkoJ09ic2VydmFibGUnKTtcbn0se1wiMTE3XCI6MTE3LFwiMjNcIjoyMyxcIjNcIjozLFwiMzJcIjozMixcIjM3XCI6MzcsXCIzOFwiOjM4LFwiNDBcIjo0MCxcIjZcIjo2LFwiNjRcIjo2NCxcIjdcIjo3LFwiODZcIjo4NixcIjkxXCI6OTF9XSwyNzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuICAsIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cbm1ldGFkYXRhLmV4cCh7ZGVmaW5lTWV0YWRhdGE6IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSl7XG4gIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRvTWV0YUtleSh0YXJnZXRLZXkpKTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3fV0sMjc0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gbWV0YWRhdGEubWFwXG4gICwgc3RvcmUgICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLnN0b3JlO1xuXG5tZXRhZGF0YS5leHAoe2RlbGV0ZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICB2YXIgdGFyZ2V0S2V5ICAgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pXG4gICAgLCBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIGlmKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgfHwgIW1ldGFkYXRhTWFwWydkZWxldGUnXShtZXRhZGF0YUtleSkpcmV0dXJuIGZhbHNlO1xuICBpZihtZXRhZGF0YU1hcC5zaXplKXJldHVybiB0cnVlO1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgdGFyZ2V0TWV0YWRhdGFbJ2RlbGV0ZSddKHRhcmdldEtleSk7XG4gIHJldHVybiAhIXRhcmdldE1ldGFkYXRhLnNpemUgfHwgc3RvcmVbJ2RlbGV0ZSddKHRhcmdldCk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6N31dLDI3NTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgU2V0ICAgICAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDIyMClcbiAgLCBmcm9tICAgICAgICAgICAgICAgICAgICA9IF9kZXJlcV8oMTApXG4gICwgbWV0YWRhdGEgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgID0gX2RlcmVxXyg3NClcbiAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24oTywgUCl7XG4gIHZhciBvS2V5cyAgPSBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICwgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIGlmKHBhcmVudCA9PT0gbnVsbClyZXR1cm4gb0tleXM7XG4gIHZhciBwS2V5cyAgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gZnJvbShuZXcgU2V0KG9LZXlzLmNvbmNhdChwS2V5cykpKSA6IHBLZXlzIDogb0tleXM7XG59O1xuXG5tZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufX0pO1xufSx7XCIxMFwiOjEwLFwiMjIwXCI6MjIwLFwiNjNcIjo2MyxcIjdcIjo3LFwiNzRcIjo3NH1dLDI3NjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gX2RlcmVxXyg3NClcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldFxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeUdldE1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIGlmKGhhc093bilyZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XG59O1xuXG5tZXRhZGF0YS5leHAoe2dldE1ldGFkYXRhOiBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6NyxcIjc0XCI6NzR9XSwyNzc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtnZXRPd25NZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3fV0sMjc4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6N31dLDI3OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IF9kZXJlcV8oNjMpXG4gICwgYW5PYmplY3QgICAgICAgICAgICAgICA9IF9kZXJlcV8oNylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gX2RlcmVxXyg3NClcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5SGFzTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgaWYoaGFzT3duKXJldHVybiB0cnVlO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XG59O1xuXG5tZXRhZGF0YS5leHAoe2hhc01ldGFkYXRhOiBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG59LHtcIjYzXCI6NjMsXCI3XCI6NyxcIjc0XCI6NzR9XSwyODA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgPSBfZGVyZXFfKDYzKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSBfZGVyZXFfKDcpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7aGFzT3duTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpXG4gICAgLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn19KTtcbn0se1wiNjNcIjo2MyxcIjdcIjo3fV0sMjgxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICAgID0gX2RlcmVxXyg2MylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgICAgID0gX2RlcmVxXyg3KVxuICAsIGFGdW5jdGlvbiAgICAgICAgICAgICAgICAgPSBfZGVyZXFfKDMpXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleVxuICAsIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cbm1ldGFkYXRhLmV4cCh7bWV0YWRhdGE6IGZ1bmN0aW9uIG1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHRhcmdldEtleSl7XG4gICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShcbiAgICAgIG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLFxuICAgICAgKHRhcmdldEtleSAhPT0gdW5kZWZpbmVkID8gYW5PYmplY3QgOiBhRnVuY3Rpb24pKHRhcmdldCksXG4gICAgICB0b01ldGFLZXkodGFyZ2V0S2V5KVxuICAgICk7XG4gIH07XG59fSk7XG59LHtcIjNcIjozLFwiNjNcIjo2MyxcIjdcIjo3fV0sMjgyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IF9kZXJlcV8oMzIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHt0b0pTT046IF9kZXJlcV8oMjApKCdTZXQnKX0pO1xufSx7XCIyMFwiOjIwLFwiMzJcIjozMn1dLDI4MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJGF0ICAgICA9IF9kZXJlcV8oOTcpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcbn0se1wiMzJcIjozMixcIjk3XCI6OTd9XSwyODQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9TdHJpbmcucHJvdG90eXBlLm1hdGNoQWxsL1xudmFyICRleHBvcnQgICAgID0gX2RlcmVxXygzMilcbiAgLCBkZWZpbmVkICAgICA9IF9kZXJlcV8oMjcpXG4gICwgdG9MZW5ndGggICAgPSBfZGVyZXFfKDEwOClcbiAgLCBpc1JlZ0V4cCAgICA9IF9kZXJlcV8oNTApXG4gICwgZ2V0RmxhZ3MgICAgPSBfZGVyZXFfKDM2KVxuICAsIFJlZ0V4cFByb3RvID0gUmVnRXhwLnByb3RvdHlwZTtcblxudmFyICRSZWdFeHBTdHJpbmdJdGVyYXRvciA9IGZ1bmN0aW9uKHJlZ2V4cCwgc3RyaW5nKXtcbiAgdGhpcy5fciA9IHJlZ2V4cDtcbiAgdGhpcy5fcyA9IHN0cmluZztcbn07XG5cbl9kZXJlcV8oNTIpKCRSZWdFeHBTdHJpbmdJdGVyYXRvciwgJ1JlZ0V4cCBTdHJpbmcnLCBmdW5jdGlvbiBuZXh0KCl7XG4gIHZhciBtYXRjaCA9IHRoaXMuX3IuZXhlYyh0aGlzLl9zKTtcbiAgcmV0dXJuIHt2YWx1ZTogbWF0Y2gsIGRvbmU6IG1hdGNoID09PSBudWxsfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgbWF0Y2hBbGw6IGZ1bmN0aW9uIG1hdGNoQWxsKHJlZ2V4cCl7XG4gICAgZGVmaW5lZCh0aGlzKTtcbiAgICBpZighaXNSZWdFeHAocmVnZXhwKSl0aHJvdyBUeXBlRXJyb3IocmVnZXhwICsgJyBpcyBub3QgYSByZWdleHAhJyk7XG4gICAgdmFyIFMgICAgID0gU3RyaW5nKHRoaXMpXG4gICAgICAsIGZsYWdzID0gJ2ZsYWdzJyBpbiBSZWdFeHBQcm90byA/IFN0cmluZyhyZWdleHAuZmxhZ3MpIDogZ2V0RmxhZ3MuY2FsbChyZWdleHApXG4gICAgICAsIHJ4ICAgID0gbmV3IFJlZ0V4cChyZWdleHAuc291cmNlLCB+ZmxhZ3MuaW5kZXhPZignZycpID8gZmxhZ3MgOiAnZycgKyBmbGFncyk7XG4gICAgcngubGFzdEluZGV4ID0gdG9MZW5ndGgocmVnZXhwLmxhc3RJbmRleCk7XG4gICAgcmV0dXJuIG5ldyAkUmVnRXhwU3RyaW5nSXRlcmF0b3IocngsIFMpO1xuICB9XG59KTtcbn0se1wiMTA4XCI6MTA4LFwiMjdcIjoyNyxcIjMyXCI6MzIsXCIzNlwiOjM2LFwiNTBcIjo1MCxcIjUyXCI6NTJ9XSwyODU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMilcbiAgLCAkcGFkICAgID0gX2RlcmVxXygxMDApO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgcGFkRW5kOiBmdW5jdGlvbiBwYWRFbmQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmYWxzZSk7XG4gIH1cbn0pO1xufSx7XCIxMDBcIjoxMDAsXCIzMlwiOjMyfV0sMjg2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHBhZCAgICA9IF9kZXJlcV8oMTAwKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuICB9XG59KTtcbn0se1wiMTAwXCI6MTAwLFwiMzJcIjozMn1dLDI4NzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5fZGVyZXFfKDEwMikoJ3RyaW1MZWZ0JywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbUxlZnQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMSk7XG4gIH07XG59LCAndHJpbVN0YXJ0Jyk7XG59LHtcIjEwMlwiOjEwMn1dLDI4ODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5fZGVyZXFfKDEwMikoJ3RyaW1SaWdodCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1SaWdodCgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAyKTtcbiAgfTtcbn0sICd0cmltRW5kJyk7XG59LHtcIjEwMlwiOjEwMn1dLDI4OTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5fZGVyZXFfKDExNSkoJ2FzeW5jSXRlcmF0b3InKTtcbn0se1wiMTE1XCI6MTE1fV0sMjkwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMTE1KSgnb2JzZXJ2YWJsZScpO1xufSx7XCIxMTVcIjoxMTV9XSwyOTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9wcm9wb3NhbC1nbG9iYWxcbnZhciAkZXhwb3J0ID0gX2RlcmVxXygzMik7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3lzdGVtJywge2dsb2JhbDogX2RlcmVxXygzOCl9KTtcbn0se1wiMzJcIjozMixcIjM4XCI6Mzh9XSwyOTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyICRpdGVyYXRvcnMgICAgPSBfZGVyZXFfKDEzMClcbiAgLCByZWRlZmluZSAgICAgID0gX2RlcmVxXyg4NylcbiAgLCBnbG9iYWwgICAgICAgID0gX2RlcmVxXygzOClcbiAgLCBoaWRlICAgICAgICAgID0gX2RlcmVxXyg0MClcbiAgLCBJdGVyYXRvcnMgICAgID0gX2RlcmVxXyg1NilcbiAgLCB3a3MgICAgICAgICAgID0gX2RlcmVxXygxMTcpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbn0se1wiMTE3XCI6MTE3LFwiMTMwXCI6MTMwLFwiMzhcIjozOCxcIjQwXCI6NDAsXCI1NlwiOjU2LFwiODdcIjo4N31dLDI5MzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgJGV4cG9ydCA9IF9kZXJlcV8oMzIpXG4gICwgJHRhc2sgICA9IF9kZXJlcV8oMTA0KTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG4gIHNldEltbWVkaWF0ZTogICAkdGFzay5zZXQsXG4gIGNsZWFySW1tZWRpYXRlOiAkdGFzay5jbGVhclxufSk7XG59LHtcIjEwNFwiOjEwNCxcIjMyXCI6MzJ9XSwyOTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxudmFyIGdsb2JhbCAgICAgPSBfZGVyZXFfKDM4KVxuICAsICRleHBvcnQgICAgPSBfZGVyZXFfKDMyKVxuICAsIGludm9rZSAgICAgPSBfZGVyZXFfKDQ0KVxuICAsIHBhcnRpYWwgICAgPSBfZGVyZXFfKDgzKVxuICAsIG5hdmlnYXRvciAgPSBnbG9iYWwubmF2aWdhdG9yXG4gICwgTVNJRSAgICAgICA9ICEhbmF2aWdhdG9yICYmIC9NU0lFIC5cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciB3cmFwID0gZnVuY3Rpb24oc2V0KXtcbiAgcmV0dXJuIE1TSUUgPyBmdW5jdGlvbihmbiwgdGltZSAvKiwgLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIHNldChpbnZva2UoXG4gICAgICBwYXJ0aWFsLFxuICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxuICAgICAgdHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKVxuICAgICksIHRpbWUpO1xuICB9IDogc2V0O1xufTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CICsgJGV4cG9ydC5GICogTVNJRSwge1xuICBzZXRUaW1lb3V0OiAgd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xufSx7XCIzMlwiOjMyLFwiMzhcIjozOCxcIjQ0XCI6NDQsXCI4M1wiOjgzfV0sMjk1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbl9kZXJlcV8oMjQzKTtcbl9kZXJlcV8oMTgwKTtcbl9kZXJlcV8oMTgyKTtcbl9kZXJlcV8oMTgxKTtcbl9kZXJlcV8oMTg0KTtcbl9kZXJlcV8oMTg2KTtcbl9kZXJlcV8oMTkxKTtcbl9kZXJlcV8oMTg1KTtcbl9kZXJlcV8oMTgzKTtcbl9kZXJlcV8oMTkzKTtcbl9kZXJlcV8oMTkyKTtcbl9kZXJlcV8oMTg4KTtcbl9kZXJlcV8oMTg5KTtcbl9kZXJlcV8oMTg3KTtcbl9kZXJlcV8oMTc5KTtcbl9kZXJlcV8oMTkwKTtcbl9kZXJlcV8oMTk0KTtcbl9kZXJlcV8oMTk1KTtcbl9kZXJlcV8oMTQ2KTtcbl9kZXJlcV8oMTQ4KTtcbl9kZXJlcV8oMTQ3KTtcbl9kZXJlcV8oMTk3KTtcbl9kZXJlcV8oMTk2KTtcbl9kZXJlcV8oMTY3KTtcbl9kZXJlcV8oMTc3KTtcbl9kZXJlcV8oMTc4KTtcbl9kZXJlcV8oMTY4KTtcbl9kZXJlcV8oMTY5KTtcbl9kZXJlcV8oMTcwKTtcbl9kZXJlcV8oMTcxKTtcbl9kZXJlcV8oMTcyKTtcbl9kZXJlcV8oMTczKTtcbl9kZXJlcV8oMTc0KTtcbl9kZXJlcV8oMTc1KTtcbl9kZXJlcV8oMTc2KTtcbl9kZXJlcV8oMTUwKTtcbl9kZXJlcV8oMTUxKTtcbl9kZXJlcV8oMTUyKTtcbl9kZXJlcV8oMTUzKTtcbl9kZXJlcV8oMTU0KTtcbl9kZXJlcV8oMTU1KTtcbl9kZXJlcV8oMTU2KTtcbl9kZXJlcV8oMTU3KTtcbl9kZXJlcV8oMTU4KTtcbl9kZXJlcV8oMTU5KTtcbl9kZXJlcV8oMTYwKTtcbl9kZXJlcV8oMTYxKTtcbl9kZXJlcV8oMTYyKTtcbl9kZXJlcV8oMTYzKTtcbl9kZXJlcV8oMTY0KTtcbl9kZXJlcV8oMTY1KTtcbl9kZXJlcV8oMTY2KTtcbl9kZXJlcV8oMjMwKTtcbl9kZXJlcV8oMjM1KTtcbl9kZXJlcV8oMjQyKTtcbl9kZXJlcV8oMjMzKTtcbl9kZXJlcV8oMjI1KTtcbl9kZXJlcV8oMjI2KTtcbl9kZXJlcV8oMjMxKTtcbl9kZXJlcV8oMjM2KTtcbl9kZXJlcV8oMjM4KTtcbl9kZXJlcV8oMjIxKTtcbl9kZXJlcV8oMjIyKTtcbl9kZXJlcV8oMjIzKTtcbl9kZXJlcV8oMjI0KTtcbl9kZXJlcV8oMjI3KTtcbl9kZXJlcV8oMjI4KTtcbl9kZXJlcV8oMjI5KTtcbl9kZXJlcV8oMjMyKTtcbl9kZXJlcV8oMjM0KTtcbl9kZXJlcV8oMjM3KTtcbl9kZXJlcV8oMjM5KTtcbl9kZXJlcV8oMjQwKTtcbl9kZXJlcV8oMjQxKTtcbl9kZXJlcV8oMTQxKTtcbl9kZXJlcV8oMTQzKTtcbl9kZXJlcV8oMTQyKTtcbl9kZXJlcV8oMTQ1KTtcbl9kZXJlcV8oMTQ0KTtcbl9kZXJlcV8oMTI5KTtcbl9kZXJlcV8oMTI3KTtcbl9kZXJlcV8oMTM0KTtcbl9kZXJlcV8oMTMxKTtcbl9kZXJlcV8oMTM3KTtcbl9kZXJlcV8oMTM5KTtcbl9kZXJlcV8oMTI2KTtcbl9kZXJlcV8oMTMzKTtcbl9kZXJlcV8oMTIzKTtcbl9kZXJlcV8oMTM4KTtcbl9kZXJlcV8oMTIxKTtcbl9kZXJlcV8oMTM2KTtcbl9kZXJlcV8oMTM1KTtcbl9kZXJlcV8oMTI4KTtcbl9kZXJlcV8oMTMyKTtcbl9kZXJlcV8oMTIwKTtcbl9kZXJlcV8oMTIyKTtcbl9kZXJlcV8oMTI1KTtcbl9kZXJlcV8oMTI0KTtcbl9kZXJlcV8oMTQwKTtcbl9kZXJlcV8oMTMwKTtcbl9kZXJlcV8oMjEzKTtcbl9kZXJlcV8oMjE5KTtcbl9kZXJlcV8oMjE0KTtcbl9kZXJlcV8oMjE1KTtcbl9kZXJlcV8oMjE2KTtcbl9kZXJlcV8oMjE3KTtcbl9kZXJlcV8oMjE4KTtcbl9kZXJlcV8oMTk4KTtcbl9kZXJlcV8oMTQ5KTtcbl9kZXJlcV8oMjIwKTtcbl9kZXJlcV8oMjU1KTtcbl9kZXJlcV8oMjU2KTtcbl9kZXJlcV8oMjQ0KTtcbl9kZXJlcV8oMjQ1KTtcbl9kZXJlcV8oMjUwKTtcbl9kZXJlcV8oMjUzKTtcbl9kZXJlcV8oMjU0KTtcbl9kZXJlcV8oMjQ4KTtcbl9kZXJlcV8oMjUxKTtcbl9kZXJlcV8oMjQ5KTtcbl9kZXJlcV8oMjUyKTtcbl9kZXJlcV8oMjQ2KTtcbl9kZXJlcV8oMjQ3KTtcbl9kZXJlcV8oMTk5KTtcbl9kZXJlcV8oMjAwKTtcbl9kZXJlcV8oMjAxKTtcbl9kZXJlcV8oMjAyKTtcbl9kZXJlcV8oMjAzKTtcbl9kZXJlcV8oMjA2KTtcbl9kZXJlcV8oMjA0KTtcbl9kZXJlcV8oMjA1KTtcbl9kZXJlcV8oMjA3KTtcbl9kZXJlcV8oMjA4KTtcbl9kZXJlcV8oMjA5KTtcbl9kZXJlcV8oMjEwKTtcbl9kZXJlcV8oMjEyKTtcbl9kZXJlcV8oMjExKTtcbl9kZXJlcV8oMjU3KTtcbl9kZXJlcV8oMjgzKTtcbl9kZXJlcV8oMjg2KTtcbl9kZXJlcV8oMjg1KTtcbl9kZXJlcV8oMjg3KTtcbl9kZXJlcV8oMjg4KTtcbl9kZXJlcV8oMjg0KTtcbl9kZXJlcV8oMjg5KTtcbl9kZXJlcV8oMjkwKTtcbl9kZXJlcV8oMjY4KTtcbl9kZXJlcV8oMjcxKTtcbl9kZXJlcV8oMjY3KTtcbl9kZXJlcV8oMjY1KTtcbl9kZXJlcV8oMjY2KTtcbl9kZXJlcV8oMjY5KTtcbl9kZXJlcV8oMjcwKTtcbl9kZXJlcV8oMjYwKTtcbl9kZXJlcV8oMjgyKTtcbl9kZXJlcV8oMjkxKTtcbl9kZXJlcV8oMjU5KTtcbl9kZXJlcV8oMjYxKTtcbl9kZXJlcV8oMjYzKTtcbl9kZXJlcV8oMjYyKTtcbl9kZXJlcV8oMjY0KTtcbl9kZXJlcV8oMjczKTtcbl9kZXJlcV8oMjc0KTtcbl9kZXJlcV8oMjc2KTtcbl9kZXJlcV8oMjc1KTtcbl9kZXJlcV8oMjc4KTtcbl9kZXJlcV8oMjc3KTtcbl9kZXJlcV8oMjc5KTtcbl9kZXJlcV8oMjgwKTtcbl9kZXJlcV8oMjgxKTtcbl9kZXJlcV8oMjU4KTtcbl9kZXJlcV8oMjcyKTtcbl9kZXJlcV8oMjk0KTtcbl9kZXJlcV8oMjkzKTtcbl9kZXJlcV8oMjkyKTtcbm1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygyMyk7XG59LHtcIjEyMFwiOjEyMCxcIjEyMVwiOjEyMSxcIjEyMlwiOjEyMixcIjEyM1wiOjEyMyxcIjEyNFwiOjEyNCxcIjEyNVwiOjEyNSxcIjEyNlwiOjEyNixcIjEyN1wiOjEyNyxcIjEyOFwiOjEyOCxcIjEyOVwiOjEyOSxcIjEzMFwiOjEzMCxcIjEzMVwiOjEzMSxcIjEzMlwiOjEzMixcIjEzM1wiOjEzMyxcIjEzNFwiOjEzNCxcIjEzNVwiOjEzNSxcIjEzNlwiOjEzNixcIjEzN1wiOjEzNyxcIjEzOFwiOjEzOCxcIjEzOVwiOjEzOSxcIjE0MFwiOjE0MCxcIjE0MVwiOjE0MSxcIjE0MlwiOjE0MixcIjE0M1wiOjE0MyxcIjE0NFwiOjE0NCxcIjE0NVwiOjE0NSxcIjE0NlwiOjE0NixcIjE0N1wiOjE0NyxcIjE0OFwiOjE0OCxcIjE0OVwiOjE0OSxcIjE1MFwiOjE1MCxcIjE1MVwiOjE1MSxcIjE1MlwiOjE1MixcIjE1M1wiOjE1MyxcIjE1NFwiOjE1NCxcIjE1NVwiOjE1NSxcIjE1NlwiOjE1NixcIjE1N1wiOjE1NyxcIjE1OFwiOjE1OCxcIjE1OVwiOjE1OSxcIjE2MFwiOjE2MCxcIjE2MVwiOjE2MSxcIjE2MlwiOjE2MixcIjE2M1wiOjE2MyxcIjE2NFwiOjE2NCxcIjE2NVwiOjE2NSxcIjE2NlwiOjE2NixcIjE2N1wiOjE2NyxcIjE2OFwiOjE2OCxcIjE2OVwiOjE2OSxcIjE3MFwiOjE3MCxcIjE3MVwiOjE3MSxcIjE3MlwiOjE3MixcIjE3M1wiOjE3MyxcIjE3NFwiOjE3NCxcIjE3NVwiOjE3NSxcIjE3NlwiOjE3NixcIjE3N1wiOjE3NyxcIjE3OFwiOjE3OCxcIjE3OVwiOjE3OSxcIjE4MFwiOjE4MCxcIjE4MVwiOjE4MSxcIjE4MlwiOjE4MixcIjE4M1wiOjE4MyxcIjE4NFwiOjE4NCxcIjE4NVwiOjE4NSxcIjE4NlwiOjE4NixcIjE4N1wiOjE4NyxcIjE4OFwiOjE4OCxcIjE4OVwiOjE4OSxcIjE5MFwiOjE5MCxcIjE5MVwiOjE5MSxcIjE5MlwiOjE5MixcIjE5M1wiOjE5MyxcIjE5NFwiOjE5NCxcIjE5NVwiOjE5NSxcIjE5NlwiOjE5NixcIjE5N1wiOjE5NyxcIjE5OFwiOjE5OCxcIjE5OVwiOjE5OSxcIjIwMFwiOjIwMCxcIjIwMVwiOjIwMSxcIjIwMlwiOjIwMixcIjIwM1wiOjIwMyxcIjIwNFwiOjIwNCxcIjIwNVwiOjIwNSxcIjIwNlwiOjIwNixcIjIwN1wiOjIwNyxcIjIwOFwiOjIwOCxcIjIwOVwiOjIwOSxcIjIxMFwiOjIxMCxcIjIxMVwiOjIxMSxcIjIxMlwiOjIxMixcIjIxM1wiOjIxMyxcIjIxNFwiOjIxNCxcIjIxNVwiOjIxNSxcIjIxNlwiOjIxNixcIjIxN1wiOjIxNyxcIjIxOFwiOjIxOCxcIjIxOVwiOjIxOSxcIjIyMFwiOjIyMCxcIjIyMVwiOjIyMSxcIjIyMlwiOjIyMixcIjIyM1wiOjIyMyxcIjIyNFwiOjIyNCxcIjIyNVwiOjIyNSxcIjIyNlwiOjIyNixcIjIyN1wiOjIyNyxcIjIyOFwiOjIyOCxcIjIyOVwiOjIyOSxcIjIzXCI6MjMsXCIyMzBcIjoyMzAsXCIyMzFcIjoyMzEsXCIyMzJcIjoyMzIsXCIyMzNcIjoyMzMsXCIyMzRcIjoyMzQsXCIyMzVcIjoyMzUsXCIyMzZcIjoyMzYsXCIyMzdcIjoyMzcsXCIyMzhcIjoyMzgsXCIyMzlcIjoyMzksXCIyNDBcIjoyNDAsXCIyNDFcIjoyNDEsXCIyNDJcIjoyNDIsXCIyNDNcIjoyNDMsXCIyNDRcIjoyNDQsXCIyNDVcIjoyNDUsXCIyNDZcIjoyNDYsXCIyNDdcIjoyNDcsXCIyNDhcIjoyNDgsXCIyNDlcIjoyNDksXCIyNTBcIjoyNTAsXCIyNTFcIjoyNTEsXCIyNTJcIjoyNTIsXCIyNTNcIjoyNTMsXCIyNTRcIjoyNTQsXCIyNTVcIjoyNTUsXCIyNTZcIjoyNTYsXCIyNTdcIjoyNTcsXCIyNThcIjoyNTgsXCIyNTlcIjoyNTksXCIyNjBcIjoyNjAsXCIyNjFcIjoyNjEsXCIyNjJcIjoyNjIsXCIyNjNcIjoyNjMsXCIyNjRcIjoyNjQsXCIyNjVcIjoyNjUsXCIyNjZcIjoyNjYsXCIyNjdcIjoyNjcsXCIyNjhcIjoyNjgsXCIyNjlcIjoyNjksXCIyNzBcIjoyNzAsXCIyNzFcIjoyNzEsXCIyNzJcIjoyNzIsXCIyNzNcIjoyNzMsXCIyNzRcIjoyNzQsXCIyNzVcIjoyNzUsXCIyNzZcIjoyNzYsXCIyNzdcIjoyNzcsXCIyNzhcIjoyNzgsXCIyNzlcIjoyNzksXCIyODBcIjoyODAsXCIyODFcIjoyODEsXCIyODJcIjoyODIsXCIyODNcIjoyODMsXCIyODRcIjoyODQsXCIyODVcIjoyODUsXCIyODZcIjoyODYsXCIyODdcIjoyODcsXCIyODhcIjoyODgsXCIyODlcIjoyODksXCIyOTBcIjoyOTAsXCIyOTFcIjoyOTEsXCIyOTJcIjoyOTIsXCIyOTNcIjoyOTMsXCIyOTRcIjoyOTR9XSwyOTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID0gR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XX0se30sWzFdKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTMuMTIuMTYuXG4gKlxuICog0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhVxuICovXG5cbmltcG9ydCB7UGF0aEdlbmVyYXRvcn0gZnJvbSBcIi4vbGliL3BhdGgtZ2VuZXJhdG9yXCI7XG5pbXBvcnQge0dNYXB9IGZyb20gXCIuL2xpYi9tYXBcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9saWIvcmVuZGVyZXJcIjtcbmltcG9ydCB7UGF0aH0gZnJvbSBcIi4vbGliL3BhdGhcIjtcbmltcG9ydCB7TWFwTWFya2VyfSBmcm9tIFwiLi9saWIvbWFwLW1hcmtlclwiO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BhdGgtaW5wdXQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21wb25lbnRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb21wb25lbnROYW1lKVswXTtcblxuICAgIGlmKGNvbXBvbmVudEFuY2hvciA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHRlbXBsYXRlTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ3RlbXBsYXRlJyk7XG4gICAgbGV0IGZpZWxkVmFsdWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC12YWx1ZScpO1xuICAgIGxldCBmaWVsZE5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC1uYW1lJyk7XG5cbiAgICAkLmdldCh0ZW1wbGF0ZU5hbWUsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgUHJvZiA9IFZ1ZS5leHRlbmQoe1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBkYXRhLFxuICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBpZihmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aChmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhHZW5lcmF0b3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGF0aDogbmV3IFBhdGgoW10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbkVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6ICcnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcE1hcmtlci5pY29ucztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICBiZWdpblBhdGg6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3Iuc3RhcnQodGhpcy5jdXJyZW50UGF0aCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaFBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5maW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9Ub3A6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleERpc3Bvc2UoaW5kZXgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9Eb3duOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhSZW1vdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGVhclBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZy1tYXBzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IEdNYXAoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IgPSBuZXcgUGF0aEdlbmVyYXRvcih0aGlzLm1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMubWFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hcHBlbmRBZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbVBvc2l0aW9uID0gdGhpcy5jdXJyZW50UGF0aC5zaXplO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W2RhdGUtdGltZT1cImR0LScgKyAoZWxlbVBvc2l0aW9uIC0gMSkgKyAnXCJdJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGlja2VyQW5jaG9yID0gJChzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyQW5jaG9yLnRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lcmlkaWFuOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5vbignY2hhbmdlVGltZS50aW1lcGlja2VyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGlja2VyQW5jaG9yLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5wb2ludFZhbHVlKGluZGV4LCAndGltZScsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcC5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyQ29vcmRzID0gZXZlbnQubGF0TG5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyQ29vcmRzLnRvSlNPTigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXcgUHJvZigpLiRtb3VudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC10YLRgdGPINC+0L/RgNC10LTQtdC70LjRgtGMINC60L7QvNC/0L7QvdC10L3RgjogVnVlLmpzINC90LUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC9Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5jb25zdCBpY29uc01hcCA9IHtcbiAgICBhZDogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hZC5zdmdcIixcbiAgICBhZTogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hZS5zdmdcIixcbiAgICBhZjogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hZi5zdmdcIixcbiAgICBhZzogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hZy5zdmdcIixcbiAgICBhaTogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9haS5zdmdcIixcbiAgICBhbDogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hbC5zdmdcIixcbiAgICBhbTogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hbS5zdmdcIixcbiAgICBhbzogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hby5zdmdcIixcbiAgICBhdTogXCIvYm93ZXJfY29tcG9uZW50cy9mbGFnLWljb24tY3NzL2ZsYWdzLzF4MS9hdS5zdmdcIlxufTtcblxuZXhwb3J0IGNsYXNzIE1hcE1hcmtlciB7XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcCh2YWx1ZS5tYXApO1xuICAgIH1cbiAgICBnZXQgbGF0TG5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF0TG5nO1xuICAgIH1cblxuICAgIHNldCBsYXRMbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGF0TG5nID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IHZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0VmlzaWJsZSgpO1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlci5zZXRWaXNpYmxlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgaWNvbihwYXRoKSB7XG4gICAgICAgIHRoaXMuX2ljb24gPSBwYXRoO1xuXG4gICAgICAgIGxldCBpY29uID0ge1xuICAgICAgICAgICAgdXJsOiBwYXRoLFxuICAgICAgICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMjUsNTApLFxuICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNTAsNTApXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLnNldEljb24oaWNvbik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBpY29ucygpIHtcbiAgICAgICAgcmV0dXJuIGljb25zTWFwO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICB9XG5cbiAgICBzZXQgbGFiZWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9tYXJrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlci5zZXRMYWJlbCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG1hcmtlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcjtcbiAgICB9XG4gICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5tYXJrZXIuZ2V0UG9zaXRpb24oKS50b0pTT04oKSxcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMudmlzaWJsZSxcbiAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgIGljb246IHRoaXMuaWNvblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXJpYSk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cblxuICAgIHNldCBzZXJpYWwodmFsdWUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHZhbHVlLnBvc2l0aW9uO1xuXG4gICAgICAgIHRoaXMubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWUuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgIGlmKHZhbHVlLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdmFsdWUubGFiZWwgKyAnJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2libGUgPSB2YWx1ZS52aXNpYmxlIHx8IHRydWU7XG4gICAgICAgIHRoaXMudGltZSA9IHZhbHVlLnRpbWUgfHwgJzA6MDAnO1xuICAgICAgICB0aGlzLmljb24gPSB2YWx1ZS5pY29uIHx8ICcnO1xuXG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKHRoaXMubGF0TG5nKTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TGFiZWwodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldFZpc2libGUodGhpcy52aXNpYmxlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXAsIGNvb3JkcywgdGVtcGxhdGUpIHtcbiAgICAgICAgaWYoIW1hcCkge1xuICAgICAgICAgICAgdGhyb3cgJ9Cd0LUg0L7Qv9GA0LXQtNC10LvQtdC90LAg0LrQsNGA0YLQsCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogbWFwLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBjb29yZHMsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcblxuICAgICAgICBpZih0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWUgPSAnJztcbiAgICBfbWFwID0gbnVsbDtcbiAgICBfbGF0TG5nID0ge307XG4gICAgX2Rlc2NyaXB0aW9uID0gJyc7XG4gICAgX21hcmtlciA9IG51bGw7XG4gICAgX3RlbXBsYXRlID0gJ2NvbnRlbnQuaHRtbCc7XG4gICAgX2xhYmVsID0gJyc7XG4gICAgX3Zpc2libGUgPSB0cnVlO1xuICAgIF9pY29uID0gJyc7XG5cblxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc1N0cigpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHBvcy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGFkZEluZm8oKSB7XG4gICAgICAgIGxldCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgJChkYXRhKS5sb2FkKCdzcmMvdHBsLycgKyB0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgICBsZXQgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIHRoaXMuX21hcmtlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgR01hcCB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0YHRi9C70LrQsCDQvdCwINC+0LHRitC10LrRgiDQutCw0YDRglxuICAgICAqL1xuICAgIF9tYXA7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHZhciBwb2ludENvb3JkcyA9IHtsYXQ6IDUyLjYxNjY3LCBsbmc6IDM5LjYwMDB9O1xuXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudCwge1xuICAgICAgICAgICAgY2VudGVyOiBwb2ludENvb3JkcyxcbiAgICAgICAgICAgIHpvb206IDE2XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5fbWFwLCAncmVzaXplJyk7XG4gICAgfVxufSIsImltcG9ydCB7UGF0aH0gZnJvbSBcIi4vcGF0aFwiO1xuaW1wb3J0IHtNYXBNYXJrZXJ9IGZyb20gXCIuL21hcC1tYXJrZXJcIjtcbi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgUGF0aEdlbmVyYXRvciB7XG4gICAgZ2V0IGNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyO1xuICAgIH1cblxuICAgIHNldCBjb3VudGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBfbWFwO1xuICAgIF9wYXRoID0gW107XG4gICAgX2NvdW50ZXIgPSAxO1xuICAgIF9hZGRlZExpc3RlbmVycyA9IFtdOyBcblxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICBpZihtYXApIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC/0YPRgdC6INCz0LXQvdC10YDQsNGC0L7RgNCwXG4gICAgICovXG4gICAgc3RhcnQocGF0aCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcblxuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXRoLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGxldCBtYXJrZXJzQXJyYXkgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBtYXJrZXJKc29uIG9mIG1hcmtlcnNBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKG1hcmtlckpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoKCkge1xuICAgICAgICB0aGlzLl9wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kQWRkTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9hZGRlZExpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGFkZChtYXJrZXJKc29uKSB7XG4gICAgICAgIGlmKHRoaXMuX3BhdGgpIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFwTWFya2VyKHRoaXMubWFwLCBtYXJrZXJKc29uLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgbWFya2VySnNvbi5sYWJlbCA9IHRoaXMuX3BhdGgubWFya2Vycy5sZW5ndGggKyAxO1xuXG4gICAgICAgICAgICBtYXJrZXIuc2VyaWFsID0gbWFya2VySnNvbjtcblxuICAgICAgICAgICAgdGhpcy5fcGF0aC5hZGQobWFya2VyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX2FkZGVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqXG4gKlxuICovXG5pbXBvcnQge2Fzc2VydCBhcyBhc3NlcnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgZ2V0IG1hcmtlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xuICAgIH1cblxuICAgIHNldCBtYXJrZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIF9tYXJrZXJzID0gW107XG4gICAgX3VwZGF0ZUxpc3RlbmVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C10L3QuNC1INGB0LXRgNC40LDQu9C40LfQvtCy0LDQvdC90L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICovXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhcyA9IHRoaXMuX21hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyay5zZXJpYWw7XG4gICAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgICBsZXQgcmVzID0gJ1snICsgc2VyaWFzICsgJ10nO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIHBvaW50VmFsdWUoaW5kZXgsIGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LzQtdC90LAg0L/QvtC30LjRhtC40Lgg0LjQvdC00LXQutGB0LBcbiAgICAgKiBAcGFyYW0gaW5kZXgg0JjQvdC00LXQutGBXG4gICAgICogQHBhcmFtIGNyZW0g0KHQvNC10YnQtdC90LjQtVxuICAgICAqL1xuICAgIGluZGV4RGlzcG9zZShpbmRleCwgY3JlbSkge1xuICAgICAgICBsZXQgcyA9IGluZGV4ICsgY3JlbTtcblxuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgYXNzZXJ0KHMgPiAtMSAmJiBzIDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tzXTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzW3NdID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdID0gZWxlbTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGluZGV4UmVtb3ZlKGluZGV4KSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIGVsZW0ubWFya2VyLnNldE1hcChudWxsKTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5fbWFya2Vycykge1xuICAgICAgICAgICAgcmVzICs9IG1hcmsuY29vcmRzU3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgXG4gICAgYWRkVXBkYXRlTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgbWFyay5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGNhbGxVcGRhdGVIYW5kbGVycygpIHtcbiAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX3VwZGF0ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlcikge1xuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICBtYXJrZXIubWFya2VyLmFkZExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZih0aGlzLm1hcmtlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2hMYWJlbHMoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIGlmKG1hcmsudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIG1hcmsubGFiZWwgPSBpbmRleCArICcnO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXJrZXJzKSB7XG4gICAgICAgIHRoaXMubWFya2VycyA9IG1hcmtlcnM7XG5cbiAgICAgICAgdGhpcy5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMYWJlbHMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIF9tYXAgPSBudWxsO1xuICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgIH1cblxuICAgIHdheXBvaW50cyhjb29yZHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjb29yZHMubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IGNvb3Jkc1tpXSxcbiAgICAgICAgICAgICAgICBzdG9wb3ZlcjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZW5kZXIocGF0aCkge1xuICAgICAgICBsZXQgY29vcmRzID0gcGF0aC5jb29yZHNBcnJheTtcblxuICAgICAgICBpZihjb29yZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKHRoaXMubWFwLm1hcCk7XG5cbiAgICAgICAgbGV0IHdheXBvaW50cyA9IHRoaXMud2F5cG9pbnRzKGNvb3Jkcyk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBvcmlnaW46IGNvb3Jkc1swXSxcbiAgICAgICAgICAgIHdheXBvaW50cyxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IG1lc3NhZ2UgfHwgXCJBc3NlcnRpb24gZmFpbGVkXCI7XG4gICAgfVxufSJdfQ==