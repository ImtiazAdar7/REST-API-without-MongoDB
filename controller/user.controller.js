userList = require("../model/users.model");

const getAllUsers = (req, res) => {
    res.status(200).json({ userList });
}


const createUser = (req, res) => {
    const { id, name, age, address } = req.body;
    console.log(id);
    console.log(name);
    console.log(age);
    console.log(address);
    const newUser = { id, name, age, address };
    userList.push({ newUser });

    res.status(201).json({ userList });
}

const updateUser = (req, res) => {
    const id = req.params.id;
    userList.filter((user) =>
        user.id == id).map((selected) => {
            selected.name = req.body.name;
            selected.age = req.body.age;
            selected.address = req.body.address;
        });
    res.status(201).json(userList);
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    userList = userList.filter((user) => user.id != id);
    res.status(200).json(userList);
}
module.exports = { getAllUsers, createUser, updateUser, deleteUser }