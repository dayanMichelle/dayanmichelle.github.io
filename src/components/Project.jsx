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
import Spinner from "./Spinner";
const Project = () => {
  const [projecto, setProjecto] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLoading = (project) => {
    
    setProjecto(project);
    setLoading((prev) => !prev);
    setTimeout(() => {
      setLoading((prev) => !prev);
    }, 1500);
  }
  return (
    <>
  
      <Box className="box">
        <nav
          aria-label="main mailbox folders"
          style={{ width: "140px", color: "#FA7268",textAlign:'center' }}
        >  
          <List>
            {projects.map((project) => (
              <ListItem 
              key={project.id}
              disablePadding>
                <ListItemButton
                  onClick={() => handleLoading(project)}
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
        {!loading ? 
          Object.keys(projecto).length > 0 && (
         
            <ProjectLink loading={loading}  style={{ width: "50%" }} projecto={projecto} />
          
          )
         : <Spinner />}
        
      </Box>
    </>
  );
};

export default Project;
