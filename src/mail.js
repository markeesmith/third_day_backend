const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "e329919649273e",
//     pass: "d8b9a864430ce7"
//   }
// });

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const contactNewWorkEmail = ({ firstName, lastName, email, phone, streetAddress, city, state, zipCode, chkCustom, chkRemodel, chkAddition, budget, description }) => `
    <h3>Customer Details</h3>
    
    <ul>
        <p>Name:  ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
    </ul>
    
    
    <h3>Customer Address</h3>
    
    <ul>
        <p>${streetAddress}<br>${city}, ${state} ${zipCode}</p>
    </ul>
    
    
    <h3>Type of Work</h3>
    
    <ul>
        <p>Build a Custom Home: <strong>${chkCustom ? "YES" : "NO"}</strong></p>
        <p>Remodel a Home: <strong>${chkRemodel ? "YES" : "NO"}</strong></p>
        <p>Addition to Home: <strong>${chkAddition ? "YES" : "NO"}</strong></p>
    </ul>
    
    
    <h3>Requested Work Details</h3>
    
    <ul>
        <p>Project Budget: ${budget}</p>
        <p>Further Detail: </p>
        <p>${description}</p>
    </ul>
`;

const contactResponseEmail = ({ chkCustom, chkRemodel, chkAddition, budget, description }) => `
  <h1>Thank you for reaching out to Third Day Builders!</h1>

  <p>We are currently reviewing your request and will reach out to you as soon as we can.</p>

  <p>Below is a brief outline of your request for your convenience:</p>

  <h3>Type of Work</h3>
    
  <ul>
      <p>Build a Custom Home: <strong>${chkCustom ? "YES" : "NO"}</strong></p>
      <p>Remodel a Home: <strong>${chkRemodel ? "YES" : "NO"}</strong></p>
      <p>Addition to Home: <strong>${chkAddition ? "YES" : "NO"}</strong></p>
  </ul>
  
  
  <h3>Requested Work Details</h3>
  
  <ul>
      <p>Project Budget: ${budget}</p>
      <p>Further Detail: </p>
      <p>${description}</p>
  </ul>

  <p>Thank you again and we look forward to working with you!</p>

  <h3>Third Day Builders</h3>
`;

exports.transport = transport;
exports.contactResponseEmail = contactResponseEmail;
exports.contactNewWorkEmail = contactNewWorkEmail;