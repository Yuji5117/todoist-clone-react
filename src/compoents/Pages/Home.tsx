import styled from "styled-components";
import Borad from "../Templates/Board";
import SideBar from "../Templates/SideBar";

const Home = () => {
  return (
    <Wrapper>
      <SideBar />
      <Borad />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
