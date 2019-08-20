import React from "react";

const AddFriend = () => {
  return (
    <form>
        <label>Name: <input type="text" /></label>
      <label>Age: <input type="number" /></label>
      <label>E-mail: <input type="email" /></label>
      
      <button>Submit</button>
    </form>
  );
};

export default AddFriend;