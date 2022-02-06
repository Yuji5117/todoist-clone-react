import styled from "styled-components";
import { GoComment } from "react-icons/go";
import { MdPersonAddAlt } from "react-icons/md";
import { BiSliderAlt } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState<string>("テスト");
  const [tmpTitle, setTmpTitle] = useState<string>(title);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const onSaveTitle = () => {
    setTitle(tmpTitle);
    setEditMode(false);
  };

  const onCancelTitle = () => {
    setTmpTitle(title);
    setEditMode(false);
  };

  const onChangeTitle = (e: any) => {
    e.preventDefault();
    setTmpTitle(e.target.value);
  };

  return (
    <Wrapper>
      {!isEditMode && <Title onClick={() => setEditMode(true)}>{title}</Title>}
      {isEditMode && (
        <TitleForm>
          <TitleInput type="text" value={tmpTitle} onChange={onChangeTitle} />
          <ButtonContainer>
            <SaveButton onClick={onSaveTitle}>Save</SaveButton>
            <CancelButton onClick={onCancelTitle}>Cancel</CancelButton>
          </ButtonContainer>
        </TitleForm>
      )}
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

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: #ececec;
    border-radius: 3px;
  }
`;

const TitleForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  border: 1px solid #808080;
  border-radius: 5px;
  font-size: 24px;
  padding: 5px 5px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const SaveButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  background-color: #db4c3f;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  margin-right: 5px;
`;

const CancelButton = styled.button`
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;

  :hover {
    text-decoration: underline;
  }
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
  cursor: pointer;

  & * {
    font-weight: 200;
    padding: 0 10px 0 0;
    vertical-align: middle;
  }

  :hover {
    background-color: #ececec;
    border-radius: 3px;
  }

  :last-child > * {
    padding-right: 0;
  }
`;
