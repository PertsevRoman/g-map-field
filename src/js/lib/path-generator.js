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
    start(path) {
        this._path = path;
    }

    finish() {
        this._path = null;
    }

    add(coords) {
        if(this._path) {
            let marker = new MapMarker();

            marker.load(this.map.map, coords, this._path.markers.length + 1);

            this._path.add(marker);
        }
    }
}