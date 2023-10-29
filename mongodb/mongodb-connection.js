const { MongoClient } = require('mongodb');

async function connectToMongo() {
    const uri = 'mongodb+srv://Arpan:arpanguviassignment@cluster0.lmhwpun.mongodb.net/';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        return client.db('use_profiles_db');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = {
    connectToMongo,
};




