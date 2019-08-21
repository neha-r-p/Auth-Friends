import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 345,
    margin: '20px',
    boxShadow: '0px 0px 3px 3px #dc651b'
  }
});

const Friend = ({ friend }) => {
    const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h4">{friend.name}</Typography>
      <p>Age: {friend.age}</p>
      <p>E-mail: {friend.email}</p>
    </Card>
  );
};

export default Friend;
