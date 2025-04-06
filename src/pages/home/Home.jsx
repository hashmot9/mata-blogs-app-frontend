import React from 'react'
import Banner from '../../component/Banner'
import BlogList from '../blogs/BlogList'
import NewsLetter from '../../component/NewsLetter'

const Home = () => {
  return (
    <div className=" container mx-auto max-w-7xl items-center justify-center md:px-6 py-4">
      <Banner />
      <BlogList />
      <NewsLetter />
    </div>
  )
}

export default Home