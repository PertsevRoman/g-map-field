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

                            this.fitContainer();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvbGliL21hcC1tYXJrZXIuanMiLCJzcmMvanMvbGliL21hcC5qcyIsInNyYy9qcy9saWIvcGF0aC1nZW5lcmF0b3IuanMiLCJzcmMvanMvbGliL3BhdGguanMiLCJzcmMvanMvbGliL3JlbmRlcmVyLmpzIiwic3JjL2pzL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQVRBOzs7Ozs7QUFXQSxJQUFNLGdCQUFnQixZQUF0Qjs7QUFFQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUksa0JBQWtCLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsQ0FBdEI7O0FBRUEsUUFBRyxtQkFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsZ0JBQVEsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGVBQWUsZ0JBQWdCLFlBQWhCLENBQTZCLFVBQTdCLENBQW5CO0FBQ0EsUUFBSSxhQUFhLGdCQUFnQixZQUFoQixDQUE2QixhQUE3QixDQUFqQjtBQUNBLFFBQUksWUFBWSxnQkFBZ0IsWUFBaEIsQ0FBNkIsWUFBN0IsQ0FBaEI7QUFDQSxRQUFJLGdCQUFnQixnQkFBZ0IsWUFBaEIsQ0FBNkIsZ0JBQTdCLENBQXBCOztBQUVBLE1BQUUsR0FBRixDQUFNLGFBQU4sRUFBcUIsVUFBVSxNQUFWLEVBQWlCO0FBQ2xDLFVBQUUsR0FBRixDQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLGdCQUFJO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVztBQUNsQiw4QkFBVSxJQURRO0FBRWxCLDZCQUFTLG1CQUFZO0FBQ2pCLDZCQUFLLElBQUw7O0FBRUEsNkJBQUssU0FBTCxHQUFpQixTQUFqQjs7QUFFQSw0QkFBRyxVQUFILEVBQWU7QUFDWCxpQ0FBSyxTQUFMLENBQWUsVUFBZjtBQUNILHlCQUZELE1BRU87QUFDSCxpQ0FBSyxTQUFMO0FBQ0g7QUFDSixxQkFaaUI7QUFhbEIsMEJBQU0sZ0JBQVk7QUFDZCwrQkFBTztBQUNILDJDQUFlLElBRFo7QUFFSCxpQ0FBSyxJQUZGO0FBR0gseUNBQWEsZUFBUyxFQUFULENBSFY7QUFJSCxzQ0FBVSxJQUpQO0FBS0gsb0NBQVEsSUFMTDtBQU1ILHVDQUFXO0FBTlIseUJBQVA7QUFRSCxxQkF0QmlCO0FBdUJsQiw4QkFBVTtBQUNOLCtCQUFPLGlCQUFZO0FBQ2YsbUNBQU8sTUFBUDtBQUNIO0FBSEsscUJBdkJRO0FBNEJsQiw2QkFBUztBQUNMLHNDQUFjLHdCQUFZO0FBQ3RCLGdDQUFJLFNBQVMsS0FBSyxXQUFMLENBQWlCLE1BQTlCOztBQUVBLGlDQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsU0FBYixDQUF1QixNQUF2QjtBQUNBLGlDQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsV0FBYixDQUF5QixNQUF6QjtBQUNILHlCQU5JO0FBT0wsbUNBQVcsbUJBQVUsSUFBVixFQUFnQjtBQUN2QixnQ0FBRyxLQUFLLFdBQVIsRUFBcUI7QUFDakIscUNBQUssV0FBTCxDQUFpQixLQUFqQjtBQUNIOztBQUVELGlDQUFLLGFBQUwsQ0FBbUIsV0FBbkIsR0FBaUMsT0FBTSxDQUFOLEVBQVMsSUFBMUM7QUFDQSxpQ0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLEtBQUssV0FBOUIsRUFBMkMsSUFBM0M7QUFDSCx5QkFkSTtBQWVMLG9DQUFZLHNCQUFZO0FBQ3BCLGlDQUFLLGFBQUwsQ0FBbUIsTUFBbkI7QUFDSCx5QkFqQkk7QUFrQkwsK0JBQU8sZUFBVSxLQUFWLEVBQWlCO0FBQ3BCLGlDQUFLLFdBQUwsQ0FBaUIsWUFBakIsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBQyxDQUF0QztBQUNILHlCQXBCSTtBQXFCTCxnQ0FBUSxnQkFBVSxLQUFWLEVBQWlCO0FBQ3JCLGlDQUFLLFdBQUwsQ0FBaUIsWUFBakIsQ0FBOEIsS0FBOUIsRUFBcUMsQ0FBckM7QUFDSCx5QkF2Qkk7QUF3QkwsZ0NBQVEsZ0JBQVUsS0FBVixFQUFpQjtBQUNyQixpQ0FBSyxXQUFMLENBQWlCLFdBQWpCLENBQTZCLEtBQTdCO0FBQ0gseUJBMUJJO0FBMkJMLGdDQUFRLGdCQUFVLEtBQVYsRUFBaUI7QUFDckIsZ0NBQUksU0FBUyxNQUFNLE1BQW5COztBQUVBLGlDQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsU0FBYixDQUF1QixNQUF2QjtBQUNILHlCQS9CSTtBQWdDTCxtQ0FBVyxxQkFBWTtBQUNuQixpQ0FBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0gseUJBbENJO0FBbUNMLGtDQUFVLGtCQUFVLEtBQVYsRUFBaUIsS0FBakIsRUFBd0I7QUFDOUIsa0NBQU0sUUFBTixDQUFlLEtBQWY7O0FBRUEsaUNBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBSyxXQUExQjtBQUNILHlCQXZDSTtBQXdDTCw4QkFBTSxnQkFBWTtBQUNkLGdDQUFJLFVBQVUsS0FBSyxHQUFMLENBQVMsYUFBVCxDQUF1QixTQUF2QixDQUFkOztBQUVBLGlDQUFLLEdBQUwsR0FBVyxjQUFTLE9BQVQsQ0FBWDtBQUNBLGlDQUFLLGFBQUwsR0FBcUIsaUNBQWtCLEtBQUssR0FBdkIsQ0FBckI7QUFDQSxpQ0FBSyxRQUFMLEdBQWdCLHVCQUFhLEtBQUssR0FBbEIsQ0FBaEI7O0FBRUEsaUNBQUssV0FBTCxDQUFpQixpQkFBakIsQ0FBbUMsWUFBWTtBQUMzQztBQUNBLHdDQUFRLEdBQVIsQ0FBWSxrQkFBWjtBQUNBOztBQUVBLHFDQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXFCLEtBQUssV0FBMUI7QUFDQSxxQ0FBSyxZQUFMO0FBQ0gsNkJBUGtDLENBT2pDLElBUGlDLENBTzVCLElBUDRCLENBQW5DOztBQVNBLGlDQUFLLGFBQUwsQ0FBbUIsaUJBQW5CLENBQXFDLFlBQVk7QUFDN0Msb0NBQU0sZUFBZSxLQUFLLFdBQUwsQ0FBaUIsSUFBdEM7O0FBRUE7QUFDQSx3Q0FBUSxHQUFSLENBQVksaUJBQVo7QUFDQTs7QUFFQSwyQ0FBVyxZQUFZO0FBQ25CLHdDQUFNLFdBQVcsMEJBQTBCLGVBQWUsQ0FBekMsSUFBOEMsSUFBL0Q7QUFDQSx3Q0FBTSxlQUFlLEVBQUUsUUFBRixDQUFyQjs7QUFFQSxpREFBYSxVQUFiLENBQXdCO0FBQ3BCLHNEQUFjO0FBRE0scUNBQXhCLEVBRUcsRUFGSCxDQUVNLHVCQUZOLEVBRStCLFVBQVUsQ0FBVixFQUFhO0FBQ3hDLDRDQUFNLFFBQVEsRUFBRSxJQUFGLENBQU8sS0FBckI7QUFDQSw0Q0FBSSxRQUFRLGFBQWEsSUFBYixDQUFrQixZQUFsQixDQUFaOztBQUVBLDZDQUFLLFdBQUwsQ0FBaUIsVUFBakIsQ0FBNEIsS0FBNUIsRUFBbUMsTUFBbkMsRUFBMkMsS0FBM0M7O0FBRUE7QUFDQSxnREFBUSxHQUFSLENBQVksYUFBWjtBQUNBO0FBQ0gscUNBVDhCLENBUzdCLElBVDZCLENBU3hCLElBVHdCLENBRi9CO0FBWUgsaUNBaEJVLENBZ0JULElBaEJTLENBZ0JKLElBaEJJLENBQVgsRUFnQmMsR0FoQmQ7QUFpQkgsNkJBeEJvQyxDQXdCbkMsSUF4Qm1DLENBd0I5QixJQXhCOEIsQ0FBckM7O0FBMEJBLG1DQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLFdBQWxCLENBQThCLEtBQUssR0FBTCxDQUFTLEdBQXZDLEVBQTRDLE9BQTVDLEVBQXFELFVBQVMsS0FBVCxFQUFnQjtBQUNqRSxvQ0FBTSxlQUFlLE1BQU0sTUFBM0I7O0FBRUEscUNBQUssYUFBTCxDQUFtQixHQUFuQixDQUF1QjtBQUNuQiw4Q0FBVSxhQUFhLE1BQWI7QUFEUyxpQ0FBdkI7O0FBSUEscUNBQUssWUFBTDtBQUNILDZCQVJvRCxDQVFuRCxJQVJtRCxDQVE5QyxJQVI4QyxDQUFyRDs7QUFVQSxpQ0FBSyxZQUFMO0FBQ0g7QUE3Rkk7QUE1QlMsaUJBQVgsQ0FBWDs7QUE2SEE7QUFDQSx3QkFBUSxHQUFSLENBQVksbUJBQVo7QUFDQTs7QUFFQSxvQkFBSSxJQUFKLEdBQVcsTUFBWCxDQUFrQixhQUFsQjtBQUNILGFBbklELENBbUlFLE9BQU8sS0FBUCxFQUFjO0FBQ1osd0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSx3QkFBUSxHQUFSLENBQVksNERBQVo7QUFDSDtBQUNKLFNBeElEO0FBeUlILEtBMUlEO0FBMklILENBeEpEOzs7Ozs7Ozs7Ozs7O0FDYkE7OztJQUdhLFMsV0FBQSxTOzs7aUNBc0lBO0FBQ0wsaUJBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsSUFBbkI7QUFDSDs7O2lDQUVRLEssRUFBTztBQUNaLGlCQUFLLE1BQUwsR0FBYyxJQUFkOztBQUVBLGlCQUFLLFdBQUwsR0FBbUIsTUFBTSxJQUF6Qjs7QUFFQSxnQkFBTSxXQUFXO0FBQ2IscUJBQUssTUFBTSxHQURFO0FBRWIscUJBQUssTUFBTTtBQUZFLGFBQWpCOztBQUtBLGdCQUFHLE1BQU0sU0FBTixLQUFvQixTQUF2QixFQUFrQztBQUM5QixvQkFBRyxNQUFNLFNBQU4sRUFBaUIsS0FBakIsS0FBMkIsU0FBOUIsRUFBeUM7QUFDckMseUJBQUssSUFBTCxHQUFZLE1BQU0sU0FBTixFQUFpQixLQUFqQixDQUFaO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSyxNQUFMLEdBQWMsUUFBZDtBQUNBLGlCQUFLLElBQUwsR0FBWSxNQUFNLEtBQWxCOztBQUVBLGlCQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7OzRCQTdKVTtBQUNQLG1CQUFPLEtBQUssS0FBWjtBQUNILFM7MEJBRVEsSyxFQUFPO0FBQ1osaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDSDs7OzRCQUVlO0FBQ1osbUJBQU8sS0FBSyxPQUFMLENBQWEsWUFBYixFQUFQO0FBQ0gsUzswQkFFYSxLLEVBQU87QUFDakIsaUJBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsS0FBMUI7QUFDSDs7OzRCQUNVO0FBQ1AsbUJBQU8sS0FBSyxLQUFaO0FBQ0gsUzswQkFzQ1EsSSxFQUFNO0FBQ1gsaUJBQUssS0FBTCxHQUFhLElBQWI7QUFDSDs7OzRCQXZDVTtBQUNQLG1CQUFPLEtBQUssS0FBWjtBQUNILFM7MEJBRVEsSyxFQUFPO0FBQ1osaUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDSDs7OzRCQUNTO0FBQ04sbUJBQU8sS0FBSyxJQUFaO0FBQ0gsUzswQkFFTyxLLEVBQU87QUFDWCxpQkFBSyxJQUFMLEdBQVksS0FBWjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLE1BQU0sR0FBekI7QUFDSDs7OzRCQUNZO0FBQ1QsbUJBQU8sS0FBSyxPQUFaO0FBQ0gsUzswQkFFVSxLLEVBQU87QUFDZCxpQkFBSyxPQUFMLEdBQWUsS0FBZjs7QUFFQSxpQkFBSyxNQUFMLENBQVksV0FBWixDQUF3QixJQUFJLE9BQU8sSUFBUCxDQUFZLE1BQWhCLENBQXVCLE1BQU0sR0FBN0IsRUFBa0MsTUFBTSxHQUF4QyxDQUF4QjtBQUNIOzs7NEJBRWE7QUFDVixtQkFBTyxLQUFLLE9BQUwsQ0FBYSxVQUFiLEVBQVA7QUFDSCxTOzBCQUVXLEssRUFBTztBQUNmLGlCQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLEtBQXhCO0FBQ0EsaUJBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNIOzs7NEJBQ2lCO0FBQ2QsbUJBQU8sS0FBSyxZQUFaO0FBQ0gsUzswQkFNZSxLLEVBQU87QUFDbkIsaUJBQUssWUFBTCxHQUFvQixLQUFwQjs7QUFFQSxnQkFBRyxLQUFLLE1BQVIsRUFBZ0I7QUFDWixxQkFBSyxNQUFMLEdBQWMsS0FBZDtBQUNBO0FBQ0g7O0FBRUQsZ0JBQUcsS0FBSyxZQUFMLElBQXFCLEVBQXhCLEVBQTRCO0FBQ3hCLG9CQUFHLG9CQUFvQixTQUF2QixFQUFrQztBQUM5QixxQ0FBaUIsS0FBakIsRUFBd0IsVUFBVSxNQUFWLEVBQWtCO0FBQ3RDLDRCQUFJLFlBQVksRUFBaEI7O0FBRUEsNkJBQUksSUFBSSxLQUFSLElBQWlCLE1BQWpCLEVBQXlCO0FBQ3JCLGdDQUFJLE9BQU87QUFDUCx1Q0FBTztBQUNILHdDQUFJLE9BQU8sS0FBUCxFQUFjO0FBRGYsaUNBREE7QUFJUCxzQ0FBTSxPQUFPLEtBQVAsRUFBYyxJQUpiO0FBS1AscUNBQUssT0FBTyxLQUFQLEVBQWMsR0FMWjtBQU1QLHFDQUFLLE9BQU8sS0FBUCxFQUFjO0FBTlosNkJBQVg7O0FBU0EsZ0NBQUcsT0FBTyxLQUFQLEVBQWMsT0FBZCxJQUF5QixTQUE1QixFQUF1QztBQUNuQyxxQ0FBSyxTQUFMLElBQWtCLE9BQU8sS0FBUCxFQUFjLE9BQWhDO0FBQ0g7O0FBRUQsc0NBQVUsSUFBVixDQUFlLElBQWY7QUFDSDs7QUFFRCw2QkFBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0gscUJBckJ1QixDQXFCdEIsSUFyQnNCLENBcUJqQixJQXJCaUIsQ0FBeEI7QUFzQkg7QUFDSixhQXpCRCxNQXlCTztBQUNILHFCQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDSDtBQUNKOzs7NEJBRVc7QUFDUixtQkFBTyxLQUFLLE1BQVo7QUFDSCxTOzBCQUVTLEssRUFBTztBQUNiLGlCQUFLLE1BQUwsR0FBYyxLQUFkOztBQUVBLGdCQUFHLEtBQUssT0FBUixFQUFpQjtBQUNiLHFCQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLEtBQXRCO0FBQ0g7QUFDSjs7OzRCQUNZO0FBQ1QsbUJBQU8sS0FBSyxPQUFaO0FBQ0g7Ozs0QkFDYztBQUNYLG1CQUFPLEtBQUssU0FBWjtBQUNILFM7MEJBRVksSyxFQUFPO0FBQ2hCLGlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7OzRCQUVZO0FBQ1QsZ0JBQUksUUFBUTtBQUNSLDZCQUFhLEtBQUssV0FEVjtBQUVSLDBCQUFVLEtBQUssTUFBTCxDQUFZLFdBQVosR0FBMEIsTUFBMUIsRUFGRjtBQUdSLHlCQUFTLEtBQUssT0FITjtBQUlSLHNCQUFNLEtBQUssSUFKSDtBQUtSLHNCQUFNLEtBQUssSUFMSDtBQU1SLDJCQUFXLEtBQUssU0FOUjtBQU9SLHNCQUFNLEtBQUs7QUFQSCxhQUFaOztBQVVBLG1CQUFPLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBUDtBQUNILFM7MEJBNEJVLEssRUFBTztBQUNkLGdCQUFJLE1BQU0sTUFBTSxRQUFoQjs7QUFFQSxpQkFBSyxNQUFMLEdBQWMsSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QixHQUF2QixDQUFkOztBQUVBLGlCQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixNQUFNLFdBQU4sSUFBcUIsRUFBeEM7O0FBRUEsZ0JBQUcsTUFBTSxLQUFULEVBQWdCO0FBQ1oscUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEVBQTNCO0FBQ0g7O0FBRUQsZ0JBQUcsT0FBTyxNQUFNLE9BQWIsS0FBeUIsU0FBNUIsRUFBdUM7QUFDbkMscUJBQUssT0FBTCxHQUFlLE1BQU0sT0FBckI7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSyxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELGlCQUFLLElBQUwsR0FBWSxNQUFNLElBQU4sSUFBYyxNQUExQjtBQUNBLGlCQUFLLElBQUwsR0FBWSxNQUFNLElBQU4sSUFBYyxFQUExQjtBQUNBLGlCQUFLLElBQUwsR0FBWSxNQUFNLElBQU4sSUFBYyxFQUExQjs7QUFFQSxpQkFBSyxNQUFMLENBQVksV0FBWixDQUF3QixLQUFLLE1BQTdCO0FBQ0EsaUJBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsS0FBSyxLQUExQjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxVQUFaLENBQXVCLEtBQUssT0FBNUI7QUFDSDs7O0FBRUQsdUJBQVksR0FBWixFQUFpQixNQUFqQixFQUF5QixRQUF6QixFQUFtQztBQUFBOztBQUFBLGFBa0JuQyxLQWxCbUMsR0FrQjNCLEVBbEIyQjtBQUFBLGFBbUJuQyxJQW5CbUMsR0FtQjVCLElBbkI0QjtBQUFBLGFBb0JuQyxPQXBCbUMsR0FvQnpCLEVBcEJ5QjtBQUFBLGFBcUJuQyxZQXJCbUMsR0FxQnBCLEVBckJvQjtBQUFBLGFBc0JuQyxPQXRCbUMsR0FzQnpCLElBdEJ5QjtBQUFBLGFBdUJuQyxTQXZCbUMsR0F1QnZCLGNBdkJ1QjtBQUFBLGFBd0JuQyxNQXhCbUMsR0F3QjFCLEVBeEIwQjtBQUFBLGFBeUJuQyxRQXpCbUMsR0F5QnhCLElBekJ3QjtBQUFBLGFBMEJuQyxLQTFCbUMsR0EwQjNCLEVBMUIyQjtBQUFBLGFBMkJuQyxTQTNCbUMsR0EyQnZCLEVBM0J1QjtBQUFBLGFBNEJuQyxLQTVCbUMsR0E0QjNCLEVBNUIyQjs7QUFDL0IsWUFBRyxDQUFDLEdBQUosRUFBUztBQUNMLGtCQUFNLHFCQUFOO0FBQ0g7O0FBRUQsYUFBSyxPQUFMLEdBQWUsSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixDQUF1QjtBQUNsQyxpQkFBSyxJQUFJLEdBRHlCO0FBRWxDLHNCQUFVLE1BRndCO0FBR2xDLHVCQUFXO0FBSHVCLFNBQXZCLENBQWY7O0FBTUEsYUFBSyxHQUFMLEdBQVcsR0FBWDs7QUFFQSxZQUFHLFFBQUgsRUFBYTtBQUNULGlCQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDSDtBQUNKOzs7O3NDQWNhO0FBQ1YsbUJBQU8sS0FBSyxPQUFMLENBQWEsV0FBYixFQUFQO0FBQ0g7OztrQ0FPUztBQUNOLGdCQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVg7O0FBRUEsY0FBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGFBQWEsS0FBSyxRQUEvQjs7QUFFQSxnQkFBSSxhQUFhLElBQUksT0FBTyxJQUFQLENBQVksVUFBaEIsQ0FBMkI7QUFDeEMseUJBQVM7QUFEK0IsYUFBM0IsQ0FBakI7O0FBSUEsaUJBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsV0FBekIsRUFBc0MsWUFBVztBQUM3QywyQkFBVyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLEtBQUssT0FBMUI7QUFDSCxhQUZEOztBQUlBLGlCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLFVBQXpCLEVBQXFDLFlBQVc7QUFDNUMsMkJBQVcsS0FBWDtBQUNILGFBRkQ7QUFHSDs7OzRCQXJCZTtBQUNaLGdCQUFJLE1BQU0sS0FBSyxXQUFMLEVBQVY7QUFDQSxtQkFBTyxJQUFJLFFBQUosRUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25PTDs7OztJQUlhLEksV0FBQSxJOzs7NEJBQ0M7QUFDTixtQkFBTyxLQUFLLElBQVo7QUFDSCxTOzBCQUVPLEssRUFBTztBQUNYLGlCQUFLLElBQUwsR0FBWSxLQUFaO0FBQ0g7O0FBRUQ7Ozs7OztBQUtBLGtCQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsWUFBSSxjQUFjO0FBQ2QsaUJBQUssUUFEUztBQUVkLGlCQUFLO0FBRlMsU0FBbEI7O0FBS0EsYUFBSyxJQUFMLEdBQVksSUFBSSxPQUFPLElBQVAsQ0FBWSxHQUFoQixDQUFvQixPQUFwQixFQUE2QjtBQUNyQyxvQkFBUSxXQUQ2QjtBQUVyQyxrQkFBTTtBQUYrQixTQUE3QixDQUFaOztBQUtBLGVBQU8sSUFBUCxDQUFZLEtBQVosQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBSyxJQUEvQixFQUFxQyxRQUFyQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUM5Qkw7O0FBQ0E7Ozs7QUFDQTs7OztJQUlhLGEsV0FBQSxhOzs7NEJBQ1M7QUFDZCxtQkFBTyxLQUFLLFlBQVo7QUFDSCxTOzBCQUVlLEssRUFBTztBQUNuQixpQkFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0g7Ozs0QkFDYTtBQUNWLG1CQUFPLEtBQUssUUFBWjtBQUNILFM7MEJBRVcsSyxFQUFPO0FBQ2YsaUJBQUssUUFBTCxHQUFnQixLQUFoQjtBQUNIOzs7NEJBQ1M7QUFDTixtQkFBTyxLQUFLLElBQVo7QUFDSCxTOzBCQUVPLEssRUFBTztBQUNYLGlCQUFLLElBQUwsR0FBWSxLQUFaO0FBQ0g7OztBQU9ELDJCQUFZLEdBQVosRUFBaUI7QUFBQTs7QUFBQSxhQUxqQixLQUtpQixHQUxULEVBS1M7QUFBQSxhQUpqQixRQUlpQixHQUpOLENBSU07QUFBQSxhQUhqQixlQUdpQixHQUhDLEVBR0Q7QUFBQSxhQUZqQixZQUVpQixHQUZGLEVBRUU7O0FBQ2IsWUFBRyxHQUFILEVBQVE7QUFDSixpQkFBSyxHQUFMLEdBQVcsR0FBWDtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7OEJBR00sSSxFQUFNLEksRUFBTTtBQUNkLGlCQUFLLEtBQUwsR0FBYSxJQUFiOztBQUVBLGdCQUFHLElBQUgsRUFBUztBQUNMLHFCQUFLLEtBQUwsQ0FBVyxLQUFYOztBQUVBLG9CQUFJLGVBQWUsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFuQjs7QUFISztBQUFBO0FBQUE7O0FBQUE7QUFLTCx5Q0FBdUIsWUFBdkIsOEhBQXFDO0FBQUEsNEJBQTVCLFVBQTRCOztBQUNqQyw2QkFBSyxHQUFMLENBQVMsVUFBVDtBQUNIO0FBUEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFSO0FBQ0o7OztpQ0FFUTtBQUNMLGlCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0g7OzswQ0FFaUIsTyxFQUFTO0FBQ3ZCLGlCQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsT0FBMUI7QUFDSDs7OzRCQUVHLFUsRUFBWTtBQUNaLGdCQUFHLEtBQUssS0FBUixFQUFlO0FBQ1gsb0JBQUksU0FBUyx5QkFBYyxLQUFLLEdBQW5CLEVBQXdCLFdBQVcsUUFBbkMsQ0FBYjs7QUFFQSwyQkFBVyxLQUFYLEdBQW1CLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsTUFBbkIsR0FBNEIsQ0FBL0M7O0FBRUEsdUJBQU8sTUFBUCxHQUFnQixVQUFoQjs7QUFFQSxvQkFBRyxPQUFPLElBQVAsS0FBZ0IsRUFBbkIsRUFBdUI7QUFDbkIsMkJBQU8sSUFBUCxHQUFjLEtBQUssV0FBbkI7QUFDSDs7QUFFRCxxQkFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWY7O0FBWFc7QUFBQTtBQUFBOztBQUFBO0FBYVgsMENBQW1CLEtBQUssZUFBeEIsbUlBQXlDO0FBQUEsNEJBQWpDLE9BQWlDOztBQUNyQztBQUNIO0FBZlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCZDtBQUNKOzs7Ozs7Ozs7Ozs7OztxakJDbkZMOzs7Ozs7O0FBS0E7Ozs7SUFFYSxJLFdBQUEsSTs7O21DQWlDRSxLLEVBQU8sSyxFQUFPLEssRUFBTztBQUM1QiwrQkFBTyxRQUFRLENBQUMsQ0FBVCxJQUFjLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBM0M7O0FBRUEsaUJBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsS0FBckIsSUFBOEIsS0FBOUI7QUFDSDs7Ozs7QUFNRDs7Ozs7cUNBS2EsSyxFQUFPLEksRUFBTTtBQUN0QixnQkFBSSxJQUFJLFFBQVEsSUFBaEI7O0FBRUEsK0JBQU8sUUFBUSxDQUFDLENBQVQsSUFBYyxRQUFRLEtBQUssUUFBTCxDQUFjLE1BQTNDO0FBQ0EsK0JBQU8sSUFBSSxDQUFDLENBQUwsSUFBVSxJQUFJLEtBQUssUUFBTCxDQUFjLE1BQW5DOztBQUVBLGdCQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFYOztBQUVBLGlCQUFLLFFBQUwsQ0FBYyxDQUFkLElBQW1CLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBbkI7QUFDQSxpQkFBSyxRQUFMLENBQWMsS0FBZCxJQUF1QixJQUF2Qjs7QUFFQSxpQkFBSyxrQkFBTDtBQUNIOzs7b0NBRVcsSyxFQUFPO0FBQ2YsK0JBQU8sUUFBUSxDQUFDLENBQVQsSUFBYyxRQUFRLEtBQUssUUFBTCxDQUFjLE1BQTNDOztBQUVBLGdCQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFYO0FBQ0EsaUJBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsSUFBbkI7O0FBRUEsaUJBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBNUI7O0FBRUEsaUJBQUssa0JBQUw7QUFDSDs7OzBDQXdCaUIsTyxFQUFTO0FBQ3ZCLGlCQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLE9BQTNCO0FBQ0g7OztnQ0FFTztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNKLHFDQUFnQixLQUFLLE9BQXJCLDhIQUE4QjtBQUFBLHdCQUF0QixJQUFzQjs7QUFDMUIseUJBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsSUFBbkI7QUFDSDtBQUhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0osaUJBQUssT0FBTCxHQUFlLEVBQWY7O0FBRUEsaUJBQUssa0JBQUw7QUFDSDs7OzZDQUVvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNqQixzQ0FBbUIsS0FBSyxnQkFBeEIsbUlBQTBDO0FBQUEsd0JBQWxDLE9BQWtDOztBQUN0QztBQUNIO0FBSGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJcEI7Ozs0QkFFRyxNLEVBQVE7QUFDUixpQkFBSyxPQUFMLENBQWEsSUFBYixDQUFrQixNQUFsQjtBQUNBLG1CQUFPLE1BQVAsQ0FBYyxXQUFkLENBQTBCLFNBQTFCLEVBQXFDLFlBQVk7QUFDN0MscUJBQUssa0JBQUw7QUFDSCxhQUZvQyxDQUVuQyxJQUZtQyxDQUU5QixJQUY4QixDQUFyQzs7QUFJQSxnQkFBRyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQXNCLENBQXpCLEVBQTRCO0FBQ3hCLHFCQUFLLGtCQUFMO0FBQ0g7QUFDSjs7O3dDQUVlO0FBQ1osZ0JBQUksUUFBUSxDQUFaO0FBRFk7QUFBQTtBQUFBOztBQUFBO0FBRVosc0NBQWdCLEtBQUssT0FBckIsbUlBQThCO0FBQUEsd0JBQXRCLElBQXNCOztBQUMxQix3QkFBRyxLQUFLLE9BQVIsRUFBaUI7QUFDYiw2QkFBSyxLQUFMLEdBQWEsUUFBUSxFQUFyQjtBQUNBLGlDQUFTLENBQVQ7QUFDSDtBQUNKO0FBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFmOzs7NEJBcklhO0FBQ1YsbUJBQU8sS0FBSyxRQUFaO0FBQ0gsUzswQkFFVyxLLEVBQU87QUFDZixpQkFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7Ozs7O0FBS0Q7Ozs0QkFHYTtBQUNULGdCQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixVQUFVLElBQVYsRUFBZ0I7QUFDM0MsdUJBQU8sS0FBSyxNQUFaO0FBQ0gsYUFGWSxFQUVWLElBRlUsQ0FFTCxHQUZLLENBQWI7O0FBSUEsZ0JBQUksTUFBTSxNQUFNLE1BQU4sR0FBZSxHQUF6Qjs7QUFFQSxtQkFBTyxHQUFQO0FBQ0g7Ozs0QkFFaUI7QUFDZCxnQkFBSSxTQUFTLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsVUFBVSxLQUFWLEVBQWlCO0FBQzNDLHVCQUFPLE1BQU0sV0FBTixFQUFQO0FBQ0gsYUFGWSxDQUFiOztBQUlBLG1CQUFPLE1BQVA7QUFDSDs7OzRCQVFVO0FBQ1AsbUJBQU8sS0FBSyxRQUFMLENBQWMsTUFBckI7QUFDSDs7OzRCQWdDWTtBQUNULGdCQUFJLFNBQVUsSUFBSSxPQUFPLElBQVAsQ0FBWSxZQUFoQixFQUFkOztBQURTO0FBQUE7QUFBQTs7QUFBQTtBQUdULHNDQUFrQixLQUFLLFFBQXZCLG1JQUFpQztBQUFBLHdCQUF6QixNQUF5Qjs7QUFDN0Isd0JBQUksU0FBUyxPQUFPLFdBQVAsRUFBYjs7QUFFQSwyQkFBTyxNQUFQLENBQWMsTUFBZDtBQUNIO0FBUFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTVCxtQkFBTyxNQUFQO0FBQ0g7Ozs0QkFFZTtBQUNaLGdCQUFJLE1BQU0sRUFBVjs7QUFEWTtBQUFBO0FBQUE7O0FBQUE7QUFHWixzQ0FBZ0IsS0FBSyxRQUFyQixtSUFBK0I7QUFBQSx3QkFBdkIsSUFBdUI7O0FBQzNCLDJCQUFPLEtBQUssU0FBWjtBQUNIO0FBTFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPWixtQkFBTyxHQUFQO0FBQ0g7OztBQTJDRCxrQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQUEsYUEvSHJCLFFBK0hxQixHQS9IVixFQStIVTtBQUFBLGFBOUhyQixnQkE4SHFCLEdBOUhGLEVBOEhFOztBQUNqQixhQUFLLE9BQUwsR0FBZSxPQUFmOztBQUVBLGFBQUssaUJBQUwsQ0FBdUIsWUFBWTtBQUMvQixpQkFBSyxhQUFMO0FBQ0gsU0FGc0IsQ0FFckIsSUFGcUIsQ0FFaEIsSUFGZ0IsQ0FBdkI7QUFHSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKTDs7OztJQUlxQixROzs7NEJBQ1A7QUFDTixtQkFBTyxLQUFLLElBQVo7QUFDSCxTOzBCQUVPLEssRUFBTztBQUNYLGlCQUFLLElBQUwsR0FBWSxLQUFaO0FBQ0g7OztBQUtELHNCQUFZLEdBQVosRUFBaUI7QUFBQTs7QUFBQSxhQUhqQixJQUdpQixHQUhWLElBR1U7O0FBQ2IsYUFBSyxrQkFBTCxHQUEwQixJQUFJLE9BQU8sSUFBUCxDQUFZLGlCQUFoQixFQUExQjtBQUNBLGFBQUssa0JBQUwsR0FBMEIsSUFBSSxPQUFPLElBQVAsQ0FBWSxrQkFBaEIsRUFBMUI7O0FBRUEsYUFBSyxHQUFMLEdBQVcsR0FBWDtBQUNIOzs7O2tDQUVTLE0sRUFBUTtBQUNkLGdCQUFJLFNBQVMsRUFBYjs7QUFFQSxpQkFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksT0FBTyxNQUFQLEdBQWdCLENBQW5DLEVBQXNDLEVBQUUsQ0FBeEMsRUFBMkM7QUFDdkMsdUJBQU8sSUFBUCxDQUFZO0FBQ1IsOEJBQVUsT0FBTyxDQUFQLENBREY7QUFFUiw4QkFBVTtBQUZGLGlCQUFaO0FBSUg7O0FBRUQsbUJBQU8sTUFBUDtBQUNIOzs7K0JBRU0sSSxFQUFNO0FBQ1QsZ0JBQUksU0FBUyxLQUFLLFdBQWxCOztBQUVBLGdCQUFHLE9BQU8sTUFBUCxHQUFnQixDQUFuQixFQUFzQjtBQUNsQixxQkFBSyxrQkFBTCxDQUF3QixNQUF4QixDQUErQixJQUEvQjtBQUNBO0FBQ0g7O0FBRUQsaUJBQUssa0JBQUwsQ0FBd0IsTUFBeEIsQ0FBK0IsS0FBSyxHQUFMLENBQVMsR0FBeEM7O0FBRUEsZ0JBQUksWUFBWSxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBQWhCOztBQUVBLGdCQUFJLFVBQVU7QUFDVix3QkFBUSxPQUFPLENBQVAsQ0FERTtBQUVWLG9DQUZVO0FBR1YsNkJBQWEsT0FBTyxPQUFPLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FISDtBQUlWLDRCQUFZLE9BQU8sSUFBUCxDQUFZLFVBQVosQ0FBdUI7QUFKekIsYUFBZDs7QUFPQSxpQkFBSyxrQkFBTCxDQUF3QixLQUF4QixDQUE4QixPQUE5QixFQUF1QyxVQUFTLFFBQVQsRUFBbUIsTUFBbkIsRUFBMkI7QUFDOUQsb0JBQUksVUFBVSxPQUFPLElBQVAsQ0FBWSxnQkFBWixDQUE2QixFQUEzQyxFQUErQztBQUMzQyx5QkFBSyxrQkFBTCxDQUF3QixhQUF4QixDQUFzQyxRQUF0QztBQUNIO0FBQ0osYUFKc0MsQ0FJckMsSUFKcUMsQ0FJaEMsSUFKZ0MsQ0FBdkM7QUFLSDs7Ozs7O2tCQXhEZ0IsUTs7Ozs7Ozs7UUNBTCxNLEdBQUEsTTtBQUpoQjs7OztBQUlPLFNBQVMsTUFBVCxDQUFnQixTQUFoQixFQUEyQixPQUEzQixFQUFvQztBQUN2QyxRQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNaLGNBQU0sV0FBVyxrQkFBakI7QUFDSDtBQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxMy4xMi4xNi5cbiAqXG4gKiDQn9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFXG4gKi9cblxuaW1wb3J0IHtQYXRoR2VuZXJhdG9yfSBmcm9tIFwiLi9saWIvcGF0aC1nZW5lcmF0b3JcIjtcbmltcG9ydCB7R01hcH0gZnJvbSBcIi4vbGliL21hcFwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL2xpYi9yZW5kZXJlclwiO1xuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi9saWIvcGF0aFwiO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BhdGgtaW5wdXQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21wb25lbnRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb21wb25lbnROYW1lKVswXTtcblxuICAgIGlmKGNvbXBvbmVudEFuY2hvciA9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgdGFnIG5vdCBmb3VuZGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHRlbXBsYXRlTmFtZSA9IGNvbXBvbmVudEFuY2hvci5nZXRBdHRyaWJ1dGUoJ3RlbXBsYXRlJyk7XG4gICAgbGV0IGZpZWxkVmFsdWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC12YWx1ZScpO1xuICAgIGxldCBmaWVsZE5hbWUgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdmaWVsZC1uYW1lJyk7XG4gICAgbGV0IGljb25zUmVzb3VyY2UgPSBjb21wb25lbnRBbmNob3IuZ2V0QXR0cmlidXRlKCdpY29ucy1yZXNvdXJjZScpO1xuXG4gICAgJC5nZXQoaWNvbnNSZXNvdXJjZSwgZnVuY3Rpb24gKGljb25zKSB7XG4gICAgICAgICQuZ2V0KHRlbXBsYXRlTmFtZSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IFByb2YgPSBWdWUuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5QYXRoKGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhHZW5lcmF0b3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoOiBuZXcgUGF0aChbXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5FZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpY29ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml0Q29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvdW5kcyA9IHRoaXMuY3VycmVudFBhdGguYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLm1hcC5wYW5Ub0JvdW5kcyhib3VuZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luUGF0aDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuZGVmYXVsdEljb24gPSBpY29uc1swXS5pY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvci5zdGFydCh0aGlzLmN1cnJlbnRQYXRoLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hQYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVG9wOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXRoLmluZGV4RGlzcG9zZShpbmRleCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG93bjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleERpc3Bvc2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5pbmRleFJlbW92ZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGF0TG5nID0gcG9pbnQubGF0TG5nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAubWFwLnNldENlbnRlcihsYXRMbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBaGVhZDogZnVuY3Rpb24gKHBvaW50LCBhaGVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LnNldEFoZWFkKGFoZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmN1cnJlbnRQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZy1tYXBzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBHTWFwKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aEdlbmVyYXRvciA9IG5ldyBQYXRoR2VuZXJhdG9yKHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMubWFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhdGguYWRkVXBkYXRlTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiByZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhdGggdXBkYXRpbmcuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGhHZW5lcmF0b3IuYXBwZW5kQWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtUG9zaXRpb24gPSB0aGlzLmN1cnJlbnRQYXRoLnNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcmVtLWJsb2NrICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgcG9pbnQuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZW5kLXJlbS1ibG9jayAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbZGF0ZS10aW1lPVwiZHQtJyArIChlbGVtUG9zaXRpb24gLSAxKSArICdcIl0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGlja2VyQW5jaG9yID0gJChzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlckFuY2hvci50aW1lcGlja2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVyaWRpYW46IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5vbignY2hhbmdlVGltZS50aW1lcGlja2VyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGltZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwaWNrZXJBbmNob3IuYXR0cignZGF0YS1pbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aC5wb2ludFZhbHVlKGluZGV4LCAndGltZScsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb2ludCBhZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAubWFwLCAnY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXJDb29yZHMgPSBldmVudC5sYXRMbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRoR2VuZXJhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyQ29vcmRzLnRvSlNPTigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZml0Q29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qIHJlbS1ibG9jayAqL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2FkIGNvbXBvbmVudC4uLicpO1xuICAgICAgICAgICAgICAgIC8qIGVuZC1yZW0tYmxvY2sgKi9cblxuICAgICAgICAgICAgICAgIG5ldyBQcm9mKCkuJG1vdW50KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cd0LUg0YPQtNCw0LXRgtGB0Y8g0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LrQvtC80L/QvtC90LXQvdGCOiBWdWUuanMg0L3QtSDQuNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0L0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXBNYXJrZXIge1xuICAgIGdldCBtZXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YTtcbiAgICB9XG5cbiAgICBzZXQgbWV0YSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tZXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRyYWdnYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlci5nZXREcmFnZ2FibGUoKTtcbiAgICB9XG5cbiAgICBzZXQgZHJhZ2dhYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlci5zZXREcmFnZ2FibGUodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb247XG4gICAgfVxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICBzZXQgdGltZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKHZhbHVlLm1hcCk7XG4gICAgfVxuICAgIGdldCBsYXRMbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXRMbmc7XG4gICAgfVxuXG4gICAgc2V0IGxhdExuZyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9sYXRMbmcgPSB2YWx1ZTtcblxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHZhbHVlLmxhdCwgdmFsdWUubG5nKSk7XG4gICAgfVxuXG4gICAgZ2V0IHZpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXIuZ2V0VmlzaWJsZSgpO1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlci5zZXRWaXNpYmxlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgaWNvbihwYXRoKSB7XG4gICAgICAgIHRoaXMuX2ljb24gPSBwYXRoO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMuX2FoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLl9haGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fZGVzY3JpcHRpb24gIT0gJycpIHtcbiAgICAgICAgICAgIGlmKGRyb3Bkb3duUmVzb2x2ZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25SZXNvbHZlcih2YWx1ZSwgZnVuY3Rpb24gKHBvaW50cykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZWFoZWFkID0gW107XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGluZGV4IGluIHBvaW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBvaW50c1tpbmRleF0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBvaW50c1tpbmRleF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBvaW50c1tpbmRleF0ubGF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcG9pbnRzW2luZGV4XS5sbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBvaW50c1tpbmRleF0uZGlzcGxheSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWydkaXNwbGF5J10gPSBwb2ludHNbaW5kZXhdLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQgPSB0eXBlYWhlYWQ7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5fbWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXIuc2V0TGFiZWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtYXJrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXI7XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzZXJpYWwoKSB7XG4gICAgICAgIGxldCBzZXJpYSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMubWFya2VyLmdldFBvc2l0aW9uKCkudG9KU09OKCksXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXG4gICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgbWV0YTogdGhpcy5tZXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNlcmlhKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgfVxuXG4gICAgc2V0QWhlYWQoYWhlYWQpIHtcbiAgICAgICAgdGhpcy5fYWhlYWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhaGVhZC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgbGF0OiBhaGVhZC5sYXQsXG4gICAgICAgICAgICBsbmc6IGFoZWFkLmxuZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGFoZWFkWydkaXNwbGF5J10gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZihhaGVhZFsnZGlzcGxheSddWydzdmcnXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb24gPSBhaGVhZFsnZGlzcGxheSddWydzdmcnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGF0TG5nID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMubWV0YSA9IGFoZWFkLl9tZXRhO1xuXG4gICAgICAgIHRoaXMudHlwZWFoZWFkID0gW107XG4gICAgfVxuXG4gICAgc2V0IHNlcmlhbCh2YWx1ZSkge1xuICAgICAgICBsZXQgcG9zID0gdmFsdWUucG9zaXRpb247XG5cbiAgICAgICAgdGhpcy5sYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvcyk7XG5cbiAgICAgICAgdGhpcy5fYWhlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWUuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgICAgICAgaWYodmFsdWUubGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSB2YWx1ZS5sYWJlbCArICcnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0eXBlb2YgdmFsdWUudmlzaWJsZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB2YWx1ZS52aXNpYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZSA9IHZhbHVlLnRpbWUgfHwgJzA6MDAnO1xuICAgICAgICB0aGlzLmljb24gPSB2YWx1ZS5pY29uIHx8ICcnO1xuICAgICAgICB0aGlzLm1ldGEgPSB2YWx1ZS5tZXRhIHx8IHt9O1xuXG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKHRoaXMubGF0TG5nKTtcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TGFiZWwodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldFZpc2libGUodGhpcy52aXNpYmxlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtYXAsIGNvb3JkcywgdGVtcGxhdGUpIHtcbiAgICAgICAgaWYoIW1hcCkge1xuICAgICAgICAgICAgdGhyb3cgJ9Cd0LUg0L7Qv9GA0LXQtNC10LvQtdC90LAg0LrQsNGA0YLQsCc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogbWFwLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBjb29yZHMsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcblxuICAgICAgICBpZih0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWUgPSAnJztcbiAgICBfbWFwID0gbnVsbDtcbiAgICBfbGF0TG5nID0ge307XG4gICAgX2Rlc2NyaXB0aW9uID0gJyc7XG4gICAgX21hcmtlciA9IG51bGw7XG4gICAgX3RlbXBsYXRlID0gJ2NvbnRlbnQuaHRtbCc7XG4gICAgX2xhYmVsID0gJyc7XG4gICAgX3Zpc2libGUgPSB0cnVlO1xuICAgIF9pY29uID0gJyc7XG4gICAgdHlwZWFoZWFkID0gW107XG4gICAgX21ldGEgPSB7fTtcblxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNvb3Jkc1N0cigpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHBvcy50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGFkZEluZm8oKSB7XG4gICAgICAgIGxldCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgJChkYXRhKS5sb2FkKCdzcmMvdHBsLycgKyB0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgICBsZXQgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWFya2VyLmFkZExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cub3BlbihtYXAsIHRoaXMuX21hcmtlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21hcmtlci5hZGRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGluZm93aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgR01hcCB7XG4gICAgZ2V0IG1hcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG5cbiAgICBzZXQgbWFwKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0YHRi9C70LrQsCDQvdCwINC+0LHRitC10LrRgiDQutCw0YDRglxuICAgICAqL1xuICAgIF9tYXA7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHZhciBwb2ludENvb3JkcyA9IHtcbiAgICAgICAgICAgIGxhdDogNTIuNjE2NjcsXG4gICAgICAgICAgICBsbmc6IDM5LjYwMDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNlbnRlcjogcG9pbnRDb29yZHMsXG4gICAgICAgICAgICB6b29tOiAxNlxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMuX21hcCwgJ3Jlc2l6ZScpO1xuICAgIH1cbn0iLCJpbXBvcnQge1BhdGh9IGZyb20gXCIuL3BhdGhcIjtcbmltcG9ydCB7TWFwTWFya2VyfSBmcm9tIFwiLi9tYXAtbWFya2VyXCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhdGhHZW5lcmF0b3Ige1xuICAgIGdldCBkZWZhdWx0SWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRJY29uO1xuICAgIH1cblxuICAgIHNldCBkZWZhdWx0SWNvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0SWNvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY291bnRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXI7XG4gICAgfVxuXG4gICAgc2V0IGNvdW50ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY291bnRlciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWFwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwO1xuICAgIH1cblxuICAgIHNldCBtYXAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gdmFsdWU7XG4gICAgfVxuICAgIF9tYXA7XG4gICAgX3BhdGggPSBbXTtcbiAgICBfY291bnRlciA9IDE7XG4gICAgX2FkZGVkTGlzdGVuZXJzID0gW107XG4gICAgX2RlZmF1bHRJY29uID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgaWYobWFwKSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQv9GD0YHQuiDQs9C10L3QtdGA0LDRgtC+0YDQsFxuICAgICAqL1xuICAgIHN0YXJ0KHBhdGgsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IHBhdGg7XG5cbiAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5fcGF0aC5jbGVhcigpO1xuXG4gICAgICAgICAgICBsZXQgbWFya2Vyc0FycmF5ID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgbWFya2VySnNvbiBvZiBtYXJrZXJzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChtYXJrZXJKc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGFwcGVuZEFkZExpc3RlbmVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYWRkZWRMaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBhZGQobWFya2VySnNvbikge1xuICAgICAgICBpZih0aGlzLl9wYXRoKSB7XG4gICAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IE1hcE1hcmtlcih0aGlzLm1hcCwgbWFya2VySnNvbi5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIG1hcmtlckpzb24ubGFiZWwgPSB0aGlzLl9wYXRoLm1hcmtlcnMubGVuZ3RoICsgMTtcblxuICAgICAgICAgICAgbWFya2VyLnNlcmlhbCA9IG1hcmtlckpzb247XG5cbiAgICAgICAgICAgIGlmKG1hcmtlci5pY29uID09PSAnJykge1xuICAgICAgICAgICAgICAgIG1hcmtlci5pY29uID0gdGhpcy5kZWZhdWx0SWNvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcGF0aC5hZGQobWFya2VyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoYW5kbGVyIG9mIHRoaXMuX2FkZGVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBqb2tlciBvbiAxNS4xMi4xNi5cbiAqXG4gKlxuICovXG5pbXBvcnQge2Fzc2VydCBhcyBhc3NlcnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgUGF0aCB7XG4gICAgZ2V0IG1hcmtlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzO1xuICAgIH1cblxuICAgIHNldCBtYXJrZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21hcmtlcnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIF9tYXJrZXJzID0gW107XG4gICAgX3VwZGF0ZUxpc3RlbmVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C10L3QuNC1INGB0LXRgNC40LDQu9C40LfQvtCy0LDQvdC90L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICovXG4gICAgZ2V0IHNlcmlhbCgpIHtcbiAgICAgICAgbGV0IHNlcmlhcyA9IHRoaXMuX21hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFyay5zZXJpYWw7XG4gICAgICAgIH0pLmpvaW4oJywnKTtcblxuICAgICAgICBsZXQgcmVzID0gJ1snICsgc2VyaWFzICsgJ10nO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBnZXQgY29vcmRzQXJyYXkoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIHBvaW50VmFsdWUoaW5kZXgsIGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LzQtdC90LAg0L/QvtC30LjRhtC40Lgg0LjQvdC00LXQutGB0LBcbiAgICAgKiBAcGFyYW0gaW5kZXgg0JjQvdC00LXQutGBXG4gICAgICogQHBhcmFtIGNyZW0g0KHQvNC10YnQtdC90LjQtVxuICAgICAqL1xuICAgIGluZGV4RGlzcG9zZShpbmRleCwgY3JlbSkge1xuICAgICAgICBsZXQgcyA9IGluZGV4ICsgY3JlbTtcblxuICAgICAgICBhc3NlcnQoaW5kZXggPiAtMSAmJiBpbmRleCA8IHRoaXMuX21hcmtlcnMubGVuZ3RoKTtcbiAgICAgICAgYXNzZXJ0KHMgPiAtMSAmJiBzIDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tzXTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzW3NdID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIHRoaXMuX21hcmtlcnNbaW5kZXhdID0gZWxlbTtcblxuICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGluZGV4UmVtb3ZlKGluZGV4KSB7XG4gICAgICAgIGFzc2VydChpbmRleCA+IC0xICYmIGluZGV4IDwgdGhpcy5fbWFya2Vycy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fbWFya2Vyc1tpbmRleF07XG4gICAgICAgIGVsZW0ubWFya2VyLnNldE1hcChudWxsKTtcblxuICAgICAgICB0aGlzLl9tYXJrZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgdGhpcy5jYWxsVXBkYXRlSGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBnZXQgYm91bmRzKCkge1xuICAgICAgICBsZXQgYm91bmRzICA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgbWFya2VyIG9mIHRoaXMuX21hcmtlcnMpIHtcbiAgICAgICAgICAgIGxldCBsYXRMbmcgPSBtYXJrZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYm91bmRzLmV4dGVuZChsYXRMbmcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH1cblxuICAgIGdldCBjb29yZHNTdHIoKSB7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgbWFyayBvZiB0aGlzLl9tYXJrZXJzKSB7XG4gICAgICAgICAgICByZXMgKz0gbWFyay5jb29yZHNTdHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBcbiAgICBhZGRVcGRhdGVMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IobGV0IG1hcmsgb2YgdGhpcy5tYXJrZXJzKSB7XG4gICAgICAgICAgICBtYXJrLm1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FsbFVwZGF0ZUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgY2FsbFVwZGF0ZUhhbmRsZXJzKCkge1xuICAgICAgICBmb3IobGV0IGhhbmRsZXIgb2YgdGhpcy5fdXBkYXRlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQobWFya2VyKSB7XG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIG1hcmtlci5tYXJrZXIuYWRkTGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmKHRoaXMubWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxVcGRhdGVIYW5kbGVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaExhYmVscygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgZm9yKGxldCBtYXJrIG9mIHRoaXMubWFya2Vycykge1xuICAgICAgICAgICAgaWYobWFyay52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgbWFyay5sYWJlbCA9IGluZGV4ICsgJyc7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1hcmtlcnMpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gbWFya2VycztcblxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUxpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExhYmVscygpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgam9rZXIgb24gMTUuMTIuMTYuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBtYXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXA7XG4gICAgfVxuXG4gICAgc2V0IG1hcCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgX21hcCA9IG51bGw7XG4gICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgfVxuXG4gICAgd2F5cG9pbnRzKGNvb3Jkcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGNvb3Jkcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogY29vcmRzW2ldLFxuICAgICAgICAgICAgICAgIHN0b3BvdmVyOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlbmRlcihwYXRoKSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBwYXRoLmNvb3Jkc0FycmF5O1xuXG4gICAgICAgIGlmKGNvb3Jkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAodGhpcy5tYXAubWFwKTtcblxuICAgICAgICBsZXQgd2F5cG9pbnRzID0gdGhpcy53YXlwb2ludHMoY29vcmRzKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogY29vcmRzWzBdLFxuICAgICAgICAgICAgd2F5cG9pbnRzLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpva2VyIG9uIDE1LjEyLjE2LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbWVzc2FnZSB8fCBcIkFzc2VydGlvbiBmYWlsZWRcIjtcbiAgICB9XG59Il19