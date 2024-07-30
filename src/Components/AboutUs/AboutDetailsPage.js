import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import About_img1 from '../../Assets/Frame 1000001896 (2).png';
import Eye_img from '../../Assets/Frame.png';
import Arrow_img from '../../Assets/Frame (1).png';
import Our_history from '../../Assets/Rectangle 3871.png';
import '../AboutUs/AboutDetails.css'

function AboutDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const [firstRender, setFirstRender] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setFirstRender(false);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className={`main-container sm:mx-[95px] mx-[16px] ${firstRender ? 'first-render' : ''}`}>
      <motion.div className='sub-container sm:flex justify-between'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9, y: 0, transition: { delay: 0.2, duration: 0.9 } }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: .5 }}
      >
        <div className='sm:flex justify-between'>
          <img className='sm:w-[579px] w-auto sm:h-[429px] h-[301px] sm:mt-[28px]' src={About_img1} alt="About Us" />
        </div>
        <motion.div className='text-white sm:w-[615px] sm:ml-[84px] mt-[43px]'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='sm:text-[32px] text-[24px] leading-[36px] font-semibold sm:leading-[48px] mb-[24px]'>Who <span className='text-secondary-color'>We Are</span></h1>
          <p className='sm:text-[18px] text-[16px] leading-[28px] sm:leading-[28px] mb-[24px] font-normal text-justify text-[#C9C9C9]'>
          Hudson Group is one of  the world's leading wholesalers and distributors of news papers. Our team of dedicated and skilled employees is committed to delivering the best services to our clients.
          </p>
          <p className='sm:text-[18px] text-[16px] leading-[28px] sm:leading-[28px] font-normal text-justify text-[#C9C9C9]'>
          Hudson Group is a highly regarded and well-established wholesaler and distributor of paper covers. With a rich history dating back to the last decade, We have been consistently distributing  top-quality paper products for various industries. Our commitment to excellence and attention to detail have made us a trusted name in the market.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className='cards sm:flex justify-between mt-[48px]'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className={`card1 sm:w-[48%] w-full bg-[#242424] sm:mt-[111px] pb-5`}>
          <div className='header pt-[31px] flex'>
            <img className='sm:w-[56px] w-[40px] h-[40px] sm:h-[56px] sm:ml-[56px] ml-[32px]' src={Eye_img} alt="Our Vision" />
            <h1 className='sm:ml-[34px] ml-[16px] sm:text-[32px] text-[24px] leading-[36px] sm:leading-[48px] text-white font-semibold'>Our Vision</h1>
          </div>
          <p className='text-[#C9C9C9] sm:text-[18px] text-[15px] leading-[21px] sm:font-normal sm:leading-[28px] text-justify sm:mx-[56px] mx-[32px] sm:mt-7 pt-3'>
          Our company is dedicated to building strong and enduring partnerships with our customers, focusing on the long-term success of our clients. We strive to deliver services that go beyond expectations, leaving a lasting impression on those we work with. 
At the core of our business philosophy

 

            {activeSection === 'vision' && (
              <span> is a dedication to excellence, ensuring that every interaction with our clients is of the highest quality. We prioritize reliability, ensuring that our customers can trust us to deliver on our promises every time. 
Customer satisfaction is our top priority, and we go above and beyond to ensure that our clients are happy with the services we provide. Our commitment to quality, reliability, and customer satisfaction is what sets us apart from others in the industry, making us a trusted partner for all your needs.
</span>
            )}
            <button onClick={() => toggleSection('vision')} className='text-[#868686] text-[16px] focus:outline-none ml-[16px]'>
              {activeSection === 'vision' ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>
        <div className={`card2 sm:w-[48%] w-full bg-[#242424] sm:mt-[111px] mt-[24px] pb-5`}>
          <div className='header pt-[31px] flex'>
            <img className='sm:w-[56px] w-[40px] h-[40px] sm:h-[56px] sm:ml-[56px] ml-[32px]' src={Arrow_img} alt="Our Mission" />
            <h1 className='sm:ml-[34px] ml-[16px] sm:text-[32px] text-[24px] leading-[36px] sm:leading-[48px] text-white font-semibold'>Our Mission</h1>
          </div>
          <p className='text-[#C9C9C9] sm:text-[18px] text-[15px] leading-[21px] sm:font-normal sm:leading-[28px] text-justify sm:mx-[56px] mx-[32px] sm:mt-7 pt-3'>
          Our company specializes in offering top-notch facilities for the distribution and trading of paper products and boards to our esteemed clients. With a strong commitment to excellence, we ensure that our customers receive the highest quality services that cater to all their requirements.

            {activeSection === 'mission' && (
              <span> We strive to exceed our clients' expectations at every step of the process. Our team of experts is dedicated to delivering personalized solutions that are tailored to meet the unique needs of each customer.
Whether you are looking for a reliable partner for paper product distribution or seeking to trade boards with confidence, our company is your go-to destination for all your requirements. Trust us to provide you with the best facilities and services in the industry, ensuring your complete satisfaction every time.
</span>
            )}
            <button onClick={() => toggleSection('mission')} className='text-[#868686] text-[16px] focus:outline-none ml-[16px]'>
              {activeSection === 'mission' ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>
      </motion.div>
      <div className='ourHistory'>
        <h1 className='sm:text-[32px] text-[24px] sm:leading-[48px] font-semibold text-white sm:mb-[24px] sm:mt-[79px]'>Our <span className='text-secondary-color'>History</span></h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <img className='sm:w-auto sm:h-auto sm:justify-center hidden lg:block rounded-lg' src={Our_history} alt="Our History" />
        </motion.div>
        <div className='paraghraph sm:w-auto sm:h-full justify-center mx-auto sm:mt-[40px]'>
          <p className='sm:text-[64px] italic text-[#C9C9C9] sm:visible invisible leading-[28px]'> "</p>
          <motion.p className='sm:text-[18px] sm:leading-[28px] text-[#C9C9C9] text-justify'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}>
            Hudson Paper Trading, established in 1996, has a long-standing reputation for specializing in importing, exporting, and indenting large volumes of papers and boards from various countries such as Japan, China, Malaysia, USA, Netherlands, Scandinavian countries, Canada, India, Spain, France, and Australia. With over two decades of experience in the industry, we have built strong relationships with suppliers across the globe to ensure the highest quality products for our customers. <br />
            As one of the largest and most preferred suppliers in the field of paper and boards, Hudson Paper Trading caters to end-users in the UAE, Middle East, India, and other Asian countries. Our expertise lies in importing, re-exporting, and supplying directly to end-users for bulk orders, ensuring timely delivery and competitive pricing. With a commitment to excellence and customer satisfaction, Hudson Paper Trading continues to be a trusted partner for businesses seeking top-notch paper and board products.
          </motion.p>
          <p className='sm:text-[64px] sm:visible invisible italic text-end text-[#C9C9C9]'> "</p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetailsPage;
