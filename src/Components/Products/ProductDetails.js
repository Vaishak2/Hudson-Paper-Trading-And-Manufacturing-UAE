import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import blogImg1 from '../../Assets/blogImg1.jpeg'
import blogImg2 from '../../Assets/blogImg2.jpeg'
import blogImg3 from '../../Assets/blogImg3.jpeg'
import Rectangle from '../../Assets/Rectangle 38681.png'
import Rectangle3891 from '../../Assets/Rectangle 3891.png'
import Rectangle3892 from '../../Assets/Rectangle 3892.png'

import paperRopes from '../../Assets/product images/paper ropes 2.jpg'
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
import unbleach from '../../Assets/product images/Unbleached Craft Paper.png'

function Productdetails() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const productList = [
    {
      "id": 0,
      "name": "Paper Ropes in Reels ( 5000 meter per roll )",
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
    {
      "id": 16,
      "name": "Unbleached Kraft Papers",
      "image": unbleach,
      "dis": "Natural brown, minimally processed; sturdy; rough texture. Used in grocery bags, agricultural products, packaging.",
      "strength": "Sturdy and suitable for heavy-duty applications.",
      "surface": "Rough texture, good for packaging and void fillers.",
      "uses": "Grocery bags, agricultural products, packaging."
    }

  ]

  const productId = useParams()

  const productIdToShow = parseInt(productId.id); // Change this ID to show a different product

  // Using find to get the specific product
  const product = productList.find(product => product.id === productIdToShow);

  const startIndex = productList.findIndex(product => product.id === productIdToShow);

  // Get the next three products starting from the found index
  const productsToDisplay = productList.slice(startIndex + 1, startIndex + 4);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='sm:px-[95px] px-4 text-white'>
      <div className='w-full gap-32 sm:flex '>
        <div className='sm:w-[507px]'><img src={product.image} className='sm:h-[406px] sm:w-[507px] rounded-lg'></img></div>
        <div className='sm:w-[615px]'>
          <div className='mt-8 sm:mt-0 text-2xl'>{product.id === 1 ? 'Bleached Kraft Papers' : product.name}</div>
          <div className='py-6 text-[#C9C9C9]'>{product.dis}</div>
          <div className=' sm:flex xl:gap-16 sm:gap-8'>
            <div className='text-[#C9C9C9]'>Properties: </div>
            <div>
              <div>Strength:<span className='text-[#C9C9C9]'> {product.strength}</span></div>
              <div className='py-2'>Surface: <span className='text-[#C9C9C9]'> {product.surface} </span></div>
              <div>Uses: <span className='text-[#C9C9C9]'> {product.uses} </span></div>
            </div>
          </div>

          <div>
            {product.id === 1 ?
              <div className='sm:mt-6'>
                <div className='text-[#C9C9C9] py-4'>Variants:</div>
                <div className='flex gap-5'>

                  <div>
                    <div>
                      <div><img className='border-4 rounded-lg border-secondary-color' src={product.image} width={100} height={20}></img></div>
                      <div className='w-20 whitespace-nowrap text-secondary-color leading-5'>Bleached <br />
                        Kraft Papers</div>
                    </div>
                  </div>

                  <Link to='/products/productdetails/16'>
                    <div onClick={scrollToTop}>
                      <div>
                        <div><img className='rounded-lg' src={unbleach} width={100} height={20}></img></div>
                        <div className='w-20 whitespace-nowrap leading-5'>Unbleached  <br />
                          Kraft Papers</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div> : null}
          </div>

          <div>
            {product.id === 16 ?
              <div>
                <div className='text-[#C9C9C9] py-4'>Variants:</div>
                <div className='flex gap-5'>

                  <Link to='/products/productdetails/1'>
                    <div onClick={scrollToTop}>
                      <div>
                        <div><img className='rounded-lg' src={whitebleach} width={100} height={20}></img></div>
                        <div className='w-20 whitespace-nowrap leading-5'>Bleached  <br />
                          Kraft Papers</div>
                      </div>
                    </div>
                  </Link>

                  <div>
                    <div>
                      <div><img className='border-4 rounded-lg border-secondary-color' src={product.image} width={100} height={20}></img></div>
                      <div className='w-20 whitespace-nowrap text-secondary-color leading-5'>Unbleached <br />
                        Kraft Papers</div>
                    </div>
                  </div>


                </div>
              </div> : null}
          </div>

        </div>
      </div>

      {productsToDisplay.length !== 0 ? <div className='sm:text-[32px] mt-[72px] font-medium'>More products</div> : null}
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-6 font-sans'>
        {productsToDisplay.map(product => (
          <div className='mt-8'>
            <img className='rounded-lg' src={product.image}></img>
            <div className='sm:text-[24px] text-[20px] text-white font-medium sm:mt-[20px] mt-[10px]'>{product.name}</div>
            <div className='sm:text-[18px] text-[16px] text-gray-400 sm:mt-[15px] mt-[10px]'>{`${product.dis.substring(0, 35)}...`}</div>
            {/* <button className='text-white'>Read More</button> */}
            <Link to={`/products/productdetails/${product.id}`}>
              <button class="bg-[rgb(24,24,24)] hover:duration-1000 hover:bg-white border border-[#616161] text-white hover:text-black font-thin sm:w-[188px] sm:h-[52px] py-2 px-4 rounded-md sm:mt-5 mt-4" onClick={scrollToTop}>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productdetails
