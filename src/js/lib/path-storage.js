/**
 * Created by joker on 15.12.16.
 */

import {Path} from './path';

export class PathStorage {
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