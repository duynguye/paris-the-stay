import React from 'react';

const PARIS = {
    "lat": 48.8563954,
    "lng": 2.3515273
};

const ARC_DE_TRIOMPHE = {
    "lat": 48.874343,
    "lng": 2.2948426
};

const EIFFEL_TOWER = {
    "lat": 48.8605668,
    "lng": 2.3001641
};

const PONT_NOTRE_DAME = {
    "lat": 48.8526896,
    "lng": 2.3496285
};

class MapLogo extends React.Component {
    render () {
        return (
            <div className="map-logo">
                <img src="images/logo-the-stay.png" alt="The Stay Logo"/>
            </div>
        );
    }
}

class MapObject extends React.Component {
    componentDidMount () {
        this.map = new google.maps.Map(this.refs.map, {
            center: PARIS,
            scrollWheel: true,
            mapTypeId: 'hybrid',
            zoom: 14
        });

        this.map.setOptions({
            styles: [
                {
                    featureType: 'poi.business',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'poi.government',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'poi.medical',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'poi.place_of_worship',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'poi.sports_complex',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'poi.school',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'labels.icon',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'road',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'administrative.neighborhood',
                    stylers: [{visibility: 'off'}]
                }
            ]
        });

        this.marker = [
            new google.maps.Marker({
                map: this.map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: ARC_DE_TRIOMPHE,
                icon: {
                    url: 'images/pin.png'
                }
            }),

            new google.maps.Marker({
                map: this.map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: EIFFEL_TOWER,
                icon: 'images/pin.png'
            }),

            new google.maps.Marker({
                map: this.map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: PONT_NOTRE_DAME,
                icon: 'images/pin.png'
            })
        ];
    }

    render () {
        return (
            <div className="map-frame" ref="map">

            </div>
        );
    }
}

export default class Map extends React.Component {
    render () {
        return (
            <div>
                <MapLogo/>
                <MapObject/>
            </div>
        );
    }
}