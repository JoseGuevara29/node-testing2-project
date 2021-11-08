// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/quotes",
    },
    migration: {
      directory: "./data/migrations",
    },
    seed: {
      directory: ".data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/test",
    },
    migration: {
      directory: "./data/migrations",
    },
    seed: {
      directory: ".data/seeds",
    },
  },
};
