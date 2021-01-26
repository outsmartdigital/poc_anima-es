import React, { useState } from 'react'
import { Facebook, Ripple } from 'react-spinners-css'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 800px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled(AwesomeButton)`
  width: 200px;
  height: 100px;
  margin: 15px;
`

const LoadingWrapper = styled.div`
  width: 200px;
  height: 100px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Buttons = () => {
  const [state1, setState1] = useState('')
  const [state2, setState2] = useState('')

  const handleClick1 = () => {
    setState1('loading')

    setTimeout(() => {
      setState1('success')
    }, 2000)

    setTimeout(() => {
      setState1('none')
    }, 3000)
  }

  const handleClick2 = () => {
    setState2('loading')

    setTimeout(() => {
      setState2('success')
    }, 2000)

    setTimeout(() => {
      setState2('none')
    }, 3000)
  }

  const renderSwitch1 = (state) => {
    switch (state) {
      case 'loading':
        return (
          <LoadingWrapper>
            <Facebook color={'#418FDE'} />
          </LoadingWrapper>
        )
      case 'success':
        return (
          <Button size ripple onPress={handleClick1} type="primary">
            Done! :D
          </Button>
        )
      default:
        return (
          <Button color={'#418FDE'} ripple onPress={handleClick1} type="primary">
            Circular
          </Button>
        )
    }
  }

  const renderSwitch2 = (state) => {
    switch (state) {
      case 'loading':
        return (
          <LoadingWrapper>
            <Ripple color={'#418FDE'} />
          </LoadingWrapper>
        )
      case 'success':
        return (
          <Button ripple onPress={handleClick2}>
            Done!
          </Button>
        )
      default:
        return (
          <Button ripple onPress={handleClick2}>
            Ripple
          </Button>
        )
    }
  }

  return (
    <Wrapper>
      {renderSwitch1(state1)}

      {renderSwitch2(state2)}

      <Button ripple>Hourglass</Button>
    </Wrapper>
  )
}
