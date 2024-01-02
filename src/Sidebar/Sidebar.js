import "./Sidebar.css";
import { CartItem } from "./cartItem/CartItem";
const Sidebar = ({ handleQuantityChange, cart, totalPrice, handleRemoveFromCart }) => {
  return (
    <>
      <section className="sidebar">
        <div className="container mx-auto">
          <div className="flex shadow-md my-10">
            <div className="w-full bg-white p-2">
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
              </div>
              {cart.map((item, index) => (
                <CartItem key={index} item={item} handleQuantityChange={handleQuantityChange} handleRemoveFromCart={handleRemoveFromCart} />
              ))}
              {cart.length > 0 ? (
                <div className="px-16 py-5 flex justify-between">
                  <p>Total</p>
                  <p>{totalPrice}$</p>
                </div>
              ) : (
                <h2 className="text-center py-40 text-red-700 font-semibold">Your Cart is Empty!</h2>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
