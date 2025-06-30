import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";




function createData(id, product, img, customer, date, amount, method,status) {
  return { id, product, img, customer, date, amount, method,status };
}

const rows = [
    createData(1143155, "Apple Watch Series 10", "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7K4ref_FV99_VW_34FR+watch-case-46-titanium-gold-cell-s10_VW_34FR+watch-face-46-titanium-gold-s10_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=WVNjN2d2K0IyRWs5TVRBOEoxa3R5RW5TeWJ6QW43NUFnQ2V4cmRFc1VnYkdzNmhoZy9wdXZ1eGxsMlpWR095YjZhM1lKSU1XSjRzVll6MyttdlhpVVNndmdtajNLc0tYa29tMjdSbHJFVEpRQ1BINzRIOVNwOEhydmVpRU1xK21mRHdsU0dZV3ZyVW8rK2VGM0VERmFWQ2Jja3RTcndxVk44c3BUb3hwekd1ZWNXKzRjNm44S3F0NHd6SWZ1Ym96TjR0Mk1vYzhCYkpIdjVHK0VERndjbFZpVXdXemkxaTJaaSs4bUxmcXE3cw","Josh Zerkaa","15 June", 832, "PayPal", "Approved" ),
    createData(2235235, "Sony Playstation 5", "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg","Vikkram Barn","12 June", 900, "PayPal", "Pending" ),
    createData(2342353, "Apple iPad Mini ", "https://ok1.de/images/product_images/info_images/4180_0.jpg","Simon Minter","30 May", 1199, "Credit Card", "Approved" ),
    createData(2357741, "AirPods Pro 2", "https://m.media-amazon.com/images/I/51R8U4qEfAL.jpg","Ethan Payne","12 May", 279, "Debit Card", "Approved" ),
    createData(1234235, "Razer Blade 15", "https://assets2.razerzone.com/images/pnx.assets/a1ee4c5a780a401444be898fe93ade69/thumbnail-blade15-new-model.webp","Tobi Brown","1 April", 920, "PayPal", "Pending" ),

];

export default function MyTableBox(props) {
    const { icon1, title1} = props;
  return (
      <Grid container spacing={2} sx={{
          display: 'flex',
          minHeight: '200px',
          flexWrap: 'nowrap',
          paddingTop: '24px',
          boxShadow: 3,
          padding: '20px',
          flex: 1,
          borderRadius: '15px'
      }}>
          <Grid container direction="column">
              <Box sx={{
                  fontWeight: 'bold',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
              }}>
                  <Box sx={{marginRight: '15px'}}>{icon1}</Box>
                  <Box>{title1}</Box>
              </Box>

              <TableContainer component={Paper}>
                  <Table sx={{minWidth: 1100}} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell>id</TableCell>
                              <TableCell align="right">Product</TableCell>
                              <TableCell align="right">Image</TableCell>
                              <TableCell align="right">Customer</TableCell>
                              <TableCell align="right">Date</TableCell>
                              <TableCell align="right">Amount</TableCell>
                              <TableCell align="right">Method</TableCell>
                              <TableCell align="left">Status</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {rows.map((row) => (
                              <TableRow
                                  key={row.id}
                                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                              >
                                  <TableCell component="th" scope="row">
                                      {row.id}
                                  </TableCell>
                                  <TableCell align="right">{row.product}</TableCell>
                                  <TableCell align="right" className="tableCell"
                                             sx={{width: '170px',}}>

                                      <div className="cellWrapper" style={{display: 'flex', alignItems: 'center'}}>

                                          <img src={row.img} alt="" className="image"
                                               style={{
                                                   maxWidth: '50px',
                                                   maxHeight: '50px',
                                                   objectFit: 'cover',
                                                   marginRight: '10px',
                                               }}/>
                                          {row.product}
                                      </div>
                                  </TableCell>
                                  <TableCell align="right">{row.customer}</TableCell>
                                  <TableCell align="right">{row.date}</TableCell>
                                  <TableCell align="right">{row.amount}</TableCell>
                                  <TableCell align="right">{row.method}</TableCell>
                                  <TableCell className="tableCell">
                                      <span className={`status ${row.status}`} style={{
                                          padding: '7px',
                                          borderRadius: '20px',
                                          ...(row.status === 'Approved' && {
                                              color: 'green',
                                              backgroundColor: 'rgba(0, 128, 0, 0.151)'
                                          }),
                                          ...(row.status === 'Pending' && {
                                              color: 'goldenrod',
                                              backgroundColor: 'rgba(189, 189, 3, 0.103)'
                                          })
                                      }}>{row.status}</span>
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Grid>
      </Grid>
  );
}