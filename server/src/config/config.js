module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_NAME || "BobsGarage",
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: "./Bobs Garage.sqlite"
    }    
  },
  authentication: {
      jwtSecret: process.env.JWT_SECRET || 'ShhhhDontTellAnyone'
    }
}
// Note: We should store sensitive info in environmental variables.
// This file will look for those or use the default.