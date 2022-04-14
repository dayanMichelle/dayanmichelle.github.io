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
    style={{marginBottom:'80px'}}
    >
      <Accordion
        style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)",border:'1px solid gray' }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{color:'#22577E',fontWeight:'bold'}} variant="overline">Who am I</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}} variant="string">
            I am a programmer with almost a year of experience in successfully
            maintaining and creating web software. In constant professional
            growth to generate a positive impact in my environment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)",border:'1px solid gray' }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{color:'#22577E',fontWeight:'bold'}} variant="overline">Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}} variant="string" paragraph="true">
            <p>Full-stack developer</p>
            <p>VOX COMMUNICATIONS| AUG 2021 -</p>
            Maintain client software designed in different languages.
            <p>- Design and program web applications (front-end) with React.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)",border:'1px solid gray' }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{color:'#22577E',fontWeight:'bold'}} variant="overline">Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'white'}} variant="string">
            <p>React / React UI library</p>
            <p>Javascript</p>
            <p>NextJS / Next UI - MongoDB</p>
            <p>Typescript</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Slider;
