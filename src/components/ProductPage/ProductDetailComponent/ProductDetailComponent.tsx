import React, { useState, useEffect } from "react";
import {
  ProductDetailContainer,
  Action,
  PriceAndAdd,
  QuantityButton,
} from "./ProductDetailComponent.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addToCart } from "../../../slices/cart";

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ProductDetailProps {
  product: IProductData;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  // const imgURL = "https://i.pinimg.com/564x/c8/1e/69/c81e6970461b22d69b541d429e331f41.jpg";
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const dispatch = useDispatch<AppDispatch>();

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // Reset count and total price when the product changes
    setCount(1);
    setTotalPrice(product.price);
  }, [product]);

  useEffect(() => {
    // Update total price when count changes
    setTotalPrice(product.price * count);
  }, [count, product]);

  return (
    <ProductDetailContainer>
      <img src={product.imageUrl} alt="Product" />
      <h4>{product.productName}</h4>
      <p>{product.description}</p>
      <Action>
        <QuantityButton>
          <button onClick={decrement} disabled={count === 1}>
            -
          </button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </QuantityButton>

                <PriceAndAdd>
                    <h5>Price: ${product.price}</h5>
                    <button>Add to cart</button>
                </PriceAndAdd>
            </Action>
        </ProductDetailContainer>
    );
}

export default ProductDetail;
