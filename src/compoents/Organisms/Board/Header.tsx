import styled from "styled-components";
import { GoComment } from "react-icons/go";
import { MdPersonAddAlt } from "react-icons/md";
import { BiSliderAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const Header = () => {
  return (
    <Wrapper>
      <div>タイトル</div>
      <div>
        <MenuList>
          <MenuElement>
            <GoComment size={20} />
            Comments
          </MenuElement>
          <MenuElement>
            <MdPersonAddAlt size={20} />
            Share
          </MenuElement>
          <MenuElement>
            <BiSliderAlt size={20} />
            View
          </MenuElement>
          <MenuElement>
            <FiMoreHorizontal size={20} />
          </MenuElement>
        </MenuList>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
`;

const MenuList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;

  & > * {
    margin-right: 20px;
    font-weight: 200;
  }
`;

const MenuElement = styled.li`
  font-size: 14px;
  padding: 3px;

  & * {
    font-weight: 200;
    padding: 0 10px 0 0;
    vertical-align: middle;
  }

  :hover {
    background-color: #ececec;
    border-radius: 3px;
    cursor: pointer;
  }
`;
