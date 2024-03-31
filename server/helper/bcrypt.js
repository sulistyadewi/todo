const bcrypt = require("bcryptjs");

const hasPass = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};
const comparePass = (password, haspassword) => {
  return bcrypt.compareSync(password, haspassword);
};

module.exports = { hasPass, comparePass };
