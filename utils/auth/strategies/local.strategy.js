const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');


const UserService = require('./../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy(
  {
    // esto es para manejar el email por que la estrategia es con username y el login es con email
    usernameField:'email',
    passwordField:'password'
  }, async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      
      done(null, user);
    } catch (error) {
      done(error, false);
    }

  }
);

module.exports = LocalStrategy;