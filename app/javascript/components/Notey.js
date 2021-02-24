import React from 'react'

const Notey = (props) => {
  return(
    <div>
      <h1>Notey Here</h1>
      <h1>{props.notey.title}</h1>
      <h1>{props.notey.body}</h1>
      <a href={`/noteys/${props.notey.id}/edit `}>edit it!</a>
      <a href='/things'>home</a>
    </div>
  )
}

export default Notey
