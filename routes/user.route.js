const path = require("path");
const express = require("express");
const { getAllUsers, createUser, updateUser, deleteUser } = require("../controller/user.controller");
const router = express.Router()
express().use(express.urlencoded({ extended: true }));
express().use(express.json());

router.get('/userlist', getAllUsers);
router.get('/register', (req, res) => {
    console.log(path.join(__dirname, "../views/index.html"));
    res.status(200).sendFile(path.join(__dirname, "../views/index.html"));

});

router.post('/register', createUser);

router.put('/update/:id', updateUser);

router.delete('/delete/:id', deleteUser);

module.exports = router;