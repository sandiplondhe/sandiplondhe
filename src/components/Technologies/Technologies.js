import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've Worked with a range a technologies in web development world.
     From Back-end to Design.  
   </SectionText>
   <List>
   <ListItem>
     <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-end</ListTitle>
         <ListParagraph>
           Experience with <br/>
           React.js  <br/>
           HTML5
         </ListParagraph>
       </ListContainer>
   </ListItem>
   <ListItem>
     <DiFirebase size="3rem"/>
       <ListContainer>
         <ListTitle>Back-end</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Node.js<br/>
           Php
         </ListParagraph>
       </ListContainer>
   </ListItem>
   <ListItem>
     <DiFirebase size="3rem"/>
       <ListContainer>
         <ListTitle>Databases</ListTitle>
         <ListParagraph>
           Experience with <br/>
           SQL<br/>
           MongoDB 
         </ListParagraph>
       </ListContainer>
   </ListItem>
   </List>
 </Section>
);

export default Technologies;
