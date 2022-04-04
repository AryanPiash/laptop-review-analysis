import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='grid md:grid-cols-1'>
            <ul className='flex justify-center my-5'>
                <li className='text-xl lg:mr-8 mr-4 text-blue-800 font-semibold'>
                    <CustomLink to='/home'>HOME</CustomLink>
                </li>

                <li className='text-xl lg:mr-8 mr-4 text-blue-800 font-semibold'>
                    <CustomLink to={'/reviews'}>REVIEWS</CustomLink>
                 </li>

                <li className='text-xl lg:mr-8 mr-4 text-blue-800 font-semibold'>
                    <CustomLink to={'/dashboard'}>DASHBOARD</CustomLink>
                 </li>

                <li className='text-xl text-blue-800 font-semibold'>
                    <CustomLink to={'/blogs'}>BLOGS</CustomLink>
                 </li>
            </ul>
        </nav>
    );
};

export default Header;