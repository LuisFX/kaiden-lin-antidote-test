import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';

const StyledHeader = styled('div')(() => ({
  background: 'linear-gradient(90deg, rgba(45,98,154,1) 0%, rgba(11,169,198,1) 100%)',
  width: '100%',
  height: 127,
  padding: '17px 17px 0 17px'
}));

const HeaderContainer = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

const Title = styled('p')(() => ({
  fontSize: 30,
  color: '#fff'
}));

const Header = ({ onSearch }) => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <SearchInput onSearch={onSearch} />
        <Button>
          <img src="/assets/arrow-back.png" alt="back" />
        </Button>
        <Title>Patient History</Title>
        <Button>
          <img src="/assets/icon-filter.png" alt="filter" />
        </Button>
      </HeaderContainer>
    </StyledHeader>
  )
};

export default Header;
