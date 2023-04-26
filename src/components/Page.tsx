import React from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Profile from "../components/Profile";
import ButtonsWrapper from "../components/ButtonsWrapper";
import Button from "./Button";
import ShareButton from "../components/ShareButton";
import WebsiteButton from "../components/WebsiteButton";
import ContactCard from "../components/ContactCard";
import AddToContacts from "../components/AddToContacts";
import FooterWrapper from "../components/FooterWrapper";
import callIcon from "../assets/Call.png";
import directionsIcon from "../assets/Directions.png";
import emailIcon from "../assets/Email.png";
import profileImage from "../assets/profile-image.png";

import { themes } from "../themes";
import Theme from "../App";

const Page: React.FC = () => {
  const { themeId = "1" } = useParams<{ themeId?: string }>();
  const currentTheme = themes[themeId] || themes["1"];

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="app-container">
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
        <AddToContacts />
        <ContactCard />
        <FooterWrapper>
          <ShareButton text="SHARE" />
          <WebsiteButton text="VISIT WEBSITE" />
        </FooterWrapper>
      </div>
    </ThemeProvider>
  );
};

export default Page;
