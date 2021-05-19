const express = require("express");
const User = require("./models").user;
const PORT = 4001;
const app = express();

app.get("/users", async (req, res) => {
  try {
    console.log("i got a request for the userList");
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log("Server is running on ", PORT));
