import React from 'react'
import Parent from './Parent'

const Main = () => {
  // no props used in context app
  return (
    <div>
       
    <h2>hello from main component</h2>
    <hr />
    <Parent/>
    {/* <Parent allusers={allusers}/> */}
    </div>
  )
}

export default Main