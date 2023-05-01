import styled from "@emotion/styled";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

const Drawing = () => {
  // TODO: 클릭한 돌맹이 -> 깨진 이미지로 변경
  // TODO: 이 영역 안에서는 마우스 커서 변경
  const nodeRef = useRef(null);
  const nodeRef1 = useRef(null);

  const [dragState, setDragState] = useState({
    activeDrags: 0,
  });

  const onStart = () => {
    setDragState((prev) => ({
      activeDrags: (prev.activeDrags += 1),
    }));
  };

  const onStop = () => {
    setDragState((prev) => ({
      activeDrags: (prev.activeDrags -= 1),
    }));
  };

  const dragHandlers = { onStart, onStop };

  return (
    <Container>
      {/* TODO: map */}
      <Draggable nodeRef={nodeRef} bounds="parent" {...dragHandlers}>
        <TodoStyle ref={nodeRef} onClick={(event) => console.log(event)}>
          돌맹이2
        </TodoStyle>
      </Draggable>
      <Draggable nodeRef={nodeRef1} bounds="parent" {...dragHandlers}>
        <TodoStyle ref={nodeRef1} onClick={(event) => console.log(event)}>
          돌맹이3
        </TodoStyle>
      </Draggable>
    </Container>
  );
};

export default Drawing;

const Container = styled.div`
  width: 100%;
  height: 456px;
  position: relative;
  border-bottom: 3px solid;
`;

const TodoStyle = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid purple;

  cursor: pointer;
`;
