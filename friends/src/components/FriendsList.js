import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import { axiosAuth } from "../utils/axiosAuth";
// import Loader from 'react-loader-spinner';

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    fontSize: 42,
    margin: 30
  }
});

const FriendsList = () => {
  const classes = useStyles();

  const [friendsList, setFriendsList] = useState([
    {
      name: "",
      age: "",
      email: "",
      id: ""
    }
  ]);

  useEffect(() => {
    axiosAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        setFriendsList(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <Typography variant="h1" className={classes.title}>
        List of Friends:
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {" "}
        {friendsList.length > 0
          ? friendsList.map(friend => (
              <Friend friend={friend} key={friend.id} />
            ))
          : null}
      </Grid>
    </div>
  );
};

export default FriendsList;
