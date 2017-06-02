import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Load Custom CSS
require('style-loader!css-loader!sass-loader!./styles/core.scss');

// Load Map Component
import Map from './components/Map';

const Core = (props) => (
    <BrowserRouter>
        <div>
            <h1>Core Component</h1>
            <Map/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(
    <Core/>,
    document.getElementById('app')
);