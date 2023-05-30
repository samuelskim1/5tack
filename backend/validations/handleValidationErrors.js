const { validationResult } = require("express-validator");

// THIS FILE WILL RETURN ERRORS IF ANY VALIDATIONS FAIL

// format validation errors
const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    // if there are errors
    if (!validationErrors.isEmpty()) {
        const errorFormatter = ({ msg }) => msg;
        const errors = validationErrors.formatWith(errorFormatter).mapped();

        const err = Error("Validation Error");
        err.errors = errors;
        // err.statusCode = 400;
        err.title = "Validation Error";
        next(err);
    }
    next();
};

module.exports = handleValidationErrors;
