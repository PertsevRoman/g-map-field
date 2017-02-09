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

            this.description = ahead.title;

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
                        this.typeahead = points;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFF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LFFBQXRDO0FBQ0g7QUFDSixhQUpzQyxDQUlyQyxJQUpxQyxDQUloQyxJQUpnQyxDQUF2QztBQUtIOzs7Ozs7a0JBeERnQixROzs7Ozs7OztRQ0FMLE0sR0FBQSxNO0FBSmhCOzs7O0FBSU8sU0FBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLE9BQTNCLEVBQW9DO0FBQ3ZDLFFBQUksQ0FBQyxTQUFMLEVBQWdCO0FBQ1osY0FBTSxXQUFXLGtCQUFqQjtBQUNIO0FBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDEzLjEyLjE2LlxuICpcbiAqINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YVcbiAqL1xuXG5pbXBvcnQge1BhdGhHZW5lcmF0b3J9IGZyb20gXCIuL2xpYi9wYXRoLWdlbmVyYXRvclwiO1xuaW1wb3J0IHtHTWFwfSBmcm9tIFwiLi9saWIvbWFwXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vbGliL3JlbmRlcmVyXCI7XG5pbXBvcnQge1BhdGh9IGZyb20gXCIuL2xpYi9wYXRoXCI7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAncGF0aC1pbnB1dCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbXBvbmVudEFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbXBvbmVudE5hbWUpWzBdO1xuXG4gICAgaWYoY29tcG9uZW50QW5jaG9yID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCB0YWcgbm90IGZvdW5kZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgdGVtcGxhdGVOYW1lID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgndGVtcGxhdGUnKTtcbiAgICBsZXQgZmllbGRWYWx1ZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ZpZWxkLXZhbHVlJyk7XG4gICAgbGV0IGZpZWxkTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ZpZWxkLW5hbWUnKTtcbiAgICBsZXQgaWNvbnNSZXNvdXJjZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ljb25zLXJlc291cmNlJyk7XG5cbiAgICAkLmdldChpY29uc1Jlc291cmNlLCBmdW5jdGlvbiAoaWNvbnMpIHtcbiAgICAgICAgJC5nZXQodGVtcGxhdGVOYW1lLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgUHJvZiA9IFZ1ZS5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aEdlbmVyYXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IG5ldyBQYXRoKFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGljb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpblBhdGg6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmRlZmF1bHRJY29uID0gaWNvbnNbMF0uaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3Iuc3RhcnQodGhpcy5jdXJyZW50UGF0aCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5maW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1RvcDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleERpc3Bvc2UoaW5kZXgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvd246IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhSZW1vdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhdExuZyA9IHBvaW50LmxhdExuZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLm1hcC5zZXRDZW50ZXIobGF0TG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWhlYWQ6IGZ1bmN0aW9uIChwb2ludCwgYWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC5zZXRBaGVhZChhaGVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQudHlwZWFoZWFkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmctbWFwcycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgR01hcChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IgPSBuZXcgUGF0aEdlbmVyYXRvcih0aGlzLm1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmFkZFVwZGF0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXRoIHVwZGF0aW5nLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmN1cnJlbnRQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmFwcGVuZEFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbVBvc2l0aW9uID0gdGhpcy5jdXJyZW50UGF0aC5zaXplO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHBvaW50Li4uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W2RhdGUtdGltZT1cImR0LScgKyAoZWxlbVBvc2l0aW9uIC0gMSkgKyAnXCJdJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpY2tlckFuY2hvciA9ICQoc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXJBbmNob3IudGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lcmlkaWFuOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkub24oJ2NoYW5nZVRpbWUudGltZXBpY2tlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRpbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGlja2VyQW5jaG9yLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGgucG9pbnRWYWx1ZShpbmRleCwgJ3RpbWUnLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9pbnQgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLm1hcCwgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyQ29vcmRzID0gZXZlbnQubGF0TG5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hcmtlckNvb3Jkcy50b0pTT04oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2FkIGNvbXBvbmVudC4uLicpO1xuICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgIG5ldyBQcm9mKCkuJG1vdW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cd0LUg0YPQtNCw0LXRgtGB0Y8g0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCOiBWdWUuanMg0L3QtSDQuNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0L0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXBNYXJrZXIge1xuICAgIGdldCBkcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGRyYWdnYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0RHJhZ2dhYmxlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcCh2YWx1ZS5tYXApO1xuICAgIH1cbiAgICBnZXQgbGF0TG5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF0TG5nO1xuICAgIH1cblxuICAgIHNldCBsYXRMbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGF0TG5nID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24obmV3IGdvb2dsZS5tYXBzLkxhdExuZyh2YWx1ZS5sYXQsIHZhbHVlLmxuZykpO1xuICAgIH1cblxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFZpc2libGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0VmlzaWJsZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGljb24ocGF0aCkge1xuICAgICAgICB0aGlzLl9pY29uID0gcGF0aDtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9haGVhZCkge1xuICAgICAgICAgICAgdGhpcy5fYWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX2Rlc2NyaXB0aW9uICE9ICcnKSB7XG4gICAgICAgICAgICBpZihkcm9wZG93blJlc29sdmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUmVzb2x2ZXIodmFsdWUsIGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQgPSBwb2ludHM7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5fbWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXIuc2V0TGFiZWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtYXJrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXI7XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMubWFya2VyLmdldFBvc2l0aW9uKCkudG9KU09OKCksXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNlcmlhKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgfVxuXG4gICAgc2V0QWhlYWQoYWhlYWQpIHtcbiAgICAgICAgdGhpcy5fYWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhaGVhZC50aXRsZTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxhdDogYWhlYWQubGF0LFxuICAgICAgICAgICAgbG5nOiBhaGVhZC5sbmdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxhdExuZyA9IHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHNldCBzZXJpYWwodmFsdWUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHZhbHVlLnBvc2l0aW9uO1xuXG4gICAgICAgIHRoaXMubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWUuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgIGlmKHZhbHVlLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdmFsdWUubGFiZWwgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlLnZpc2libGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdmFsdWUudmlzaWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZS50aW1lIHx8ICcwOjAwJztcbiAgICAgICAgdGhpcy5pY29uID0gdmFsdWUuaWNvbiB8fCAnJztcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0aGlzLmxhdExuZyk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldExhYmVsKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRWaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFwLCBjb29yZHMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKCFtYXApIHtcbiAgICAgICAgICAgIHRocm93ICfQndC1INC+0L/RgNC10LTQtdC70LXQvdCwINC60LDRgNGC0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IG1hcC5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lID0gJyc7XG4gICAgX21hcCA9IG51bGw7XG4gICAgX2xhdExuZyA9IHt9O1xuICAgIF9kZXNjcmlwdGlvbiA9ICcnO1xuICAgIF9tYXJrZXIgPSBudWxsO1xuICAgIF90ZW1wbGF0ZSA9ICdjb250ZW50Lmh0bWwnO1xuICAgIF9sYWJlbCA9ICcnO1xuICAgIF92aXNpYmxlID0gdHJ1ZTtcbiAgICBfaWNvbiA9ICcnO1xuICAgIHR5cGVhaGVhZCA9IFtdO1xuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICByZXR1cm4gcG9zLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgYWRkSW5mbygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAkKGRhdGEpLmxvYWQoJ3NyYy90cGwvJyArIHRoaXMudGVtcGxhdGUpO1xuXG4gICAgICAgIGxldCBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgY29udGVudDogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgdGhpcy5fbWFya2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5mb3dpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBHTWFwIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHRgdGL0LvQutCwINC90LAg0L7QsdGK0LXQutGCINC60LDRgNGCXG4gICAgICovXG4gICAgX21hcDtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBvaW50Q29vcmRzID0ge2xhdDogNTIuNjE2NjcsIGxuZzogMzkuNjAwMH07XG5cbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbGVtZW50LCB7XG4gICAgICAgICAgICBjZW50ZXI6IHBvaW50Q29vcmRzLFxuICAgICAgICAgICAgem9vbTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLl9tYXAsICdyZXNpemUnKTtcbiAgICB9XG59IiwiaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQge01hcE1hcmtlcn0gZnJvbSBcIi4vbWFwLW1hcmtlclwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXRoR2VuZXJhdG9yIHtcbiAgICBnZXQgZGVmYXVsdEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0SWNvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVmYXVsdEljb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEljb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyO1xuICAgIH1cblxuICAgIHNldCBjb3VudGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBfbWFwO1xuICAgIF9wYXRoID0gW107XG4gICAgX2NvdW50ZXIgPSAxO1xuICAgIF9hZGRlZExpc3RlbmVycyA9IFtdO1xuICAgIF9kZWZhdWx0SWNvbiA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIGlmKG1hcCkge1xuICAgICAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0L/Rg9GB0Log0LPQtdC90LXRgNCw0YLQvtGA0LBcbiAgICAgKi9cbiAgICBzdGFydChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhdGguY2xlYXIoKTtcblxuICAgICAgICAgICAgbGV0IG1hcmtlcnNBcnJheSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IG1hcmtlckpzb24gb2YgbWFya2Vyc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobWFya2VySnNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRBZGRMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2FkZGVkTGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlckpzb24pIHtcbiAgICAgICAgaWYodGhpcy5fcGF0aCkge1xuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXBNYXJrZXIodGhpcy5tYXAsIG1hcmtlckpzb24ucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBtYXJrZXJKc29uLmxhYmVsID0gdGhpcy5fcGF0aC5tYXJrZXJzLmxlbmd0aCArIDE7XG5cbiAgICAgICAgICAgIG1hcmtlci5zZXJpYWwgPSBtYXJrZXJKc29uO1xuXG4gICAgICAgICAgICBpZihtYXJrZXIuaWNvbiA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIuaWNvbiA9IHRoaXMuZGVmYXVsdEljb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdGguYWRkKG1hcmtlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaGFuZGxlciBvZiB0aGlzLl9hZGRlZExpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKlxuICpcbiAqL1xuaW1wb3J0IHthc3NlcnQgYXMgYXNzZXJ0fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFBhdGgge1xuICAgIGdldCBtYXJrZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VycztcbiAgICB9XG5cbiAgICBzZXQgbWFya2Vycyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXJzID0gdmFsdWU7XG4gICAgfVxuICAgICAgICBcbiAgICBfbWFya2VycyA9IFtdO1xuICAgIF91cGRhdGVMaXN0ZW5lcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC10YDQuNCw0LvQuNC30L7QstCw0L3QvdC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAqL1xuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYXMgPSB0aGlzLl9tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFyaykge1xuICAgICAgICAgICAgcmV0dXJuIG1hcmsuc2VyaWFsO1xuICAgICAgICB9KS5qb2luKCcsJyk7XG5cbiAgICAgICAgbGV0IHJlcyA9ICdbJyArIHNlcmlhcyArICddJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc0FycmF5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yZC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBcbiAgICBwb2ludFZhbHVlKGluZGV4LCBmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXJrZXJzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodC80LXQvdCwINC/0L7Qt9C40YbQuNC4INC40L3QtNC10LrRgdCwXG4gICAgICogQHBhcmFtIGluZGV4INCY0L3QtNC10LrRgVxuICAgICAqIEBwYXJhbSBjcmVtINCh0LzQtdGJ0LXQvdC40LVcbiAgICAgKi9cbiAgICBpbmRleERpc3Bvc2UoaW5kZXgsIGNyZW0pIHtcbiAgICAgICAgbGV0IHMgPSBpbmRleCArIGNyZW07XG5cbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG4gICAgICAgIGFzc2VydChzID4gLTEgJiYgcyA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX21hcmtlcnNbc107XG5cbiAgICAgICAgdGhpcy5fbWFya2Vyc1tzXSA9IHRoaXMuX21hcmtlcnNbaW5kZXhdO1xuICAgICAgICB0aGlzLl9tYXJrZXJzW2luZGV4XSA9IGVsZW07XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBpbmRleFJlbW92ZShpbmRleCkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX21hcmtlcnNbaW5kZXhdO1xuICAgICAgICBlbGVtLm1hcmtlci5zZXRNYXAobnVsbCk7XG5cbiAgICAgICAgdGhpcy5fbWFya2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc1N0cigpIHtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMuX21hcmtlcnMpIHtcbiAgICAgICAgICAgIHJlcyArPSBtYXJrLmNvb3Jkc1N0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIFxuICAgIGFkZFVwZGF0ZUxpc3RlbmVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIG1hcmsubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBjYWxsVXBkYXRlSGFuZGxlcnMoKSB7XG4gICAgICAgIGZvcihsZXQgaGFuZGxlciBvZiB0aGlzLl91cGRhdGVMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgICAgbWFya2VyLm1hcmtlci5hZGRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYodGhpcy5tYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoTGFiZWxzKCkge1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBpZihtYXJrLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBtYXJrLmxhYmVsID0gaW5kZXggKyAnJztcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFya2Vycykge1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBtYXJrZXJzO1xuXG4gICAgICAgIHRoaXMuYWRkVXBkYXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGFiZWxzKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBfbWFwID0gbnVsbDtcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB9XG5cbiAgICB3YXlwb2ludHMoY29vcmRzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgY29vcmRzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBjb29yZHNbaV0sXG4gICAgICAgICAgICAgICAgc3RvcG92ZXI6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHBhdGgpIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHBhdGguY29vcmRzQXJyYXk7XG5cbiAgICAgICAgaWYoY29vcmRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldE1hcCh0aGlzLm1hcC5tYXApO1xuXG4gICAgICAgIGxldCB3YXlwb2ludHMgPSB0aGlzLndheXBvaW50cyhjb29yZHMpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgb3JpZ2luOiBjb29yZHNbMF0sXG4gICAgICAgICAgICB3YXlwb2ludHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklOR1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBtZXNzYWdlIHx8IFwiQXNzZXJ0aW9uIGZhaWxlZFwiO1xuICAgIH1cbn0iXX0=