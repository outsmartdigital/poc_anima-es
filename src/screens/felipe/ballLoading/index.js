import React from 'react'
import { Circle, Shadow, WrapperLoading,Title} from './style.js'

export const BallLoading = () => {
  return (
    <WrapperLoading>
    <Circle/>     
    <Circle/>     
    <Circle/>     
    <Shadow/>
    <Shadow/>
    <Shadow/>
    <Title>Carregando</Title>
    </WrapperLoading>
  )
}
