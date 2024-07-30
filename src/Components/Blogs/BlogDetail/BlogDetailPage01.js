import React, { useEffect } from 'react';
import blogdetail01 from '../../../Assets/Rectangle 386301.jpg'; // Update with your image path
import blogdetail02 from '../../../Assets/Rectangle 386402.jpg'; // Update with your image path
import blogImg1 from '../../../Assets/blogImg1.jpeg'
import blogImg2 from '../../../Assets/blogImg2.jpeg'
import blogImg3 from '../../../Assets/blogImg3.jpeg'
import similarBlog1 from '../../../Assets/SimilarBlogs/similar01.jpg'; // Update with your image path
import similarBlog2 from '../../../Assets/SimilarBlogs/similar02.jpg'; // Update with your image path
import similarBlog3 from '../../../Assets/SimilarBlogs/similar03.jpg'; // Update with your image path
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

function BlogDetailPage01() {

  useEffect (()=> {
    window.scrollTo(0, 0);
},[])

  return (
    <div className="bg-black text-white min-h-screen py-8 sm:mx-[95px] mx-2">
      <div className="container mx-auto px-4">

        <div className='overflow-hidden'>
          <img
            className="w-full object-cover rounded-lg"
            src={blogdetail01}
            style={{ maxHeight: "438px", minHeight: "288px" }}
            alt="Envelope with paper"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-8">Diving into the World of Paper Trading : Different Types of Papers to Know</h2>

          <div className="mt-18 ">
            {/* <h3 className="text-xl font-semibold mb-2 mt-[50px]" >Introduction To Paper Trading</h3> */}
            <p className="text-[#C9C9C9]">
              In the context of paper trading, "paper" metaphorically refers to the medium used for simulated trading rather than
              actual physical paper. However, drawing an analogy with different types of actual papers can help elucidate the diverse
              tools and methods available in paper trading. Here's a creative exploration of this concept, from "Bond" to "Newsprint."

            </p>
          </div>

          <div className="mt-18">
            <h3 className="text-xl font-semibold mb-2 mt-[50px]">1. Bond Paper: The Basics of Paper Trading
            </h3>
            <p className="text-[#C9C9C9]">
              <span className='font-bold'>High-Quality and Reliable : </span><span className='ml-2'>Just as bond paper is known for its quality
              and reliability, the foundational tools of paper trading are robust and
              essential for any aspiring trader.</span>
            </p>
            <p className="text-[#C9C9C9] mt-3">
              <span className='font-bold'>Example :</span><span className='ml-2'>Platforms like Thinkorswim by TD Ameritrade, which offer comprehensive features and
              real-time data for a realistic trading experience.</span>

            </p>
          </div>

          <div className="mb-8">
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">2. Notebook Paper : Educational and Learning Tools
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Simple and Educational :</span><span className='ml-2'> Notebook paper represents the educational aspect of paper trading, where aspiring traders jot down notes, strategies, and lessons learned.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Digital trading journals and educational resources available on platforms such as Investopedia's simulator or TradingView's tutorials.</span>
              </p>
            </div>
            <div className='overflow-hidden mt-6'>
              <img
                className="w-full object-cover rounded-lg"
                src={blogdetail02}
                style={{ maxHeight: "438px", minHeight: "212px" }}
                alt="Paper rolls"
              />
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">3. Graph Paper : Analytical Tools and Performance Tracking
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Precision and Analysis :</span><span className='ml-2'> JGraph paper symbolizes the analytical tools used in paper trading to track and evaluate performance with precision.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Tools for backtesting strategies and performance metrics offered by platforms like Interactive Brokers’ PaperTrader.</span>
              </p>
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">4. Newsprint : Staying Informed with Market Simulations
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Current and Dynamic :</span><span className='ml-2'>Newsprint represents the need to stay informed and react to dynamic market conditions, much like staying updated with the latest news.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Platforms that provide real-time news feeds and market updates, such as Webull, which helps users practice trading in a constantly changing environment.</span>
              </p>
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">5. Tissue Paper : Handling Emotions and Soft Skills
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Delicate and Sensitive : </span><span className='ml-2'>Tissue paper metaphorically addresses the emotional aspect of trading, emphasizing the importance of managing stress and emotions delicately.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Simulated trading that helps traders experience and manage the psychological aspects of trading, preparing them for real-world emotional challenges.</span>
              </p>
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">6. Parchment Paper : Historical Data and Backtesting
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Durability and Tradition :</span><span className='ml-2'>Parchment paper symbolizes the use of historical data for backtesting trading strategies, providing a durable foundation for future decisions.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Backtesting tools available on platforms like TradingView, allowing traders to test their strategies against historical market data.</span>
              </p>
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">7. Glossy Paper : High-Fidelity and Advanced Simulations
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Sophisticated and Attractive :</span><span className='ml-2'>Glossy paper represents advanced, high-fidelity trading simulations that offer an attractive and sophisticated user experience.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Algorithmic trading simulations and API access for creating custom trading strategies on platforms like QuantConnect.</span>
              </p>
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">8. Construction Paper : Building and Customizing Strategies
              </h3>
              <p className="text-[#C9C9C9]">
                <span className='font-bold'>Versatile and Creative : </span><span className='ml-2'>Construction paper symbolizes the versatility and creativity in building and customizing trading strategies.</span>
              </p>
              <p className="text-[#C9C9C9] mt-3">
                <span className='font-bold'>Example :</span><span className='ml-2'>Platforms like MetaTrader that offer extensive customization options and support for various trading styles and strategies.</span>
              </p>
            </div>
            <div className="mt-18">
              <h3 className="text-xl font-semibold mb-2 mt-[50px]">Conclusion
              </h3>
              <p className="text-[#C9C9C9]">
              By drawing analogies with different types of physical papers, we can better understand the various tools and methods available in paper trading. From the reliability of bond paper to the versatility of construction paper, each type represents a unique aspect of the paper trading experience. Utilizing these diverse tools allows aspiring traders to comprehensively prepare for real-world trading, enhancing their skills, strategies, and emotional resilience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[60px]" >
          <h3 className="text-xl font-semibold mb-4">Similar Blogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          
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
        </div>

      </div>
    </div>
  );
}

export default BlogDetailPage01;
