
const Users = require("../controllers/user.controller");
const db = require("../models");
const Kullanicilar = db.users;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.FalciBoard = (req, res) => {
  res.status(200).send("Falci Content.");
};
  exports.YFalciBoard = (req, res) => {
    res.status(200).send("Yönetici Falci Content.");
  };
    exports.HFalciBoard = (req, res) => {
      res.status(200).send("Havuz Falci Content.");
}; 