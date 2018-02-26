import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Offer from './components/OfferComponent';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Offer />, document.getElementById('offers'));
