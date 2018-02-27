'use strict';

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';

require('styles//Offer.css');

var api_url = 'http://localhost:8081/test';


function starFormat(fieldValue, row) {
  var icon = '<img src="../images/star.svg">';
  if (row.star == 2) {
    icon = '<img src="../images/star.svg"><img src="../images/star.svg">';
  }
  if (row.star == 3) {
    icon = '<img src="../images/star.svg"><img src="../images/star.svg"><img src="../images/star.svg">';
  }
  return icon;
}

function offerFormatter(cell, row) {
  let offerShow = `${cell}`;
  if (row.specialOffers.length > 1)
  {
    offerShow = 'More than one offer, click to see details';
  }
  return offerShow;
}

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
    axios.get(api_url)
      .then(res => {
        const offers = res.data;
        this.setState({ offers });
      });
  }

  isExpandableRow(row) {
    if (row.specialOffers.length > 1) return true;
    else return false;
  }

  expandComponent(row) {
    let offers = [];

    row.specialOffers.forEach((offer, index) => {
      offers.push({
        offer_id: index,
        offer_descrption: offer
      })
    });

    return (
      <BootstrapTable data={offers}  version='4'>
          <TableHeaderColumn isKey dataField='offer_id' dataSort={ true } width='100'>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='offer_descrption'>Offer Detail</TableHeaderColumn>
      </BootstrapTable>
    );
  }

  render() {
    var listOffers = this.state.offers;

    return (<BootstrapTable exportCSV data={listOffers} version='4'
      expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }
      search>
          <TableHeaderColumn isKey dataField='name' dataSort={ true }>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='star' dataSort={ true } dataFormat={ starFormat } width='100'>Star</TableHeaderColumn>
          <TableHeaderColumn dataField='chef' dataSort={ true }>Chef's Name</TableHeaderColumn>
          <TableHeaderColumn dataField='specialOffers' dataFormat={ offerFormatter } >Offers</TableHeaderColumn>
      </BootstrapTable>)
  }
}

OfferComponent.displayName = 'OfferComponent';

// Uncomment properties you need
// OfferComponent.propTypes = {};
// OfferComponent.defaultProps = {};

export default OfferComponent;
