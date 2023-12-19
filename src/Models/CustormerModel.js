

const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    phone: { type: String, required: true },
    name: { type: String },
    fatherName: { type: String },
    grandFatherName: { type: String },
    merchandise: { type: String },
    qty: { type: String },
    bookDebts: { type: String },
    email:{
        type :String ,
        required:true
    }

}, {
    timestamps: true,
    versionKey: false
})








const CustomerModel = mongoose.model('customers', CustomerSchema)

module.exports = CustomerModel





































































