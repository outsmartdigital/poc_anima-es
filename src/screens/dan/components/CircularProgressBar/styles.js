import { animated } from 'react-spring'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 200px;
  height: 200px;
  .percent {
    /* position: absolute; */
    width: 200px;
    height: 200px;
  }
  circle {
    fill: none;
    stroke-width: 10;
    stroke-dasharray: 440;
    stroke-linecap: square;
  }
  circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: lightgray;
  }

  .number {
    position: relative;
    bottom: 85%;
    left: 28%;
  }

  h2 {
    font-size: 44px;
  }
`

export const StyledProgressCircle = styled(animated.circle)`
  stroke: black;
  stroke-width: 10;
  transform: rotate(-90deg);
`
