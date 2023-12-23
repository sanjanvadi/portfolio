import { Typography, Card, Grid, CardContent } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faShirt,
  faHouse,
  faDog,
  faLocationDot,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <br />
      <h1>Projects</h1>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <a
            href="https://github.com/sanjanvadi/PetOpia"
            target="blank"
            rel="nopener noreferrer"
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#1f1f1f",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography>
                  <FontAwesomeIcon icon={faDog} /> PetOpia
                </Typography>
                <br />
                React | NodeJs | MongoDB
              </CardContent>
            </Card>
          </a>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: "#1f1f1f",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <Typography>
                <FontAwesomeIcon icon={faShirt} /> E-Kart
              </Typography>
              <br />
              AngularJs | SpringBoot | MySql
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <a
            href="https://github.com/sanjanvadi/HomeFinder"
            target="blank"
            rel="nopener noreferrer"
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#1f1f1f",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography>
                  <FontAwesomeIcon icon={faHouse} /> HomeFinder
                </Typography>
                <br />
                JavaScript | Express Js | MongoDB
              </CardContent>
            </Card>
          </a>
        </Grid>
        <Grid item xs={3}>
          <a
            href="https://github.com/sanjanvadi/CS554_web_programming2/tree/main/lab4-TicketMasterAPI"
            target="blank"
            rel="nopener noreferrer"
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#1f1f1f",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography>
                  <FontAwesomeIcon icon={faTicket} /> TicketMaster Clone
                </Typography>
                <br />
                NextJs | NodeJs | Redis
              </CardContent>
            </Card>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://github.com/sanjanvadi/FoureSquareAPI"
            target="blank"
            rel="nopener noreferrer"
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#1f1f1f",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography>
                  <FontAwesomeIcon icon={faLocationDot} /> Places Nearby
                </Typography>
                <br />
                ReactJs | GraphQL | Redis
              </CardContent>
            </Card>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://github.com/sanjanvadi/KnowYourPresidents"
            target="blank"
            rel="nopener noreferrer"
          >
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#1f1f1f",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography>
                  <FontAwesomeIcon icon={faFlag} /> KnowYourPresidents
                </Typography>
                <br />
                JavaScript | Express Js | MongoDB
              </CardContent>
            </Card>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
