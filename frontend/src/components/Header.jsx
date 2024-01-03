// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='_w-full _bg-slate-800 _text-white _p-5 _font-bold _flex _justify-between _items-center'>
        <div>
            <h1> <Link to="/">Logo</Link></h1>
        </div>
        <nav>
            <ul className=' _flex _space-x-4 _cursor-pointer'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link> </li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}
