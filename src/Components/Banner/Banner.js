import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from 'framer-motion'

function Banner() {
  const [bannerImage, setBannerImage] = useState('bg-banner-image');

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerImage(prevBannerImage =>
        prevBannerImage === 'bg-banner-image' ? 'bg-banner-image333' : 'bg-banner-image'
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full ${bannerImage} bg-cover bg-center bg-no-repeat flex items-center text-white sm:h-[683px] h-[566px] transition-background-image duration-[3s] ease-in-out  `}>
      <div className='text-left sm:ml-[109px] ml-[19px]'>
        <div className="border-0 bg-[#8C5922] bg-opacity-[50%] px-[16px] text-[36px] sm:text-[64px] tracking-wider">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9, y: 0, transition: { delay: 0.2, duration: 0.9 } }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: .5 }}
            className='font-thin'>Enhancing </motion.span><motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9, y: 0, transition: { delay: 0.2, duration: 0.9 } }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: .5 }}
              className='font-semibold'
              >Vibrance</motion.span>
        </div>
        <div className='sm:text-[18px] text-[12px] text-black font-medium tracking-[1px] mt-[8px]'>
          Top global traders of paper and board
        </div>
        <Link to='/aboutdetails'>
          <button className="bg-[rgb(24,24,24)] hover:bg-white  text-white hover:text-black font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
