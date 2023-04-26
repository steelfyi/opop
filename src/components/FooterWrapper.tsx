import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: #ffffff;
  height: 60px;
  display: flex;
  margin-top: 1px;
  justify-content: center;
  align-items: center;
`;

interface ButtonsWrapperProps {
  children: React.ReactNode;
}

const FooterWrapper: React.FC<ButtonsWrapperProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default FooterWrapper;
