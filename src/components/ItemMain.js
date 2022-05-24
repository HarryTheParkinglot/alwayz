import styled from "styled-components";
import product from "../img/product.jpg";
import fullStar from "../img/fullStar.png";
import halfStar from "../img/halfStar.png";
import price from "../img/price.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainImg = styled.img`
  object-fit: cover;
  padding-right: 0%;
  height: 100%;
  width: 100%;
  margin-top: 72px;
  z-index: 0;
`;

const Price = styled.img`
  position: absolute;
  left: 12px;
  right: 12px;
  width: 64px;
  margin-top: 84px;
  z-index: 1;
`;

const Title = styled.div`
  width: calc(100% - 32px);
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 12px;
  font-weight: 400;
`;

const Description = styled.div`
  width: calc(100% - 16px);
  margin-left: 16px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  margin-top: 8px;
`;

const ThinLine = styled.div`
  height: 0.5px;
  width: calc(100% - 32px);
  background-color: rgb(224, 224, 224);
  margin-left: 16px;
  margin-right: 16px;
`;

const ThickLine = styled.div`
  height: 12px;
  background-color: #f5f5f5;
  width: 100%;
`;

const TagGroup = styled.div`
  display: flex;
  padding-top: 2px;
`;

const Tags = styled.div`
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 700;
`;

const ImgCounter = styled.div`
  position: relative;
  float: right;
  bottom: 40px;
  right: 16px;
  width: 17px;
  padding-left: 12px;
  padding-right: 12px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.533);
  border-radius: 16px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const ImgGroup = styled.div``;

const PriceGroup = styled.div`
  display: flex;
  width: calc(100% - 32px);
  justify-content: space-between;
  padding-left: 16px;
`;
const PriceText1 = styled.p`
  font-size: 16px;
  color: rgb(102, 102, 102);
  font-weight: bold;
`;
const PriceText2 = styled.p`
  text-decoration-line: line-through;
  color: rgb(153, 153, 153);
  font-size: 16px;
  vertical-align: top;
  padding-left: 5px;
`;

const PriceText3 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgb(234, 63, 73);
  margin-bottom: 5px;
`;

const PriceText4 = styled.p`
  float: right;
  font-size: 14px;
  color: rgb(102, 102, 102);
  font-weight: bold;
  font-weight: 700;
`;

const LineGroup = styled.div`
  flex-direction: column;
  width: 100%;
  margin-top: -16px;
`;

const RatingGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const RatingStar = styled.img`
  width: 20px;
  height: 20px;
`;

export default function ItemMain() {
  return (
    <Container>
      <ImgGroup>
        <MainImg src={product} />
        <Price src={price} />
        <ImgCounter>1/1</ImgCounter>
      </ImgGroup>

      <PriceGroup>
        <LineGroup>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <PriceText1>53%</PriceText1>
              <PriceText2>14,900원</PriceText2>
            </div>
            <RatingGroup>
              <RatingStar src={fullStar} />
              <RatingStar src={fullStar} />
              <RatingStar src={fullStar} />
              <RatingStar src={fullStar} />
              <RatingStar src={halfStar} />
              <PriceText4>(8585)</PriceText4>
            </RatingGroup>
          </div>
          <PriceText3>6,996원</PriceText3>
        </LineGroup>
      </PriceGroup>

      <TagGroup>
        <Tags
          style={{ backgroundColor: "rgb(236, 146, 150)", marginLeft: "14px" }}
        >
          2인 팀구매
        </Tags>
        <Tags style={{ backgroundColor: "rgb(189, 189, 189)" }}>무료 배송</Tags>
        <Tags style={{ backgroundColor: "rgb(248, 196, 84)" }}>
          국내 최저가
        </Tags>
      </TagGroup>

      <Title>[천연펄프] 숨 소프트블랙 두루마리 (3겹) 30m * 30롤</Title>

      <ThinLine />

      <Description>팀구매 결제 후 24시간 내 1명 모집</Description>
      <Description>실패 시 재도전 혹은 결제 취소 가능</Description>
      <Description style={{ marginBottom: "12px" }}>
        롯데택배, 3일 소요
      </Description>

      <ThickLine />
    </Container>
  );
}
