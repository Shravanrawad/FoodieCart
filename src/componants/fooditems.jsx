import React from 'react';
import Itemcard from './itemcard';
import FoodData from '../data/FoodData';
import { useSelector } from 'react-redux';

function Fooditems() {
    const searchvalue = useSelector(state => state.cart.searchData);
    const selectedcat = useSelector(state => state.category.category);

    const filteredItems = FoodData.filter(item => {
        const matchesSearch = item.name.toLocaleLowerCase().includes((searchvalue || '').toLocaleLowerCase());
        const matchesCategory = selectedcat === 'All' || item.category === selectedcat; 
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-6 place-items-center min-h-screen">
            {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                    <Itemcard 
                        key={item.id} 
                        id={item.id}
                        img={item.img} 
                        name={item.name}
                        price={item.price}
                        desc={item.desc}
                        rating={item.rating}
                    />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">
                    No items found.
                </div>
            )}
        </div>
    );
}

export default Fooditems;
