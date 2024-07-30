import React, { useEffect } from 'react'
import blogImg1 from '../../Assets/blogImg1.jpeg'
import blogImg2 from '../../Assets/blogImg2.jpeg'
import blogImg3 from '../../Assets/blogImg3.jpeg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <motion.div className='sm:px-10 px-2 mx-[16px] '>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-6 font-sans'>


      <div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='rounded-lg'
            src={blogImg3}></motion.img>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px] '>10 May 2024</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='sm:text-[24px] text-[20px] text-white font-medium sm:mt-[20px] mt-[10px]'>Hudson’s  Efficient Logistic Facilities for Exporting Papers Products</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }} className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px]'>To ensure the efficient export of paper products and boards, it's crucial to...</motion.div>
          {/* <button className='text-white'>Read More</button> */}

          <Link to='/blogs/blogdetails3'>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              viewport={{ once: false, amount: 0.1 }}
              class="bg-[rgb(24,24,24)] hover:bg-white border-[#616161] text-white hover:text-black hover:duration-1000 font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4">Read More</motion.button>

          </Link>
        </div>
        

        <div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='rounded-lg'
            src={blogImg2}></motion.img>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px] '>10 May 2024</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='sm:text-[24px] text-[20px] text-white font-medium sm:mt-[20px] mt-[10px]'>Stay Ahead of the Curve: Trends Shaping the Paper Trading Industry</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }} className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px]'>Recyclable and Biodegradable Materials: Consumers and businesses are...</motion.div>
          {/* <button className='text-white'>Read More</button> */}

          <Link to='/blogs/blogdetails2'>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              viewport={{ once: false, amount: 0.1 }}
              class="bg-[rgb(24,24,24)] hover:bg-white border-[#616161] text-white hover:text-black hover:duration-1000 font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4">Read More</motion.button>

          </Link>
        </div>


        <div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='rounded-lg'
            src={blogImg1}></motion.img>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px] '>10 May 2024</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            className='sm:text-[24px] text-[20px] text-white font-medium sm:mt-[20px] mt-[10px]'>Diving into the World of Paper Trading: Different Types of Papers...</motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }} className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px]'>In the context of paper trading, "paper" metaphorically refers to the...</motion.div>
          {/* <button className='text-white'>Read More</button> */}

          <Link to='/blogs/blogdetails1'>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              viewport={{ once: false, amount: 0.1 }}
              class="bg-[rgb(24,24,24)] hover:bg-white border-[#616161] text-white hover:text-black hover:duration-1000 font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4">Read More</motion.button>

          </Link>
        </div>



       





      </div>
    </motion.div>
  )
}

export default Blogs
