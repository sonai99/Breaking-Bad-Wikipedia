import React from 'react'

const UserItem = ({user}) => {
  return (
  <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={user.img} alt="character" />
        </div>
        <div className="card-back">
          <h1>{user.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {user.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {user.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {user.birthday}
            </li>
            <li>
              <strong>Status:</strong> {user.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserItem