import React from 'react'

function NewsLetter() {
  return (
    <div>
        <header className='text-center space-y-2'>
        <h1 className='text-2xl font-bold font-mono text-orange-600 '>Join our newsletter</h1>
        <p>get plays,ideas, event invitations, sale alerts and more</p>
        </header>
        <section className='grid grid-cols-3'>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Desktop-Animal-1_200x200.png?v=1667214282" alt="left img" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='border-2 border-orange-600 rounded-full bg-white max-w-2xl p-3'>
                    <input type="text"  className='bg-transparent focus:outline-none' />
                </div>
            </div>
            <div className='flex justify-end'>
                <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Desktop-Animal-2_200x200.png?v=1667214306" alt="right img" />
            </div>
        </section>

    </div>
  )
}

export default NewsLetter