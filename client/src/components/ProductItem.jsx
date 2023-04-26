import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Info = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  opacity: 0;
  gap: 4px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.7s ease;
`;

const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 1s ease;
  width: 240px;
  height: 350px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  background-color: #fff;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Icon = styled.span`
  background-color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const ProductItem = ({ data }) => {
  return (
    <Container>
      <Circle />
      <Img src={data.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
