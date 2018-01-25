var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Airbnb";
var ObjectID = require("bson-objectid");
var homesDb = function () {

    this.getAllHomes = function (callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").find({}).toArray(callback);
        })
    }

    this.getOneHome = function (id, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").findOne({ _id: ObjectID(id) }, callback);
        })
    }
    this.searchHome = function (price, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").find({ price }).toArray(callback);
        })
    }

    this.addReview = function (id, newReview, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").update({ "_id": ObjectID(id) }, { $push: { reviews: newReview } }, callback);
        })
    }
    this.searchByPrice = function (From, To, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").find({ price: { $gt: From }, price: { $lt: To } }).toArray(callback);
        })
    }
    this.searchByGustCity = function (type, vlaue, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").find({address:{$in:{[type]: vlaue}}}).toArray(callback);
        })
    }
    this.bookHome=function(id,dateBook,callback){
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("homes").update({ "_id": ObjectID(id) }, { $push: { occupancy: dateBook } }, callback);
        })
    }   


}
module.exports = new homesDb();