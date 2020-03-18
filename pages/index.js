/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState} from 'react';
import styled from 'styled-components';
import Australia from '../components/australia';
import InfoBoard from '../components/infoBoard';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
import {down} from 'styled-breakpoints';
import 'whatwg-fetch';

const Footer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  color: #fffccc;
  font-size: 18px;
  padding-bottom: 50px;
  ${down('tablet')} {
    margin-top: 25px;
    font-size: 13px;
  }
`;

const Reference = styled.div`
  font-size: 12px;
`;

const Coffeebanner = styled.div`
  display: flex;
  justify-content: center;
`;

const CoffeeLogo = styled.img`
  width: 127px;
  height: 27px;
  cursor: pointer;
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

  const handleBuyCoffeeClick = () => {
    window.open('https://ko-fi.com/F1F61IM4R', '_blank');
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
          {' '}
          Join 💬 discussions about Australian companies 👉{' '}
          <a href="https://www.cthroo.com/discussions">Discussions</a> <br />
          <Reference>
            Data:{' '}
            <a href="https://www.health.nsw.gov.au/" target="_black">
              health.nsw.gov.au
            </a>{' '}
            |{' '}
            <a href="https://www.health.qld.gov.au/" target="_black">
              health.qld.gov.au
            </a>{' '}
            |{' '}
            <a href="http://www.dhhs.vic.gov.au" target="_black">
              dhhs.vic.gov.au
            </a>{' '}
            |{' '}
            <a href="http://covid-19.wileam.com/" target="_black">
              covid-19.wileam.com
            </a>{' '}
          </Reference>
          <br />
          <Coffeebanner>
            If you ❤️ this project 👉{' '}
            <CoffeeLogo
              src="/buyMeACoffee.png"
              alt="buy me coffee"
              onClick={handleBuyCoffeeClick}
            />
          </Coffeebanner>
        </Footer>
      </Grid>
    </>
  );
}
