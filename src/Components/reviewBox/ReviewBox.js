import React from 'react'

export default function ReviewBox(props) {

    const { name, ratting, Pic, feedback } = props.Review;

  return (

    <div>
        <h2>Name : {name}</h2>
        <h2>Ratting : {ratting}</h2>
        <h2> Pic : {Pic}</h2>
        <h2> Feedback : {feedback}</h2>
    </div>
  )
}





