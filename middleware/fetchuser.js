var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Srutiisacutie';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object 
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        if (!data.user || !data.user.id) {
            return res.status(401).send({ error: "Invalid token payload" });
        }
        req.user = data.user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;
