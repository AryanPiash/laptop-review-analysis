import React from 'react';

const Review = ({user}) => {
    const {name,comment,ratings,picture} = user
    return (
        <div className='border border-orange-300 m-3 rounded-xl p-4'>
            <img className='mx-auto rounded-full h-40 my-4' src={picture} alt="" />
            <h1 className='text-3xl text-blue-900 mb-5'>{name}</h1>
            <h3 className='text-lg'>{comment}</h3>
            <p className='text-xl my-5'>Ratings: {ratings} stars</p>
        </div>
    );
};

export default Review;