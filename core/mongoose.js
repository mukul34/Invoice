import mongoose from 'mongoose';
import { DATABASE } from '../config/index.js';

let connection = null;

const mongoUri = DATABASE.URI;
const mongoDbName = DATABASE.DB_NAME;

const makeDBConnection = async () => {
    try {
        console.log(mongoUri);

        if (!connection) {
            connection = await mongoose.connect(mongoUri, {
                dbName: mongoDbName,
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
            });
        }
        console.log("DB CONNECTED!!!!!!");
        return 'connection established';
    }
    catch (err) {
        console.log('Error in Mongo DB Connection : ', err);
        // throw internalServer('Error in Mongo DB Connection');
    }
};

export { makeDBConnection };
