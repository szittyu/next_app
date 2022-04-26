import React from "react"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning blog | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-gray-600">
        <h1 className="text-center text-4xl mb-10 font-medium">
          Homepage
        </h1>
        <p>
          Id aliquip excepteur cillum proident culpa enim esse commodo. Proident aute laborum veniam irure ex ea est eiusmod cupidatat dolor anim cillum tempor. Consequat laborum voluptate eu proident laborum ex est consectetur mollit anim sint. Sint occaecat est ut et aute. Quis quis Lorem sunt sit ex est nostrud. Eu cillum nulla officia dolor.
        </p>
        <p>
          Id aliquip excepteur cillum proident culpa enim esse commodo. Proident aute laborum veniam irure ex ea est eiusmod cupidatat dolor anim cillum tempor. Consequat laborum voluptate eu proident laborum ex est consectetur mollit anim sint. Sint occaecat est ut et aute. Quis quis Lorem sunt sit ex est nostrud. Eu cillum nulla officia dolor.
        </p>
        <Link href="/allposts">
          <a className="block w-[150px] py-2 mt-5 mx-auto text-center bg-blue-600 rounded text-white hover:bg-blue-700 ">
            See all post
          </a>
        </Link>
      </div>
    </>
  )
}
