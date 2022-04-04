import React from 'react';
import useReview from '../../hook/hook';
import Review from '../Review/Review';

const Reviews = () => {
    const [users] = useReview()
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1 p-4'>
            {
                users.map(user => <Review
                key={user.id}
                user={user}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;