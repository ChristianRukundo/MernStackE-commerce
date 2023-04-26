import { ArrowLeftOutlined, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: orange;
  position: relative;
  overflow-x: hidden;
`;
const Arrow = styled.div`
  height: 70px;
  width: 70px;
  background-color: rgba(217, 223, 227, 0.5);
  z-index: 999;
  color: #fff;
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30%;
  left: ${(props) => (props.direction === "left" ? "5vw" : "90vw")};
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  overflow: hidden;
  transform: translate(${(props) => props.slide * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  img {
    width: calc(100vh - 100px);
    object-fit: cover;
    margin-left: 2rem;
  }
`;
const InfoContainer = styled.div`
  flex: 2;
`;
const Title = styled.h1`
  letter-spacing: 2px;
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Desc = styled.p`
  letter-spacing: 3px;
  font-size: 2rem;
  width: 730px;
`;
const Button = styled.button`
  padding: 15px 25px;
  font-size: 2rem;
  margin-top: 1rem;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slide={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}  bg={item.bg}>
            <ImgContainer>
              <img src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
