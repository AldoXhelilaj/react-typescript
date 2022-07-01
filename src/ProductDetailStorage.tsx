import React from "react";

type Props = { 
  storage:string
}

const ProductDetailStorage: React.FC<Props> = ({ storage }) =>{
  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
}
export default ProductDetailStorage;
