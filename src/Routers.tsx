import NavigationBar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Cart from "./Components/Cart/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routers;
