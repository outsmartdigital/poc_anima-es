import React from 'react'
import { Template } from '../../components/template'
import { BallLoading } from './ballLoading/index'
import { PendulumLoading } from './pendulumLoading/index'
export const Felipe = () => {
  return (
    <Template>
      <BallLoading />
      <PendulumLoading />
    </Template>
  )
}
