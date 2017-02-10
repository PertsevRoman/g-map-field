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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFF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QSxpQkFBSyxrQkFBTCxDQUF3QixLQUF4QixDQUE4QixPQUE5QixFQUF1QyxVQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkI7QUFDOUQsb0JBQUksVUFBVSxPQUFPLElBQVAsQ0FBWSxnQkFBWixDQUE2QixFQUEzQyxFQUErQztBQUMzQyx5QkFBSyxrQkFBTCxDQUF3QixhQUF4QixDQUFzQyxRQUF0QztBQUNIO0FBQ0osYUFKc0MsQ0FJckMsSUFKcUMsQ0FJaEMsSUFKZ0MsQ0FBdkM7QUFLSDs7Ozs7O2tCQXhEZ0IsUTs7Ozs7Ozs7UUNBTCxNLEdBQUEsTTtBQUpoQjs7OztBQUlPLFNBQVMsTUFBVCxDQUFnQixTQUFoQixFQUEyQixPQUEzQixFQUFvQztBQUN2QyxRQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNaLGNBQU0sV0FBVyxrQkFBakI7QUFDSDtBQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxMy4xMi4xNi5cbiAqXG4gKiDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFXG4gKi9cblxuaW1wb3J0IHtQYXRoR2VuZXJhdG9yfSBmcm9tIFwiLi9saWIvcGF0aC1nZW5lcmF0b3JcIjtcbmltcG9ydCB7R01hcH0gZnJvbSBcIi4vbGliL21hcFwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL2xpYi9yZW5kZXJlclwiO1xuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9saWIvcGF0aFwiO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BhdGgtaW5wdXQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21wb25lbnRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb21wb25lbnROYW1lKVswXTtcblxuICAgIGlmKGNvbXBvbmVudEFuY2hvciA9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgdGFnIG5vdCBmb3VuZGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHRlbXBsYXRlTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ3RlbXBsYXRlJyk7XG4gICAgbGV0IGZpZWxkVmFsdWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC12YWx1ZScpO1xuICAgIGxldCBmaWVsZE5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC1uYW1lJyk7XG4gICAgbGV0IGljb25zUmVzb3VyY2UgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdpY29ucy1yZXNvdXJjZScpO1xuXG4gICAgJC5nZXQoaWNvbnNSZXNvdXJjZSwgZnVuY3Rpb24gKGljb25zKSB7XG4gICAgICAgICQuZ2V0KHRlbXBsYXRlTmFtZSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IFByb2YgPSBWdWUuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhHZW5lcmF0b3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoOiBuZXcgUGF0aChbXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5FZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpY29ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5QYXRoOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5kZWZhdWx0SWNvbiA9IGljb25zWzBdLmljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLnN0YXJ0KHRoaXMuY3VycmVudFBhdGgsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Ub3A6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3duOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4UmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXRMbmcgPSBwb2ludC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5tYXAuc2V0Q2VudGVyKGxhdExuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFoZWFkOiBmdW5jdGlvbiAocG9pbnQsIGFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQuc2V0QWhlYWQoYWhlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5nLW1hcHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IEdNYXAoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yID0gbmV3IFBhdGhHZW5lcmF0b3IodGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5tYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGF0aCB1cGRhdGluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hcHBlbmRBZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IHRoaXMuY3VycmVudFBhdGguc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBwb2ludC4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICdpbnB1dFtkYXRlLXRpbWU9XCJkdC0nICsgKGVsZW1Qb3NpdGlvbiAtIDEpICsgJ1wiXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNrZXJBbmNob3IgPSAkKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyQW5jaG9yLnRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXJpZGlhbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm9uKCdjaGFuZ2VUaW1lLnRpbWVwaWNrZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBpY2tlckFuY2hvci5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnBvaW50VmFsdWUoaW5kZXgsICd0aW1lJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvaW50IGFkZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcC5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvb3JkcyA9IGV2ZW50LmxhdExuZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBtYXJrZXJDb29yZHMudG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZCBjb21wb25lbnQuLi4nKTtcbiAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICBuZXcgUHJvZigpLiRtb3VudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC10YLRgdGPINC+0L/RgNC10LTQtdC70LjRgtGMINC60L7QvNC/0L7QvdC10L3RgjogVnVlLmpzINC90LUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC9Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5leHBvcnQgY2xhc3MgTWFwTWFya2VyIHtcbiAgICBnZXQgZHJhZ2dhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldERyYWdnYWJsZSgpO1xuICAgIH1cblxuICAgIHNldCBkcmFnZ2FibGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFya2VyLnNldERyYWdnYWJsZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCBpY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgICB9XG4gICAgZ2V0IHRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHNldCB0aW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAodmFsdWUubWFwKTtcbiAgICB9XG4gICAgZ2V0IGxhdExuZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhdExuZztcbiAgICB9XG5cbiAgICBzZXQgbGF0TG5nKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xhdExuZyA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKG5ldyBnb29nbGUubWFwcy5MYXRMbmcodmFsdWUubGF0LCB2YWx1ZS5sbmcpKTtcbiAgICB9XG5cbiAgICBnZXQgdmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXRWaXNpYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZpc2libGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFya2VyLnNldFZpc2libGUodmFsdWUpO1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBpY29uKHBhdGgpIHtcbiAgICAgICAgdGhpcy5faWNvbiA9IHBhdGg7XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5fYWhlYWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FoZWFkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9kZXNjcmlwdGlvbiAhPSAnJykge1xuICAgICAgICAgICAgaWYoZHJvcGRvd25SZXNvbHZlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93blJlc29sdmVyKHZhbHVlLCBmdW5jdGlvbiAocG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlYWhlYWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaW5kZXggaW4gcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcG9pbnRzW2luZGV4XS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcG9pbnRzW2luZGV4XS5sYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiBwb2ludHNbaW5kZXhdLmxuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IHR5cGVhaGVhZDtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICB9XG5cbiAgICBzZXQgbGFiZWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9tYXJrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlci5zZXRMYWJlbCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG1hcmtlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcjtcbiAgICB9XG4gICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgc2V0IHRlbXBsYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5tYXJrZXIuZ2V0UG9zaXRpb24oKS50b0pTT04oKSxcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMudmlzaWJsZSxcbiAgICAgICAgICAgIHRpbWU6IHRoaXMudGltZSxcbiAgICAgICAgICAgIGljb246IHRoaXMuaWNvbixcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2VyaWEpO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKTtcbiAgICB9XG5cbiAgICBzZXRBaGVhZChhaGVhZCkge1xuICAgICAgICB0aGlzLl9haGVhZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGFoZWFkLm5hbWU7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICBsYXQ6IGFoZWFkLmxhdCxcbiAgICAgICAgICAgIGxuZzogYWhlYWQubG5nXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sYXRMbmcgPSBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgc2VyaWFsKHZhbHVlKSB7XG4gICAgICAgIGxldCBwb3MgPSB2YWx1ZS5wb3NpdGlvbjtcblxuICAgICAgICB0aGlzLmxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcocG9zKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgICAgICBpZih2YWx1ZS5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHZhbHVlLmxhYmVsICsgJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZS52aXNpYmxlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHZhbHVlLnZpc2libGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lID0gdmFsdWUudGltZSB8fCAnMDowMCc7XG4gICAgICAgIHRoaXMuaWNvbiA9IHZhbHVlLmljb24gfHwgJyc7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24odGhpcy5sYXRMbmcpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRMYWJlbCh0aGlzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0VmlzaWJsZSh0aGlzLnZpc2libGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1hcCwgY29vcmRzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBpZighbWFwKSB7XG4gICAgICAgICAgICB0aHJvdyAn0J3QtSDQvtC/0YDQtdC00LXQu9C10L3QsCDQutCw0YDRgtCwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgbWFwOiBtYXAubWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IGNvb3JkcyxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuXG4gICAgICAgIGlmKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdGltZSA9ICcnO1xuICAgIF9tYXAgPSBudWxsO1xuICAgIF9sYXRMbmcgPSB7fTtcbiAgICBfZGVzY3JpcHRpb24gPSAnJztcbiAgICBfbWFya2VyID0gbnVsbDtcbiAgICBfdGVtcGxhdGUgPSAnY29udGVudC5odG1sJztcbiAgICBfbGFiZWwgPSAnJztcbiAgICBfdmlzaWJsZSA9IHRydWU7XG4gICAgX2ljb24gPSAnJztcbiAgICB0eXBlYWhlYWQgPSBbXTtcblxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc1N0cigpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHBvcy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGFkZEluZm8oKSB7XG4gICAgICAgIGxldCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgJChkYXRhKS5sb2FkKCdzcmMvdHBsLycgKyB0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgICBsZXQgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIHRoaXMuX21hcmtlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgR01hcCB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0YHRi9C70LrQsCDQvdCwINC+0LHRitC10LrRgiDQutCw0YDRglxuICAgICAqL1xuICAgIF9tYXA7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHZhciBwb2ludENvb3JkcyA9IHtsYXQ6IDUyLjYxNjY3LCBsbmc6IDM5LjYwMDB9O1xuXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudCwge1xuICAgICAgICAgICAgY2VudGVyOiBwb2ludENvb3JkcyxcbiAgICAgICAgICAgIHpvb206IDE2XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5fbWFwLCAncmVzaXplJyk7XG4gICAgfVxufSIsImltcG9ydCB7UGF0aH0gZnJvbSBcIi4vcGF0aFwiO1xuaW1wb3J0IHtNYXBNYXJrZXJ9IGZyb20gXCIuL21hcC1tYXJrZXJcIjtcbi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgUGF0aEdlbmVyYXRvciB7XG4gICAgZ2V0IGRlZmF1bHRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEljb247XG4gICAgfVxuXG4gICAgc2V0IGRlZmF1bHRJY29uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRJY29uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRlcjtcbiAgICB9XG5cbiAgICBzZXQgY291bnRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb3VudGVyID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgX21hcDtcbiAgICBfcGF0aCA9IFtdO1xuICAgIF9jb3VudGVyID0gMTtcbiAgICBfYWRkZWRMaXN0ZW5lcnMgPSBbXTtcbiAgICBfZGVmYXVsdEljb24gPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICBpZihtYXApIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC/0YPRgdC6INCz0LXQvdC10YDQsNGC0L7RgNCwXG4gICAgICovXG4gICAgc3RhcnQocGF0aCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcblxuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXRoLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGxldCBtYXJrZXJzQXJyYXkgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBtYXJrZXJKc29uIG9mIG1hcmtlcnNBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKG1hcmtlckpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoKCkge1xuICAgICAgICB0aGlzLl9wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kQWRkTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9hZGRlZExpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGFkZChtYXJrZXJKc29uKSB7XG4gICAgICAgIGlmKHRoaXMuX3BhdGgpIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFwTWFya2VyKHRoaXMubWFwLCBtYXJrZXJKc29uLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgbWFya2VySnNvbi5sYWJlbCA9IHRoaXMuX3BhdGgubWFya2Vycy5sZW5ndGggKyAxO1xuXG4gICAgICAgICAgICBtYXJrZXIuc2VyaWFsID0gbWFya2VySnNvbjtcblxuICAgICAgICAgICAgaWYobWFya2VyLmljb24gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyLmljb24gPSB0aGlzLmRlZmF1bHRJY29uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wYXRoLmFkZChtYXJrZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fYWRkZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICpcbiAqXG4gKi9cbmltcG9ydCB7YXNzZXJ0IGFzIGFzc2VydH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBQYXRoIHtcbiAgICBnZXQgbWFya2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnM7XG4gICAgfVxuXG4gICAgc2V0IG1hcmtlcnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFya2VycyA9IHZhbHVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgX21hcmtlcnMgPSBbXTtcbiAgICBfdXBkYXRlTGlzdGVuZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LXQvdC40LUg0YHQtdGA0LjQsNC70LjQt9C+0LLQsNC90L3QvtCz0L4g0LzQsNGB0YHQuNCy0LBcbiAgICAgKi9cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWFzID0gdGhpcy5fbWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmspIHtcbiAgICAgICAgICAgIHJldHVybiBtYXJrLnNlcmlhbDtcbiAgICAgICAgfSkuam9pbignLCcpO1xuXG4gICAgICAgIGxldCByZXMgPSAnWycgKyBzZXJpYXMgKyAnXSc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNBcnJheSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubWFya2Vycy5tYXAoZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgXG4gICAgcG9pbnRWYWx1ZShpbmRleCwgZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF1bZmllbGRdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQvNC10L3QsCDQv9C+0LfQuNGG0LjQuCDQuNC90LTQtdC60YHQsFxuICAgICAqIEBwYXJhbSBpbmRleCDQmNC90LTQtdC60YFcbiAgICAgKiBAcGFyYW0gY3JlbSDQodC80LXRidC10L3QuNC1XG4gICAgICovXG4gICAgaW5kZXhEaXNwb3NlKGluZGV4LCBjcmVtKSB7XG4gICAgICAgIGxldCBzID0gaW5kZXggKyBjcmVtO1xuXG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBhc3NlcnQocyA+IC0xICYmIHMgPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW3NdO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnNbc10gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF0gPSBlbGVtO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgaW5kZXhSZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgZWxlbS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLl9tYXJrZXJzKSB7XG4gICAgICAgICAgICByZXMgKz0gbWFyay5jb29yZHNTdHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBcbiAgICBhZGRVcGRhdGVMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBtYXJrLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgY2FsbFVwZGF0ZUhhbmRsZXJzKCkge1xuICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fdXBkYXRlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQobWFya2VyKSB7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5tYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMubWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaExhYmVscygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgaWYobWFyay52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgbWFyay5sYWJlbCA9IGluZGV4ICsgJyc7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1hcmtlcnMpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gbWFya2VycztcblxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExhYmVscygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgX21hcCA9IG51bGw7XG4gICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgfVxuXG4gICAgd2F5cG9pbnRzKGNvb3Jkcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNvb3Jkcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogY29vcmRzW2ldLFxuICAgICAgICAgICAgICAgIHN0b3BvdmVyOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlbmRlcihwYXRoKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBwYXRoLmNvb3Jkc0FycmF5O1xuXG4gICAgICAgIGlmKGNvb3Jkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAodGhpcy5tYXAubWFwKTtcblxuICAgICAgICBsZXQgd2F5cG9pbnRzID0gdGhpcy53YXlwb2ludHMoY29vcmRzKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogY29vcmRzWzBdLFxuICAgICAgICAgICAgd2F5cG9pbnRzLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIjtcbiAgICB9XG59Il19