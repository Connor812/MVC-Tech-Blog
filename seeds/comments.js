const Comment = require('../models/comments');
const date = require('../utils/helpers');

const commentData = [
    {
        blogPost_id: 1,
        commented_by: 'Connor',
        comment: 'Awesome blogpost!',
        date: date(),
    },
    {
        blogPost_id: 2,
        commented_by: 'Savoy',
        comment: 'Awesome blogpost!',
        date: date(),
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;