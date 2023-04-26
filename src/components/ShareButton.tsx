import React from "react";
import styled from "styled-components";
import shareIcon from "../assets/Share.png";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 16px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.primary};
  width: 50%;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 8px;
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ShareButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Icon src={shareIcon} alt="Website" />
      {text}
    </StyledButton>
  );
};

export default ShareButton;
