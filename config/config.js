require('dotenv').config()
module.exports = {
  development: {
    database: 'cm',
    dialect: 'postgres'
  },
  test: {
    database: 'cm_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
