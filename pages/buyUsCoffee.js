/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    color: '#ffffb3',
    fontSize: '25px',
    textAlign: 'center',
    padding: '50px 0 50px 0',
  },
  subTitle: {
    color: '#ffffb3',
    fontSize: '25px',
    textAlign: 'center',
    padding: '10px 0 50px 0',
  },
  githubLinks: {
    marginTop: '100px',
    color: '#ffffb3',
  },
  buttonControl: {
    marginTop: '50px',
    textAlign: 'center',
    color: 'white',
    marginBottom: '100px',
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/');
  };

  return (
    <>
      <div className={classes.title}>
        Share this site to your family 👨‍👩‍👧‍👧 and friends to keep them updated with
        covid-19 🦠 virus
      </div>
      <div className={classes.subTitle}>
        Wash 🧼 hands 👐 frequently! keep hygiene! Wish you and your family
        healthy! 🤗
      </div>
      <div className={classes.subTitle}>
        If you 💖 this project you can buy us a coffee ☕ to surport our work
      </div>
      <div className={classes.subTitle}>😊 Thank you!</div>
      <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                  src="/paypalIcon.png"
                  alt="paypal"
                  width="100px"
                  height="100px"
                />
                PayPal
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                  src="/paypalQR.png"
                  alt="paypal"
                  width="100px"
                  height="100px"
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                  src="/beemitlogo.png"
                  alt="beemit"
                  width="100px"
                  height="100px"
                />
                Beemit
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                  src="/beemitQR.jpeg"
                  alt="beemit"
                  width="100px"
                  height="100px"
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                  src="/wechat.png"
                  alt="wechat"
                  width="100px"
                  height="100px"
                />
                Wechat pay
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <img
                  src="/wechatQR.png"
                  alt="wechat"
                  width="100px"
                  height="100px"
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={spacing}>
        <div className={classes.githubLinks}>
          If you want to contribute to the source code, please go to our Github
          page: {'  '}
          <a
            target="_black"
            href="https://www.github.com/cthroo/covid-19-australia">
            Github Repo
          </a>
        </div>
      </Grid>

      <div className={classes.buttonControl}>
        <Button variant="contained" color="primary" onClick={handleOnClick}>
          Back to Dashboard
        </Button>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          background: #222222;
        }
      `}</style>
    </>
  );
}
