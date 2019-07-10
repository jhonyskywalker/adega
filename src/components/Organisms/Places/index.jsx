import React from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

import Input from '../../Atoms/Input';
import Icon from '../../Atoms/Icon';

const PlacesList = styled.ul`
  background-color: ${designSystem.color.white};
  border-radius: ${designSystem.size.s};
  list-style: none;
`;

const PlaceIcon = styled(Icon)`
  margin-right: ${designSystem.size.m};
  color: ${designSystem.color.gray};
`;

const PlaceItem = styled.li`
  padding: ${designSystem.size.s} ${designSystem.size.m};

  &:hover {
    background-color: ${designSystem.color.gray};
    color: ${designSystem.color.white};

    ${PlaceIcon} {
      color: ${designSystem.color.white};
    }
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchField = styled(Input)`
  svg {
    color: ${designSystem.color.gray};
    font-size: ${designSystem.size.m};
  }
`;

const Places = ({ fetchPlaces, places, fetchStores, session }) => (
  <SearchContainer>
    <SearchField
      onChange={fetchPlaces}
      size="large"
      color="white"
      placeholder="Informe sua localização."
      icon="faSearch"
      value={session.payload.place.place_name}
      type="text"
      fluid
    />

    {session.payload.place.visible && (
      <PlacesList>
        {places.map(item => (
          <PlaceItem onClick={() => fetchStores(item)} key={item.id}>
            <PlaceIcon name="faMapMarkerAlt" />
            {item.place_name}
          </PlaceItem>
        ))}
      </PlacesList>
    )}
  </SearchContainer>
);

export default Places;
