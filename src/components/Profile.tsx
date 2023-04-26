import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #1a003c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
  height: 230px;
`;

const ProfileImage = styled.img`
  margin-top: 16px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
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
      <Name>{name}</Name>
      <JobTitle>{jobTitle}</JobTitle>
    </ProfileContainer>
  );
};

export default Profile;
