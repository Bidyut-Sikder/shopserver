const { Encode } = require("../Helper/TokenHelper")
const UserModel = require("../Models/UserModel")
const { EmailSend } = require("../Utilities/EmailHandler")




exports.UserOTPServices = async (req) => {


    try {
        let email = req.params.email

        let otp = Math.floor(100000 + Math.random() * 900000)

        let EmailText = `Your Code is ${otp}`
        let EmailSub = "Email Authtication"
        await EmailSend(email, EmailText, EmailSub)

        await UserModel.updateOne({ email: email }, { $set: { otp: otp } }, { upsert: true })

        return { status: 'success', message: '6 digit code has been sent to your email.' }

    } catch (error) {
        console.log(error.toString())
        return { status: 'fail', message: 'Something went wrong.' }

    }


}



exports.VeryfyOTPServices = async (req) => {

    try {
        const email = req.params.email;
        const otp = req.params.otp;


        if (email && otp != '0') {
            const user = await UserModel.findOne({ email: email })
            if (user.otp == otp) {
                const token = await Encode(email, user._id)
               
                await UserModel.updateOne({ email: email }, { $set: { otp: "0" } })
               
                return { status: 'success', message: 'OTP verified.', token: token }
            } else {
                return { status: 'fail', message: 'OTP does not match.' }
            }
        } else {
            return { status: 'fail', message: 'OTP does not match.' }

        }
















        // if (!email || !otp) {
        //     throw new Error('Please provide all details')
        // } else {
        //     const userData = await UserModel.findOne({ email: email });
        //     if (!userData) {
        //         throw new Error('No account found with this email');
        //     } else {
        //         if (userData.otp == otp) {
        //             //delete the OTP from database after verification
        //             await UserModel.updateOne({ email: email }, { $set: { otp: "0" } })
        //             return { status: 'Verified', message: "You are verified." }
        //         } else {
        //             return { status: 'Not Verified', message: 'The provided OTP does not match our records.' };

        //         }
        //     }
        //}

    } catch (error) {
        return { status: 'fail', message: 'something went wrong.' }
    }



}

























