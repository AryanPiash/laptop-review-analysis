import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='grid md:grid-cols-1'>
            <ul className='flex justify-center my-5'>
                <li className='text-xl mr-8 text-blue-800 font-semibold'>
                    <Link to={'/home'}>Home</Link>
                </li>

                <li className='text-xl mr-8 text-blue-800 font-semibold'>
                    <Link to={'/reviews'}>Reviews</Link>
                 </li>

                <li className='text-xl mr-8 text-blue-800 font-semibold'>
                    <Link to={'/dashboard'}>Dashboard</Link>
                 </li>

                <li className='text-xl text-blue-800 font-semibold'>
                    <Link to={'/blogs'}>Blogs</Link>
                 </li>
            </ul>
        </nav>
    );
};

export default Header;