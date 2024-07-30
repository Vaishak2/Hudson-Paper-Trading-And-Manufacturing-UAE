import React from 'react';
import BrandImage1 from '../../Assets/s.png';
import BrandImage2 from '../../Assets/a.png';
import BrandImage3 from '../../Assets/d.png';
import BrandImage4 from '../../Assets/f.png';
import BrandImage5 from '../../Assets/j.png';

function Brands() {
  return (
    <div>
      <div className='text-center justify-center font-semibold mt-[110px] text-[26px]'>
        <span className='text-secondary-color'>Already chosen</span> <span className='text-tertiary-color'>by the leaders</span>
      </div>
      <div className="w-full sm:w-4/5 flex flex-wrap justify-between mt-11 mb-22 mx-auto">
        <img className='w-20 h-19 mb-3' src={BrandImage1} alt="brandsImg" />
        <img className='w-20 h-19 mb-3' src={BrandImage2} alt="brandsImg" />
        <img className='w-20 h-19 mb-3' src={BrandImage3} alt="brandsImg" />
        <img className='w-20 h-19 mb-3' src={BrandImage4} alt="brandsImg" />
        <img className='w-20 h-19 mb-3' src={BrandImage5} alt="brandsImg" />
      </div>
    </div>
  );
}

export default Brands;

