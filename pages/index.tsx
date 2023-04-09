import DayPage from "@/containers/DayPage";
import styled from "@emotion/styled";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>묵묵일기</title>
        <meta name="description" content="막막할 땐, 묵묵일기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: 로그인 */}
      <Body>
        <DayPage />
      </Body>
    </>
  );
}

const Body = styled.div`
  min-width: 680px;
`;
