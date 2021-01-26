import React from 'react';
import {motion} from 'framer-motion'
import {StyledButtonShare} from './style'


export const ButtonShare = () => {
  const buttonContainer = {
    start: {
    },
    end: {

    }
  };
  const buttonContentVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "-40%",
    }
  }
  const buttonTransition = {
    duration: 0.1,
    ease: "easeInOut",
  }

  return <StyledButtonShare variants={buttonContainer} initial="start" whileHover="end">
      <motion.div style={{margin: "12px", textAlign: "center"}} variants={buttonContentVariants} transition={buttonTransition}>
        <p>SHARE</p>
        <div>
          <a href='facebook.com'>Face</a> | 
          <a href='instagram.com'> Insta</a> | 
          <a href='twitter.com'> Twi</a> | 
          <a href='linkedin.com'> Link</a>
        </div>
      </motion.div>
    </StyledButtonShare>
}