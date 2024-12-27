import React from 'react'
import { Link } from 'react-router-dom'
import LightMode from './components/LightMode'

export default function Header() {
  return (
    <section className='bg-[--highlight-color] flex justify-center items-center py-10 text-6xl font-bold'>
        <Link to={"/"} className='flex'>
            <img src="/Odin-Recipes-React/logo.webp" alt="logo" className='h-20 mr-5'/>
            Odin-Recipies   
        </Link>
        <div className="absolute right-0 top-0"><LightMode /></div>        
    </section>
  )
}
