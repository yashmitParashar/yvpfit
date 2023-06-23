import styled from "styled-components";
import { mobile } from "../responsive";



const Container = styled.div`
  width: 100vw;
  height:140vh;
  background: linear-gradient(
    #ffa456,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.5)
    
    ),
    url("https://images.unsplash.com/photo-1554344728-77cf90d9ed26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  color:#ffc657;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  color:  #ffc457;
  margin: 20px 0px;
`;

const Button = styled.a`
  width: 40%;
  font-size: 18px;
  border: none;
  padding: 15px 20px;
  background-color: #ffc545;
  color: white;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

const Register = () => {


 

  return (
    <Container>
      <Wrapper>
        <Title>Register </Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input
            placeholder="username"
            
          />
         <Input
            placeholder="email"
            
          />
          <Input
            placeholder="password"
           
          />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button href="/"  >Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
