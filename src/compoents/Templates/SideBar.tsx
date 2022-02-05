import { FiInbox } from "react-icons/fi";
import { BsCalendarDate } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { ImFilter } from "react-icons/im";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <CategoryList>
            <CategoryElement>
              <FiInbox size={18} color={"#568EE3"} />
              Inbox
            </CategoryElement>
            <CategoryElement>
              <BsCalendarDate size={18} color={"#44A15D"} />
              Today
            </CategoryElement>
            <CategoryElement>
              <BsCalendar3 size={18} color={"#692FC2"} />
              Upcoming
            </CategoryElement>
            <CategoryElement>
              <ImFilter size={18} color={"#EB8909"} />
              Filter / Label
            </CategoryElement>
          </CategoryList>
        </div>
        <div>
          <BoardList>
            <BoardElement>Favorates</BoardElement>
            <BoardElement>Projects</BoardElement>
          </BoardList>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  flex-basis: 25%;
  background-color: #fafafa;
`;

const Container = styled.div`
  padding: 20px 0 20px 50px;
`;

const CategoryList = styled.div`
  list-style: none;

  & * {
    padding: 10px 0;
    text-align: left;
  }
`;

const CategoryElement = styled.div`
  padding-left: 10px;
  font-size: 16px;

  & * {
    padding: 0 10px 0 0;
    vertical-align: middle;
  }

  :hover {
    background-color: #ececec;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const BoardList = styled.div`
  list-style: none;

  & * {
    margin: 10px 0;
    text-align: left;
  }
`;

const BoardElement = styled.li`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0 10px 10px;

  :hover {
    cursor: pointer;
  }
`;
