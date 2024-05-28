const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation');
const { features } = require('process');

const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    dboper.insertDocument(db, { name: "Vadonut",
     image: "images/buffet.png",
      label: "New",
      price: "19.99",
      description: "Featuring...",
      featured: false},
        "promotions")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dboper.findDocuments(db, "promotions");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Featuring..." }, "promotions");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return dboper.findDocuments(db, "promotions");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
                            
            // return db.dropCollection("promotions");
            client.close();
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);

            return client.close();
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));



