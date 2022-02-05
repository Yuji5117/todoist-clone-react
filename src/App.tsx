import Header from "./compoents/Templates/Header";
import Home from "./compoents/Pages/Home";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
