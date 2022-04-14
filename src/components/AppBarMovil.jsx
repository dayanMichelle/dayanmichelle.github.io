import { Button, ButtonGroup } from "@mui/material";
import { BoxContainer } from "./BoxContainer";
import { useState } from "react";

export const AppBarMovil = () => {
  const [open, setOpen] = useState(0);
  return (
    <>
      <div
        style={{
          marginLeft: "calc(50% - 180px)",
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
              color: "#22577E",
              width: "70px",
            }}
            onClick={() => {
              setOpen(1);
            }}
          >
            Home
          </Button>
          <Button
            style={{
              color: "#22577E",
              width: "70px",
            }}
            onClick={() => {
              setOpen(2);
            }}
          >
            About
          </Button>
          <Button
            style={{
              color: "#22577E",
              width: "70px",
            }}
            onClick={() => {
              setOpen(3);
            }}
          >
            Cv
          </Button>

          <Button
            style={{
              color: "#22577E",
              width: "70px",
            }}
            onClick={() => {
              setOpen(4);
            }}
          >
            Projects
          </Button>

          <Button
            style={{
              color: "#22577E",
              width: "70px",
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
