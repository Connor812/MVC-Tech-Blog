const User = require('../models/User');

const userData = [
    {
        // Test User
        username: 'JohnDoe',
        email: 'johndoe123@123.com',
        password: '123456789'
    },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;