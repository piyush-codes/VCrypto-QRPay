import React from "react";
import { Split1 } from "./split1";
import { Split2 } from "./split2"
import md5 from 'md5-hash'
export function Otp(props)
{
    function splitQr(pad,otp){
        
        console.log("OTP= "+md5(otp));
        // console.log("OTP= "+otp);
        let split1=otp.slice(0,2);
        let split2=otp.slice(2,4);
      
        if(pad===1){
          let digits = '0123456789';
          split1+=digits[Math.floor(Math.random() * 10)];
          split1+=digits[Math.floor(Math.random() * 10)];
          // console.log("Split 1="+split1);
          return split1;
        }
        else{
          let digits = '0123456789';
          split2+=digits[Math.floor(Math.random() * 10)];
          split2+=digits[Math.floor(Math.random() * 10)];
          // console.log("Split 2="+split2);
          return split2;
        }
      }
    
      return(
      <>
       <Split1 split1={splitQr(1,props.otp)} />
       <Split2 split2={splitQr(2,props.otp)} otp={props.otp} split1={splitQr(1,props.otp)}/>

      </>
      );
      
}