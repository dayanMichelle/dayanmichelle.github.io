import Box from "@mui/material/Box";
import { Banner } from "./Banner";
import ContactPage from "./ContactPage";
import CvPage from "./CvPage";
import HomePage from "./HomePage";
import Project from "./Project";

export const BoxContainer = () => {
  return (
    <Box
      sx={{
        width: "90%",
        height: 500,
        margin: "0px auto",
      }}
    >
      <Banner />
      <HomePage />
    </Box>
  );
};
