import React from 'react';

const About = () => {
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
          <div className="ml-10">
            <div className="text-justify">
              <h1 className="text-6xl font-bold mt-10 items-center">
                Our team is all over
              </h1>
              <h1 className="text-6xl font-bold  mb-5">
                the <span className=" text-orange-500">world.</span>
              </h1>
              <p className="text-stone-600 font-sans text-xl">
              Apple's laptops are now comprised of a 13-inch MacBook Air and three flavors of MacBook Pro: 13 inches, 14 inches and 16 inches. It can be tough deciding which MacBook to buy, especially since Apple offers some models with M1 chips and others with M1 Pro or M1 Max processors. 
              Then there is the 14-inch MacBook Pro and 16-inch MacBook Pro, which come with either an M1 Pro or an M1 Max chip. We got our hands on the M1 Pro chip and are blown away by its bonkers CPU and GPU performance, like 70% faster performance than the M1 and up to 2x faster GPU speeds. And that's just for the M1 Pro, not the more powerful M1 Max.
              </p>
            </div>
          </div>
          <div className="mr-10 justify-center">
            <img
              className="object-cover h-auto w-auto "
              src="https://buyco.co/wp-content/uploads/2021/09/buyco_co2_reductions-980x971.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default About;