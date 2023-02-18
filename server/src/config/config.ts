import dotenv from 'dotenv';

dotenv.config()

const ENVIRONMENT = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : "DEVELOPMENT";

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = ENVIRONMENT === "DEVELOPMENT" ? "mongodb://localhost:27017/gotur" : `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@goturcluster.c35c5lx.mongodb.net/live`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}