import { useState } from "react";
import * as S from "./Container.styled";
import ProductList from "./ProductPage/ProductListComponent/ProductListComponent";
import ProductDetail from "./ProductPage/ProductDetailComponent/ProductDetailComponent";
interface Product {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

const Container: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };
  
  return (
    <S.MainBody>
      <S.MainContent>
        <S.ProductDetail>
        {selectedProduct ? <ProductDetail product={selectedProduct} /> : <div>Chọn một sản phẩm để hiển thị chi tiết.</div>}
        </S.ProductDetail>
        <ProductList onSelectProduct={handleSelectProduct} />
      </S.MainContent>
    </S.MainBody>
  );
}

export default Container;
