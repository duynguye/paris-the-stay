import React from 'react';

class MapLogo extends React.Component {
    render () {
        return (
            <div>
                <h1>Map Logo</h1>
            </div>
        );
    }
}

class MapObject extends React.Component {
    render () {
        return (
            <div>
                <h1>Map Object</h1>
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