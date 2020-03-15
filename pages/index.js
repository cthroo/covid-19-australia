/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState} from 'react';
import styled from 'styled-components';
import Australia from '../components/australia';
import InfoBoard from '../components/infoBoard';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
import 'whatwg-fetch';

const Footer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  color: #fffccc;
  font-size: 18px;
  padding-bottom: 50px;
`;

export default function Index() {
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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Australia onLocationClick={onLocationClick} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InfoBoard location={location} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer>
          Visualisation Made and maintained by{' '}
          <a href="https://www.cthroo.com">www.cthroo.com</a> | Data source if
          from:{' '}
          <a href="https://www.health.nsw.gov.au/" target="_black">
            health.nsw.gov.au
          </a>{' '}
          <br />
          <a href="https://www.health.qld.gov.au/" target="_black">
            health.qld.gov.au
          </a>{' '}
          |{' '}
          <a href="http://www.dhhs.vic.gov.au" target="_black">
            dhhs.vic.gov.au
          </a>{' '}
          <br />
          If you ❤️ this project 👉
          <a onClick={handleClick}> please consider buying us a coffee ☕ 😊</a>
        </Footer>
      </Grid>
    </>
  );
}
