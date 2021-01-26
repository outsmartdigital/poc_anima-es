import styled from 'styled-components'

export const StyledContainer = styled.div`
    height: 500px;
  > div {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 800;
    font-size: 25em;
    will-change: transform, opacity;
    text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
  }
`
