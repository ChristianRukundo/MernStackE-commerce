import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
  margin-bottom: 1rem;
  
`;
const Wrapper = styled.div`
  padding: 22px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  margin-right: 1.5rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  height: 100%;
  flex: 9;
`;
const Logo = styled.h1`
  font-size: 2.5rem;
  font-family: cursive;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;
const MenuItem = styled.div``;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search"></Input> <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CONDE</Logo>
        </Center>
        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
