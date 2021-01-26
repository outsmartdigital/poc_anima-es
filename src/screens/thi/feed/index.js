import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
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
  flex-direction: column;
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  border-radius: 100px;
  margin-left: 40px;
`

const Text = styled.p`
  font-family: 'tahoma';
  margin-left: 40px;
  text-align: justify;
  font-size: 14px;
  width: 600px;
`

const Card = styled.div`
  display: flex;
  align-items: center;

  margin: 20px 0;

  width: 800px;
  height: 200px;

  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18);
`

const FeedWrapper = styled.div`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
`

const LoaderWrapper = styled.div`
  height: 250px;
`

const ReactContentLoader = (props) => {
  return (
    <LoaderWrapper>
      <ContentLoader backgroundColor={'#d3d3d3'} foregroundColor={'#F5F5F5'} width={800} height={200}>
        <rect x="0" y="50" rx="100" ry="100" width="100" height="100" />
        <rect x="140" y="0" rx="5" ry="5" width="700" height="200" />
      </ContentLoader>
    </LoaderWrapper>
  )
}

export const Feed = () => {
  const [post1, setPost1] = useState(true)
  const [post2, setPost2] = useState(true)
  const [post3, setPost3] = useState(true)

  const setLoading = () => {
    setTimeout(() => {
      setPost1(false)
    }, 2000)

    setTimeout(() => {
      setPost2(false)
    }, 4000)

    setTimeout(() => {
      setPost3(false)
    }, 6000)
  }

  const loadPage = () => {
    setPost1(true)
    setPost2(true)
    setPost3(true)

    setTimeout(() => {
      setPost1(false)
    }, 2000)

    setTimeout(() => {
      setPost2(false)
    }, 4000)

    setTimeout(() => {
      setPost3(false)
    }, 6000)
  }

  useEffect(() => {
    setLoading()
  }, [])

  return (
    <Wrapper>
      <FeedWrapper>
        {post1 ? (
          <ReactContentLoader />
        ) : (
          <Card>
            <Circle />
            <Text>{text}</Text>
          </Card>
        )}

        {post2 ? (
          <ReactContentLoader />
        ) : (
          <Card>
            <Circle />
            <Text>{text}</Text>
          </Card>
        )}

        {post3 ? (
          <ReactContentLoader />
        ) : (
          <Card>
            <Circle />
            <Text>{text}</Text>
          </Card>
        )}
      </FeedWrapper>
      <Button variant="contained" color="secondary" onClick={loadPage}>Reload feed</Button>
    </Wrapper>
  )
}
