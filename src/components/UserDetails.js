import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
  },
  cardContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    margin: "auto",
  },
  name: {
    fontFamily: "Tahoma",
    color: "red",
  },
}));

const UserDetails = ({ firstName, lastName, email, avatar, key }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={2} key={key}>
      <Card className={classes.card} variant="outlined">
        <CardMedia style={{ height: 250 }} image={avatar} />

        <CardContent gutterBottom className={classes.cardContent}>
          <Typography className={classes.name}>
            {firstName} {lastName}
          </Typography>
          <Typography>{email}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserDetails;
