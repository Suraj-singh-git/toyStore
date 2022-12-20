import React from 'react'

function Navbar() {
  return (
    <nav className='border-y-2 border-green-700'>        
        <div className='flex flex-wrap gap-5 p-5 font-medium'>
        <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="cursor-pointer hover:text-gray-600">Gifting +</label>
        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-72">
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Build your own gift boxes</a></li>
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Gifting for Newborn (0-1 yr)</a></li>
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Gifting for Babies (1-2 yr)</a></li>
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Gifting for Toddlers (2-3 yr)</a></li>
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Gifting for Pre-schoolers (3yr+)</a></li>
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Curated Boxes for Babies</a></li>
            <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Subscription Boxes</a></li>
        </ul>
        </div>
            <div className='cursor-pointer hover:text-gray-600'>Chrimas Collection</div>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="cursor-pointer hover:text-gray-600">Toy by Age +</label>
                <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-72">
                    <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Toy for Babies (0 - 2 years)</a></li>
                    <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Toys for Toddlers (2 - 4 years)</a></li>
                    <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Toys for Preschoolers(4 - 7 years)</a></li>
                <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>All Toys</a></li>
                </ul>
            </div>
            <div className='cursor-pointer hover:text-gray-600'>Bestsellers</div>
            <div className='cursor-pointer hover:text-gray-600'>New Arrivals</div>
            <div className='cursor-pointer hover:text-gray-600'>Toy by Categories +</div>
            <div className="dropdown dropdown-hover text-center">
                <label tabIndex={0} className="cursor-pointer hover:text-gray-600">Parenting +</label>
                <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-72">
                    <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Blog</a></li>
                    <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Podcast</a></li>
                   <li className='border-b-2 border-b-black hover:text-green-700 hover:border-green-700'><a>Activity Sheet</a></li>
                </ul>
            </div>
            <div className='cursor-pointer hover:text-gray-600'>Rewards</div>
        </div>
    </nav>
  )
}

export default Navbar