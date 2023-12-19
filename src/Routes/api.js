
const express = require('express');
const { UserOTP, VeryfyOTP, Logout } = require('../Controller/UserController');
const { AuthMiddleware } = require('../Middleware/AuthMiddleware');
const { CreateCustomer, CustomerList, UpdateCustomer, DeleteCustomer, CustomerListById } = require('../Controller/CustomerController');
const router = express.Router()


//user api

router.get('/userOTP/:email',UserOTP)
router.post('/VeryfyOTP/:email/:otp', VeryfyOTP)
router.get('/Logout', AuthMiddleware, Logout)


//customer apis

router.post('/CreateCustomer', AuthMiddleware, CreateCustomer)
router.get('/CustomerList/', AuthMiddleware, CustomerList)
router.get('/CustomerListById/:id', AuthMiddleware, CustomerListById)
router.post('/UpdateCustomer/:id', AuthMiddleware, UpdateCustomer)
router.get('/DeleteCustomer/:id', AuthMiddleware, DeleteCustomer)





//404 page






module.exports = router;


































