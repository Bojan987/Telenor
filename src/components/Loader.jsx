import React from "react";
import telenor from "../assets/telenorLogo.png";
import { css, keyframes, useTheme } from "@emotion/react";
import { Grid, styled } from "@mui/material";

const myEffect = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(2);
  }
`;

const PulsatingTelenor = styled("img")({
  width: 40,
  height: 40,

  animation: `${myEffect} 1s infinite ease`,
  position: "absolute",
  zIndex: -2,
});

const Loader = () => {
  const theme = useTheme();
  const animatedItem = css`
    animation: ${myEffect} 3000ms ${theme.transitions.easing.easeInOut};
  `;
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "97vh",
      }}
    >
      <PulsatingTelenor
        src={telenor}
        alt="telenor logo loader"
        css={animatedItem}
      />
    </Grid>
  );
};

export default Loader;
