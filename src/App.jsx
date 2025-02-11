import React from 'react'

const App = () => {

  const array = ['John', 'Doe', 'Jane', 'Doe']

  return (
    <>
      <div className="text-5xl">App</div>
      <ul>
        {array.map((name, index) => (
          <li key={index}> {name} </li>
        ))}
      </ul>
    </>

  )
}

export default App

