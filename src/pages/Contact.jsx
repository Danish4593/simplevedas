import * as React from 'react';
import EnquiryFrom from "../pages/ContactForm/EnquiryForm"
import ContactInfo from "../pages/ContactForm/ContactInfo"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Typography, CardMedia} from '@mui/material';
import Map from "../pages/ContactForm/Map"
import StatsSection from "./ContactForm/StatsSection";
import BreadCrump from "../components/BreadCrump";


export default function Contact() {
  return (
    <>
      <BreadCrump/>
      <Container sx={{ marginTop : "85px"}}>
          <Grid container spacing={2}>
          <Grid size={6}>
            <ContactInfo/>
          </Grid>
          <Grid size={6}>
            <EnquiryFrom/>
          </Grid>
        </Grid>
      <Grid size={12}>
            <Map/>
        </Grid>
        <Grid size={12}>
          <StatsSection/>
        </Grid>
        </Container>
    </>
    
  )
}
