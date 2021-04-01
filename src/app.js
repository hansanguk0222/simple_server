const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/arr", (req, res) => {
  res.json({ data: [1, 2, 3, 4, 5] });
});

app.get("/obj", (req, res) => {
  res.json({ data: { 1: "apple", 2: "banana" } });
});

app.post("/login", (req, res) => {
  console.log("로그인");
  const { email, pw } = req.body;
  console.log(email, pw);
  if (email === "abc" && pw === "123") {
    return res.status(200).json({ message: "welcome" });
  } else {
    return res.status(400).json({ message: "not verified user" });
  }
});

app.get("/", (req, res) => {
  return res.send("hi");
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
