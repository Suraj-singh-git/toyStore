import React from 'react'
import {
    UserIcon
} from '@heroicons/react/24/solid'


function MainHeader() {
  return (
    <header
    className='flex justify-between p-5 items-start'
    >
        <div className="space-x-3">
            <i className='fab fa-facebook'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-instagram'></i>
        </div>
        <div className="h-10">
            <img src="https://cdn.shopify.com/s/files/1/0696/9637/files/Logo-Shumee_400x.png?v=1613715368" alt="logo" className='h-20' />
        </div>
        <div className="flex gap-2">
        <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn bg-transparent hover:bg-transparent border-none text-black">Account</label>
        <ul tabIndex={0} className="dropdown-content menu shadow  rounded-box w-52">
    <li><a>Login</a></li>
    <li><a>Create Account</a></li>
  </ul>
</div>
           <button className='btn'>Cart(0)</button>
        </div>
    </header>
  )
}

export default MainHeader