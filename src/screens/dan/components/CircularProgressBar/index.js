import React, { useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { StyledContainer, StyledProgressCircle } from './styles'

export function CircularProgressBar(props) {
  const [open, toggle] = useState(false)
  const progressProps = useSpring({ number: open ? props.to : props.from })

  return (
    <StyledContainer onClick={() => toggle(!open)}>
      <div class="percent">
        <svg viewBox="0 0 200 200">
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="70"></circle>
            <StyledProgressCircle
              cx="0"
              cy="0"
              r="70"
              strokeDashoffset={progressProps.number.interpolate((x) => 440 - (440 * x) / 100)}
            ></StyledProgressCircle>
          </g>
        </svg>
        <div class="number">
          <animated.h2>{progressProps.number.interpolate((x) => x.toFixed(0) + '%')}</animated.h2>
        </div>
      </div>
    </StyledContainer>
  )
}
