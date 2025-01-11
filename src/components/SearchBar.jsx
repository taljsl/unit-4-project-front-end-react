import { useState } from 'react'
// this componenet will become our search bar.
const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    const query = e.target.value
    setSearch(query)
    onSearch(query)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar