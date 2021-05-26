const TodoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await TodoModel.create(req.body);

    res.status(201).json(createdModel);
  } catch (e) {
    next(e);
  }
};

exports.getTodos = async (req, res, next) => {
  try {    
    const allTodos = await TodoModel.find({});

    res.status(200).json(allTodos);
  } catch (e) {
    next(e);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const todoModel = await TodoModel.findById(req.params.todoId);

    if (todoModel) {
      res.status(200).json(todoModel);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    next(e);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(req.params.todoId, req.body, {
      new: true,
      useFindAndModify: false
    });

    if (updatedTodo) {
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    next(e);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);

    if (deletedTodo) {
      res.status(200).json(deletedTodo);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    next(e);
  }
};