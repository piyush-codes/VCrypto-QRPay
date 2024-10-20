import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export function Whatsapp(props) {
  const type = 'image/png'; // Image type (cannot be gif due to API restriction!)
  const baseUrl = "https://graph.facebook.com/v18.0/xx"; // Phone number of sender
  const [phone, setPhone] = useState("");
  
  // Function to handle sending the image
  const sendImage = () => {
    // Check if phone number is valid
    console.log(props.png);
    if (!phone.trim()) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Convert base64 image to File object
    const byteString = atob(props.png.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([uintArray], { type });
    const file = new File([blob], "qr.png", { type });
    // Prepare data for sending
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    formData.append("messaging_product", "whatsapp");

    // Send image
    fetch(`${baseUrl}/media`, {
      method: 'POST',
      body: formData,
      headers: { Authorization: "Bearer xx" } // Replace xxx with your actual authorization token
    })
    .then(response => response.json())
    .then(response => {
      // Send the uploaded image to the recipient
      console.log(response);
      fetch(`${baseUrl}/messages`, {
        method: 'POST',
        body: JSON.stringify({
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: phone,
          type: "image",
          image: response
        }),
        headers: {
          Authorization: "Bearer xx", // Replace xxx with your actual authorization token
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error sending message:", error));
    })
    .catch(error => console.error("Error uploading image:", error));
  };

  return (
    <div>
      <TextField
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
      />
      {phone && <Button onClick={sendImage} variant="contained" color="primary">Send Image</Button>}
    </div>
  );
}
