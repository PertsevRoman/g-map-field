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
        return;
    }
    
    let templateName = componentAnchor.getAttribute('template');

    $.get(templateName, function (data) {
        try {
            let Prof = Vue.extend({
                template: data,
                mounted: function () {
                    this.init();

                    if(this.fieldValue) {
                        this.beginPath(this.fieldValue);
                    } else {
                        this.beginPath();
                    }
                },
                props: [
                    'fieldName',
                    'fieldValue'
                ],
                data: function () {
                    return {
                        pathGenerator: null,
                        map: null,
                        currentPath: new Path([]),
                        renderer: null,
                        inEdit: true
                    };
                },
                updated: function () {
                },
                methods: {
                    beginPath: function (data) {
                        if(this.currentPath) {
                            this.currentPath.clear();
                        }

                        this.pathGenerator.start(this.currentPath, data);
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
                    clearPath: function () {
                        this.currentPath.clear();
                    },
                    init: function () {
                        let element = this.$el.querySelector('.g-maps');

                        this.map = new GMap(element);
                        this.pathGenerator = new PathGenerator(this.map);
                        this.renderer = new Renderer(this.map);

                        this.currentPath.addUpdateListener(function () {
                            this.renderer.render(this.currentPath);
                            this.$forceUpdate();
                        }.bind(this));

                        google.maps.event.addListener(this.map.map, 'click', function(event) {
                            const markerCoords = event.latLng;

                            const elemPosition = this.currentPath.size;
                            
                            this.pathGenerator.add({
                                position: markerCoords.toJSON()
                            });

                            this.$forceUpdate();

                            setTimeout(function () {
                                const selector = 'input[date-time="dt-' + elemPosition + '"]';
                                const pickerAnchor = $(selector);

                                pickerAnchor.timepicker({
                                    showMeridian: false
                                }).on('changeTime.timepicker', function (e) {

                                    const value = e.time.value;
                                    let index = pickerAnchor.attr('data-index');
                                    
                                    this.currentPath.pointValue(index, 'time', value);
                                }.bind(this));
                            }.bind(this), 500);
                        }.bind(this));
                    }
                }
            });

            new Prof().$mount(componentName);
        } catch (error) {
            console.log('Не удается определить компонент: Vue.js не инициализирован');
        }
    });
});