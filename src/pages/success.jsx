import React, { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

function Success() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading ? (
        <>
          <PropagateLoader className='text-green-500' />
        </>
      ) : (
        <>
          <h2 className='text-3xl font-semibold mb-4 text-green-500'>Order Successful!</h2>
          <p>Your order has been placed</p>
        </>
      )}
    </div>
  );
}

export default Success;
