import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Heading from '../../Atoms/Heading';
import Link from '../../Atoms/Link';

import footerData from './footerData';

const FooterSectionContainer = styled.div`
  background-color: ${designSystem.color.white};
  padding: ${designSystem.size.m};
`;

const FooterSectionTitle = styled(Heading)`
  margin-bottom: ${designSystem.size.m};
`;

const FooterSectionList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const FooterSectionListItem = styled.li`
  margin-bottom: ${designSystem.size.m};
  width: 300px;
`;

const FooterSection = () => (
  footerData.map(item => (
    <FooterSectionContainer key={item.title}>
      <FooterSectionTitle as="h6">{item.title}</FooterSectionTitle>
      <FooterSectionList>
        {
          item.items.map(i => (
            <FooterSectionListItem key={i.title}>
              <Link href={i.url}>{i.title}</Link>
            </FooterSectionListItem>
          ))
        }
      </FooterSectionList>
    </FooterSectionContainer>
  ))
);

export default FooterSection;
