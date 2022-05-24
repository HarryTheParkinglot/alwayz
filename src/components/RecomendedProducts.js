import styled from "styled-components";
import fullStar from "../img/fullStar.png";
import halfStar from "../img/halfStar.png";
import emptyStar from "../img/emptyStar.png";
import relatedProduct from "../img/relatedProduct.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h1`
  font-size: 18px;
  color: #333333;
  padding: 16px;
`;
const ProductWrapper = styled.div`
  column-gap: 12px;
  padding: 0px 12px;
  column-count: 2;
`;
const Product = styled.div`
  margin-bottom: 24px;
`;
const Img = styled.img`
  width: 180px;
  height: 180px;
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
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-bottom: 6px;
  max-height: 42.35px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const BeforePrice = styled.h2`
  text-decoration-line: line-through;
  color: rgb(153, 153, 153);
  font-weight: normal;
  margin-left: 4px;
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
  width: 16px;
  height: 16px;
`;

export default function RecommendedProducts() {
  const productData = [
    {
      name: "숨 프리미엄 물티슈 10장 가성최고!1234578901234890",
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
      <HeaderText>올웨이즈 추천 상품</HeaderText>
      <ProductWrapper>
        {productData.map((data, key) => {
          return (
            <Product key={key}>
              <Img src={data.img} />
              <div style={{ height: 168 }}>
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
                  <BeforePrice style={{ fontSize: "14px" }}>
                    {data.beforePrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </BeforePrice>
                </div>
                <Price>
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </Price>
                <Grade>
                  {data.score.map((score) => {
                    if (score === 2) return <StarIcon src={fullStar} />;
                    else if (score === 1) return <StarIcon src={halfStar} />;
                    else if (score === 0) return <StarIcon src={emptyStar} />;
                  })}
                  ({data.countReview})
                </Grade>
              </div>
            </Product>
          );
        })}
      </ProductWrapper>
    </Container>
  );
}
