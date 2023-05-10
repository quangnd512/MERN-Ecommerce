const Product = require('../models/product');
const shortid = require('shortid');

exports.createProduct = (req, res) => {
    // res.status(200).json({ file: req.files, body: req.body });
    const product = new Product({
        name: req.body.name,
        slug: {
            type: String,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        offer: { type: Number },
        productPictures: [{
            image: { type: String }
        }],
        reviews: [{
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }],
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        updateAt: Date,
    });


};