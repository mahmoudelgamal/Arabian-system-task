import React from 'react'

function SearchIcon({className}) {
  return (
    <>
      <svg className={className} fill="#FFF" fill-opacity=".5" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
        <path fill-rule="evenodd" d="M7.333.667c3.866 0 7 3.134 7 7 0 1.657-.576 3.18-1.538 4.379l4.74 4.742-1.414 1.414-4.79-4.789c-1.133.79-2.511 1.253-3.998 1.253-3.866 0-7-3.133-7-7 0-3.865 3.134-7 7-7zm0 2c-2.761 0-5 2.238-5 5 0 2.761 2.239 5 5 5 2.762 0 5-2.239 5-5 0-2.762-2.238-5-5-5z"/>
      </svg>
    </>
  )
}

export default SearchIcon
