/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import ContainerImp from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {data} from '../const/data';

const Container = styled(ContainerImp)`
  display: flex;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;
  margin: 0px auto;
`;

const SubContainer = styled(Grid)`
  padding: 50px;
  text-align: center;
`;

const Paper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Control = styled.div`
  padding: 10px;
`;

const Diff = styled.div`
  font-size: 25px;
  margin-bottom: 8px;
  font-weight: 700;
`;

const Value = styled.div`
  font-size: 70px;
  margin-bottom: 14px;
  font-weight: 800;
`;

const Label = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Location = styled.div`
  font-size: 60px;
  font-weight: 800;
`;

const StaState = styled.div`
  color: #e4e4e4;
`;

const StaActive = styled.div`
  color: #df0e1f;
`;

const StaDeceased = styled.div`
  color: #ffffb3;
`;

const StaTested = styled.div`
  color: #1da1f2;
`;

const StaConfirmed = styled.div`
  color: #f44334;
`;

const StaRecovered = styled.div`
  color: #259c1e;
`;

const getData = location => {
  console.log(location);
  switch (location) {
    case 'AUSTRALIA':
      return {
        confirmedValue: data.AUS.todaySummarys.todayNewNumber,
        activeValue:
          data.AUS.todaySummarys.totalConfirmedNumber,
        // deathsDiff:
        //   data.AUS.todaySummarys.totalDeathNumber,
        deathsValue:
          data.AUS.todaySummarys.totalDeathNumber,
        activeDiff:
          data.AUS.todaySummarys.totalRemianNumber,
        recoveredValue:
          data.AUS.todaySummarys.totalRecoveredNumber,
      }
    case "New South Wales":
      return {
        confirmedValue: data.NSW.todaySummarys.todayNewNumber,
        activeValue: data.NSW.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.NSW.todaySummarys.totalDeathNumber,
        deathsValue: data.NSW.todaySummarys.totalDeathNumber,
        activeDiff: data.NSW.todaySummarys.totalRemianNumber,
        recoveredValue: data.NSW.todaySummarys.totalRecoveredNumber,
      };
    case 'Victoria':
      return {
        confirmedValue: data.VIC.todaySummarys.todayNewNumber,
        activeValue: data.VIC.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.VIC.todaySummarys.totalDeathNumber,
        deathsValue: data.VIC.todaySummarys.totalDeathNumber,
        activeDiff: data.VIC.todaySummarys.totalRemianNumber,
        recoveredValue: data.VIC.todaySummarys.totalRecoveredNumber,
      };
    case 'Tasmania':
      return {
        confirmedValue: data.TAS.todaySummarys.todayNewNumber,
        activeValue: data.TAS.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.TAS.todaySummarys.totalDeathNumber,
        deathsValue: data.TAS.todaySummarys.totalDeathNumber,
        activeDiff: data.TAS.todaySummarys.totalRemianNumber,
        recoveredValue: data.TAS.todaySummarys.totalRecoveredNumber,
      };
    case 'South Australia':
      return {
        confirmedValue: data.SA.todaySummarys.todayNewNumber,
        activeValue: data.SA.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.SA.todaySummarys.totalDeathNumber,
        deathsValue: data.SA.todaySummarys.totalDeathNumber,
        activeDiff: data.SA.todaySummarys.totalRemianNumber,
        recoveredValue: data.SA.todaySummarys.totalRecoveredNumber,
      };
    case 'Northern Territory':
      return {
        confirmedValue: data.NT.todaySummarys.todayNewNumber,
        activeValue: data.NT.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.NT.todaySummarys.totalDeathNumber,
        deathsValue: data.NT.todaySummarys.totalDeathNumber,
        activeDiff: data.NT.todaySummarys.totalRemianNumber,
        recoveredValue: data.NT.todaySummarys.totalRecoveredNumber,
      };
    case 'Western Australia':
      return {
        confirmedValue: data.WA.todaySummarys.todayNewNumber,
        activeValue: data.WA.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.WA.todaySummarys.totalDeathNumber,
        deathsValue: data.WA.todaySummarys.totalDeathNumber,
        activeDiff: data.WA.todaySummarys.totalRemianNumber,
        recoveredValue: data.WA.todaySummarys.totalRecoveredNumber,
      };
    case 'Queensland':
      return {
        confirmedValue: data.QLD.todaySummarys.todayNewNumber,
        activeValue: data.QLD.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.QLD.todaySummarys.totalDeathNumber,
        deathsValue: data.QLD.todaySummarys.totalDeathNumber,
        activeDiff: data.QLD.todaySummarys.totalRemianNumber,
        recoveredValue: data.QLD.todaySummarys.totalRecoveredNumber,
      };
    case 'ACT':
      return {
        confirmedValue: data.ACT.todaySummarys.todayNewNumber,
        activeValue: data.ACT.todaySummarys.totalConfirmedNumber,
        // deathsDiff: data.ACT.todaySummarys.totalDeathNumber,
        deathsValue: data.ACT.todaySummarys.totalDeathNumber,
        activeDiff: data.ACT.todaySummarys.totalRemianNumber,
        recoveredValue: data.ACT.todaySummarys.totalRecoveredNumber,
      };
  }
};

export default function InfoBoard({location}) {
  const d = getData(location);

  return (
    <div>
      <Container maxWidth="lg">
        <SubContainer container item xs={12}>
          <Grid item xs={12}>
            <StaState>
              <Location>{location}</Location>
            </StaState>
          </Grid>
        </SubContainer>
        <SubContainer container item xs={12}>
          <Grid item xs={6} md={4}>
            <StaActive>
              <Diff>( +{d.activeDiff} )</Diff>
              <Value>{d.activeValue}</Value>
              <Label>Active</Label>
            </StaActive>
          </Grid>
          <Grid item xs={6} md={4}>
            <StaDeceased>
              <Diff>( +0 )</Diff>
              <Value>{d.deathsValue}</Value>
              <Label>Deaths</Label>
            </StaDeceased>
          </Grid>
        </SubContainer>
        <SubContainer container item xs={12}>
          <Grid item xs={6} md={4}>
            <StaTested>
              <Diff>( +829 )</Diff>
              <Value>22.5K</Value>
              <Label>Tested</Label>
            </StaTested>
          </Grid>
          <Grid item xs={6} md={4}>
            <StaConfirmed>
              <Diff>( +69 )</Diff>
              <Value>{d.confirmedValue}</Value>
              <Label>Confirmed</Label>
            </StaConfirmed>
          </Grid>
          <Grid item xs={6} md={4}>
            <StaRecovered>
              <Diff>( +4 )</Diff>
              <Value>{d.recoveredValue}</Value>
              <Label>Recovered</Label>
            </StaRecovered>
          </Grid>
        </SubContainer>
qg      </Container>
    </div>
  );
}
