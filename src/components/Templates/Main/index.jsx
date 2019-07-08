import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

const Header = styled.header`
  padding: 20px 40px;
  border-bottom: 1px solid #333;
  background-color: ${designSystem.color.white};
`;

const Content = styled.div`
  padding: 40px 0;
  margin: 0 auto;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
`;

const Main = ({ children }) => (
  <>
    <Header>
      <h1>Adega</h1>
    </Header>

    <Content>{children}</Content>

    <Footer></Footer>
  </>
);

export default Main;
