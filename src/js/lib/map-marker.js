/**
 * Created by joker on 15.12.16.
 */
export class MapMarker {
    get meta() {
        return this._meta;
    }

    set meta(value) {
        this._meta = value;
    }

    get draggable() {
        return this._marker.getDraggable();
    }

    set draggable(value) {
        this._marker.setDraggable(value);
    }
    get icon() {
        return this._icon;
    }
    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }
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

        this.marker.setPosition(new google.maps.LatLng(value.lat, value.lng));
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

    set icon(path) {
        this._icon = path;
    }

    set description(value) {
        this._description = value;

        if(this._ahead) {
            this._ahead = false;
            return;
        }

        if(this._description != '') {
            if(dropdownResolver != undefined) {
                dropdownResolver(value, function (points) {
                    let typeahead = [];
                    
                    for(let index in points) {
                        let item = {
                            _meta: {
                                id: points[index].id
                            },
                            name: points[index].name,
                            lat: points[index].lat,
                            lng: points[index].lng
                        };

                        if(points[index].display != undefined) {
                            item['display'] = points[index].display;
                        }

                        typeahead.push(item);
                    }

                    this.typeahead = typeahead;
                }.bind(this));
            }
        } else {
            this.typeahead = [];
        }
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
            visible: this.visible,
            time: this.time,
            icon: this.icon,
            draggable: this.draggable,
            meta: this.meta
        };

        return JSON.stringify(seria);
    }
    
    remove() {
        this.marker.setMap(null);
    }

    setAhead(ahead) {
        this._ahead = true;

        this.description = ahead.name;

        const position = {
            lat: ahead.lat,
            lng: ahead.lng
        };

        if(ahead['display'] != undefined) {
            if(ahead['display']['svg'] != undefined) {
                this.icon = ahead['display']['svg'];
            }
        }

        this.latLng = position;
        this.meta = ahead._meta;

        this.typeahead = [];
    }

    set serial(value) {
        let pos = value.position;

        this.latLng = new google.maps.LatLng(pos);

        this._ahead = true;
        this.description = value.description || '';

        if(value.label) {
            this.label = value.label + '';
        }
        
        if(typeof value.visible === 'boolean') {
            this.visible = value.visible;
        } else {
            this.visible = true;
        }

        this.time = value.time || '0:00';
        this.icon = value.icon || '';
        this.meta = value.meta || {};

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

    _time = '';
    _map = null;
    _latLng = {};
    _description = '';
    _marker = null;
    _template = 'content.html';
    _label = '';
    _visible = true;
    _icon = '';
    typeahead = [];
    _meta = {};

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