import React from "react";
import styled from "styled-components";

const Category = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0 1rem 1rem;
  position: relative;


`;
const Img = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
const Title = styled.h1`
    color: white;
    font-size: 2rem;
    white-space: nowrap;
    font-weight: bolder;

`;
const Info = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 20%;
    
`;
const Button = styled.button`
  padding: 20px 30px;
  background-color: aliceblue;
  border: none;
  font-weight: 900;
`;

const CategoryItem = ({ data }) => {
  return (
    <Category>
      <Img src={data.img} />
      <Info>
        <Title>{data.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Category>
  );
};

export default CategoryItem;
