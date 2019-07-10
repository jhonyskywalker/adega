import React, { Component } from 'react';

import TemplateMain from '../../Templates/Main';
import Places from '../../Organisms/Places';
import Stores from '../../Organisms/Stores';
import PageHighlight from '../../Molecules/PageHighlight';

class HomePage extends Component {
  saveSession = (params) => {
    const { saveSession } = this.props;
    const { session } = this.props;

    saveSession({ ...session.payload, ...params });
  }

  fetchPlaces = (event) => {
    const { value } = event.target;
    const { fetchPlaces } = this.props;

    this.saveSession({
      place: {
        visible: true,
        place_name: value,
      },
    });

    if (value.length > 2) {
      fetchPlaces({ query: value });
    }
  }

  fetchStores = (params) => {
    const { fetchStores } = this.props;

    this.saveSession({
      place: {
        ...params,
        visible: false,
      },
    });

    fetchStores({
      lat: String(params.center[1]),
      long: String(params.center[0]),
      now: new Date().toJSON(),
    });
  }

  selectStore = (params) => {
    const { history } = this.props;

    this.saveSession({ store: params });

    history.push(`/products/${params.id}`);
  }

  render() {
    const { places, session, stores } = this.props;

    return (
      <TemplateMain>
        <PageHighlight />

        <Places
          fetchPlaces={this.fetchPlaces}
          places={places.payload.features}
          fetchStores={this.fetchStores}
          session={session}
        />

        <Stores
          stores={stores}
          selectStore={this.selectStore}
        />
      </TemplateMain>
    );
  }
}

export default HomePage;
