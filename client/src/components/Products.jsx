import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-left: .5rem;

`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </Container>
  );
};

export default Products;
