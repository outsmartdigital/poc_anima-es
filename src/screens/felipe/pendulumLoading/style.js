import styled from 'styled-components'

export const WrapperLoading = styled.div`
  transform-origin: 50% 0;
  width: 200px;
  height: 100px;
  // it is absolute to facilitate the movement of the module
  position: absolute;
  left: 800px;
  top: 100px;
  top: 500px;
`

export const StaticCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: black;
  top: 20px;
  :nth-child(2) {
    left: 25%;
    background-color:#c3441b
  }
  :nth-child(3) {
    left: 35%;
    background-color:#902503;
  }
  :nth-child(4) {
    left: 45%;
    background-color:#b9bbeb;
  }
  :nth-child(5) {
    left: 55%;
    background-color:#4e54e8;
  }
  :nth-child(6) {
    left: 65%;
    background-color:#3a40e7;
  }
`
export const CircleLeft = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #d03605;
  animation: circleLeft 0.8s ease-out alternate infinite;
  animation-delay: 0.4s;
  left: 15%;
  top: 20px;
  transform-origin: 200% -100%; 

  @keyframes circleLeft {
    0%, 100% { transform: rotate(-5deg); }
    10%, 90% { transform: rotate(0deg); }
    40%, 60% { transform: rotate(90deg) }
    50% { transform: rotate(95deg); }
  }
`

export const LeftShadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 62px;
  left: 15%;
  z-index: -1;
  filter: blur(1px);
    animation: shadowLeft 0.4s ease-in-out alternate infinite;
    animation-delay: 0.8s;
  @keyframes shadowLeft {
    0% {
        left: calc(15% - 25px);
      background-color: rgba(0, 0, 0, 0.1);
    }
    40% {
        background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
        left: 15%;
    }
  }
`

export const RightShadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 62px;
  left: 75%;
  z-index: -1;
  filter: blur(1px);
  animation: shadowRight 0.4s ease-in-out alternate infinite;
  animation-delay: 0.4s;

  @keyframes shadowRight {
    0% {
      left: calc(75% + 15px);
      background-color: rgba(0, 0, 0, 0.1);
    }
    40% {
        background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
        left: 75%;
    }
  }
`

export const NormalShadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  :nth-child(13) {
    left: 25%;
  }
  :nth-child(9) {
    left: 35%;
  }
  :nth-child(10) {
    left: 45%;
  }
  :nth-child(11) {
    left: 55%;
  }
  :nth-child(12) {
    left: 65%;
  }
`
export const CircleRight = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #0e15e8;
  left: 75%;
  top: 20px;
  animation: pendulumRight 0.8s ease-out alternate infinite;
  transform-origin: -100% -100%;

  @keyframes pendulumRight {
    0%, 100% { transform: rotate(5deg); }
    10%, 90% { transform: rotate(0deg); }
    40%, 60% { transform: rotate(-90deg) }
    50% { transform: rotate(-95deg); }
  }
`
