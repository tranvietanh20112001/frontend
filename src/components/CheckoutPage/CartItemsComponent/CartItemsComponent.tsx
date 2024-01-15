
import { useNavigate } from "react-router-dom";
import { QuantityButton } from "../../ProductPage/ProductDetailComponent/ProductDetailComponent.styled";
import {
  Container,
  Header,
  SEContainer,
  LeftContent,
  RightContent,
  OrderInfoContainer,
  OrderTitle,
  OrderSubtitle,
  OrderTotal,
  Paragraph,
  ButtonContainer,
  CheckoutButton,
  ContinueShoppingButton,
  ContainerCon,
  ParagraphLeft,
  ParagraphRight,
} from "./CartItemsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./CartItemStyle.css";
import { useState} from "react";

const CartItemsComponent = () => {
  const navigate = useNavigate();

  const { cart } = useSelector((state: RootState) => state.cart);

  console.log(cart);

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const [count, setCount] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(cartItem.product.price);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

//   useEffect(() => {
//     setCount(1);
//     setTotalPrice(cartItem.product.price);
//   }, [cartItem.product]);

//   useEffect(() => {

//     setTotalPrice(product.price * count);
//   }, [count, product]);

  return (
    <Container>
      <ContainerCon>
        <Header>My Shopping Cart</Header>

        <SEContainer>
          <LeftContent>
            {cart.map((cartItem) => {
              return (
                <div className="cart-items">
                  <img
                    className="cart-item-img"
                    src={cartItem.product.imageUrl}
                    alt="qq"
                  />
                  <div>
                    <div className="cart-item-header">
                      <b className="cart-item-name">
                        {cartItem.product.productName}
                      </b>
                      <p className="cart-item-delete-btn">
                        <i className="bi bi-trash"></i>
                      </p>
                    </div>
                    <p className="cart-item-description">
                      {cartItem.product.description}
                    </p>
                    <div className="cart-item-bottom">
                      <QuantityButton>
                        <button onClick={decrement} disabled={count === 1}>
                          -
                        </button>
                        <span>{count}</span>
                        <button onClick={increment}>+</button>
                      </QuantityButton>
                      <p>${cartItem.product.price}</p>
                    </div>
                  </div>

                  {/* <p>{cartItem.quantity}</p> */}
                </div>
              );
            })}
            <Paragraph>You have no products in cart</Paragraph>
          </LeftContent>

          <RightContent>
            <OrderInfoContainer>
              <OrderTitle>Order Info</OrderTitle>
              <OrderSubtitle>
                <ParagraphLeft>Subtotal: </ParagraphLeft>
                <ParagraphRight>$0</ParagraphRight>
              </OrderSubtitle>
              <OrderSubtitle>
                <ParagraphLeft>Shipping Cost:</ParagraphLeft>
                <ParagraphRight> $0</ParagraphRight>
              </OrderSubtitle>
              <OrderTotal>
                Total: <p>$0.00</p>
              </OrderTotal>
            </OrderInfoContainer>

            <ButtonContainer>
              <CheckoutButton>Checkout</CheckoutButton>
              <ContinueShoppingButton onClick={handleContinueShopping}>
                Continue Shopping
              </ContinueShoppingButton>
            </ButtonContainer>
          </RightContent>
        </SEContainer>
      </ContainerCon>
    </Container>
  );
};

export default CartItemsComponent;
