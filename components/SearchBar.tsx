import React from 'react'
import { Input } from './ui/input'
import { BiSearch } from 'react-icons/bi'

const SearchBar = ({className}:{className: string}) => {
  return (
    <div className={className}>
        <BiSearch
            className='w-[20px] h-[20px]'
        />
        <Input
            type='text'
            placeholder='Search here'
            className='border-none w-[90%] focus-visible:ring-0 focus-visible:ring-offset-0'
        />
    </div>
  )
}

export default SearchBar
