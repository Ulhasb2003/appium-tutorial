import React from 'react';
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button divider onClick={() => props.itemSelected(1)} >
          <ListItemText primary="Appium - Overview"  />
        </ListItem>
        {/* <Divider /> */}
        <ListItem button divider onClick={() => props.itemSelected(2)}>
          <ListItemText primary="Appium - History"  />
        </ListItem>
        <ListItem button  divider onClick={() => props.itemSelected(3)}>
          <ListItemText primary="Appium - Setup"  />
        </ListItem>
        <ListItem button  divider onClick={() => props.itemSelected(4)}>
          <ListItemText primary="Appium - Connect mobile device"  />
        </ListItem>
        <ListItem button  divider onClick={() => props.itemSelected(5)}>
          <ListItemText primary="Appium - Launch mobile apps"  />
        </ListItem>
        <ListItem button  divider onClick={() => props.itemSelected(6)}>
          <ListItemText primary="Appium - Identify mobile elements"  />
        </ListItem>
      </List>
    </div>
  );
}
