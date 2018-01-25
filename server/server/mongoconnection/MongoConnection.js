var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Airbnb"
var ObjectID = require("bson-objectid");
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = 
        {
            "title" : "Prime 3 Storey Cape Town Penthouse",
            "type" : "Private room in apartment",
            "generalDesc" : "The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.",
            "guestAccess" : "Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.",
            "others" : "",
            "price" : 140,
            "currency" : "USD",
            "amenities" : [
                "television",
                "laptop",
                "shower",
                "wifi"
            ],
            "imageUrl" : "https://a0.muscache.com/im/pictures/3898743/a70e3172_original.jpg?aki_policy=xx_large",
            "ownerId" : "5a14658891ceed29f1e9d548",
            "address" : {
                "country" : "United Kingdom",
                "city" : "tamra",
                "street" : "Abby Road",
                "number" : "23",
                "lat" : 31.1461,
                "lng" : 34.8516
            },
            "theSpace" : {
                "description" : "This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects",
                "guests" : 2,
                "beds" : 2,
                "bedrooms" : 1
            },
            "reviews" : [
                {
                    "id" : "5a14658891ceed29f1e9d548",
                    "title" : "Very small but clean room",
                    "content" : "Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in",
                    "rating" : 3,
                    "date" : "DECEMBER 19 2017"
                }
            ],
            "occupancy" : [ ]
        }
        ;
    db.collection("homes").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });


// this.
//     console.log(ObjectID(id))
//    MongoClient.connect(url, function (err, db) {
//        if (err) throw err;
//        db.collection("homes").findOne({_id:ObjectID(id)},callback);
//    })
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     db.collection("homes").find({}, function (err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     });
// });