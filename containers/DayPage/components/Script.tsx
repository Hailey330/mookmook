import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Script = () => {
  return (
    <Container>
      <TopContainer>
        <TitleStyle isTitle={true}>
          <TitleText>도전명</TitleText>
          <TitleInput />
        </TitleStyle>
        <TitleStyle>
          <TitleText>횟수</TitleText>
          <CountStyle>+ 10 -</CountStyle>
        </TitleStyle>
      </TopContainer>
      <ScriptContainer>일기장</ScriptContainer>
    </Container>
  );
};

export default Script;

const Container = styled.div`
  height: 25%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
  border-bottom: 3px solid;
`;

const ScriptContainer = styled.div`
  height: 100%;
`;

const TitleStyle = styled.div<{ isTitle?: boolean }>`
  display: flex;
  width: 50%;
  ${({ isTitle }) =>
    isTitle
      ? css`
          border-right: 3px solid;
        `
      : ``}
`;

const TitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-right: 3px solid;

  font-size: 18px;
  font-weight: 600;
`;

const TitleInput = styled.input`
  border: none;
`;

const CountStyle = styled.div``;
