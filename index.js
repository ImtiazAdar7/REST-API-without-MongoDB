require("dotenv").config();
const cors = require("cors");
const app = require('./app');
const PORT = process.env.PORT || 4000;
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running at the http://localhost:${PORT}`);
});