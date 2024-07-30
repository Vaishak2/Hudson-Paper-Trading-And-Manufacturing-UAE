import React from 'react';
import { motion } from "framer-motion"
function CompanyContact() {
  return (

    <div className="flex flex-col items-center container mx-auto px-5 py-10 lg:px-0 lg:py-24 bg-black border border-[#616161] text-center rounded-[20px] mt-[110px]">
      <motion.h1 className="text-primary-color lg:text-4xl  mb-4 sm:text-[50px]" style={{ lineHeight: '50px' }}>
        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          viewport={{ once: false, amount: 0.1 }}
          className='font-semibold'>Elevate the way you scale</motion.div>
          
           <motion.div

initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: 0.1, duration: 0.9 }}
viewport={{ once: false, amount: 0.1 }}
 className='font-thin'>your business</motion.div>

</motion.h1>
      <motion.p
      initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: 0.1, duration: 0.9 }}
viewport={{ once: false, amount: 0.1 }}
       className="text-[#7D7F78] text-sm mb-8 p-4">Get ready to start producing stunning, efficient design <br /> work without the hassles of hiring. Coming soon!</motion.p>
      <motion.a
      initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: 0.1, duration: 0.9 }}
viewport={{ once: false, amount: 0.1 }}
       href='https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=info@hudsonpapers.com' target='_blank' className="flex items-center justify-center w-fit md:w-1/2 lg:w-[454px] h-[80px] px-4 rounded-[10px] bg-gray-background border border-[#616161] focus:border-white text-center font-medium text-white placeholder-opacity-75 ">info@hudsonpapers.com</motion.a>
    </div>


    // <div className="container mx-auto px-5 py-10 lg:px-0 lg:py-24 bg-gray-background text-center rounded-[80px] mt-[110px]">
    //   <h1 className="text-primary-color lg:text-4xl font-semibold mb-4 text-[40px]" style={{ lineHeight: '50px' }}>Elevate the way you scale <br />your business</h1>
    //   <p className="text-[#7D7F78] text-sm mb-8 p-4">Get ready to start producing stunning, efficient design <br /> work without the hassles of hiring. Coming soon!</p>
    //   <input className="text-[#7D7F78] w-full md:w-1/2 lg:w-[454px] px-4 py-3 rounded-full bg-gray-background border border-[#616161] focus:border-white text-center font-medium placeholder-[#7D7F78] placeholder-opacity-75 " type="email" placeholder="Enter your email address" />
    // </div>
  );
}

export default CompanyContact;
