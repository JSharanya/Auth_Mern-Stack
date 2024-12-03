import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();


const TOKEN = "3425014c44a3f1e7f9d5210cd86a7b04";
const ENDPOINT = "http://send.api.mailtrap.io/";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  endpoint:ENDPOINT
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "test Sharan",
};

// const recipients = [
//   {
//     email: "jegadeesandevy17@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);