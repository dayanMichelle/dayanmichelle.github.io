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
    className='accordion'
    >
      
      <Accordion
       style={{ backgroundColor: "transparent", backdropFilter: "blur(3px)" ,border:'1px solid rgba(250,114,104,0.31)'}}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <p   style={{color:'white'}}>Experiencia</p>
        </AccordionSummary>
        <AccordionDetails>
         <div  style={{color:'white'}}>

            <p>Full-stack developer</p>
            <p>VOX COMMUNICATIONS| AGO 2021 -</p>
            <p>Me desempeño como desarrollador web, donde me encargo de mantener, implementar y crear soluciones para los clientes. En mi puesto he trabajado en:</p> 
         
            <p> - Desarrollar soluciones a los problemas de los clientes en cuanto al funcionamiento de su código.</p>
            <p> - Implementar los requisitos del cliente.</p>
            <p>- Aprende diferentes idiomas sobre la marcha. Así que me mantengo en constante entrenamiento.</p>
          </div>
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
          <div   style={{color:'white'}}>
            <p>Soy egresada de AIEP en Programación Computacional.</p>
            <p>2019 - 2020</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Slider;
