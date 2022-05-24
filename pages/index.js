import React, { useEffect } from "react"
// import { useRouter } from 'next/router'
import Link from "next/link"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../redux/ducks/characterSlice";

export default function Home() {
  // const router = useRouter()
  // console.log(router.asPath)
  const characters = useSelector((state) => state.character)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacter())
  }, [dispatch])

  console.log(characters)
  return (
    <>
      <Head>
        <title>Learning blog | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-gray-600">
        <h1
          className="text-center text-4xl mb-10 font-medium"
          role="homepage"
        >
          Homepage
        </h1>
        <p>
          Id aliquip excepteur cillum proident culpa enim esse commodo. Proident aute laborum veniam irure ex ea est eiusmod cupidatat dolor anim cillum tempor. Consequat laborum voluptate eu proident laborum ex est consectetur mollit anim sint. Sint occaecat est ut et aute. Quis quis Lorem sunt sit ex est nostrud. Eu cillum nulla officia dolor.
        </p>
        <p>
          Id aliquip excepteur cillum proident culpa enim esse commodo. Proident aute laborum veniam irure ex ea est eiusmod cupidatat dolor anim cillum tempor. Consequat laborum voluptate eu proident laborum ex est consectetur mollit anim sint. Sint occaecat est ut et aute. Quis quis Lorem sunt sit ex est nostrud. Eu cillum nulla officia dolor.
        </p>
        <Link href="/allposts">
          <a
            className="block w-[150px] py-2 mt-5 mx-auto text-center bg-blue-600 rounded text-white hover:bg-blue-700"
            role="allposts-btn"
          >
            See all posts
          </a>
        </Link>
      </div>
    </>
  )
}
