import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import { axiosAuth } from '../utils/axiosAuth';
import Loader from 'react-loader-spinner';


const FriendsList = () => {

    const [ friendsList, setFriendsList ] = useState([ {
        name: '',
        age: '',
        email: '',
        id: '',
    }])

    useEffect(() => {
        axiosAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriendsList(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])
    

  return (
    <div>
      List of Friends: 
      {friendsList.length > 0 ? 
      
      friendsList.map(friend => <Friend friend={friend} key={friend.id} />) : null }
    </div>
  );
};

export default FriendsList;
