import styled from "styled-components";
import productdetails from "../img/productdetails.jpg";
import productdetails2 from "../img/productdetails2.jpg";
import productdetails3 from "../img/productdetails3.jpg";
import productdetails4 from "../img/productdetails4.jpg";

import kakao from "../img/kakao.png";
import { ReactComponent as Svg_arrow } from "../img/arrow.svg";

const Container = styled.div``;

const HeaderText = styled.h1`
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: bold;
  padding: 16px;
`;

const ProductDetailImg = styled.img`
  width: 100%;
`;

const MultiGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const KakaoAsk = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333333;
  padding: 8px 16px;
  height: 36px;
  border: 1px solid rgb(224, 224, 224);
  margin: 8px 16px;
  border-radius: 4px;
  background-color: white;
`;
const KakaoImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;
const PolicyGroup = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 0px;
  background-color: white;
`;

const ThickLine = styled.div`
  height: 8px;
  background-color: #f5f5f5;
  width: 100%;
`;

export default function ProductDetails() {
  return (
    <Container>
      <HeaderText>상품 상세 설명</HeaderText>
      <ProductDetailImg src={productdetails} />
      <ProductDetailImg src={productdetails2} />
      <ProductDetailImg src={productdetails3} />
      <ProductDetailImg src={productdetails4} />

      <MultiGroup>
        <KakaoAsk>
          <KakaoImg src={kakao} />
          카카오톡으로 1:1 문의하기
        </KakaoAsk>
        <ThickLine />
        <PolicyGroup>
          <HeaderText>배송/교환/반품 정책</HeaderText>
          <Svg_arrow width={18} height={18} fill={"#C2C2C2"} />
        </PolicyGroup>
        <ThickLine />
      </MultiGroup>
    </Container>
  );
}
