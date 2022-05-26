import Image from 'next/image'
import React from 'react'
import { FaBeer } from 'react-icons/fa'
import { BsTwitter, BsDiscord, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <div
        className="headerr z-50 flex items-center 
       justify-between py-2 px-6 text-white"
      >
        <div>
          <Image height={72} width={152} src="/LOGO2.png" />
        </div>

        <div className=" hidden space-x-5 lg:flex">
          <div className="font-extrabold text-purple-500 hover:cursor-pointer hover:text-pink-700">
            HOME
          </div>
          <div className="font-extrabold text-purple-500 hover:cursor-pointer hover:text-pink-700">
            SHOWCASE
          </div>
          <div className="font-extrabold text-purple-500 hover:cursor-pointer hover:text-pink-700">
            ABOUT
          </div>
          <div className="font-extrabold text-purple-500 hover:cursor-pointer hover:text-pink-700">
            RARITY
          </div>
          <div className="font-extrabold text-purple-500 hover:cursor-pointer hover:text-pink-700">
            ROADMAP
          </div>
          <div className="font-extrabold text-purple-500 hover:cursor-pointer hover:text-pink-700">
            FAQ'S
          </div>
        </div>
        <div className="buttons hidden space-x-3 sm:flex">
          <div className="rounded-lg border   border-purple-300 bg-purple-600 p-3 hover:cursor-pointer hover:bg-pink-600">
            <Link href={'https://twitter.com/jayendra__02'}>
              <BsTwitter />
            </Link>
          </div>
          <div className="rounded-lg border   border-purple-300 bg-purple-600 p-3 hover:cursor-pointer hover:bg-pink-600">
            <Link href={'https://discord.gg/QaWZDnKjmf'}>
              <BsDiscord />
            </Link>
          </div>
          <div className="rounded-lg border   border-purple-300 bg-purple-600 p-3 hover:cursor-pointer hover:bg-pink-600">
            <Link
              target="_blank"
              href={'https://www.instagram.com/jayendra__02'}
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
