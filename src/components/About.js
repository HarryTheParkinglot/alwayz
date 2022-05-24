import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 38px);
  display: flex;
  flex-direction: column;
  padding: 19px 19px 16px 16px;
  background-color: rgb(245, 245, 245);
  h1 {
    font-size: 16px;
    color: rgb(189, 189, 189);
    font-weight: 300;
  }
  margin-bottom: 64px;
`;

export default function About() {
  return (
    <Container>
      <h1>대표자:강재윤</h1>
      <h1>법인명: 주식회사 레브잇</h1>
      <h1>사업자등록번호: 179-81-02225</h1>
      <h1>주소: 서울특별시 관악구 남부순환로 220길 39</h1>
      <h1>통신판매번호: 2022-서울관악-0341</h1>
    </Container>
  );
}
