import {Typography} from '@mui/material'
import 'animate.css'

const Home = ()=>{
    const nameArr = [' ','S','a','n','j','a','n',' ','V','a','d','i'];

    return(
        <div id="home" className="home">
            <div className="head1">
                <Typography variant="h3" component='h4'>
                    Hi, I'm
                    <span id='letters' className='teal'> Sanjan Vadi
                        {/* {nameArr.map((letter, index) => (
                            <h1 className='animate__animated animate__bounce animate__infinite' key={index}>{letter}</h1>
                        ))} */}
                    </span>
                    {/* Full-Stack Developer */}
                </Typography> 
                <Typography className="aboutText">
                        A passionate and results-driven software developer with
                        <br/>
                        a Master's in Computer Science from Stevens Institute of Technology.
                    </Typography>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home;