import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import * as nodemailer from "nodemailer"

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: 'umokeuchennaofficial@gmail.com',
        pass: "official12345"
    },
});

exports.sendEmailNotification = functions.firestore
 .document("messages/{docId}")
 .onCreate(async (snap)=>{
    const data = snap.data()

    const mailOptions = {
        from: "umokeuchennaofficial@gmail.com",
        to:"umokeuchenna2020@gmail.com",
        subject: `New Message from ${data.name}`,
        text: `Name: ${data.name} \nEmail: ${data.email}\nMessage: ${data.message}`
    };

    try{
           await transporter.sendMail(mailOptions);
           console.log('Email sent successfully') 
    }catch(err){
        console.log("Email was not sent!!",err)

    }
 })  