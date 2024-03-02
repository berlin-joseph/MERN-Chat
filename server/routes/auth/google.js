const express = require("express");
const {
  google,
  callback,
  success,
  failure,
} = require("../../controller/auth/google");
const router = express.Router();

router.route("/auth/google").get(google);
router.route("/auth/google/callback").get(callback);
router.route("/auth/google/success").get(success);
router.route("/auth/google/failure").get(failure);

module.exports = router;
