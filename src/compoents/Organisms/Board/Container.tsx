import styled from "styled-components";
import { GoDiffAdded } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const Container = () => {
  const [title, setTitle] = useState<string>("");
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
      <SectionContainer>
        {title === "" && (
          <AddBox onClick={() => setEditMode(true)}>
            <GoDiffAdded />
            <AddText>Add Section</AddText>
          </AddBox>
        )}
        {isEditMode && (
          <TitleForm>
            <TitleInput
              type="text"
              value={tmpTitle}
              onChange={onChangeTitle}
              placeholder="Name This Section"
            />
            <ButtonContainer>
              <AddButton onClick={onSaveTitle}>Add Section</AddButton>
              <CancelButton onClick={onCancelTitle}>Cancel</CancelButton>
            </ButtonContainer>
          </TitleForm>
        )}
        <div>
          <h2>{title}</h2>
        </div>

        {title && (
          <AddBox onClick={() => setEditMode(true)}>
            <IoMdAdd />
            <AddText>Add Task</AddText>
          </AddBox>
        )}
      </SectionContainer>
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  padding: 10px 50px;
`;

const SectionContainer = styled.div`
  width: 260px;
`;

const AddBox = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #fafafa;

  :hover > * {
    color: #db4c3f;
  }
`;

const AddText = styled.p`
  color: #808080;
  padding-left: 15px;
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

const AddButton = styled.button`
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
