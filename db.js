const mysql = require('mysql');
const config = require('./db_config.json');

let pool = mysql.createPool(config);

function getConnection(callback) {
	pool.getConnection(function (err, conn) {
		if (!err) {
			callback(conn);
			console.log('커넥션 풀 생성');
		} else {
			console.log(err);
		}
	});
}

module.exports = getConnection;
