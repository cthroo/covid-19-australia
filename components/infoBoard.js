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
}));

export default function InfoBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">
        <Grid container item xs={12} spacing={3}>
          <div className={classes.staActive}>
            <div class="diff">( +62 )</div>
            <div class="value">644</div>
            <div class="label">Active</div>
          </div>
          <div className={classes.staAritic}>
            <div class="diff">( +3 )</div>
            <div class="value">35</div>
            <div class="label">Critical</div>
          </div>
          <div className={classes.staDeceased}>
            <div class="diff">( +3 )</div>
            <div class="value">22</div>
            <div class="label">Deaths</div>
          </div>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <div className={classes.staTested}>
            <div class="diff">( +829 )</div>
            <div class="value">12060</div>
            <div class="label">Tested</div>
          </div>
          <div className={classes.staConfirmed}>
            <div class="diff">( +69 )</div>
            <div class="value">788</div>
            <div class="label">Confirmed</div>
          </div>
          <div className={classes.staRecovered}>
            <div class="diff">( +4 )</div>
            <div class="value">122</div>
            <div class="label">Recovered</div>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
