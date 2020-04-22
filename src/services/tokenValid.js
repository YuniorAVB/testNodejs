const jwt = require("jsonwebtoken");
const Users = require("../models/users");
const { TOKEN_SECRECT } = require("../config/config");

module.exports = async function (req, res, next) {
  try {
    const token = req.headers["x-access-token"];

    const decoded = jwt.verify(token, TOKEN_SECRECT);

    const userSearch = await Users.findOne({
      where: { id_user: decoded.id_user },
    });

    if (userSearch) {
      req.user.id_user = userSearch.id_user;
      next();
    }
  } catch (err) {
    res.send("error");
  }
};
