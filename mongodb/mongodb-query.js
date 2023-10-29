const { connectToMongo } = require('./mongodb-connection.js');

async function main() {
    const email = process.argv[2];

    try {
        const db = await connectToMongo();
        const collection = db.collection('user_profiles');

        const result = await collection.findOne({ email: email });

        if (result) {
            const userData = {
                username: result.username,
                age: result.age,
                dob: result.dob,
                contact: result.contact,
                email: result.email,
            };

            console.log(JSON.stringify(userData));
        } else {
            console.log('User not found.');
        }
    } catch (error) {
        console.error(error);
    } finally {
        process.exit();
    }
}

main();
