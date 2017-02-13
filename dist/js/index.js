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
                            point.typeahead = [];

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

            this.latLng = position;
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
                            typeahead.push({
                                name: points[index].name,
                                lat: points[index].lat,
                                lng: points[index].lng
                            });
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
                draggable: this.draggable
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

            if (typeof value.visible === 'boolean') {
                this.visible = value.visible;
            } else {
                this.visible = true;
            }

            this.time = value.time || '0:00';
            this.icon = value.icon || '';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFFQSw0QkFBRyxVQUFILEVBQWU7QUFDWCxpQ0FBSyxTQUFMLENBQWUsVUFBZjtBQUNILHlCQUZELE1BRU87QUFDSCxpQ0FBSyxTQUFMO0FBQ0g7QUFDSixxQkFaaUI7QUFhbEIsMEJBQU0sZ0JBQVk7QUFDZCwrQkFBTztBQUNILDJDQUFlLElBRFo7QUFFSCxpQ0FBSyxJQUZGO0FBR0gseUNBQWEsZUFBUyxFQUFULENBSFY7QUFJSCxzQ0FBVSxJQUpQO0FBS0gsb0NBQVEsSUFMTDtBQU1ILHVDQUFXO0FBTlIseUJBQVA7QUFRSCxxQkF0QmlCO0FBdUJsQiw4QkFBVTtBQUNOLCtCQUFPLGlCQUFZO0FBQ2YsbUNBQU8sTUFBUDtBQUNIO0FBSEsscUJBdkJRO0FBNEJsQiw2QkFBUztBQUNMLG1DQUFXLG1CQUFVLElBQVYsRUFBZ0I7QUFDdkIsZ0NBQUcsS0FBSyxXQUFSLEVBQXFCO0FBQ2pCLHFDQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDSDs7QUFFRCxpQ0FBSyxhQUFMLENBQW1CLFdBQW5CLEdBQWlDLE9BQU0sQ0FBTixFQUFTLElBQTFDO0FBQ0EsaUNBQUssYUFBTCxDQUFtQixLQUFuQixDQUF5QixLQUFLLFdBQTlCLEVBQTJDLElBQTNDO0FBQ0gseUJBUkk7QUFTTCxvQ0FBWSxzQkFBWTtBQUNwQixpQ0FBSyxhQUFMLENBQW1CLE1BQW5CO0FBQ0gseUJBWEk7QUFZTCwrQkFBTyxlQUFVLEtBQVYsRUFBaUI7QUFDcEIsaUNBQUssV0FBTCxDQUFpQixZQUFqQixDQUE4QixLQUE5QixFQUFxQyxDQUFDLENBQXRDO0FBQ0gseUJBZEk7QUFlTCxnQ0FBUSxnQkFBVSxLQUFWLEVBQWlCO0FBQ3JCLGlDQUFLLFdBQUwsQ0FBaUIsWUFBakIsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckM7QUFDSCx5QkFqQkk7QUFrQkwsZ0NBQVEsZ0JBQVUsS0FBVixFQUFpQjtBQUNyQixpQ0FBSyxXQUFMLENBQWlCLFdBQWpCLENBQTZCLEtBQTdCO0FBQ0gseUJBcEJJO0FBcUJMLGdDQUFRLGdCQUFVLEtBQVYsRUFBaUI7QUFDckIsZ0NBQUksU0FBUyxNQUFNLE1BQW5COztBQUVBLGlDQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsU0FBYixDQUF1QixNQUF2QjtBQUNILHlCQXpCSTtBQTBCTCxtQ0FBVyxxQkFBWTtBQUNuQixpQ0FBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0gseUJBNUJJO0FBNkJMLGtDQUFVLGtCQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0I7QUFDOUIsa0NBQU0sUUFBTixDQUFlLEtBQWY7QUFDQSxrQ0FBTSxTQUFOLEdBQWtCLEVBQWxCOztBQUVBLGlDQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQUssV0FBMUI7QUFDSCx5QkFsQ0k7QUFtQ0wsOEJBQU0sZ0JBQVk7QUFDZCxnQ0FBSSxVQUFVLEtBQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZDs7QUFFQSxpQ0FBSyxHQUFMLEdBQVcsY0FBUyxPQUFULENBQVg7QUFDQSxpQ0FBSyxhQUFMLEdBQXFCLGlDQUFrQixLQUFLLEdBQXZCLENBQXJCO0FBQ0EsaUNBQUssUUFBTCxHQUFnQix1QkFBYSxLQUFLLEdBQWxCLENBQWhCOztBQUVBLGlDQUFLLFdBQUwsQ0FBaUIsaUJBQWpCLENBQW1DLFlBQVk7QUFDM0M7QUFDQSx3Q0FBUSxHQUFSLENBQVksa0JBQVo7QUFDQTs7QUFFQSxxQ0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFLLFdBQTFCO0FBQ0EscUNBQUssWUFBTDtBQUNILDZCQVBrQyxDQU9qQyxJQVBpQyxDQU81QixJQVA0QixDQUFuQzs7QUFTQSxpQ0FBSyxhQUFMLENBQW1CLGlCQUFuQixDQUFxQyxZQUFZO0FBQzdDLG9DQUFNLGVBQWUsS0FBSyxXQUFMLENBQWlCLElBQXRDOztBQUVBO0FBQ0Esd0NBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0E7O0FBRUEsMkNBQVcsWUFBWTtBQUNuQix3Q0FBTSxXQUFXLDBCQUEwQixlQUFlLENBQXpDLElBQThDLElBQS9EO0FBQ0Esd0NBQU0sZUFBZSxFQUFFLFFBQUYsQ0FBckI7O0FBRUEsaURBQWEsVUFBYixDQUF3QjtBQUNwQixzREFBYztBQURNLHFDQUF4QixFQUVHLEVBRkgsQ0FFTSx1QkFGTixFQUUrQixVQUFVLENBQVYsRUFBYTtBQUN4Qyw0Q0FBTSxRQUFRLEVBQUUsSUFBRixDQUFPLEtBQXJCO0FBQ0EsNENBQUksUUFBUSxhQUFhLElBQWIsQ0FBa0IsWUFBbEIsQ0FBWjs7QUFFQSw2Q0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQTVCLEVBQW1DLE1BQW5DLEVBQTJDLEtBQTNDOztBQUVBO0FBQ0EsZ0RBQVEsR0FBUixDQUFZLGFBQVo7QUFDQTtBQUNILHFDQVQ4QixDQVM3QixJQVQ2QixDQVN4QixJQVR3QixDQUYvQjtBQVlILGlDQWhCVSxDQWdCVCxJQWhCUyxDQWdCSixJQWhCSSxDQUFYLEVBZ0JjLEdBaEJkO0FBaUJILDZCQXhCb0MsQ0F3Qm5DLElBeEJtQyxDQXdCOUIsSUF4QjhCLENBQXJDOztBQTBCQSxtQ0FBTyxJQUFQLENBQVksS0FBWixDQUFrQixXQUFsQixDQUE4QixLQUFLLEdBQUwsQ0FBUyxHQUF2QyxFQUE0QyxPQUE1QyxFQUFxRCxVQUFTLEtBQVQsRUFBZ0I7QUFDakUsb0NBQU0sZUFBZSxNQUFNLE1BQTNCOztBQUVBLHFDQUFLLGFBQUwsQ0FBbUIsR0FBbkIsQ0FBdUI7QUFDbkIsOENBQVUsYUFBYSxNQUFiO0FBRFMsaUNBQXZCOztBQUlBLHFDQUFLLFlBQUw7QUFDSCw2QkFSb0QsQ0FRbkQsSUFSbUQsQ0FROUMsSUFSOEMsQ0FBckQ7QUFTSDtBQXRGSTtBQTVCUyxpQkFBWCxDQUFYOztBQXNIQTtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxtQkFBWjtBQUNBOztBQUVBLG9CQUFJLElBQUosR0FBVyxNQUFYLENBQWtCLGFBQWxCO0FBQ0gsYUE1SEQsQ0E0SEUsT0FBTyxLQUFQLEVBQWM7QUFDWix3QkFBUSxHQUFSLENBQVksS0FBWjtBQUNBLHdCQUFRLEdBQVIsQ0FBWSw0REFBWjtBQUNIO0FBQ0osU0FqSUQ7QUFrSUgsS0FuSUQ7QUFvSUgsQ0FqSkQ7Ozs7Ozs7Ozs7Ozs7QUNiQTs7O0lBR2EsUyxXQUFBLFM7OztpQ0FvSEE7QUFDTCxpQkFBSyxNQUFMLENBQVksTUFBWixDQUFtQixJQUFuQjtBQUNIOzs7aUNBRVEsSyxFQUFPO0FBQ1osaUJBQUssTUFBTCxHQUFjLElBQWQ7O0FBRUEsaUJBQUssV0FBTCxHQUFtQixNQUFNLElBQXpCOztBQUVBLGdCQUFNLFdBQVc7QUFDYixxQkFBSyxNQUFNLEdBREU7QUFFYixxQkFBSyxNQUFNO0FBRkUsYUFBakI7O0FBS0EsaUJBQUssTUFBTCxHQUFjLFFBQWQ7QUFDSDs7OzRCQWxJZTtBQUNaLG1CQUFPLEtBQUssT0FBTCxDQUFhLFlBQWIsRUFBUDtBQUNILFM7MEJBRWEsSyxFQUFPO0FBQ2pCLGlCQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEtBQTFCO0FBQ0g7Ozs0QkFDVTtBQUNQLG1CQUFPLEtBQUssS0FBWjtBQUNILFM7MEJBc0NRLEksRUFBTTtBQUNYLGlCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0g7Ozs0QkF2Q1U7QUFDUCxtQkFBTyxLQUFLLEtBQVo7QUFDSCxTOzBCQUVRLEssRUFBTztBQUNaLGlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0g7Ozs0QkFDUztBQUNOLG1CQUFPLEtBQUssSUFBWjtBQUNILFM7MEJBRU8sSyxFQUFPO0FBQ1gsaUJBQUssSUFBTCxHQUFZLEtBQVo7QUFDQSxpQkFBSyxNQUFMLENBQVksTUFBWixDQUFtQixNQUFNLEdBQXpCO0FBQ0g7Ozs0QkFDWTtBQUNULG1CQUFPLEtBQUssT0FBWjtBQUNILFM7MEJBRVUsSyxFQUFPO0FBQ2QsaUJBQUssT0FBTCxHQUFlLEtBQWY7O0FBRUEsaUJBQUssTUFBTCxDQUFZLFdBQVosQ0FBd0IsSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixNQUFNLEdBQTdCLEVBQWtDLE1BQU0sR0FBeEMsQ0FBeEI7QUFDSDs7OzRCQUVhO0FBQ1YsbUJBQU8sS0FBSyxPQUFMLENBQWEsVUFBYixFQUFQO0FBQ0gsUzswQkFFVyxLLEVBQU87QUFDZixpQkFBSyxPQUFMLENBQWEsVUFBYixDQUF3QixLQUF4QjtBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDs7OzRCQUNpQjtBQUNkLG1CQUFPLEtBQUssWUFBWjtBQUNILFM7MEJBTWUsSyxFQUFPO0FBQ25CLGlCQUFLLFlBQUwsR0FBb0IsS0FBcEI7O0FBRUEsZ0JBQUcsS0FBSyxNQUFSLEVBQWdCO0FBQ1oscUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQTtBQUNIOztBQUVELGdCQUFHLEtBQUssWUFBTCxJQUFxQixFQUF4QixFQUE0QjtBQUN4QixvQkFBRyxvQkFBb0IsU0FBdkIsRUFBa0M7QUFDOUIscUNBQWlCLEtBQWpCLEVBQXdCLFVBQVUsTUFBVixFQUFrQjtBQUN0Qyw0QkFBSSxZQUFZLEVBQWhCOztBQUVBLDZCQUFJLElBQUksS0FBUixJQUFpQixNQUFqQixFQUF5QjtBQUNyQixzQ0FBVSxJQUFWLENBQWU7QUFDWCxzQ0FBTSxPQUFPLEtBQVAsRUFBYyxJQURUO0FBRVgscUNBQUssT0FBTyxLQUFQLEVBQWMsR0FGUjtBQUdYLHFDQUFLLE9BQU8sS0FBUCxFQUFjO0FBSFIsNkJBQWY7QUFLSDs7QUFFRCw2QkFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0gscUJBWnVCLENBWXRCLElBWnNCLENBWWpCLElBWmlCLENBQXhCO0FBYUg7QUFDSixhQWhCRCxNQWdCTztBQUNILHFCQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDSDtBQUNKOzs7NEJBRVc7QUFDUixtQkFBTyxLQUFLLE1BQVo7QUFDSCxTOzBCQUVTLEssRUFBTztBQUNiLGlCQUFLLE1BQUwsR0FBYyxLQUFkOztBQUVBLGdCQUFHLEtBQUssT0FBUixFQUFpQjtBQUNiLHFCQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLEtBQXRCO0FBQ0g7QUFDSjs7OzRCQUNZO0FBQ1QsbUJBQU8sS0FBSyxPQUFaO0FBQ0g7Ozs0QkFDYztBQUNYLG1CQUFPLEtBQUssU0FBWjtBQUNILFM7MEJBRVksSyxFQUFPO0FBQ2hCLGlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7OzRCQUVZO0FBQ1QsZ0JBQUksUUFBUTtBQUNSLDZCQUFhLEtBQUssV0FEVjtBQUVSLDBCQUFVLEtBQUssTUFBTCxDQUFZLFdBQVosR0FBMEIsTUFBMUIsRUFGRjtBQUdSLHlCQUFTLEtBQUssT0FITjtBQUlSLHNCQUFNLEtBQUssSUFKSDtBQUtSLHNCQUFNLEtBQUssSUFMSDtBQU1SLDJCQUFXLEtBQUs7QUFOUixhQUFaOztBQVNBLG1CQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBUDtBQUNILFM7MEJBbUJVLEssRUFBTztBQUNkLGdCQUFJLE1BQU0sTUFBTSxRQUFoQjs7QUFFQSxpQkFBSyxNQUFMLEdBQWMsSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixHQUF2QixDQUFkO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixNQUFNLFdBQU4sSUFBcUIsRUFBeEM7QUFDQSxnQkFBRyxNQUFNLEtBQVQsRUFBZ0I7QUFDWixxQkFBSyxLQUFMLEdBQWEsTUFBTSxLQUFOLEdBQWMsRUFBM0I7QUFDSDs7QUFFRCxnQkFBRyxPQUFPLE1BQU0sT0FBYixLQUF5QixTQUE1QixFQUF1QztBQUNuQyxxQkFBSyxPQUFMLEdBQWUsTUFBTSxPQUFyQjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBRUQsaUJBQUssSUFBTCxHQUFZLE1BQU0sSUFBTixJQUFjLE1BQTFCO0FBQ0EsaUJBQUssSUFBTCxHQUFZLE1BQU0sSUFBTixJQUFjLEVBQTFCOztBQUVBLGlCQUFLLE1BQUwsQ0FBWSxXQUFaLENBQXdCLEtBQUssTUFBN0I7QUFDQSxpQkFBSyxNQUFMLENBQVksUUFBWixDQUFxQixLQUFLLEtBQTFCO0FBQ0EsaUJBQUssTUFBTCxDQUFZLFVBQVosQ0FBdUIsS0FBSyxPQUE1QjtBQUNIOzs7QUFFRCx1QkFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLEVBQW1DO0FBQUE7O0FBQUEsYUFrQm5DLEtBbEJtQyxHQWtCM0IsRUFsQjJCO0FBQUEsYUFtQm5DLElBbkJtQyxHQW1CNUIsSUFuQjRCO0FBQUEsYUFvQm5DLE9BcEJtQyxHQW9CekIsRUFwQnlCO0FBQUEsYUFxQm5DLFlBckJtQyxHQXFCcEIsRUFyQm9CO0FBQUEsYUFzQm5DLE9BdEJtQyxHQXNCekIsSUF0QnlCO0FBQUEsYUF1Qm5DLFNBdkJtQyxHQXVCdkIsY0F2QnVCO0FBQUEsYUF3Qm5DLE1BeEJtQyxHQXdCMUIsRUF4QjBCO0FBQUEsYUF5Qm5DLFFBekJtQyxHQXlCeEIsSUF6QndCO0FBQUEsYUEwQm5DLEtBMUJtQyxHQTBCM0IsRUExQjJCO0FBQUEsYUEyQm5DLFNBM0JtQyxHQTJCdkIsRUEzQnVCOztBQUMvQixZQUFHLENBQUMsR0FBSixFQUFTO0FBQ0wsa0JBQU0scUJBQU47QUFDSDs7QUFFRCxhQUFLLE9BQUwsR0FBZSxJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCO0FBQ2xDLGlCQUFLLElBQUksR0FEeUI7QUFFbEMsc0JBQVUsTUFGd0I7QUFHbEMsdUJBQVc7QUFIdUIsU0FBdkIsQ0FBZjs7QUFNQSxhQUFLLEdBQUwsR0FBVyxHQUFYOztBQUVBLFlBQUcsUUFBSCxFQUFhO0FBQ1QsaUJBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNIO0FBQ0o7Ozs7c0NBYWE7QUFDVixtQkFBTyxLQUFLLE9BQUwsQ0FBYSxXQUFiLEVBQVA7QUFDSDs7O2tDQU9TO0FBQ04sZ0JBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDs7QUFFQSxjQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsYUFBYSxLQUFLLFFBQS9COztBQUVBLGdCQUFJLGFBQWEsSUFBSSxPQUFPLElBQVAsQ0FBWSxVQUFoQixDQUEyQjtBQUN4Qyx5QkFBUztBQUQrQixhQUEzQixDQUFqQjs7QUFJQSxpQkFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixXQUF6QixFQUFzQyxZQUFXO0FBQzdDLDJCQUFXLElBQVgsQ0FBZ0IsR0FBaEIsRUFBcUIsS0FBSyxPQUExQjtBQUNILGFBRkQ7O0FBSUEsaUJBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsVUFBekIsRUFBcUMsWUFBVztBQUM1QywyQkFBVyxLQUFYO0FBQ0gsYUFGRDtBQUdIOzs7NEJBckJlO0FBQ1osZ0JBQUksTUFBTSxLQUFLLFdBQUwsRUFBVjtBQUNBLG1CQUFPLElBQUksUUFBSixFQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk1MOzs7O0lBSWEsSSxXQUFBLEk7Ozs0QkFDQztBQUNOLG1CQUFPLEtBQUssSUFBWjtBQUNILFM7MEJBRU8sSyxFQUFPO0FBQ1gsaUJBQUssSUFBTCxHQUFZLEtBQVo7QUFDSDs7QUFFRDs7Ozs7O0FBS0Esa0JBQVksT0FBWixFQUFxQjtBQUFBOztBQUNqQixZQUFJLGNBQWMsRUFBQyxLQUFLLFFBQU4sRUFBZ0IsS0FBSyxPQUFyQixFQUFsQjs7QUFFQSxhQUFLLElBQUwsR0FBWSxJQUFJLE9BQU8sSUFBUCxDQUFZLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCO0FBQ3JDLG9CQUFRLFdBRDZCO0FBRXJDLGtCQUFNO0FBRitCLFNBQTdCLENBQVo7O0FBS0EsZUFBTyxJQUFQLENBQVksS0FBWixDQUFrQixPQUFsQixDQUEwQixLQUFLLElBQS9CLEVBQXFDLFFBQXJDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQzNCTDs7QUFDQTs7OztBQUNBOzs7O0lBSWEsYSxXQUFBLGE7Ozs0QkFDUztBQUNkLG1CQUFPLEtBQUssWUFBWjtBQUNILFM7MEJBRWUsSyxFQUFPO0FBQ25CLGlCQUFLLFlBQUwsR0FBb0IsS0FBcEI7QUFDSDs7OzRCQUNhO0FBQ1YsbUJBQU8sS0FBSyxRQUFaO0FBQ0gsUzswQkFFVyxLLEVBQU87QUFDZixpQkFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7Ozs0QkFDUztBQUNOLG1CQUFPLEtBQUssSUFBWjtBQUNILFM7MEJBRU8sSyxFQUFPO0FBQ1gsaUJBQUssSUFBTCxHQUFZLEtBQVo7QUFDSDs7O0FBT0QsMkJBQVksR0FBWixFQUFpQjtBQUFBOztBQUFBLGFBTGpCLEtBS2lCLEdBTFQsRUFLUztBQUFBLGFBSmpCLFFBSWlCLEdBSk4sQ0FJTTtBQUFBLGFBSGpCLGVBR2lCLEdBSEMsRUFHRDtBQUFBLGFBRmpCLFlBRWlCLEdBRkYsRUFFRTs7QUFDYixZQUFHLEdBQUgsRUFBUTtBQUNKLGlCQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7Ozs4QkFHTSxJLEVBQU0sSSxFQUFNO0FBQ2QsaUJBQUssS0FBTCxHQUFhLElBQWI7O0FBRUEsZ0JBQUcsSUFBSCxFQUFTO0FBQ0wscUJBQUssS0FBTCxDQUFXLEtBQVg7O0FBRUEsb0JBQUksZUFBZSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQW5COztBQUhLO0FBQUE7QUFBQTs7QUFBQTtBQUtMLHlDQUF1QixZQUF2Qiw4SEFBcUM7QUFBQSw0QkFBNUIsVUFBNEI7O0FBQ2pDLDZCQUFLLEdBQUwsQ0FBUyxVQUFUO0FBQ0g7QUFQSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUVI7QUFDSjs7O2lDQUVRO0FBQ0wsaUJBQUssS0FBTCxHQUFhLElBQWI7QUFDSDs7OzBDQUVpQixPLEVBQVM7QUFDdkIsaUJBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixPQUExQjtBQUNIOzs7NEJBRUcsVSxFQUFZO0FBQ1osZ0JBQUcsS0FBSyxLQUFSLEVBQWU7QUFDWCxvQkFBSSxTQUFTLHlCQUFjLEtBQUssR0FBbkIsRUFBd0IsV0FBVyxRQUFuQyxDQUFiOztBQUVBLDJCQUFXLEtBQVgsR0FBbUIsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixNQUFuQixHQUE0QixDQUEvQzs7QUFFQSx1QkFBTyxNQUFQLEdBQWdCLFVBQWhCOztBQUVBLG9CQUFHLE9BQU8sSUFBUCxLQUFnQixFQUFuQixFQUF1QjtBQUNuQiwyQkFBTyxJQUFQLEdBQWMsS0FBSyxXQUFuQjtBQUNIOztBQUVELHFCQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsTUFBZjs7QUFYVztBQUFBO0FBQUE7O0FBQUE7QUFhWCwwQ0FBbUIsS0FBSyxlQUF4QixtSUFBeUM7QUFBQSw0QkFBakMsT0FBaUM7O0FBQ3JDO0FBQ0g7QUFmVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JkO0FBQ0o7Ozs7Ozs7Ozs7Ozs7O3FqQkNuRkw7Ozs7Ozs7QUFLQTs7OztJQUVhLEksV0FBQSxJOzs7bUNBaUNFLEssRUFBTyxLLEVBQU8sSyxFQUFPO0FBQzVCLCtCQUFPLFFBQVEsQ0FBQyxDQUFULElBQWMsUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUEzQzs7QUFFQSxpQkFBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixLQUFyQixJQUE4QixLQUE5QjtBQUNIOzs7OztBQU1EOzs7OztxQ0FLYSxLLEVBQU8sSSxFQUFNO0FBQ3RCLGdCQUFJLElBQUksUUFBUSxJQUFoQjs7QUFFQSwrQkFBTyxRQUFRLENBQUMsQ0FBVCxJQUFjLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBM0M7QUFDQSwrQkFBTyxJQUFJLENBQUMsQ0FBTCxJQUFVLElBQUksS0FBSyxRQUFMLENBQWMsTUFBbkM7O0FBRUEsZ0JBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQVg7O0FBRUEsaUJBQUssUUFBTCxDQUFjLENBQWQsSUFBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFuQjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLElBQXVCLElBQXZCOztBQUVBLGlCQUFLLGtCQUFMO0FBQ0g7OztvQ0FFVyxLLEVBQU87QUFDZiwrQkFBTyxRQUFRLENBQUMsQ0FBVCxJQUFjLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBM0M7O0FBRUEsZ0JBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQVg7QUFDQSxpQkFBSyxNQUFMLENBQVksTUFBWixDQUFtQixJQUFuQjs7QUFFQSxpQkFBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixLQUFyQixFQUE0QixDQUE1Qjs7QUFFQSxpQkFBSyxrQkFBTDtBQUNIOzs7MENBWWlCLE8sRUFBUztBQUN2QixpQkFBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixPQUEzQjtBQUNIOzs7Z0NBRU87QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDSixxQ0FBZ0IsS0FBSyxPQUFyQiw4SEFBOEI7QUFBQSx3QkFBdEIsSUFBc0I7O0FBQzFCLHlCQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLElBQW5CO0FBQ0g7QUFIRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtKLGlCQUFLLE9BQUwsR0FBZSxFQUFmOztBQUVBLGlCQUFLLGtCQUFMO0FBQ0g7Ozs2Q0FFb0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDakIsc0NBQW1CLEtBQUssZ0JBQXhCLG1JQUEwQztBQUFBLHdCQUFsQyxPQUFrQzs7QUFDdEM7QUFDSDtBQUhnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXBCOzs7NEJBRUcsTSxFQUFRO0FBQ1IsaUJBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsTUFBbEI7QUFDQSxtQkFBTyxNQUFQLENBQWMsV0FBZCxDQUEwQixTQUExQixFQUFxQyxZQUFZO0FBQzdDLHFCQUFLLGtCQUFMO0FBQ0gsYUFGb0MsQ0FFbkMsSUFGbUMsQ0FFOUIsSUFGOEIsQ0FBckM7O0FBSUEsZ0JBQUcsS0FBSyxPQUFMLENBQWEsTUFBYixHQUFzQixDQUF6QixFQUE0QjtBQUN4QixxQkFBSyxrQkFBTDtBQUNIO0FBQ0o7Ozt3Q0FFZTtBQUNaLGdCQUFJLFFBQVEsQ0FBWjtBQURZO0FBQUE7QUFBQTs7QUFBQTtBQUVaLHNDQUFnQixLQUFLLE9BQXJCLG1JQUE4QjtBQUFBLHdCQUF0QixJQUFzQjs7QUFDMUIsd0JBQUcsS0FBSyxPQUFSLEVBQWlCO0FBQ2IsNkJBQUssS0FBTCxHQUFhLFFBQVEsRUFBckI7QUFDQSxpQ0FBUyxDQUFUO0FBQ0g7QUFDSjtBQVBXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRZjs7OzRCQXpIYTtBQUNWLG1CQUFPLEtBQUssUUFBWjtBQUNILFM7MEJBRVcsSyxFQUFPO0FBQ2YsaUJBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNIOzs7OztBQUtEOzs7NEJBR2E7QUFDVCxnQkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsVUFBVSxJQUFWLEVBQWdCO0FBQzNDLHVCQUFPLEtBQUssTUFBWjtBQUNILGFBRlksRUFFVixJQUZVLENBRUwsR0FGSyxDQUFiOztBQUlBLGdCQUFJLE1BQU0sTUFBTSxNQUFOLEdBQWUsR0FBekI7O0FBRUEsbUJBQU8sR0FBUDtBQUNIOzs7NEJBRWlCO0FBQ2QsZ0JBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLFVBQVUsS0FBVixFQUFpQjtBQUMzQyx1QkFBTyxNQUFNLFdBQU4sRUFBUDtBQUNILGFBRlksQ0FBYjs7QUFJQSxtQkFBTyxNQUFQO0FBQ0g7Ozs0QkFRVTtBQUNQLG1CQUFPLEtBQUssUUFBTCxDQUFjLE1BQXJCO0FBQ0g7Ozs0QkFnQ2U7QUFDWixnQkFBSSxNQUFNLEVBQVY7O0FBRFk7QUFBQTtBQUFBOztBQUFBO0FBR1osc0NBQWdCLEtBQUssUUFBckIsbUlBQStCO0FBQUEsd0JBQXZCLElBQXVCOztBQUMzQiwyQkFBTyxLQUFLLFNBQVo7QUFDSDtBQUxXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT1osbUJBQU8sR0FBUDtBQUNIOzs7QUEyQ0Qsa0JBQVksT0FBWixFQUFxQjtBQUFBOztBQUFBLGFBbkhyQixRQW1IcUIsR0FuSFYsRUFtSFU7QUFBQSxhQWxIckIsZ0JBa0hxQixHQWxIRixFQWtIRTs7QUFDakIsYUFBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxhQUFLLGlCQUFMLENBQXVCLFlBQVk7QUFDL0IsaUJBQUssYUFBTDtBQUNILFNBRnNCLENBRXJCLElBRnFCLENBRWhCLElBRmdCLENBQXZCO0FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUw7Ozs7SUFJcUIsUTs7OzRCQUNQO0FBQ04sbUJBQU8sS0FBSyxJQUFaO0FBQ0gsUzswQkFFTyxLLEVBQU87QUFDWCxpQkFBSyxJQUFMLEdBQVksS0FBWjtBQUNIOzs7QUFLRCxzQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQUEsYUFIakIsSUFHaUIsR0FIVixJQUdVOztBQUNiLGFBQUssa0JBQUwsR0FBMEIsSUFBSSxPQUFPLElBQVAsQ0FBWSxpQkFBaEIsRUFBMUI7QUFDQSxhQUFLLGtCQUFMLEdBQTBCLElBQUksT0FBTyxJQUFQLENBQVksa0JBQWhCLEVBQTFCOztBQUVBLGFBQUssR0FBTCxHQUFXLEdBQVg7QUFDSDs7OztrQ0FFUyxNLEVBQVE7QUFDZCxnQkFBSSxTQUFTLEVBQWI7O0FBRUEsaUJBQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLE9BQU8sTUFBUCxHQUFnQixDQUFuQyxFQUFzQyxFQUFFLENBQXhDLEVBQTJDO0FBQ3ZDLHVCQUFPLElBQVAsQ0FBWTtBQUNSLDhCQUFVLE9BQU8sQ0FBUCxDQURGO0FBRVIsOEJBQVU7QUFGRixpQkFBWjtBQUlIOztBQUVELG1CQUFPLE1BQVA7QUFDSDs7OytCQUVNLEksRUFBTTtBQUNULGdCQUFJLFNBQVMsS0FBSyxXQUFsQjs7QUFFQSxnQkFBRyxPQUFPLE1BQVAsR0FBZ0IsQ0FBbkIsRUFBc0I7QUFDbEIscUJBQUssa0JBQUwsQ0FBd0IsTUFBeEIsQ0FBK0IsSUFBL0I7QUFDQTtBQUNIOztBQUVELGlCQUFLLGtCQUFMLENBQXdCLE1BQXhCLENBQStCLEtBQUssR0FBTCxDQUFTLEdBQXhDOztBQUVBLGdCQUFJLFlBQVksS0FBSyxTQUFMLENBQWUsTUFBZixDQUFoQjs7QUFFQSxnQkFBSSxVQUFVO0FBQ1Ysd0JBQVEsT0FBTyxDQUFQLENBREU7QUFFVixvQ0FGVTtBQUdWLDZCQUFhLE9BQU8sT0FBTyxNQUFQLEdBQWdCLENBQXZCLENBSEg7QUFJViw0QkFBWSxPQUFPLElBQVAsQ0FBWSxVQUFaLENBQXVCO0FBSnpCLGFBQWQ7O0FBT0EsaUJBQUssa0JBQUwsQ0FBd0IsS0FBeEIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCO0FBQzlELG9CQUFJLFVBQVUsT0FBTyxJQUFQLENBQVksZ0JBQVosQ0FBNkIsRUFBM0MsRUFBK0M7QUFDM0MseUJBQUssa0JBQUwsQ0FBd0IsYUFBeEIsQ0FBc0MsUUFBdEM7QUFDSDtBQUNKLGFBSnNDLENBSXJDLElBSnFDLENBSWhDLElBSmdDLENBQXZDO0FBS0g7Ozs7OztrQkF4RGdCLFE7Ozs7Ozs7O1FDQUwsTSxHQUFBLE07QUFKaEI7Ozs7QUFJTyxTQUFTLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDdkMsUUFBSSxDQUFDLFNBQUwsRUFBZ0I7QUFDWixjQUFNLFdBQVcsa0JBQWpCO0FBQ0g7QUFDSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTMuMTIuMTYuXG4gKlxuICog0J/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhVxuICovXG5cbmltcG9ydCB7UGF0aEdlbmVyYXRvcn0gZnJvbSBcIi4vbGliL3BhdGgtZ2VuZXJhdG9yXCI7XG5pbXBvcnQge0dNYXB9IGZyb20gXCIuL2xpYi9tYXBcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9saWIvcmVuZGVyZXJcIjtcbmltcG9ydCB7UGF0aH0gZnJvbSBcIi4vbGliL3BhdGhcIjtcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdwYXRoLWlucHV0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29tcG9uZW50QW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29tcG9uZW50TmFtZSlbMF07XG5cbiAgICBpZihjb21wb25lbnRBbmNob3IgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IHRhZyBub3QgZm91bmRlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGxldCB0ZW1wbGF0ZU5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCd0ZW1wbGF0ZScpO1xuICAgIGxldCBmaWVsZFZhbHVlID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnZmllbGQtdmFsdWUnKTtcbiAgICBsZXQgZmllbGROYW1lID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnZmllbGQtbmFtZScpO1xuICAgIGxldCBpY29uc1Jlc291cmNlID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgnaWNvbnMtcmVzb3VyY2UnKTtcblxuICAgICQuZ2V0KGljb25zUmVzb3VyY2UsIGZ1bmN0aW9uIChpY29ucykge1xuICAgICAgICAkLmdldCh0ZW1wbGF0ZU5hbWUsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBQcm9mID0gVnVlLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUgPSBmaWVsZE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpZWxkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aChmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoR2VuZXJhdG9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGF0aDogbmV3IFBhdGgoW10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluRWRpdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWNvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luUGF0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZGVmYXVsdEljb24gPSBpY29uc1swXS5pY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5zdGFydCh0aGlzLmN1cnJlbnRQYXRoLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVG9wOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG93bjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleERpc3Bvc2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleFJlbW92ZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGF0TG5nID0gcG9pbnQubGF0TG5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAubWFwLnNldENlbnRlcihsYXRMbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBaGVhZDogZnVuY3Rpb24gKHBvaW50LCBhaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnNldEFoZWFkKGFoZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC50eXBlYWhlYWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmN1cnJlbnRQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZy1tYXBzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBHTWFwKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvciA9IG5ldyBQYXRoR2VuZXJhdG9yKHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMubWFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguYWRkVXBkYXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhdGggdXBkYXRpbmcuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYXBwZW5kQWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtUG9zaXRpb24gPSB0aGlzLmN1cnJlbnRQYXRoLnNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgcG9pbnQuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbZGF0ZS10aW1lPVwiZHQtJyArIChlbGVtUG9zaXRpb24gLSAxKSArICdcIl0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGlja2VyQW5jaG9yID0gJChzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlckFuY2hvci50aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVyaWRpYW46IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5vbignY2hhbmdlVGltZS50aW1lcGlja2VyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGltZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwaWNrZXJBbmNob3IuYXR0cignZGF0YS1pbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5wb2ludFZhbHVlKGluZGV4LCAndGltZScsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb2ludCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAubWFwLCAnY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJDb29yZHMgPSBldmVudC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyQ29vcmRzLnRvSlNPTigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvYWQgY29tcG9uZW50Li4uJyk7XG4gICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuXG4gICAgICAgICAgICAgICAgbmV3IFByb2YoKS4kbW91bnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J3QtSDRg9C00LDQtdGC0YHRjyDQvtC/0YDQtdC00LXQu9C40YLRjCDQutC+0LzQv9C+0L3QtdC90YI6IFZ1ZS5qcyDQvdC1INC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDQvScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcE1hcmtlciB7XG4gICAgZ2V0IGRyYWdnYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXREcmFnZ2FibGUoKTtcbiAgICB9XG5cbiAgICBzZXQgZHJhZ2dhYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlci5zZXREcmFnZ2FibGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb247XG4gICAgfVxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICBzZXQgdGltZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKHZhbHVlLm1hcCk7XG4gICAgfVxuICAgIGdldCBsYXRMbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXRMbmc7XG4gICAgfVxuXG4gICAgc2V0IGxhdExuZyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYXRMbmcgPSB2YWx1ZTtcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHZhbHVlLmxhdCwgdmFsdWUubG5nKSk7XG4gICAgfVxuXG4gICAgZ2V0IHZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0VmlzaWJsZSgpO1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlci5zZXRWaXNpYmxlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgaWNvbihwYXRoKSB7XG4gICAgICAgIHRoaXMuX2ljb24gPSBwYXRoO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMuX2FoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLl9haGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fZGVzY3JpcHRpb24gIT0gJycpIHtcbiAgICAgICAgICAgIGlmKGRyb3Bkb3duUmVzb2x2ZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25SZXNvbHZlcih2YWx1ZSwgZnVuY3Rpb24gKHBvaW50cykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZWFoZWFkID0gW107XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGluZGV4IGluIHBvaW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBvaW50c1tpbmRleF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBvaW50c1tpbmRleF0ubGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcG9pbnRzW2luZGV4XS5sbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQgPSB0eXBlYWhlYWQ7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5fbWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXIuc2V0TGFiZWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtYXJrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXI7XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMubWFya2VyLmdldFBvc2l0aW9uKCkudG9KU09OKCksXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNlcmlhKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgfVxuXG4gICAgc2V0QWhlYWQoYWhlYWQpIHtcbiAgICAgICAgdGhpcy5fYWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhaGVhZC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgbGF0OiBhaGVhZC5sYXQsXG4gICAgICAgICAgICBsbmc6IGFoZWFkLmxuZ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGF0TG5nID0gcG9zaXRpb247XG4gICAgfVxuXG4gICAgc2V0IHNlcmlhbCh2YWx1ZSkge1xuICAgICAgICBsZXQgcG9zID0gdmFsdWUucG9zaXRpb247XG5cbiAgICAgICAgdGhpcy5sYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvcyk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICAgICAgaWYodmFsdWUubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSB2YWx1ZS5sYWJlbCArICcnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0eXBlb2YgdmFsdWUudmlzaWJsZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB2YWx1ZS52aXNpYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZSA9IHZhbHVlLnRpbWUgfHwgJzA6MDAnO1xuICAgICAgICB0aGlzLmljb24gPSB2YWx1ZS5pY29uIHx8ICcnO1xuXG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKHRoaXMubGF0TG5nKTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TGFiZWwodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldFZpc2libGUodGhpcy52aXNpYmxlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXAsIGNvb3JkcywgdGVtcGxhdGUpIHtcbiAgICAgICAgaWYoIW1hcCkge1xuICAgICAgICAgICAgdGhyb3cgJ9Cd0LUg0L7Qv9GA0LXQtNC10LvQtdC90LAg0LrQsNGA0YLQsCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogbWFwLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBjb29yZHMsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcblxuICAgICAgICBpZih0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWUgPSAnJztcbiAgICBfbWFwID0gbnVsbDtcbiAgICBfbGF0TG5nID0ge307XG4gICAgX2Rlc2NyaXB0aW9uID0gJyc7XG4gICAgX21hcmtlciA9IG51bGw7XG4gICAgX3RlbXBsYXRlID0gJ2NvbnRlbnQuaHRtbCc7XG4gICAgX2xhYmVsID0gJyc7XG4gICAgX3Zpc2libGUgPSB0cnVlO1xuICAgIF9pY29uID0gJyc7XG4gICAgdHlwZWFoZWFkID0gW107XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHJldHVybiBwb3MudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBhZGRJbmZvKCkge1xuICAgICAgICBsZXQgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICQoZGF0YSkubG9hZCgnc3JjL3RwbC8nICsgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgbGV0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICBjb250ZW50OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCB0aGlzLl9tYXJrZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIEdNYXAge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodGB0YvQu9C60LAg0L3QsCDQvtCx0YrQtdC60YIg0LrQsNGA0YJcbiAgICAgKi9cbiAgICBfbWFwO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB2YXIgcG9pbnRDb29yZHMgPSB7bGF0OiA1Mi42MTY2NywgbG5nOiAzOS42MDAwfTtcblxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNlbnRlcjogcG9pbnRDb29yZHMsXG4gICAgICAgICAgICB6b29tOiAxNlxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMuX21hcCwgJ3Jlc2l6ZScpO1xuICAgIH1cbn0iLCJpbXBvcnQge1BhdGh9IGZyb20gXCIuL3BhdGhcIjtcbmltcG9ydCB7TWFwTWFya2VyfSBmcm9tIFwiLi9tYXAtbWFya2VyXCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhdGhHZW5lcmF0b3Ige1xuICAgIGdldCBkZWZhdWx0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRJY29uO1xuICAgIH1cblxuICAgIHNldCBkZWZhdWx0SWNvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0SWNvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXI7XG4gICAgfVxuXG4gICAgc2V0IGNvdW50ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY291bnRlciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIF9tYXA7XG4gICAgX3BhdGggPSBbXTtcbiAgICBfY291bnRlciA9IDE7XG4gICAgX2FkZGVkTGlzdGVuZXJzID0gW107XG4gICAgX2RlZmF1bHRJY29uID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgaWYobWFwKSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQv9GD0YHQuiDQs9C10L3QtdGA0LDRgtC+0YDQsFxuICAgICAqL1xuICAgIHN0YXJ0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG5cbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGF0aC5jbGVhcigpO1xuXG4gICAgICAgICAgICBsZXQgbWFya2Vyc0FycmF5ID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgbWFya2VySnNvbiBvZiBtYXJrZXJzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChtYXJrZXJKc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGFwcGVuZEFkZExpc3RlbmVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYWRkZWRMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBhZGQobWFya2VySnNvbikge1xuICAgICAgICBpZih0aGlzLl9wYXRoKSB7XG4gICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IE1hcE1hcmtlcih0aGlzLm1hcCwgbWFya2VySnNvbi5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIG1hcmtlckpzb24ubGFiZWwgPSB0aGlzLl9wYXRoLm1hcmtlcnMubGVuZ3RoICsgMTtcblxuICAgICAgICAgICAgbWFya2VyLnNlcmlhbCA9IG1hcmtlckpzb247XG5cbiAgICAgICAgICAgIGlmKG1hcmtlci5pY29uID09PSAnJykge1xuICAgICAgICAgICAgICAgIG1hcmtlci5pY29uID0gdGhpcy5kZWZhdWx0SWNvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcGF0aC5hZGQobWFya2VyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX2FkZGVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqXG4gKlxuICovXG5pbXBvcnQge2Fzc2VydCBhcyBhc3NlcnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgZ2V0IG1hcmtlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xuICAgIH1cblxuICAgIHNldCBtYXJrZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIF9tYXJrZXJzID0gW107XG4gICAgX3VwZGF0ZUxpc3RlbmVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C10L3QuNC1INGB0LXRgNC40LDQu9C40LfQvtCy0LDQvdC90L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICovXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhcyA9IHRoaXMuX21hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyay5zZXJpYWw7XG4gICAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgICBsZXQgcmVzID0gJ1snICsgc2VyaWFzICsgJ10nO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIHBvaW50VmFsdWUoaW5kZXgsIGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LzQtdC90LAg0L/QvtC30LjRhtC40Lgg0LjQvdC00LXQutGB0LBcbiAgICAgKiBAcGFyYW0gaW5kZXgg0JjQvdC00LXQutGBXG4gICAgICogQHBhcmFtIGNyZW0g0KHQvNC10YnQtdC90LjQtVxuICAgICAqL1xuICAgIGluZGV4RGlzcG9zZShpbmRleCwgY3JlbSkge1xuICAgICAgICBsZXQgcyA9IGluZGV4ICsgY3JlbTtcblxuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgYXNzZXJ0KHMgPiAtMSAmJiBzIDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tzXTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzW3NdID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdID0gZWxlbTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGluZGV4UmVtb3ZlKGluZGV4KSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIGVsZW0ubWFya2VyLnNldE1hcChudWxsKTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5fbWFya2Vycykge1xuICAgICAgICAgICAgcmVzICs9IG1hcmsuY29vcmRzU3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgXG4gICAgYWRkVXBkYXRlTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgbWFyay5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGNhbGxVcGRhdGVIYW5kbGVycygpIHtcbiAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX3VwZGF0ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlcikge1xuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICBtYXJrZXIubWFya2VyLmFkZExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZih0aGlzLm1hcmtlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2hMYWJlbHMoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIGlmKG1hcmsudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIG1hcmsubGFiZWwgPSBpbmRleCArICcnO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXJrZXJzKSB7XG4gICAgICAgIHRoaXMubWFya2VycyA9IG1hcmtlcnM7XG5cbiAgICAgICAgdGhpcy5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMYWJlbHMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIF9tYXAgPSBudWxsO1xuICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgIH1cblxuICAgIHdheXBvaW50cyhjb29yZHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjb29yZHMubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IGNvb3Jkc1tpXSxcbiAgICAgICAgICAgICAgICBzdG9wb3ZlcjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZW5kZXIocGF0aCkge1xuICAgICAgICBsZXQgY29vcmRzID0gcGF0aC5jb29yZHNBcnJheTtcblxuICAgICAgICBpZihjb29yZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKHRoaXMubWFwLm1hcCk7XG5cbiAgICAgICAgbGV0IHdheXBvaW50cyA9IHRoaXMud2F5cG9pbnRzKGNvb3Jkcyk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBvcmlnaW46IGNvb3Jkc1swXSxcbiAgICAgICAgICAgIHdheXBvaW50cyxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IG1lc3NhZ2UgfHwgXCJBc3NlcnRpb24gZmFpbGVkXCI7XG4gICAgfVxufSJdfQ==