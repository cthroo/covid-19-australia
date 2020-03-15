/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Australia from '../components/australia';
import InfoBoard from '../components/infoBoard';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
import 'whatwg-fetch';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    color: '#fffccc',
    [theme.breakpoints.up('lg')]: {
      bottom: 0,
    },
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '50px',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const router = useRouter();
  const [location, setLocation] = useState('AUSTRALIA');

  const onLocationClick = stateName => {
    setLocation(stateName);
  };
  const handleClick = e => {
    e.preventDefault();
    router.push('/buyUsCoffee');
  };

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} lg={6}>
          <Australia onLocationClick={onLocationClick} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InfoBoard location={location} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.footer}>
          Made and maintained by{' '}
          <a href="https://www.cthroo.com">www.cthroo.com</a> | Data source:{' '}
          <a href="https://www.health.nsw.gov.au/" target="_black">
            health.nsw.gov.au
          </a>
          <br />
          If you ❤️ this project 👉
          <a onClick={handleClick}> please consider buying us a coffee ☕ 😊</a>
        </div>
      </Grid>
    </>
  );
}
