import * as React from 'react';
import { Grid, Box } from '@mui/material';

export default function MyChartBox2(props) {
  const { icon1, title1, chart1, icon2, title2, chart2 } = props;

  return (
    <Grid
      container
      sx={{
        width: '100%',
        display: 'flex',
        minHeight: '200px',
        boxShadow: 3,
        justifyContent: 'space-evenly',
        marginTop: '20px',
        flexWrap: 'wrap',
      }}
    >
      {/* Line Chart - Smaller */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        lg={4}
        sx={{
          minHeight: '200px',
          padding: '20px',
          borderRight: '1px dotted #d3d3d3',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            marginBottom: '20px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Box sx={{ marginRight: '15px' }}>{icon1}</Box>
          <Box>{title1}</Box>
        </Box>
        <Box sx={{ marginBottom: '20px' }}>{chart1}</Box>
      </Grid>

      {/* Stacked Bar Chart - Bigger */}
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        lg={8}
        sx={{
          minHeight: '200px',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            marginBottom: '20px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Box sx={{ marginRight: '15px' }}>{icon2}</Box>
          <Box>{title2}</Box>
        </Box>
        <Box sx={{ marginBottom: '20px' }}>{chart2}</Box>
      </Grid>
    </Grid>
  );
}
