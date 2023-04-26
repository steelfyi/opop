import React from "react";
import styled from "styled-components";

import telephoneIcon from "../assets/Call.png";
import locationIcon from "../assets/Directions.png";
import emailIcon from "../assets/Email.png";
import spotifyIcon from "../assets/Spotify.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const Subtitle = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: #777;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
`;

const ContactCard = () => {
  return (
    <Container>
      <Description>
        Managing Director at Eric, delivering creative and business solutions.
        Contact today!
      </Description>
      <Section>
        <IconContainer>
          <Icon src={telephoneIcon} alt="Telephone Icon" />
        </IconContainer>
        <InfoWrapper>
          <Title>(+44) 0787 933 5555</Title>
          <Subtitle>Telephone</Subtitle>
        </InfoWrapper>
      </Section>
      <Section>
        <IconContainer>
          <Icon src={locationIcon} alt="Location Icon" />
        </IconContainer>
        <InfoWrapper>
          <Title>Peter Rabbit, Little Hut Manchester, M1 AAA</Title>
          <Subtitle>Location</Subtitle>
        </InfoWrapper>
      </Section>
      <Section>
        <IconContainer>
          <Icon src={emailIcon} alt="Email Icon" />
        </IconContainer>
        <InfoWrapper>
          <Title>JakeJones@Jones.co.uk</Title>
          <Subtitle>Email</Subtitle>
        </InfoWrapper>
      </Section>
      <Section>
        <IconContainer>
          <Icon src={spotifyIcon} alt="Spotify Icon" />
        </IconContainer>
        <InfoWrapper>
          <Title>Jake Jones</Title>
          <Subtitle>Spotify</Subtitle>
        </InfoWrapper>
      </Section>
    </Container>
  );
};

export default ContactCard;
