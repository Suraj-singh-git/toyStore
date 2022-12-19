import { FaceSmileIcon, TagIcon, TruckIcon } from '@heroicons/react/24/solid'
import React from 'react'


function Footer() {
  return (
    <footer className='bg-yellow-500 font-bold py-2 px-5 grid md:grid-cols-3 grid-cols-2 gap-5'>
        <div>
            <h1 className='text-xl'>Help & about</h1>
            <p>Contact Us (+91 9148581222)</p>
            <p>Shipping and Return Policy</p>
            <p>FAQs</p>
            <p>Store Locator</p>
            <p>Track your Order</p>
            <p>Press & Awards</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p className='text-sm'>Maintained By : Demo</p>
        </div>
        <div>
            <p>Shipping Charges Apply 
                <TruckIcon className='h-7' />
            </p>
            <p>Two-day Returns
                <FaceSmileIcon className='h-7' />
            </p>
            <p>COD Available
                <TagIcon className='h-7' />
            </p>
            <p>Securely Pay Using</p>
            <div className="grid grid-cols-1">
                <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/visa_PNG2_460x.png?v=1667319248" alt="card4" />
            </div>
        </div>
        <div>
            <h1 className='text-xl'>Follow Us</h1>
            <div className='grid grid-cols-4'>
                <i className="fab fa-facebook fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-youtube fa-2x"></i>

            </div>
        </div>
    </footer>
  )
}

export default Footer