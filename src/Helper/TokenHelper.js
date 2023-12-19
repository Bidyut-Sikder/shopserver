const jwt = require('jsonwebtoken')

exports.Encode = async (email, id) => {
    let KEY = '123-abc-ABC'
    let PAYLOAD = {
        email,id
    }
    let EXPIRES = {
        expiresIn: '24h',
    }
    let token =  jwt.sign(PAYLOAD, KEY, EXPIRES)
    return token
}



exports.Decode = async (token) => {
    try {
        let KEY = '123-abc-ABC'

        return  jwt.verify(token, KEY)
    } catch (error) {
        return null
    }
}






















