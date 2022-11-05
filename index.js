const nodemailer = require("nodemailer");

async function main(){

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "vaibhavihole05@gmail.com",
      pass: "arrzyhckhcdhysrq"
    }});

    const mail_options = {
      from: "vaibhavihole05@gmail.com",
      to: 'itspinki05@gmail.com',
      subject: 'Test Email to Team',
      text: 'Sample Text'
    };

    smtpTransport.sendMail(mail_options, (error, response)=>{
      if(error){
        console.log(error);
      }else{
        console.log('Email sent');
      }
      smtpTransport.close();
    });
}

main().catch(console.error);