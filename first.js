var mysql = require('mysql');

var con = mysql.createConnection({
	host : 'localhost:3000',
	name : '',
	password : '',
	database : 'forum_database'
});

con.connect(function(err){
if(err) throw err;
console.log('connected');
var sql = "CREATE TABLE tb(name VARCHAR(20), phone INT)";
con.query(sql, function(err) {
	if(err) throw err;
	onsole.log('created');
	});
});