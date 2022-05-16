import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import cart from "../../assets/Images/shopping-cart.png";
import { useSelector } from "react-redux";
import { productStateType } from "../../Types/ProductStateType";

interface productsType {
  products: productStateType[]
}

const NavigationBar = () => {
  
  const products = useSelector((state: productsType) => {
    return state.products;
  });
  
  const totalProducts = products.filter((product: productStateType) => {
    return product.added === true;
  }).length


  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between p-3">
        <Navbar.Brand >
          <Link to="/" className="text-decoration-none text-white fw-bolder">
              SHOE STORE
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Item className="text-white">
            <Link to="/cart">
            <div style={{ backgroundColor: "white", borderRadius: "9999px", padding: "0.75rem" }}>
              <img src={cart} alt="cartImage" style={{ width: "2rem", height: "2rem", }} /><sup style={{ verticalAlign: "super",  }}><span style={{ backgroundColor: "#16f5f5", borderRadius: "9999px", color: "white", padding: "4px"}}>{totalProducts}</span></sup>
            </div>
            </Link>
          </Nav.Item>
        </Nav>
    </Navbar>
  );
};

export default NavigationBar;
