import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const DATABASE = {
    URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME
};

export {
    PORT,
    DATABASE
}