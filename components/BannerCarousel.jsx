import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function BannerCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      swipeable
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      infiniteLoopDelay={500}
       
    >
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/December_WebBanner_Mobile__Image_1_2048x.jpg?v=1671038882" alt="banner1" />
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/December_WebBanner-Desktop_05.12.22__Image_1_2048x.jpg?v=1670493933" alt="banner2" />
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/December_WebBanner-Desktop_05.12.22__Image_2_2048x.jpg?v=1670493933" alt="banner3" />
        </div>
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/December_WebBanner-Desktop_05.12.22__Image_3_2048x.jpg?v=1670493933" alt="banner4" />
        </div>
    </Carousel>
  )
}

export default BannerCarousel