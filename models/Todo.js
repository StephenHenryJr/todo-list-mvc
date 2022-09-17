const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
}, {collection : 'todos'})

// Allows us to use our schema definition. 
// Todo is ouw model name in this example
module.exports = mongoose.model('Todo', TodoSchema)