import React from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      <MenuList>
        <li>
          <IoIosMenu size={20} color="#ffffff" />
        </li>
        <li>
          <AiOutlineHome size={20} color="#ffffff" />
        </li>
        <li>
          <SearchInput type="text" placeholder="Search" />
        </li>
      </MenuList>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 42px;
`;
const MenuList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;

  & > * {
    padding-right: 20px;
  }
`;

const MenuElement = styled.li``;

const SearchInput = styled.input`
  padding: 5px 0 5px 34px;
  border: 1px solid transparent;
  background-color: hsla(0, 0%, 100%, 0.2);
  border-radius: 3px;

  ::placeholder {
    color: #ffffff;
  }
`;
