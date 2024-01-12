import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductListStyle.css";

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
    <div className="product-list">
      {productData.map((value, index) => {
        return (
          <div className="product-item">
            <img
              src="https://avatars.githubusercontent.com/u/95759256?v=4"
              alt=""
              className="product-item-img"
            />
            <div className="product-item-right">
              <div>
                <b>{value.productName}</b>
                <p>{value.description}</p>
              </div>
              <div className="product-item-price-detail">
                <h4 style={{margin:0}}>${value.price}</h4>
                <a href="">
                  Details
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
