module.exports = function(app) {
    app.post('/add_booking', function(req, res) {
        // console.log(req.body);


        // var source = req.body.success;
        // var destination = req.body.destination;
        // var mobileNo = req.body.mobileNo;
        // var duration = req.body.duration;
        // var date = req.body.date;
        // var vehicleType = req.body.vehicleType;
        // var image = req.files.image;
        // var filename = req.body.filename;

        // var filename = Date.now();

        // image.mv('uploads/' + filename, function(err) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log('File uploaded!');
        //         console.log('/uploads/' + filename + '.jpg');
        //     }

        // })

        console.log(req.files);
        // console.log(req.file);
        // console.log(req.body);


        res.json({
            success: 1
        });
    });
}