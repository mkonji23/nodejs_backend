var express = require('express');
var router = express.Router();
const getConnection = require('../db');

// 등록(저장)
router.post('/', function (req, res, next) {
	var user = {
		userid: req.body.userid,
		password: req.body.password,
		name: req.body.name,
		address: req.body.address,
	};
	getConnection(conn => {
		conn.query('insert into users set ?', user, function (err, result) {
			conn.release();
			if (err) {
				console.log('에러발생!');
				console.error(err);
				throw err;
			} else {
				res.status(200).send('success');
			}
		});
	});
});

//조회
router.get('/select', function (req, res) {
	getConnection(conn => {
		conn.query('select * from users Order by createdTime desc;', function (
			error,
			results,
			fields,
		) {
			if (error) throw error;
			// results를 보낸다.(이게 데이터임)
			console.log(results);
			res.status(200).send(results);
		});
		conn.release();
	});
});
module.exports = router;
