'use strict';

import React from 'react';

require('styles//Offer.css');

class OfferComponent extends React.Component {
  render() {

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
      <div>{numbers}</div>
    );

    return (
      <div className="offer-component">
        <div>{listItems}</div>
        Please edit src/components///OfferComponent.js to update this component!
      </div>
    );
  }
}

OfferComponent.displayName = 'OfferComponent';

// Uncomment properties you need
// OfferComponent.propTypes = {};
// OfferComponent.defaultProps = {};

export default OfferComponent;
