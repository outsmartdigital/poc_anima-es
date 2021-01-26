import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LoadingContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  margin: 50px;
`;

export const LoadingCircle = styled(motion.span)`
  display: block;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
`;