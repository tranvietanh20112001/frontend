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

interface ProductListProps {
  onSelectProduct: (product: IProductData) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const productUrl = "http://localhost:4000/api/products";
  const [productData, setProductData] = useState<Array<IProductData>>([]);


  const fetchInfo = () => {
    return axios.get(productUrl).then((res) => setProductData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <S.ProductList>
      {productData.map((value, index) => {
        return (
          <S.ProductItem>
            <S.ProductItemImg
              src="https://i.pinimg.com/564x/c8/1e/69/c81e6970461b22d69b541d429e331f41.jpg"
              alt=""
            />
            <S.ProductItemRight className="product-item-right">
              <div>
                <b>{value.productName}</b>
                <p>{value.description}</p>
              </div>
              <S.ProductItemPriceDetail>
                <h4 style={{margin:0}}>${value.price}</h4>
                <button onClick={() => onSelectProduct(value)}>Details</button>
              </S.ProductItemPriceDetail>
            </S.ProductItemRight>
          </S.ProductItem>
        );
      })}
    </S.ProductList>
  );
}

export default ProductList;