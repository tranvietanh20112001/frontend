import { useEffect, useState } from "react";
import * as S from "./Container.styled";
import axios from "axios";
import ProductList from "./ProductPage/ProductListComponent/ProductListComponent";

export default function Container() {
  
  return (
    <S.MainBody>
      <S.MainContent>
        <S.ProductDetail>asdads</S.ProductDetail>
        <ProductList />
      </S.MainContent>
    </S.MainBody>
  );
}
