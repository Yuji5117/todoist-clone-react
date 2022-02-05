import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div>タイトル</div>
      <div>menu</div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
`;
