import React from 'react';
import styled from 'styled-components';

const InputContainer = styled('div')(() => ({
  position: 'absolute',
  paddingLeft: 27,
  paddingRight: 27,
  bottom: -23,
  background: '#fff',
  width: '100%',
  height: 39,
  borderRadius: 20,
  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  display: 'flex',
  alignItems: 'center',
  'input': {
    border: 'none',
    width: '100%',
    marginLeft: 15,
    outline: 'none'
  }
}));

const SearchInput = ({
  onSearch,
  ref,
  value,
  ...rest
}) => {
  return (
    <InputContainer>
      <img src="/assets/icon-search.png" alt="search" />
      <input
        ref={ref}
        autoFocus
        placeholder="Search for patients, and more"
        aria-label="search-input"
        value={value}
        onChange={onSearch}
        {...rest}
      />
    </InputContainer>
  );
};

export default SearchInput;
