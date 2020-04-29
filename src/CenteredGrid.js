import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './SearchAppBar';
import SimpleList from './SimpleList';
import Content from './Content';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { withStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function CenteredGrid() {
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const classes = useStyles();
  function itemSelected(pos) {
    //alert(pos + " Clicked");
    setPage(pos);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchAppBar />
        </Grid>
        <Grid item xs={3}>
          <SimpleList itemSelected={itemSelected} />
        </Grid>
        <Grid item xs={6}>
          <Divider />
          <
            div className={classes.box}>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a Previous button");
                if (page > 1) {
                  setPage(page-1);
                }
              }}
            >
              Previous Page ({page})
          </Link>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a Next button");
                if (page < 6) {
                  setPage(page+1);
                }
              }}
            >
              Next Page ({page})
          </Link>
          </div>
          <Divider />
          <Content page={page} />
        </Grid>
      </Grid>
    </div>
  );
}