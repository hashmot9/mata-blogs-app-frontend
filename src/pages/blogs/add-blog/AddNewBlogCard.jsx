import React from "react";

const AddNewBlogCard = ({htmlFor,leble,name, id, placeholder, type, register}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className=" w-full text-md text-black font-semibold pb-2">
        {leble}:
      </label>
      <div>
        <input
          type={type}
          name={name}
          id={id}
            {...register}
          placeholder={placeholder}
          className="border border-gray-500 w-full text-black rounded-md focus:ring-1 focus:ring-indigo-600 outline-none py-2 px-6 "
        />
      </div>
    </div>
  );
};

export default AddNewBlogCard;
