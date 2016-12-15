/**
 * Created by joker on 15.12.16.
 */

export class MapMarker {
    get marker() {
        return this._marker;
    }
    get template() {
        return this._template;
    }

    set template(value) {
        this._template = value;
    }
    constructor(template) {
        if(template) {
            this.template = template;
        }
    }

    _marker = null;
    _template = 'content.html';

    getPosition() {
        return this._marker.getPosition();
    }

    load(map, coords, label) {
        let data = document.createElement('div');

        $(data).load('src/tpl/' + this.template);

        let infowindow = new google.maps.InfoWindow({
            content: data
        });

        const markerOptions = {
            position: coords,
            map: map,
            draggable: true
        };

        if(label) {
            markerOptions['label'] = label + '';
        }


        this._marker = new google.maps.Marker(markerOptions);

        this._marker.addListener('mouseover', function() {
            infowindow.open(map, this._marker);
        });

        this._marker.addListener('mouseout', function() {
            infowindow.close();
        });
    }
}