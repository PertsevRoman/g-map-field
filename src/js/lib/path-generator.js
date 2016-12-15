import {Path} from "./path";
import {MapMarker} from "./map-marker";
/**
 * Created by joker on 15.12.16.
 */

export class PathGenerator {
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

    finish(callback) {
        if(this._path.length > 0) {
            const path = new Path(this._path);
            callback(path);
        }

        this.inState = false;
    }

    add(coords) {
        if(this.inState) {
            let marker = new MapMarker();

            marker.load(this.map.map, coords, this.counter);

            this._path.push(marker);

            this.counter += 1;
        }
    }
}