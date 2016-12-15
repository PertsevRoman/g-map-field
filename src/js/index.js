/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

import {PathStorage} from './lib/path-storage';
import {PathGenerator} from "./lib/path-generator";
import {GMap} from "./lib/map";

let initApp = function () {
    let app = new Vue({
        el: '#app',
        data: {
            pathGenerator: null,
            storage: null,
            map: null
        },
        methods: {
            beginPath: function () {
                this.pathGenerator.start();
            },
            finishPath: function () {
                this.pathGenerator.finish();
            },
            init: function () {
                this.map = new GMap('g-maps');
                this.storage = new PathStorage(this.map);
                this.pathGenerator = new PathGenerator(this.map, this.storage);

                google.maps.event.addListener(this.map.map, 'click', function(event) {
                    const markerCoords = event.latLng;

                    if(this.pathGenerator.inState) {
                        this.pathGenerator.add(markerCoords);
                    }
                }.bind(this));
            }
        }
    });

    app.init();
};

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});