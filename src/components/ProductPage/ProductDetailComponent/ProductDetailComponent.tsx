import { ProductDetailContainer, Action, PriceAndAdd, QuantityButton } from "./ProductDetailComponent.styled";
import { useState } from 'react';

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ProductDetailProps {
    product: IProductData ;
}

const ProductDetail : React.FC<ProductDetailProps> = ({ product }) => {
    const imgURL = "https://i.pinimg.com/564x/c8/1e/69/c81e6970461b22d69b541d429e331f41.jpg";
    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <ProductDetailContainer>
            <img src={imgURL} alt="Product" />
            <h4>{product.productName}</h4>
            <p>{product.description}</p>
            <Action>
                <QuantityButton>
                    <button onClick={decrement} disabled={count === 1}>-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                </QuantityButton>

                <PriceAndAdd>
                    <p>Price: ${product.price}</p>
                    <button>Add to cart</button>
                </PriceAndAdd>
            </Action>
        </ProductDetailContainer>
    );
}

export default ProductDetail;
