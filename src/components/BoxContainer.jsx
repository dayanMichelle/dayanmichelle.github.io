import Box from "@mui/material/Box";
import { Banner } from "./Banner";
import ContactPage from "./ContactPage";
import CvPage from "./CvPage";
import HomePage from "./HomePage";
import Project from "./Project";

export const BoxContainer = ({ render }) => {
  console.log(render);
  return (
    <Box
      sx={{
        width: "90%",
        height: 500,
        margin: "0px auto",
      }}
    >
      {render === 1 ? (
        <>
          <Banner />
          <HomePage />
        </>
      ) : render === 2 ? (
        <CvPage />
      ) : render === 3 ? (
        <CvPage />
      ) : render === 4 ? (
        <Project />
      ) : (
        render === 5 && <ContactPage />
      )}
    </Box>
  );
};
