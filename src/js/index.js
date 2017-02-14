/**
 * Created by joker on 13.12.16.
 *
 * Получение данных
 */

import {PathGenerator} from "./lib/path-generator";
import {GMap} from "./lib/map";
import Renderer from "./lib/renderer";
import {Path} from "./lib/path";

const componentName = 'path-input';

document.addEventListener('DOMContentLoaded', function () {
    let componentAnchor = document.getElementsByTagName(componentName)[0];

    if(componentAnchor == null) {
        console.log('Component tag not founded');
        return;
    }
    
    let templateName = componentAnchor.getAttribute('template');
    let fieldValue = componentAnchor.getAttribute('field-value');
    let fieldName = componentAnchor.getAttribute('field-name');
    let iconsResource = componentAnchor.getAttribute('icons-resource');

    $.get(iconsResource, function (icons) {
        $.get(templateName, function (data) {
            try {
                let Prof = Vue.extend({
                    template: data,
                    mounted: function () {
                        this.init();

                        this.fieldName = fieldName;

                        if(fieldValue) {
                            this.beginPath(fieldValue);
                        } else {
                            this.beginPath();
                        }
                    },
                    data: function () {
                        return {
                            pathGenerator: null,
                            map: null,
                            currentPath: new Path([]),
                            renderer: null,
                            inEdit: true,
                            fieldName: ''
                        };
                    },
                    computed: {
                        icons: function () {
                            return icons;
                        }
                    },
                    methods: {
                        beginPath: function (data) {
                            if(this.currentPath) {
                                this.currentPath.clear();
                            }

                            this.pathGenerator.defaultIcon = icons[0].icon;
                            let bounds = this.pathGenerator.start(this.currentPath, data);

                            if(bounds != undefined) {
                                this.map.map.fitBounds(bounds);
                                this.map.map.panToBounds(bounds);
                            }
                        },
                        finishPath: function () {
                            this.pathGenerator.finish();
                        },
                        toTop: function (index) {
                            this.currentPath.indexDispose(index, -1);
                        },
                        toDown: function (index) {
                            this.currentPath.indexDispose(index, 1);
                        },
                        remove: function (index) {
                            this.currentPath.indexRemove(index);
                        },
                        center: function (point) {
                            let latLng = point.latLng;

                            this.map.map.setCenter(latLng);
                        },
                        clearPath: function () {
                            this.currentPath.clear();
                        },
                        setAhead: function (point, ahead) {
                            point.setAhead(ahead);
                            
                            this.renderer.render(this.currentPath);
                        },
                        init: function () {
                            let element = this.$el.querySelector('.g-maps');

                            this.map = new GMap(element);
                            this.pathGenerator = new PathGenerator(this.map);
                            this.renderer = new Renderer(this.map);

                            this.currentPath.addUpdateListener(function () {
                                /* rem-block */
                                console.log('Path updating...');
                                /* end-rem-block */

                                this.renderer.render(this.currentPath);
                                this.$forceUpdate();
                            }.bind(this));

                            this.pathGenerator.appendAddListener(function () {
                                const elemPosition = this.currentPath.size;

                                /* rem-block */
                                console.log('Adding point...');
                                /* end-rem-block */

                                setTimeout(function () {
                                    const selector = 'input[date-time="dt-' + (elemPosition - 1) + '"]';
                                    const pickerAnchor = $(selector);

                                    pickerAnchor.timepicker({
                                        showMeridian: false
                                    }).on('changeTime.timepicker', function (e) {
                                        const value = e.time.value;
                                        let index = pickerAnchor.attr('data-index');

                                        this.currentPath.pointValue(index, 'time', value);

                                        /* rem-block */
                                        console.log('Point added');
                                        /* end-rem-block */
                                    }.bind(this));
                                }.bind(this), 500);
                            }.bind(this));

                            google.maps.event.addListener(this.map.map, 'click', function(event) {
                                const markerCoords = event.latLng;

                                this.pathGenerator.add({
                                    position: markerCoords.toJSON()
                                });

                                this.$forceUpdate();
                            }.bind(this));
                        }
                    }
                });

                /* rem-block */
                console.log('Load component...');
                /* end-rem-block */

                new Prof().$mount(componentName);
            } catch (error) {
                console.log(error);
                console.log('Не удается определить компонент: Vue.js не инициализирован');
            }
        });
    });
});