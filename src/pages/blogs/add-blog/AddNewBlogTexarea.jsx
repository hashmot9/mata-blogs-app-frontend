import React from 'react'

const AddNewBlogTexarea = ({htmlFor,leble,name, id, placeholder, type, rows, register}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className=" w-full text-md text-black font-semibold pb-2">
        {leble}:
      </label>
      <div>
        <textarea 
        rows={rows}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...register}
        className="border border-gray-500 w-full text-black rounded-md focus:ring-1 focus:ring-indigo-600 outline-none px-6 "
        ></textarea>
      </div>
    </div>
  )
}

export default AddNewBlogTexarea