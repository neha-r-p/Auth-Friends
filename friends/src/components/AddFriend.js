import React, { useState, useEffect } from "react";
import { axiosAuth } from "../utils/axiosAuth";

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now()
  });

  const submitHandler = e => {
    console.log("submit button clicked");
    e.preventDefault();
    console.log("new friend", newFriend);
    axiosAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));

    setNewFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  const changeHandler = e => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Age:{" "}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newFriend.age}
          onChange={changeHandler}
        />
      </label>
      <label>
        E-mail: <input type="email" name="email" placeholder="E-mail" value={newFriend.email} onChange={changeHandler} />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default AddFriend;
