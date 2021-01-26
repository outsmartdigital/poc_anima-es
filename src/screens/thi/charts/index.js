import React from 'react'
import Charty from 'react-charty'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 90vw;
  height: 100vh;
`

const LIGHT_THEME = {
  grid: { color: '#182D3B', alpha: 0.1, markerFillColor: '#fff', markerRadius: 0 },
  legend: { background: '#fff', color: '#000' },
  preview: {
    maskColor: '#E2EEF9',
    maskAlpha: 0.6,
    brushColor: '#C0D1E1',
    brushBorderColor: '#fff',
    brushBorderAlpha: 1,
    handleColor: '#fff',
  },
  xAxis: { textColor: '#8E8E93', textAlpha: 1 },
  yAxis: { textColor: '#8E8E93', textAlpha: 1 },
  title: { color: '#000' },
  localRange: { color: '#000' },
  zoomedRange: { color: '#000' },
  zoomText: { color: '#108BE3' },
  zoomIcon: { fill: '#108BE3' },
  buttons: { color: '#fff' },
  pie: { textColor: '#fff' },
}

const MINIMAL_EXAMPLE_DATA = {
  type: 'bar',
  data: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    y0: [-20, 0, 20, 23, 25, 28, 40, 50, 33, 23, 14, 3, 15, 16, 18, 20, 34, 44, 30, 31, 43, 22, 15, 27, 23],
    y1: [-10, 5, 10, 13, 12, 14, 20, 20, 23, 13, 4, 0, 0, 8, 32, 10, 20, 80, 10, 21, 13, 10, 8, 35, 12],
    y2: [10, 15, 50, 20, 1, 0, 0, 0, 3, 113, 40, 10, 20, 38, 10, 100, 40, 40, 20, 31, 40, 50, 18, 5, 22],
  },
  colors: {
    y0: '#03254c',
    y1: '#E1AA12',
    y2: '#008089',
  },
  names: {
    y0: 'Temperature, C',
    y1: 'Temperature, F',
    y2: 'Temperature, K',
  },
  startX: 1,
  endX: 25,
  xAxisStep: 2,
  showPreview: false,
  showRangeText: true,
  showLegendTitle: true,
  theme: LIGHT_THEME,
}

const MINIMAL_EXAMPLE_DATA2 = {
    type: 'pie',
    data: {
      x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      y0: [-20, 0, 20, 23, 25, 28, 40, 50, 33, 23, 14, 3, 15, 16, 18, 20, 34, 44, 30, 31, 43, 22, 15, 27, 23],
      y1: [-10, 5, 10, 13, 12, 14, 20, 20, 23, 13, 4, 0, 0, 8, 32, 10, 20, 80, 10, 21, 13, 10, 8, 35, 12],
      y2: [10, 15, 50, 20, 1, 0, 0, 0, 3, 113, 40, 10, 20, 38, 10, 100, 40, 40, 20, 31, 40, 50, 18, 5, 22],
    },
    colors: {
      y0: '#03254c',
      y1: '#E1AA12',
      y2: '#008089',
    },
    names: {
      y0: 'Temperature, C',
      y1: 'Temperature, F',
      y2: 'Temperature, K',
    },
    startX: 1,
    endX: 25,
    xAxisStep: 2,
    showPreview: false,
    showRangeText: true,
    showLegendTitle: true,
    theme: LIGHT_THEME,
  }

export const Charts = () => {
  return (
    <Wrapper>
      <Charty title="Temperature" {...MINIMAL_EXAMPLE_DATA} />
      <Charty title="Temperature" {...MINIMAL_EXAMPLE_DATA2} />
    </Wrapper>
  )
}
