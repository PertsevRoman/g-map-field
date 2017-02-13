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

        var pointCoords = { lat: 52.61667, lng: 39.6000 };

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFF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QztBQUN2QyxRQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNaLGNBQU0sV0FBVyxrQkFBakI7QUFDSDtBQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxMy4xMi4xNi5cbiAqXG4gKiDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFXG4gKi9cblxuaW1wb3J0IHtQYXRoR2VuZXJhdG9yfSBmcm9tIFwiLi9saWIvcGF0aC1nZW5lcmF0b3JcIjtcbmltcG9ydCB7R01hcH0gZnJvbSBcIi4vbGliL21hcFwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL2xpYi9yZW5kZXJlclwiO1xuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9saWIvcGF0aFwiO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BhdGgtaW5wdXQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21wb25lbnRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb21wb25lbnROYW1lKVswXTtcblxuICAgIGlmKGNvbXBvbmVudEFuY2hvciA9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgdGFnIG5vdCBmb3VuZGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHRlbXBsYXRlTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ3RlbXBsYXRlJyk7XG4gICAgbGV0IGZpZWxkVmFsdWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC12YWx1ZScpO1xuICAgIGxldCBmaWVsZE5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC1uYW1lJyk7XG4gICAgbGV0IGljb25zUmVzb3VyY2UgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdpY29ucy1yZXNvdXJjZScpO1xuXG4gICAgJC5nZXQoaWNvbnNSZXNvdXJjZSwgZnVuY3Rpb24gKGljb25zKSB7XG4gICAgICAgICQuZ2V0KHRlbXBsYXRlTmFtZSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IFByb2YgPSBWdWUuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhHZW5lcmF0b3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoOiBuZXcgUGF0aChbXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5FZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpY29ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5QYXRoOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5kZWZhdWx0SWNvbiA9IGljb25zWzBdLmljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLnN0YXJ0KHRoaXMuY3VycmVudFBhdGgsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Ub3A6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3duOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4UmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXRMbmcgPSBwb2ludC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5tYXAuc2V0Q2VudGVyKGxhdExuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFoZWFkOiBmdW5jdGlvbiAocG9pbnQsIGFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQuc2V0QWhlYWQoYWhlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5nLW1hcHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IEdNYXAoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yID0gbmV3IFBhdGhHZW5lcmF0b3IodGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5tYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGF0aCB1cGRhdGluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hcHBlbmRBZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IHRoaXMuY3VycmVudFBhdGguc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBwb2ludC4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICdpbnB1dFtkYXRlLXRpbWU9XCJkdC0nICsgKGVsZW1Qb3NpdGlvbiAtIDEpICsgJ1wiXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNrZXJBbmNob3IgPSAkKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyQW5jaG9yLnRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXJpZGlhbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm9uKCdjaGFuZ2VUaW1lLnRpbWVwaWNrZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBpY2tlckFuY2hvci5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnBvaW50VmFsdWUoaW5kZXgsICd0aW1lJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvaW50IGFkZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcC5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvb3JkcyA9IGV2ZW50LmxhdExuZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBtYXJrZXJDb29yZHMudG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZCBjb21wb25lbnQuLi4nKTtcbiAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICBuZXcgUHJvZigpLiRtb3VudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC10YLRgdGPINC+0L/RgNC10LTQtdC70LjRgtGMINC60L7QvNC/0L7QvdC10L3RgjogVnVlLmpzINC90LUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC9Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5leHBvcnQgY2xhc3MgTWFwTWFya2VyIHtcbiAgICBnZXQgbWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gICAgfVxuXG4gICAgc2V0IG1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGRyYWdnYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0RHJhZ2dhYmxlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcCh2YWx1ZS5tYXApO1xuICAgIH1cbiAgICBnZXQgbGF0TG5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF0TG5nO1xuICAgIH1cblxuICAgIHNldCBsYXRMbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGF0TG5nID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24obmV3IGdvb2dsZS5tYXBzLkxhdExuZyh2YWx1ZS5sYXQsIHZhbHVlLmxuZykpO1xuICAgIH1cblxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFZpc2libGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0VmlzaWJsZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGljb24ocGF0aCkge1xuICAgICAgICB0aGlzLl9pY29uID0gcGF0aDtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9haGVhZCkge1xuICAgICAgICAgICAgdGhpcy5fYWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX2Rlc2NyaXB0aW9uICE9ICcnKSB7XG4gICAgICAgICAgICBpZihkcm9wZG93blJlc29sdmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUmVzb2x2ZXIodmFsdWUsIGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVhaGVhZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpbmRleCBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb2ludHNbaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwb2ludHNbaW5kZXhdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwb2ludHNbaW5kZXhdLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBvaW50c1tpbmRleF0ubG5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb2ludHNbaW5kZXhdLmRpc3BsYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsnZGlzcGxheSddID0gcG9pbnRzW2luZGV4XS5kaXNwbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gdHlwZWFoZWFkO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cblxuICAgIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMuX21hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyLnNldExhYmVsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWFya2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyO1xuICAgIH1cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgdGVtcGxhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWEgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm1hcmtlci5nZXRQb3NpdGlvbigpLnRvSlNPTigpLFxuICAgICAgICAgICAgdmlzaWJsZTogdGhpcy52aXNpYmxlLFxuICAgICAgICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMubWV0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXJpYSk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cblxuICAgIHNldEFoZWFkKGFoZWFkKSB7XG4gICAgICAgIHRoaXMuX2FoZWFkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYWhlYWQubmFtZTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxhdDogYWhlYWQubGF0LFxuICAgICAgICAgICAgbG5nOiBhaGVhZC5sbmdcbiAgICAgICAgfTtcblxuICAgICAgICBpZihhaGVhZFsnZGlzcGxheSddICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYoYWhlYWRbJ2Rpc3BsYXknXVsnc3ZnJ10gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uID0gYWhlYWRbJ2Rpc3BsYXknXVsnc3ZnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhdExuZyA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1ldGEgPSBhaGVhZC5fbWV0YTtcblxuICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IFtdO1xuICAgIH1cblxuICAgIHNldCBzZXJpYWwodmFsdWUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHZhbHVlLnBvc2l0aW9uO1xuXG4gICAgICAgIHRoaXMubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MpO1xuXG4gICAgICAgIHRoaXMuX2FoZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgICAgIGlmKHZhbHVlLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdmFsdWUubGFiZWwgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlLnZpc2libGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdmFsdWUudmlzaWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZS50aW1lIHx8ICcwOjAwJztcbiAgICAgICAgdGhpcy5pY29uID0gdmFsdWUuaWNvbiB8fCAnJztcbiAgICAgICAgdGhpcy5tZXRhID0gdmFsdWUubWV0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0aGlzLmxhdExuZyk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldExhYmVsKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRWaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFwLCBjb29yZHMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKCFtYXApIHtcbiAgICAgICAgICAgIHRocm93ICfQndC1INC+0L/RgNC10LTQtdC70LXQvdCwINC60LDRgNGC0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IG1hcC5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lID0gJyc7XG4gICAgX21hcCA9IG51bGw7XG4gICAgX2xhdExuZyA9IHt9O1xuICAgIF9kZXNjcmlwdGlvbiA9ICcnO1xuICAgIF9tYXJrZXIgPSBudWxsO1xuICAgIF90ZW1wbGF0ZSA9ICdjb250ZW50Lmh0bWwnO1xuICAgIF9sYWJlbCA9ICcnO1xuICAgIF92aXNpYmxlID0gdHJ1ZTtcbiAgICBfaWNvbiA9ICcnO1xuICAgIHR5cGVhaGVhZCA9IFtdO1xuICAgIF9tZXRhID0ge307XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHJldHVybiBwb3MudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBhZGRJbmZvKCkge1xuICAgICAgICBsZXQgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICQoZGF0YSkubG9hZCgnc3JjL3RwbC8nICsgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgbGV0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICBjb250ZW50OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCB0aGlzLl9tYXJrZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIEdNYXAge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodGB0YvQu9C60LAg0L3QsCDQvtCx0YrQtdC60YIg0LrQsNGA0YJcbiAgICAgKi9cbiAgICBfbWFwO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB2YXIgcG9pbnRDb29yZHMgPSB7bGF0OiA1Mi42MTY2NywgbG5nOiAzOS42MDAwfTtcblxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNlbnRlcjogcG9pbnRDb29yZHMsXG4gICAgICAgICAgICB6b29tOiAxNlxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMuX21hcCwgJ3Jlc2l6ZScpO1xuICAgIH1cbn0iLCJpbXBvcnQge1BhdGh9IGZyb20gXCIuL3BhdGhcIjtcbmltcG9ydCB7TWFwTWFya2VyfSBmcm9tIFwiLi9tYXAtbWFya2VyXCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhdGhHZW5lcmF0b3Ige1xuICAgIGdldCBkZWZhdWx0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRJY29uO1xuICAgIH1cblxuICAgIHNldCBkZWZhdWx0SWNvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0SWNvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXI7XG4gICAgfVxuXG4gICAgc2V0IGNvdW50ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY291bnRlciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIF9tYXA7XG4gICAgX3BhdGggPSBbXTtcbiAgICBfY291bnRlciA9IDE7XG4gICAgX2FkZGVkTGlzdGVuZXJzID0gW107XG4gICAgX2RlZmF1bHRJY29uID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgaWYobWFwKSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQv9GD0YHQuiDQs9C10L3QtdGA0LDRgtC+0YDQsFxuICAgICAqL1xuICAgIHN0YXJ0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG5cbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGF0aC5jbGVhcigpO1xuXG4gICAgICAgICAgICBsZXQgbWFya2Vyc0FycmF5ID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgbWFya2VySnNvbiBvZiBtYXJrZXJzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChtYXJrZXJKc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGFwcGVuZEFkZExpc3RlbmVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYWRkZWRMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBhZGQobWFya2VySnNvbikge1xuICAgICAgICBpZih0aGlzLl9wYXRoKSB7XG4gICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IE1hcE1hcmtlcih0aGlzLm1hcCwgbWFya2VySnNvbi5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIG1hcmtlckpzb24ubGFiZWwgPSB0aGlzLl9wYXRoLm1hcmtlcnMubGVuZ3RoICsgMTtcblxuICAgICAgICAgICAgbWFya2VyLnNlcmlhbCA9IG1hcmtlckpzb247XG5cbiAgICAgICAgICAgIGlmKG1hcmtlci5pY29uID09PSAnJykge1xuICAgICAgICAgICAgICAgIG1hcmtlci5pY29uID0gdGhpcy5kZWZhdWx0SWNvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcGF0aC5hZGQobWFya2VyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX2FkZGVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqXG4gKlxuICovXG5pbXBvcnQge2Fzc2VydCBhcyBhc3NlcnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgZ2V0IG1hcmtlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xuICAgIH1cblxuICAgIHNldCBtYXJrZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIF9tYXJrZXJzID0gW107XG4gICAgX3VwZGF0ZUxpc3RlbmVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C10L3QuNC1INGB0LXRgNC40LDQu9C40LfQvtCy0LDQvdC90L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICovXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhcyA9IHRoaXMuX21hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyay5zZXJpYWw7XG4gICAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgICBsZXQgcmVzID0gJ1snICsgc2VyaWFzICsgJ10nO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIHBvaW50VmFsdWUoaW5kZXgsIGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LzQtdC90LAg0L/QvtC30LjRhtC40Lgg0LjQvdC00LXQutGB0LBcbiAgICAgKiBAcGFyYW0gaW5kZXgg0JjQvdC00LXQutGBXG4gICAgICogQHBhcmFtIGNyZW0g0KHQvNC10YnQtdC90LjQtVxuICAgICAqL1xuICAgIGluZGV4RGlzcG9zZShpbmRleCwgY3JlbSkge1xuICAgICAgICBsZXQgcyA9IGluZGV4ICsgY3JlbTtcblxuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgYXNzZXJ0KHMgPiAtMSAmJiBzIDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tzXTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzW3NdID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdID0gZWxlbTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGluZGV4UmVtb3ZlKGluZGV4KSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIGVsZW0ubWFya2VyLnNldE1hcChudWxsKTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5fbWFya2Vycykge1xuICAgICAgICAgICAgcmVzICs9IG1hcmsuY29vcmRzU3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgXG4gICAgYWRkVXBkYXRlTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgbWFyay5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGNhbGxVcGRhdGVIYW5kbGVycygpIHtcbiAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX3VwZGF0ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlcikge1xuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICBtYXJrZXIubWFya2VyLmFkZExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZih0aGlzLm1hcmtlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2hMYWJlbHMoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIGlmKG1hcmsudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIG1hcmsubGFiZWwgPSBpbmRleCArICcnO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXJrZXJzKSB7XG4gICAgICAgIHRoaXMubWFya2VycyA9IG1hcmtlcnM7XG5cbiAgICAgICAgdGhpcy5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMYWJlbHMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIF9tYXAgPSBudWxsO1xuICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgIH1cblxuICAgIHdheXBvaW50cyhjb29yZHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjb29yZHMubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IGNvb3Jkc1tpXSxcbiAgICAgICAgICAgICAgICBzdG9wb3ZlcjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZW5kZXIocGF0aCkge1xuICAgICAgICBsZXQgY29vcmRzID0gcGF0aC5jb29yZHNBcnJheTtcblxuICAgICAgICBpZihjb29yZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKHRoaXMubWFwLm1hcCk7XG5cbiAgICAgICAgbGV0IHdheXBvaW50cyA9IHRoaXMud2F5cG9pbnRzKGNvb3Jkcyk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBvcmlnaW46IGNvb3Jkc1swXSxcbiAgICAgICAgICAgIHdheXBvaW50cyxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IG1lc3NhZ2UgfHwgXCJBc3NlcnRpb24gZmFpbGVkXCI7XG4gICAgfVxufSJdfQ==