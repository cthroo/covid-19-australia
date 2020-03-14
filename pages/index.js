import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Australia from '../components/australia';
import InfoBoard from '../components/infoBoard';
import 'whatwg-fetch';

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
  },
  mainContent: {
    display: 'flex'
  },
  footer: {
    textAlign: 'right',
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mainContent}>
        <Australia />
        <InfoBoard />
      </div>
      <div className={classes.footer}>
        Made by <a href="https://www.cthroo.com">Cthroo</a>
        <br />
        buy me a coffee<a href="https://www.cthroo.com">☕</a>
      </div>
    </div>
  );
}
