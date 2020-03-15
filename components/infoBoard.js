/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {data} from '../const/data';

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

const getData = location => {
  console.log(location)
  switch (location) {
    case "AUSTRALIA":
      return {
        confirmedValue: data.NSW.todaySummarys.todayNewNumber+
          data.VIC.todaySummarys.todayNewNumber+
          data.TAS.todaySummarys.todayNewNumber+
          data.SA.todaySummarys.todayNewNumber+
          data.NT.todaySummarys.todayNewNumber+
          data.WA.todaySummarys.todayNewNumber+
          data.QLD.todaySummarys.todayNewNumber+
          data.ACT.todaySummarys.todayNewNumber,
        activeValue:
          data.NSW.todaySummarys.totalConfirmedNumber+
          data.VIC.todaySummarys.totalConfirmedNumber+
          data.TAS.todaySummarys.totalConfirmedNumber+
          data.SA.todaySummarys.totalConfirmedNumber+
          data.NT.todaySummarys.totalConfirmedNumber+
          data.WA.todaySummarys.totalConfirmedNumber+
          data.QLD.todaySummarys.totalConfirmedNumber+
          data.ACT.todaySummarys.totalConfirmedNumber,
        // deathsDiff:
        //   data.NSW.todaySummarys.totalDeathNumber+
        //   data.VIC.todaySummarys.totalDeathNumber+
        //   data.TAS.todaySummarys.totalDeathNumber+
        //   data.SA.todaySummarys.totalDeathNumber+
        //   data.NT.todaySummarys.totalDeathNumber+
        //   data.WA.todaySummarys.totalDeathNumber+
        //   data.QLD.todaySummarys.totalDeathNumber+
        //   data.ACT.todaySummarys.totalDeathNumber,
        deathsValue:
          data.NSW.todaySummarys.totalDeathNumber+
          data.VIC.todaySummarys.totalDeathNumber+
          data.TAS.todaySummarys.totalDeathNumber+
          data.SA.todaySummarys.totalDeathNumber+
          data.NT.todaySummarys.totalDeathNumber+
          data.WA.todaySummarys.totalDeathNumber+
          data.QLD.todaySummarys.totalDeathNumber+
          data.ACT.todaySummarys.totalDeathNumber,
        activeDiff:
          data.NSW.todaySummarys.totalRemianNumber+
          data.VIC.todaySummarys.totalRemianNumber+
          data.TAS.todaySummarys.totalRemianNumber+
          data.SA.todaySummarys.totalRemianNumber+
          data.NT.todaySummarys.totalRemianNumber+
          data.WA.todaySummarys.totalRemianNumber+
          data.QLD.todaySummarys.totalRemianNumber+
          data.ACT.todaySummarys.totalRemianNumber,
        recoveredValue:
          data.NSW.todaySummarys.totalRecoveredNumber+
          data.VIC.todaySummarys.totalRecoveredNumber+
          data.TAS.todaySummarys.totalRecoveredNumber+
          data.SA.todaySummarys.totalRecoveredNumber+
          data.NT.todaySummarys.totalRecoveredNumber+
          data.WA.todaySummarys.totalRecoveredNumber+
          data.QLD.todaySummarys.totalRecoveredNumber+
          data.ACT.todaySummarys.totalRecoveredNumber,
      }
    case "New South Wales":
      return {
        confirmedValue: data.NSW.todaySummarys.todayNewNumber,
        activeValue: data.NSW.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.NSW.todaySummarys.totalDeathNumber,
        deathsValue: data.NSW.todaySummarys.totalDeathNumber,
        activeDiff: data.NSW.todaySummarys.totalRemianNumber,
        recoveredValue: data.NSW.todaySummarys.totalRecoveredNumber,
      }
    case "Victoria":
      return {
        confirmedValue: data.VIC.todaySummarys.todayNewNumber,
        activeValue: data.VIC.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.VIC.todaySummarys.totalDeathNumber,
        deathsValue: data.VIC.todaySummarys.totalDeathNumber,
        activeDiff: data.VIC.todaySummarys.totalRemianNumber,
        recoveredValue: data.VIC.todaySummarys.totalRecoveredNumber,
      }
    case "Tasmania":
      return {
        confirmedValue: data.TAS.todaySummarys.todayNewNumber,
        activeValue: data.TAS.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.TAS.todaySummarys.totalDeathNumber,
        deathsValue: data.TAS.todaySummarys.totalDeathNumber,
        activeDiff: data.TAS.todaySummarys.totalRemianNumber,
        recoveredValue: data.TAS.todaySummarys.totalRecoveredNumber,
      }
    case "South Australia":
      return {
        confirmedValue: data.SA.todaySummarys.todayNewNumber,
        activeValue: data.SA.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.SA.todaySummarys.totalDeathNumber,
        deathsValue: data.SA.todaySummarys.totalDeathNumber,
        activeDiff: data.SA.todaySummarys.totalRemianNumber,
        recoveredValue: data.SA.todaySummarys.totalRecoveredNumber,
      }
    case "Northern Territory":
      return {
        confirmedValue: data.NT.todaySummarys.todayNewNumber,
        activeValue: data.NT.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.NT.todaySummarys.totalDeathNumber,
        deathsValue: data.NT.todaySummarys.totalDeathNumber,
        activeDiff: data.NT.todaySummarys.totalRemianNumber,
        recoveredValue: data.NT.todaySummarys.totalRecoveredNumber,
      }
    case "Western Australia":
      return {
        confirmedValue: data.WA.todaySummarys.todayNewNumber,
        activeValue: data.WA.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.WA.todaySummarys.totalDeathNumber,
        deathsValue: data.WA.todaySummarys.totalDeathNumber,
        activeDiff: data.WA.todaySummarys.totalRemianNumber,
        recoveredValue: data.WA.todaySummarys.totalRecoveredNumber,
      }
    case "Queensland":
      return {
        confirmedValue: data.QLD.todaySummarys.todayNewNumber,
        activeValue: data.QLD.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.QLD.todaySummarys.totalDeathNumber,
        deathsValue: data.QLD.todaySummarys.totalDeathNumber,
        activeDiff: data.QLD.todaySummarys.totalRemianNumber,
        recoveredValue: data.QLD.todaySummarys.totalRecoveredNumber,
      }
    case "ACT":
      return {
        confirmedValue: data.ACT.todaySummarys.todayNewNumber,
        activeValue: data.ACT.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.ACT.todaySummarys.totalDeathNumber,
        deathsValue: data.ACT.todaySummarys.totalDeathNumber,
        activeDiff: data.ACT.todaySummarys.totalRemianNumber,
        recoveredValue: data.ACT.todaySummarys.totalRecoveredNumber,
      }
  }
}

export default function InfoBoard({location}) {
  const classes = useStyles();

  const d = getData(location)

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
          <Grid item xs={6} md={4}>
            <div className={classes.staActive}>
              <div className={classes.diff}>( +{d.activeDiff} )</div>
              <div className={classes.value}>{d.activeValue}</div>
              <div className={classes.label}>Active</div>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div className={classes.staDeceased}>
              <div className={classes.diff}>( +62 )</div>
              <div className={classes.value}>{d.deathsValue}</div>
              <div className={classes.label}>Deaths</div>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.subContainer}>
          <Grid item xs={6} md={4}>
            <div className={classes.staTested}>
              <div className={classes.diff}>( +829 )</div>
              <div className={classes.value}>1206000</div>
              <div className={classes.label}>Tested</div>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div className={classes.staConfirmed}>
              <div className={classes.diff}>( +69 )</div>
              <div className={classes.value}>{d.confirmedValue}</div>
              <div className={classes.label}>Confirmed</div>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div className={classes.staRecovered}>
              <div className={classes.diff}>( +4 )</div>
              <div className={classes.value}>{d.recoveredValue}</div>
              <div className={classes.label}>Recovered</div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
