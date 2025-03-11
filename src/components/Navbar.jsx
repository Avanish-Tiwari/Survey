import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between bg-amber-300 p-5'>
      <h1>Home</h1>
      <ul className='flex px-10 gap-10'>
        <li className='cursor-pointer'>First</li>
        <li className='cursor-pointer'>Second</li>
        <li className='cursor-pointer'>Third</li>
      </ul>
    </div>
  )
}
