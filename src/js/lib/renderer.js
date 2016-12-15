/**
 * Created by joker on 15.12.16.
 */

export default class Renderer {
    get map() {
        return this._map;
    }

    set map(value) {
        this._map = value;
    }
    
    _map = null;
    
    
    constructor(map) {
        this._directionsService = new google.maps.DirectionsService();
        this._directionsDisplay = new google.maps.DirectionsRenderer();
        
        this.map = map;
    }

    waypoints(coords) {
        let result = [];

        for(let i = 1; i < coords.length - 1; ++i) {
            result.push({
                location: coords[i],
                stopover: false
            });
        }

        return result;
    }

    render(path) {
        let coords = path.coordsArray;

        if(coords.length < 2) {
            this._directionsDisplay.setMap(null);
            return;
        }

        this._directionsDisplay.setMap(this.map.map);

        let waypoints = this.waypoints(coords);

        let request = {
            origin: coords[0],
            waypoints,
            destination: coords[coords.length - 1],
            travelMode: google.maps.TravelMode.DRIVING
        };

        this._directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                this._directionsDisplay.setDirections(response);
            }
        }.bind(this));
    }
}