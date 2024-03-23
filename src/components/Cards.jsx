import React from 'react'
import { Box, Typography, styled } from '@mui/material';

const Card = styled(Box)`
    max-width: 350px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 20px 20px;
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
    font-size: 38px;
    font-weight: 1000px;
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

function Cards({ component, src, alt, title, href, description }) {
  return (
    <Link href={href} target="_blank">
        <Card component={component}>
            <CardImage src={src} alt={alt} />
            <CardContent component="div">
                <Title>{title}</Title>
                <Description>{description}</Description>
            </CardContent>
        </Card>
    </Link>
  )
}

export default Cards