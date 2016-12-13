/**
 * Created by joker on 13.12.16.
 *
 */

document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('g-maps');

    let map = new google.maps.Map(element, {
        center: {lat: 52.61667, lng: 39.6000},
        zoom: 16
    });
});