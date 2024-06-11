require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { createTodoSchema, updateTodoSchema } = require("./types");
const { Todo } = require("./todo.model");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

// connect mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Mongodb connected successfully!`))
  .catch((err) => console.log(`Error in db connection ${err}`));

app.get("/", (req, res) => {
  res.send("Welcome to full stack todo app!");
});

// create todo
app.post("/create", async (req, res) => {
  const data = req.body;
  const parsedData = createTodoSchema.safeParse(data);
  if (!parsedData.success) {
    res.status(400).json({
      msg: "Invalid Input Data",
    });
  }

  // put data in db
  const todo = await Todo.create({ ...data });

  res.status(201).json({
    msg: "Todo created successfully!",
    todo,
    success: true,
  });
});

// get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json({
    success: true,
    todos,
  });
});

// update todo
app.put("/update", async (req, res) => {
  const data = req.body;
  const parsedData = updateTodoSchema.safeParse(data);
  if (!parsedData.success) {
    res.status(400).json({
      msg: "Invalid Input Data",
    });
  }

  // update completed field
  const updatedTodo = await Todo.findByIdAndUpdate(data.id, {
    completed: true,
  });

  res.status(200).json({
    msg: "Todo updated successfully!",
    success: true,
    updatedTodo,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
