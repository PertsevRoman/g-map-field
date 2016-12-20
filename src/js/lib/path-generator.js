import {Path} from "./path";
import {MapMarker} from "./map-marker";
/**
 * Created by joker on 15.12.16.
 */

export class PathGenerator {
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

    constructor(map) {
        if(map) {
            this.map = map;
        }
    }

    /**
     * Запуск генератора
     */
    start(path, data) {
        this._path = path;

        if(data) {
            this._path.clear();

            let markersArray = JSON.parse(data);

            for (let markerJson of markersArray) {
                this.add(markerJson);
            }
        }
    }

    finish() {
        this._path = null;
    }

    add(markerJson) {
        if(this._path) {
            let marker = new MapMarker(this.map, markerJson.position);
            
            markerJson.label = this._path.markers.length + 1;
            
            marker.serial = markerJson;

            this._path.add(marker);
        }
    }
}