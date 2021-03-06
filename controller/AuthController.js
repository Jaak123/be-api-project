const Users = require("../users/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  const data = req.body;
  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    console.log(oldUser);
    if (oldUser) {
      return res.status(400).json({ success: false, message: "user not find" });
    }
    var hashedPassword = await bcrypt.hashSync(data.password, 10);
    data.password = hashedPassword;
    data.role == 0 ? (data.role_id = 1) : (data.role_id = data.role);
    data.created_date = Date("Y-m-d");
    data.last_activity = Date("Y-m-d h:m:s");

    Users.create(data)
      .then((data) => {
        email = data.email;
        const token = jwt.sign(
          { user_id: data._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        res.status(200).json({
          success: true,
          data: data,
          token: token,
        });
        return;
      })
      .catch(next);
  } else {
    return res.json({
      error: "The input field is empty",
    });
  }
};
const login = async (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  if (!(body.email || body.password)) {
    res.json({ message: "таны имейл эсвэл нууц үг буруу байна" });
  }
  email = body.email;
  const oldUser = await Users.findOne({
    email,
  });
  if (!oldUser) {
    return res.json({ message: "Хэрэглэгч бүртгэлгүй байна" });
  }
  if (oldUser && (await bcrypt.compare(body.password, oldUser.password))) {
    const token = jwt.sign(
      { user_id: oldUser._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );
    res.json({
      success: true,
      data: oldUser,
      token: token,
    });
  }
};
module.exports = { register, login };
