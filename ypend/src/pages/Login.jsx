import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    #ffa456,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
      
    ),
    url("https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 500;
  text-align: center;
  color: #ffc756;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ffa545;
  font-size:18px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
 
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 18px;
  font-weight:500px;
  color:#ffa457;
  text-decoration: underline;
  cursor: pointer;
`;


const Error = styled.span`
  color: red;
`;


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);
 

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link href= "/">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          
          <Link href ="/register"> CREATE A NEW ACCOUNT </Link>
         
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
