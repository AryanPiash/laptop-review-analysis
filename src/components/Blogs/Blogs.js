import React from 'react';

const Blogs = () => {
    return (
        <div className='my-16 '>
            <div className="border border-orange-300 m-4 p-4 w-2/4 ml-32 rounded-xl shadow-lg">
                <h2 className='text-4xl font-semibold mt-4'>What is Context API?</h2>
                <p className='text-xl mt-6 pb-6'>The React Context API is a way for a React app to effectively produce global variables that can be passed around without having to pass props down manually at every level. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="border border-orange-300 mt-8 p-4 w-2/4 ml-auto mr-32 rounded-xl shadow-lg">
                <h2 className='text-4xl font-semibold mt-2'>What are semantic elements?</h2>
                <p className='text-xl mt-6 pb-4'>Semantic elements have meaningful names which tells about type of content that uses words to clearly represent what that element contains, in human language. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.</p>
            </div>
        </div>
    );
};

export default Blogs;