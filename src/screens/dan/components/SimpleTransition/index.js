import React, { useCallback } from 'react'
import { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import { StyledContainer } from './styles'


const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>O</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>M</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>G</animated.div>,
]

export function SimpleTransition() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set((state) => (state + 1) % 3), [])
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <StyledContainer onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </StyledContainer>
  )
}
