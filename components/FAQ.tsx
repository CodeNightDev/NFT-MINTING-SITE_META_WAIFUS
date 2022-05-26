import React, { useState } from 'react'
import { BiDownArrow } from 'react-icons/bi'

export default function FAQ() {
  const [active, setactive] = useState(false)
  const [active2, setactive2] = useState(false)
  const [active3, setactive3] = useState(false)
  const [active4, setactive4] = useState(false)
  return (
    <div>
      <section className=" py-20 2xl:py-40">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="font-heading mt-8 text-7xl font-bold text-purple-500">
              FAQ&apos;s
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <ul>
              <li className="mb-4 rounded-2xl bg-white px-4 py-8 lg:px-12">
                <button className="flex w-full text-left">
                  <div className="mr-8 w-auto">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold">
                      1
                    </span>
                  </div>
                  <div
                    className="mt-3 w-full"
                    onClick={() => setactive(!active)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">When is Mint Date ?</h3>
                      <span className="ml-4">
                        <BiDownArrow
                          className={`text-purple-600 ${
                            active ? '' : 'rotate-180'
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      className={`mt-6 border-l-2 ${
                        active ? '' : 'hidden'
                      } border-gray-50 pl-10 transition-all ease-in-out`}
                    >
                      <p className="mb-5 font-mono text-xl">
                        We are Expecting Mint Date on 31 | 5 | 2022
                      </p>
                    </div>
                  </div>
                </button>
              </li>
              <li className="mb-4 rounded-2xl bg-white px-4 py-8 lg:px-12">
                <button className="flex w-full text-left">
                  <div className="mr-8 w-auto">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold">
                      2
                    </span>
                  </div>
                  <div
                    className="mt-3 w-full "
                    onClick={() => setactive2(!active2)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">
                        WHAT WILL BE tHE MINT PRICE
                      </h3>
                      <span className="ml-4">
                        <BiDownArrow
                          className={`text-purple-600 ${
                            active ? '' : 'rotate-180'
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      className={`mt-6 border-l-2 ${
                        active2 ? '' : 'hidden'
                      } border-gray-50 pl-10 transition-all ease-in-out`}
                    >
                      <p className="font-mono text-xl">
                        IT IS ESTIMATED TO BE 1 ETH
                      </p>
                    </div>
                  </div>
                </button>
              </li>
              <li className="mb-4 rounded-2xl bg-white px-4 py-8 lg:px-12">
                <button className="flex w-full text-left">
                  <div className="mr-8 w-auto">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold">
                      3
                    </span>
                  </div>
                  <div
                    className="mt-3 w-full"
                    onClick={() => setactive3(!active3)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">
                        WHICH MARKETPLACE WILL YOU USE ?
                      </h3>
                      <BiDownArrow
                        className={`text-purple-600 ${
                          active ? '' : 'rotate-180'
                        }`}
                      />
                    </div>
                    <div
                      className={`mt-6 border-l-2 ${
                        active3 ? '' : 'hidden'
                      } border-gray-50 pl-10 transition-all ease-in-out`}
                    >
                      <p className="font-mono text-xl">
                        INITIALLY WE ARE LAUNCHING IT ON OPENSEA LATER WE WILL
                        SHIFT TO NATIVE POLYGON AND OTHER MARKETPLACES
                      </p>
                    </div>
                  </div>
                </button>
              </li>
              <li className="mb-4 rounded-2xl bg-white px-4 py-8 lg:px-12">
                <button className="flex w-full text-left">
                  <div className="mr-8 w-auto">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold">
                      4
                    </span>
                  </div>
                  <div
                    className="mt-3 w-full"
                    onClick={() => setactive4(!active4)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">
                        WHAT ARE THE BENEFITS FOR HOLDING
                      </h3>
                      <span className="ml-4">
                        <BiDownArrow
                          className={`text-purple-600 ${
                            active4 ? '' : 'rotate-180'
                          }`}
                        />
                      </span>
                    </div>
                    <div
                      className={`mt-6 border-l-2 ${
                        active4 ? '' : 'hidden'
                      } border-gray-50 pl-10 transition-all ease-in-out`}
                    >
                      <p className="text-xl">
                        Hodlers get staking rewards for our new erc-20 token ,
                        they get a chance to be part of our WAIFUDAO and holders
                        get a chance to narrate anime episodes of their
                        charecter
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
