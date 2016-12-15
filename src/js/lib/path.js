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
    
    addDragendListener(handler) {
        this._dragends.push(handler);
    }

    constructor(markers) {
        this.markers = markers;

        for(let coord of this.markers) {
            coord.marker.addListener('dragend', function () {
                for(let handler of this._dragends) {
                    handler();
                }
            }.bind(this));
        }
    }
}