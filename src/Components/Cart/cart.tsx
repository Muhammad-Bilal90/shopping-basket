import { useSelector, useDispatch } from "react-redux";
import { DELETE, INCREMENT, DECREMENT } from "../../Store/Slices/cartSlice";
import { productStateType } from "../../Types/ProductStateType";
import { Table } from "react-bootstrap";
import{ Link } from "react-router-dom";
interface productsType {
  products: productStateType[];
}

const Cart = () => {
  const products = useSelector((state: productsType) => {
    return state.products;
  });

  const dispatch = useDispatch();

  const addedProducts = products.filter((product: productStateType) => {
    return product.added === true;
  });

  return (
    <div className="container">
      <Table hover className="mt-5">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {addedProducts.map((product: productStateType, i: number) => (
            <tr key={i}>
              <td>{product.shoeName}</td>
              <td>
                {product.count > 1 ? (
                  <button className="border-0" onClick={() => dispatch(DECREMENT(product.id))}> - </button>
                ) : ("")}
                {" "}{product.count}{" "}
                <button className="border-0" onClick={() => dispatch(INCREMENT(product.id))}> + </button>
                </td>
              <td>Rs.{product.price * product.count}</td>
              <td><button className="bg-danger text-white border-0 p-1 pointer" onClick={() => dispatch(DELETE(product.id))}>X</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between  ">
        <Link to="/">
          <span className="fw-bold">Go Back</span>
        </Link>
        <span className="fw-bolder text-white rounded p-2" style={{ backgroundColor: "rgba(45,55,72,1)" }}>Total:{" "}Rs.{addedProducts.reduce((acc,current) => (acc += current.price * current.count),0)}</span>
      </div>
    </div>
  );
};

export default Cart;
