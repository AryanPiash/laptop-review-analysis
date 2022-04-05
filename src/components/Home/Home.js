import React from 'react';
import { Link } from 'react-router-dom';
import  useReview  from '../../hook/hook';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [users] = useReview()
    return (
        <div>
            <div className="product-container">
                <div className="product-info">
                    <h1 className='text-7xl font-bold text-left text-blue-900 mb-3'>Your Next laptop</h1>
                    <h1 className='text-7xl font-semibold text-left text-orange-500'>Will be Best Laptop</h1>
                    <p className='text-xl mt-10 text-left pr-10'>Laptops are evolving at a dramatic pace, and this is the place to track their progress, or lack thereof. The best laptop is out there, and our laptop reviews dig deep into what's new from the world's biggest manufacturers to help you find it. From each new iteration of the Apple MacBook.</p>
                    
                    <Link to='/about'>
                    <button className='bg-blue-300 text-blue-900 font-semibold py-4 px-16 text-xl rounded-lg mt-12 absolute left-28 shadow-xl'>Live Demo</button>
                    </Link>
                </div>
                <div className="product-image">
                    <img src="https://i.pinimg.com/originals/b7/7d/fb/b77dfb136924cf3cda7de7451c36e16b.jpg" alt="" />
                </div>
            </div>
            <div className="review">
                <h1 className='text-4xl'>Customers Review</h1>
                <div className='grid lg:grid-cols-3 my-10 p-4'>
                   {
                       users.slice(3,6).map(user => <Review
                       key={user.id}
                       user={user}
                       ></Review>)
                   }
                </div>
                   
                       <Link to='/reviews'><button className='bg-blue-300 py-4 px-16 mb-10 text-xl text-blue-900 font-semibold rounded-lg shadow-xl'>See All Reviews</button></Link>
            </div>
        </div>
    );
};

export default Home;