import {
  Facebook,
  Instagram,
  MailOutline,
  Pinterest,
  Room,
    Twitter,
  Phone
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 23vw;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Center = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const Logo = styled.h1`
  font-family: cursive;
`;
const Desc = styled.p`
  letter-spacing: 1.3px;
  line-height: 2;
  margin-bottom: 1rem;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const SocilIcon = styled.span`
  background-color: #${(props) => props.bg};
  color: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3``;
const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
const Payment = styled.img`
    width: 400px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CONDE</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum variable , but
          the majority have suffererd alteration in some form, by injected
          humour , or randomized word which don't look even slightly believable
        </Desc>
        <SocialContainer>
          <SocilIcon bg="3B5999">
            <Facebook />
          </SocilIcon>
          <SocilIcon bg="E4495F">
            <Instagram />
          </SocilIcon>
          <SocilIcon bg="55ACEE">
            <Twitter />
          </SocilIcon>
          <SocilIcon bg="E60023">
            <Pinterest />
          </SocilIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 622 Dixie Path, South Tobitinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone /> +250728749261
        </ContactItem>
        <ContactItem>
          <MailOutline /> Contact siboruremarukundoc1@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
