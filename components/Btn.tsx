"use client"
import React from 'react'
import toast from 'react-hot-toast';


export default function Btn() {
  const notify = () => toast('Added to Cart');

  return (
    <button onClick={notify} className="bg-neutral-900 px-4 w-full text-white py-1.5 rounded-lg">
     Add to Cart
                </button>
  )
}
