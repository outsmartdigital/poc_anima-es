import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AccordionHeader = styled(motion.header)`
  background: "#ff7e33";
  margin: 30px 0;
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  margin-bottom: 15px;
  width: 500px;
`;

export const ContentSection = styled(motion.section)`
  overflow: hidden;
  width: 500px;
`;

export const StyledWord = styled(motion.div)`
  height: 18px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 8px;
  background:#79808a;
  border-radius: 10px;
  display: inline-block;
`;

export const StyledParagraph = styled(motion.div)`
  margin-bottom: 20px;
`;

export const StyleContent = styled(motion.div)`
  padding: 20px;
  transform-origin: top center;
`;

