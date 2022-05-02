import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddciaiq",
        "template_8nlujym",
        form.current,
        "SoPcOhPC-mb3M5FWV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate("/projects");
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Details</h1>
          <div className="c-info">
            <div className="c-info-item">
              <PhoneAndroidIcon className="c-icon" />
              +358401640654
            </div>
            <div className="c-info-item">
              <EmailIcon className="c-icon" />
              progress.suman@gmail.com
            </div>
            <div className="c-info-item">
              <HomeIcon className="c-icon" />
              Yo-kylä 10D, 20540, Turku
            </div>
          </div>
        </div>
        <div className="c-right">
          {/* <p className="c-desc">Let's get in Touch</p> */}
          <form ref={form}>
            <Card
              sx={{
                width: "500px",
                height: "650px",
                mt: 1,
              }}
            >
              <CardContent sx={{ p: "5px", m: "5px" }}>
                <Typography variant="h3" sx={{ color: "lightseagreen" }}>
                  contact me
                </Typography>{" "}
                <br /> <br />
                <TextField
                  label="Enter Your Name ..."
                  variant="outlined"
                  sx={{ width: "60%", mb: 5 }}
                  name="name"
                />{" "}
                <br />
                <TextField
                  label="Enter Subject ..."
                  variant="outlined"
                  sx={{ width: "60%", mb: 5 }}
                  name="subject"
                />{" "}
                <br />
                <TextField
                  label="Enter Your Email ..."
                  variant="outlined"
                  sx={{ width: "60%", mb: 5 }}
                  name="email"
                />{" "}
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Enter Your Message"
                  multiline
                  rows={4}
                  sx={{ width: "60%", mb: 5 }}
                  name="message"
                />{" "}
                <br />
                <Button
                  variant="contained"
                  onClick={sendEmail}
                  sx={{ bgcolor: "lightseagreen", width: "30%" }}
                >
                  Send
                </Button>{" "}
                <br />
                <br />
                {done && "Mesage Sent"}
              </CardContent>
            </Card>
          </form>
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name..." name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
