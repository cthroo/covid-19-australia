/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    paddingTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px 10px',
    margin: '0px auto',
  },
  subContainer: {
    padding: '50px',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  diff: {
    fontSize: '25px',
    marginBottom: '8px',
    fontWeight: 700,
  },
  value: {
    fontSize: '70px',
    fontWeight: 800,
    marginBottom: '14px',
  },
  label: {
    fontSize: '30px',
    fontWeight: 700,
  },
  location: {
    fontSize: '60px',
  },
  staState: {
    color: '#e4e4e4',
  },
  staActive: {
    color: '#df0e1f',
  },
  staAritic: {
    color: '#720405',
  },
  staDeceased: {
    color: '#ffffb3',
  },
  staTested: {
    color: '#1da1f2',
  },
  staConfirmed: {
    color: '#f44334',
  },
  staRecovered: {
    color: '#259c1e',
  },
  text: {
    textAlign: 'center',
  },
}));

export default function InfoBoard({location}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container item xs={12} className={classes.subContainer}>
          <Grid item xs={12}>
            <div className={classes.staState}>
              <div className={classes.location}>{location}</div>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.subContainer}>
          <Grid item xs={12} md={4}>
            <div className={classes.staActive}>
              <div className={classes.diff}>( +62 )</div>
              <div className={classes.value}>644</div>
              <div className={classes.label}>Active</div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.staDeceased}>
              <div className={classes.diff}>( +3 )</div>
              <div className={classes.value}>22</div>
              <div className={classes.label}>Deaths</div>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.subContainer}>
          <Grid item xs={12} md={4}>
            <div className={classes.staTested}>
              <div className={classes.diff}>( +829 )</div>
              <div className={classes.value}>1206000</div>
              <div className={classes.label}>Tested</div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.staConfirmed}>
              <div className={classes.diff}>( +69 )</div>
              <div className={classes.value}>788</div>
              <div className={classes.label}>Confirmed</div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.staRecovered}>
              <div className={classes.diff}>( +4 )</div>
              <div className={classes.value}>122</div>
              <div className={classes.label}>Recovered</div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
