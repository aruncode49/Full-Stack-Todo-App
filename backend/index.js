const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");

const PORT = 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to full stack todo app!");
});

// create todo
app.post("/create", (req, res) => {
  const data = req.body;
  const parsedData = createTodoSchema.safeParse(data);
  if (!parsedData.success) {
    res.status(400).json({
      msg: "Invalid Input Data",
    });
  }
});

// get all todos
app.get("/todos", (req, res) => {});

// update todo
app.put("/update", (req, res) => {
  const data = req.body;
  const parsedData = updateTodoSchema.safeParse(data);
  if (!parsedData.success) {
    res.status(400).json({
      msg: "Invalid Input Data",
    });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
