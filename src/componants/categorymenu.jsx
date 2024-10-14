import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { setCategory } from '../redux/categoryslice';
import { useDispatch, useSelector } from 'react-redux'


function Categorymenu() {

  const [category, setcategory] = useState([]);
  const dispatch = useDispatch()
  const selectedcategory = useSelector(state => state.category.category);
  console.log(selectedcategory)

  const uniquecategories = () => {
    const unicat = (new Set(FoodData.map((cat) => cat.category)))
    setcategory(unicat)
  }

  const categoriesArray = [...category];

  useEffect(() => {
    uniquecategories();
    console.log(categoriesArray)
  }, [])

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-700">Find the best for you</h3>
      <div className="flex gap-4 overflow-x-auto scroll-smooth lg:overflow-hidden">
        <button onClick={() => dispatch(setCategory('All'))}  className={`px-4 py-2 bg-gray-200 font-semibold rounded-full transition-colors duration-300 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 ${selectedcategory === 'All' ? 'bg-red-500' : ''}`}>
          All
        </button>
        {categoriesArray.map((cat) => (
          <button
            onClick={() => dispatch(setCategory(cat))}            
            key={cat}
            className={`px-4 py-2 bg-gray-200 font-semibold rounded-full transition-colors duration-300 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 ${selectedcategory === cat ? 'bg-red-500' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categorymenu;
