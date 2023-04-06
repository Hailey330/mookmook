import Header from "@/components/Header";
import styled from "@emotion/styled";
import { BackgroundSVG } from "@/assets/svg";
import React from "react";

const DayPage = () => {
  return (
    <Container>
      <Header />
      <BackgroundSVG />
      <>그림 일기 부분</>
      <>원고지 부분</>
    </Container>
  );
};

export default DayPage;

const Container = styled.main``;
