import { LogoSVG } from "@/assets/svg";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <LogoSVG />
      <>날짜</>
      <>버튼</>
    </Container>
  );
};

export default Header;

const Container = styled.div``;

// const LogoImage = styled(LogoSVG)``;
