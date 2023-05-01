import { BackgroundSVG } from "@/assets/svg";
import Header from "@/components/Header";
import styled from "@emotion/styled";
import Drawing from "./components/Drawing";
import Script from "./components/Script";

const DayPage = () => {
  return (
    <Container>
      <BackgroundSVG />
      <ContentStyle>
        <Header />
        <Drawing />
        <Script />
      </ContentStyle>
    </Container>
  );
};

export default DayPage;

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 30px 30px 0;
`;

const ContentStyle = styled.div`
  width: 420px;
  height: 820px;
  margin: 90px;
  position: absolute;
`;
