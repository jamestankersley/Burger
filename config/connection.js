var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection({
    host: "izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "db52msbol953s8qy",
    password: "l4vq8fg7cmegloe2",
    port: 3306,
    database: "c0pci31wnd53autd"
  })
};

connection.connect();

module.exports = connection;