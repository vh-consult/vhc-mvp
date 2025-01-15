import React from 'react'
import SearchBar from '../general/SearchBar'

const SearchArea = () => {
  return (
    <div className={`relative w-[90%] mx-auto text-center z-0  h-[250px] bg-[url('/images/hosp-2.jpg')] flex flex-col justify-center items-center bg-no-repeat bg-cover`}>
    <div className="absolute top-0 left-0 -z-10 bg-accent w-full h-full opacity-40"></div>
    <h1 className="text-4xl font-semibold text-white">
      Looking for any particular drug? <br />
      Or need advice on drugs for an ailment?
    </h1>
    <p className="text-lg mb-3 font-medium text-white opacity-75">
      Browse our catalog or search our inventory for your solution
    </p>
    <SearchBar 
      className="w-[60%] bg-white h-[50px] border rounded-3xl "
    />
  </div>
  )
}

export default SearchArea
