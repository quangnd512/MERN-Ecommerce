const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

// Routers user
const authRouters = require('./routers/auth');
const adminRouters = require('./routers/admin/auth');
const categoryRoutes = require('./routers/category');
const productRoutes = require('./routers/product');

env.config();

// mongodb connect
// mongodb+srv://root:<password>@cluster0.n7lirtr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.n7lirtr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('DB connect');
});

app.use(express.json());

// use userRouter
app.use('/api', authRouters);
app.use('/api', adminRouters);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});