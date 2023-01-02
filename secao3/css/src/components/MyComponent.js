import React from 'react'
import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>Este paragrafo é do componente</p>
      <p className="my-comp-paragraph">Este também é do componente</p>
    </div>
  )
}

export default MyComponent