/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import ContainerImp from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {down} from 'styled-breakpoints';
import {data} from '../const/data';

const Container = styled(ContainerImp)`
  display: flex;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px;
  ${down('tablet')} {
    padding: 0px 10px;
  }
`;

const SubContainer = styled(Grid)`
  padding: 25px;
  text-align: center;
  ${down('tablet')} {
    padding: 10px 10px;
  }
`;

const Diff = styled.div`
  height: 29px;
  font-size: 25px;
  margin-bottom: 8px;
  font-weight: 700;
  ${down('tablet')} {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

const Value = styled.div`
  font-size: 70px;
  margin-bottom: 14px;
  font-weight: 800;
  ${down('tablet')} {
    font-size: 16px;
    margin-bottom: 0px;
  }
`;

const Label = styled.div`
  font-size: 30px;
  font-weight: 700;
  ${down('tablet')} {
    font-size: 16px;
  }
`;

const Location = styled.div`
  font-size: 60px;
  font-weight: 800;
  ${down('tablet')} {
    font-size: 20px;
  }
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

const StaUnderInvestigation = styled.div`
  color: #1da1f2;
`;

const StaTotalTested = styled.div`
  color: #1da1f2;
`;

const StaExcluded = styled.div`
  color: #80da83;
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
        confirmedValue: data.AUS.todaySummarys.totalConfirmedNumber,
        activeValue: data.AUS.todaySummarys.totalRemianNumber,
        deathsValue: data.AUS.todaySummarys.totalDeathNumber,
        activeDiff: data.AUS.todaySummarys.todayNewNumber,
        recoveredValue: data.AUS.todaySummarys.totalRecoveredNumber,
      };
    case 'New South Wales':
      return {
        confirmedValue: data.NSW.todaySummarys.totalConfirmedNumber,
        activeValue: data.NSW.todaySummarys.totalRemianNumber,
        deathsValue: data.NSW.todaySummarys.totalDeathNumber,
        activeDiff: data.NSW.todaySummarys.todayNewNumber,
        recoveredValue: data.NSW.todaySummarys.totalRecoveredNumber,
        totalTestedAndExcluded: data.NSW.todaySummarys.totalTestedAndExcluded,
        casesUnderInvestigation: data.NSW.todaySummarys.casesUnderInvestigation,
      };
    case 'Victoria':
      return {
        totalTested: data.VIC.todaySummarys.totalTested,
        confirmedValue: data.VIC.todaySummarys.totalConfirmedNumber,
        activeValue: data.VIC.todaySummarys.totalRemianNumber,
        deathsValue: data.VIC.todaySummarys.totalDeathNumber,
        activeDiff: data.VIC.todaySummarys.todayNewNumber,
        recoveredValue: data.VIC.todaySummarys.totalRecoveredNumber,
      };
    case 'Tasmania':
      return {
        totalTested: data.TAS.todaySummarys.totalTested,
        totalTestedAndExcluded: data.TAS.todaySummarys.totalTestedAndExcluded,
        confirmedValue: data.TAS.todaySummarys.totalConfirmedNumber,
        activeValue: data.TAS.todaySummarys.totalRemianNumber,
        deathsValue: data.TAS.todaySummarys.totalDeathNumber,
        activeDiff: data.TAS.todaySummarys.todayNewNumber,
        recoveredValue: data.TAS.todaySummarys.totalRecoveredNumber,
      };
    case 'South Australia':
      return {
        totalTested: data.SA.todaySummarys.totalTested,
        confirmedValue: data.SA.todaySummarys.totalConfirmedNumber,
        activeValue: data.SA.todaySummarys.totalRemianNumber,
        deathsValue: data.SA.todaySummarys.totalDeathNumber,
        activeDiff: data.SA.todaySummarys.todayNewNumber,
        recoveredValue: data.SA.todaySummarys.totalRecoveredNumber,
      };
    case 'Northern Territory':
      return {
        confirmedValue: data.NT.todaySummarys.totalConfirmedNumber,
        activeValue: data.NT.todaySummarys.totalRemianNumber,
        deathsValue: data.NT.todaySummarys.totalDeathNumber,
        activeDiff: data.NT.todaySummarys.todayNewNumber,
        recoveredValue: data.NT.todaySummarys.totalRecoveredNumber,
      };
    case 'Western Australia':
      return {
        totalTested: data.WA.todaySummarys.totalTested,
        totalTestedAndExcluded: data.WA.todaySummarys.totalTestedAndExcluded,
        confirmedValue: data.WA.todaySummarys.totalConfirmedNumber,
        activeValue: data.WA.todaySummarys.totalRemianNumber,
        deathsValue: data.WA.todaySummarys.totalDeathNumber,
        activeDiff: data.WA.todaySummarys.todayNewNumber,
        recoveredValue: data.WA.todaySummarys.totalRecoveredNumber,
      };
    case 'Queensland':
      return {
        totalTested: data.QLD.todaySummarys.totalTested,
        confirmedValue: data.QLD.todaySummarys.totalConfirmedNumber,
        activeValue: data.QLD.todaySummarys.totalRemianNumber,
        deathsValue: data.QLD.todaySummarys.totalDeathNumber,
        activeDiff: data.QLD.todaySummarys.todayNewNumber,
        recoveredValue: data.QLD.todaySummarys.totalRecoveredNumber,
      };
    case 'ACT':
      return {
        totalTested: data.ACT.todaySummarys.totalTested,
        totalTestedAndExcluded: data.ACT.todaySummarys.totalTestedAndExcluded,
        confirmedValue: data.ACT.todaySummarys.totalConfirmedNumber,
        activeValue: data.ACT.todaySummarys.totalRemianNumber,
        deathsValue: data.ACT.todaySummarys.totalDeathNumber,
        activeDiff: data.ACT.todaySummarys.todayNewNumber,
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
          <Grid item xs={4} md={4}>
            <StaActive>
              <Diff>{d.activeDiff ? `+${d.activeDiff}` : ''}</Diff>
              <Value>{d.activeValue}</Value>
              <Label>Active</Label>
            </StaActive>
          </Grid>
          <Grid item xs={4} md={4}>
            <StaDeceased>
              <Diff></Diff>
              <Value>{d.deathsValue}</Value>
              <Label>Deaths</Label>
            </StaDeceased>
          </Grid>
          <Grid item xs={4} md={4}>
            {d.casesUnderInvestigation ? (
              <StaUnderInvestigation>
                <Diff></Diff>
                <Value>{d.casesUnderInvestigation}</Value>
                <Label>Under Investigation</Label>
              </StaUnderInvestigation>
            ) : (
              ''
            )}

            {d.totalTested ? (
              <StaTotalTested>
                <Diff></Diff>
                <Value>{d.totalTested}</Value>
                <Label>Total Tested</Label>
              </StaTotalTested>
            ) : (
              ''
            )}
          </Grid>
        </SubContainer>
        <SubContainer container item xs={12}>
          <Grid item xs={4} md={4}>
            <StaConfirmed>
              <Diff></Diff>
              <Value>{d.confirmedValue}</Value>
              <Label>Confirmed</Label>
            </StaConfirmed>
          </Grid>
          <Grid item xs={4} md={4}>
            <StaRecovered>
              <Diff></Diff>
              <Value>{d.recoveredValue}</Value>
              <Label>Recovered</Label>
            </StaRecovered>
          </Grid>
          <Grid item xs={4} md={4}>
            {d.totalTestedAndExcluded ? (
              <StaExcluded>
                <Diff></Diff>
                <Value>
                  {d.totalTestedAndExcluded ? d.totalTestedAndExcluded : ''}
                </Value>
                <Label>Tested & Excluded</Label>
              </StaExcluded>
            ) : (
              ''
            )}
          </Grid>
        </SubContainer>
      </Container>
    </div>
  );
}
