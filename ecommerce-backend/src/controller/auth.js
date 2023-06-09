const User = require('../models/user.js');
const jwd = require('jsonwebtoken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'User already registered'
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something went wrong'
                    });
                }

                if (data) {
                    return res.status(201).json({
                        message: 'User sussess'
                    })
                }
            });
        });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ error });
            if (user) {

                if (user.authenticate(req.body.password)) {
                    const token = jwd.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id,
                            firstName,
                            lastName,
                            email,
                            role,
                            fullName
                        }
                    });
                } else {
                    return res.status(400).json({
                        message: 'Invalid Password'
                    })
                }

            } else {
                return res.status(400).json({ message: "Something wwent wrong" });
            }
        });
}

exports.requireSingin = (req, res, next) => {
    const token = req.headers.authorrization.split(" ")[1];
    const user = jwd.verify(token, process.env.JWT_SECRET);
    req.user = user;
    // console.log(token);
    next();
    //jwd.decode()
}