import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};

  height: 60px;
  display: flex;
  margin-top: 1px;
  justify-content: center;
  align-items: center;
`;

interface ButtonsWrapperProps {
  children: React.ReactNode;
}

const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default ButtonsWrapper;
