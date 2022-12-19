import React from 'react'

function Section2() {
  return (
    <section className='text-center p-5 font-bold'>
        <h2 className='text-xl p-5'>Shop by Category</h2>
        <div className='flex justify-between object-fill'>
        <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Categorey-Banner-1-desktop.png?v=1665398346" alt="1"/>
        <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Categorey-Banner-2-desktop.png?v=1665398394" alt="2" />
        </div>
        <div className='flex justify-between object-contain'>

        <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Categorey-Banner-3-desktop.png?v=1665398437" alt="3" />
        <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Categorey-Banner-4-desktop.png?v=1665398483" alt="4" />
        </div>
    </section>
  )
}

export default Section2