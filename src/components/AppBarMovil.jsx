import { Button, ButtonGroup } from "@mui/material";
import { BoxContainer } from "./BoxContainer";
import { useState } from "react";

export const AppBarMovil = () => {
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
              setOpen(1);
            }}
          >
            Home
          </Button>
      
          <Button
            style={{
              color: "#ea0665",
              width: "80px",
            }}
            onClick={() => {
              setOpen(3);
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
              setOpen(4);
            }}
          >
            Projects
          </Button>

          <Button
            style={{
              color: "#ea0665",
              width: "80px",
            }}
            onClick={() => {
              setOpen(5);
            }}
          >
            Contact
          </Button>
        </ButtonGroup>
       
      </div> 
      <BoxContainer render={open} />
    </>
  );
};
