import React from "react";
import "./App.css";
import Button from "./components/Button";
import Profile from "./components/Profile";
import ButtonsWrapper from "./components/ButtonsWrapper";
import profileImage from "./assets/profile-image.png";
import ShareButton from "./components/ShareButton";
import WebsiteButton from "./components/WebsiteButton";
import ContactCard from "./components/ContactCard";
import AddToContacts from "./components/AddToContacts";
import FooterWrapper from "./components/FooterWrapper";
import callIcon from "./assets/Call.png";
import directionsIcon from "./assets/Directions.png";
import emailIcon from "./assets/Email.png";

import { createGlobalStyle } from "styled-components";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/800.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Manrope', sans-serif;
  }
`;

function App() {
  return (
    <div className="app-container">
      <GlobalStyle />
      <Profile
        image={profileImage}
        name="Jake Jones"
        jobTitle="Managing Director"
      />

      <ButtonsWrapper>
        <Button text="CALL" icon={callIcon} />

        <Button text="|" />
        <Button text="DIRECTIONS" icon={directionsIcon} />
        <Button text="|" />
        <Button text="EMAIL" icon={emailIcon} />
      </ButtonsWrapper>
      <AddToContacts></AddToContacts>
      <ContactCard />
      <FooterWrapper>
        <ShareButton text="SHARE" />
        <WebsiteButton text="VISIT WEBSITE" />
      </FooterWrapper>
    </div>
  );
}

export default App;
