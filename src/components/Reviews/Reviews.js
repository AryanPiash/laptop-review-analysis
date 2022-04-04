import React from 'react';
import useReview from '../../hook/hook';

const Reviews = () => {
    const [products,setPorducts] = useReview()
    console.log(products);
    return (
        <div>
            <h1>Hello from Reviews {products.length}</h1>
        </div>
    );
};

export default Reviews;