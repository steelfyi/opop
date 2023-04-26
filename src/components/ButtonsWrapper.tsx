import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: #2f1452;
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
