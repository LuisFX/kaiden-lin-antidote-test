import React from 'react';
import styled from 'styled-components';

const StyledButton = styled('button')(({ size }) => ({
  borderColor: 'transparent',
  borderStyle: 'none',
  background: 'transparent',
  width: size,
  height: size,
  cursor: 'pointer',
}));

const Button = ({
  size = 25,
  onClick,
  children,
  ...rest
}) => {
  return (
    <StyledButton size={size} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
