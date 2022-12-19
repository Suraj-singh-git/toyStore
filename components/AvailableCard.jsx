import React from 'react'

function AvailableCard() {
  return (
    <div>
        <h1 className='text-center text-2xl font-bold'>We are also available at</h1>
        <section className="grid grid-cols-3 p-5 gap-20">
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Logos-03.png?v=1666967191" alt="av1" />
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Logos-01.png?v=1666967212" alt="av2" />
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Logos-02.png?v=1666967254" alt="av3" />
        </section>
    </div>
  )
}

export default AvailableCard