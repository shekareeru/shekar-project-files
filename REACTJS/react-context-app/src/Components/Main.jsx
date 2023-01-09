import React from 'react'
import Parent from './Parent'

const Main = (allusers) => {
  return (
    <div>
       
    <h2>hello from main component</h2>
    <hr />
    <Parent allusers={allusers}/>
    </div>
  )
}

export default Main