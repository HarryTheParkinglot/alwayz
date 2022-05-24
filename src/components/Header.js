import styled from "styled-components";
import arrow from "../img/arrow.png";
import logo from "../img/logo.png";

const Container = styled.div`
  background-color: white;
  padding: 8px 16px;
  width: calc(100% - 32px);
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 0.5px gray;
  position: fixed;
  top: 0px;
  z-index: 2;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 16px;
`;

const Text1 = styled.h2`
  font-size: 15px;
  font-weight: 600px;
  color: rgb(51, 51, 51);
  margin: 0;
`;

const Text2 = styled.h2`
  font-size: 12px;
  color: rgb(189, 189, 189);
  font-weight: bold;
  margin: 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppDownloadButton = styled.div`
  border: 1.5px solid rgb(234, 63, 73);
  width: 100px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(234, 63, 73);
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  margin-left: auto;
  margin-right: 0px;
`;

const AppDownloadButtonText = styled.h2`
  color: rgb(234, 63, 73);
  font-size: 14px;
`;

const AppDownloadButtonImg = styled.img`
  width: 14px;
`;

export default function Header() {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Logo src={logo} />
        <TextGroup>
          <Text1>
            조건없이 모든 상품
            <br />
            무료배송!
          </Text1>
          <Text2>앱으로 더 많은 상품과 혜택받기</Text2>
        </TextGroup>
      </div>
      <AppDownloadButton>
        <AppDownloadButtonText>앱 다운 받기</AppDownloadButtonText>
        <AppDownloadButtonImg src={arrow} />
      </AppDownloadButton>
    </Container>
  );
}
