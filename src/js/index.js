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
            map: null,
            currentPath: new Path([]),
            renderer: null,
            inEdit: true
        },
        filters: {
            marker: (value) => {
                let res = '';

                for(let val of value) {
                    res += val.label + '(' + val.coordsStr + ')\n';
                }

                return res;
            }
        },
        methods: {
            beginPath: function () {
                if(this.currentPath) {
                    this.currentPath.clear();
                }
                
                this.pathGenerator.start(this.currentPath);
            },
            finishPath: function () {
                this.pathGenerator.finish();

                this.renderer.render(this.currentPath);
            },
            toTop: function (index) {
                this.currentPath.indexDispose(index, -1);
                this.renderer.render(this.currentPath);

                this.$forceUpdate();
            },
            toDown: function (index) {
                this.currentPath.indexDispose(index, 1);
                this.renderer.render(this.currentPath);

                this.$forceUpdate();
            },
            remove: function (index) {
                this.currentPath.indexRemove(index);
                this.renderer.render(this.currentPath);
            },
            init: function () {
                this.map = new GMap('g-maps');
                this.pathGenerator = new PathGenerator(this.map);
                this.renderer = new Renderer(this.map);

                this.currentPath.addDragendListener(function () {
                    this.renderer.render(this.currentPath);
                }.bind(this));

                google.maps.event.addListener(this.map.map, 'click', function(event) {
                    const markerCoords = event.latLng;
                    
                    this.pathGenerator.add(markerCoords);
                }.bind(this));
            }
        }
    });

    app.init();
    app.beginPath();
};

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});