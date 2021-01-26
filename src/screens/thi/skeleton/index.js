import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Default } from 'react-spinners-css'
import ContentLoader from 'react-content-loader'
import Button from '@material-ui/core/Button'

const text = [
  "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
]

const Wrapper = styled.div`
  min-width: 80vw;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  border-radius: 100px;
`

const Text = styled.p`
  font-family: 'tahoma';
  margin-left: 0;
  text-align: justify;
  font-size: 14px;
  width: 250px;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 300px;
  height: 400px;

  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
  background-color: white;
`

const ReloadButton = styled(Button)`
  width: 200px;
  height: 50px;
`

const BigCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 500px;
`

const LoaderWrapper = styled.div`
  height: 400px;
`

const ReactContentLoader = (props) => {
  return (
    <LoaderWrapper>
      <ContentLoader backgroundColor={'white'} foregroundColor={'#F6D0D6'} width={300} height={400}>
        <rect x="90" y="0" rx="100" ry="100" width="130" height="130" />
        <rect x="0" y="150" rx="5" ry="5" width="300" height="300" />
      </ContentLoader>
    </LoaderWrapper>
  )
}

export const SkeletonPage = () => {
  const [state, setState] = useState('loading')

  const setLoading = () => {
    setTimeout(() => {
      setState('done')
    }, 2000)
  }

  const loadPage = () => {
    setState('loading')

    setTimeout(() => {
      setState('done')
    }, 2000)
  }

  useEffect(() => {
    setLoading()
  }, [])

  return (
    <Wrapper>
      <BigCardWrapper>
        {state === 'loading' ? (
          <ReactContentLoader />
        ) : (
          <CardWrapper>
            <Card>
              <Circle />
              <Text>{text}</Text>
            </Card>
          </CardWrapper>
        )}
        <br />
        <br />
        <br />
        <ReloadButton variant="contained" color="secondary" onClick={loadPage}>
          Reload
        </ReloadButton>
      </BigCardWrapper>
      <BigCardWrapper>
        {state === 'loading' ? (
          <Card>
            <Default color={'#418FDE'} />
          </Card>
        ) : (
          <CardWrapper>
            <Card>
              <Circle />
              <Text>{text}</Text>
            </Card>
          </CardWrapper>
        )}
        <br />
        <br />
        <br />
        <ReloadButton variant="contained" color="secondary" onClick={loadPage}>
          Reload
        </ReloadButton>
      </BigCardWrapper>
    </Wrapper>
  )
}
