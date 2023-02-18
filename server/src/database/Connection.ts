import mongoose from 'mongoose';
import {config} from '../config/config';
import Logger from "../utils/Logger";

export default class Connection {
    constructor() {
        this.configDB();
        this.connectDB();
    }

    configDB() {
        mongoose.set('strictQuery', true);
    }

    connectDB() {
        mongoose.connect(config.mongo.url)
            .then(() => Logger.info('Successfully connected to DB'))
            .catch((err) => Logger.error(err));
    }
}