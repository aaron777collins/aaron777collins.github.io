import { Typography } from '@mui/material';
import * as React from 'react';
import { PaddedCard } from '../../../components/PaddedCard';

export interface IInterestsProps {
}

export default function Interests (props: IInterestsProps) {
  return (
    <PaddedCard>
                  <Typography variant="h3" sx={{ padding: "20px 0" }}>
                    Interests:
                  </Typography>
                  <Typography>
                    I have worked in many roles and explored industries ranging
                    from health foods to <b>web development</b> and{" "}
                    <b>machine learning</b>. However, here are some small
                    snippets about me:
                  </Typography>
                  <ul>
                    <li>
                      Making games and innovative tools have always interested
                      me. I'm quite creative and excel in leadership and
                      productivity. My father introduced me to programming when
                      I was 10 and I was hooked ever since.
                    </li>
                    <li>
                      While growing up, I used to play many sports including
                      travel hockey. Before hanging up the skates, I also
                      coached a bantam house league team to give back to the
                      community.
                    </li>
                  </ul>
                  <Typography>
                    Currently, I am an undergraduate student at the University
                    of Windsor, looking to become a full-stack developer at a
                    big tech company.
                    <br />
                    <br />
                    While at the university, I am researching
                    connected/autonomous driving using machine learning at the
                    University of Windsor. Additionally, I'm currently a
                    teaching assistant for an introductory python course.
                  </Typography>
                </PaddedCard>
  );
}
