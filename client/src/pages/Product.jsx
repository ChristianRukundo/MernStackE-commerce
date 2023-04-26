import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";

const Container = styled.div`
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  padding: 12px;
  margin: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 70px;
  height: 100%;
`;
const ImgContainer = styled.div`
  flex: 5;
`;
const Img = styled.img`
  width: 100%;
  height: 700px;
`;
const InfoContainer = styled.div`
  flex: 5;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Desc = styled.p`
  width: 500px;
`;
const Price = styled.span`
  font-size: 5rem;
  font-weight: 200;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const FilterTitle = styled.p`
  font-size: 1.24rem;
`;
const FilterSize = styled.select`
  padding: 12px 22px;
  outline: none;
`;
const FilterSizeOption = styled.option`
  padding: 10px 20px;
`;

const AddContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Ammount = styled.span`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid teal;
`;
const Button = styled.button`
  padding: 10px 20px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border: 2px solid teal;
  color: black;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContent>
            <Remove  style={{cursor: "pointer"}}F/>
            <Ammount> 1</Ammount>
            <Add  style={{cursor: "pointer"}}/>
            <Button>
              ADD TO <ShoppingCart />
            </Button>
          </AddContent>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
