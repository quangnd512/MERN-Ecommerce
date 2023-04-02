exports.requireSingin = (req, res, next) => {
    const token = req.headers.authorrization.split(" ")[1];
    const user = jwd.verify(token, process.env.JWT_SECRET);
    req.user = user;
    // console.log(token);
    next();
    //jwd.decode()
}