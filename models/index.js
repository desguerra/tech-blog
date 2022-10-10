const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations, a user can make many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
});

// create reverse association, a post can belong to ONE user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});


module.exports = { User, Post, Comment };