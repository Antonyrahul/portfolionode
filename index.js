//const crypto = require('crypto')
const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');
var nodemailer = require('nodemailer');




app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors())

app.post("/sendmessage",function(req,res){
console.log(req.body)

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreplyantony96@gmail.com',
      pass: '54199612345anto'
    }
});

var mailOptions = {
  from: 'noreplyantony96@gmail.com',
  to: req.body.email+",antonyrahul14@gmail.com",
  subject: 'Automatic mail recived notification',
  text: 'HI '+req.body.name+'  I will get back to you ASAP\nYour query:-'+req.body.txtmsg
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.json(
        {
            message:"failed"
        }
        )
  } else {
    console.log('Email sent: ' + info.response);
    res.json({
        message:"sent"
    })
  }
});



})



 app.listen(4123, function () {

     console.log("listening on port 4123");
 });
