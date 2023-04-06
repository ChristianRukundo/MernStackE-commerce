const { Users } = require("../models/Users");

const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

/** ======REGISTER USER =================== */

router.post("/register", (req, res) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SEC
    ).toString(),
    isAdmin: req.body.isAdmin,
  });
  user
    .save()
    .then((createdUser) =>
      res.status(200).json({ success: true, data: createdUser })
    )
    .catch((err) => res.status(200).json({ err }));
});

/** ======LOGIN USER =================== */

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ name: req.body.name });
    !user && res.status(401).json("Wrong Credentials");
    const hashedPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.PASSWORD_SEC
    );
    const orginalPassword = hashedPassword.toString(cryptoJs.enc.Utf8);

    orginalPassword !== req.body.password &&
      res.status(401).json("Wrong Credentials");

    const acessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({
      ...others,
      acessToken,
    });
  } catch (error) {
    console.log(error);
  }
});

/** ======UPDATE USER =================== */

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SEC
    ).toString();
  }

  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

/** ======DELETE USER =================== */

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

/** ======GET USER =================== */

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
/** ======GET ALL USER =================== */

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await Users.find().sort({ _id: -1 }).limit(1)
      : await Users.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

/** ======GET USER STATS =================== */

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await Users.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
      
      res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
