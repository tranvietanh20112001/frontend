import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListStyle.css";
import * as S from './ProductList.styled';


interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

export default function ProductList() {
  const productUrl = "http://localhost:4000/api/products";
  const [productData, setProductData] = useState<Array<IProductData>>([]);

  const fetchInfo = () => {
    return axios.get(productUrl).then((res) => setProductData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  console.log(productData);

  return (
    <S.ProductList>
      {productData.map((value, index) => {
        return (
          <S.ProductItem>
            <S.ProductItemImg
              src="https://avatars.githubusercontent.com/u/95759256?v=4"
              alt=""
            />
            <S.ProductItemRight className="product-item-right">
              <div>
                <b>{value.productName}</b>
                <p>{value.description}</p>
              </div>
              <S.ProductItemPriceDetail>
                <h4 style={{margin:0}}>${value.price}</h4>
                <S.ProductItemPriceDetailATag href="">
                  Details
                </S.ProductItemPriceDetailATag>
              </S.ProductItemPriceDetail>
            </S.ProductItemRight>
          </S.ProductItem>
        );
      })}
    </S.ProductList>
  );
}
