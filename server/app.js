const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./routes/index");
const errorHandling = require("./middleware/errorHandling");

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
