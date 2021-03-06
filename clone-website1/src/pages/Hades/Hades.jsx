import React from "react";
import "./Hades.scss";
import ImgSlider from "../../components/slider/slider";
import fullDrawing from "../../static/images/HadesFanartSigned2_1.png";
import { Container, Typography, Grid, Button } from "@material-ui/core";
export default function Hades() {
    return(
        <Container maxWidth="xl">
          <Grid container justify-content="space-between" alignItems="center">
            <Grid
              item
              xl={5}
              lg={5}
              md={4}
              sm={12}
              xs={12}
              className="intro-text"
            >
              <Typography
                className="header"
                component="h3"
                variant="h3"
                color="textPrimary"
              >
                <h1>Some of my Sketches</h1>
                <h6>I drew some Hades Fan Art</h6>
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                className="web-button disabled"
                href="https://bizbunny.github.io/"
              >
                See more art!
              </Button>
            </Grid>
            <Grid
              item
              xl={7}
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className="images-1"
            >
              <ImgSlider />
            </Grid>
            <Grid
              item
              xl={5}
              lg={5}
              md={4}
              sm={12}
              xs={12}
              className="intro-text"
            >
              <Typography
                className="header"
                component="h3"
                variant="h3"
                color="textPrimary"
              >
                <h4>Full Sketch of Zagreus and Duca</h4>
              </Typography>
              <Typography>I used Clip Studio Paint, and I wanted to experiment with the gouache brush.</Typography>
            </Grid>
            <Grid
              item
              xl={7}
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className="images-1"
            >
              <img className="img-responsive" src={fullDrawing} alt="Full drawing of Zagreus and Duca"/>
            </Grid>
          </Grid>
        </Container>
    )
}