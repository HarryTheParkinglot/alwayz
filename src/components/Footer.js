import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as Svg_heart } from "../img/heart.svg";
import { ReactComponent as Svg_heart_fill } from "../img/heart_fill.svg";

const Container = styled.div`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 10;
  bottom: 0px;
  height: 64px;
  display: flex;
  justify-content: space-around;
`;
const LikeBtn = styled.button`
  padding: 10px 17px;
  white-space: nowrap;
`;
const BuyBtn = styled.button`
  margin: 8px;
  margin-left: 0px;
  margin-right: 8px;
  padding: 1px 6px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  color: white;
  width: 100%;
  border-radius: 4px;
  * {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default function Footer() {
  const [isHeart, setIsHeart] = useState(false);
  const iconProps = {
    onClick: () => {
      setIsHeart(!isHeart);
    },
    width: 19,
    height: 19,
    fill: "#EA3F49",
  };
  return (
    <Container>
      <LikeBtn>
        {isHeart ? (
          <Svg_heart_fill {...iconProps} />
        ) : (
          <Svg_heart {...iconProps} fill={"#999999"} />
        )}
        <h3 style={{ color: "#999999", fontSize: "13.3px", fontWeight: "400" }}>
          찜하기
        </h3>
      </LikeBtn>
      <BuyBtn backgroundColor="rgb(248, 196, 84)">
        <h1>14,900원</h1>
        <h1>혼자 구매하기</h1>
      </BuyBtn>
      <BuyBtn backgroundColor="rgb(234, 63, 73)">
        <h1>6,996원</h1>
        <h1>2인 팀구매 열기</h1>
      </BuyBtn>
    </Container>
  );
}
