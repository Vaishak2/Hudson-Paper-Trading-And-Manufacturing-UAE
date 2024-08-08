import React, { useEffect } from 'react'
import { Form, Link } from 'react-router-dom'
import paperRopes from '../../Assets/product images/paper ropes.jpg'
import whitebleach from '../../Assets/product images/Artboard 3.png'
import wrappong from '../../Assets/product images/Artboard 4.png'
import gree from '../../Assets/product images/Artboard 1.png'
import whitefree from '../../Assets/product images/Artboard 6.png'
import coated from '../../Assets/product images/Artboard 10.jpg'
import whiteBoard from '../../Assets/product images/Artboard 22.png'
import cs1 from '../../Assets/product images/C1 Craft.png'
import aaaa from '../../Assets/product images/White top.png'
import kraftpaperflutingtestliner from '../../Assets/product images/Artboard 11.png'
import images from '../../Assets/product images/Artboard 18.png'
import Screenshot239 from '../../Assets/product images/Artboard 24.png'
import newsprint from '../../Assets/product images/Artboard 17.png'
import lightweightcoatedpaper from '../../Assets/product images/Artboard 13.png'
import images4 from '../../Assets/product images/Artboard 8.png'
import NCRPaperCarbonVsCarbonlessPaper from '../../Assets/product images/Artboard 15.png'
import { motion } from "framer-motion"



