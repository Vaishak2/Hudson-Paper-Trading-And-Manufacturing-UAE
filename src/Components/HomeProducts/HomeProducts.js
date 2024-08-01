import React, { useState, useEffect } from 'react';
import whitebleach from '../../Assets/product images/Artboard 3.png'
import wrappong from '../../Assets/product images/Artboard 4.png'
import gree from '../../Assets/product images/Artboard 1.png'
import whitefree from '../../Assets/product images/Artboard 6.png'
import coated from '../../Assets/product images/Artboard 10.jpg'
import whiteBoard from '../../Assets/product images/Artboard 22.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomeProducts() {
    const productList = [
        {
            id: 1,
            name: 'Kraft Papers (MG and MF)',
            image: whitebleach,
            dis: 'Bleached kraft papers are made from wood pulp that has been bleached to achieve a white color.',
            strength: 'High tensile strength and tear resistance.',
            surface: 'Smooth and suitable for printing.',
            uses: 'Packaging, food wrapping, industrial applications.'
        },
        {
            id: 2,
            name: 'MG Wrapping Papers',
            image: wrappong,
            dis: 'Machine-glazed (MG) papers are typically glossy on one side and matte on the other.',
            strength: 'Moderate, used in food packaging.',
            surface: 'Glossy for attractive printing.',
            uses: 'Wrapping paper, food packaging.'
        },
        {
            id: 3,
            name: 'Greaseproof and Baking Papers',
            image: gree,
            dis: 'Greaseproof papers resist grease and oil, ideal for food contact.',
            strength: 'High resistance to oil penetration.',
            surface: 'Heat resistant for baking.',
            uses: 'Baking sheets, food wrapping, disposable containers.'
        },
        {
            id: 4,
            name: 'White Woodfree Paper Rolls',
            image: whitefree,
            dis: 'Woodfree paper made from chemical pulp without mechanical pulp.',
            strength: 'High tensile strength and tear resistance.',
            surface: 'Smooth for high-quality printing.',
            uses: 'Printing, publishing applications.'
        },
        {
            id: 5,
            name: 'Duplex Boards',
            image: coated,
            dis: 'Thick paperboards with different finishes on each side.',
            strength: 'Sturdy for packaging.',
            surface: 'Coated for enhanced printability.',
            uses: 'Folding cartons, packaging boxes.'
        },
        {
            id: 6,
            name: 'SBS Boards & Coated Boxs',
            image: whiteBoard,
            dis: 'Solid Bleached Sulfate (SBS) boards have a white, smooth surface.',
            strength: 'Durable for premium packaging.',
            surface: 'Coated for gloss and printability.',
            uses: 'Food packaging, premium packaging.'
        }
    ];

    const [firstRender, setFirstRender] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setFirstRender(false);
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='sm:px-10 font-sans'>

           

          
            <Link to="/products">
                <div className="text-white text-right">View all</div>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9 }}
                viewport={{ once: false, amount: 0.1 }}

                
                className="grid sm:grid-cols-3 grid-cols-1 gap-6 font-sans"
            >
                {productList.map((product, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.9 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="flex flex-col justify-between sm:mt-4" key={product.id}>
                        <img className='rounded-lg' src={product.image} alt={product.name} />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.9 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="sm:text-[24px] text-[20px] text-white font-medium sm:mt-[20px] mt-[10px]">
                            {product.name}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.9 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px]">
                            {`${product.dis.substring(0, 35)}...`}
                        </motion.div>
                        <Link to={`/products/productdetails/${product.id}`}>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.9 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="bg-[rgb(24,24,24)] hover:bg-white border border-[#616161] text-white hover:text-black hover:duration-1000 hover:ease-in-out font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4">
                                Read More
                            </motion.button>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default HomeProducts;
