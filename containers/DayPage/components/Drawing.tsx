import styled from "@emotion/styled";

const Drawing = () => {
  // TODO: 클릭한 돌맹이 -> 깨진 이미지로 변경
  // TODO: 이 영역 안에서는 마우스 커서 변경
  return (
    <Container>
      <TodoStyle onClick={(event) => console.log(event)} />
      <DoneStyle />
    </Container>
  );
};

export default Drawing;

const Container = styled.div`
  height: 456px;
  border-bottom: 3px solid;
`;

const TodoStyle = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid purple;

  cursor: pointer;
`;

const DoneStyle = styled.div``;
