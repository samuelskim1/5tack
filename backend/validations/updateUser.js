const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateUpdateUser = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Email is invalid'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 3, max: 20 })
        .withMessage('Username must be between 3 and 20 characters'),
    handleValidationErrors
];

module.exports = validateUpdateUser;