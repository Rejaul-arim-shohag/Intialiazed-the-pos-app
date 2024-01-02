import { GoPlus } from "react-icons/go";
import { RxMinus } from "react-icons/rx";

export const CartItem = ({ item, handleQuantityChange, handleRemoveFromCart }) => {
  const { img, title, newPrice, quantity } = item;
  return (
    <div className="flex items-center hover:bg-gray-100 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-16" src={img} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <p className=" cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleRemoveFromCart(item)}>
            Remove
          </p>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <GoPlus onClick={() => handleQuantityChange(item, "increase")} size={26} />
        <input className="mx-2 border text-center w-8" type="text" value={quantity} />
        <RxMinus onClick={() => handleQuantityChange(item, "decrease")} size={26} />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${newPrice}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${newPrice}</span>
    </div>
  );
};
