var express = require('express');
var router = express.Router();



// var fs = require('fs');

var user = require('../config/models');






var sql = require("mssql");

router.get("/user1", function(req, res) {
    // var query = "select * from Persons";
    // user(res, query);
    // console.log(response);
    sql.close()
    sql.connect(user.dbConfig, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Persons', function(err, finaldata) {

            if (err) console.log(err)

            // send records as a response
            // res.send(recordset);
            res.send(finaldata.recordsets);
            console.log(finaldata.recordsets);
            // res.json({
            //     data = "recordset"
            // })
        });
    });



});

router.post("/insertdata", function(req, res) {
    // var query = "select * from Persons";
    // user(res, query);
    // console.log(response);
    var PersonID = req.body.PersonID;
    var LastName = req.body.LastName;
    var FirstName = req.body.FirstName;
    var Address = req.body.Address;
    var City = req.body.City
    sql.close()
    sql.connect(user.dbConfig, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        var adddetail = "INSERT INTO Persons(PersonID, LastName, FirstName, Address, City) VALUES ('" + PersonID + "','" + LastName + "','" + FirstName + "' ,'" + Address + "','" + City + "')";

        // query to the database and get the records
        request.query(adddetail, function(err, finaldata) {

            if (err) console.log(err)

            // send records as a response
            // res.send(recordset);
            res.send(finaldata);
            // console.log(finaldata.recordsets);
            // res.json({
            //     data = "recordset"
            // })
        });
    });



});

router.post("/deletebyid", function(req, res) {
    // var query = "select * from Persons";
    // user(res, query);
    // console.log(response);
    var PersonID = req.body.PersonID;

    sql.close()
    sql.connect(user.dbConfig, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        var adddetail = "DELETE FROM Persons where PersonID ='" + PersonID + "'";

        // query to the database and get the records
        request.query(adddetail, function(err, finaldata) {

            if (err) console.log(err)

            // send records as a response
            // res.send(recordset);
            res.send(finaldata);
            // console.log(finaldata.recordsets);
            // res.json({
            //     data = "recordset"
            // })
        });
    });



});

router.post("/updatebyid", function(req, res) {
    // var query = "select * from Persons";
    // user(res, query);
    // console.log(response);
    var PersonID = req.body.PersonID;
    var LastName = req.body.LastName;
    var FirstName = req.body.FirstName;


    sql.close()
    sql.connect(user.dbConfig, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        var adddetail = "UPDATE  Persons SET LastName  ='" + LastName + "',FirstName  ='" + FirstName + "' where PersonID ='" + PersonID + "'";

        // query to the database and get the records
        request.query(adddetail, function(err, finaldata) {

            if (err) console.log(err)

            // send records as a response
            // res.send(recordset);
            res.send(finaldata);
            // console.log(finaldata.recordsets);
            // res.json({
            //     data = "recordset"
            // })
        });
    });



});







module.exports = router;