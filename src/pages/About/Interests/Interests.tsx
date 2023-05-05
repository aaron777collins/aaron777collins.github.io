import { Typography } from '@mui/material';
import * as React from 'react';
import { PaddedCard } from '../../../components/PaddedCard';

export interface IInterestsProps {
}

export default function Interests (props: IInterestsProps) {
  return (
    <PaddedCard>
      <Typography variant="h2" sx={{ padding: "20px 0", fontSize: "3rem", textAlign: "center"}}>
        About Me
      </Typography>
      <Typography>
        As a recent graduate in Computer Science from the University of Windsor, I have developed a strong foundation
         in programming, software development, and data science. Throughout my academic and professional journey, I have
          explored various roles and industries, which have allowed me to gain valuable experience and skills. Here's a
           little more about me:
      </Typography>
      <ul>
        <li>
          Since the age of 10, when my father introduced me to programming, I have been captivated by the process of
           creating games, innovative tools, and software solutions. My creativity and leadership skills have enabled
            me to excel in a diverse range of projects and collaborations, such as my work at Rocket Innovation Studio
            as a Full Stack Developer.
        </li>
        <li>
          I have always been passionate about learning and sharing knowledge, which led me to work as a teaching and
           research assistant at the University of Windsor. In these roles, I have helped students learn to program,
            provided feedback to improve their skills, and conducted research on connected and autonomous driving
             using machine learning.
        </li>
        <li>
          My interest in sports has played a significant role in my life, allowing me to develop teamwork, discipline,
           and leadership skills. I have been actively involved in travel hockey, soccer, baseball, and lacrosse, and
            have even had the rewarding experience of coaching a bantam house league hockey team.
        </li>
      </ul>
      <Typography>
        With my recent graduation, I am now eager to apply my skills and knowledge as a full-stack developer at a leading
         tech company. I am excited to take on new challenges and contribute to innovative projects that have a
          meaningful impact on the world of technology.
      </Typography>
    </PaddedCard>
  );
}
