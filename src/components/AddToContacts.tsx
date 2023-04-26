import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.tertiary};
  border: none;
  color: white;
  font-size: 14px;
  padding: 18px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

const AddToContacts = () => {
  return (
    <Container>
      <Button>ADD TO CONTACTS</Button>
    </Container>
  );
};

export default AddToContacts;
