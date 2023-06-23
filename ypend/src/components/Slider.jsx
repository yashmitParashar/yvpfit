import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
 
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffc465;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient( #ffa456,
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
      
    ), url(${(props) =>props.bg}) no-repeat center;
  background-size: cover;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left:70px;
  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  height: 60%;
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: White;
  ${mobile({ fontSize:"35px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #ffc455;
  ${mobile({ fontSize:"14px" })}
`;

const Button = styled.a`
  padding: 10px;
  font-size: 20px;
  color:White;
  background-color: #ffc754;
  text-decoration:none;
  cursor: pointer;
  &:hover {
    background-color: #ffe788;
    transform: scale(1.1);
  }

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
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer >
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button href={item.href}>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))};
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
