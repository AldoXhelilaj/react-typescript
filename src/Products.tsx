import React, { useState, useEffect } from "react";
import Product from "./Product";
import useFetch from "./useFetch.js";
import Loader from "./Loader";

type Props = {
  cart:Array<{
    id:number,
    quantity:number
  }>,
  onProductDelete:(id:number)=>void;
  onProductAdd:(newProduct:State)=>void
}
export interface State {
  id:number,
  quantity:number,
  image: string,
  name: string,
  description: string,
  price: string,
  price_id?: string,
  storage?: string,
  nutrition?: {},
}
const  Products: React.FC<Props> =(props)=> {
  const [products, setProducts] = useState<State[]>([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );
  console.log(products)

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;