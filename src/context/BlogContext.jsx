import React, { useState } from 'react'
import { createContext } from 'react';

export const BlogContext = createContext('');

export const BlogProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <BlogContext.Provider value={{searchTerm, setSearchTerm}}>{children}</BlogContext.Provider>
  )
}
