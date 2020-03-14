import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function InfoBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        Cases Count Confirmed cases​​​ 112* Cases under investigation 1,668
        Cases tested and excluded 18,716 Total 20,496
      </Container>
    </div>
  );
}
