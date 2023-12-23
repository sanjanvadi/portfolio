import {
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faNode,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import mongoIcon from "../images/mongoIcon.png";
import graphQL from "../images/graphQL.png";
import 'animate.css'

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <br />
      <h1>Skills</h1>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#ffffff", fontSize: "4em" }}
            className="animate__animated animate__pulse animate__infinite"
          />
        </Grid>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faJsSquare}
            style={{ color: "#ffffff", fontSize: "4em" }}
            className="animate__animated animate__pulse animate__infinite"

          />
        </Grid>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faNode}
            style={{ color: "#ffffff", fontSize: "4em" }}
            className="animate__animated animate__pulse animate__infinite"

          />
        </Grid>
        <Grid item xs={2}>
          <FontAwesomeIcon
            icon={faAws}
            style={{ color: "#ffffff", fontSize: "4em" }}
            className="animate__animated animate__pulse animate__infinite"

          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          {/* <FontAwesomeIcon icon={mongoIcon} style={{color:"#ffffff", fontSize:'4em'}}/> */}
          <CardMedia
            // className="icon"
            className="icon animate__animated animate__pulse animate__infinite"

            component="img"
            image={mongoIcon}
            title="mongoDB logo"
          />
        </Grid>
        <Grid item xs={2}>
          <CardMedia
            // className="icon"
            className="icon animate__animated animate__pulse animate__infinite"

            component="img"
            image={graphQL}
            style={{
              marginLeft: "65px",
              width: "60px", // Set the desired width
              height: "60px", // Set the desired height
              objectFit: "cover", // This property maintains the aspect ratio and makes the image fit within the specified dimensions
            }}
            title="graphQL logo"
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#1F1F1F", color: "white" ,height:'100%',borderRadius: "20px",display:'flex',alignItems:'center',justifyContent:'center' }}
          >
            <CardContent>
              <Typography>FrontEnd</Typography>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent:'center' 
                }}
              >
                <Chip label="HTML" variant="outlined" sx={{ color: "white",borderColor:'purple'  }} />
                <Chip label="CSS" variant="outlined" sx={{ color: "white",borderColor:'#E6AA68'  }} />
                <Chip
                  label="React Js"
                  variant="outlined"
                  sx={{ color: "white" ,borderColor:'teal' }}
                />
                <Chip
                  label="Next Js"
                  variant="outlined"
                  sx={{ color: "white" ,borderColor:'#E6AA68' }}
                />
                <Chip
                  label="Material UI"
                  variant="outlined"
                  sx={{ color: "white" ,borderColor:'teal' }}
                />
                <Chip
                  label="Redux"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'purple'  }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#1F1F1F", color: "white" ,height:'100%',borderRadius: "20px",display:'flex',alignItems:'center',justifyContent:'center' }}
          >
            <CardContent>
              <Typography>BackEnd</Typography>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent:'center' 
                }}
              >
                <Chip
                  label="Node Js"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'teal'  }}
                />
                <Chip
                  label="Express Js"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'#E6AA68' }}
                />
                <Chip
                  label="SpringBoot"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'#E6AA68'}}
                />
                <Chip
                  label="GraphQL"
                  variant="outlined"
                  sx={{ color: "white" ,borderColor:'purple' }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#1F1F1F", color: "white" ,height:'100%',borderRadius: "20px",display:'flex',alignItems:'center',justifyContent:'center' }}
          >
            <CardContent>
              <Typography>Database</Typography>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent:'center' 
                }}
              >
                <Chip
                  label="MySql"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'#E6AA68' }}
                />
                <Chip
                  label="MongoDB"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'teal'  }}
                />
                <Chip
                  label="PostgreSql"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'purple' }}
                />
                <Chip
                  label="Redis"
                  variant="outlined"
                  sx={{ color: "white" ,borderColor:'teal' }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#1F1F1F", color: "white",height:'100%',borderRadius: "20px" ,display:'flex',alignItems:'center',justifyContent:'center' }}
          >
            <CardContent>
              <Typography>Languages</Typography>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent:'center' 
                }}
              >
                <Chip label="Java" variant="outlined" sx={{ color: "white" ,borderColor:'teal' }} />
                <Chip
                  label="JavaScript"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'#E6AA68' }}
                />
                <Chip
                  label="TypeScript"
                  variant="outlined"
                  sx={{ color: "white",borderColor:'teal'  }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card
            variant="outlined"
            sx={{ backgroundColor: "#1F1F1F", color: "white",height:'100%' ,borderRadius: "20px",display:'flex',alignItems:'center',justifyContent:'center' }}
          >
            <CardContent>
              <Typography>DevOps</Typography>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent:'center' 
                }}
              >
                <Chip label="GIT" variant="outlined" sx={{ color: "white" ,borderColor:'purple'}} />
                <Chip label="AWS" variant="outlined" sx={{ color: "white" ,borderColor:'teal' }} />
                <Chip
                  label="Jenkins"
                  variant="outlined"
                  sx={{ color: "white" ,borderColor:'#E6AA68'}}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Skills;
