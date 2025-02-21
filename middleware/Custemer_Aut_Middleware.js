
// custemer_Aut_Middleware.js

const jwt = require("jsonwebtoken");

const SECRET_KEY = "your-secret-key"; // Use the same secret key as in loginControler.js

const customerAuthMiddleware = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies

    if (!token) {
        res.clearCookie("token"); // Ensure any existing cookie is cleared
        return res.status(403).redirect("/login"); // Redirect to login page if no token is found
    }

    try {

        const decoded = jwt.verify(token, SECRET_KEY) // verufy token

        req.custemer = decoded;  // Store user info in request object

        next();
        
    } catch (error) {
/*         
        console.log(`Invalid Token in customerAuthMiddleware: ${error.message}`.bgRed);
        return res.status(403).redirect("/login"); // Redirect if token is invalid */

        res.clearCookie("token"); // Remove invalid token
        return res.redirect("/login"); // Redirect to login on error
    }
}

exports.customerAuthMiddleware = customerAuthMiddleware;