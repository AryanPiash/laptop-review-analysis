import React from 'react';
import useReview from '../../hook/hook';
import Review from '../Review/Review';

const Reviews = () => {
    const [users] = useReview()
    
    return (
        <div>
            <h1 className='text-6xl text-blue-900 font-bold my-10'>Our Customers Feedback!</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 p-4'>
            {
                users.map(user => <Review
                key={user.id}
                user={user}
                ></Review>)
            }
        </div>
        </div> 
    );
};

export default Reviews;