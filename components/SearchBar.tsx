import React from 'react'
import { Input } from './ui/input'
import { BiSearch } from 'react-icons/bi'
import { cn } from '@/lib/utils'

const SearchBar = ({className}:{className: string}) => {
  return (
    <div className={cn('flex flex-center rounded-lg',className)}>
        <BiSearch
            className='w-[20px] h-[20px] ml-2'
        />
        <Input
            type='text'
            placeholder='Search here'
            className='border-none w-[90%] bg-inherit focus-visible:ring-0 focus-visible:ring-offset-0'
        />
    </div>
  )
}

export default SearchBar
