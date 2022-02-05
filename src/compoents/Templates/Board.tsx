import styled from "styled-components";
import Container from "../Organisms/Board/Container";
import Header from "../Organisms/Board/Header";

const Board = () => {
  return (
    <Wrapper>
      <Header />
      <Container />
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  /* background-color: green; */
  flex-basis: 75%;
`;
