const express = require("express");

require("dotenv").config();

const app = express();

const mongoose = require("mongoose");

 mongoose.connect(process.env.CONNECTION_STRING, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 });

 const db = mongoose.connection;

 db.on("error", console.error.bind(console, "connection eroor :"));
 db.once("open", function () {
   console.log("base de données connectée avec succès yé zied ..!!");
 });

// mongoose.connect(
//   `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ac-c1y8eto-shard-00-00.9u11hct.mongodb.net:27017,ac-c1y8eto-shard-00-01.9u11hct.mongodb.net:27017,ac-c1y8eto-shard-00-02.9u11hct.mongodb.net:27017/?ssl=true&replicaSet=atlas-rpqi67-shard-0&authSource=admin&retryWrites=true&w=majority`,
//   () => {
//     console.log("conected to mongoDb");
//   }
// );
