import React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;

const Title = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;

const SearchBar = styled.input`
  border: none;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Dot = styled.span`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: ${({ Color }) => Color};
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const SearchWrap = styled.div`
  padding-inline: 10px;
  margin: 15px 0;
  border-radius: 5px;
  height: 40px;
  display: flex;
  background-color: white;
  align-items: center;
`;

const Sidebar = ({ handleTogggle, click }) => {
  const PatientsData = [
    {
      Name: "Sara Smith",
      date: "Jan 9, 2020",
      Photo: "/images/person-2.jpg",
      cleared: true,
    },
    {
      Name: "James Johnson",
      date: "No Clearance",
      Photo: "/images/person-1.jpg",
      cleared: false,
    },
    {
      Name: "Patrice Page",
      date: "Aug 10, 2019",
      Photo: "/images/person-4.jpg",
      cleared: true,
    },
    {
      Name: "Derek Diamon",
      date: "Nov 18, 2020",
      Photo: "/images/person.jpg",
      cleared: true,
    },
  ];

  const m10 = {
    marginBottom: "15px",
  };

  return (
    <>
      <TitleWrapper>
        {click && <Title>Patients</Title>}
        <ArrowBackIosNewIcon
          onClick={() => handleTogggle()}
          className={`arrow-style ${!click && "arrow-rotate"}`}
        />
      </TitleWrapper>
      {click && (
        <SearchWrap>
          <SearchBar placeholder="Search Patient" />
          <SearchIcon className="search-icon" />
        </SearchWrap>
      )}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "rgb(232, 245, 254)" }}
      >
        {PatientsData.map((item, i) => (
          <span key={i}>
            {click ? (
              <ListItem className="list-items">
                <ListItemAvatar>
                  <Avatar src={item.Photo} alt="person" />
                </ListItemAvatar>
                <ListItemText primary={item.Name} secondary={item.date} />
                <Dot Color={item.cleared ? "#3acf61" : "red"}></Dot>
              </ListItem>
            ) : (
              <Avatar style={!click ? m10 : {}} src={item.Photo} alt="person" />
            )}
          </span>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
