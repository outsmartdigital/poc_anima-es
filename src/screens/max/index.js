import React, { useRef, useState } from 'react'
import { Template } from '../../components/template'
import { Container, Svg, Button, ButtonWrapper } from './style'

const size = 30
const buttonText = 'Submit'

export const Max = () => {
  const [isLoading, setIsLoading] = useState(false)
  const buttonRef = useRef()
  const loadingRef = useRef()

  const animation = () => {
    if (isLoading) return //avoiding multiple triggers
    setIsLoading(true)
    buttonRef.current.style.cssText = `width: 30px; border-radius: 50%; border-color: #aaa; color: rgba(255,255,255,0); background-color: white`
    setTimeout(() => {
      loadingRef.current.style.display = 'block';
      setTimeout(() => {
        loadingRef.current.style.display = 'none';
        buttonRef.current.style.cssText = `width: 100px; border-radius: 30px; border-color: #60d5a9; color: #fff; background-color: #60d5a9; `
        buttonRef.current.innerText = '✓';
        setTimeout(() => {
          buttonRef.current.style.cssText = 'background-color: #fff; color: rgba(255,255,255,0)';
          setTimeout(() => {
            buttonRef.current.innerText = `${buttonText}`;
            buttonRef.current.style.color = '#60d5a9';
            setIsLoading(false)
          }, 400)
        }, 1000)
      }, 1000) // End of loading animation
    }, 400) // End of button shrinking animation
  }

  const onMouseEnter = () => {
    if (isLoading) return
    buttonRef.current.style.backgroundColor = `#60d5a9`
    buttonRef.current.style.color = `#fff`
  }

  const onMouseLeave = () => {
    if (isLoading) return
    buttonRef.current.style.backgroundColor = `#fff`
    buttonRef.current.style.color = `#60d5a9`
  }

  return (
    <Template>
      <Container>
        <ButtonWrapper>
          <Button ref={buttonRef} onClick={animation} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {buttonText}
          </Button>
          <Svg ref={loadingRef} height={size} width={size}>
            <circle cx={size / 2} cy={size / 2} r={(size / 2) - 1} stroke="#60d5a9" stroke-width="2" fill="#fff" />
          </Svg>
        </ButtonWrapper>
      </Container>
    </Template>
  )
}
