import React from "react";

function User(props) {
  console.log(props);
  const { users } = props;
  const handleClick = users.map((user) => <h4 key={user.id}>{user.name}</h4>);

  return <div className="user">{handleClick}</div>;
}

export default User;
