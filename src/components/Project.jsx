import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import ProjectLink from "./ProjectLink";
import { projects } from "../projects/list";
import { useState } from "react";
const Project = () => {
  const [projecto, setProjecto] = useState({});

  return (
    <>
  
      <Box className="box">
        <nav
          aria-label="main mailbox folders"
          style={{ width: "50%", color: "#FA7268",textAlign:'center' }}
        >  
          <List>
            {projects.map((project) => (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setProjecto(project);
                  }}
                >
                  <ListItemIcon>
                    <AddIcon sx={{ color: "#FA7268" }} />
                  </ListItemIcon>
                  <ListItemText> {project.name}</ListItemText>
                  {project.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        {Object.keys(projecto).length > 0 && (
          <ProjectLink style={{ width: "50%" }} projecto={projecto} />
        )}
      </Box>
    </>
  );
};

export default Project;
