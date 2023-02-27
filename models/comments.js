const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
  
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      blogPost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blog_posts',
            key: 'id'
        },
      },
      commented_by: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments',
    }
  );
  
  module.exports = Comment;