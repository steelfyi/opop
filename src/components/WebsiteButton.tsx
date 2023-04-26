import React from "react";
import styled from "styled-components";
import websiteIcon from "../assets/Website.png";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  font-size: 16px;
  color: #ffffff;
  background-color: #2f1452;
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

const WebsiteButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Icon src={websiteIcon} alt="Website" />
      <span>{text}</span>
    </StyledButton>
  );
};

export default WebsiteButton;
