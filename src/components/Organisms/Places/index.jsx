import React from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

import Input from '../../Atoms/Input';
import Icon from '../../Atoms/Icon';

const PlacesList = styled.ul`
  background-color: ${designSystem.color.white};
  border-radius: ${designSystem.size.s};
`;

const PlaceItem = styled.li`
  padding: ${designSystem.size.s};
`;

const PlaceIcon = styled(Icon)`
  margin-right: ${designSystem.size.s};
`;

const Places = ({ fetchPlaces, places, fetchStores }) => (
  <>
    <Input
      onChange={fetchPlaces}
      size="large"
      color="primary"
      fluid
    />

    <PlacesList>
      {places.map(item => (
        <PlaceItem onClick={() => fetchStores(item)} key={item.id}>
          <PlaceIcon name="faMapMarkerAlt" />
          {item.place_name}
        </PlaceItem>
      ))}
    </PlacesList>
  </>
);

export default Places;
