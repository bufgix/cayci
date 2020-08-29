const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  googleId: String,
  name: String,
});

UserSchema.statics.findOneOrCreate = function findOneOrCreate(
  condition,
  doc,
  callback
) {
  const self = this;
  self.findOne(condition, (err, result) => {
    return result
      ? callback(err, result)
      : self.create(doc, (err, result) => {
          return callback(err, result);
        });
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
