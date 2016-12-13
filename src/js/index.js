/**
 * Created by joker on 13.12.16.
 *
 */

class Map {
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

    constructor() {
        const element = document.getElementById('g-maps');
        var pointCoords = {lat: 52.61667, lng: 39.6000};

        this._map = new google.maps.Map(element, {
            center: pointCoords,
            zoom: 16
        });
    }
}

class ContentMarker {
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

    _template = 'content.html';

     load(map, coords) {
         let data = document.createElement('div');
         
         $(data).load('src/tpl/' + this.template);

         let infowindow = new google.maps.InfoWindow({
             content: data
         });

         let marker = new google.maps.Marker({
             position: coords,
             map: map
         });

         marker.addListener('click', function() {
             infowindow.open(map, marker);
         });

         console.log(data);
     }
}

document.addEventListener('DOMContentLoaded', function () {
    let gmap = new Map();
    let marker = new ContentMarker();

    google.maps.event.addListener(gmap.map, 'click', function(event) {
        const markerCoords = event.latLng;
        marker.load(gmap.map, markerCoords);
    });
});