import React, { useState , useRef , useEffect } from 'react'
import logo from '../../Assets/hudsonLogo.png';
import networkLogo from '../../Assets/networkLogo.png'
import { Link, NavLink, useParams } from 'react-router-dom';

function Header() {

  const page = useParams()
  console.log(page)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const divRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the div
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);

  return (
    <>



      <nav id='home' style={{position: 'relative', zIndex: 40}} className="bg-black sm:h-[199px] h-[100px] text-white flex justify-between items-center sm:mx-[95px] mx:[16px]">

        <div className="text-white sm:w-[223px] w-[143px]  sm:pt-[10px]  pl-6 sm:pl-0">
          <Link to='/'>
            <img alt='logo' src={logo} className='w-[223px] h-auto rounded-lg shadow-lg'></img>
          </Link>
        </div>

        <div className='fixed h-12 text-text-color inset-0 hidden md:flex top-[75px] justify-center items-center mx-auto sm:w-[603px]'>
          <div className="p-3 sm:w-full z-50 bg-header-color hidden md:flex md:justify-around space-x-4  rounded-md opacity-90">
            <NavLink to='/' className="hover:text-white" style={({ isActive }) => ({ color: isActive ? '#44C444' : 'inherit' })}>Home</NavLink>
            <NavLink to='/aboutdetails' className="hover:text-white" style={({ isActive }) => ({ color: isActive ? '#44C444' : 'inherit' })} >About Us</NavLink>
            <NavLink to='/products' className="hover:text-white" style={({ isActive }) => ({ color: isActive ? '#44C444' : 'inherit' })}>Products</NavLink>
            <NavLink to='/blogs' className="hover:text-white" style={({ isActive }) => ({ color: isActive ? '#44C444' : 'inherit' })}>Blog</NavLink>
            <NavLink to='/contactus' className="hover:text-white" style={({ isActive }) => ({ color: isActive ? '#44C444' : 'inherit' })}>Contact</NavLink>
          </div>
          {/* <div className='fixed h-12 text-text-color inset-0 hidden md:flex top-16 justify-center items-center'>
            <div className="p-3 w-5/12 z-50 bg-header-color hidden md:flex md:justify-around space-x-4  rounded-md opacity-75">
              <Link to='/' className="hover:text-white">Home</Link>
              <Link to='/aboutdetails' className="hover:text-white">About Us</Link>
              <a href="#products" className="hover:text-white">Products</a>
              <Link to='/blogs' className="hover:text-white">Blog</Link>
              <Link to='/blogdetails' className="hover:text-white">Blog-2</Link>
              <Link to='/contactus' className="hover:text-white">Contact</Link>
            </div>
          </div> */}


        </div>
      
        <div className="md:hidden sm:mr-10 mr-0 cursor-pointer justify-between sm:translate-x-0 translate-x-[88px] ">
        {!isMenuOpen && (
          <button onClick={toggleMenu} className="text-xl focus:outline-none z-50 ">
            ☰
          </button>
        )}
        {isMenuOpen && (
          <button onClick={toggleMenu} className="text-xl focus:outline-none z-50 ">
            X
          </button>
        )}
        </div>
      
        {isMenuOpen && (
          <div ref={divRef} className="z-50 flex flex-col space-y-4 md:hidden bg-black text-white p-4 absolute top-[6rem] left-0 right-0">
            <Link to='/' className="hover:text-white" onClick={toggleMenu}>Home</Link>
            <Link to='/aboutdetails' className="hover:text-white" onClick={toggleMenu}>About Us</Link>
            <Link to='/products' className="hover:text-white" onClick={toggleMenu}>Products</Link>
            <Link to='/blogs' className="hover:text-white" onClick={toggleMenu}>Blog</Link>
            <Link to='/contactus' className="hover:text-white"  onClick={toggleMenu}>Contact</Link>
            {/* <a href="#home" className="">Home</a>
              <a href="#about" className="">About</a>
              <a href="#products" className="">Products</a>
              <a href="#blog" className="">Blog</a>
              <a href="#contact" className="">Contact</a> */}
          </div>
        )}
        <Link to='/contactus'>
        <div className=" flex items-center justify-end hover:cursor-pointer">
         <button className='sm:w-[144px] sm:h-12 bg-[#ffffff] sm:text-black hover:text-gray-background rounded-[8px] hover:bg-slate-300 hover:duration-1000 ease-in-out sm:text-[12px] sm:font-medium hidden sm:block ' >Get in touch</button>
        </div>
        </Link>
      </nav>


    </>
  )
}

export default Header
