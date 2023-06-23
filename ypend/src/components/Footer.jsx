import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";


import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  
  background: linear-gradient(
    rgba(1, 0, 0, 0.6),
   
    rgba(1, 0, 0, 0.3),#0d0d0d
      
    ),
    url("https://images.unsplash.com/photo-1626340480851-d5b1e6d996aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=483&q=80")
      center;
      background-size: cover; 
  color: white;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
color: #ffc451;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 25%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover {
    background: #ffc451;
    
   }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.a`
  width: 50%;
  color: white;
  margin-bottom: 10px;
  &:hover {
    color: #ffc451;
    
   }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
 

`;

const ContactItem = styled.div`
  color: #ffc456;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 70%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RDfitness</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon  href=" https://www.facebook.com/yashmit.parashar" color="ffc555">
            <Facebook  />
          </SocialIcon>
          <SocialIcon href="https://instagram.com/devil_on_earth_1?utm_medium=copy_link" color="ffe444">
            <Instagram />
          </SocialIcon>
          <SocialIcon  href="https://www.linkedin.com/in/yashmit-parashar-96985a217" color="ffd777">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
       
        <ListItem  href="/"> Home  </ListItem>
          <ListItem  href="/cart">  Carts</ListItem>
          <ListItem href="/products/Whey-Protein">Pre-workouts </ListItem>
          <ListItem href="/products/Whey-Protein">Proteins </ListItem>
          <ListItem href="/products/Whey-Protein">Gainners</ListItem>
          <ListItem href="/">Home </ListItem>
          <ListItem href="/products/Whey-Protein"> Essentials</ListItem>
          <ListItem href="">My-account </ListItem>
          <ListItem href="">Order-Tracking </ListItem>
          <ListItem href="">Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Kharkhoda, Thana Chowk,Sonipat ,Haryana
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 9991297129
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> rdfitness@gmail.com
        </ContactItem>
        <Payment src="https://images.squarespace-cdn.com/content/v1/56ad5256e32140027608bc0d/1606606343162-JNZ8TO8YW4SPSNXEAMT8/Payment_Logos.png?format=1000w" />
      </Right>
    </Container>
  );
};

export default Footer;
