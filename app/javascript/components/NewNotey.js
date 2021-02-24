import React from 'react'

const NewNotey = () => {
  return(
    <div>
      <h1>New Form Here!</h1>
      <form action='/noteys' method='post'>
        <p>title</p>
        <input type='text' name='notey[title]'/>
        <p>body</p>
        <input type='text' name='notey[body]'/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default NewNotey