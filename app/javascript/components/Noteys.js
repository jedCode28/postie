import React from 'react'

const Noteys = (props) => {
  const noteys = props.noteys
  const renderNoteys = () => {
    return noteys.map(notey => {
      return (
        <div className = 'notey-container'>
          <h1>{notey.title}</h1>
          <p>Favorite Brand: {notey.body}</p>
        </div>
      )
    })

  }

  return(
    <div className='noteys-container'>
      <h1>Noteys</h1>
      {renderNoteys()}
    </div>
  )
}

export default Noteys