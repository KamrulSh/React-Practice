import React from "react";
import User from "./User";

// implementing lists and keys
function UserList() {
  const userList = [
    { id: 1, name: "Asabeneh", score: 95 },
    { id: 2, name: "Mathias", score: 80 },
    { id: 3, name: "Elias", score: 50 },
    { id: 4, name: "Martha", score: 85 },
    { id: 5, name: "John", score: 100 }
  ];

  return (
    <div className="userList">
      <h1>Lists and keys</h1>
      <User users={userList} />
    </div>
  );
}

export default UserList;
