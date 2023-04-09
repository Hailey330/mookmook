import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

const Drawing = () => {
  // TODO: 클릭한 돌맹이 -> 깨진 이미지로 변경
  return (
    <Container>
      <TodoStyle onClick={(event) => console.log(event)} />
      <DoneStyle />
    </Container>
  );
};

export default Drawing;

const Container = styled.div`
  height: 525px;
  border-bottom: 3px solid;
`;

const TodoStyle = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
`;

const DoneStyle = styled.div``;
