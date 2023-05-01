const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateRegisterInput = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Email cannot be blank :(')
        .isEmail()
        .withMessage('Email is invalid'),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username cannot be blank :(')
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password cannot be blank :(')
        .isLength({ min: 6, max: 30 })
        .withMessage('Password must be between 6 and 30 characters'),
    handleValidationErrors
];

module.exports = validateRegisterInput;