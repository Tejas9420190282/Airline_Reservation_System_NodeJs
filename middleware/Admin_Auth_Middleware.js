
// adminAuthMiddleware.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = "secret-key";

const adminAuthMiddleware = (req, res, next) => {

    const token = req.cookies.token     // read token from cookies

    if (!token) {
        
        return res.status(403).redirect("/login");
    }

    try {

        const decoded = jwt.verify(token, SECRET_KEY);

        req.admin = decoded;    // Attach decoded user info to request
        
        next();
        
    } catch (error) {
        
        return res.status(403).render("dashboard", { message: "Invalid or expired session. Please log in again." });
    }
}

exports.adminAuthMiddleware = adminAuthMiddleware;