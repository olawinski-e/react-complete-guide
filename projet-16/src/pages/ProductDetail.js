import React from "react";
import { useParams } from "react-router";

export const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};
