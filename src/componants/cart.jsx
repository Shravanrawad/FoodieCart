import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { removeitem } from '../redux/cartslice';
import { incrementqty } from '../redux/cartslice';
import { decrementqty } from '../redux/cartslice';
import { useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

function Cart() {
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const toggleCart = () => setOpenCart(!openCart);
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30vw] h-full bg-white shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out ${openCart ? 'translate-x-0' : 'translate-x-full'
          }`}
      >

        <div className='flex items-center justify-between p-4 border-b bg-gray-100'>
          <span className='text-xl font-semibold'>My Order</span>
          <button onClick={toggleCart} className='text-gray-600 hover:text-gray-900'>
            <AiOutlineClose className='w-6 h-6' />
          </button>
        </div>


        <div className='p-4 flex-1 overflow-y-auto'>
          <div className='flex flex-col gap-4 max-h-[60vh]'>
            {cartItems.length === 0 ? (
              <p className='text-center text-gray-500'>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className='flex items-center justify-between border-b pb-4'>
                  <div className='flex items-center'>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='w-16 h-16 object-cover rounded-md shadow-md'
                    />
                    <div className='ml-3'>
                      <h4 className='text-lg font-semibold'>{item.name}</h4>
                      <span className='text-gray-600'>₹{item.price}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <button onClick={() => {
                      dispatch(decrementqty(item))
                    }} className='bg-gray-200 rounded-full p-2 text-gray-600 hover:bg-gray-300 transition'>
                      <AiOutlineMinus className='w-4 h-4' />
                    </button>
                    <span className='text-gray-700 font-medium'>{item.qty}</span>
                    <button onClick={() => {
                      dispatch(incrementqty(item))
                    }} className='bg-gray-200 rounded-full p-2 text-gray-600 hover:bg-gray-300 transition'>
                      <AiOutlinePlus className='w-4 h-4' />
                    </button>
                    <button onClick={() => {
                      dispatch(removeitem(item))
                    }} className='text-red-500 hover:text-red-700 transition'>
                      <AiOutlineDelete className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>


        <div className='absolute bottom-0 w-full p-4 border-t bg-gray-100'>
          <div className='flex justify-between mb-2'>
            <span className='text-lg font-semibold'>Total:</span>
            <span className='text-lg font-bold'>
              ₹{cartItems.reduce((acc, item) => {
                const price = parseFloat(item.price) || 0;  
                const quantity = parseInt(item.qty) || 0; 
                return acc + price * quantity;
              }, 0)}
            </span>
          </div>
          <button onClick={() => {
            if(cartItems.length > 0 ){
              navigate('/success')
            }
            else{
              toast.error('Add item to checkout');
            }
          }} className='w-full bg-red-500 hover:bg-reds-600 text-white font-semibold py-2 rounded-md transition duration-200'>
            Checkout
          </button>
        </div>
      </div>

      {!openCart && (
      <button
      onClick={toggleCart}
      className="fixed flex flex-col justify-center items-center bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full shadow-lg  transition duration-200"
    >
      {cartItems && cartItems.length > 0 && (
        <span
        className="bg-white text-red-500 font-semibold text-sm w-6 h-6 mb-1 
                   flex items-center justify-center rounded-full shadow-md 
                   animate-bounce"
      >
        {cartItems.length}
      </span>
      
      )}
      <FaCartShopping className="h-6 w-6" />
    </button>
         
      )}
    </div>
  );
}

export default Cart;
