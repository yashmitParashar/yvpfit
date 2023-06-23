import styled from "styled-components";
import Navbar from "../components/Navbar";

import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import { useLocation } from "react-router";



const Container = styled.div``;
const Section = styled.section`

height: 30vh;
text-align:center;
align-item:center;
justify-content: center;
background: linear-gradient( #ffa456,
  rgba(0, 0, 0, 0.9),
  rgba(0, 0, 0, 0.7)
    
  ),
  url("https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80")
    center;
   
`;


const Title = styled.h3`


font-size:40px;
color: #ffc756;


text-decoration :underline ;
text-decoration-color:White;
  text-align: center;
  
`;
const P= styled.p`
text-align:center;
margin-top:35px;
font-size:20px;
color:white;


`;



const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
 

  return (
    <Container>
      <Navbar />
     <Section>
      <Title>{cat}</Title>
      <P> Select your {cat } acording to your requirement. </P>
      </Section>
      <Products  />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
