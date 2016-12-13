/**
 * Created by joker on 13.12.16.
 *
 */

document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('g-maps');

    console.log(element);

    let map = new google.maps.Map(element, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
});