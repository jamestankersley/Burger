var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection({
    host: "s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "hqmjl4jtm5zuyop5",
    password: "hxv0j56l1c1d1n2e",
    database: "gqv8fq0w5sdouwan"
  })
};

connection.connect();

module.exports = connection;