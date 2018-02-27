'use strict';

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';

require('styles//Offer.css');

class OfferComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        offers: []
      };
  }
  
  componentDidMount() {
    this.OfferComponent();
  }

  OfferComponent() {
    axios.get('http://localhost:8081/test')
      .then(res => {
        const offers = res.data;
        this.setState({ offers });
      });
  }

  render() {
    var listOffers = this.state.offers;

    return (<BootstrapTable data={listOffers}  version='4'>
          <TableHeaderColumn isKey dataField='name' dataSort={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='star' dataSort={ true }>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='chef' dataSort={ true }>Product Price</TableHeaderColumn>
      </BootstrapTable>)
  }
}

OfferComponent.displayName = 'OfferComponent';

// Uncomment properties you need
// OfferComponent.propTypes = {};
// OfferComponent.defaultProps = {};

export default OfferComponent;
