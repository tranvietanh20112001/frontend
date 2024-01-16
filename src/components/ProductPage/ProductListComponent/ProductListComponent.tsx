import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListStyle.css";
import * as S from './ProductList.styled';
import ProductItems from "./ProductItemsComponent/ProductItems";

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
  const [selectedProduct, setSelectedProduct] = useState<IProductData | null>(null);

  const fetchInfo = () => {
    return axios.get(productUrl).then((res) => setProductData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    if (!selectedProduct && productData.length > 0) {
      setSelectedProduct(productData[0]);
    }
  }, [selectedProduct, productData]);

  return (
    <S.ProductList>
      {productData.map((value, index) => {
        return (
          <ProductItems product={value} index={index} onSelectProduct={onSelectProduct}/>
        );
      })}
    </S.ProductList>
  );
}

export default ProductList;