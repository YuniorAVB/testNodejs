const jwt = require("jsonwebtoken");
const { TOKEN_SECRECT } = require("../config/config");
const User = require("../models/Users");

module.exports = async function (req, res, next) {
  const { user, password } = req.body;
  const userSearch = await User.findOne({
    where: { user: user, password: password },
  });

  if (userSearch) {
    const token = jwt.sign({ id_user: userSearch.id_user }, TOKEN_SECRECT);
    next();
  }
};
