import React from 'react'

const AddTocategories = () => {
  return (
    <div className='container'>
      <h1>Add Category</h1>
      <div className="inputs">
        <label htmlFor="">Category Name</label>
        <input type="text" placeholder='Women Clothes'/>
        <label htmlFor="">Category Image url</label>
      </div>
    </div>
  )
}

export default AddTocategories
