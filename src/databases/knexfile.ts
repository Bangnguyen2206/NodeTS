// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knex_database",

      // change to your db user
      user: "postgres",
      password: "bangnguyen",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
