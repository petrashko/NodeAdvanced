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
    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5ea8d7135e585723b5db28ff')
        },
        {
            $set: {completed: true}
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Users').findOneAndUpdate(
    {
        _id: new ObjectID('5ea268bfb8139b2e106239af')
    },
    {
        $set: {name: 'Andrew'},
        $inc: {age: 1}
    },
    {
        returnOriginal: false
    }
    ).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('Error:', err);
    });
    */
    
    client.close();
});