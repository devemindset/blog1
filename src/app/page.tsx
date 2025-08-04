"use client"

import type { NextPage } from "next"
import BackgroundLoader from "../components/BackgroundLoader"
import Footer from "../components/Footer"
import RecentPost from "../components/RecentPost"
import Hero from "../components/Hero"
import Header from "../components/Header"



const Page: NextPage = () => {

 


  return (
    <>
      
      <Header />
      <Hero />
      <RecentPost />
      <Footer  />
      <BackgroundLoader />
    </>
  )
}

export default Page
