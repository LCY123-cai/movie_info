const UserController = require('./controllers/Usercontroller')
const MovieController = require('./controllers/MovieController')
const AuthenticatePolicy = require('./policies/AuthenticatePolicy')
// 后台接口请求搭建
module.exports = (app) => {
  app.post('/users/login', UserController.login)
  app.get('/users/:id',
    AuthenticatePolicy.isValidToken,
    UserController.getUserById
  )
  app.put('/users/:id', UserController.update)
  app.delete('/users/:id', UserController.delete)
  app.post('/users', UserController.register)

  app.post('/movies',
    AuthenticatePolicy.isValidToken,
    MovieController.create
  )
  app.put('/movies/:id',
    AuthenticatePolicy.isValidToken,
    MovieController.update
  )
  app.get('/movies/:id', MovieController.getByid)
  app.get('/movies', MovieController.getAll)
  app.delete('/movies/:id', MovieController.delete)
}
