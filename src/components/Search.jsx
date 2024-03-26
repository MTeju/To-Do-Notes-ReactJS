import './Search.css'


const Search = ({ handelSearchNote }) => {
  return (
    <div className="search">
      <input onChange={(e) => handelSearchNote(e.target.value)} type="text" className='input' placeholder='Search Note or Taks here...!'/>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
    </div>
  )
}

export default Search
