import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Cards from "./Cards";

const CardContainer = styled.div`
  background: #f7f7f7;
  padding: 5px 40px 60px 40px;
  @media (max-width: 800px) {
    padding: 5px 15px 60px 15px;
  }
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 800px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Time = styled.div`
  font-size: 14px;
  gap: 5px;
  align-items: center;
  display: flex;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const Contain = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  width: 100%;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 800px) {
    margin: auto;
  }
`;

const TimeTag = styled.p`
  color: #626363;
  font-size: 14px;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const Card = () => {
  return (
    <CardContainer>
      <TitleBar>
        <Title>Patient Information</Title>
        <Time>
          <TimeTag>Last seen:</TimeTag>
          10:25 AM, today
          <MoreHorizIcon />
        </Time>
      </TitleBar>
      <Contain>
        <ProfileImg src="/images/person-2.jpg" />
        <Cards />
      </Contain>
    </CardContainer>
  );
};

export default Card;
