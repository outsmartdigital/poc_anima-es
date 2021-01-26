import React from 'react'
import { useState } from "react";
import {
  motion,
} from "framer-motion";
import { Template } from '../../components/template'
import { Container, CircularProgress } from './styles.jsx'
import { ButtonShare } from '../../components/ButtonShare'
import { DotLoading } from '../../components/DotLoading';
import { Accordion } from '../../components/Accordion';

export const Tadashi = () => {
  const percents = 100;
  const circumference = Math.ceil(2 * Math.PI * 45);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100))
  );
  const transition = {
    duration: 2,
    delay: 0.5,
    ease: "easeIn"
  };
  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition
    },
    show: {
      strokeDashoffset: fillPercents,
      transition
    }
  };
  const [isSubmit, setIsSubmit] = useState(false);
  return <Template>
    <Container>
      <h1>Animações com framer-motion</h1>
      <CircularProgress>
        <svg
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
        >
          <circle
            cx="50"
            cy="50"
            r={45}
            className="circle"
            strokeWidth={3}
            stroke={"#79808a"}
            strokeOpacity={0.25}
            fill="transparent"
          />
        </svg>
        <svg
          onClick={() => { setIsSubmit(!isSubmit) }}
          viewBox="0 0 100 100"
          width={100}
          height={100}
          style={{
            position: "absolute",
            transform: "rotate(-90deg)",
            overflow: "visible",
            marginLeft: -100
          }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r={45}
            strokeWidth={3}
            stroke={"#ff7e33"}
            fill="transparent"
            strokeDashoffset={fillPercents}
            strokeDasharray={circumference}
            variants={variants}
            initial="hidden"
            animate={isSubmit ? 'show' : 'hidden'}
          >

          </motion.circle>
        </svg>
      </CircularProgress>
      <DotLoading />
      <ButtonShare />
      <Accordion />
    </Container>
  </Template >
}
