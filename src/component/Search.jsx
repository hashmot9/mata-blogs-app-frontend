import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BlogContext } from '../context/BlogContext';


const Search = () => {
  const {searchTerm, setSearchTerm} = useContext(BlogContext)
  // console.log(searchTerm);
  const [searchInput, setSearchInput] = useState('')
  const SearchInputHandeler = (e)=>{
    setSearchInput(e.target.value)
  }

  const SearchTermHandeler =()=>{
    setSearchTerm(searchInput)
  }
  console.log(searchTerm);
  
  
  return (
    <div className='relative '>
        <input 
        onChange={SearchInputHandeler}
        type="text" 
        placeholder="Search Blog..." 
        className='border-1 hover:border-blue-700 px-2 py-1 rounded-full outline-none border-red-300'
        />
        <button onClick={SearchTermHandeler}  className=' absolute right-2 size-8 '>
            <FaSearch className='text-blue-400 size-5'/>
        </button>
    </div>
  )
}

export default Search