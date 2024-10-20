import React from "react";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import { Otp } from "./Otp";

const App = () => {
  function generateOTP() { 
    let digits = '0123456789'; 
    let OTP = ''; 
    let len = digits.length;
    for (let i = 0; i < 4; i++) { 
        OTP += digits[Math.floor(Math.random() * len)]; 
    } 
    return OTP;
  }
  
  return (
    
    <Layout title = 'payment'>
       <Grid item md={29} xs={12}>
          
      <Card>
    <Typography variant="h1" component="h1">
         Payment Page
       </Typography>
    </Card>
    </Grid>
      <Typography variant="h1">Split 1</Typography>
      <Otp otp={generateOTP()} />
      <Typography variant="h1">The Split 2 segment would have been sent to the WhatsApp number you provided</Typography>
      {/* <Split1 pad1={splitQr(1)} pad2={splitQr(2)}/> */}
      </Layout>
    
  );
};

export default App;
