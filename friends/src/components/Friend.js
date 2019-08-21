import React from "react";

const Friend = ({ friend }) => {
  return (
    <div>
      <h3>{friend.name}</h3>
      <p>Age: {friend.age}</p>
      <p>E-mail: {friend.email}</p>
    </div>
  );
};

export default Friend;
