import Image from 'next/image'
import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

export default function ABOUT() {
  return (
    <div className="flex flex-col items-center space-x-8 p-9 md:grid md:grid-cols-10">
      <div className=" overflow-visible rounded-lg  border-pink-400 md:col-span-5  md:ml-auto">
        <img
          src={'/itachi.png'}
          height={500}
          className=" rotate-0 overflow-visible rounded-3xl"
          width={500}
        />
      </div>
      <div className="-ml-40 overflow-hidden sm:ml-0 md:col-span-5 lg:pr-28">
        <h2 className="font-mono text-7xl text-purple-500 ">ABOUT US</h2>
        <h5 className="font-mono text-2xl text-purple-400">META WAIFU"S</h5>
        <span className="text-md  font-mono">
          Meta waifu is collection of 666 all time favorate Anime charecter's
          with 15 million possible combinations with 150+ unique parts available
          in the lower layers of the Polygon Blockchain.
        </span>
        <div className="flex space-x-6 p-5">
          <div className="flex items-center space-x-4 rounded-xl border bg-white bg-opacity-60 px-5 py-4 backdrop-blur-lg backdrop-filter hover:cursor-pointer">
            <BsTwitter className="text-blue-400" />
            <h6>TWITTER</h6>
          </div>
          <div className="flex items-center space-x-4 rounded-xl border bg-white bg-opacity-60 px-5 py-4 backdrop-blur-lg backdrop-filter hover:cursor-pointer">
            <BsInstagram className="text-pink-400" />
            <h6>INSTAGRAM</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
