import React from "react";
import styled from 'styled-components'
import { motion } from "framer-motion";
import { skills } from '../../data/constants';
import './skills.css';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({  // Remove the type declaration
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;


export const Skills = () => {
  return (
    <section id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      {/*<div className="title">
        <h2>My Skills</h2>
      </div>*/}
      <Title>Skills</Title>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-black borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}