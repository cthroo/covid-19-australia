/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useEffect, useState, useRef} from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useInterval from '../hooks/useInterval';
import responsivefy from '../lib/responsivefy';
import {locationD3Ids} from '../const/locationsD3Id';
import {down} from 'styled-breakpoints';

const Title = styled.div`
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
  color: white;
  ${down('tablet')} {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ButtonControl = styled.div`
  text-align: center;
  color: white;
`;

export default function Australia({onLocationClick}) {
  const visEl = useRef(null);

  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const w = 750;
    const h = 600;
    const svg = d3
      .select(visEl.current)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .call(responsivefy);

    //Define map projection
    const projection = d3
      .geoMercator()
      .center([132, -28])
      .translate([w / 2, h / 2])
      .scale(840);

    //Define path generator
    const path = d3.geoPath().projection(projection);

    /*
     * 1. NSW
     * 2. VIC
     * 3. QLD
     * 4. SA
     * 5. WA
     *
     * to do: draw color based on number of infections
     */
    const color = d3
      .scaleOrdinal()
      .range([
        '#e17a01',
        '#efa22b',
        '#efa22b',
        '#f4d05a',
        '#f4d05a',
        '#ebe9aa',
        '#ebe9aa',
        '#ebe9aa',
        '#000000',
      ]);

    //Load in GeoJSON data
    d3.json('/aus.json').then(function(json) {
      const states = svg
        .selectAll('path')
        .data(json.features)
        .enter()
        .append('path');

      const names = svg
        .selectAll('text')
        .data(json.features)
        .enter()
        .append('text');

      let australia;
      let active = d3.select(null);

      states
        .attr('d', path)
        .attr('class', function(d) {
          return d.properties.STATE_NAME.replace(/\s/g, '');
        })
        .attr('id', function(d, i) {
          console.log('location-' + d.properties.STATE_NAME.replace(/\s/g, ''));
          return 'location-' + d.properties.STATE_NAME.replace(/\s/g, '');
        })
        .attr('stroke', 'dimgray')
        .attr('opacity', 1)
        .attr('fill', function(d, i) {
          return color(i);
        })
        .on('click', drawstate);

      names
        .attr('pointer-events', 'none')
        .attr('class', function(d) {
          return d.properties.STATE_NAME.replace(/\s/g, '');
        })
        .attr('fill', 'darkslategray')
        .attr('transform', function(d) {
          const centroid = path.centroid(d);

          if (d.properties.STATE_NAME != 'ACT') {
            return 'translate(' + centroid + ')';
          } else {
            return 'translate(' + centroid[0] + ',' + (centroid[1] - 16) + ')';
          }
        })
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .attr('font-family', 'PT Serif')
        .attr('font-size', 15)
        .attr('opacity', 1)
        .text(function(d) {
          return d.properties.STATE_NAME;
        });

      australia = svg
        .append('text')
        .attr('pointer-events', 'none')
        .attr('x', w / 2)
        .attr('y', h / 2)
        .attr('font-size', 90)
        .attr('font-weight', 'bold')
        .attr('font-family', 'Roboto')
        .attr('text-anchor', 'middle')
        .attr('opacity', 0.1)
        .text('COVID-19');

      function drawstate(d) {
        if (active.node() === this) {
          onLocationClick('AUSTRALIA');
          return reset();
        }
        active = d3.select(this).classed('active', true);

        onLocationClick(d.properties.STATE_NAME);

        const bounds = path.bounds(d),
          dx = bounds[1][0] - bounds[0][0],
          dy = bounds[1][1] - bounds[0][1],
          x = (bounds[0][0] + bounds[1][0]) / 2,
          y = (bounds[0][1] + bounds[1][1]) / 2,
          scale = 0.95 / Math.max(dx / w, dy / h),
          translate = [w / 2 - scale * x, h / 2 - scale * y];

        states
          .transition()
          .duration(1000)
          .attr('transform', 'translate(' + translate + ')scale(' + scale + ')')
          .attr('stroke-width', 1 / scale + 'px')
          .attr('opacity', function(d) {
            return d3.select(this).classed('active') ? 1 : 0;
          });

        states.attr('pointer-events', 'none');
        d3.select('.active').attr('pointer-events', 'all');

        names
          .transition()
          .duration(1000)
          .attr('opacity', function() {
            const textclass = this.className.animVal.split(' ')[0];
            if (d.properties.STATE_NAME.replace(/\s/g, '') == textclass) {
              return 1;
            } else {
              return 0;
            }
          });

        const textclass = this.className.animVal.split(' ')[0];
        d3.select('text.' + textclass)
          .transition()
          .duration(1000)
          .attr(
            'transform',
            'translate(' + w / 2 + ',' + h / 2 + ')scale(' + 2 + ')',
          );

        australia
          .transition()
          .duration(1000)
          .attr('opacity', 0);
      }

      function reset() {
        active.classed('active', false);
        active = d3.select(null);

        states
          .transition()
          .duration(1000)
          .attr('stroke-width', 1)
          .attr('opacity', 1)
          .attr('pointer-events', 'all')
          .attr('transform', '');

        names
          .transition()
          .duration(1000)
          .attr('transform', function(d) {
            const centroid = path.centroid(d);

            if (d.properties.STATE_NAME != 'ACT') {
              return 'translate(' + centroid + ')';
            } else {
              return (
                'translate(' + centroid[0] + ',' + (centroid[1] - 16) + ')'
              );
            }
          })
          .attr('opacity', 1)
          .text(function(d) {
            return d.properties.STATE_NAME;
          });

        australia
          .transition()
          .duration(1000)
          .attr('opacity', 0.1);
      }
    });
  }, []);

  function handleIsRunningChange() {
    setIsRunning(!isRunning);
  }

  useInterval(
    () => {
      const nextClickState = locationD3Ids[count];
      d3.select(`#${nextClickState}`).dispatch('click');
      setCount(count + 1 > locationD3Ids.length - 1 ? 0 : count + 1);
    },
    isRunning ? delay : null,
  );

  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Title>
            Australia COVID-19 Coronavirus Tracker <br /> (updated 19.03.2020
            22:32)
          </Title>
        </Grid>

        <Grid item xs={12}>
          <div ref={visEl}></div>
        </Grid>

        <Grid item xs={12}>
          <ButtonControl>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleIsRunningChange}>
              {isRunning ? 'Stop Auto Display' : 'Auto Display'}
            </Button>
          </ButtonControl>
        </Grid>
      </Grid>
    </div>
  );
}
