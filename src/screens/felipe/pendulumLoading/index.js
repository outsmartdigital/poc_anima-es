import React from 'react'
import { CircleLeft, StaticCircle, NormalShadow, LeftShadow, RightShadow, CircleRight, WrapperLoading } from './style.js'




export const PendulumLoading = () => {
    return (
      <WrapperLoading>
        <CircleLeft />
        <StaticCircle />
        <StaticCircle />
        <StaticCircle />
        <StaticCircle />
        <StaticCircle />
        <CircleRight />
        <LeftShadow />
        <NormalShadow />
        <NormalShadow />
        <NormalShadow />
        <NormalShadow />
        <NormalShadow />
        <RightShadow />
      </WrapperLoading>
    )
}
