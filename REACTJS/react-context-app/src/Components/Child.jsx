import React from 'react'
import Grandchild from './Grandchild'

const Child = (allusers) => {
  return (
    <div>
        <h2>from child</h2>
        <hr />
        <Grandchild/>
        {/* <Grandchild allusers={allusers}/> */}
    </div>
  )
}

export default Child