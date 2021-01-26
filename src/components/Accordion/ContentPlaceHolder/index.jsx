import React from 'react';
import { StyledWord, StyledParagraph, StyleContent } from '../style'

// Generates a random paragraph to use as key when mapping the accordion

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }) => <StyledWord style={{ width }} />;

const Paragraph = ({ words }) => (
  <StyledParagraph>
    {words.map(width => (
      <Word width={width} />
    ))}
  </StyledParagraph>
);

export const ContentPlaceholder = () => (
  <StyleContent
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
  >
    {paragraphs.map(words => (
      <Paragraph words={words} />
    ))}
  </StyleContent>
)