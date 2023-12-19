const UserModel = require("../Models/UserModel")
const { UserOTPServices, VeryfyOTPServices } = require("../Services/UserServices")



exports.UserOTP = async (req, res) => {
    const result = await UserOTPServices(req)
    return res.status(200).json({ result })
}


exports.VeryfyOTP = async (req, res) => {
    try {

        const result = await VeryfyOTPServices(req)
        if (result['status'] == 'success') {
            let cookiesOption = {
                expiresIn: new Date(Date.now() + 24 * 60 * 60 * 1000)
            }
            res.cookie('token', result['token'], cookiesOption)
        }

        return res.status(200).json({ result })
    } catch (error) {
        res.status(401).json({ status: 'fail', message: 'something went wrong.' })
    }
}



exports.Logout = async (req, res) => {
    try {
        let email = req.headers.email;

        let Options = {
            expiresIn: new Date(Date.now() - 24 * 60 * 60 * 1000)
        }

        res.cookie('token', '', Options)
        //await UserModel.deleteOne({ email: email })
        res.status(200).json({ status: 'success', message: 'Logout successfull.' })


    } catch (error) {
        res.status(201).json({ status: 'fail', message: 'Something went wrong.' })

    }
}
























