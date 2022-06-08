const bcrypt = require("bcrypt");

bcrypt.hash("password", 10).then((data) => console.log(data));
