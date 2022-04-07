import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { MAX_WIDTH } from '../constants';

const RootContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  overflow: 'hidden',
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  overflow: 'hidden',
  width: MAX_WIDTH,
  height: '100%',
  background: '#fff',
  [`@media screen and (max-width: ${MAX_WIDTH}px)`]: {
    width: '100%'
  }
}));

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  overflow: 'hidden',
}));

const Content = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto',
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 37
}));

const Layout = ({
  onSearch,
  children
}) => {
  return (
    <RootContainer>
      <Wrapper>
        <Container>
          <Header onSearch={onSearch} />
          <Content>
            {children}
          </Content>
        </Container>
      </Wrapper>
    </RootContainer>
  );
};

export default Layout;
