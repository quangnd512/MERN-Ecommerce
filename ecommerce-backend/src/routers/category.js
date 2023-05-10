const express = require("express");
const { requireSingin, adminMiddleware } = require("../common-middleware");
const { addCategory, getCategories } = require("../controller/category");
const router = express.Router();

router.post('/category/create', requireSingin, adminMiddleware, addCategory);
router.get('/category/getcategory', getCategories);

module.exports = router;