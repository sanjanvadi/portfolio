import { Typography } from "@mui/material";

const About = ()=>{
    return(
        <div id="about" className="about">
            <div className="container">
                <br/>
                <br/>
                <h1>About me</h1>
                <div className="aboutBody">
                    
                    <br/>
                    <Typography className="aboutText1">
                        I'm not just a coder; I'm a creator. I've designed and developed diverse projects,
                        <br/>
                        from a pet health management platform to a real estate web application,
                        <br/>
                        an e-commerce website, and even an event platform reminiscent of Ticketmaster.
                        <br/>
                        My technical expertise extends to frameworks like React.js and AngularJS,
                        <br/>
                        databases including MySQL and MongoDB, and cloud services such as AWS.
                    </Typography> 
                    <br/>
                    <Typography className="aboutText1">
                        I'm on a constant quest to create meaningful and efficient solutions,
                        <br/>
                        and I'm excited to take on new challenges and collaborate
                        <br/>
                        with others who share the same passion for innovation.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About;