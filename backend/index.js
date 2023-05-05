const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const dbConn = require("./db/dbconfig.js");
//const mongoose = require("mongoose");  decided to go with MySQL instead of mongodb
//require("./db/dbconfig.js");
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb",extended: true}));


/*const dbcon = async () =>{
    mongoose.connect("mongodb://localhost:27017/hslbike");
    const bikedataSchema = new mongoose.Schema({});
    const bikedata = mongoose.model("bikedata", bikedataSchema);
    const data = await bikedata.find();
    console.warn(data)
}*/

//Just used to test that the database connection works and print some value to the browser
app.get('/Duration', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select count(*) from 2021_05 where Duration=20', function (error, results) {
            if (error) throw error;
            console.log("Durations fetched");
            res.send(results);
        })
    })
})

//Get all the stations from database
app.get('/Stations', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select distinct DepartureStationId, DepartureStationName from 2021_05', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})


app.get("/",(req,res)=>{
    res.send("testing")

});
app.listen(5000);
/*PORT=5000;
app.listen(process.env.PORT | PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
*/