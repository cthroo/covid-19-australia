import React, {useRef} from 'react';
import * as d3 from 'd3';
import {makeStyles} from '@material-ui/core/styles';
import aus from '../data/aus.json';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
  },
}));

export default function Australia() {
  const classes = useStyles();

  const visEl = useRef(null);
  const svg = d3.select(visEl.current);

  //Width and height
  const w = 750;
  const h = 600;

  //Define map projection
  const projection = d3
    .geoMercator()
    .center([132, -28])
    .translate([w / 2, h / 2])
    .scale(840);

  //Define path generator
  const path = d3.geoPath().projection(projection);

  const color = d3
    .scalePoint()
    .range([
      '#8dd3c7',
      '#ffffb3',
      '#bebada',
      '#fb8072',
      '#80b1d3',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
    ]);

  svg
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  //Load in GeoJSON data
  d3.json(aus, function(json) {
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
    const active = d3.select(null);

    states
      .attr('d', path)
      .attr('class', function(d) {
        return d.properties.STATE_NAME.replace(/\s/g, '');
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
      .text('AUSTRALIA');

    function drawstate(d) {
      if (active.node() === this) return reset();
      active = d3.select(this).classed('active', true);

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
            return 'translate(' + centroid[0] + ',' + (centroid[1] - 16) + ')';
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

  return <div className={classes.root} href={visEl}></div>;
}
