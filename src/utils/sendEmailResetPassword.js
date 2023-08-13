const { sendEmail } = require("./sendEmail");

const sendEmailResetPassword = (email, firstName, frontBaseUrl, code) => {
  sendEmail({
    to: email,
    subject: "Update password",
    html: `
        <div style="max-width: 500px; margin: 50px auto; background-color: #F8FAFC; padding: 30px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; color: #333333;">
        
        <h1 style="color: #007BFF; font-size: 28px; text-align: center; margin-bottom: 20px;">¡Hello ${firstName.toUpperCase()}!</h1>
      
        <p style="font-size: 18px; line-height: 1.6; margin-bottom: 25px; text-align: center;">To update the password please click on the following link:</p>
      
        <div style="text-align: center;">
            <a href="${frontBaseUrl}/reset_password/${code}" style="display: inline-block; background-color: #007BFF; color:    #FFFFFF; text-align: center; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;     font-size: 18px;">¡Update password!</a>
         </div>
    </div>
        `,
  });
};

module.exports = {
  sendEmailResetPassword,
};
