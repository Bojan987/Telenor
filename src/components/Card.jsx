import { styled, Typography } from "@mui/material";
import React from "react";

const imageStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "0.5s",
  backgroundSize: "cover",
};

const ImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "700px",
  height: "500px",
  background: "#222",
  backgroundRepeat: "no-repeat",
}));
const ClipImage1 = styled("div")((props) => ({
  ...imageStyles,
  background: `url(${props.url})`,
  clipPath: "polygon(0 0, 55% 0,20% 100%,0% 100%)",
  "&:hover": {
    clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
  },
}));

const ClipImage2 = styled("div")((props) => ({
  ...imageStyles,
  background: `url(${props.url})`,
  clipPath: "polygon(55% 0, 100% 0,45% 100%,20% 100%)",
}));
const ClipImage3 = styled("div")((props) => ({
  ...imageStyles,
  background: `url(${props.url})`,
  clipPath: "polygon(100% 0, 100% 0,100% 100%,45% 100%)",
}));

const ImageContent = styled("div")({
  position: "absolute",
  bottom: -100,
  left: 0,
  width: "70%",
  padding: "20px",
  background: "#fff",
  transition: "0.5s",
  color: "#111",
  opacity: 0,
});

const Card = ({ movies }) => {
  const { movie1, movie2, movie3 } = movies;

  return (
    <ImageContainer
      className="container"
      sx={{
        "&:hover": {
          "& .clip": {
            clipPath: "polygon(100% 0, 100% 0,100% 100%,100% 100%)",
          },
        },
      }}
    >
      {movie1 && (
        <ClipImage1
          url={movie1.image.original}
          className="clip clip1"
          sx={{
            "&:hover.clip1": {
              clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
            },
            "&:hover.clip1 .content1": {
              bottom: 0,
              opacity: 1,
            },
          }}
        >
          <ImageContent className="content1">
            <Typography variant="h5">NASLOV</Typography>
            <Typography variant="body1">telkasjlkafhjlkashflakshf</Typography>
          </ImageContent>
        </ClipImage1>
      )}
      {movie2 && (
        <ClipImage2
          url={movie2.image.original}
          className="clip clip2"
          sx={{
            "&:hover.clip2": {
              clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
            },
            "&:hover.clip2 .content2": {
              bottom: 0,
              opacity: 1,
            },
          }}
        >
          <ImageContent className="content2">
            <Typography variant="h5">NASLOV</Typography>
            <Typography variant="body1">telkasjlkafhjlkashflakshf</Typography>
          </ImageContent>
        </ClipImage2>
      )}
      {movie3 && (
        <ClipImage3
          url={movie3.image.original}
          className="clip clip3"
          sx={{
            "&:hover.clip3": {
              clipPath: "polygon(0 0, 100% 0,100% 100%,0 100%)",
            },
            "&:hover.clip3 .content3": {
              bottom: 0,
              opacity: 1,
            },
          }}
        >
          <ImageContent className="content3">
            <Typography variant="h5">NASLOV</Typography>
            <Typography variant="body1">telkasjlkafhjlkashflakshf</Typography>
          </ImageContent>
        </ClipImage3>
      )}
    </ImageContainer>
  );
};

export default Card;