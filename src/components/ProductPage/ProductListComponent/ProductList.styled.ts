import { styled } from "styled-components";

export const ProductList = styled.div`
  width: 39%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ProductItemImg = styled.img`
  width: 30%;
  height: 100%;
`;

export const ProductItemRight = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

export const ProductItemPriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ProductItemPriceDetailATag = styled.a`
  text-decoration: none;
`;
