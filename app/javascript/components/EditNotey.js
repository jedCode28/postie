import { props } from 'bluebird'
import React from 'react'

const EditNotey = (props) => {
  return(
    <div>
      <h1>EditNotey</h1>
      <p>actual id here{props.notey.id}</p>
      <form action={`/noteys/${props.notey.id}`} method='post'>
        <input type='hidden' name="_method" value="patch" />
        <p>title</p>
        <input defaultValue={props.notey.title} type='text' name='notey[title]'/>
        <p>body</p>
        <input defaultValue={props.notey.body} type='text' name='notey[body]'/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default EditNotey