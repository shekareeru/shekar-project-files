import React from 'react'
import { MyContextConsumer } from './MyContext'

const UserDetails = ({allusers}) => {
  return (
    <div>
      <MyContextConsumer>
        {(userInfo) => (
          <ul>
            {userInfo.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
        )}
      </MyContextConsumer>
    </div>
  );
};

export default UserDetails;