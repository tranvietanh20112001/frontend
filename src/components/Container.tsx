import { useEffect, useState } from "react";
import * as S from "./Container.styled";
import "./ContainerStyle.css";
import axios from "axios";
import ProductList from "./ProductPage/ProductListComponent/ProductListComponent";

export default function Container() {
  
  return (
    <div className="main-body">
      <div className="main-content">
        <div className="product-detail">asdads</div>
        <ProductList />
      </div>
    </div>
  );
}
