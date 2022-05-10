import { Button, ButtonGroup } from "@mui/material";
import { BoxContainer } from "./BoxContainer";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export const AppBarMovil = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(1);
  return (
    <>
      <div
        style={{
          marginLeft: "calc(50% - 170px)",
        }}
      >
        <ButtonGroup
          variant="text"
          style={{
            backgroundColor: "transparent",
            height: "50px",
            backdropFilter: "blur(3px)",
          }}
          aria-label="text button group"
        >
          <Button
            style={{
              color: "#ea0665",
              width: "80px",
            }}
            onClick={() => {
              navigate('/')
            }}
          >
            Inicio
          </Button>
      
          <Button
            style={{
              color: "#ea0665",
              width: "80px",
            }}
            onClick={() => {
              navigate('/cv')
            }}
          >
            Cv
          </Button>

          <Button
            style={{
              color: "#ea0665",
              width: "90px",
            }}
            onClick={() => {
              navigate('/projects')
            }}
          >
            Projectos
          </Button>

          <Button
            style={{
              color: "#ea0665",
              width: "80px",
            }}
            onClick={() => {
              navigate('/contact')
            }}
          >
            Contacto
          </Button>
        </ButtonGroup>
       
      </div> 
    
    </>
  );
};
