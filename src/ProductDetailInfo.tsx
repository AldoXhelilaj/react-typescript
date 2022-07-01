import React from "react";
import Button from "./Button";
import {State} from './Products';

export interface ProductDetail  {
  description: string,
  id: number
  image: string
  name: string
  nutrition: {},
  price: number,
  price_id: string,
  storage: string
}
type Props = {
  product: ProductDetail,
  onProductAdd:(product:ProductDetail)=> void
}

 const  ProductDetailInfo: React.FC<Props> =(props)=> {
   const {product, onProductAdd }=props;
   console.log(product);
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)}>{product.price}</Button>
    </>
  );
}
export default ProductDetailInfo;