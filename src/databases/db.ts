const knex = require("knex");
const knexfile = require("./knexfile");

// but instead pull values in via env vars or
// even better with a config library like
// convict

// to create knex instance so db access can be mocked
// for tests

const db = knex(knexfile.development);
export default db;
