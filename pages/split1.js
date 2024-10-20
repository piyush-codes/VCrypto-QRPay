import React from "react";
import { useQrEncode } from "react-qr-hooks";
export function Split1(props){
    // console.log(props);
    function Q1(en){
    console.log("Split 1 = " +en)
    const enc=useQrEncode(en);
    return enc;
    }
return <img src={Q1(props.split1)} alt="split1"/>
}