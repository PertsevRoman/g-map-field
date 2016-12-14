/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

import {initGui} from "./gui";

class PathStorage {
    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
    }
    get counter() {
        return this._counter;
    }

    set counter(value) {
        this._counter = value;
    }
    _counter = 0;
    _storage = {};

    _directionsService = null;
    _directionsDisplay = null;

    _map = null;


    constructor(map) {
        if(map) {
            this.map = map;
        }

        this._directionsService = new google.maps.DirectionsService();
        this._directionsDisplay = new google.maps.DirectionsRenderer();

        this._directionsDisplay.setMap(this.map.map);
    }

    waypoints(coords) {
        let result = [];

        for(let i = 1; i < coords.length - 1; ++i) {
            result.push({
                location: coords[i],
                stopover: false
            });
        }

        return result;
    }

    showPath(path) {
        let coords = path.coordsArray;
        let waypoints = this.waypoints(coords);

        let request = {
            origin: coords[0],
            waypoints,
            destination: coords[coords.length - 1],
            travelMode: google.maps.TravelMode.DRIVING
        };

        for(let coord of path.markers) {
            coord.marker.addListener('dragend', function () {
                this.showPath(path);
            }.bind(this));
        }

        this._directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                this._directionsDisplay.setDirections(response);
            }
        }.bind(this));
    }

    addPath(path) {
        if(path instanceof Path) {
            this._storage[this._counter] = path;

            this.showPath(this._storage[this._counter]);

            this.counter += 1;
        }
    }
}

class PathGenerator {
    get storage() {
        return this._storage;
    }

    set storage(value) {
        this._storage = value;
    }
    get counter() {
        return this._counter;
    }

    set counter(value) {
        this._counter = value;
    }
    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
    }
    _map;
    _path = [];
    _counter = 1;
    _storage = null;

    constructor(map, storage) {
        if(map) {
            this.map = map;
            this.storage = storage;
        }
    }

    get inState() {
        return this._inState;
    }

    set inState(value) {
        if(value) {
        } else {
            if(this._path.length > 0) {
                let path = new Path(this._path);

                this.storage.addPath(path);
            }

            this._path = [];
            this.counter = 1;
        }

        this._inState = value;
    }

    _inState = false;
    /**
     * Запуск генератора
     */
    start() {
        this.inState = true;
    }

    finish() {
        this.inState = false;
    }

    add(coords) {
        if(this.inState) {
            let marker = new ContentMarker();

            marker.load(this.map.map, coords, this.counter);

            this._path.push(marker);

            this.counter += 1;
        }
    }
}

/**
 * Класс пути
 */
class Path {
    get markers() {
        return this._markers;
    }

    set markers(value) {
        this._markers = value;
    }
    _markers = [];

    /**
     * Получение сериализованного массива
     */
    get serialization() {
    }

    get coordsArray() {
        let result = this.markers.map(function (coord) {
            return coord.getPosition();
        });

        return result;
    }

    constructor(markers) {
        this.markers = markers;
    }
}

class Map {
    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
    }

    /**
     * Ссылка на объект карт
     */
    _map;

    constructor() {
        const element = document.getElementById('g-maps');
        var pointCoords = {lat: 52.61667, lng: 39.6000};

        this._map = new google.maps.Map(element, {
            center: pointCoords,
            zoom: 16
        });
    }
}

class ContentMarker {
    get marker() {
        return this._marker;
    }
    get template() {
        return this._template;
    }

    set template(value) {
        this._template = value;
    }
    constructor(template) {
        if(template) {
            this.template = template;
        }
    }

    _marker = null;
    _template = 'content.html';

    getPosition() {
        return this._marker.getPosition();
    }

     load(map, coords, label) {
         let data = document.createElement('div');
         
         $(data).load('src/tpl/' + this.template);

         let infowindow = new google.maps.InfoWindow({
             content: data
         });

         const markerOptions = {
             position: coords,
             map: map,
             draggable: true
         };

         if(label) {
             markerOptions['label'] = label + '';
         }


         this._marker = new google.maps.Marker(markerOptions);

         this._marker.addListener('mouseover', function() {
             infowindow.open(map, this._marker);
         });

         this._marker.addListener('mouseout', function() {
             infowindow.close();
         });
     }
}

document.addEventListener('DOMContentLoaded', function () {
    let gmap = new Map();

    let marker = new ContentMarker();
    let storage = new PathStorage(gmap);
    let pathGenerator = new PathGenerator(gmap, storage);

    initGui({
        createPath: function () {
            pathGenerator.start();
        },
        closePath: function () {
            pathGenerator.finish();
        }
    });

    google.maps.event.addListener(gmap.map, 'click', function(event) {
        const markerCoords = event.latLng;

        if(pathGenerator.inState) {
            pathGenerator.add(markerCoords);
        } else {
            marker.load(gmap.map, markerCoords);
        }
    });
});