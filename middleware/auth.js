const Users = require("../users/users");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  if (data) {
    const oldUser = Users.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({ success: false, message: "user not find" });
    }
    var hashedPassword = bcrypt.hashSync(data.password, 10);
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
    // let newUser = new Users({
    //   _id: new mongoose.Types.ObjectId(),
    //   name: req.body.name,
    //   email: req.body.email,
    //   phone: req.body.phone,
    //   password: req.body.password,
    //   role_id: req.body.role_id,
    //   created_date: req.body.created_date,
    //   last_activity: req.body.last_activity,
    // });
    // newUser
    //   .save()
    //   .then((data) => {
    //     res.status(201).json({
    //       message: "Handling POST requests to /users",
    //       createdProduct: data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(201).json({
    //       message: "Handling POST requests to /products",
    //       createdProduct: err,
    //     });
    //   });
  } else {
    return res.json({
      error: "The input field is empty",
    });
  }
};
module.exports = { register };
