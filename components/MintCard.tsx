import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

export default function MintCard() {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  return (
    <div>
      <div className="flex max-w-sm flex-col overflow-hidden rounded shadow-lg">
        <div>
          <img className="h-2/3 w-full" src="/waifus.gif" alt="MINTING CARD" />
        </div>

        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white">
            MINT YOUR META WAIFU
          </div>
          <p className="text-base text-purple-600">
            Meta waifu is collection of 666 NFT's waiting for you to own on
            Polygon blockchain
          </p>
        </div>
        <div className=" mx-auto flex w-full flex-col items-center justify-around px-6 pt-4 pb-2">
          {address ? (
            <div className=" break-normal rounded-lg border bg-pink-500 px-32 py-3 text-xl font-bold text-white hover:cursor-pointer hover:bg-pink-400">
              <pre>MINT (0.01ETH)</pre>
            </div>
          ) : (
            <div
              className=" rounded-lg border bg-pink-500 px-32 py-3 text-xl font-bold text-white hover:cursor-pointer hover:bg-pink-400"
              onClick={() => connectWithMetamask()}
            >
              <pre>Connect Wallet</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
