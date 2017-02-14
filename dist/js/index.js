(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var componentName = 'path-input';

document.addEventListener('DOMContentLoaded', function () {
    var componentAnchor = document.getElementsByTagName(componentName)[0];

    if (componentAnchor == null) {
        console.log('Component tag not founded');
        return;
    }

    var templateName = componentAnchor.getAttribute('template');
    var fieldValue = componentAnchor.getAttribute('field-value');
    var fieldName = componentAnchor.getAttribute('field-name');
    var iconsResource = componentAnchor.getAttribute('icons-resource');

    $.get(iconsResource, function (_icons) {
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
                            return _icons;
                        }
                    },
                    methods: {
                        beginPath: function beginPath(data) {
                            if (this.currentPath) {
                                this.currentPath.clear();
                            }

                            this.pathGenerator.defaultIcon = _icons[0].icon;
                            var bounds = this.pathGenerator.start(this.currentPath, data);

                            if (bounds != undefined) {
                                this.map.map.fitBounds(bounds);
                                this.map.map.panToBounds(bounds);
                            }
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
                        center: function center(point) {
                            var latLng = point.latLng;

                            this.map.map.setCenter(latLng);
                        },
                        clearPath: function clearPath() {
                            this.currentPath.clear();
                        },
                        setAhead: function setAhead(point, ahead) {
                            point.setAhead(ahead);

                            this.renderer.render(this.currentPath);
                        },
                        init: function init() {
                            var element = this.$el.querySelector('.g-maps');

                            this.map = new _map.GMap(element);
                            this.pathGenerator = new _pathGenerator.PathGenerator(this.map);
                            this.renderer = new _renderer2.default(this.map);

                            this.currentPath.addUpdateListener(function () {
                                /* rem-block */
                                console.log('Path updating...');
                                /* end-rem-block */

                                this.renderer.render(this.currentPath);
                                this.$forceUpdate();
                            }.bind(this));

                            this.pathGenerator.appendAddListener(function () {
                                var elemPosition = this.currentPath.size;

                                /* rem-block */
                                console.log('Adding point...');
                                /* end-rem-block */

                                setTimeout(function () {
                                    var selector = 'input[date-time="dt-' + (elemPosition - 1) + '"]';
                                    var pickerAnchor = $(selector);

                                    pickerAnchor.timepicker({
                                        showMeridian: false
                                    }).on('changeTime.timepicker', function (e) {
                                        var value = e.time.value;
                                        var index = pickerAnchor.attr('data-index');

                                        this.currentPath.pointValue(index, 'time', value);

                                        /* rem-block */
                                        console.log('Point added');
                                        /* end-rem-block */
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

                /* rem-block */
                console.log('Load component...');
                /* end-rem-block */

                new Prof().$mount(componentName);
            } catch (error) {
                console.log(error);
                console.log('Не удается определить компонент: Vue.js не инициализирован');
            }
        });
    });
});

},{"./lib/map":3,"./lib/path":5,"./lib/path-generator":4,"./lib/renderer":6}],2:[function(require,module,exports){
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
        key: 'remove',
        value: function remove() {
            this.marker.setMap(null);
        }
    }, {
        key: 'setAhead',
        value: function setAhead(ahead) {
            this._ahead = true;

            this.description = ahead.name;

            var position = {
                lat: ahead.lat,
                lng: ahead.lng
            };

            if (ahead['display'] != undefined) {
                if (ahead['display']['svg'] != undefined) {
                    this.icon = ahead['display']['svg'];
                }
            }

            this.latLng = position;
            this.meta = ahead._meta;

            this.typeahead = [];
        }
    }, {
        key: 'meta',
        get: function get() {
            return this._meta;
        },
        set: function set(value) {
            this._meta = value;
        }
    }, {
        key: 'draggable',
        get: function get() {
            return this._marker.getDraggable();
        },
        set: function set(value) {
            this._marker.setDraggable(value);
        }
    }, {
        key: 'icon',
        get: function get() {
            return this._icon;
        },
        set: function set(path) {
            this._icon = path;
        }
    }, {
        key: 'time',
        get: function get() {
            return this._time;
        },
        set: function set(value) {
            this._time = value;
        }
    }, {
        key: 'map',
        get: function get() {
            return this._map;
        },
        set: function set(value) {
            this._map = value;
            this.marker.setMap(value.map);
        }
    }, {
        key: 'latLng',
        get: function get() {
            return this._latLng;
        },
        set: function set(value) {
            this._latLng = value;

            this.marker.setPosition(new google.maps.LatLng(value.lat, value.lng));
        }
    }, {
        key: 'visible',
        get: function get() {
            return this._marker.getVisible();
        },
        set: function set(value) {
            this._marker.setVisible(value);
            this._visible = value;
        }
    }, {
        key: 'description',
        get: function get() {
            return this._description;
        },
        set: function set(value) {
            this._description = value;

            if (this._ahead) {
                this._ahead = false;
                return;
            }

            if (this._description != '') {
                if (dropdownResolver != undefined) {
                    dropdownResolver(value, function (points) {
                        var typeahead = [];

                        for (var index in points) {
                            var item = {
                                _meta: {
                                    id: points[index].id
                                },
                                name: points[index].name,
                                lat: points[index].lat,
                                lng: points[index].lng
                            };

                            if (points[index].display != undefined) {
                                item['display'] = points[index].display;
                            }

                            typeahead.push(item);
                        }

                        this.typeahead = typeahead;
                    }.bind(this));
                }
            } else {
                this.typeahead = [];
            }
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
                description: this.description,
                position: this.marker.getPosition().toJSON(),
                visible: this.visible,
                time: this.time,
                icon: this.icon,
                draggable: this.draggable,
                meta: this.meta
            };

            return JSON.stringify(seria);
        },
        set: function set(value) {
            var pos = value.position;

            this.latLng = new google.maps.LatLng(pos);

            this._ahead = true;
            this.description = value.description || '';

            if (value.label) {
                this.label = value.label + '';
            }

            if (typeof value.visible === 'boolean') {
                this.visible = value.visible;
            } else {
                this.visible = true;
            }

            this.time = value.time || '0:00';
            this.icon = value.icon || '';
            this.meta = value.meta || {};

            this.marker.setPosition(this.latLng);
            this.marker.setLabel(this.label);
            this.marker.setVisible(this.visible);
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
        this.typeahead = [];
        this._meta = {};

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
        key: 'coordsStr',
        get: function get() {
            var pos = this.getPosition();
            return pos.toString();
        }
    }]);

    return MapMarker;
}();

},{}],3:[function(require,module,exports){
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

        var pointCoords = {
            lat: 52.61667,
            lng: 39.6000
        };

        this._map = new google.maps.Map(element, {
            center: pointCoords,
            zoom: 16
        });

        google.maps.event.trigger(this._map, 'resize');
    }

    return GMap;
}();

},{}],4:[function(require,module,exports){
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
        key: "defaultIcon",
        get: function get() {
            return this._defaultIcon;
        },
        set: function set(value) {
            this._defaultIcon = value;
        }
    }, {
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
        this._defaultIcon = '';

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

                var bounds = new google.maps.LatLngBounds();

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = markersArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var markerJson = _step.value;

                        this.add(markerJson);

                        var pos = markerJson.position;

                        bounds.extend(new google.maps.LatLng({
                            lat: pos.lat,
                            lng: pos.lng
                        }));
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

                return bounds;
            }

            return undefined;
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

                if (marker.icon === '') {
                    marker.icon = this.defaultIcon;
                }

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

},{"./map-marker":2,"./path":5}],5:[function(require,module,exports){
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

},{"./utils":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFF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LENBQXZCLENBSEg7QUFJViw0QkFBWSxPQUFPLElBQVAsQ0FBWSxVQUFaLENBQXVCO0FBSnpCLGFBQWQ7O0FBT0EsaUJBQUssa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCO0FBQzlELG9CQUFJLFVBQVUsT0FBTyxJQUFQLENBQVksZ0JBQVosQ0FBNkIsRUFBM0MsRUFBK0M7QUFDM0MseUJBQUssa0JBQUwsQ0FBd0IsYUFBeEIsQ0FBc0MsUUFBdEM7QUFDSDtBQUNKLGFBSnNDLENBSXJDLElBSnFDLENBSWhDLElBSmdDLENBQXZDO0FBS0g7Ozs7OztrQkF4RGdCLFE7Ozs7Ozs7O1FDQUwsTSxHQUFBLE07QUFKaEI7Ozs7QUFJTyxTQUFTLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDdkMsUUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDWixjQUFNLFdBQVcsa0JBQWpCO0FBQ0g7QUFDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTMuMTIuMTYuXG4gKlxuICog0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhVxuICovXG5cbmltcG9ydCB7UGF0aEdlbmVyYXRvcn0gZnJvbSBcIi4vbGliL3BhdGgtZ2VuZXJhdG9yXCI7XG5pbXBvcnQge0dNYXB9IGZyb20gXCIuL2xpYi9tYXBcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9saWIvcmVuZGVyZXJcIjtcbmltcG9ydCB7UGF0aH0gZnJvbSBcIi4vbGliL3BhdGhcIjtcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdwYXRoLWlucHV0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29tcG9uZW50QW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29tcG9uZW50TmFtZSlbMF07XG5cbiAgICBpZihjb21wb25lbnRBbmNob3IgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IHRhZyBub3QgZm91bmRlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGxldCB0ZW1wbGF0ZU5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCd0ZW1wbGF0ZScpO1xuICAgIGxldCBmaWVsZFZhbHVlID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnZmllbGQtdmFsdWUnKTtcbiAgICBsZXQgZmllbGROYW1lID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnZmllbGQtbmFtZScpO1xuICAgIGxldCBpY29uc1Jlc291cmNlID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnaWNvbnMtcmVzb3VyY2UnKTtcblxuICAgICQuZ2V0KGljb25zUmVzb3VyY2UsIGZ1bmN0aW9uIChpY29ucykge1xuICAgICAgICAkLmdldCh0ZW1wbGF0ZU5hbWUsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBQcm9mID0gVnVlLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpZWxkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aChmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoR2VuZXJhdG9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGF0aDogbmV3IFBhdGgoW10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRWRpdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWNvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luUGF0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZGVmYXVsdEljb24gPSBpY29uc1swXS5pY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib3VuZHMgPSB0aGlzLnBhdGhHZW5lcmF0b3Iuc3RhcnQodGhpcy5jdXJyZW50UGF0aCwgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib3VuZHMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAubWFwLnBhblRvQm91bmRzKGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Ub3A6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3duOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4UmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXRMbmcgPSBwb2ludC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5tYXAuc2V0Q2VudGVyKGxhdExuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFoZWFkOiBmdW5jdGlvbiAocG9pbnQsIGFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQuc2V0QWhlYWQoYWhlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5nLW1hcHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IEdNYXAoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yID0gbmV3IFBhdGhHZW5lcmF0b3IodGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5tYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGF0aCB1cGRhdGluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hcHBlbmRBZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IHRoaXMuY3VycmVudFBhdGguc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBwb2ludC4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICdpbnB1dFtkYXRlLXRpbWU9XCJkdC0nICsgKGVsZW1Qb3NpdGlvbiAtIDEpICsgJ1wiXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNrZXJBbmNob3IgPSAkKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyQW5jaG9yLnRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXJpZGlhbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm9uKCdjaGFuZ2VUaW1lLnRpbWVwaWNrZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBpY2tlckFuY2hvci5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnBvaW50VmFsdWUoaW5kZXgsICd0aW1lJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvaW50IGFkZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcC5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvb3JkcyA9IGV2ZW50LmxhdExuZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBtYXJrZXJDb29yZHMudG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZCBjb21wb25lbnQuLi4nKTtcbiAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICBuZXcgUHJvZigpLiRtb3VudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC10YLRgdGPINC+0L/RgNC10LTQtdC70LjRgtGMINC60L7QvNC/0L7QvdC10L3RgjogVnVlLmpzINC90LUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC9Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5leHBvcnQgY2xhc3MgTWFwTWFya2VyIHtcbiAgICBnZXQgbWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gICAgfVxuXG4gICAgc2V0IG1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGRyYWdnYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0RHJhZ2dhYmxlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcCh2YWx1ZS5tYXApO1xuICAgIH1cbiAgICBnZXQgbGF0TG5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF0TG5nO1xuICAgIH1cblxuICAgIHNldCBsYXRMbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGF0TG5nID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24obmV3IGdvb2dsZS5tYXBzLkxhdExuZyh2YWx1ZS5sYXQsIHZhbHVlLmxuZykpO1xuICAgIH1cblxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFZpc2libGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0VmlzaWJsZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGljb24ocGF0aCkge1xuICAgICAgICB0aGlzLl9pY29uID0gcGF0aDtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9haGVhZCkge1xuICAgICAgICAgICAgdGhpcy5fYWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX2Rlc2NyaXB0aW9uICE9ICcnKSB7XG4gICAgICAgICAgICBpZihkcm9wZG93blJlc29sdmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUmVzb2x2ZXIodmFsdWUsIGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVhaGVhZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpbmRleCBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb2ludHNbaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwb2ludHNbaW5kZXhdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwb2ludHNbaW5kZXhdLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBvaW50c1tpbmRleF0ubG5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb2ludHNbaW5kZXhdLmRpc3BsYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsnZGlzcGxheSddID0gcG9pbnRzW2luZGV4XS5kaXNwbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gdHlwZWFoZWFkO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cblxuICAgIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMuX21hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyLnNldExhYmVsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWFya2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyO1xuICAgIH1cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgdGVtcGxhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWEgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm1hcmtlci5nZXRQb3NpdGlvbigpLnRvSlNPTigpLFxuICAgICAgICAgICAgdmlzaWJsZTogdGhpcy52aXNpYmxlLFxuICAgICAgICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMubWV0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXJpYSk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cblxuICAgIHNldEFoZWFkKGFoZWFkKSB7XG4gICAgICAgIHRoaXMuX2FoZWFkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYWhlYWQubmFtZTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxhdDogYWhlYWQubGF0LFxuICAgICAgICAgICAgbG5nOiBhaGVhZC5sbmdcbiAgICAgICAgfTtcblxuICAgICAgICBpZihhaGVhZFsnZGlzcGxheSddICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYoYWhlYWRbJ2Rpc3BsYXknXVsnc3ZnJ10gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uID0gYWhlYWRbJ2Rpc3BsYXknXVsnc3ZnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhdExuZyA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1ldGEgPSBhaGVhZC5fbWV0YTtcblxuICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IFtdO1xuICAgIH1cblxuICAgIHNldCBzZXJpYWwodmFsdWUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHZhbHVlLnBvc2l0aW9uO1xuXG4gICAgICAgIHRoaXMubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MpO1xuXG4gICAgICAgIHRoaXMuX2FoZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgICAgIGlmKHZhbHVlLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdmFsdWUubGFiZWwgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlLnZpc2libGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdmFsdWUudmlzaWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZS50aW1lIHx8ICcwOjAwJztcbiAgICAgICAgdGhpcy5pY29uID0gdmFsdWUuaWNvbiB8fCAnJztcbiAgICAgICAgdGhpcy5tZXRhID0gdmFsdWUubWV0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0aGlzLmxhdExuZyk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldExhYmVsKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRWaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFwLCBjb29yZHMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKCFtYXApIHtcbiAgICAgICAgICAgIHRocm93ICfQndC1INC+0L/RgNC10LTQtdC70LXQvdCwINC60LDRgNGC0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IG1hcC5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lID0gJyc7XG4gICAgX21hcCA9IG51bGw7XG4gICAgX2xhdExuZyA9IHt9O1xuICAgIF9kZXNjcmlwdGlvbiA9ICcnO1xuICAgIF9tYXJrZXIgPSBudWxsO1xuICAgIF90ZW1wbGF0ZSA9ICdjb250ZW50Lmh0bWwnO1xuICAgIF9sYWJlbCA9ICcnO1xuICAgIF92aXNpYmxlID0gdHJ1ZTtcbiAgICBfaWNvbiA9ICcnO1xuICAgIHR5cGVhaGVhZCA9IFtdO1xuICAgIF9tZXRhID0ge307XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHJldHVybiBwb3MudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBhZGRJbmZvKCkge1xuICAgICAgICBsZXQgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICQoZGF0YSkubG9hZCgnc3JjL3RwbC8nICsgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgbGV0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICBjb250ZW50OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCB0aGlzLl9tYXJrZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIEdNYXAge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodGB0YvQu9C60LAg0L3QsCDQvtCx0YrQtdC60YIg0LrQsNGA0YJcbiAgICAgKi9cbiAgICBfbWFwO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB2YXIgcG9pbnRDb29yZHMgPSB7XG4gICAgICAgICAgICBsYXQ6IDUyLjYxNjY3LFxuICAgICAgICAgICAgbG5nOiAzOS42MDAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbGVtZW50LCB7XG4gICAgICAgICAgICBjZW50ZXI6IHBvaW50Q29vcmRzLFxuICAgICAgICAgICAgem9vbTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLl9tYXAsICdyZXNpemUnKTtcbiAgICB9XG59IiwiaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQge01hcE1hcmtlcn0gZnJvbSBcIi4vbWFwLW1hcmtlclwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXRoR2VuZXJhdG9yIHtcbiAgICBnZXQgZGVmYXVsdEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0SWNvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVmYXVsdEljb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEljb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyO1xuICAgIH1cblxuICAgIHNldCBjb3VudGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBfbWFwO1xuICAgIF9wYXRoID0gW107XG4gICAgX2NvdW50ZXIgPSAxO1xuICAgIF9hZGRlZExpc3RlbmVycyA9IFtdO1xuICAgIF9kZWZhdWx0SWNvbiA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIGlmKG1hcCkge1xuICAgICAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0L/Rg9GB0Log0LPQtdC90LXRgNCw0YLQvtGA0LBcbiAgICAgKi9cbiAgICBzdGFydChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhdGguY2xlYXIoKTtcblxuICAgICAgICAgICAgbGV0IG1hcmtlcnNBcnJheSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGxldCBib3VuZHMgID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBtYXJrZXJKc29uIG9mIG1hcmtlcnNBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKG1hcmtlckpzb24pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IG1hcmtlckpzb24ucG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICBib3VuZHMuZXh0ZW5kKG5ldyBnb29nbGUubWFwcy5MYXRMbmcoe1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IHBvcy5sYXQsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogcG9zLmxuZ1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRBZGRMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2FkZGVkTGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlckpzb24pIHtcbiAgICAgICAgaWYodGhpcy5fcGF0aCkge1xuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXBNYXJrZXIodGhpcy5tYXAsIG1hcmtlckpzb24ucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBtYXJrZXJKc29uLmxhYmVsID0gdGhpcy5fcGF0aC5tYXJrZXJzLmxlbmd0aCArIDE7XG5cbiAgICAgICAgICAgIG1hcmtlci5zZXJpYWwgPSBtYXJrZXJKc29uO1xuXG4gICAgICAgICAgICBpZihtYXJrZXIuaWNvbiA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIuaWNvbiA9IHRoaXMuZGVmYXVsdEljb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdGguYWRkKG1hcmtlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaGFuZGxlciBvZiB0aGlzLl9hZGRlZExpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKlxuICpcbiAqL1xuaW1wb3J0IHthc3NlcnQgYXMgYXNzZXJ0fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFBhdGgge1xuICAgIGdldCBtYXJrZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VycztcbiAgICB9XG5cbiAgICBzZXQgbWFya2Vycyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXJzID0gdmFsdWU7XG4gICAgfVxuICAgICAgICBcbiAgICBfbWFya2VycyA9IFtdO1xuICAgIF91cGRhdGVMaXN0ZW5lcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC10YDQuNCw0LvQuNC30L7QstCw0L3QvdC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAqL1xuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYXMgPSB0aGlzLl9tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFyaykge1xuICAgICAgICAgICAgcmV0dXJuIG1hcmsuc2VyaWFsO1xuICAgICAgICB9KS5qb2luKCcsJyk7XG5cbiAgICAgICAgbGV0IHJlcyA9ICdbJyArIHNlcmlhcyArICddJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc0FycmF5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yZC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBcbiAgICBwb2ludFZhbHVlKGluZGV4LCBmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXJrZXJzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodC80LXQvdCwINC/0L7Qt9C40YbQuNC4INC40L3QtNC10LrRgdCwXG4gICAgICogQHBhcmFtIGluZGV4INCY0L3QtNC10LrRgVxuICAgICAqIEBwYXJhbSBjcmVtINCh0LzQtdGJ0LXQvdC40LVcbiAgICAgKi9cbiAgICBpbmRleERpc3Bvc2UoaW5kZXgsIGNyZW0pIHtcbiAgICAgICAgbGV0IHMgPSBpbmRleCArIGNyZW07XG5cbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG4gICAgICAgIGFzc2VydChzID4gLTEgJiYgcyA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX21hcmtlcnNbc107XG5cbiAgICAgICAgdGhpcy5fbWFya2Vyc1tzXSA9IHRoaXMuX21hcmtlcnNbaW5kZXhdO1xuICAgICAgICB0aGlzLl9tYXJrZXJzW2luZGV4XSA9IGVsZW07XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBpbmRleFJlbW92ZShpbmRleCkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX21hcmtlcnNbaW5kZXhdO1xuICAgICAgICBlbGVtLm1hcmtlci5zZXRNYXAobnVsbCk7XG5cbiAgICAgICAgdGhpcy5fbWFya2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc1N0cigpIHtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMuX21hcmtlcnMpIHtcbiAgICAgICAgICAgIHJlcyArPSBtYXJrLmNvb3Jkc1N0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIFxuICAgIGFkZFVwZGF0ZUxpc3RlbmVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIG1hcmsubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBjYWxsVXBkYXRlSGFuZGxlcnMoKSB7XG4gICAgICAgIGZvcihsZXQgaGFuZGxlciBvZiB0aGlzLl91cGRhdGVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgICAgbWFya2VyLm1hcmtlci5hZGRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYodGhpcy5tYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoTGFiZWxzKCkge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBpZihtYXJrLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBtYXJrLmxhYmVsID0gaW5kZXggKyAnJztcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFya2Vycykge1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBtYXJrZXJzO1xuXG4gICAgICAgIHRoaXMuYWRkVXBkYXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGFiZWxzKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBfbWFwID0gbnVsbDtcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB9XG5cbiAgICB3YXlwb2ludHMoY29vcmRzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY29vcmRzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBjb29yZHNbaV0sXG4gICAgICAgICAgICAgICAgc3RvcG92ZXI6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHBhdGgpIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHBhdGguY29vcmRzQXJyYXk7XG5cbiAgICAgICAgaWYoY29vcmRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldE1hcCh0aGlzLm1hcC5tYXApO1xuXG4gICAgICAgIGxldCB3YXlwb2ludHMgPSB0aGlzLndheXBvaW50cyhjb29yZHMpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgb3JpZ2luOiBjb29yZHNbMF0sXG4gICAgICAgICAgICB3YXlwb2ludHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiO1xuICAgIH1cbn0iXX0=