function Products() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const productList = [
        {
            "id": 0,
            "name": "Paper Ropes in Reels",
            "image": paperRopes,
            "dis": "These paper ropes are made from high-quality, durable paper materials, available in a variety of colors, including white, red, brown, and black.",
            "strength": "High tensile strength and resistance to breakage, ensuring reliable use across various applications.",
            "surface": "Smooth and consistent, ensuring uniform appearance and easy handling. Maintains color and texture under tension, ideal for aesthetic and functional applications.",
            "uses": "Commonly used in packaging, crafting, decoration, and industrial applications, these paper ropes are versatile and suitable for both practical and decorative purposes."
        },
        {
            "id": 1,
            "name": "Kraft Papers (MG and MF)",
            "image": whitebleach,
            "dis": "Bleached kraft papers are made from wood pulp that has been bleached to achieve a white color.",
            "strength": "High tensile strength and tear resistance.",
            "surface": "Smooth and suitable for printing.",
            "uses": "Packaging, food wrapping, industrial applications."
        },
        {
            "id": 2,
            "name": "MG Wrapping Papers",
            "image": wrappong,
            "dis": "Machine-glazed (MG) papers are typically glossy on one side and matte on the other.",
            "strength": "Moderate, used in food packaging.",
            "surface": "Glossy for attractive printing.",
            "uses": "Wrapping paper, food packaging."
        },
        {
            "id": 3,
            "name": "Greaseproof and Baking Papers",
            "image": gree,
            "dis": "Greaseproof papers resist grease and oil, ideal for food contact.",
            "strength": "High resistance to oil penetration.",
            "surface": "Heat resistant for baking.",
            "uses": "Baking sheets, food wrapping, disposable containers."
        },
        {
            "id": 4,
            "name": "White Woodfree Paper Rolls",
            "image": whitefree,
            "dis": "Woodfree paper made from chemical pulp without mechanical pulp.",
            "strength": "High tensile strength and tear resistance.",
            "surface": "Smooth for high-quality printing.",
            "uses": "Printing, publishing applications."
        },
        {
            "id": 5,
            "name": "Duplex Boards",
            "image": coated,
            "dis": "Thick paperboards with different finishes on each side.",
            "strength": "Sturdy for packaging.",
            "surface": "Coated for enhanced printability.",
            "uses": "Folding cartons, packaging boxes."
        },
        {
            "id": 6,
            "name": "SBS Boards & Coated Folding Boxs",
            "image": whiteBoard,
            "dis": "Solid Bleached Sulfate (SBS) boards have a white, smooth surface.",
            "strength": "Durable for premium packaging.",
            "surface": "Coated for gloss and printability.",
            "uses": "Food packaging, premium packaging."
        },
        {
            "id": 7,
            "name": "C1S Kraft (Carrier Boards)",
            "image": cs1,
            "dis": "C1S Kraft boards have a smooth, printable surface on one side.",
            "strength": "Printable and sturdy.",
            "surface": "Packaging, displays.",
            "uses": "Food packaging, premium packaging."
        },
        {
            "id": 8,
            "name": "White Top Test Liners",
            "image": aaaa,
            "dis": "Designed for stacking and protection.",
            "strength": "Designed for stacking and protection.",
            "surface": "Packaging, displays.",
            "uses": "Corrugated cartons.."
        },
        {
            "id": 9,
            "name": "Fluting Papers and Test Liners",
            "image": kraftpaperflutingtestliner,
            "dis": "Fluting and test liners are integral components in corrugated carton manufacturing.",
            "strength": "Designed for stacking and cushioning.",
            "surface": "Packaging, displays.",
            "uses": "Corrugated cartons.."
        },
        {
            "id": 10,
            "name": "PE Coated Cup Boards",
            "image": images,
            "dis": "Boards with a polyethylene coating for liquid resistance.",
            "strength": "Provides a barrier against moisture.",
            "surface": "Packaging, displays.",
            "uses": "Beverage cups, food containers."
        },
        {
            "id": 11,
            "name": "Uncoated stocks",
            "image": Screenshot239,
            "dis": "Boards with a polyethylene coating for liquid resistance.",
            "strength": "Suitable for various food packaging needs.",
            "surface": "Packaging, displays.",
            "uses": "Disposable cups, food containers."
        },
        {
            "id": 12,
            "name": "Newsprint Papers",
            "image": newsprint,
            "dis": "Lightweight, low-cost paper used for newspapers.",
            "strength": "Lightweight for economical printing.",
            "surface": "Packaging, displays.",
            "uses": "Newspapers, flyers, inserts."
        },
        {
            "id": 13,
            "name": "LWC Papers (Lightweight Coated)",
            "image": lightweightcoatedpaper,
            "dis": "Coated papers offering a glossy finish for printing.",
            "strength": "Lightweight for economical printing.",
            "surface": "Glossy for vibrant printing.",
            "uses": "Magazines, catalogs, advertising materials."
        },
        {
            "id": 14,
            "name": "Art Papers and Art Boards",
            "image": images4,
            "dis": "High-quality papers and boards for artistic and premium printing. ",
            "strength": "Smooth or textured as per artistic needs.",
            "surface": "Glossy for vibrant printing.",
            "uses": "Art prints, posters, luxury packaging."
        },
        {
            "id": 15,
            "name": "NCR Papers (Carbonless Papers)",
            "image": NCRPaperCarbonVsCarbonlessPaper,
            "dis": "Papers that create copies without carbon paper.",
            "strength": "Chemical coatings for copy transfer.",
            "surface": "Glossy for vibrant printing.",
            "uses": "Invoices, receipts, forms requiring duplicate copies."
        },

    ]


    return (
        <motion.div className='flex justify-center sm:px-16 px-2 sm:ml-8 font-sans mx-[16px]'>
            <div>


                <div className='text-white sm:text-[40px] text-[30px] text-center pb-14 font-medium'><span>Our </span><span className='text-secondary-color'>Products</span></div>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.9 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className='grid sm:grid-cols-3 grid-cols-1 gap-6 font-sans'>
                    {productList.map((product, index) => (

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.9 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className='flex flex-col justify-between sm:mt-12'>
                            <img className='rounded-lg' src={product.image}></img>


                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.9 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className='sm:text-[24px] text-[20px] text-white font-medium sm:mt-[20px] mt-[10px]'>{product.name}</motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.9 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px]'>{`${product.dis.substring(0, 35)}...`}</motion.div>

                            <Link to={`/products/productdetails/${product.id}`}>
                                <motion.button

                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.9 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    className="bg-[rgb(24,24,24)] hover:bg-white border hover:duration-1000 border-[#616161] text-white hover:text-black font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4">Read More</motion.button>


                            </Link>
                        </motion.div>
                    ))
                    }



                </motion.div>



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
            </div>



        </motion.div>
    )
}

export default Products