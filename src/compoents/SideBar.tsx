import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <CategoryList>
            <CategoryElement>Inbox</CategoryElement>
            <CategoryElement>Today</CategoryElement>
            <CategoryElement>Upcoming</CategoryElement>
            <CategoryElement>Filter / Label</CategoryElement>
          </CategoryList>
        </div>
        <div>
          <BoardList>
            <BoardElement>Favorates</BoardElement>
            <BoardElement>Projects</BoardElement>
          </BoardList>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  flex-basis: 25%;
  background-color: #fafafa;
`;

const Container = styled.div`
  padding: 20px 0 20px 50px;
`;

const CategoryList = styled.div`
  list-style: none;

  & * {
    padding: 10px 0;
    text-align: left;
  }
`;

const CategoryElement = styled.div`
  font-size: 16px;

  :hover {
    background-color: #ececec;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const BoardList = styled.div`
  list-style: none;

  & * {
    margin: 10px 0;
    text-align: left;
  }
`;

const BoardElement = styled.li`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;

  :hover {
    cursor: pointer;
  }
`;
