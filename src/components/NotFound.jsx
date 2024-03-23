import React from 'react'
import notfound from "../web_images/404notfound.jpg";
import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container= styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`

function NotFound() {
  const navigate=useNavigate();
  const handleGoBack= ()=>{
    navigate("/");
  }
  return (
    <Container>
      <img src={notfound} alt="404 Error Page"/>
      <Button variant='contained' onClick={handleGoBack} style={{backgroundColor:"green", marginTop:"5px"}}>GO BACK</Button>
    </Container>
  )
}

export default NotFound