/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

import {initGui} from "./gui";

class PathStorage {
    get counter() {
        return this._counter;
    }

    set counter(value) {
        this._counter = value;
    }
    _counter = 0;
    _storage = {};

    showPath() {
    }

    addPath(path) {
        if(path instanceof Path) {
            this._storage[this._counter] = path;



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
    _counter = 0;
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
            this.counter = 0;
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

    _template = 'content.html';

     load(map, coords, label) {
         let data = document.createElement('div');
         
         $(data).load('src/tpl/' + this.template);

         let infowindow = new google.maps.InfoWindow({
             content: data
         });

         const markerOptions = {
             position: coords,
             map: map
         };

         if(label) {
             markerOptions['label'] = label + '';
         }


         let marker = new google.maps.Marker(markerOptions);

         marker.addListener('click', function() {
             infowindow.open(map, marker);
         });
     }
}

document.addEventListener('DOMContentLoaded', function () {
    let gmap = new Map();

    let marker = new ContentMarker();
    let storage = new PathStorage();
    let pathGenerator = new PathGenerator(gmap, storage);

    initGui({
        createPath: function () {
            pathGenerator.start();
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