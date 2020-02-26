import React from 'react'
import './adventure.scss'

function Adventure() {
  return (
    <section className="adventure">
      <h2 className="adventure__title">Pick a category for your next adventure</h2>
      <div className="adventure__form-select">
        <select>
          <option style={{color:' #222'}}>Popular</option>
          <option style={{color:' #222'}}>Natours</option>
          <option style={{color:' #222'}}>Landscap</option>
        </select>
      </div>
    </section>
  )
}

export default Adventure
