/**
 * Created by joker on 15.12.16.
 */

export class MapMarker {
    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
        this.marker.setMap(value.map);
    }
    get latLng() {
        return this._latLng;
    }

    set latLng(value) {
        this._latLng = value;
        this.marker.setPosition(value);
    }
    get visible() {
        return this._marker.getVisible();
    }

    set visible(value) {
        this._marker.setVisible(value);
        this._visible = value;
    }
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
            description: this.description,
            position: this.marker.getPosition().toJSON(),
            visible: this.visible
        };

        return JSON.stringify(seria);
    }
    
    remove() {
        this.marker.setMap(null);
    }

    set serial(value) {
        let pos = value.position;

        this.latLng = new google.maps.LatLng(pos);
        this.description = value.description || '';
        if(value.label) {
            this.label = value.label + '';
        }
        this.visible = value.visible || true;
        
        this.marker.setPosition(this.latLng);
        this.marker.setLabel(this.label);
        this.marker.setVisible(this.visible);
    }

    constructor(map, coords, template) {
        if(!map) {
            throw 'Не определена карта';
        }

        this._marker = new google.maps.Marker({
            map: map.map,
            position: coords,
            draggable: true
        });
        
        this.map = map;

        if(template) {
            this.template = template;
        }
    }

    _map = null;
    _latLng = {};
    _description = '';
    _marker = null;
    _template = 'content.html';
    _label = '';
    _visible = true;


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
}