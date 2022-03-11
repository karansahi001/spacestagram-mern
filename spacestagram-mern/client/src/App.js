import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import logo from './images/logo.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [create, setCreate] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleCreate = () => {
        setCreate((current) => !current);
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">Spacestagram</Typography>
        <img className={classes.image} src={logo} alt="icon" height="50" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} >
              <Typography variant= "h6" className={classes.note}>Click on 'Create Post' to create a new post on Spacestagram</Typography>
              <Box textAlign={'center'}><Button className={classes.buttonCreate} color= {create ? 'secondary' : 'primary'} variant="contained" size="large" type="submit" onClick={handleCreate}>{create ? "Close" : "Create Post"}</Button></Box>
              {create ? <Form currentId={currentId} setCurrentId={setCurrentId} /> : null}
            </Grid>
            <Grid item xs={12}>
              <Posts setCurrentId={setCurrentId} create={handleCreate} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
