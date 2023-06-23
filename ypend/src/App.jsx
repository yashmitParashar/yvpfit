
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,

  Route,



  Navigate,
  Routes
} from "react-router-dom";
import { useSelector } from "react-redux";




const App = () => {
  // const user= false


  const user = useSelector((state) => state.currentUser);


  return (
    <Router>
      <Routes>
       
        <Route path="/" element={user ? <Home/> : <Navigate to='/login'/>}/>
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/register" element={ <Register />} />
        
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/success" element={<Success />} />


      </Routes>



    </Router>
  );
};

export default App;

