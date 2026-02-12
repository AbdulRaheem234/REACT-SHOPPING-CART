import { useCart } from "../Context/CartContext";
import { X } from "lucide-react";

function CartItems({ item }) {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 hover:border-orange-600/50 transition duration-300">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700"
        />
        <div className="grow">
          <h3 className="text-white line-clamp-1 font-bold text-xl">
            {item.name}
          </h3>
          <p className="text-lg text-orange-400 font-semibold">
            &#8377; {item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4 ">
        <div className="flex items-center overflow-hidden shadow-lg border border-gray-700 rounded-full ">
          <button
            onClick={decreaseQ}
            className=" text-gray-400 bg-gray-800 hover:bg-gray-700 transition items-center duration-150 w-8 h-8 justify-center"
          >
            -
          </button>
          <span className="px-3 text-base font-bold text-white bg-gray-800">
            {item.quantity}
          </span>

          <button
            onClick={increaseQ}
            className=" text-gray-400 bg-gray-800 hover:bg-gray-700 transition items-center duration-150 w-8 h-8 justify-center"
          >
            +
          </button>
        </div>
        <p className="font-extrabold text-orange-300 w-24 text-right hidden md:block ">
          &#8377;{(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id, true)}
          className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItems;
