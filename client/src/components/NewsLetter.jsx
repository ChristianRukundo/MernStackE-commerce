import React from "react";
import styled from "styled-components";
import { Send } from "@mui/icons-material";

const Container = styled.div`
  margin-top: 2rem;
  background-color: #fcf1ed;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin-top: 1rem;
`;
const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  background-color: aliceblue;
  height: 60px;
  justify-content: space-between;
  justify-content: center;
`;
const Input = styled.input`
  flex: 8;
  height: 100%;
  outline: none;
  padding-left: 2rem;
  font-size: 1.2rem;
`;
const Button = styled.button`
  flex: 2;
  height: 100%;
  background-color: teal;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
