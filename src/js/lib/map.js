/**
 * Created by joker on 15.12.16.
 */

export class GMap {
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

    constructor(element) {
        var pointCoords = {lat: 52.61667, lng: 39.6000};

        this._map = new google.maps.Map(element, {
            center: pointCoords,
            zoom: 16
        });

        google.maps.event.trigger(this._map, 'resize');
    }
}