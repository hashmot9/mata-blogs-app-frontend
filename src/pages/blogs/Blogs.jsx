import React from 'react'
import BlogList from './BlogList'
import Banner from '../../component/Banner'

const Blogs = () => {
  return (
    <div className='container mx-auto max-w-7xl items-center justify-center md:px-6 py-4'>
        <Banner />
        <BlogList />
    </div>
  )
}

export default Blogs