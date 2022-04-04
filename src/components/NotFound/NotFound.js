import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='pl-4'>
            <h1 className='text-8xl text-orange-500 font-bold mt-7 mb-5'>OOPS!</h1>
            <h1 className='text-3xl text-blue-900 mb-5'>We can't to seem to find the page you are looking for.</h1>
            <h2 className='text-4xl'>Error 404</h2>
            <Link to='/home'>
                <button className='bg-orange-400 py-3 px-16 text-xl text-white font-semibold rounded-lg mt-10'>Go to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;