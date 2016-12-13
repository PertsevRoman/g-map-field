/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

import {initGui} from "./gui";

class PathGenerator {
    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
    }
    _map;
    _path = [];
    _linePath = null;

    constructor(map) {
        if(map) {
            this.map = map;
        }
    }

    get inState() {
        return this._inState;
    }

    set inState(value) {
        if(value) {
        } else {
            this._path = [];

            this._linePath = new google.maps.Polyline({
                path: this._path,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
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
            this._path.push(coords);
            this._linePath.setPath(this._path);
        }
    }
}

class Path {
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

     load(map, coords) {
         let data = document.createElement('div');
         
         $(data).load('src/tpl/' + this.template);

         let infowindow = new google.maps.InfoWindow({
             content: data
         });

         let marker = new google.maps.Marker({
             position: coords,
             map: map
         });

         marker.addListener('click', function() {
             infowindow.open(map, marker);
         });
     }
}

document.addEventListener('DOMContentLoaded', function () {
    let gmap = new Map();

    let marker = new ContentMarker();
    let pathGenerator = new PathGenerator(gmap);

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