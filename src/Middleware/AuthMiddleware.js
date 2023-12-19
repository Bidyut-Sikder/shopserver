const { Decode } = require("../Helper/TokenHelper")




exports.AuthMiddleware = async (req, res, next) => {

    let token = req.headers.token
    if (!token) {
        token = req.cookies['token']
    }
    const decoded = await Decode(token)

    if (decoded === null) {
        res.status(401).json({ status: 'fail', message: 'Unauthorized' })
    } else {
        const { email, id } = decoded
        req.headers.email = email
        req.headers.id = id
        next()
    }

}









































