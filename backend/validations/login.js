const { check } = require("express-validator");

const handleValidationErrors = require('./handleValidationErrors');

// middleware to validate keys in the body of a request to login a user
const validateLoginInput = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username cannot be blank :(')
        .matches(/^[^\W]+$/) // should alphanumeric + underscore only
        .withMessage('Username is invalid')
        .isLength({ min: 3, max: 30 })
        .withMessage('Username must be between 3 and 30 characters'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password cannot be blank :(')
        .isLength({ min: 6, max: 30 })
        .withMessage('Password must be between 6 and 30 characters'),
    handleValidationErrors
];

module.exports = validateLoginInput;