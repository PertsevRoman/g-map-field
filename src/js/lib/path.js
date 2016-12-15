/**
 * Created by joker on 15.12.16.
 *
 *
 */
import {assert as assert} from './utils';
import {MapMarker} from "./map-marker";

export class Path {
    get markers() {
        return this._markers;
    }

    set markers(value) {
        this._markers = value;
    }
        
    _markers = [];
    _dragends = [];

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

    /**
     * Смена позиции индекса
     * @param index Индекс
     * @param crem Смещение
     */
    indexDispose(index, crem) {
        let s = index + crem;

        assert(index > -1 && index < this._markers.length);
        assert(s > -1 && s < this._markers.length);

        let elem = this._markers[s];

        this._markers[s] = this._markers[index];
        this._markers[index] = elem;
    }

    indexRemove(index) {
        assert(index > -1 && index < this._markers.length);

        this._markers.splice(index, 1);
    }

    get coordsStr() {
        let res = '';
        
        for(let mark of this._markers) {
            res += mark.coordsStr;
        }

        return res;
    }
    
    addDragendListener(handler) {
        this._dragends.push(handler);
    }

    clear() {
        for(let mark of this.markers) {
            mark.marker.setMap(null);
        }

        this.markers = [];
    }

    callUpdateHandlers() {
        for(let handler of this._dragends) {
            handler();
        }
    }

    add(marker) {
        this.markers.push(marker);
        marker.marker.addListener('dragend', function () {
            this.callUpdateHandlers();
        }.bind(this));

        if(this.markers.length > 1) {
            this.callUpdateHandlers();
        }
    }

    constructor(markers) {
        this.markers = markers;
    }
}