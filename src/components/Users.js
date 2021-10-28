import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  CircularProgress,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import UserDetails from "./UserDetails";

const useStyles = makeStyles((theme) => ({
  usersContainer: {
    textAlign: "center",
    padding: "100px 10px 0px 10px",
  },
  loading: {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    backgroundColor: "black",
  },
  header: {
    margin: "auto",
    fontSize: 30,
  },
  getUsers: {
    color: "white",
    backgroundColor: "blue",
  },
}));

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      const results = res.data.data;
      setUsers(results);
    });
    setIsLoading(false);
  };

  console.log(users);
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.header}> Infosys</Typography>
          <Button className={classes.getUsers} onClick={() => getUsers()}>
            Get Users
          </Button>
        </Toolbar>
      </AppBar>

      <Box>
        {isLoading && (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
        {users && (
          <Grid container spacing={4} className={classes.usersContainer}>
            {users.map((user) => {
              return (
                <UserDetails
                  key={user.id}
                  email={user.email}
                  firstName={user.first_name}
                  lastName={user.last_name}
                  avatar={user.avatar}
                />
              );
            })}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default Users;
