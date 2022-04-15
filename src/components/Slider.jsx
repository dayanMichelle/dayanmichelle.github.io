import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import * as React from "react";

const Slider = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div 
    style={{marginBottom:'80px',   }}
 
    >
      <Accordion
        style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)",border:'1px solid rgba(250,114,104,0.31)'}}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <p   style={{color:'white'}}>Who am I</p>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{color:'white'}}>
            I am a programmer with almost a year of experience in successfully
            maintaining and creating web software. In constant professional
            growth to generate a positive impact in my environment.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
       style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)" ,border:'1px solid rgba(250,114,104,0.31)'}}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <p   style={{color:'white'}}>Experience</p>
        </AccordionSummary>
        <AccordionDetails>
         <p  style={{color:'white'}}>

            <p>Full-stack developer</p>
            <p>VOX COMMUNICATIONS| AUG 2021 -</p>
            <p>Maintain client software designed in different languages.</p> 
            <p>- Design and program web applications (front-end) with React.</p>
         </p>
           
          
        </AccordionDetails>
      </Accordion>
      <Accordion
       style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)",border:'1px solid rgba(234,6,101,0.31)'}}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <p  style={{color:'white'}}>Education</p>
        </AccordionSummary>
        <AccordionDetails>
          <p   style={{color:'white'}}>
            <p>React / React UI library</p>
            <p>Javascript</p>
            <p>NextJS / Next UI - MongoDB</p>
            <p>Typescript</p>
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Slider;
