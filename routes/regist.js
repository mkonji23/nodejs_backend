var express = require('express');
var router = express.Router();
const getConnection = require('../db');

// 등록
router.post('/', function(req, res, next) {
        var user = {
        'userid': req.body.userid,
        'password':req.body.password,
        'name': req.body.name,
        'address': req.body.address
    };
    getConnection((conn) => {
        conn.query('insert into users set ?', user, function(err, result) {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).send('success');
        });
        conn.release();
    });
});

//조회
router.get('/select',function(req, res){
    getConnection((conn)=>{
        conn.query('select * from users;', function (error, results, fields) {
            if (error) throw error;
            // results를 보낸다.(이게 데이터임)
             res.status(200).send(results);
          });
          conn.release();
    })
})
module.exports = router;