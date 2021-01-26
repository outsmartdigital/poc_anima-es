import styled from 'styled-components';
import {motion} from 'framer-motion'

export const StyledButtonShare = styled(motion.div)`
background-color: black;
color: white;
height: 50px;
width: 200px;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
flex-direction: column;
overflow: hidden;

p {
  margin-top: 35px;
}

a {
  text-decoration: none;
  color: white;
}
`;