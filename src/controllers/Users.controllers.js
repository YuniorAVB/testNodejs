const Users = require("../models/Users");
const upladImage = require("../services/uploadImg").single("photo");

function create(req, res, next) {
  upladImage(req, res, async function (error) {
    if (!error) {
      const { user, name, password } = req.body;
      const photo = req.file == undefined ? "nophoto.png" : req.file.filename;

      await Users.create({ user, name, password, photo });
      res.json({
        user,
        name,
        password,
        photo,
      });
    }
  });
}

function update(req, res, next) {
  upladImage(req, res, async function (error) {
    const userSearch = await Users.findOne({ id_user: req.user.id_user });
    const photo = req.file == undefined ? userSearch.photo : req.file.filename;

    const { name } = req.body;

    await Users.update(
      { name, photo },
      { where: { id_user: userSearch.id_user } }
    );

    res.json({
      userSearch,
    });
  });
}

async function read(req, res, next) {
  const userSearch = await Users.findOne({
    where: { id_user: 2 },
    attributes: ["photo","user", "name"],
  });
  res.json(userSearch);
}

async function destroy(req, res, next) {
  await Users.destroy({ where: { id_user: req.user.id_user } });
  res.json({ message: "success" });
}

module.exports = {
  create,
  update,
  read,
  destroy,
};
