import { LogoSVG } from "@/assets/svg";
import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";

const Header = () => {
  return (
    <Container>
      <LogoSVG />
      <DateText>{moment().format("M월 D일 dddd")}</DateText>
      {/* TODO: 햄버거 버튼 */}
      <MarginWrapper />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 3px solid;
`;

const MarginWrapper = styled.div`
  margin: 0 35px;
`;

const DateText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
