const todoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await todoModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (e) {
    next(e);
  }
};

exports.getTodos = async (req, res, next) => {
  try {    
    const allTodos = await todoModel.find({});
    res.status(200).json(allTodos);
  } catch (e) {
    next(e);
  }
};