import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ABOUT from '../components/ABOUT'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MintCard from '../components/MintCard'
import ROADMAP from '../components/ROADMAP'

const Home: NextPage = () => {
  return (
    <div className="ANIME GIRLS NFT-MININTG ">
      <div className="sticky top-0 z-50">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="flex justify-center overflow-hidden p-9">
          <MintCard />
        </div>
        <ABOUT />
        <ROADMAP />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default Home
