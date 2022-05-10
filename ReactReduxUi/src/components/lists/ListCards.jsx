import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 488px;

  margin-bottom: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Title = styled.div`
  background: rgb(232, 245, 254);
  font-weight: 600;
  min-height: 40px;
  padding-inline: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
const Desc = styled.div`
  background: rgb(247, 247, 247);
  padding-inline: 15px;
  min-height: 40px;
  line-height: 30px;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

const ListCards = ({ item }) => {
  return (
    <Wrapper>
      <Title>{item.title}</Title>
      <Desc>{item.desc}</Desc>
    </Wrapper>
  );
};

export default ListCards;
