const pool = require('../config/db');

exports.findAll = async () => {
  const { rows } = await pool.query('SELECT * FROM smtp_servers');
  return rows;
};

exports.create = async ({ host, port, username, password }) => {
  const result = await pool.query(
    `INSERT INTO smtp_servers(host, port, username, password)
     VALUES($1, $2, $3, $4) RETURNING *`,
    [host, port, username, password]
  );
  return result.rows[0];
};
