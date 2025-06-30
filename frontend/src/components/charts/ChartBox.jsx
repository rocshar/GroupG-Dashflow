import * as React from 'react';
import {Grid, Box, CardContent, Typography, Stack, Card} from '@mui/material';


export default function MyChartBox(props) {
    const {icon1, title1, chart1, icon2, title2, chart2,} = props
    return (
      <>
          <Grid container spacing={2}
                sx={{display: 'flex', minHeight: '200px', flexWrap: 'nowrap', flexDirection: 'column'}}>
              <Grid item xs={12} sx={{marginBottom: '20px'}}>
                  <Box sx={{fontWeight: 'bold', fontSize: '24px'}}>
                      Hi, Welcome Back 👋
                  </Box>
              </Grid>

              <Grid container spacing={2} sx={{display: 'flex', flexWrap: 'nowrap'}}>
                  <Grid
                      item
                      xs={6}
                      sx={{
                          boxShadow: 3,
                          padding: '20px',
                          minHeight: '200px',
                          flex: 1,
                          borderRadius: '15px'
                      }}
                  >
                      <Box sx={{
                          marginBottom: '20px',
                          fontWeight: 'bold',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center'
                      }}>
                          <Box sx={{marginRight: '15px'}}>{icon1}</Box>
                          <Box>{title1}</Box>
                      </Box>
                      <Box sx={{marginBottom: '20px'}}>{chart1}</Box>
                  </Grid>


                  <Grid
                      item
                      xs={6}
                      sx={{
                          boxShadow: 3,
                          padding: '20px',
                          minHeight: '200px',
                          flex: 1,
                          borderRadius: '15px'
                      }}
                  >
                      <Box sx={{
                          marginBottom: '20px',
                          fontWeight: 'bold',
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center'
                      }}>
                          <Box sx={{marginRight: '15px'}}>{icon2}</Box>
                          <Box>{title2}</Box>
                      </Box>
                      <Box sx={{marginBottom: '20px'}}>{chart2}</Box>
                  </Grid>
              </Grid>
          </Grid>
      </>
    );
}
