import styled from "styled-components";
import Menu from "./Menu";

const Header = () => {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  height: 43px;
  background-color: #db4c3f;
`;
