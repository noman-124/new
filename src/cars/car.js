import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GrManual } from "react-icons/gr";
import SpeedIcon from "@mui/icons-material/Speed";
import { IoIosSpeedometer } from "react-icons/io";

import "./car.css";
import { Grid } from "@mui/material";

const Maps = () => {
  window.open("https://www.google.com/maps", "_blank");
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card1">
      <CardHeader
        avatar={
          <Avatar>
            <img src="bmw2.webp" alt="BMW"></img>
          </Avatar>
        }
        action={
          <IconButton aria-label="Google Maps" onClick={Maps}>
            <PlaceTwoToneIcon />
          </IconButton>
        }
        title={
          <Typography className="title">
            <b>BMW</b>
          </Typography>
        }
        subheader={
          <Typography className="subheader">
            <b> 2000cc Model:2024 Color:Silver</b>
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image="bmwcar.webp"
        alt="BMW Car"
      />
      <CardContent>
        {/* <Grid container spacing={1}>
          <Grid item xs={5}>
            <Typography className="typo" >
            <b>Available At:</b> Canal Motors Faisalabad
            </Typography>
            <Typography  className="typo1" >
            <b>Price</b> 20000$
            </Typography>
          </Grid>
          <Grid item>
            <Grid className="vertical-divider"></Grid>
          </Grid>
          <Grid item xs={5}>
          <Typography>
          <BsFillFuelPumpDieselFill className="petrol-icon" />
         Petrol   
        </Typography>
        <Typography>
        <GrManual className="gear-icon" />
        Manual 
        </Typography>
        <Typography>
        <IoIosSpeedometer className="speed-icon" />
        28457KM 
        </Typography>
          </Grid>
        </Grid> */}
        <Typography className="typo4">
          <b> $200780 </b>
        </Typography>
        <Grid className="gri">
          <Typography>
            <BsFillFuelPumpDieselFill className="petrol-icon" />
            &nbsp; Petrol &nbsp;
            <GrManual className="gear-icon" />
            &nbsp; Manual &nbsp;
            <IoIosSpeedometer className="speed-icon" />
            &nbsp; 28457KM &nbsp;
          </Typography>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="Google Maps" onClick={Maps}>
          <PlaceTwoToneIcon />
        </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
