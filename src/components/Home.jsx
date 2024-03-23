import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {collegeseek,sharevault,hireharbour,epiclouge,passgenius,weatherapp,chatspace,connecthub,portfolio,dragonace,crudbootapp} from "../web_images/allimages";
import Cards from './Cards';

const Top = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 25px;
    background-color: gray;
`;

const CardContainer = styled(Box)`
    max-width: 1100px;
    margin: 0 auto;
`;

const CarouselWrapper = styled(Box)`
  .slick-prev {
    left: -80px;
  }
  .slick-next {
    right: -80px;
  }
`;

function Home() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <Top>
            <Typography  style={{fontSize:"70px", fontWeight:"5500px"}}  className="title">___My Projects___</Typography>
            <CardContainer>
                <CarouselWrapper>
                    <Slider {...settings}>
                        <Cards 
                          src={collegeseek}
                          alt="CollegeSeek"
                          title="CollegeSeek"
                          href="https://sumitscollegeseek.netlify.app/"
                          description="A MERN Stack Application for Posting and Group Discussions"
                        />
                        <Cards
                            component="div"
                            src={sharevault}
                            alt="ShareVault"
                            title="ShareVault"
                            href="https://sumitsharevault.netlify.app/"
                            description="A MERN Stack Application for File Uploading and Accessing"
                        />

                        <Cards
                            component="div"
                            src={crudbootapp}
                            alt="CrudBootApp"
                            title="CrudBootApp"
                            href="https://sumitscrudbootapp.netlify.app/"
                            description="A ReactJS, MongoDB and Spring Boot Application for CRUD Operations"
                        />

                        <Cards
                            component="div"
                            src={epiclouge}
                            alt="EpicLogue"
                            title="EpicLogue"
                            href="https://sumitsepiclogue.netlify.app/"
                            description="A React JS Application also uses Appwrite for backend to post blogs"
                        />

                        <Cards
                            component="div"
                            src={hireharbour}
                            alt="HireHarbor"
                            title="HireHarbor"
                            href="https://sumitshireharbor.netlify.app/"
                            description="A MERN Stack Application for Job Listing and Posting"
                        />

                        <Cards
                            component="div"
                            src={passgenius}
                            alt="PassGenius"
                            title="PassGenius"
                            href="https://sumitspassgenius.netlify.app"
                            description="A React JS Application for Generating Passwords"
                        />

                        <Cards
                            component="div"
                            src={weatherapp}
                            alt="WeatherApp"
                            title="WeatherApp"
                            href="https://weatherappwithwapi.netlify.app/"
                            description="A React JS weather application made using OpenWeatherApi"
                        />

                        <Cards
                            component="div"
                            src={chatspace}
                            alt="ChatSpace"
                            title="ChatSpace"
                            href="https://sumitonlineapp.netlify.app/"
                            description="A simple chating application made using Node JS and Socket io"
                        />

                        <Cards
                            component="div"
                            src={connecthub}
                            alt="ConnectHub"
                            title="ConnectHub"
                            href="https://sumitsconnecthub.netlify.app"
                            description="A React JS Application for making a Video Calls"
                        />

                        <Cards
                            component="div"
                            src={portfolio}
                            alt="Portfoliofolio"
                            title="Portfolio"
                            href="https://sumitsportfolioweb.netlify.app/"
                            description="A simple Portfolio Website made using HTML"
                        />

                        <Cards
                            component="div"
                            src={dragonace}
                            alt="DragonAce"
                            title="DragonAce"
                            href="https://sumitdragonagegame.netlify.app/"
                            description="A simple Web Game made using HTML, CSS and JS"
                        />

                    </Slider>
                </CarouselWrapper>
            </CardContainer>
        </Top>
    );
}

export default Home;
