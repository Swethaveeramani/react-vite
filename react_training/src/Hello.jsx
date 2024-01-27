import React from 'react'

function Hello(props) {
  const name="About Myself";
  return (
    <div>
      <h1>Infomation {name} from {props.college}</h1>
      </div>
  )
}

export default Hello
