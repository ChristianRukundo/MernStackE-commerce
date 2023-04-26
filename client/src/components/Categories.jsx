import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  margin: 1rem;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  
`
const Categories = () => {
  return (
    <Container>
      <Title>CATEGORIES</Title>
      <Wrapper>
      {categories.map((category) => (
        <CategoryItem data={category} key={category.id} />
      ))}
        </Wrapper>
    </Container>
  );
};

export default Categories;
