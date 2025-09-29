import * as React from 'react';
import EnquiryFrom from "../pages/ContactForm/EnquiryForm"
import ContactInfo from "../pages/ContactForm/ContactInfo"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Typography} from '@mui/material';
import Map from "../pages/ContactForm/Map"
import StatsSection from "./ContactForm/StatsSection"
import BannerElephant from "../components/BannerElephant"

export default function Contact() {
  return (
    <>
    <BannerElephant/>
      <Container sx={{ marginTop : "25px"}}>
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
