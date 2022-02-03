import styled from "styled-components";
import Borad from "../Borad";
import SideBar from "../SideBar";

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
  height: 100vh;
  width: 100%;
  display: flex;
`;
