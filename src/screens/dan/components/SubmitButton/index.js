import React, { useState, useRef } from 'react'
import { animated, useSpring, useChain } from 'react-spring'
import { StyleButtonContainer } from './styles'

export function SubmitButton(props) {
  const [open, toggle] = useState(false)
  const [hover, toggleHover] = useState(false)

  const opacityProps = useSpring({
    opacity: open ? 0 : 1,
  })
  const buttonHoverProps = useSpring({
    background: hover && !open ? '#60d5a9' : '#fff',
    color: hover && !open ? '#fff' : '#60d5a9',
  })
  const buttonClickProps = useSpring({
    width: open ? 50 : 200,
    borderColor: open ? "#aaa":'#60d5a9'
  })
  const svgProps = useSpring({
    strokeDashoffset: open ? 0:Math.PI * 2 * 26,
  })

  return (
    <div style={{ position: 'relative' }}>
      <StyleButtonContainer
        onMouseEnter={() => toggleHover(!hover)}
        onMouseLeave={() => toggleHover(!hover)}
        onClick={() => toggle(!open)}
        style={{ ...buttonHoverProps, ...buttonClickProps }}
      >
        <animated.span style={{ ...opacityProps }}>{props.children}</animated.span>
      </StyleButtonContainer>
      <animated.svg
        height="54"
        width="54"
        style={{ position: 'absolute', top: 0, transform: 'rotate(-90deg)' }}
        strokeDasharray={Math.PI * 2 * 26}
        strokeDashoffset={svgProps.strokeDashoffset.interpolate((x) => x)}
      >
        <circle cx="27" cy="27" r="26" stroke="#60d5a9" stroke-width="2" fillOpacity={0} />
      </animated.svg>
    </div>
  )
}
