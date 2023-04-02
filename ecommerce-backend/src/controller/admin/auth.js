const User = require('../../models/user');
const jwd = require('jsonwebtoken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'Admin already registered'
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
                username: Math.random().toString(),
                role: 'admin'
            });

            _user.save((error, data) => {
                console.log(data);
                if (error) {
                    return res.status(400).json({
                        message: 'Something went wrong'
                    });
                }

                if (data) {
                    return res.status(201).json({
                        message: 'Admin sussess'
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

                if (user.authenticate(req.body.password) && user.role === 'admin') {
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

// exports.requireSingin = (req, res, next) => {
//     const token = req.headers.authorrization.split(" ")[1];
//     const user = jwd.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     // console.log(token);
//     next();
//     //jwd.decode()
// }