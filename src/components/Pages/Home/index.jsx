import React, { Component } from 'react';

import TemplateMain from '../../Templates/Main';
import Places from '../../Organisms/Places';
import Stores from '../../Organisms/Stores';

class HomePage extends Component {
  saveSession = (params) => {
    this.props.saveSession({ ...this.props.session.payload, ...params });
  }

  fetchPlaces = (event) => {
    if (event.target.value.length > 2) {
      this.props.fetchPlaces({ query: event.target.value });
    }
  }

  fetchStores = (params) => {
    this.saveSession({ place: params });
    this.props.fetchStores({
      lat: String(params.center[1]),
      long: String(params.center[0]),
      now: new Date().toJSON(),
    });
  }

  selectStore = (params) => {
    this.saveSession({ store: params });
    this.props.history.push(`/products/${params.id}`);
  }

  render() {
    return (
      <TemplateMain>
        <Places
          fetchPlaces={this.fetchPlaces}
          places={this.props.places.payload.features}
          fetchStores={this.fetchStores}
        />

        <Stores
          stores={this.props.stores.payload.pocSearch}
          selectStore={this.selectStore}
        />
      </TemplateMain>
    );
  }
}

export default HomePage;
