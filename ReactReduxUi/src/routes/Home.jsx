import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import Card from "../components/card/Card";
import Sidebar from "../components/sidebar/Sidebar";
import ListLinks from "../components/lists/ListLinks";

const Container = styled.div`
  width: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const FlexWrapper = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const SidebarContainer = styled.div`
  height: calc(100vh - 110px);
  position: sticky;
  top: 90px;
  background-color: rgb(232, 245, 254);
  padding: 25px 15px 15px 15px;
  width: ${({ sidebarWidth }) => sidebarWidth};
  @media (max-width: 760px) {
    display: none;
  }
`;

const Home = () => {
  const At800 = useMediaQuery("(min-width:920px)");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setToggle(At800);
  }, [At800]);

  const handleTogggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <SidebarContainer sidebarWidth={toggle ? "360px" : "70px"}>
        <Sidebar click={toggle} handleTogggle={handleTogggle} />
      </SidebarContainer>
      <FlexWrapper>
        <Card />
        <ListLinks />
      </FlexWrapper>
    </Container>
  );
};

export default Home;
