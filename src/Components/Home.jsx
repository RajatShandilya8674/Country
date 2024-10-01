import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useContext, useEffect, useState } from 'react'
import { themeContext } from '../Contexts/ThemeContext'
import useSize from '../MyHooks/useSize'

export default function Home() {
    const [query, setQuery] = useState('')
    const [isDark]= useContext(themeContext)
    const [size]= useSize()
  return (
    <main className={isDark?"dark":""}>
      {/* <div>{`${size.width} X ${size.height}`}</div> */}
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery}/>
        </div>
        <CountriesList query={query} />
      </main>
  )
}
