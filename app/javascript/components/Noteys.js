import React from 'react'

const Noteys = (props) => {
  const noteys = props.noteys
  const renderNoteys = () => {
    return noteys.map(notey => {
      return (
        <div className = 'notey-container'>
          <h1>{notey.title}</h1>
          <p>Favorite Brand: {notey.body}</p>
          <a href={`/noteys/${notey.title}`}>Show Notey</a>
          <a href={`/noteys/${notey.title}/edit`}>edit</a>
          <a href={`/noteys/${notey.title}`} data-method='delete'>Delete</a>
        </div>
      )
    })

  }

  return(
    <div className='noteys-container'>
      <h1>Noteys</h1>
      <a href='/noteys/new'>New Notey!</a>
      {renderNoteys()}
    </div>
  )
}

export default Noteys