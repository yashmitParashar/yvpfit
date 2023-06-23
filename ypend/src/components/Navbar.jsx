import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container = styled.div`
  height: 60px;
  background: rgba(0,0,0,0.9);
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  color: white;
  align-items: center;
  &:hover {
    color: #ffc451;
    
  }
 
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  background :  rgba(0,0,0,0.9);
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background : rgba(0,0,0,0.8);
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  color: #ffc456;
  text-align: center;
  align-items: center;
  display: flex;
`;

const Logo = styled.h1`
color: #ffc456;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}

`;

const MenuItem = styled.div`
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover {
    color: #ffc451;
    transform: scale(1.1);
  }
`;

const Navbar = () => {

  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Rdfitness</Logo>
        </Left>
        <Center>
          
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <Link to ="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to = "/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
         
          
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
         
        
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;