// // var mysql = require('mysql');
// // var mysql = require('mssql');
// // //MySql Database conection

// // var connection = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "root",

// //     // database: "mydb"

// //     database: "deportDB"

// // });

// // connection.connect(function(err) {
// //     // if (err) throw err;
// //     if (err) {
// //         console.log("Error", err);
// //     } else {
// //         console.log("MySql database Connected!");
// //         // connection.query("CREATE DATABASE deportDB", function(err, result) {
// //         //     if (err) {
// //         //         console.log(err)
// //         //     } else {
// //         //         console.log("Database created");
// //         //     }

// //         // });

// //         // var sql = "CREATE TABLE users (id INT PRIMARY KEY, fName VARCHAR(255),lName VARCHAR(255),emailId VARCHAR(255),userType VARCHAR(255),fcmId VARCHAR(255),deviceId VARCHAR(255),deviceType VARCHAR(255),mobileNo VARCHAR(255),userStatus VARCHAR(255),registerStatus VARCHAR(255))";
// //         // connection.query(sql, function(err, result) {
// //         //     if (err) throw err;
// //         //     console.log("Table created");
// //         // });
// //     }

// // });


// // module.exports = connection;


// var sqlDb = require("mssql");

// // config for your database
// var config = {
//     "user": "sa",
//     "password": "krishna",
//     "database": "test",
//     'server': 'localhost\\SQLEXPRESS',
//     "dialect": "mssql",
//     "port": 1433,
//     "dialectOptions": {
//         "instanceName": "SQLEXPRESS"
//     },

// };


// // connect to your database
// // var connection = sql.connect(config, function(err) {

// //     if (err) console.log(err);

// //     // create Request object
// //     var request = new sql.Request();
// //     console.log("success");

// //     // query to the database and get the records
// //     // request.query('select * from Persons', function(err, recordset) {

// //     //     if (err) console.log(err)

// //     //     // send records as a response
// //     //     // res.send(recordset);
// //     //     console.log(recordset);

// //     // });
// // });

// // exports.executeSql = function(sql, callback) {
// //     var conn = new sqlDb.Connection(config);
// //     conn.connect()
// //         .then(function() {
// //             var req = new sqlDb.Request(conn);
// //             req.query(sql)
// //                 .then(function(recordset) {
// //                     callback(recordset);
// //                 })
// //                 .catch(function(err) {
// //                     console.log(err)
// //                     callback(null, err);

// //                 })
// //         })
// //         .catch(function(err) {
// //             console.log(err);
// //             callback(null, err);
// //         })
// // }




// // module.exports = request;


var sql = require("mssql");

// config for your database
exports.dbConfig = {
    "user": "sa",
    "password": "krishna",
    "database": "test",
    'server': 'localhost\\SQLEXPRESS',
    "dialect": "mssql",
    "port": 1433,
    "dialectOptions": {
        "instanceName": "SQLEXPRESS"
    },

};


// var executeQuery = function(res, query) {
//     sql.connect(dbConfig, function(err) {
//         if (err) {
//             console.log("Error while connecting database :- " + err);
//             res.send(err);
//         } else {
//             // create Request object
//             var request = new sql.Request();
//             // query to the database
//             request.query(query, function(err, res) {
//                 if (err) {
//                     console.log("Error while querying database :- " + err);
//                     // res.send(err);
//                     console.log(err)
//                 } else {
//                     // res.send(res);
//                     console.log(res)
//                     res.json({
//                         data: res
//                     })
//                 }
//             });
//         }
//     });
// }

// module.exports = executeQuery;