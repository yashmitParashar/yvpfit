
import { useLocation } from "react-router-dom";








const Success = () => {
const location =useLocation();
console.log( location);



  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      fontSize:"26px",
      color:"#ffc655",
      flexDirection: "column",
      textAlign:"center",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage:  ` linear-gradient( #ffa456, rgba(0, 0, 0, 0.5), #0d0d0d,rgba(0, 0, 0, 0.7)) ,url("https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80") ` , 
     backgroundSize: "Cover"
     
    }}
  >


       `Order has been created successfully.<br/> Your order number is `
        : `Successfull.<br/> Your order is being prepared...<br/> Thankyou to Shopping with us` 
    <a style={{ fontSize:30, color: "white",  padding: 10, marginTop: 30 ,textDecoration:"none", border: "3px solid #ffc456", borderRadius: 25, 
    
    
    }} href="/">Go to Home</a>
  </div>
  )
}

export default Success