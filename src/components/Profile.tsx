import React from "react";
import styled from "styled-components";
import profileCircle from "../assets/ProfileCircle.png";

const ProfileContainer = styled.div`
  background-color: #1a003c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  text-align: center;
  height: 230px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding-top: 10px;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;

const Circle = styled.img`
  width: 140px;
  height: 140px;
  z-index: 0;
`;

const Name = styled.h2`
  color: #efe7fa;
  margin-top: 16px;
  font-size: 24px;
  font-weight: 600;
`;

const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #efe7fa;
  margin-top: 0px;
`;

interface ProfileProps {
  image: string;
  name: string;
  jobTitle: string;
}

const Profile: React.FC<ProfileProps> = ({ image, name, jobTitle }) => {
  return (
    <ProfileContainer>
      <ProfileImage src={image} alt={name} />
      <Circle src={profileCircle} alt="Profile Circle" />
      <Name>{name}</Name>
      <JobTitle>{jobTitle}</JobTitle>
    </ProfileContainer>
  );
};

export default Profile;
