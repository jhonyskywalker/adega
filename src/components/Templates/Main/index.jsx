import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import designSystem from 'designSystem';

import Heading from '../../Atoms/Heading';
import Paragraph from '../../Atoms/Paragraph';
import AppHighlight from '../../Molecules/AppHighlight';
import FooterSection from '../../Molecules/FooterSection';

const Header = styled.header`
  padding: ${designSystem.size.base} ${designSystem.size.xm};
  background-color: ${designSystem.color.white};
  text-align: center;

  a {
    color: ${designSystem.color.black};
    text-decoration: none;
  }
`;

const Content = styled.div`
  padding: ${designSystem.size.l} 0;
  margin: 0 auto;
  min-height: 800px;
`;

const Footer = styled.footer``;

const Main = ({ children }) => (
  <>
    <Header>
      <Heading as="h2">
        <Link to="/">Adega</Link>
      </Heading>
      <Paragraph>Sua bebida do seu jeito.</Paragraph>
    </Header>

    <Content>{children}</Content>

    <Footer>
      <AppHighlight />
      <FooterSection />
    </Footer>
  </>
);

export default Main;
