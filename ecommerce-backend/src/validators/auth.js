const {check, validationResult} = require('express-validator');

exports.validateSignupRequest = [
    check('firstName').notEmpty().withMessage('firstName is required'),
    check('lastName').notEmpty().withMessage('lastName is required'),
    check('email').isEmail().withMessage('Valid Email is required'),
    check('password').isLength({ min: 8 }).withMessage('Mật khẩu phải dài hơn 8 ký tự')
];

exports.validateSigninRequest = [
    check('email').isEmail().withMessage('Valid Email is required'),
    check('password').isLength({ min: 8 }).withMessage('Mật khẩu phải dài hơn 8 ký tự')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req); //validationResult
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}