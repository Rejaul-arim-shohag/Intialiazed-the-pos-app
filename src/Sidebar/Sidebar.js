
import "./Sidebar.css";
import { CartItem } from "./cartItem/CartItem";
const Sidebar = ({ handleChange, cart }) => {
  return (
    <>
      <section className="sidebar">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-full bg-white p-2">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-xl">Shopping Cart</h1>
                <h2 className="font-semibold text-xl">3 Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              {
                cart.map((item, index) => <CartItem key={index} item={item}/>)
              }
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Sidebar;
