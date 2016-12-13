/**
 * Created by joker on 13.12.16.
 *
 */

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
    const element = document.getElementById('g-maps');

    var pointCoords = {lat: 52.61667, lng: 39.6000};

    let map = new google.maps.Map(element, {
        center: pointCoords,
        zoom: 16
    });

    let marker = new ContentMarker();

    marker.load(map, pointCoords);
});