import React from 'react'
import UserDetails from './UserDetails'

const Grandchild = (allusers) => {
  return (
    <div>
        <h2>hello from grandchild component</h2>
        <hr />
        <UserDetails allusers={allusers}/>
    </div>
  )
}

export default Grandchild