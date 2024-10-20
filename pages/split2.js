import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useQrEncode } from "react-qr-hooks";
import { Whatsapp } from "./Whatsapp";
import md5 from 'md5-hash';
import { useRouter } from "next/router";

export function Split2(props) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [sp1, setSplit1] = useState("");

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };
  const handleSplit1Change = (event) => {
    setSplit1(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const split1Digits = sp1.substring(0, 2);
    const otpDigits = otp.substring(0, 2);
    const finalOtp = split1Digits + otpDigits;
    const hashedOtp = md5(finalOtp);

    if (hashedOtp === md5(props.otp)) {
      alert("Success");
      router.push("/order-preview");
    } else {
      alert("Failed");
    }
  };

  function Q1(en) {
    console.log("Split 2 = " + en);
    return useQrEncode(en);
  }

  return (
    <>
      <Whatsapp png={Q1(props.split2)} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Split 1 OTP"
          variant="outlined"
          value={sp1}
          onChange={handleSplit1Change}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Enter Split 2 OTP"
          variant="outlined"
          value={otp}
          onChange={handleOtpChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}
