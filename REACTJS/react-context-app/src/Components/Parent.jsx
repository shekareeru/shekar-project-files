import React from 'react'
import Child from './Child'

const Parent = (allusers) => {
  return (
    <div>
        <h2>hello from parent componenet</h2>
        <hr />
        <Child/>
        {/* <Child allusers={allusers}/> */}
    </div>
  )
}

export default Parent