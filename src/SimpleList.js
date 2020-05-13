import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleList(props) {
  const tutLinks = props.tutLinks;
  const classes = useStyles();
  const tutorialList = (
    <List component="nav" aria-label="main tutorial links">
      {tutLinks.map((tutorial) =>
        <ListItem key={tutorial.id} button divider onClick={() => props.itemSelected(tutorial.id)} >
          <ListItemText primary={tutorial.linkText} />
        </ListItem>
      )}
    </List>
  );

  return (
    <div className={classes.root}>
      {tutorialList}
    </div>
  );
}
