const BlogPost = require('./blog-posts');
const Comment = require('./comments');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPost_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPost_id'
})

module.exports = { User, BlogPost, Comment }