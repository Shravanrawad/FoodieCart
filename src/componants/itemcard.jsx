import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartslice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Itemcard({img, name, price, desc, rating, id}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
 <div class="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden relative cursor-pointer">
  
  <img 
    onClick={() => navigate('/singleitem/' + id)} 
    class="w-full h-48 object-cover" 
    src={img}
    alt="Onion Pizza" 
  />

  <div class="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
    <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  </div>

 
  <div class="p-5">
    <h2 class="text-lg font-semibold text-gray-900 mb-1">{name}</h2>
    <p class="text-sm text-gray-600 mb-3">
      {desc.slice(0 , 65)}...
    </p>

    <div class="flex items-center justify-between">
      <span class="text-xl font-bold text-green-500">₹{price}</span>
      <div class="flex items-center">
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
        <span class="ml-1 text-gray-700 text-sm">{rating}</span>
      </div>
    </div>
    <button 
      onClick={() => {
        dispatch(addToCart({
          id,
          name,
          img,
          price,
          rating,
          qty: 1
        }));
        toast.success(`${name} added to cart!`)
      }}
      class="mt-4 w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg">
      Add to Cart
    </button>
  </div>
</div>

    
  )
}

export default Itemcard
