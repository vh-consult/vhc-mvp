"use client"

import React from 'react'
import { Input } from '../ui/input'
import { BiSearch } from 'react-icons/bi'
import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from "use-debounce"

const SearchBar = ({className}:{className: string}) => {
  const searchParams= useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <div className={cn('flex flex-center rounded-lg', className)}>
        <BiSearch
            className='w-[20px] h-[20px] ml-2'
        />
        <Input
            type='text'
            placeholder='Search here'
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get('query'?.toString())!}
            className='border-none rounded-full w-[90%] bg-inherit focus-visible:ring-0 focus-visible:ring-offset-0'
        />
    </div>
  )
}

export default SearchBar
