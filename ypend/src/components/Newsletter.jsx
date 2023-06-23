import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70vh;
  color: #ffc456;
  background: linear-gradient( #ffa456,
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.5)
      
    ),
    url("https://images.unsplash.com/photo-1569744013379-0cce812ff898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: 2px solid black;
  
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: 2px solid black;
 
  background-color: #ffd765;
  color: black;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button >
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
