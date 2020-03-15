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
    display: 'flex',
  },
  footer: {
    textAlign: 'center',
    color: 'white',
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
        Made and maintained by <a href="https://www.cthroo.com">Cthroo</a> |
        Data source:{' '}
        <a href="https://www.health.nsw.gov.au/" target="_black">
          health.nsw.gov.au
        </a>
        <br />
        If you want to support this project,{' '}
        <a href="https://www.cthroo.com" target="_black">
          buy me a coffee ☕
        </a>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          background: #222222;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
