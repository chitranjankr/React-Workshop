import * as React from "react";
import styled from "styled-components";
import ListCards from "./ListCards";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";

const ListContainer = styled.div`
  background: #f7f7f7;
  width: 100%;
  border-bottom: 1px solid #c2c2c2;
`;

const Links = styled.div`
  cursor: pointer;
  width: ${(props) => props.Width || "127px"};
  color: black;
  background: white;
  border: 1px solid #f7f7f7;
  padding: 10px 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 500;
  &:hover {
    margin-bottom: -1px;
    border-left: 1px solid #c2c2c2;
    border-right: 1px solid #c2c2c2;
    border-top: 1px solid #c2c2c2;
    border-bottom: 1px solid white !important;
    color: rgb(0, 160, 240);
    background: white;
  }
  @media (max-width: 1200px) {
    width: ${(props) => props.mobWidth || "100px"};
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  @media (max-width: 1200px) {
    padding-left: 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Card = styled.div`
  padding: 45px;
  background-color: white;
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(5, auto);
  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1300px) {
    grid-template-columns: auto;
  }
`;

const GridItems = styled.div`
  @media (min-width: 1300px) and (max-width: 1500px) {
    grid-column: ${({ spanItem }) => spanItem || ""};
  }
`;

const KeyItem = styled.div`
  background: rgb(232, 245, 254);
  font-weight: 600;
  padding-inline: 15px;
  height: 60px;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

const ValueItem = styled.div`
  background: rgb(247, 247, 247);
  padding-inline: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

const Value = styled.div`
  background: rgb(247, 247, 247);
  padding-inline: 15px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

const LastCardTitle = styled.div`
  margin-top: 30px;
  color: #5e5e5e;
`;

const Button = styled.div`
  width: 154px;
  height: 46px;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  border-radius: 2px;
  background-color: #00a0f0;
  color: white;
  font-size: 14px;
  margin-top: 30px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
  color: gray;
  margin-right: 30px;
  @media (max-width: 760px) {
    margin-right: 10px;
    gap: 10px;
  }
`;

const Text = styled.div``;

const ListLinks = () => {
  const cardLists = [
    { title: "First Surgery", desc: "Yes" },
    { title: "Family History of surgecal complications", desc: "Yes" },
    {
      title: "If Yes, Please provide more details",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis eius repellat, ex dignissimo Sint aperiam, doloremque accusamus repellat pariatur excepturi consequatur?",
    },
  ];

  return (
    <>
      <ListContainer>
        <LinkWrapper>
          <Links>List of prior Surgeries</Links>
          <Links>List of medical Diagnosis</Links>
          <Links>List of Mediatons</Links>
          <Links>Airway Evaluation</Links>
          <Links Width="240px" mobWidth="150px">
            Anesthesia Clearance and Recommendations
          </Links>
        </LinkWrapper>
      </ListContainer>
      <Card>
        {cardLists.map((l, id) => (
          <ListCards key={id} item={l} />
        ))}
        <LastCardTitle>Previous Surgeries</LastCardTitle>
        <GridContainer>
          <GridItems>
            <KeyItem>Surgery Type </KeyItem>
            <ValueItem>Shoulder recontruction</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>Date </KeyItem>
            <ValueItem>january 2008</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>Anesthesia Type</KeyItem>
            <ValueItem>General "breathing tube"</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>Surgical Complications</KeyItem>
            <ValueItem>No</ValueItem>
          </GridItems>
          <GridItems spanItem="2 / span 2">
            <KeyItem>
              Anesthesia Complications(nausea, vomiting, difficult intubation)
            </KeyItem>
            <Value>
              <Text>No</Text>
              <Icons>
                <DeleteIcon />
                <CreateIcon />
              </Icons>
            </Value>
          </GridItems>
        </GridContainer>
        <Button>
          <AddIcon /> Add Surgery
        </Button>
      </Card>
    </>
  );
};

export default ListLinks;
