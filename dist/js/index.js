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

            this.typeahead = [];
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
                                id: points[index].id,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFF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RUEsZ0JBQUcsT0FBTyxNQUFQLEdBQWdCLENBQW5CLEVBQXNCO0FBQ2xCLHFCQUFLLGtCQUFMLENBQXdCLE1BQXhCLENBQStCLElBQS9CO0FBQ0E7QUFDSDs7QUFFRCxpQkFBSyxrQkFBTCxDQUF3QixNQUF4QixDQUErQixLQUFLLEdBQUwsQ0FBUyxHQUF4Qzs7QUFFQSxnQkFBSSxZQUFZLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBaEI7O0FBRUEsZ0JBQUksVUFBVTtBQUNWLHdCQUFRLE9BQU8sQ0FBUCxDQURFO0FBRVYsb0NBRlU7QUFHViw2QkFBYSxPQUFPLE9BQU8sTUFBUCxHQUFnQixDQUF2QixDQUhIO0FBSVYsNEJBQVksT0FBTyxJQUFQLENBQVksVUFBWixDQUF1QjtBQUp6QixhQUFkOztBQU9BLGlCQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLE9BQTlCLEVBQXVDLFVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQjtBQUM5RCxvQkFBSSxVQUFVLE9BQU8sSUFBUCxDQUFZLGdCQUFaLENBQTZCLEVBQTNDLEVBQStDO0FBQzNDLHlCQUFLLGtCQUFMLENBQXdCLGFBQXhCLENBQXNDLFFBQXRDO0FBQ0g7QUFDSixhQUpzQyxDQUlyQyxJQUpxQyxDQUloQyxJQUpnQyxDQUF2QztBQUtIOzs7Ozs7a0JBeERnQixROzs7Ozs7OztRQ0FMLE0sR0FBQSxNO0FBSmhCOzs7O0FBSU8sU0FBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLE9BQTNCLEVBQW9DO0FBQ3ZDLFFBQUksQ0FBQyxTQUFMLEVBQWdCO0FBQ1osY0FBTSxXQUFXLGtCQUFqQjtBQUNIO0FBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDEzLjEyLjE2LlxuICpcbiAqINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YVcbiAqL1xuXG5pbXBvcnQge1BhdGhHZW5lcmF0b3J9IGZyb20gXCIuL2xpYi9wYXRoLWdlbmVyYXRvclwiO1xuaW1wb3J0IHtHTWFwfSBmcm9tIFwiLi9saWIvbWFwXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vbGliL3JlbmRlcmVyXCI7XG5pbXBvcnQge1BhdGh9IGZyb20gXCIuL2xpYi9wYXRoXCI7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAncGF0aC1pbnB1dCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbXBvbmVudEFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbXBvbmVudE5hbWUpWzBdO1xuXG4gICAgaWYoY29tcG9uZW50QW5jaG9yID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCB0YWcgbm90IGZvdW5kZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgdGVtcGxhdGVOYW1lID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgndGVtcGxhdGUnKTtcbiAgICBsZXQgZmllbGRWYWx1ZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ZpZWxkLXZhbHVlJyk7XG4gICAgbGV0IGZpZWxkTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ZpZWxkLW5hbWUnKTtcbiAgICBsZXQgaWNvbnNSZXNvdXJjZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ljb25zLXJlc291cmNlJyk7XG5cbiAgICAkLmdldChpY29uc1Jlc291cmNlLCBmdW5jdGlvbiAoaWNvbnMpIHtcbiAgICAgICAgJC5nZXQodGVtcGxhdGVOYW1lLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgUHJvZiA9IFZ1ZS5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aEdlbmVyYXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IG5ldyBQYXRoKFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGljb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpblBhdGg6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmRlZmF1bHRJY29uID0gaWNvbnNbMF0uaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3Iuc3RhcnQodGhpcy5jdXJyZW50UGF0aCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5maW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1RvcDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleERpc3Bvc2UoaW5kZXgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvd246IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhSZW1vdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhdExuZyA9IHBvaW50LmxhdExuZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLm1hcC5zZXRDZW50ZXIobGF0TG5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWhlYWQ6IGZ1bmN0aW9uIChwb2ludCwgYWhlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC5zZXRBaGVhZChhaGVhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmctbWFwcycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgR01hcChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IgPSBuZXcgUGF0aEdlbmVyYXRvcih0aGlzLm1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmFkZFVwZGF0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXRoIHVwZGF0aW5nLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmN1cnJlbnRQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmFwcGVuZEFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbVBvc2l0aW9uID0gdGhpcy5jdXJyZW50UGF0aC5zaXplO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHBvaW50Li4uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W2RhdGUtdGltZT1cImR0LScgKyAoZWxlbVBvc2l0aW9uIC0gMSkgKyAnXCJdJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpY2tlckFuY2hvciA9ICQoc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXJBbmNob3IudGltZXBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01lcmlkaWFuOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkub24oJ2NoYW5nZVRpbWUudGltZXBpY2tlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRpbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGlja2VyQW5jaG9yLmF0dHIoJ2RhdGEtaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGgucG9pbnRWYWx1ZShpbmRleCwgJ3RpbWUnLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9pbnQgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLm1hcCwgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VyQ29vcmRzID0gZXZlbnQubGF0TG5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hcmtlckNvb3Jkcy50b0pTT04oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2FkIGNvbXBvbmVudC4uLicpO1xuICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgIG5ldyBQcm9mKCkuJG1vdW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cd0LUg0YPQtNCw0LXRgtGB0Y8g0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCOiBWdWUuanMg0L3QtSDQuNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0L0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXBNYXJrZXIge1xuICAgIGdldCBkcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGRyYWdnYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0RHJhZ2dhYmxlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcCh2YWx1ZS5tYXApO1xuICAgIH1cbiAgICBnZXQgbGF0TG5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF0TG5nO1xuICAgIH1cblxuICAgIHNldCBsYXRMbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGF0TG5nID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24obmV3IGdvb2dsZS5tYXBzLkxhdExuZyh2YWx1ZS5sYXQsIHZhbHVlLmxuZykpO1xuICAgIH1cblxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFZpc2libGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0VmlzaWJsZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGljb24ocGF0aCkge1xuICAgICAgICB0aGlzLl9pY29uID0gcGF0aDtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9haGVhZCkge1xuICAgICAgICAgICAgdGhpcy5fYWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX2Rlc2NyaXB0aW9uICE9ICcnKSB7XG4gICAgICAgICAgICBpZihkcm9wZG93blJlc29sdmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUmVzb2x2ZXIodmFsdWUsIGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVhaGVhZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpbmRleCBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb2ludHNbaW5kZXhdLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBvaW50c1tpbmRleF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBvaW50c1tpbmRleF0ubGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcG9pbnRzW2luZGV4XS5sbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvaW50c1tpbmRleF0uZGlzcGxheSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWydkaXNwbGF5J10gPSBwb2ludHNbaW5kZXhdLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQgPSB0eXBlYWhlYWQ7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5fbWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXIuc2V0TGFiZWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtYXJrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXI7XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMubWFya2VyLmdldFBvc2l0aW9uKCkudG9KU09OKCksXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNlcmlhKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgfVxuXG4gICAgc2V0QWhlYWQoYWhlYWQpIHtcbiAgICAgICAgdGhpcy5fYWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhaGVhZC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgbGF0OiBhaGVhZC5sYXQsXG4gICAgICAgICAgICBsbmc6IGFoZWFkLmxuZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGFoZWFkWydkaXNwbGF5J10gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZihhaGVhZFsnZGlzcGxheSddWydzdmcnXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb24gPSBhaGVhZFsnZGlzcGxheSddWydzdmcnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGF0TG5nID0gcG9zaXRpb247XG5cbiAgICAgICAgdGhpcy50eXBlYWhlYWQgPSBbXTtcbiAgICB9XG5cbiAgICBzZXQgc2VyaWFsKHZhbHVlKSB7XG4gICAgICAgIGxldCBwb3MgPSB2YWx1ZS5wb3NpdGlvbjtcblxuICAgICAgICB0aGlzLmxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcocG9zKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgICAgICBpZih2YWx1ZS5sYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHZhbHVlLmxhYmVsICsgJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZS52aXNpYmxlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHZhbHVlLnZpc2libGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lID0gdmFsdWUudGltZSB8fCAnMDowMCc7XG4gICAgICAgIHRoaXMuaWNvbiA9IHZhbHVlLmljb24gfHwgJyc7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24odGhpcy5sYXRMbmcpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRMYWJlbCh0aGlzLmxhYmVsKTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0VmlzaWJsZSh0aGlzLnZpc2libGUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1hcCwgY29vcmRzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBpZighbWFwKSB7XG4gICAgICAgICAgICB0aHJvdyAn0J3QtSDQvtC/0YDQtdC00LXQu9C10L3QsCDQutCw0YDRgtCwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgbWFwOiBtYXAubWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IGNvb3JkcyxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuXG4gICAgICAgIGlmKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdGltZSA9ICcnO1xuICAgIF9tYXAgPSBudWxsO1xuICAgIF9sYXRMbmcgPSB7fTtcbiAgICBfZGVzY3JpcHRpb24gPSAnJztcbiAgICBfbWFya2VyID0gbnVsbDtcbiAgICBfdGVtcGxhdGUgPSAnY29udGVudC5odG1sJztcbiAgICBfbGFiZWwgPSAnJztcbiAgICBfdmlzaWJsZSA9IHRydWU7XG4gICAgX2ljb24gPSAnJztcbiAgICB0eXBlYWhlYWQgPSBbXTtcblxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc1N0cigpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHBvcy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGFkZEluZm8oKSB7XG4gICAgICAgIGxldCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgJChkYXRhKS5sb2FkKCdzcmMvdHBsLycgKyB0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgICBsZXQgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIHRoaXMuX21hcmtlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgR01hcCB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0YHRi9C70LrQsCDQvdCwINC+0LHRitC10LrRgiDQutCw0YDRglxuICAgICAqL1xuICAgIF9tYXA7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHZhciBwb2ludENvb3JkcyA9IHtsYXQ6IDUyLjYxNjY3LCBsbmc6IDM5LjYwMDB9O1xuXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudCwge1xuICAgICAgICAgICAgY2VudGVyOiBwb2ludENvb3JkcyxcbiAgICAgICAgICAgIHpvb206IDE2XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5fbWFwLCAncmVzaXplJyk7XG4gICAgfVxufSIsImltcG9ydCB7UGF0aH0gZnJvbSBcIi4vcGF0aFwiO1xuaW1wb3J0IHtNYXBNYXJrZXJ9IGZyb20gXCIuL21hcC1tYXJrZXJcIjtcbi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgUGF0aEdlbmVyYXRvciB7XG4gICAgZ2V0IGRlZmF1bHRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEljb247XG4gICAgfVxuXG4gICAgc2V0IGRlZmF1bHRJY29uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRJY29uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRlcjtcbiAgICB9XG5cbiAgICBzZXQgY291bnRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb3VudGVyID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgX21hcDtcbiAgICBfcGF0aCA9IFtdO1xuICAgIF9jb3VudGVyID0gMTtcbiAgICBfYWRkZWRMaXN0ZW5lcnMgPSBbXTtcbiAgICBfZGVmYXVsdEljb24gPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICBpZihtYXApIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC/0YPRgdC6INCz0LXQvdC10YDQsNGC0L7RgNCwXG4gICAgICovXG4gICAgc3RhcnQocGF0aCwgZGF0YSkge1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcblxuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXRoLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGxldCBtYXJrZXJzQXJyYXkgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBtYXJrZXJKc29uIG9mIG1hcmtlcnNBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKG1hcmtlckpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoKCkge1xuICAgICAgICB0aGlzLl9wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kQWRkTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl9hZGRlZExpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGFkZChtYXJrZXJKc29uKSB7XG4gICAgICAgIGlmKHRoaXMuX3BhdGgpIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFwTWFya2VyKHRoaXMubWFwLCBtYXJrZXJKc29uLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgbWFya2VySnNvbi5sYWJlbCA9IHRoaXMuX3BhdGgubWFya2Vycy5sZW5ndGggKyAxO1xuXG4gICAgICAgICAgICBtYXJrZXIuc2VyaWFsID0gbWFya2VySnNvbjtcblxuICAgICAgICAgICAgaWYobWFya2VyLmljb24gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyLmljb24gPSB0aGlzLmRlZmF1bHRJY29uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wYXRoLmFkZChtYXJrZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fYWRkZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICpcbiAqXG4gKi9cbmltcG9ydCB7YXNzZXJ0IGFzIGFzc2VydH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBQYXRoIHtcbiAgICBnZXQgbWFya2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnM7XG4gICAgfVxuXG4gICAgc2V0IG1hcmtlcnModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFya2VycyA9IHZhbHVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgX21hcmtlcnMgPSBbXTtcbiAgICBfdXBkYXRlTGlzdGVuZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LXQvdC40LUg0YHQtdGA0LjQsNC70LjQt9C+0LLQsNC90L3QvtCz0L4g0LzQsNGB0YHQuNCy0LBcbiAgICAgKi9cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWFzID0gdGhpcy5fbWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmspIHtcbiAgICAgICAgICAgIHJldHVybiBtYXJrLnNlcmlhbDtcbiAgICAgICAgfSkuam9pbignLCcpO1xuXG4gICAgICAgIGxldCByZXMgPSAnWycgKyBzZXJpYXMgKyAnXSc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNBcnJheSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMubWFya2Vycy5tYXAoZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgXG4gICAgcG9pbnRWYWx1ZShpbmRleCwgZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF1bZmllbGRdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQvNC10L3QsCDQv9C+0LfQuNGG0LjQuCDQuNC90LTQtdC60YHQsFxuICAgICAqIEBwYXJhbSBpbmRleCDQmNC90LTQtdC60YFcbiAgICAgKiBAcGFyYW0gY3JlbSDQodC80LXRidC10L3QuNC1XG4gICAgICovXG4gICAgaW5kZXhEaXNwb3NlKGluZGV4LCBjcmVtKSB7XG4gICAgICAgIGxldCBzID0gaW5kZXggKyBjcmVtO1xuXG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuICAgICAgICBhc3NlcnQocyA+IC0xICYmIHMgPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW3NdO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnNbc10gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgdGhpcy5fbWFya2Vyc1tpbmRleF0gPSBlbGVtO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgaW5kZXhSZW1vdmUoaW5kZXgpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgZWxlbS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuXG4gICAgICAgIHRoaXMuX21hcmtlcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLl9tYXJrZXJzKSB7XG4gICAgICAgICAgICByZXMgKz0gbWFyay5jb29yZHNTdHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBcbiAgICBhZGRVcGRhdGVMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBtYXJrLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgY2FsbFVwZGF0ZUhhbmRsZXJzKCkge1xuICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fdXBkYXRlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQobWFya2VyKSB7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5tYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMubWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaExhYmVscygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgaWYobWFyay52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgbWFyay5sYWJlbCA9IGluZGV4ICsgJyc7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1hcmtlcnMpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gbWFya2VycztcblxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExhYmVscygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgX21hcCA9IG51bGw7XG4gICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgfVxuXG4gICAgd2F5cG9pbnRzKGNvb3Jkcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNvb3Jkcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogY29vcmRzW2ldLFxuICAgICAgICAgICAgICAgIHN0b3BvdmVyOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlbmRlcihwYXRoKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBwYXRoLmNvb3Jkc0FycmF5O1xuXG4gICAgICAgIGlmKGNvb3Jkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAodGhpcy5tYXAubWFwKTtcblxuICAgICAgICBsZXQgd2F5cG9pbnRzID0gdGhpcy53YXlwb2ludHMoY29vcmRzKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogY29vcmRzWzBdLFxuICAgICAgICAgICAgd2F5cG9pbnRzLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIjtcbiAgICB9XG59Il19