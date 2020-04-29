//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    /*
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5ea26f1102071d142017cb25")}).then((results) => {
        console.log(JSON.stringify(results, null, 2));
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    db.collection('Todos').find({}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close();
});