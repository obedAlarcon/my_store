const { Strategy } = require('passport-local');


const AuthService = require('./../../../services/auth.service');
const service = new AuthService();

const LocalStrategy = new Strategy(
  {
    // esto es para manejar el email por que la estrategia es con username y el login es con email
    usernameField:'email',
    passwordField:'password'
  }, 
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
    
      done(null, user);


      } catch (error) {
      done(error, false);
    }

  }
);

module.exports = LocalStrategy;