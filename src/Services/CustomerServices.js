const CustomerModel = require("../Models/CustormerModel")



exports.CreateCustomerServices = async (req) => {
    try {
        const reqBody=req.body
        reqBody.email=req.headers.email

        const result = await CustomerModel.create(reqBody)

        if (result) {
            return { status: 'success', message: 'Created successfully..' }

        } else {
            return { status: 'fail', message: 'Something went wrong.' }

        }

    } catch (error) {
        return { status: 'fail', message: 'Something went wrong.' }
    }



}



exports.CustomerListServices = async (req) => {
    try {

        //const result = await CustomerModel.find().sort({ 'updatedAt' :-1})
        const result = await CustomerModel.find({email:req.headers.email}).sort({ 'updatedAt' :-1})

        if (result) {
            return { status: 'success', result }

        } else {
            return { status: 'fail', message: 'Something went wrong.' }

        }

    } catch (error) {
        return { status: 'fail', message: 'Something went wrong.' }
    }
}
exports.CustomerListServicesById = async (req) => {

    try {

        const result = await CustomerModel.find({_id:req.params.id})

        if (result) {
            return { status: 'success',data:result[0] }

        } else {
            return { status: 'fail', message: 'Something went wrong.' }

        }

    } catch (error) {
        return { status: 'fail', message: 'Something went wrong.' }
    }
}

exports.UpdateCustomerServices = async (req) => {
    try {

        const result = await CustomerModel.updateOne({ _id: req.params.id }, { $set: req.body })

        if (result) {
            return { status: 'success', message: 'Updated successfully..' }

        } else {
            return { status: 'fail', message: 'Something went wrong.' }

        }

    } catch (error) {
        return { status: 'fail', message: 'Something went wrong.' }
    }
}


exports.DeleteCustomerServices = async (req) => {
    try {
        const result = await CustomerModel.deleteOne({ _id: req.params.id })

        if (result.deletedCount != 0) {
            return { status: 'success', message: 'deleted successfully.' }
        } else {
            return { status: 'fail', message: 'data is not avilable.' }

        }
    } catch (error) {
        return { status: 'fail', message: 'Something went wrong.' }

    }
}