# hslbike

Application in this project is done by using node.js and MySQL for back-end and React for front-end. Application uses HSL citybike data and prints out statistics from many different points of view. Project is done as a pre-assignment for Solita Dev Academy Finland 2023. Exercise information is availbale here https://github.com/solita/dev-academy-2023-exercise

Data was modified so that journeys shorter than 10 meters were deleted. Rentals longer than 3 hours were also deleted to get rid of the false data.

Application is running on my own Ubuntu server at http://88.112.129.105:3000 Server was built just to get this project running on it. Parts for the server was salvaged from friends, thanks guys.

Modified databases can be downloaded from http://88.112.129.105/hsldb/ Project can be run on own computer after git pull. Back-end is started from /backend/ node index.js front-end is started from /frontend/ npm start. Git file hsldb.sql holds the information to create MySQL database. To get data into tables .csv files need to be loaded into database with following commands:
load data infile '2021-05.csv' into table 2021_05 fields terminated by ',' ignore 1 rows;
load data infile '2021-06.csv' into table 2021_06 fields terminated by ',' ignore 1 rows;
load data infile '2021-07.csv' into table 2021_07 fields terminated by ',' ignore 1 rows;
load data infile 'stations.csv' into table stations fields terminated by ',' lines terminated by '\r\n' ignore 1 rows;

To get application work locally you need to change 88.112.129.105 in all frontend components.