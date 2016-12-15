/**
 * Created by joker on 15.12.16.
 */

export class MapMarker {
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;

        if(this._marker) {
            this._marker.setLabel(value);
        }
    }
    get marker() {
        return this._marker;
    }
    get template() {
        return this._template;
    }

    set template(value) {
        this._template = value;
    }

    get serial() {
        let seria = {
            description: this._description,
            coords: this.marker.getPosition().toJSON()
        };

        return JSON.stringify(seria);
    }

    constructor(template) {
        if(template) {
            this.template = template;
        }
    }

    _description = '';
    _marker = null;
    _template = 'content.html';
    _label = '';

    getPosition() {
        return this._marker.getPosition();
    }

    get coordsStr() {
        let pos = this.getPosition();
        return pos.toString();
    }

    addInfo() {
        let data = document.createElement('div');

        $(data).load('src/tpl/' + this.template);

        let infowindow = new google.maps.InfoWindow({
            content: data
        });

        this._marker.addListener('mouseover', function() {
            infowindow.open(map, this._marker);
        });

        this._marker.addListener('mouseout', function() {
            infowindow.close();
        });
    }

    load(map, coords, label) {
        const markerOptions = {
            position: coords,
            map: map,
            draggable: true
        };

        if(label) {
            label = label + '';
            
            markerOptions['label'] = label;
            this.label = label;
        }

        this._marker = new google.maps.Marker(markerOptions);
    }
}