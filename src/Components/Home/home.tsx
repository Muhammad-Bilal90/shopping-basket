import { Card } from "react-bootstrap";
import { productStateType } from "../../Types/ProductStateType";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../Store/Slices/cartSlice";

interface productsType {
  products: productStateType[];
}

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: productsType) => {
    return state.products;
  });

  // console.log(products);

  return (
    <div className="container mt-3">
      <div className='row d-flex justify-content-center'>
      {products.map((product: productStateType, i: number) => (
        <Card key={i} style={{ width: "18rem" }} className="m-2">
          <Card.Img variant="top" src={String(product.image)} />
          <Card.Body>
            <Card.Title>{product.shoeName}</Card.Title>
            <Card.Text>
              Rs.{product.price}
            </Card.Text>
            <button className="btn btn-secondary border-0" onClick={() =>dispatch(ADD(product.id))}>{product.added ? "Added" : "Add to Cart"}</button>
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Home;