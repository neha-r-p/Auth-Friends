import React, { useState } from "react";
import Friend from "./Friend";

const FriendsList = () => {

    const [ friendsList, setFriendsList ] = useState([ {
        name: '',
        age: '',
        email: '',
        id: '',
    }])
    
  return (
    <div>
      List of Friends: <Friend />
    </div>
  );
};

export default FriendsList;
