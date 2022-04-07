import React from 'react';
import styled from 'styled-components';
import List from './List';

const GroupContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 7
}));

const Title = styled('p')(() => ({
  fontSize: 20,
  color: '#2d629a'
}));

const ItemsGroup = ({
  title = '',
  patients
}) => {
  return (
    <GroupContainer>
      <Title>{title}</Title>
      <List patients={patients} />
    </GroupContainer>
  );
};

export default ItemsGroup;
