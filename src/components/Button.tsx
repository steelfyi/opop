import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 14px;

  color: #ffffff;
  background-color: #2f1452;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, icon }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon && <Icon src={icon} alt={text} />}
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  icon: undefined,
};

export default Button;
