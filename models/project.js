'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.project.belongsTo(models.user)
      models.project.belongsToMany(models.category, {
        through: 'categoriesProjects',
        onDelete: 'CASCADE'
      })
    }
  }
  project.init({
    githubLink: {
      type: DataTypes.TEXT,
      validate: { isUrl: true }
    },
    name: DataTypes.STRING,
    deployLink: {
      type: DataTypes.TEXT,
      validate: { isUrl: true }
    },
    description: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};