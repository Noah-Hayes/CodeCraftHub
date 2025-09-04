// User-related services (e.g., registration, profile updates)

const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new User({ ...userData, password: hashedPassword });
    return await newUser.save();
};