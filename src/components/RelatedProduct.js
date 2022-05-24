import styled from "styled-components";
import fullStar from "../img/fullStar.png";
import halfStar from "../img/halfStar.png";
import emptyStar from "../img/emptyStar.png";
import relatedProduct from "../img/relatedProduct.png";

const Container = styled.div`
  width: 100%;
  display: block;
  flex-direction: column;
`;

const HeaderText = styled.h1`
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: bold;
  padding: 16px;
`;

const ThickLine = styled.div`
  height: 12px;
  background-color: #f5f5f5;
  width: 100%;
`;

const ProductWrapper = styled.div`
  display: flex;
  overflow: auto;
  margin-top: 4px;
  width: calc(100% - 16px);
  padding-left: 16px;
  padding-bottom: 12px;
`;
const Product = styled.div`
  padding-right: 16px;
`;
const Img = styled.img`
  width: 158px;
  height: 158px;
  border-radius: 8px;
`;
const Tag = styled.div`
  height: 20px;
  font-size: 10px;
  font-weight: bold;
  padding: 0px 8px;
  margin-right: 4px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  display: flex;
  align-items: center;
  color: white;
  border-radius: 4px;
`;
const Name = styled.h2`
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 158px;
  margin-bottom: 6px;
`;
const BeforePrice = styled.h2`
  text-decoration-line: line-through;
  color: rgb(153, 153, 153);
  font-weight: normal;
  margin-left: 4px;
  font-size: 14px;
`;
const Price = styled.h1`
  color: rgb(234, 63, 73);
  font-size: 16px;
`;
const Grade = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 10px;
  padding-bottom: 4px;
  padding-left: 2px;
  color: rgb(153, 153, 153);
  font-weight: bold;
`;
const StarIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export default function Header() {
  const productData = [
    {
      name: "숨 프리미엄 물티슈 10장 가성비 최고!",
      tag: [
        {
          name: "2인 팀구매",
          color: "rgb(236, 146, 150)",
        },
        {
          name: "국내 최저가",
          color: "rgb(248, 196, 84)",
        },
      ],
      price: 6900,
      percent: 56,
      beforePrice: 15900,
      img: relatedProduct,
      score: [2, 2, 2, 2, 1],
      countReview: 11872,
    },
    {
      name: "선바이저 휴지걸이",
      tag: [
        {
          name: "2인 팀구매",
          color: "rgb(236, 146, 150)",
        },
        {
          name: "무료 배송",
          color: "rgb(189, 189, 189)",
        },
      ],
      price: 6900,
      percent: 23,
      beforePrice: 8900,
      img: "https://always-bucket-dev.s3.us-west-1.amazonaws.com/39059834-a518-4c9b-9cef-846873eb9b74_original.jpg",
      score: [2, 2, 2, 2, 2],
      countReview: 3,
    },
    {
      name: "스위트몬스터 피톤치드를 싼 가격에!",
      tag: [
        {
          name: "2인 팀구매",
          color: "rgb(236, 146, 150)",
        },
        {
          name: "무료 배송",
          color: "rgb(189, 189, 189)",
        },
      ],
      price: 16500,
      percent: 29,
      beforePrice: 23100,
      img: "https://always-bucket-dev.s3.us-west-1.amazonaws.com/c6238042-3c9b-40a1-9401-0c1d4a46b50a_original.jpg",
      score: [2, 2, 2, 1, 0],
      countReview: 4,
    },
  ];

  return (
    <Container>
      <HeaderText>함께 많이 보는 상품</HeaderText>
      <ThickLine />
      <ProductWrapper>
        {productData.map((data, key) => {
          return (
            <Product key={key}>
              <Img src={data.img} />
              <div style={{ display: "flex", margin: "4px 0px" }}>
                {data.tag.map((tag, key) => {
                  if (key < 2) {
                    return (
                      <Tag key={key} color={tag.color}>
                        {tag.name}
                      </Tag>
                    );
                  }
                })}
              </div>
              <Name>{data.name}</Name>
              <div style={{ display: "flex" }}>
                <h2 style={{ color: "rgb(102, 102, 102)", fontSize: "14px" }}>
                  {data.percent}%
                </h2>
                <BeforePrice>
                  {data.beforePrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </BeforePrice>
              </div>
              <Price>
                {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              </Price>
              <Grade>
                {data.score.map((score, key) => {
                  if (score === 2) return <StarIcon key={key} src={fullStar} />;
                  else if (score === 1)
                    return <StarIcon key={key} src={halfStar} />;
                  else if (score === 0)
                    return <StarIcon key={key} src={emptyStar} />;
                })}
                ({data.countReview})
              </Grade>
            </Product>
          );
        })}
      </ProductWrapper>
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(245, 245, 245)",
          height: 8,
        }}
      />
    </Container>
  );
}
