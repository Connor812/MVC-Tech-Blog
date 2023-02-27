const sequelize = require('../config/connection');
const seedBlogPosts = require('./blog-posts');
const seedComments = require('./comments');
const seedUserData = require('./user');

const seedAll = async () => {
  await sequelize.sync({ force: true });

    await seedUserData();

    await seedBlogPosts();

    await seedComments();

  process.exit(0);
};

seedAll();