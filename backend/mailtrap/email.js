import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async(email, verificationToken)=>{
    const recipient =[{email}]

    try {
       const response = await mailtrapClient.send({
        from:sender,
        to:recipient,
        subject:"Verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
        category:"Email Verification"
       });

       console.log("Email sent successfully",response);
    } catch (error) {
        console.error(`Error sending verification`, error)

        throw new Error (`Error sending verfication email: ${error}`)
        
    }
}

export const sendWelcomeEmail = async (email,name)=>{

    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid:"448efde3-9cd6-444c-b212-66c805bea987",
            template_variables:{
                company_info_name:"Auth Mern",
                name:name,
            }
        })

        console.log("Welcome eamil sent successfully", response);
    } catch (error) {

        console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
        
    }

}