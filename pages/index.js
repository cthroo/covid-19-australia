import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Australia from '../components/australia';

if (typeof fetch !== 'function') {
  global.fetch = require('node-fetch-polyfill');
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Australia />
    </div>
  );
}
