import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';

const ItemContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#2d629a',
  width: '100%',
  height: 63,
  marginTop: 7,
  marginBottom: 7,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 12
}));

const MainContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const Avatar = styled('img')(() => ({
  width: 51,
  height: 51
}));

const TitleContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 15
}));

const DateLabel = styled('p')(() => ({
  color: '#fff',
  fontSize: 16
}));

const Name = styled('p')(() => ({
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold'
}));

const Item = ({
  patient
}) => {
  return (
    <ItemContainer id="patient-item">
      <MainContainer>
        <Avatar src={patient.avatar} alt={`avatar-${patient.name}`} />
        <TitleContainer>
          <DateLabel>{patient.date}</DateLabel>
          <Name>{patient.name}</Name>
        </TitleContainer>
      </MainContainer>
      <Button>
        <img src="/assets/icon-plus.png" alt="plus-icon" />
      </Button>
    </ItemContainer>
  );
};

export default Item;
