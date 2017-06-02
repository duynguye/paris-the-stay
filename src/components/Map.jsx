import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const PARIS = {
    "lat": 48.8563954,
    "lng": 2.3515273
};

const ARC_DE_TRIOMPHE = {
    lat: 48.874343,
    lng: 2.2948426,
    title: "Arc de Triomphe",
    image: "images/img-for-blade-0.png",
    details: [
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por " +
        "scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen " +
        "in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite " +
        "de un nov lingua franca On refusa continuar payar custosi traductores",

        "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. " +
        "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e " +
        "regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari " +
        "quam li existent Europan lingues. It va esser tam simplic quam Occidental in " +
        "fact, it va esser Occidental."
    ]
};

const EIFFEL_TOWER = {
    "lat": 48.8605668,
    "lng": 2.3001641,
    title: "Eiffel Tower",
    image: "images/img-for-blade-1.png",
    details: [
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por " +
        "scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen " +
        "in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite " +
        "de un nov lingua franca On refusa continuar payar custosi traductores",

        "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. " +
        "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e " +
        "regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari " +
        "quam li existent Europan lingues. It va esser tam simplic quam Occidental in " +
        "fact, it va esser Occidental."
    ]
};

const PONT_NOTRE_DAME = {
    "lat": 48.8526896,
    "lng": 2.3496285,
    title: "Pont Notre-Dame",
    image: "images/img-for-blade-2.png",
    details: [
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por " +
        "scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen " +
        "in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite " +
        "de un nov lingua franca On refusa continuar payar custosi traductores",

        "At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. " +
        "Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e " +
        "regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari " +
        "quam li existent Europan lingues. It va esser tam simplic quam Occidental in " +
        "fact, it va esser Occidental."
    ]
};

class Blade extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            visible: true
        };

        this.handleClose = ::this.handleClose;
    }

    handleClose (e) {
        e.preventDefault();

        this.setState({
            visible: false
        });

        TweenMax.fromTo(this.refs.blade, 0.3, {x: 0, opacity: 1}, {x: -500, opacity: 0});
    }

    componentDidMount () {
        TweenMax.fromTo(this.refs.blade, 0.3, {x: -500, opacity: 0}, {x: 0, opacity: 1});
    }

    render () {
        return (
            <div className="blade" ref="blade">
                <div className="close-button" onClick={ this.handleClose }><a href="" className="fa fa-times"> </a>
                </div>
                <div className="blade-image-container">
                    <img src={ this.props.object.image }/>
                </div>

                <div className="blade-content">
                    <h1>{ this.props.object.title }</h1>
                    { this.props.object.details.map((paragraph) =>
                        <p key={paragraph.length}>{paragraph}</p>
                    )}
                </div>
            </div>
        );
    }
}

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
    constructor () {
        super();
    }

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
                    elementType: 'all',
                    stylers: [{ saturation: 0 }]
                },
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

        let iconConfig = {
            url: 'images/pin.png',
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
        };

        this.marker = [
            new google.maps.Marker({
                map: this.map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: ARC_DE_TRIOMPHE,
                icon: iconConfig,
                optimized: false,
                labelClass: "test"
            }),

            new google.maps.Marker({
                map: this.map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: EIFFEL_TOWER,
                icon: iconConfig
            }),

            new google.maps.Marker({
                map: this.map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: PONT_NOTRE_DAME,
                icon: iconConfig
            })
        ];

        for (let i = 0; i < this.marker.length; i++) {
            google.maps.event.addListener(this.marker[i], 'mouseover', () => {
                this.marker[i].setIcon({ url: 'images/pin-hover.png', scaledSize: new google.maps.Size(40, 40), anchor: new google.maps.Point(20, 20)})
            });

            google.maps.event.addListener(this.marker[i], 'mouseout', () => {
                this.marker[i].setIcon(iconConfig)
            });
        }
    }

    render () {
        return (
            <div className="map">
                <Blade object={ARC_DE_TRIOMPHE}/>
                <Blade object={EIFFEL_TOWER}/>
                <Blade object={PONT_NOTRE_DAME}/>
                <div className="map-frame" ref="map">

                </div>
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