const dotenv = require("dotenv");

dotenv.config({ path: "/.env" });

const app = require("./app.js");

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`App running on port ${app}`);
});
