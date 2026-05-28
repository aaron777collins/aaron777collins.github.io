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
        As graduate in Computer Science from the University of Windsor, I have developed a strong foundation
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
            I have even had the rewarding experience of coaching a Bantam house league hockey team.
        </li>
      </ul>
      <Typography>
        I'm a highly motivated individual who is always looking for new opportunities to learn and grow. I'm currently
        a <strong>Senior Software Development Engineer</strong> at Criteo (Ann Arbor, MI), working in Retail Media on the
        Onsite Ads Activation team &mdash; driving a major re-architecture of ad approval and delivery pipelines using
        C#/.NET 10 and Angular. I was also selected by senior leadership as Criteo's <strong>AI Champion</strong>,
        responsible for driving AI adoption, onboarding engineers to agentic AI workflows, and tracking cross-org AI
        initiatives.
      </Typography>
      <Typography sx={{ marginTop: "1em" }}>
        Outside of my day job, I build <strong>agentic AI systems</strong>: <em>ForgeBot</em> and
        <em> Claude Code Helper</em> (Slack-integrated AI coding agents at Criteo), <em>PortableRalph</em> (an
        autonomous AI dev loop that runs in any repo, cross-platform, 13+ GitHub stars), and <em>SOPHIE</em>, a
        personal AI life assistant accessible via Slack, Discord, and voice calls. I also maintain the
        <em> Minecraft Datapack Language</em> compiler (published on PyPI with a VS Code extension) and
        <em> ZeroTier-GUI-Arch</em> (a popular Steam Deck networking client, 41+ stars).
      </Typography>
    </PaddedCard>
  );
}
