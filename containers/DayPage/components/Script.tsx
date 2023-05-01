import { DownSquareSVG, UpSquareSVG } from "@/assets/svg";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const Script = () => {
  const [count, setCount] = useState(10);

  const onClickPlus = () => {
    setCount((prev) => (prev += 1));
  };

  const onClickMinus = () => {
    setCount((prev) => (prev -= 1));
  };

  return (
    <Container>
      <TopContainer>
        <TitleStyle isTitle={true}>
          <TitleText>도전명</TitleText>
          <TitleInput placeholder="오늘의 도전은?" />
        </TitleStyle>
        <TitleStyle>
          <TitleText>횟수</TitleText>
          <CountBox>
            <CountButtonStyle onClick={onClickMinus}>
              <DownSquareSVG />
            </CountButtonStyle>
            <CountText>{count}</CountText>
            <CountButtonStyle onClick={onClickPlus}>
              <UpSquareSVG />
            </CountButtonStyle>
          </CountBox>
        </TitleStyle>
      </TopContainer>
      <ScriptContainer>
        <ScriptBox>
          {/* TODO: 첫번째 배열 map */}
          <WordSpace>1</WordSpace>
          <WordSpace>2</WordSpace>
          <WordSpace>3</WordSpace>
          <WordSpace>4</WordSpace>
          <WordSpace>5</WordSpace>
          <WordSpace lastWord>6</WordSpace>
        </ScriptBox>
        <ScriptBox>
          {/* TODO: 두번째 배열 map */}
          <WordSpace>1</WordSpace>
          <WordSpace>2</WordSpace>
          <WordSpace>3</WordSpace>
          <WordSpace>4</WordSpace>
          <WordSpace>5</WordSpace>
          <WordSpace lastWord>6</WordSpace>
        </ScriptBox>
        <ScriptBox lastScript>
          <WordSpace>1</WordSpace>
          <WordSpace>2</WordSpace>
          <WordSpace>3</WordSpace>
          <WordSpace>4</WordSpace>
          <WordSpace>5</WordSpace>
          <WordSpace lastWord>6</WordSpace>
        </ScriptBox>
      </ScriptContainer>
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
  height: 66px;
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
  width: 33%;
  border-right: 3px solid;

  font-size: 18px;
  font-weight: 600;
`;

const TitleInput = styled.input`
  border: none;
  width: 67%;
`;

const CountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67%;
`;

const CountButtonStyle = styled.button`
  margin: 8px;
  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const CountText = styled.span`
  width: 18px;
  text-align: center;
  font-size: 18px;
`;

const ScriptBox = styled.div<{ lastScript?: boolean }>`
  display: flex;
  height: 66px;
  border-bottom: ${({ lastScript }) => (lastScript ? "none" : "3px solid")};
`;

const WordSpace = styled.div<{ lastWord?: boolean }>`
  width: 30%;
  font-size: 18px;
  border-right: ${({ lastWord }) => (lastWord ? "none" : "3px solid")};
`;
