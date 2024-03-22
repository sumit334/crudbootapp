import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {collegeseek,sharevault,hireharbour,epiclouge,passgenius,weatherapp,chatspace,connecthub,portfolio,dragonace,crudbootapp} from "../web_images/allimages";

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

const Card = styled(Box)`
    max-width: 350px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 0 10px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.15);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
`;



const CardImage = styled("img")`
    width: 100%;
    height: 300px;
    object-fit: cover;
    &:hover {
      transform: scale(1.20);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CardContent = styled(Box)`
    padding: 20px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(Typography)`
    margin: 0;
    font-size: 35px;
    font-weight: 200px;
`;

const Description = styled(Typography)`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Link = styled("a")`
    display: block;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #000;
    }
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
                        <Card component="div">
                            <CardImage src={collegeseek} alt="CollegeSeek" />
                            <CardContent component="div">
                                <Title><Link href="https://sumitscollegeseek.netlify.app/" target="_blank">CollegeSeek</Link></Title>
                                <Description>A MERN Stack Application for Posting and Group Discussions</Description>
                            </CardContent>
                        </Card>
                        <Card component="div">
                            <CardImage src={sharevault} alt="ShareVault" />
                            <CardContent>
                                <Title><Link href="https://sumitsharevault.netlify.app/" target="_blank">ShareVault</Link></Title>
                                <Description>A MERN Stack Application for File Uploading and Accessing</Description>
                            </CardContent>
                        </Card>
                        <Card component="div">
                            <CardImage src={crudbootapp} alt="CrudBootApp" />
                            <CardContent component="div">
                                <Title><Link href="https://sumitscrudbootapp.netlify.app/" target="_blank">CrudBootApp</Link></Title>
                                <Description>A ReactJS,MongoDB and Spring Boot Application for CRUD Operations</Description>
                            </CardContent>
                        </Card>
                        <Card component="div">
                            <CardImage src={epiclouge} alt="EpicLogue" />
                            <CardContent>
                                <Title><Link href="https://sumitsepiclogue.netlify.app/" target="_blank">EpicLogue</Link></Title>
                                <Description>A React JS Application also uses Appwrite for backend to post blogs</Description>
                            </CardContent>
                        </Card>
                        <Card component="div">
                            <CardImage src={hireharbour} alt="HireHarbor" />
                            <CardContent>
                                <Title><Link href="https://sumitshireharbor.netlify.app/" target="_blank">HireHarbor</Link></Title>
                                <Description>A MERN Stack Application for Job Listing and Posting</Description>
                            </CardContent>
                        </Card>
                        <Card component="div">
                            <CardImage src={passgenius} alt="PassGenius" />
                            <CardContent>
                                <Title><Link href="https://sumitspassgenius.netlify.app" target="_blank">PassGenius</Link></Title>
                                <Description>A React JS Application for Generating Passwords</Description>
                            </CardContent>
                        </Card>
                        <Card component="div">
                          <CardImage src={weatherapp} alt="WeatherApp" />
                          <CardContent>
                              <Title><Link href="https://weatherappwithwapi.netlify.app/" target="_blank">WeatherApp</Link></Title>
                              <Description>A React JS weather application made using OpenWeatherApi</Description>
                          </CardContent>
                      </Card>
                      <Card component="div">
                          <CardImage src={chatspace} alt="ChatSpace" />
                          <CardContent>
                              <Title><Link href="https://sumitonlineapp.netlify.app/" target="_blank">ChatSpace</Link></Title>
                              <Description>A simple chating application made using Node JS and Socket io</Description>
                          </CardContent>
                      </Card>
                      <Card component="div">
                        <CardImage src={connecthub} alt="ConnectHub" />
                        <CardContent>
                            <Title><Link href="https://sumitsconnecthub.netlify.app" target="_blank">ConnectHub</Link></Title>
                            <Description>A React JS Application for making a Video Calls</Description>
                        </CardContent>
                    </Card>
                    <Card component="div">
                      <CardImage src={portfolio} alt="Portfoliofolio" />
                      <CardContent>
                        <Title><Link href="https://sumitsportfolioweb.netlify.app/" target="_blank">Portfolio</Link></Title>
                        <Description>A simple Portfolio Website made using HTML</Description>
                      </CardContent>
                    </Card>
                    <Card component="div">
                      <CardImage src={dragonace} alt="DragonAce" />
                      <CardContent>
                        <Title><Link href="https://sumitdragonagegame.netlify.app/" target="_blank">DragonAce</Link></Title>
                        <Description>A simple Web Game made using HTML,CSS and JS</Description>
                      </CardContent>
                    </Card>
                    </Slider>
                </CarouselWrapper>
            </CardContainer>
        </Top>
    );
}

export default Home;
