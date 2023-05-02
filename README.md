# todo-list-mvc
Built todo list application but this time using MVC to organize my code.

- Routers
- Controllers
- Models

Used Mongoose here to assist with out MongoDB.

This code sets up an Express server with two routes: / and /todos, and connects to a MongoDB database via Mongoose.

Specifically, the code does the following:

- Imports required dependencies: express, ./config/database, ./routes/home, and ./routes/todos
- Loads environment variables using dotenv
- Sets the view engine to EJS
- Serves static files from the public directory
- Parses incoming request bodies using middleware functions express.urlencoded() and express.json()
- Registers the two routes using the app.use() method
- Starts the server on the specified PORT using app.listen() function
