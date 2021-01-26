import styled, { keyframes } from 'styled-components'

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  border: 1px solid;
  min-height: 30px;
  border-radius: 30px;
  border-color: #60d5a9;
  background-color: white;
  color: rgb(96, 213, 169);
  transition: background-color 0.4s, color 0.2s, width 0.4s, border-radius 0.4s, border-color 0.4s;
  width: 100px;
  outline: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const offsettozero = keyframes`
  100% { stroke-dashoffset: 0;}
`

export const Svg = styled.svg`
  display: none;
  position: absolute;
  transform: rotate(-90deg);
  stroke-dasharray: 88; /* (2PI * 14px (radius)) */
  stroke-dashoffset: 88;
  animation: ${offsettozero} 1000ms linear infinite;
`

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

