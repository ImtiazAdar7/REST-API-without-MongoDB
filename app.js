const express = require("express");
const app = express();

const userRouter = require("./routes/user.route");
const userList = require("./model/users.model");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users',userRouter);


app.get('/', (req, res)=>{
    res.send("This is just the homepage");
})


module.exports = app;