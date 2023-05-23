var mysql = require('mysql');

//database information
var dbConn = mysql.createPool({
	host:'localhost',
	user:'hsluser',
	password:'hslpass',
	database:'hsldb',
  acquireTimeout: 1000,
  connectionLimit: 100
});
/*dbConn.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Time to bike!');
	}
});
*/

module.exports  = dbConn;