/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

import {PathGenerator} from "./lib/path-generator";
import {GMap} from "./lib/map";
import Renderer from "./lib/renderer";
import {Path} from "./lib/path";

let initApp = function () {
    let app = new Vue({
        el: '#app',
        data: {
            pathGenerator: null,
            storage: null,
            map: null,
            currentPath: new Path([]),
            renderer: null
        },
        methods: {
            beginPath: function () {
                this.pathGenerator.start();
            },
            finishPath: function () {
                this.pathGenerator.finish(function (path) {
                    this.currentPath = path;

                    console.log('Визуализация...');

                    this.renderer.render(this.currentPath);

                    this.currentPath.addDragendListener(function () {
                        this.renderer.render(this.currentPath);
                    }.bind(this));
                }.bind(this));
            },
            addPoint() {
            },
            toTop: function (label) {
                console.log(label);
                this.renderer.render(this.currentPath);
            },
            toDown: function (label) {
                console.log(label);
                this.renderer.render(this.currentPath);
            },
            init: function () {
                this.map = new GMap('g-maps');
                this.pathGenerator = new PathGenerator(this.map);
                this.renderer = new Renderer(this.map);

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