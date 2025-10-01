import * as React from 'react';
import {ContactInfo, EnquiryFrom, StatsSection, BreadCrump, Map} from "../index"
import { styled } from '@mui/material/styles';
import {Grid, Container} from '@mui/material';

export default function Contact() {
  return (
    <>
      <BreadCrump title="Contact"/>
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
