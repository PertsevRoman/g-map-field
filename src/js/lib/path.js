/**
 * Created by joker on 15.12.16.
 */

/**
 * Класс пути
 */
export class Path {
    get markers() {
        return this._markers;
    }

    set markers(value) {
        this._markers = value;
    }
    _markers = [];

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

    constructor(markers) {
        this.markers = markers;
    }
}