module.exports = function(sequelize, DataTypes) {
    var Popularity = sequelize.define("Popularity", {
      account_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      }
    });
  
    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Post.belongsTo(models.Celeb, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Popularity;
  };