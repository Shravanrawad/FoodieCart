import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FoodData from "../data/FoodData";
import Cart from "../componants/cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";
import toast from "react-hot-toast";

function Singleitem() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);
  

  const singleItem = FoodData.find((item) => item.id === parseInt(id)); 
  const otherItems = FoodData.filter((item) => item.id !== parseInt(id));

  if (!singleItem) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Item not found</h1>
      </div>
    );
  }

  return (
    <>
    <div className="max-w-4xl mx-auto p-6">
   
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
    
        <img
          src={singleItem.img}
          alt={singleItem.name}
          className="w-72 h-72 object-cover rounded-md"
        />

        
        <div>
          <h1 className="text-2xl font-bold mb-2">{singleItem.name}</h1>
          <p className="text-gray-600 mb-4">{singleItem.desc}</p>
          <p className="text-lg font-semibold text-green-600">
            Price: ₹{singleItem.price}
          </p>
          <p className="text-md text-gray-500 mt-1">Category: {singleItem.category}</p>
          <p className="text-md text-yellow-500 mt-1">
            Rating: ⭐{singleItem.rating}
          </p>
        </div>
      </div>

      
      <div className="mt-6 flex gap-2 text-center">
        <button
           onClick={() => {
            dispatch(addToCart({
              id: singleItem.id,
              name: singleItem.name,
              img: singleItem.img,
              price: singleItem.price,
              rating: singleItem.rating,
              qty: 1
            }));
            toast.success(`${singleItem.name} added to cart!`)
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Back to Home
        </button>
      </div>

      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Other Food Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
              onClick={() => navigate(`/singleitem/${item.id}`)}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">Price: ₹{item.price}</p>
              <p className="text-yellow-500">Rating: ⭐{item.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Cart/>
    </>
  );
}

export default Singleitem;
