import React from 'react';
import './Gallery.css'
import image1 from '../../Assets/unsplash_3125KM62vz4.jpg'
import image2 from '../../Assets/unsplash_9DaOYUYnOls.jpg'
import image3 from '../../Assets/unsplash_9hENZGxNLoo.jpg'
import image4 from '../../Assets/unsplash_IhxM7w392e0.jpg'
import image5 from '../../Assets/unsplash_UFxcqwR2Jwc.jpg'
import image6 from '../../Assets/unsplash_V2OyJtFqEtY.jpg'
import image7 from '../../Assets/unsplash_aJTiW00qqtI.jpg'
import image8 from '../../Assets/unsplash_qDD3qog6Yng.jpg'
import image9 from '../../Assets/unsplash_xmddEHyCisc-1.jpg'
import image10 from '../../Assets/unsplash_xmddEHyCisc-2.jpg'
import image11 from '../../Assets/unsplash_xmddEHyCisc.jpg'


function Gallery() {
  return (
  <div id='products' class="grid grid-cols-2 md:grid-cols-4 gap-4">

  <div class="grid gap-4">
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image3}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center "
        src={image2}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image4}
        alt="gallery-photo"
      />
    </div>
  </div>

  <div class="grid gap-4">
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image1}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image9}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center "
        src={image6}
        alt="gallery-photo"
      />
    </div>   
  </div>

  <div class="grid gap-4">
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image11}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center "
        src={image7}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image8}
        alt="gallery-photo"
      />
    </div>  
  </div>
  
  <div class="grid gap-4">
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image4}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image5}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="galleryImg h-full max-w-full  object-cover object-center"
        src={image2}
        alt="gallery-photo"
      />
    </div>
  </div>

</div>
  )
}

export default Gallery