import React, { useState } from 'react'
import { Template } from '../../components/template'
import styled from 'styled-components'
import { Buttons } from './button'
import { SkeletonPage } from './skeleton'
import { Feed } from './feed'
import { Charts } from './charts'
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #F5F5F5;

  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 50px;
`

export const Thi = () => {
  const [page, setPage] = useState('button')

  const setElement = (element) => {
    switch (element) {
      case 'skeleton':
        setPage('skeleton')
        break
      case 'buttons':
        setPage('buttons')
        break
      case 'feed':
        setPage('feed')
        break
      case 'charts':
        setPage('charts')
        break

      default:
        setPage('buttons')
    }
  }

  return (
    <Template>
      <Wrapper>
        {page === 'skeleton' && <SkeletonPage />}
        {page === 'buttons' && <Buttons />}
        {page === 'feed' && <Feed />}
        {page === 'charts' && <Charts />}
        <br />
        <br />
        <ButtonsWrapper>
          <Button onClick={() => setElement('buttons')} variant="contained" color="primary">
            Buttons
          </Button>
          <Button onClick={() => setElement('skeleton')} variant="contained" color="primary">
            Skeleton
          </Button>
          <Button onClick={() => setElement('feed')} variant="contained" color="primary">
            Feed
          </Button>
          <Button onClick={() => setElement('charts')} variant="contained" color="primary">
            Charts
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    </Template>
  )
}
