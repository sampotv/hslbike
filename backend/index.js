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
    mongoose.connect("mongodb://88.112.129.105:27017/hslbike");
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

//Get all the stations from database search full table for distinct stations
app.get('/Stationsdistinct', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select distinct DepartureStationId, DepartureStationName from 2021_05 ORDER BY DepartureStationId ASC', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

//Get all the stations from database table stations and print id, name, address
app.get('/Stations', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select distinct ID, Nimi, Osoite from stations ORDER BY ID ASC', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

//Get longest distance drives and the start point
app.get('/Statdis', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select distinct DepartureStationId, DepartureStationName, CoveredDistance from 2021_05 ORDER BY CoveredDistance DESC limit 500', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

//Get average duration of trips
app.get('/AverageDuration', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select round(avg(Duration),0) as AverageDuration from 2021_05', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

//Get average distance of trips
app.get('/AverageDistance', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select round(avg(CoveredDistance),0) as AverageDistance from 2021_05', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

//Get average distance of trips
app.get('/AverageDistance', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select round(avg(CoveredDistance),0) as AverageDistance from 2021_05', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

//Get top10 departure stations 2021 05
app.get('/MostDeparture10_05', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select DepartureStationName, count(*) as Occurrence from 2021_05 group by DepartureStationName order by Occurrence DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("departurestations fetched");
            res.send(results);
        })
    })
})

//Get top10 return stations 2021 05
app.get('/MostReturn10_05', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select ReturnStationName, count(*) as Occurrence from 2021_05 group by ReturnStationName order by Occurrence DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("returnstations fetched");
            res.send(results);
        })
    })
})
//Get top10 departure stations 2021 06
app.get('/MostDeparture10_06', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select DepartureStationName, count(*) as Occurrence from 2021_06 group by DepartureStationName order by Occurrence DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("departurestations fetched");
            res.send(results);
        })
    })
})

//Get top10 return stations 2021 06
app.get('/MostReturn10_06', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select ReturnStationName, count(*) as Occurrence from 2021_06 group by ReturnStationName order by Occurrence DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("returnstations fetched");
            res.send(results);
        })
    })
})
//Get top10 departure stations 2021 07
app.get('/MostDeparture10_07', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select DepartureStationName, count(*) as Occurrence from 2021_07 group by DepartureStationName order by Occurrence DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("departurestations fetched");
            res.send(results);
        })
    })
})

//Get top10 return stations 2021 07
app.get('/MostReturn10_07', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select ReturnStationName, count(*) as Occurrence from 2021_07 group by ReturnStationName order by Occurrence DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("returnstations fetched");
            res.send(results);
        })
    })
})
//Get all departure stations 2021 05
app.get('/MostDepartureAll05', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select DepartureStationName, count(*) as Occurrence from 2021_05 group by DepartureStationName order by Occurrence DESC', function (error, results) {
            if (error) throw error;
            console.log("departurestations fetched");
            res.send(results);
        })
    })
})

//Get all return stations from 2021 05
app.get('/MostReturnAll05', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select ReturnStationName, count(*) as Occurrence from 2021_05 group by ReturnStationName order by Occurrence DESC', function (error, results) {
            if (error) throw error;
            console.log("returnstations fetched");
            res.send(results);
        })
    })
})
//Get all departure stations 2021 06
app.get('/MostDepartureAll06', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select DepartureStationName, count(*) as Occurrence from 2021_06 group by DepartureStationName order by Occurrence DESC', function (error, results) {
            if (error) throw error;
            console.log("departurestations fetched");
            res.send(results);
        })
    })
})

//Get all return stations from 2021 06
app.get('/MostReturnAll06', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select ReturnStationName, count(*) as Occurrence from 2021_06 group by ReturnStationName order by Occurrence DESC', function (error, results) {
            if (error) throw error;
            console.log("returnstations fetched");
            res.send(results);
        })
    })
})
//Get all departure stations 2021 07
app.get('/MostDepartureAll07', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select DepartureStationName, count(*) as Occurrence from 2021_07 group by DepartureStationName order by Occurrence DESC', function (error, results) {
            if (error) throw error;
            console.log("departurestations fetched");
            res.send(results);
        })
    })
})

//Get all return stations from 2021 07
app.get('/MostReturnAll07', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select ReturnStationName, count(*) as Occurrence from 2021_07 group by ReturnStationName order by Occurrence DESC', function (error, results) {
            if (error) throw error;
            console.log("returnstations fetched");
            res.send(results);
        })
    })
})

//Count the top10 busiest rental days from 2021 05
app.get('/top10day05', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select count(*) as cnt, date(Departure) as Departure_date from 2021_05 group by Departure_date order by count(*) desc limit 10', function (error, results) {
            if (error) throw error;
            console.log("Days fetched");
            res.send(results);
        })
    })
})
//Count the top10 busiest rental days from 2021 06
app.get('/top10day06', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select count(*) as cnt, date(Departure) as Departure_date from 2021_06 group by Departure_date order by cnt desc limit 10',
        function (error, results) {
            if (error) throw error;
            console.log("Days fetched");
            res.send(results);
        })
    })
})
//Count the top10 busiest rental days from 2021 07
app.get('/top10day07', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select count(*) as cnt, date(Departure) as Departure_date from 2021_07 group by Departure_date order by cnt desc limit 10', function (error, results) {
            if (error) throw error;
            console.log("Days fetched");
            res.send(results);
        })
    })
})
//Get longest time drives and the start point
app.get('/Statdur', function(req, res) {
    dbConn.getConnection(function() {
        dbConn.query('select distinct DepartureStationId, DepartureStationName, Duration from 2021_05 ORDER BY Duration DESC limit 10', function (error, results) {
            if (error) throw error;
            console.log("Stations fetched");
            res.send(results);
        })
    })
})

app.get("/",(req,res)=>{
    res.send("testing")

});
//describe port 5000 to make database calls
app.listen(5000);
/*PORT=5000;
app.listen(process.env.PORT | PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
*/