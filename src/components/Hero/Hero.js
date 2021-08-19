import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Sandip Londhe
      </SectionTitle> 
      <SectionText>
      2+ years of experience in software development. Worked on languages like PHP, JavaScript, having work exposure on Node.js, React and also built an apps using MERN stack. 
      </SectionText>
      <Button onClick={()=>window.location='https://www.google.com'}>View More</Button>
    </LeftSection>
  </Section>
);

export default Hero;