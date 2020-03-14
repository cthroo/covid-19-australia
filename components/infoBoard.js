import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    textAlign: 'center',
    paddingTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '30px 10px',
    maxWidth: '650px',
    margin: '0px auto',
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
    marginBottom: '8px',
    fontWeight: 700,
  },
  value: {
    fontSize: '32px',
    fontWeight: 800,
    marginBottom: '14px',
  },
  label: {
    fontWeight: 700,
  },
  staActive: {
    color: '#df0e1f',
  },
  staAritic: {
    color: '#720405',
  },
  staDeceased: {
    color: '#000000',
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
}));

export default function InfoBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">
        <Grid container item xs={12} spacing={4}>
          <Grid item xs={4}>
            <div className={classes.staActive}>
              <div className={classes.diff}>( +62 )</div>
              <div className={classes.value}>644</div>
              <div className={classes.label}>Active</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.staAritic}>
              <div className={classes.diff}>( +3 )</div>
              <div className={classes.value}>35</div>
              <div className={classes.label}>Critical</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.staDeceased}>
              <div className={classes.diff}>( +3 )</div>
              <div className={classes.value}>22</div>
              <div className={classes.label}>Deaths</div>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          <Grid item xs={4}>
            <div className={classes.staTested}>
              <div className={classes.diff}>( +829 )</div>
              <div className={classes.value}>12060</div>
              <div className={classes.label}>Tested</div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.staConfirmed}>
              <div className={classes.diff}>( +69 )</div>
              <div className={classes.value}>788</div>
              <div className={classes.label}>Confirmed</div>
            </div>
          </Grid>
          <Grid item xs={4}>
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
