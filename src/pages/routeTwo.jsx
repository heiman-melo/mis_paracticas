import React from "react";
import { Grid, Container, Button } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import { NavLink, Route, Routes } from "react-router-dom";

function FirstRouter(){
    return (
        <>
          <h1>primer router</h1>
        </>
  );
}

function TwoRouter(){
    return (
        <>
          <h1>segundo router</h1>
        </>
  );
}

function RouteTwo() {
  return (
    <>
      <Container maxWidth="false">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              endIcon={<AndroidIcon />}
              sx={{ m: 4 }}
              component={NavLink}
              to="/routeTwo/firtsRouter"
            >
              primer router
            </Button>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<AndroidIcon />}
              sx={{ m: 4 }}
              component={NavLink}
              to="/routeTwo/twoRouter"
            >
              segundo router
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Routes>
              <Route path="firtsRouter" element={<FirstRouter/>}/>
              <Route path="twoRouter" element={<TwoRouter/>}/>
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RouteTwo;
