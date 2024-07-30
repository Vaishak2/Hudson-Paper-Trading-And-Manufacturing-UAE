import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';


function Footer() {
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const showSuccessToast = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thank you for subscribing.',
      showConfirmButton: false,
      timer: 2300
    });
  };

  const subscribe = (event) => {
    event.preventDefault();

    // Validate email format
    const isValidEmail = validateEmail(emailValue);

    if (isValidEmail) {
      // Handle subscription logic
      console.log('Subscribed with email:', emailValue);

      // Clear email input
      setEmailValue('');

      // Show success message
      showSuccessToast();
    } else {
      // Show error message
      setEmailError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (


    <footer>
      <div className='p-1 sm:mx-[95px] sm:translate-x-[-9px]  '>
        <div className="bg-black text-primary-color mx-20  sm:translate-x-[-27px]">
          <div className="container font-sans mt-20 mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 font-thin ml-[-92px]">
              <div className="sm:hidden bg-[#131313] px-1  w-[267px] rounded-xl translate-y-[-16px] ml-2 translate-x-[10px] sm:translate-x-[10px]" >
                <h3 className="font-medium text-lg  pt-2 pl-2">Join Our Newsletter</h3>
                <div className=" mt-5 flex pl-[10px] pr-[10px]">
                  <input
                    className='w-full rounded-l-lg  text-primary-color focus:outline-none bg-[#02273A] text-[10px] px-3'
                    id='form_input'
                    type="email"
                    value={emailValue}
                    onChange={(e) => {
                      setEmailValue(e.target.value);
                      setEmailError('');
                    }}
                    placeholder='Enter your mail'
                    style={{ caretColor: 'black' }} // Ensure caret color is set
                  />
                  <button type="submit" onClick={subscribe} className="w-[100px] rounded-r-lg bg-[#000E15] p-2 text-[10px] hover:bg-slate-900">
                    Subscribe
                  </button>
                </div>
                <p className="py-8 pb-6 pl-2 text-xs text-[#7D7F78]">* Will send you weekly updates for your better tool management.</p>
              </div>
              <div className='md:col-span-2 mx-0 sm:ml-16 '>
                <h3 className="font-medium text-lg mb-8">Reach us</h3>
                <div className="mb-3 font-normal text-base leading-6 hover:text-secondary-color"><i className="fas fa-phone mr-4 rotate-90"></i><span>+971 55 4646426</span></div>
                <div className="mb-3 font-normal text-base leading-6 hover:text-secondary-color"><i className="fas fa-envelope mr-4"></i><span>info@hudsonpapers.com</span></div>
                <div className='font-normal text-base leading-6 flex hover:text-secondary-color'><i className="fas fa-map-marker-alt mr-4"></i><div><span>GH25+8JV - Al Muqta-Al Muqta, <br></br>1- Emirate of Umm Al Quwain - United Arab Emirates</span></div></div>
              </div>
              <div className='sm:hidden flex justify-around gap-20'>
                <div>
                  <h3 className="font-medium text-lg mb-4">Company</h3>
                  <ul>
                    <li className="mb-4 font-thin"><Link to='/aboutdetails' className="hover:text-secondary-color">About</Link></li>
                    <li className="mb-4 "><Link to='/contactus' className="font-normal text-base leading-6 hover:text-secondary-color">Contact</Link></li>
                    <li className="mb-4 font-thin"><Link to='/blogs' className="hover:text-secondary-color">Blogs</Link></li>
                  </ul>
                </div>
                <div className='whitespace-nowrap'>
                  <h3 className="font-medium text-lg mb-4 whitespace-nowrap">Quick Links</h3>
                  <ul>
                    <li className="mb-4 font-thin"><Link to='/'> Hudson Traders</Link></li>
                    <li className="mb-4 font-thin"><Link to='/products'>Products</Link></li>

                  </ul>
                </div>
              </div>
              <div className='hidden sm:block'>
                <h3 className="font-medium text-lg mb-4">Company</h3>
                <ul>
                  <li className="mb-4 font-thin hover:text-secondary-color"><Link to='/aboutdetails'>About</Link></li>
                  <li className="mb-4 hover:text-secondary-color"><Link to='/contactus'>Contact</Link></li>
                  <li className="mb-4 font-thin hover:text-secondary-color"><Link to='/blogs'>Blogs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4">Legal</h3>
                <ul>
                  <li className="mb-4 font-thin"><Link to='/privacypolicy' className="hover:underline hover:text-secondary-color">Privacy Policy</Link></li>
                  <li className="mb-4 font-thin"><Link to='/termsandservices' className="hover:underline hover:text-secondary-color">Terms & Services</Link></li>
                </ul>
              </div>
              <div className='hidden sm:block'>
                <h3 className="font-medium text-lg mb-4">Quick Links</h3>
                <ul>
                  <li className="mb-4 font-thin"><Link to='/' className="hover:underline hover:text-secondary-color">Hudson Traders</Link></li>
                  <li className="mb-4 font-thin"><Link to='/products' className="hover:underline hover:text-secondary-color">Products</Link></li>
                </ul>
              </div>
              <div className="hidden sm:flex flex-col justify-evenly bg-[#131313] px-1 py-2 w-[267px] rounded-xl translate-y-[-16px] ml-2 translate-x-[10px] sm:translate-x-[10px]" >
                <h3 className="font-medium text-lg  pl-2">Join Our Newsletter</h3>
                <div className="flex pl-[10px] pr-[10px]">
                <input
                    className='w-full rounded-l-lg  text-primary-color focus:outline-none bg-[#02273A] text-[10px] px-3'
                    id='form_input'
                    type="email"
                    value={emailValue}
                    onChange={(e) => {
                      setEmailValue(e.target.value);
                      setEmailError('');
                    }}
                    placeholder='Enter your mail'
                    style={{ caretColor: 'black' }} // Ensure caret color is set
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1 ml-1 absolute bottom-1 left-4">{emailError}</p>}
                  <button  onClick={subscribe} className="w-[100px] rounded-r-lg bg-[#000E15] p-2 text-[10px] hover:bg-slate-900">
                    Subscribe
                  </button>
                </div>
                <p className=" pb-1 pl-2 text-xs text-[#7D7F78]">* Will send you weekly updates for your better tool management.</p>
              </div>
            </div>
            <div className="mt-8 text-center mb-12 text-[8px] sm:text-[16px]">
              <div><p>&copy; 2024 <span className='text-secondary-color'>Hudson Traders</span>. All rights reserved.</p></div>
              <div className="flex justify-center mt-6 ml-[39px]">
                <a href="https://www.facebook.com/profile.php?id=61560821918568" className="mx-2 hover:text-secondary-color text-[20px]"><i className="fab fa-facebook-f"></i></a>
                {/* <a href="https://x.com/i/flow/login" className="mx-2  hover:text-secondary-color text-[20px]"><i class="fab fa-twitter"></i></a> */}
                <a href="https://www.instagram.com/hudsonpapers?igsh=MWVycWNhdTJwMGc5OQ==" className="mx-2  hover:text-secondary-color text-[20px]"><i className="fab fa-instagram"></i></a>
                <a href="#" className="mx-2  hover:text-gray-400 text-[20px]"><i className="fab fa-rss"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
