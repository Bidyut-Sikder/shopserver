const { CustomerListServices, DeleteCustomerServices, CreateCustomerServices, UpdateCustomerServices, CustomerListServicesById } = require("../Services/CustomerServices")







exports.CreateCustomer = async (req, res) => {
    const result = await CreateCustomerServices(req)

    res.status(200).json({ result })
}
exports.CustomerList = async (req, res) => {
    const result = await CustomerListServices(req)
    res.status(200).json({ result })
}
exports.CustomerListById = async (req, res) => {
    const result = await CustomerListServicesById(req)
    res.status(200).json({ result })
}
exports.UpdateCustomer = async (req, res) => {
    const result = await UpdateCustomerServices(req)
    res.status(200).json({ result })
}
exports.DeleteCustomer = async (req, res) => {
    const result = await DeleteCustomerServices(req)
    res.status(200).json({ result })
}


















