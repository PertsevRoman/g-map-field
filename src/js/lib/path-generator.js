import {Path} from "./path";
import {MapMarker} from "./map-marker";
/**
 * Created by joker on 15.12.16.
 */

export class PathGenerator {
    get defaultIcon() {
        return this._defaultIcon;
    }

    set defaultIcon(value) {
        this._defaultIcon = value;
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
    _addedListeners = [];
    _defaultIcon = '';

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

            let bounds  = new google.maps.LatLngBounds();

            for (let markerJson of markersArray) {
                this.add(markerJson);

                let pos = markerJson.position;

                bounds.extend(new google.maps.LatLng({
                    lat: pos.lat,
                    lng: pos.lng
                }));
            }
            
            return bounds;
        }
        
        return undefined;
    }

    finish() {
        this._path = null;
    }
    
    appendAddListener(handler) {
        this._addedListeners.push(handler);
    }

    add(markerJson) {
        if(this._path) {
            let marker = new MapMarker(this.map, markerJson.position);

            markerJson.label = this._path.markers.length + 1;

            marker.serial = markerJson;

            if(marker.icon === '') {
                marker.icon = this.defaultIcon;
            }

            this._path.add(marker);
            
            for(let handler of this._addedListeners) {
                handler();
            }
        }
    }
}