import React from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      <MenuList>
        <li>
          <IoIosMenu />
        </li>
        <li>
          <AiOutlineHome />
        </li>
        <li>
          <input type="text" />
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
`;

const MenuElement = styled.li``;
