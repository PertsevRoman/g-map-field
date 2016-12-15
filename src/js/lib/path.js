/**
 * Created by joker on 15.12.16.
 *
 *
 */
import {assert as assert} from './utils';

export class Path {
    get markers() {
        return this._markers;
    }

    set markers(value) {
        this._markers = value;
    }
        
    _markers = [];
    _updateListeners = [];

    /**
     * Получение сериализованного массива
     */
    get serial() {
        let serias = this._markers.map(function (mark) {
            return mark.serial;
        }).join(',');

        let res = '[' + serias + ']';
        
        return res;
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

        this.callUpdateHandlers();
    }

    indexRemove(index) {
        assert(index > -1 && index < this._markers.length);

        let elem = this._markers[index];
        elem.marker.setMap(null);

        this._markers.splice(index, 1);

        this.callUpdateHandlers();
    }

    get coordsStr() {
        let res = '';
        
        for(let mark of this._markers) {
            res += mark.coordsStr;
        }

        return res;
    }
    
    addUpdateListener(handler) {
        this._updateListeners.push(handler);
    }

    clear() {
        for(let mark of this.markers) {
            mark.marker.setMap(null);
        }

        this.markers = [];
        
        this.callUpdateHandlers();
    }

    callUpdateHandlers() {
        for(let handler of this._updateListeners) {
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

    refreshLabels() {
        let index = 1;
        for(let mark of this.markers) {
            mark.label = index + '';
            index += 1;
        }
    }

    constructor(markers) {
        this.markers = markers;

        this.addUpdateListener(function () {
            this.refreshLabels();
        }.bind(this));
    }
}