const bcrypt = require("bcryptjs");

const hasPass = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = { hasPass };
