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
                        fitContainer: function fitContainer() {
                            var bounds = this.currentPath.bounds;

                            this.map.map.fitBounds(bounds);
                            this.map.map.panToBounds(bounds);
                        },
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

                            window.addEventListener('resize', function () {
                                this.fitContainer();
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
        key: 'bounds',
        get: function get() {
            var bounds = new google.maps.LatLngBounds();

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this._markers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var marker = _step4.value;

                    var latLng = marker.getPosition();

                    bounds.extend(latLng);
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

            return bounds;
        }
    }, {
        key: 'coordsStr',
        get: function get() {
            var res = '';

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this._markers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var mark = _step5.value;

                    res += mark.coordsStr;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFF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QkFBSyxrQkFBTCxDQUF3QixNQUF4QixDQUErQixLQUFLLEdBQUwsQ0FBUyxHQUF4Qzs7QUFFQSxnQkFBSSxZQUFZLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBaEI7O0FBRUEsZ0JBQUksVUFBVTtBQUNWLHdCQUFRLE9BQU8sQ0FBUCxDQURFO0FBRVYsb0NBRlU7QUFHViw2QkFBYSxPQUFPLE9BQU8sTUFBUCxHQUFnQixDQUF2QixDQUhIO0FBSVYsNEJBQVksT0FBTyxJQUFQLENBQVksVUFBWixDQUF1QjtBQUp6QixhQUFkOztBQU9BLGlCQUFLLGtCQUFMLENBQXdCLEtBQXhCLENBQThCLE9BQTlCLEVBQXVDLFVBQVMsUUFBVCxFQUFtQixNQUFuQixFQUEyQjtBQUM5RCxvQkFBSSxVQUFVLE9BQU8sSUFBUCxDQUFZLGdCQUFaLENBQTZCLEVBQTNDLEVBQStDO0FBQzNDLHlCQUFLLGtCQUFMLENBQXdCLGFBQXhCLENBQXNDLFFBQXRDO0FBQ0g7QUFDSixhQUpzQyxDQUlyQyxJQUpxQyxDQUloQyxJQUpnQyxDQUF2QztBQUtIOzs7Ozs7a0JBeERnQixROzs7Ozs7OztRQ0FMLE0sR0FBQSxNO0FBSmhCOzs7O0FBSU8sU0FBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLE9BQTNCLEVBQW9DO0FBQ3ZDLFFBQUksQ0FBQyxTQUFMLEVBQWdCO0FBQ1osY0FBTSxXQUFXLGtCQUFqQjtBQUNIO0FBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDEzLjEyLjE2LlxuICpcbiAqINCf0L7Qu9GD0YfQtdC90LjQtSDQtNCw0L3QvdGL0YVcbiAqL1xuXG5pbXBvcnQge1BhdGhHZW5lcmF0b3J9IGZyb20gXCIuL2xpYi9wYXRoLWdlbmVyYXRvclwiO1xuaW1wb3J0IHtHTWFwfSBmcm9tIFwiLi9saWIvbWFwXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vbGliL3JlbmRlcmVyXCI7XG5pbXBvcnQge1BhdGh9IGZyb20gXCIuL2xpYi9wYXRoXCI7XG5cbmNvbnN0IGNvbXBvbmVudE5hbWUgPSAncGF0aC1pbnB1dCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbXBvbmVudEFuY2hvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbXBvbmVudE5hbWUpWzBdO1xuXG4gICAgaWYoY29tcG9uZW50QW5jaG9yID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBvbmVudCB0YWcgbm90IGZvdW5kZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgdGVtcGxhdGVOYW1lID0gY29tcG9uZW50QW5jaG9yLmdldEF0dHJpYnV0ZSgndGVtcGxhdGUnKTtcbiAgICBsZXQgZmllbGRWYWx1ZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ZpZWxkLXZhbHVlJyk7XG4gICAgbGV0IGZpZWxkTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ZpZWxkLW5hbWUnKTtcbiAgICBsZXQgaWNvbnNSZXNvdXJjZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ2ljb25zLXJlc291cmNlJyk7XG5cbiAgICAkLmdldChpY29uc1Jlc291cmNlLCBmdW5jdGlvbiAoaWNvbnMpIHtcbiAgICAgICAgJC5nZXQodGVtcGxhdGVOYW1lLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgUHJvZiA9IFZ1ZS5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpblBhdGgoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aEdlbmVyYXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhdGg6IG5ldyBQYXRoKFtdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGljb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXRDb250YWluZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm91bmRzID0gdGhpcy5jdXJyZW50UGF0aC5ib3VuZHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAubWFwLnBhblRvQm91bmRzKGJvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5QYXRoOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudFBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5kZWZhdWx0SWNvbiA9IGljb25zWzBdLmljb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLnN0YXJ0KHRoaXMuY3VycmVudFBhdGgsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Ub3A6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguaW5kZXhEaXNwb3NlKGluZGV4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3duOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4UmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXRMbmcgPSBwb2ludC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5tYXAuc2V0Q2VudGVyKGxhdExuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFoZWFkOiBmdW5jdGlvbiAocG9pbnQsIGFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQuc2V0QWhlYWQoYWhlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5nLW1hcHMnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IEdNYXAoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yID0gbmV3IFBhdGhHZW5lcmF0b3IodGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy5tYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGF0aCB1cGRhdGluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5jdXJyZW50UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5hcHBlbmRBZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1Qb3NpdGlvbiA9IHRoaXMuY3VycmVudFBhdGguc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBwb2ludC4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICdpbnB1dFtkYXRlLXRpbWU9XCJkdC0nICsgKGVsZW1Qb3NpdGlvbiAtIDEpICsgJ1wiXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaWNrZXJBbmNob3IgPSAkKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VyQW5jaG9yLnRpbWVwaWNrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXJpZGlhbjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm9uKCdjaGFuZ2VUaW1lLnRpbWVwaWNrZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50aW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBpY2tlckFuY2hvci5hdHRyKCdkYXRhLWluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLnBvaW50VmFsdWUoaW5kZXgsICd0aW1lJywgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvaW50IGFkZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcC5tYXAsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlckNvb3JkcyA9IGV2ZW50LmxhdExuZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBtYXJrZXJDb29yZHMudG9KU09OKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXRDb250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZCBjb21wb25lbnQuLi4nKTtcbiAgICAgICAgICAgICAgICAvKiBlbmQtcmVtLWJsb2NrICovXG5cbiAgICAgICAgICAgICAgICBuZXcgUHJvZigpLiRtb3VudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC10YLRgdGPINC+0L/RgNC10LTQtdC70LjRgtGMINC60L7QvNC/0L7QvdC10L3RgjogVnVlLmpzINC90LUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC9Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5leHBvcnQgY2xhc3MgTWFwTWFya2VyIHtcbiAgICBnZXQgbWV0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gICAgfVxuXG4gICAgc2V0IG1ldGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWV0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IGRyYWdnYWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0RHJhZ2dhYmxlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xuICAgIH1cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGltZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgICAgIHRoaXMubWFya2VyLnNldE1hcCh2YWx1ZS5tYXApO1xuICAgIH1cbiAgICBnZXQgbGF0TG5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF0TG5nO1xuICAgIH1cblxuICAgIHNldCBsYXRMbmcodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGF0TG5nID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24obmV3IGdvb2dsZS5tYXBzLkxhdExuZyh2YWx1ZS5sYXQsIHZhbHVlLmxuZykpO1xuICAgIH1cblxuICAgIGdldCB2aXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFZpc2libGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmlzaWJsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXIuc2V0VmlzaWJsZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IGljb24ocGF0aCkge1xuICAgICAgICB0aGlzLl9pY29uID0gcGF0aDtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZih0aGlzLl9haGVhZCkge1xuICAgICAgICAgICAgdGhpcy5fYWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX2Rlc2NyaXB0aW9uICE9ICcnKSB7XG4gICAgICAgICAgICBpZihkcm9wZG93blJlc29sdmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUmVzb2x2ZXIodmFsdWUsIGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVhaGVhZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpbmRleCBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb2ludHNbaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwb2ludHNbaW5kZXhdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwb2ludHNbaW5kZXhdLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBvaW50c1tpbmRleF0ubG5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb2ludHNbaW5kZXhdLmRpc3BsYXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVsnZGlzcGxheSddID0gcG9pbnRzW2luZGV4XS5kaXNwbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gdHlwZWFoZWFkO1xuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgIH1cblxuICAgIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMuX21hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyLnNldExhYmVsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWFya2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyO1xuICAgIH1cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgdGVtcGxhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2VyaWFsKCkge1xuICAgICAgICBsZXQgc2VyaWEgPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm1hcmtlci5nZXRQb3NpdGlvbigpLnRvSlNPTigpLFxuICAgICAgICAgICAgdmlzaWJsZTogdGhpcy52aXNpYmxlLFxuICAgICAgICAgICAgdGltZTogdGhpcy50aW1lLFxuICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMubWV0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzZXJpYSk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cblxuICAgIHNldEFoZWFkKGFoZWFkKSB7XG4gICAgICAgIHRoaXMuX2FoZWFkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYWhlYWQubmFtZTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxhdDogYWhlYWQubGF0LFxuICAgICAgICAgICAgbG5nOiBhaGVhZC5sbmdcbiAgICAgICAgfTtcblxuICAgICAgICBpZihhaGVhZFsnZGlzcGxheSddICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYoYWhlYWRbJ2Rpc3BsYXknXVsnc3ZnJ10gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uID0gYWhlYWRbJ2Rpc3BsYXknXVsnc3ZnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhdExuZyA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1ldGEgPSBhaGVhZC5fbWV0YTtcblxuICAgICAgICB0aGlzLnR5cGVhaGVhZCA9IFtdO1xuICAgIH1cblxuICAgIHNldCBzZXJpYWwodmFsdWUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHZhbHVlLnBvc2l0aW9uO1xuXG4gICAgICAgIHRoaXMubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MpO1xuXG4gICAgICAgIHRoaXMuX2FoZWFkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHZhbHVlLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgICAgIGlmKHZhbHVlLmxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gdmFsdWUubGFiZWwgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlLnZpc2libGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdmFsdWUudmlzaWJsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZS50aW1lIHx8ICcwOjAwJztcbiAgICAgICAgdGhpcy5pY29uID0gdmFsdWUuaWNvbiB8fCAnJztcbiAgICAgICAgdGhpcy5tZXRhID0gdmFsdWUubWV0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0aGlzLmxhdExuZyk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldExhYmVsKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRWaXNpYmxlKHRoaXMudmlzaWJsZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobWFwLCBjb29yZHMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGlmKCFtYXApIHtcbiAgICAgICAgICAgIHRocm93ICfQndC1INC+0L/RgNC10LTQtdC70LXQvdCwINC60LDRgNGC0LAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBtYXA6IG1hcC5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG5cbiAgICAgICAgaWYodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lID0gJyc7XG4gICAgX21hcCA9IG51bGw7XG4gICAgX2xhdExuZyA9IHt9O1xuICAgIF9kZXNjcmlwdGlvbiA9ICcnO1xuICAgIF9tYXJrZXIgPSBudWxsO1xuICAgIF90ZW1wbGF0ZSA9ICdjb250ZW50Lmh0bWwnO1xuICAgIF9sYWJlbCA9ICcnO1xuICAgIF92aXNpYmxlID0gdHJ1ZTtcbiAgICBfaWNvbiA9ICcnO1xuICAgIHR5cGVhaGVhZCA9IFtdO1xuICAgIF9tZXRhID0ge307XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXRQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHJldHVybiBwb3MudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBhZGRJbmZvKCkge1xuICAgICAgICBsZXQgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICQoZGF0YSkubG9hZCgnc3JjL3RwbC8nICsgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgbGV0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgICAgICBjb250ZW50OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCB0aGlzLl9tYXJrZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYXJrZXIuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpbmZvd2luZG93LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIEdNYXAge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodGB0YvQu9C60LAg0L3QsCDQvtCx0YrQtdC60YIg0LrQsNGA0YJcbiAgICAgKi9cbiAgICBfbWFwO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB2YXIgcG9pbnRDb29yZHMgPSB7XG4gICAgICAgICAgICBsYXQ6IDUyLjYxNjY3LFxuICAgICAgICAgICAgbG5nOiAzOS42MDAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbGVtZW50LCB7XG4gICAgICAgICAgICBjZW50ZXI6IHBvaW50Q29vcmRzLFxuICAgICAgICAgICAgem9vbTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLl9tYXAsICdyZXNpemUnKTtcbiAgICB9XG59IiwiaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9wYXRoXCI7XG5pbXBvcnQge01hcE1hcmtlcn0gZnJvbSBcIi4vbWFwLW1hcmtlclwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBjbGFzcyBQYXRoR2VuZXJhdG9yIHtcbiAgICBnZXQgZGVmYXVsdEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0SWNvbjtcbiAgICB9XG5cbiAgICBzZXQgZGVmYXVsdEljb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdEljb24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyO1xuICAgIH1cblxuICAgIHNldCBjb3VudGVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cbiAgICBfbWFwO1xuICAgIF9wYXRoID0gW107XG4gICAgX2NvdW50ZXIgPSAxO1xuICAgIF9hZGRlZExpc3RlbmVycyA9IFtdO1xuICAgIF9kZWZhdWx0SWNvbiA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIGlmKG1hcCkge1xuICAgICAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0L/Rg9GB0Log0LPQtdC90LXRgNCw0YLQvtGA0LBcbiAgICAgKi9cbiAgICBzdGFydChwYXRoLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhdGguY2xlYXIoKTtcblxuICAgICAgICAgICAgbGV0IG1hcmtlcnNBcnJheSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IG1hcmtlckpzb24gb2YgbWFya2Vyc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQobWFya2VySnNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuX3BhdGggPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRBZGRMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2FkZGVkTGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlckpzb24pIHtcbiAgICAgICAgaWYodGhpcy5fcGF0aCkge1xuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBNYXBNYXJrZXIodGhpcy5tYXAsIG1hcmtlckpzb24ucG9zaXRpb24pO1xuXG4gICAgICAgICAgICBtYXJrZXJKc29uLmxhYmVsID0gdGhpcy5fcGF0aC5tYXJrZXJzLmxlbmd0aCArIDE7XG5cbiAgICAgICAgICAgIG1hcmtlci5zZXJpYWwgPSBtYXJrZXJKc29uO1xuXG4gICAgICAgICAgICBpZihtYXJrZXIuaWNvbiA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIuaWNvbiA9IHRoaXMuZGVmYXVsdEljb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3BhdGguYWRkKG1hcmtlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaGFuZGxlciBvZiB0aGlzLl9hZGRlZExpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKlxuICpcbiAqL1xuaW1wb3J0IHthc3NlcnQgYXMgYXNzZXJ0fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFBhdGgge1xuICAgIGdldCBtYXJrZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VycztcbiAgICB9XG5cbiAgICBzZXQgbWFya2Vycyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXJrZXJzID0gdmFsdWU7XG4gICAgfVxuICAgICAgICBcbiAgICBfbWFya2VycyA9IFtdO1xuICAgIF91cGRhdGVMaXN0ZW5lcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC10YDQuNCw0LvQuNC30L7QstCw0L3QvdC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAqL1xuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYXMgPSB0aGlzLl9tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFyaykge1xuICAgICAgICAgICAgcmV0dXJuIG1hcmsuc2VyaWFsO1xuICAgICAgICB9KS5qb2luKCcsJyk7XG5cbiAgICAgICAgbGV0IHJlcyA9ICdbJyArIHNlcmlhcyArICddJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc0FycmF5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yZC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBcbiAgICBwb2ludFZhbHVlKGluZGV4LCBmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tYXJrZXJzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodC80LXQvdCwINC/0L7Qt9C40YbQuNC4INC40L3QtNC10LrRgdCwXG4gICAgICogQHBhcmFtIGluZGV4INCY0L3QtNC10LrRgVxuICAgICAqIEBwYXJhbSBjcmVtINCh0LzQtdGJ0LXQvdC40LVcbiAgICAgKi9cbiAgICBpbmRleERpc3Bvc2UoaW5kZXgsIGNyZW0pIHtcbiAgICAgICAgbGV0IHMgPSBpbmRleCArIGNyZW07XG5cbiAgICAgICAgYXNzZXJ0KGluZGV4ID4gLTEgJiYgaW5kZXggPCB0aGlzLl9tYXJrZXJzLmxlbmd0aCk7XG4gICAgICAgIGFzc2VydChzID4gLTEgJiYgcyA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX21hcmtlcnNbc107XG5cbiAgICAgICAgdGhpcy5fbWFya2Vyc1tzXSA9IHRoaXMuX21hcmtlcnNbaW5kZXhdO1xuICAgICAgICB0aGlzLl9tYXJrZXJzW2luZGV4XSA9IGVsZW07XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBpbmRleFJlbW92ZShpbmRleCkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX21hcmtlcnNbaW5kZXhdO1xuICAgICAgICBlbGVtLm1hcmtlci5zZXRNYXAobnVsbCk7XG5cbiAgICAgICAgdGhpcy5fbWFya2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGJvdW5kcygpIHtcbiAgICAgICAgbGV0IGJvdW5kcyAgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IG1hcmtlciBvZiB0aGlzLl9tYXJrZXJzKSB7XG4gICAgICAgICAgICBsZXQgbGF0TG5nID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvdW5kcy5leHRlbmQobGF0TG5nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzU3RyKCkge1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5fbWFya2Vycykge1xuICAgICAgICAgICAgcmVzICs9IG1hcmsuY29vcmRzU3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgXG4gICAgYWRkVXBkYXRlTGlzdGVuZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgbWFyay5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGNhbGxVcGRhdGVIYW5kbGVycygpIHtcbiAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX3VwZGF0ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKG1hcmtlcikge1xuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICBtYXJrZXIubWFya2VyLmFkZExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZih0aGlzLm1hcmtlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2hMYWJlbHMoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLm1hcmtlcnMpIHtcbiAgICAgICAgICAgIGlmKG1hcmsudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIG1hcmsubGFiZWwgPSBpbmRleCArICcnO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXJrZXJzKSB7XG4gICAgICAgIHRoaXMubWFya2VycyA9IG1hcmtlcnM7XG5cbiAgICAgICAgdGhpcy5hZGRVcGRhdGVMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMYWJlbHMoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIF9tYXAgPSBudWxsO1xuICAgIFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgIH1cblxuICAgIHdheXBvaW50cyhjb29yZHMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjb29yZHMubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbG9jYXRpb246IGNvb3Jkc1tpXSxcbiAgICAgICAgICAgICAgICBzdG9wb3ZlcjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZW5kZXIocGF0aCkge1xuICAgICAgICBsZXQgY29vcmRzID0gcGF0aC5jb29yZHNBcnJheTtcblxuICAgICAgICBpZihjb29yZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0TWFwKHRoaXMubWFwLm1hcCk7XG5cbiAgICAgICAgbGV0IHdheXBvaW50cyA9IHRoaXMud2F5cG9pbnRzKGNvb3Jkcyk7XG5cbiAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBvcmlnaW46IGNvb3Jkc1swXSxcbiAgICAgICAgICAgIHdheXBvaW50cyxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IG1lc3NhZ2UgfHwgXCJBc3NlcnRpb24gZmFpbGVkXCI7XG4gICAgfVxufSJdfQ==