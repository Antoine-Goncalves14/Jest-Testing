const todoModel = require('../model/todo.model');

exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await todoModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (e) {
    next(e);
  }
};
