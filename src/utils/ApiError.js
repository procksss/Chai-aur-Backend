class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went worng",
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
        // used to find error in the stack trace
    }
}

export { ApiError };

// In JavaScript, the super keyword is used to call methods on the parent class. In the context of your ApiError class, super(message) is calling the constructor of the Error class, which is the parent class of ApiError.

// When you extend a class in JavaScript, such as ApiError extending Error, you must call super() in the constructor of the child class to invoke the constructor of the parent class. This ensures that any setup logic in the parent class constructor is executed before the child class constructor runs.

// In your ApiError class, super(message) is passing the message argument to the Error constructor. This sets the error message for the ApiError instance being created.

// So, in summary, the super(message) call in your ApiError class constructor is necessary to initialize the error message using the constructor of the parent Error class. This allows you to utilize the functionality provided by the Error class while extending it with custom behavior in your ApiError class.

// In JavaScript, when you define a class using the extends keyword, you are creating a subclass that inherits from a parent class. In the case of class ApiError extends Error, Error is the parent class.

// The Error class is a built-in JavaScript class that represents an error object. It is commonly used for throwing and handling exceptions. By extending Error, you are creating a custom error class (ApiError) that inherits all the properties and methods of the Error class.

// When you define a subclass with extends, the subclass inherits the constructor, properties, and methods of the parent class. This allows you to create custom error classes with additional functionality tailored to your application's needs while leveraging the error-handling capabilities provided by the built-in Error class.
