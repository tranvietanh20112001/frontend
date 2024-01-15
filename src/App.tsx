// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Header from "./components/Header/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import CartItemsComponent from "./components/CheckoutPage/CartItemsComponent/CartItemsComponent";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<CartItemsComponent />} />
          <Route path="/products" element={<Container />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
