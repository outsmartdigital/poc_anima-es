import * as React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AccordionHeader, ContentSection } from './style'
import { ContentPlaceholder } from "./ContentPlaceHolder/index";

const AccordionComponent = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  const accordionVariants = {
    open: {
      opacity: 1,
      height: "auto"
    },
    collapsed: {
      opaccity: 0,
      height: 0
    }
  }

  const transition = {
    duration: 0.4, 
    ease: [0.04, 0.62, 0.23, 0.98]
  }
  return (
    <>
      <AccordionHeader
        initial={false}
        animate={{ backgroundColor: isOpen ? "#ff4800" : "#ff7e33"}}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentSection
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            transition={transition}
          >
            <ContentPlaceholder />
          </ContentSection>
        )}
      </AnimatePresence>
    </>
  );
};

export const Accordion = () => {
  const [expanded, setExpanded] = useState(0);

  return accordionIds.map((i) => (
    <AccordionComponent i={i} expanded={expanded} setExpanded={setExpanded} />
  ));
};

const accordionIds = [0, 1, 2, 3];
